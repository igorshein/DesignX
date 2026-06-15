/**
 * import-google-examples.mjs
 *
 * Imports 3 DESIGN.md examples from google-labs-code/design.md into catalog.json.
 * These are production-quality examples from the official DESIGN.md spec repo.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ORIGINALS = path.resolve(__dirname, '..', 'src', 'originals', 'google-labs-code');
const CATALOG = path.resolve(__dirname, '..', 'src', 'data', 'catalog.json');

function parseYamlFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;

  const lines = m[1].split('\n');
  const yml = {};
  let currentKey = null;
  let currentObj = null;

  for (const line of lines) {
    // Top-level key: value
    const top = line.match(/^(\w[\w-]*):\s*(.*)$/);
    if (top && (line.startsWith('  ') === false)) {
      currentKey = top[1];
      const val = top[2].trim();
      if (val === '' || val === undefined) {
        // Nested object
        yml[currentKey] = {};
        currentObj = yml[currentKey];
      } else {
        if (val.startsWith('"') && val.endsWith('"')) {
          yml[currentKey] = val.slice(1, -1);
        } else if (val.startsWith("'") && val.endsWith("'")) {
          yml[currentKey] = val.slice(1, -1);
        } else {
          yml[currentKey] = val;
        }
        currentObj = null;
      }
    } else if (currentObj !== null) {
      // Nested key-value
      const nested = line.match(/^\s{2}(\w[\w-]*):\s*(.*)$/);
      if (nested) {
        const nk = nested[1];
        let nv = nested[2].trim();
        if (nv.startsWith('"') && nv.endsWith('"')) nv = nv.slice(1, -1);
        if (nv.startsWith("'") && nv.endsWith("'")) nv = nv.slice(1, -1);
        currentObj[nk] = nv;
      }
    }
  }
  return yml;
}

function extractName(text) {
  const m = text.match(/^name:\s*(.*)$/m);
  return m ? m[1].trim().replace(/["']/g, '') : 'Unknown';
}

function extractPrimaryColor(yml) {
  if (!yml.colors) return '#333333';
  return yml.colors.primary || yml.colors.surface || '#333333';
}

function extractAccentColor(yml) {
  if (!yml.colors) return '#1856FF';
  return yml.colors['primary-container'] || yml.colors.primary || yml.colors.secondary || '#1856FF';
}

function extractBgColor(yml) {
  if (!yml.colors) return '#FFFFFF';
  return yml.colors.surface || yml.colors.background || '#FFFFFF';
}

function extractFont(yml) {
  if (!yml.typography) return 'Inter';
  const firstKey = Object.keys(yml.typography)[0];
  return yml.typography[firstKey]?.fontFamily || yml.typography.fontFamily || 'Inter';
}

function extractRadius(yml) {
  if (!yml.rounded) return '6px';
  const def = yml.rounded['DEFAULT'] || yml.rounded.md || yml.rounded.sm || '0.5rem';
  return def;
}

function isDark(yml) {
  const bg = extractBgColor(yml);
  // Parse hex to check luminance
  const hex = bg.replace('#', '');
  if (hex.length < 6) return false;
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b);
  return lum < 128;
}

function inferAesthetic(name, text) {
  const t = text.toLowerCase();
  if (t.includes('glass') || t.includes('frost')) return 'glassmorphism';
  if (t.includes('cosmic') || t.includes('celestial') || t.includes('eclipse') || t.includes('space')) return 'dark-cosmic';
  if (t.includes('corporate') || t.includes('modern') || t.includes('professional')) return 'modern-corporate';
  if (t.includes('pet') || t.includes('friendly') || t.includes('organic')) return 'friendly-organic';
  return 'modern-corporate';
}

function inferProductTypes(name, text) {
  const t = text.toLowerCase();
  const types = [];
  if (t.includes('weather') || t.includes('meteorological')) types.push('weather-app');
  if (t.includes('pet') || t.includes('dog') || t.includes('walker') || t.includes('walking')) types.push('pet-app');
  if (t.includes('festival') || t.includes('event') || t.includes('concert')) types.push('event-app');
  if (t.includes('music')) types.push('music-app');
  if (types.length === 0) types.push('web-app');
  return types;
}

// Build tokens_css from parsed YAML
function buildTokensCss(yml, text) {
  const bg = extractBgColor(yml);
  const accent = extractAccentColor(yml);
  const font = extractFont(yml);
  const radius = extractRadius(yml);
  const dark = isDark(yml);

  // Try to get secondary/accent2 color
  const accent2 = yml.colors?.secondary || yml.colors?.['secondary-container'] || accent;

  // Try to get text colors
  const textColor = yml.colors?.['on-surface'] || (dark ? '#e8ebf0' : '#141414');
  const textMuted = yml.colors?.['on-surface-variant'] || (dark ? '#7a8290' : '#6b7380');
  const borderColor = yml.colors?.outline || yml.colors?.['outline-variant'] || (dark ? '#2d3449' : '#e2e5ec');
  const successColor = '#07CA6B'; // default
  const errorColor = yml.colors?.error || '#EA2143';

  return {
    bg,
    bg_elevated: yml.colors?.['surface-container'] || (dark ? '#111318' : '#f5f6f8'),
    text: textColor,
    text_muted: textMuted,
    accent,
    accent2: typeof accent2 === 'string' ? accent2 : accent,
    border: borderColor,
    success: successColor,
    error: errorColor,
    font,
    radius: radius,
    dark,
  };
}

async function main() {
  const dirs = fs.readdirSync(ORIGINALS, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  console.log(`Found ${dirs.length} directories in google-labs-code originals`);

  const catalog = JSON.parse(fs.readFileSync(CATALOG, 'utf-8'));
  const existingIds = new Set(catalog.design_systems.map(s => s.id));
  let added = 0;

  for (const dir of dirs) {
    const filePath = path.join(ORIGINALS, dir, 'DESIGN.md');
    if (!fs.existsSync(filePath)) {
      console.log(`  SKIP ${dir}: no DESIGN.md`);
      continue;
    }

    const text = fs.readFileSync(filePath, 'utf-8');
    const yml = parseYamlFrontmatter(text);
    if (!yml) {
      console.log(`  FAIL ${dir}: could not parse YAML frontmatter`);
      continue;
    }

    const name = yml.name || extractName(text);
    const id = `google-labs-${dir}`;

    if (existingIds.has(id)) {
      console.log(`  SKIP ${id}: already exists`);
      continue;
    }

    const tokens_css = buildTokensCss(yml, text);
    const aesthetic = inferAesthetic(name, text);
    const productTypes = inferProductTypes(name, text);

    const entry = {
      id,
      name,
      source: 'google-labs-code/design.md',
      aesthetic,
      product_types: productTypes,
      description: text.split('---')[2]?.substring(0, 200)?.trim() + '...' || `DESIGN.md example from the official spec repo.`,
      preview: `color-accent-primary: ${tokens_css.accent}\ncolor-bg-surface: ${tokens_css.bg}`,
      tokens_css,
      preview_demo: true,
      tags: aesthetic ? [aesthetic] : [],
    };

    catalog.design_systems.push(entry);
    existingIds.add(id);
    added++;

    console.log(`  ADDED ${id}: ${name} [${aesthetic}] font=${tokens_css.font} dark=${tokens_css.dark}`);
  }

  // Backup and write
  if (added > 0) {
    const backupPath = CATALOG.replace('.json', '.backup.json');
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(CATALOG, backupPath);
    }
    fs.writeFileSync(CATALOG, JSON.stringify(catalog, null, 2), 'utf-8');
    console.log(`\nAdded ${added} new design systems (${catalog.design_systems.length} total)`);
  } else {
    console.log('\nNo new design systems to add.');
  }
}

main().catch(err => { console.error(err); process.exit(1); });
