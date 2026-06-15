/**
 * generate-missing-entries.mjs
 *
 * Scans src/originals/ for DESIGN.md / .md files from sources not yet
 * in catalog.json and generates catalog entries for them.
 *
 * Handles:
 *   - ndroussi/design-md-for-ai  → src/originals/ndroussi-design-md-for-ai/{slug}/DESIGN.md
 *   - soulcore-dev/soul-design-md → src/originals/soulcore-dev-soul-design-md/{slug}/DESIGN.md
 *   - dimabraven/design-md       → src/originals/dimabraven-design-md/{slug}/{slug}.md
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CATALOG_PATH = path.resolve(__dirname, '..', 'src', 'data', 'catalog.json');
const ORIGINALS_DIR = path.resolve(__dirname, '..', 'src', 'originals');

// Map: source name → { originalsDir, filePattern, idPrefix, aesthetic }
const SOURCE_MAP = [
  {
    source: 'ndroussi/design-md-for-ai',
    dir: 'ndroussi-design-md-for-ai',
    file: 'DESIGN.md',
    idPrefix: 'ndroussi-',
    aesthetic: 'bold',
  },
  {
    source: 'soulcore-dev/soul-design-md',
    dir: 'soulcore-dev-soul-design-md',
    file: 'DESIGN.md',
    idPrefix: 'soulcore-',
    aesthetic: 'editorial-magazine',
  },
  {
    source: 'dimabraven/design-md',
    dir: 'dimabraven-design-md',
    file: null, // {slug}/{slug}.md
    idPrefix: 'dimabraven-',
    aesthetic: 'industrial-minimal',
  },
];

// Read first line of file for a short description
function getFirstLine(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const line = content.split('\n')[0].replace(/^#+\s*/, '').trim();
    return line || null;
  } catch { return null; }
}

// Read first paragraph after the title
function getDescription(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    // Remove YAML frontmatter
    const body = content.replace(/^---[\s\S]*?---\n*/, '');
    // Get first non-empty line and following paragraph
    const lines = body.split('\n').filter(l => l.trim());
    const firstLine = (lines[0] || '').replace(/^#+\s*/, '').trim();
    const secondLine = (lines[1] || '').replace(/^>\s*/, '').trim();
    if (firstLine && secondLine) {
      const combined = firstLine + '. ' + secondLine;
      return combined.length > 300 ? combined.substring(0, 300) + '...' : combined;
    }
    return firstLine || secondLine || null;
  } catch { return null; }
}

function main() {
  // Read existing catalog
  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf-8'));
  const existingIds = new Set(catalog.design_systems.map(d => d.id));

  const newEntries = [];
  let skipped = 0;

  for (const src of SOURCE_MAP) {
    const srcDir = path.join(ORIGINALS_DIR, src.dir);
    if (!fs.existsSync(srcDir)) {
      console.log(`Directory not found: ${srcDir}`);
      continue;
    }

    const items = fs.readdirSync(srcDir, { withFileTypes: true })
      .filter(d => d.isDirectory());
    
    for (const item of items) {
      const slug = item.name;
      const id = src.idPrefix + slug;
      
      if (existingIds.has(id)) {
        skipped++;
        continue;
      }

      // Determine file path
      let filePath;
      if (src.file) {
        filePath = path.join(srcDir, slug, src.file);
      } else {
        // dimabraven style: {slug}/{slug}.md
        filePath = path.join(srcDir, slug, slug + '.md');
        // Also try with dots replaced by dashes
        if (!fs.existsSync(filePath)) {
          const altSlug = slug.replace(/\./g, '-');
          filePath = path.join(srcDir, altSlug, altSlug + '.md');
        }
      }

      if (!fs.existsSync(filePath)) {
        console.log(`  SKIP ${id}: file not found (${filePath})`);
        continue;
      }

      const firstLine = getFirstLine(filePath);
      const name = firstLine || slug;
      const description = getDescription(filePath) || `Design system analysis for ${name}.`;

      const entry = {
        id,
        name: name.split('.').join('-'), // sanitize
        source: src.source,
        aesthetic: src.aesthetic,
        product_types: [],
        description,
        preview: '',
        tokens_css: null,
        preview_demo: false,
      };

      // Clean up name — ensure it's a reasonable slug
      entry.name = entry.name
        .replace(/[<>:"/\\|?*]/g, '')
        .trim()
        .substring(0, 80);

      newEntries.push(entry);
    }
  }

  console.log(`Existing: ${catalog.design_systems.length} DS, ${existingIds.size} unique IDs`);
  console.log(`Skipped (already in catalog): ${skipped}`);
  console.log(`New entries generated: ${newEntries.length}`);

  if (newEntries.length === 0) {
    console.log('Nothing to add.');
    return;
  }

  // Backup
  const backupPath = CATALOG_PATH.replace('.json', '.backup.json');
  fs.copyFileSync(CATALOG_PATH, backupPath);
  console.log(`Backup: ${backupPath}`);

  // Append
  catalog.design_systems.push(...newEntries);
  fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2), 'utf-8');
  console.log(`Written: ${CATALOG_PATH} (now ${catalog.design_systems.length} DS)`);

  // Show sample
  console.log('\nSample entries:');
  newEntries.slice(0, 3).forEach(e => {
    console.log(`  ${e.id} → "${e.name}" (${e.source})`);
  });
}

main();
