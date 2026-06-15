// import-new-sources.mjs — импорт из albemala/design-md-library, educlopez/design-bites и других
// Запуск: node scripts/import-new-sources.mjs
import fs from 'fs';

const CATALOG_PATH = './src/data/catalog.json';

const NEW_SOURCES = [
  {
    id: 'albemala-design-md-library',
    name: 'albemala/design-md-library',
    desc: 'Open library of AI-ready DESIGN.md files',
    dsCount: '~20',
  },
  {
    id: 'educlopez-design-bites',
    name: 'educlopez/design-bites',
    desc: 'Curated DESIGN.md files for inspiring websites',
    dsCount: '~30',
  },
  {
    id: 'fabricioctelles-skills',
    name: 'fabricioctelles/vibe-styles',
    desc: 'Vibe-coded design systems collection',
    dsCount: '~15',
  },
  {
    id: 'Eldergenix-SUPER-DESIGN',
    name: 'Eldergenix/SUPER-DESIGN',
    desc: 'Super Design system collection',
    dsCount: '~10',
  },
  {
    id: 'ZeroZ-lab-cc-design',
    name: 'ZeroZ-lab/cc-design',
    desc: 'Design systems for Cursor/Claude Code',
    dsCount: '~12',
  },
  {
    id: 'sebastian-software-effective-ui-design-skill',
    name: 'sebastian-software/effective-ui-design-skill',
    desc: 'Effective UI design skill for AI agents',
    dsCount: '~5',
  },
  {
    id: 'lcanady-ui-skill',
    name: 'lcanady/ui-skill',
    desc: 'UI design skill for AI coding agents',
    dsCount: '~5',
  },
];

function main() {
  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf-8'));

  // Add to meta sources
  const existingSources = new Set(catalog.meta.sources || []);
  for (const src of NEW_SOURCES) {
    const sourceEntry = `${src.name} (${src.dsCount})`;
    if (!existingSources.has(sourceEntry)) {
      catalog.meta.sources.push(sourceEntry);
      existingSources.add(sourceEntry);
    }
  }

  // Add as placeholder tags for existing DS that might match
  // Mark DS coming from these new sources if their ids match
  const sourcePrefixMap = {
    'albemala': 'albemala/design-md-library',
    'educlopez': 'educlopez/design-bites',
    'fabricioctelles': 'fabricioctelles/vibe-styles',
  };

  for (const ds of catalog.design_systems) {
    for (const [prefix, src] of Object.entries(sourcePrefixMap)) {
      if (ds.id && ds.id.startsWith(prefix) && !ds.source) {
        ds.source = src;
        ds.source_short = prefix;
        break;
      }
    }
  }

  const today = new Date().toISOString().split('T')[0];
  // Ensure all items have timestamps
  for (const skill of catalog.skills) {
    if (!skill.createdAt) skill.createdAt = today;
    if (!skill.updatedAt) skill.updatedAt = skill.createdAt;
  }
  for (const ds of catalog.design_systems) {
    if (!ds.createdAt) ds.createdAt = today;
    if (!ds.updatedAt) ds.updatedAt = ds.createdAt;
  }
  catalog.meta.lastUpdated = today;
  catalog.meta.sourcesTotal = catalog.meta.sources.length;

  fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog), 'utf-8');
  console.log(`✓ Updated catalog with ${NEW_SOURCES.length} new source references`);
  console.log(`  Total sources listed in meta: ${catalog.meta.sources.length}`);
  console.log(`  Total DS: ${catalog.design_systems.length}`);
  console.log(`  Total Skills: ${catalog.skills.length}`);
}

main();
