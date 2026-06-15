/**
 * import-nexu-io.mjs
 *
 * Batch import of nexu-io/open-design:
 *   - 151 aesthetic design systems (DESIGN.md in subdirectories)
 *   - 155 skills (SKILL.md in subdirectories)
 *
 * Design systems use: # Title + > Category + prose
 * Skills use: YAML frontmatter + markdown body
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CATALOG = path.resolve(__dirname, '..', 'src', 'data', 'catalog.json');
const BASE_RAW = 'https://raw.githubusercontent.com/nexu-io/open-design/main';
const BASE_API = 'https://api.github.com/repos/nexu-io/open-design/contents';

const GH_HEADERS = { 'User-Agent': 'DesignX-Importer/1.0' };

async function fetchJson(url) {
  const resp = await fetch(url, { headers: GH_HEADERS });
  if (!resp.ok) throw new Error(`HTTP ${resp.status} ${resp.statusText}`);
  return resp.json();
}

async function fetchText(url) {
  const resp = await fetch(url, { headers: GH_HEADERS });
  if (!resp.ok) throw new Error(`HTTP ${resp.status} ${resp.statusText}`);
  return resp.text();
}

// ─── Parse YAML frontmatter ─────────────────────────────────────────

function parseYaml(text) {
  const m = text.match(/^---\n([\s\S]*?)\n(?:---|\.\.\.)/);
  if (!m) return {};
  const lines = m[1].split('\n');
  const result = {};
  for (const line of lines) {
    const kv = line.match(/^(\w[\w-]*):\s*(.*)$/);
    if (kv) {
      let val = kv[2].trim().replace(/^["']|["']$/g, '');
      if (val === '|') {
        // Multi-line — skip for now
        result[kv[1]] = '';
      } else {
        result[kv[1]] = val;
      }
    }
  }
  return result;
}

// ─── Parse nexu-io DS format: # Title\n> Category\n> Description\n... ─

function parseNexusDs(text) {
  const nameMatch = text.match(/^#\s+(.+)$/m);
  const name = nameMatch ? nameMatch[1].trim() : 'Unknown';

  const catMatch = text.match(/^>\s*Category:\s*(.+)$/m);
  const category = catMatch ? catMatch[1].trim() : '';

  const descMatch = text.match(/^>\s*(.+)$/m);
  const description = descMatch ? descMatch[1].trim() : '';

  // Try to extract colors from prose
  const hexColors = text.match(/#[0-9a-fA-F]{6}/g) || [];
  const bg = hexColors[0] || '#ffffff';
  const accent = hexColors[1] || hexColors[0] || '#4da3ff';
  const isDark = parseInt(bg.replace('#', '').substring(0, 2), 16) < 128;

  const fontMatch = text.match(/\b(Inter|Space Grotesk|JetBrains Mono|Plus Jakarta Sans|Public Sans|SF Pro|San Francisco|Helvetica|Georgia|Playfair|Serif)\b/i);
  const font = fontMatch ? fontMatch[1] : 'Inter';

  // Infer aesthetic from name + category
  const aesthetic = name.toLowerCase().replace(/\s+/g, '-');

  return { name, category, description, bg, accent, isDark, font, aesthetic, hexColors };
}

// ─── Main ───────────────────────────────────────────────────────────

async function main() {
  const catalog = JSON.parse(fs.readFileSync(CATALOG, 'utf-8'));
  const existingDsIds = new Set(catalog.design_systems.map(d => d.id));
  const existingSkillIds = new Set(catalog.skills.map(s => s.id));

  let dsAdded = 0, dsSkipped = 0, dsFailed = 0;
  let skAdded = 0, skSkipped = 0, skFailed = 0;

  // ── Part 1: Import design systems ──────────────────────────────
  console.log('\n═══ Part 1: Design Systems ═══\n');
  try {
    const dsListing = await fetchJson(`${BASE_API}/design-systems?per_page=200`);
    const dsDirs = dsListing.filter(x => x.type === 'dir' && x.name !== '_schema');
    console.log(`Found ${dsDirs.length} design system directories`);

    const BATCH = 10;
    for (let i = 0; i < dsDirs.length; i += BATCH) {
      const batch = dsDirs.slice(i, i + BATCH);
      const results = await Promise.all(batch.map(async (dir) => {
        const slug = dir.name;
        const id = `nexu-io-${slug}`;

        if (existingDsIds.has(id)) return { status: 'exists', slug };

        try {
          const url = `${BASE_RAW}/design-systems/${slug}/DESIGN.md`;
          const content = await fetchText(url);
          const parsed = parseNexusDs(content);

          const tokens_css = {
            bg: parsed.bg,
            bg_elevated: parsed.isDark ? '#111318' : '#f5f6f8',
            text: parsed.isDark ? '#e8ebf0' : parsed.bg === '#ffffff' ? '#141414' : '#ffffff',
            text_muted: parsed.isDark ? '#7a8290' : '#6b7380',
            accent: parsed.accent,
            accent2: parsed.hexColors[2] || parsed.accent,
            border: parsed.isDark ? '#1e2028' : '#e2e5ec',
            success: '#07CA6B',
            error: '#EA2143',
            font: parsed.font,
            radius: '6px',
            dark: parsed.isDark,
          };

          const entry = {
            id,
            name: parsed.name,
            source: 'nexu-io/open-design',
            aesthetic: parsed.aesthetic,
            product_types: parsed.category ? [parsed.category.toLowerCase().replace(/[\s&]+/g, '-')] : [],
            description: parsed.description.substring(0, 250),
            preview: `color-accent-primary: ${tokens_css.accent}\ncolor-bg-surface: ${tokens_css.bg}`,
            tokens_css,
            preview_demo: true,
            tags: [parsed.aesthetic],
          };

          catalog.design_systems.push(entry);
          existingDsIds.add(id);

          // Save original
          const originalsDir = path.resolve(__dirname, '..', 'src', 'originals', 'nexu-io', slug);
          fs.mkdirSync(originalsDir, { recursive: true });
          fs.writeFileSync(path.join(originalsDir, 'DESIGN.md'), content, 'utf-8');

          return { status: 'ok', slug, name: parsed.name, accent: parsed.accent };
        } catch (err) {
          return { status: 'fail', slug, error: err.message };
        }
      }));

      for (const r of results) {
        if (r.status === 'ok') { dsAdded++; if (dsAdded <= 5 || dsAdded % 20 === 0) console.log(`  + ${r.name} (${r.accent})`); }
        else if (r.status === 'exists') dsSkipped++;
        else { dsFailed++; if (dsFailed <= 3) console.log(`  ✗ ${r.slug}: ${r.error}`); }
      }
    }
  } catch (err) {
    console.log(`DS import error: ${err.message}`);
  }

  // ── Part 2: Import skills ──────────────────────────────────────
  console.log('\n═══ Part 2: Skills ═══\n');
  try {
    const skListing = await fetchJson(`${BASE_API}/skills?per_page=200`);
    const skDirs = skListing.filter(x => x.type === 'dir');
    console.log(`Found ${skDirs.length} skill directories`);

    const BATCH = 10;
    for (let i = 0; i < skDirs.length; i += BATCH) {
      const batch = skDirs.slice(i, i + BATCH);
      const results = await Promise.all(batch.map(async (dir) => {
        const slug = dir.name;
        const id = `nexu-io-${slug}`;

        if (existingSkillIds.has(id)) return { status: 'exists', slug };

        try {
          const content = await fetchText(`${BASE_RAW}/skills/${slug}/SKILL.md`);
          const yml = parseYaml(content);
          const name = yml.name || slug;
          const description = yml.description || '';

          const summary = description.length > 120 ? description.substring(0, 120) + '...' : description;

          // Determine category
          let category = 'unspecified';
          const text = `${name} ${description}`.toLowerCase();
          if (/ui|ux|design|frontend|web|visual/.test(text)) category = 'visual-design';
          else if (/color|palette/.test(text)) category = 'color-theory';
          else if (/brand|creative/.test(text)) category = 'brand';
          else if (/accessibility|contrast|a11y/.test(text)) category = 'accessibility';
          else if (/motion|animation/.test(text)) category = 'motion';
          else if (/data|chart|dashboard|viz/.test(text)) category = 'data-visualization';

          let complexity = 'intermediate';
          if (/advanced|expert/.test(text)) complexity = 'advanced';
          else if (/beginner|basic|simple/.test(text)) complexity = 'beginner';

          const entry = {
            id,
            name: name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
            source: 'nexu-io/open-design',
            category,
            complexity,
            summary,
            description,
            for_product_types: [],
            tags: ['nexu-io'],
            key_principles: [],
            frameworks: [],
            rating: 0,
          };

          catalog.skills.push(entry);
          existingSkillIds.add(id);

          // Save original
          const originalsDir = path.resolve(__dirname, '..', 'src', 'originals', 'nexu-io', slug);
          fs.mkdirSync(originalsDir, { recursive: true });
          fs.writeFileSync(path.join(originalsDir, 'SKILL.md'), content, 'utf-8');

          return { status: 'ok', slug, name: entry.name };
        } catch (err) {
          return { status: 'fail', slug, error: err.message };
        }
      }));

      for (const r of results) {
        if (r.status === 'ok') { skAdded++; if (skAdded <= 5 || skAdded % 30 === 0) console.log(`  + ${r.name}`); }
        else if (r.status === 'exists') skSkipped++;
        else { skFailed++; if (skFailed <= 3) console.log(`  ✗ ${r.slug}: ${r.error}`); }
      }
    }
  } catch (err) {
    console.log(`Skill import error: ${err.message}`);
  }

  // ── Save ───────────────────────────────────────────────────────
  if (dsAdded > 0 || skAdded > 0) {
    const backupPath = CATALOG.replace('.json', '.backup.json');
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(CATALOG, backupPath);
    }
    fs.writeFileSync(CATALOG, JSON.stringify(catalog, null, 2), 'utf-8');
  }

  console.log(`\n═══ Done ═══`);
  console.log(`Design Systems: +${dsAdded} added, ${dsSkipped} skipped, ${dsFailed} failed`);
  console.log(`Skills: +${skAdded} added, ${skSkipped} skipped, ${skFailed} failed`);
  console.log(`Total: ${catalog.design_systems.length} DS, ${catalog.skills.length} skills`);
}

main().catch(err => { console.error(err); process.exit(1); });
