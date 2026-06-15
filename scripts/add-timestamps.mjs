import fs from 'fs';
import { createHash } from 'crypto';

const CATALOG_PATH = './src/data/catalog.json';
const HASHES_PATH = './src/data/originals-hashes.json';
const ORIGINALS_DIR = './src/originals';

const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf-8'));

const today = new Date().toISOString().split('T')[0]; // 2026-06-15

let skillAdded = 0, dsAdded = 0;
let skillUpdated = 0, dsUpdated = 0;

for (const skill of catalog.skills) {
  if (!skill.createdAt) {
    skill.createdAt = '2026-06-11';
    skillAdded++;
  }
  if (!skill.updatedAt) {
    skill.updatedAt = skill.createdAt;
  } else if (skill.updatedAt !== today) {
    // Already has updatedAt, leave it
  }
}

for (const ds of catalog.design_systems) {
  if (!ds.createdAt) {
    ds.createdAt = '2026-06-11';
    dsAdded++;
  }
  if (!ds.updatedAt) {
    ds.updatedAt = ds.createdAt;
  }
}

// Check originals for mtime-based updatedAt refinement
function walkDir(dir) {
  const entries = [];
  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      const full = `${dir}/${item.name}`;
      if (item.isDirectory()) {
        entries.push(...walkDir(full));
      } else if (item.isFile() && /\.md$/i.test(item.name)) {
        entries.push(full);
      }
    }
  } catch {}
  return entries;
}

const originals = walkDir(ORIGINALS_DIR);
const hashes = {};

for (const filepath of originals) {
  try {
    const content = fs.readFileSync(filepath, 'utf-8');
    const hash = createHash('sha256').update(content).digest('hex');
    const rel = filepath.replace(/\\/g, '/').replace(/^\.\/src\/originals\//, '');
    hashes[rel] = hash;
  } catch {}
}

// Try to set more precise createdAt from originals mtime
const FALLBACK_DATE = '2026-06-11';
for (const skill of catalog.skills) {
  // For skills in originals, check if there's a matching directory
  const src = skill.source || '';
  const slug = skill.id;
  const origPath = `./src/originals/${src}/${slug}/SKILL.md`;
  const normPath = origPath.replace(/\\/g, '/');
  if (hashes[normPath]) {
    try {
      const stat = fs.statSync(normPath);
      const mtime = stat.mtime.toISOString().split('T')[0];
      if (mtime < skill.createdAt) {
        skill.createdAt = mtime;
      }
      if (mtime > skill.updatedAt) {
        skill.updatedAt = mtime;
        skillUpdated++;
      }
    } catch {}
  }
}

for (const ds of catalog.design_systems) {
  const src = ds.source || '';
  const slug = ds.id;
  // Try various path patterns
  const patterns = [
    `./src/originals/${src}/${slug}/DESIGN.md`,
    `./src/originals/${src}/${slug}/SKILL.md`,
    `./src/originals/${src}/${ds.name}/DESIGN.md`,
  ];
  for (const p of patterns) {
    const normPath = p.replace(/\\/g, '/');
    if (hashes[normPath]) {
      try {
        const stat = fs.statSync(normPath);
        const mtime = stat.mtime.toISOString().split('T')[0];
        if (mtime < ds.createdAt) {
          ds.createdAt = mtime;
        }
        if (mtime > ds.updatedAt) {
          ds.updatedAt = mtime;
          dsUpdated++;
        }
      } catch {}
      break;
    }
  }
}

// Update meta
catalog.meta.lastUpdated = today;

fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog), 'utf-8');
fs.writeFileSync(HASHES_PATH, JSON.stringify(hashes, null, 2), 'utf-8');

console.log(`=== Timestamp Migration Complete ===`);
console.log(`Skills: ${catalog.skills.length} total`);
console.log(`  createdAt added: ${skillAdded}, updatedAt refined: ${skillUpdated}`);
console.log(`Design Systems: ${catalog.design_systems.length} total`);
console.log(`  createdAt added: ${dsAdded}, updatedAt refined: ${dsUpdated}`);
console.log(`Originals hashes saved: ${Object.keys(hashes).length} files`);
console.log(`Meta lastUpdated: ${today}`);
