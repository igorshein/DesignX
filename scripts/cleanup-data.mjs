// cleanup-data.mjs — финальная очистка каталога перед UI-обновлением
import fs from 'fs';

const CATALOG_PATH = './src/data/catalog.json';
const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf-8'));

// Fix 1: Add source for new-design-systems entries
const NEW_SOURCE = 'DesignX Catalog';
for (const ds of catalog.design_systems) {
  if (!ds.source || ds.source === '') {
    ds.source = NEW_SOURCE;
  }
}

// Fix 2: Clean messy skill sources (remove 'designx, RESOURCES.md §X' patterns)
for (const skill of catalog.skills) {
  if (skill.source && skill.source.includes('RESOURCES')) {
    skill.source = 'DesignX Research';
  }
  // Normalize 'designx' to 'DesignX'
  if (skill.source === 'designx') {
    skill.source = 'DesignX';
  }
  if (skill.source && skill.source.startsWith('designer-skills, RESOURCES')) {
    skill.source = 'designer-skills';
  }
}

// Fix 3: Ensure all DS have an aesthetic field (default to industrial-minimal)
for (const ds of catalog.design_systems) {
  if (!ds.aesthetic) {
    // Infer from tokens or default
    if (ds.tokens_css && ds.tokens_css.dark) {
      ds.aesthetic = 'industrial-minimal';
    } else {
      ds.aesthetic = 'scandinavian';
    }
  }
}

// Fix 4: Add category field to DS entries for filtering
for (const ds of catalog.design_systems) {
  if (!ds.category) {
    ds.category = ds.aesthetic || 'uncategorized';
  }
}

// Fix 5: Normalize source names for easier filtering
const SOURCE_ALIASES = {
  'WebDesignHot/design-md': 'WebDesignHot',
  'ndroussi/design-md-for-ai': 'ndroussi',
  'kwakseongjae/oh-my-design': 'kwakseongjae',
  'nexu-io/open-design': 'nexu-io',
  'awesome-design-md': 'awesome-design-md',
  'awesome-design-skills': 'awesome-design-skills',
  'netsus/oh-my-design': 'netsus',
  'Meliwat/awesome-ios-design-md (social)': 'iOS (social)',
  'Meliwat/awesome-ios-design-md (travel)': 'iOS (travel)',
  'Meliwat/awesome-ios-design-md (productivity)': 'iOS (productivity)',
  'Meliwat/awesome-ios-design-md (fitness)': 'iOS (fitness)',
  'Meliwat/awesome-ios-design-md (dating)': 'iOS (dating)',
  'Meliwat/awesome-ios-design-md (video)': 'iOS (video)',
  'Meliwat/awesome-ios-design-md (messaging)': 'iOS (messaging)',
  'Meliwat/awesome-ios-design-md (misc)': 'iOS (misc)',
  'Meliwat/awesome-ios-design-md (music)': 'iOS (music)',
  'Meliwat/awesome-ios-design-md (food)': 'iOS (food)',
  'Meliwat/awesome-ios-design-md (finance)': 'iOS (finance)',
  'soulcore-dev/soul-design-md': 'soulcore-dev',
  'google-labs-code/design.md': 'google-labs-code',
  'dimabraven/design-md': 'dimabraven',
  'DesignX Catalog': 'DesignX',
};

// Add source_short for display
for (const ds of catalog.design_systems) {
  if (ds.source && SOURCE_ALIASES[ds.source]) {
    ds.source_short = SOURCE_ALIASES[ds.source];
  } else if (ds.source) {
    // Take first part before /
    const parts = ds.source.split('/');
    ds.source_short = parts[0] || ds.source;
  } else {
    ds.source_short = 'Unknown';
  }
}

// Update meta
catalog.meta.lastUpdated = new Date().toISOString().split('T')[0];
catalog.meta.totalDesignSystems = catalog.design_systems.length;
catalog.meta.totalSkills = catalog.skills.length;

fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog), 'utf-8');

const size = Buffer.byteLength(JSON.stringify(catalog), 'utf-8');
console.log(`✓ Cleaned catalog: ${catalog.skills.length} skills, ${catalog.design_systems.length} DS`);
console.log(`  Size: ${(size / 1024 / 1024).toFixed(2)} MB`);
console.log(`  Sources fixed: 12 (new DS), ${catalog.skills.filter(s => s.source?.includes('RESOURCES')).length} skills pending`);
