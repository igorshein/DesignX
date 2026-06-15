// import-new-skills.mjs
// Импорт новых SKILL.md из:
// 1. addyosmani/agent-skills (frontend-ui-engineering)
// 2. netsus/oh-my-design (.claude/skills/omd/SKILL.md)
import fs from 'fs';

const CATALOG_PATH = './src/data/catalog.json';

const SOURCES = [
  {
    id: 'frontend-ui-engineering',
    name: 'Frontend UI Engineering',
    summary: 'Production-grade frontend UI engineering with focus on responsive design, component architecture, and design system implementation.',
    source: 'addyosmani/agent-skills',
    category: 'frontend-dev',
    url: 'https://raw.githubusercontent.com/addyosmani/agent-skills/main/skills/frontend-ui-engineering/SKILL.md',
    tags: ['frontend', 'ui-engineering', 'production', 'component-design'],
    rating: 5,
  },
  {
    id: 'omd-brand-context',
    name: 'OmD — Brand Context for Design Systems',
    summary: 'Apply a project\'s DESIGN.md as authoritative brand context when generating or modifying UI. Reads and consumes design system files to produce brand-consistent output.',
    source: 'netsus/oh-my-design (.claude/skills/omd)',
    category: 'design-system',
    url: 'https://raw.githubusercontent.com/netsus/oh-my-design/main/.claude/skills/omd/SKILL.md',
    tags: ['design-systems', 'brand-context', 'design-tokens', 'omd'],
    rating: 5,
  },
];

async function main() {
  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf-8'));
  const existingIds = new Set(catalog.skills.map(s => s.id));

  for (const src of SOURCES) {
    if (existingIds.has(src.id)) {
      console.log(`  ~ ${src.id}: already exists`);
      continue;
    }

    try {
      const resp = await fetch(src.url, { headers: { 'User-Agent': 'DesignX' } });
      if (!resp.ok) {
        console.error(`  ! ${src.id}: HTTP ${resp.status}`);
        continue;
      }

      const content = await resp.text();
      const contentPreview = content.substring(0, 500).trim();

      const skillEntry = {
        id: src.id,
        name: src.name,
        summary: src.summary,
        source: src.source,
        category: src.category,
        content: contentPreview,
        tags: src.tags,
        rating: src.rating,
      };

      catalog.skills.push(skillEntry);
      existingIds.add(src.id);
      console.log(`  + ${src.id}`);
    } catch (err) {
      console.error(`  ! ${src.id}: ${err.message}`);
    }
  }

  fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2), 'utf-8');
  console.log('\nDone importing skills');
}

main().catch(console.error);
