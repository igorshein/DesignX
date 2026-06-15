/**
 * update-catalog.mjs
 *
 * Replaces the `design_systems` array in catalog.json with
 * entries generated from upstream repos.
 *
 * Usage: node scripts/update-catalog.mjs
 *
 * Makes a backup of catalog.json before modifying.
 */

import { readFileSync, writeFileSync, copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CATALOG_PATH = resolve(__dirname, '..', 'src', 'data', 'catalog.json');
const GENERATED_PATH = resolve(__dirname, '..', 'src', 'data', 'catalog-design-systems.json');
const BACKUP_PATH = CATALOG_PATH.replace('.json', '.backup.json');

// Read catalog
const catalog = JSON.parse(readFileSync(CATALOG_PATH, 'utf-8'));
const newSystems = JSON.parse(readFileSync(GENERATED_PATH, 'utf-8'));

const oldCount = (catalog.design_systems || []).length;

// Backup
copyFileSync(CATALOG_PATH, BACKUP_PATH);
console.log(`Backup saved: ${BACKUP_PATH}`);

// Preserve timestamps from old catalog for matching IDs
const oldSystemsMap = {};
for (const ds of catalog.design_systems) {
  oldSystemsMap[ds.id] = ds;
}

const today = new Date().toISOString().split('T')[0];
let preservedCreated = 0, preservedUpdated = 0;

for (const ds of newSystems) {
  const old = oldSystemsMap[ds.id];
  if (old) {
    if (old.createdAt && !ds.createdAt) {
      ds.createdAt = old.createdAt;
      preservedCreated++;
    }
    if (old.updatedAt && old.updatedAt > (ds.updatedAt || '')) {
      ds.updatedAt = old.updatedAt;
      preservedUpdated++;
    }
  }
  if (!ds.createdAt) ds.createdAt = today;
  if (!ds.updatedAt) ds.updatedAt = ds.createdAt;
}

// Replace
catalog.design_systems = newSystems;

// Update meta timestamp
catalog.meta.lastUpdated = today;
catalog.meta.totalDesignSystems = newSystems.length;

// Write
writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2) + '\n', 'utf-8');
console.log(`Replaced ${oldCount} design systems with ${newSystems.length} upstream entries`);
console.log(`  Preserved createdAt: ${preservedCreated}, updatedAt: ${preservedUpdated}`);
console.log(`  Removed: ${oldCount} DesignX-authored systems`);
console.log(`  Added:   ${newSystems.length} upstream systems`);
console.log(`  Total:   ${catalog.design_systems.length} design systems`);

// Stats
const withTokens = newSystems.filter(ds => ds.tokens_css).length;
const withAesthetic = newSystems.filter(ds => ds.aesthetic && ds.aesthetic !== 'industrial-minimal').length;
const withTimestamps = newSystems.filter(ds => ds.createdAt).length;
console.log(`\nStats:`);
console.log(`  With CSS tokens: ${withTokens}`);
console.log(`  With aesthetic mapping: ${withAesthetic}`);
console.log(`  With timestamps: ${withTimestamps}`);
