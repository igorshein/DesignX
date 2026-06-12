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

// Replace
catalog.design_systems = newSystems;

// Write
writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2) + '\n', 'utf-8');
console.log(`Replaced ${oldCount} design systems with ${newSystems.length} upstream entries`);
console.log(`  Removed: ${oldCount} DesignX-authored systems`);
console.log(`  Added:   ${newSystems.length} upstream systems`);
console.log(`  Total:   ${catalog.design_systems.length} design systems`);

// Stats
const withTokens = newSystems.filter(ds => ds.tokens_css).length;
const withAesthetic = newSystems.filter(ds => ds.aesthetic && ds.aesthetic !== 'industrial-minimal').length;
console.log(`\nStats:`);
console.log(`  With CSS tokens: ${withTokens}`);
console.log(`  With aesthetic mapping: ${withAesthetic}`);
