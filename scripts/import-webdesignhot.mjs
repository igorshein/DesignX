/**
 * import-webdesignhot.mjs
 *
 * Batch import of 403 brand DESIGN.md files from WebDesignHot/design-md.
 * Downloads all files, saves to src/originals/webdesignhot/, and generates catalog entries.
 *
 * Format: standard YAML frontmatter + Markdown body
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ORIGINALS_BASE = path.resolve(__dirname, '..', 'src', 'originals', 'webdesignhot');
const CATALOG = path.resolve(__dirname, '..', 'src', 'data', 'catalog.json');
const LISTING_URL = 'https://api.github.com/repos/WebDesignHot/design-md/contents/design-md?per_page=500';

async function fetchJson(url) {
  const resp = await fetch(url, { headers: { 'User-Agent': 'DesignX-Importer/1.0' } });
  if (!resp.ok) throw new Error(`HTTP ${resp.status} ${resp.statusText}`);
  return resp.json();
}

// ─── YAML frontmatter parser (lightweight) ─────────────────────────

function parseYaml(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const lines = m[1].split('\n');
  const result = {};
  let currentKey = null;
  let currentArr = null;

  for (const line of lines) {
    if (/^\s*$/.test(line)) continue;
    // Array item
    if (line.startsWith('  - ') && currentKey) {
      const val = line.replace(/^\s*-\s*/, '').replace(/['"]/g, '').trim();
      if (currentArr) currentArr.push(val);
      continue;
    }
    // Top-level key
    const top = line.match(/^(\w[\w-]*):\s*(.*)$/);
    if (top && !line.startsWith(' ')) {
      currentKey = top[1];
      let val = top[2].trim();
      if (val === '' || val === '|' || val === '>') {
        result[currentKey] = '';
      } else if (val.startsWith('[') && val.endsWith(']')) {
        // Array: [a, b, c]
        currentArr = [];
        result[currentKey] = currentArr;
        const items = val.slice(1, -1).split(',').map(s => s.trim().replace(/['"]/g, ''));
        items.forEach(v => { if (v) currentArr.push(v); });
      } else {
        val = val.replace(/^["']|["']$/g, '');
        result[currentKey] = val;
        currentArr = null;
      }
    }
    // Continuation of multi-line value
    else if (line.startsWith('  ') && currentKey && !line.trim().startsWith('-')) {
      const existing = result[currentKey];
      if (typeof existing === 'string') {
        result[currentKey] = existing + '\n' + line.trim();
      }
    }
  }
  return result;
}

// ─── Token inference ────────────────────────────────────────────────

function inferTokens(yml) {
  const swatch = yml.preview_swatch || [];
  const tags = yml.tags || [];
  const isDark = tags.includes('dark') || (swatch[0] && parseInt(swatch[0].replace('#','').substring(0,2),16) < 128);

  const bg = swatch[0] || (isDark ? '#0a0b0f' : '#ffffff');
  const accent = swatch[1] || '#4da3ff';
  const text = swatch[2] || (isDark ? '#e8ebf0' : '#141414');

  const hasMono = tags.includes('mono');
  const font = hasMono ? 'JetBrains Mono' : 'Inter';

  // infer radius from tags
  let rad = '6px';
  if (tags.includes('rounded')) rad = '12px';
  if (tags.includes('pill') || tags.includes('soft')) rad = '24px';
  if (tags.includes('sharp') || tags.includes('square')) rad = '2px';

  return {
    bg, accent, text,
    bg_elevated: isDark ? '#111318' : '#f5f6f8',
    text_muted: isDark ? '#7a8290' : '#6b7380',
    accent2: swatch[2] || (isDark ? '#7a8290' : '#1856FF'),
    border: isDark ? '#1e2028' : '#e2e5ec',
    success: '#07CA6B', error: '#EA2143',
    font, radius: rad, dark: isDark,
  };
}

function inferAesthetic(yml) {
  const tags = yml.tags || [];
  const cats = yml.categories || [];

  const style = tags.find(t => ['minimal','dark','light','rounded','sharp','glass','brutal','soft','dense','elegant','playful','corporate','luxury'].includes(t));
  if (style) return style;

  const cat = Array.isArray(cats) ? cats[0] : cats;
  if (cat) return String(cat).replace(/_/g, '-').toLowerCase();

  return 'modern';
}

function inferProductTypes(yml) {
  const cats = yml.categories || [];
  if (!Array.isArray(cats) && typeof cats === 'string') return [cats.replace(/_/g, '-').toLowerCase()];
  if (Array.isArray(cats)) return cats.map(c => c.replace(/_/g, '-').toLowerCase());
  return [];
}

// ─── Main ───────────────────────────────────────────────────────────

async function main() {
  console.log('\n═══ Fetching file listing from WebDesignHot ═══\n');
  const listing = await fetchJson(LISTING_URL);
  console.log(`Found ${listing.length} files`);

  const catalog = JSON.parse(fs.readFileSync(CATALOG, 'utf-8'));
  const existingIds = new Set(catalog.design_systems.map(d => d.id));
  let added = 0, skipped = 0, failed = 0;

  // Download in batches of 10
  const BATCH = 10;
  for (let i = 0; i < listing.length; i += BATCH) {
    const batch = listing.slice(i, i + BATCH);
    const results = await Promise.all(batch.map(async (file) => {
      const name = file.name.replace(/\.md$/, '');
      const id = `webdesignhot-${name}`;

      if (existingIds.has(id)) {
        return { status: 'exists', name, id };
      }

      try {
        const resp = await fetch(file.download_url);
        if (!resp.ok) return { status: 'fetch_fail', name, id, error: `HTTP ${resp.status}` };

        const content = await resp.text();
        const yml = parseYaml(content);
        if (!yml.name) return { status: 'no_name', name, id };

        const dir = path.join(ORIGINALS_BASE, name);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'DESIGN.md'), content, 'utf-8');

        const tokens_css = inferTokens(yml);
        const aesthetic = inferAesthetic(yml);
        const productTypes = inferProductTypes(yml);

        const description = (yml.description || content.split('---')[2] || '').substring(0, 250).trim();

        const entry = {
          id,
          name: yml.name,
          source: 'WebDesignHot/design-md',
          aesthetic,
          product_types: productTypes,
          description: description + (description.length >= 250 ? '...' : ''),
          preview: `color-accent-primary: ${tokens_css.accent}\ncolor-bg-surface: ${tokens_css.bg}`,
          tokens_css,
          preview_demo: true,
          tags: (yml.tags || []).concat(yml.author ? [yml.author] : []),
        };

        catalog.design_systems.push(entry);
        existingIds.add(id);

        return { status: 'ok', name, id, brand: yml.name, accent: tokens_css.accent };
      } catch (err) {
        return { status: 'error', name, id, error: err.message };
      }
    }));

    // Report batch
    for (const r of results) {
      if (r.status === 'ok') {
        console.log(`  + ${r.brand || r.name} (${r.accent})`);
        added++;
      } else if (r.status === 'exists') {
        skipped++;
      } else if (r.status === 'fetch_fail' || r.status === 'error') {
        console.log(`  ✗ ${r.name}: ${r.error}`);
        failed++;
      } else if (r.status === 'no_name') {
        console.log(`  ? ${r.name}: no name in YAML`);
        failed++;
      }
    }

    // Progress
    const pct = Math.round((i + batch.length) / listing.length * 100);
    if (pct % 10 === 0 || i + batch.length >= listing.length) {
      console.log(`  → ${pct}% done (${i + batch.length}/${listing.length})`);
    }
  }

  // Save catalog
  if (added > 0) {
    const backupPath = CATALOG.replace('.json', '.backup.json');
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(CATALOG, backupPath);
    }
    fs.writeFileSync(CATALOG, JSON.stringify(catalog, null, 2), 'utf-8');
  }

  console.log(`\n═══ Done ═══`);
  console.log(`Added: ${added}  Skipped (exists): ${skipped}  Failed: ${failed}`);
  console.log(`Total design systems: ${catalog.design_systems.length}`);
}

main().catch(err => { console.error(err); process.exit(1); });
