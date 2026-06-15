// import-top-skills.mjs
// Импорт лучших найденных SKILL.md из новых источников
import fs from 'fs';

const CATALOG_PATH = './src/data/catalog.json';

const SKILLS = [
  {
    id: 'ui-design-brain',
    name: 'UI Design Brain',
    summary: 'Comprehensive UI component knowledge skill with best practices, layout patterns, and design system principles for AI coding agents.',
    source: 'carmahhawwari/ui-design-brain',
    category: 'visual-design',
    url: 'https://raw.githubusercontent.com/carmahhawwari/ui-design-brain/main/SKILL.md',
    tags: ['ui-components', 'best-practices', 'patterns'],
    rating: 5,
  },
  {
    id: 'swiss-design-skill',
    name: 'Swiss International Style Design',
    summary: 'Swiss International Style design system skill — grid-based layout, sans-serif typography, asymmetric balance, and minimal aesthetic principles.',
    source: 'zeke/swiss-design-skill',
    category: 'visual-design',
    url: 'https://raw.githubusercontent.com/zeke/swiss-design-skill/main/swiss-design/SKILL.md',
    tags: ['swiss-style', 'typography', 'grid', 'minimal'],
    rating: 5,
  },
  {
    id: 'frontend-design-skill',
    name: 'Frontend Design Masterclass',
    summary: 'Frontend design skill covering layout, typography, color systems, component architecture, and responsive patterns for modern web development.',
    source: 'Ilm-Alan/frontend-design',
    category: 'frontend-dev',
    url: 'https://raw.githubusercontent.com/Ilm-Alan/frontend-design/main/SKILL.md',
    tags: ['frontend', 'layout', 'components', 'responsive'],
    rating: 4,
  },
  {
    id: 'ux-writing-skill',
    name: 'UX Writing & Content Design',
    summary: 'Systematic UX writing skill for AI-powered design system enforcement — microcopy, error messages, onboarding, tone, and voice guidelines.',
    source: 'content-designer/ux-writing-skill',
    category: 'ux-writing',
    url: 'https://raw.githubusercontent.com/content-designer/ux-writing-skill/main/SKILL.md',
    tags: ['ux-writing', 'microcopy', 'content-design', 'voice-tone'],
    rating: 5,
  },
  {
    id: 'anydesign',
    name: 'AnyDesign — Design System Generator',
    summary: 'Claude skill that analyzes images, websites, and Figma files to generate structured DESIGN.md files with color palettes, typography, and component specs.',
    source: 'uxKero/anydesign',
    category: 'design-tools',
    url: 'https://raw.githubusercontent.com/uxKero/anydesign/main/SKILL.md',
    tags: ['design-generation', 'analysis', 'figma', 'extraction'],
    rating: 4,
  },
  {
    id: 'refactoring-ui-skill',
    name: 'Refactoring UI Design',
    summary: 'Professional UI design skill based on Refactoring UI principles — visual hierarchy, spacing, color, typography, and component composition.',
    source: 'jaywilburn/refactoring-ui-skill',
    category: 'visual-design',
    url: 'https://raw.githubusercontent.com/jaywilburn/refactoring-ui-skill/main/skills/refactoring-ui/SKILL.md',
    tags: ['refactoring-ui', 'hierarchy', 'composition', 'professional'],
    rating: 4,
  },
  {
    id: 'pencil-design-skill',
    name: 'Pencil Design System',
    summary: 'Agent skill for designing UIs with Pencil design files and generating production React/Next.js code with consistent design tokens.',
    source: 'chiroro-jr/pencil-design-skill',
    category: 'design-tools',
    url: 'https://raw.githubusercontent.com/chiroro-jr/pencil-design-skill/main/SKILL.md',
    tags: ['pencil', 'design-tokens', 'react', 'code-generation'],
    rating: 3,
  },
  {
    id: 'design-system-skill',
    name: 'Design System Skill',
    summary: 'Claude Code skill that generates DESIGN.md, design-guidelines.md, and design-components.md from any design reference or URL.',
    source: 'albertzhangz10/design-system-skill',
    category: 'design-system',
    url: 'https://raw.githubusercontent.com/albertzhangz10/design-system-skill/main/SKILL.md',
    tags: ['design-systems', 'generation', 'guidelines', 'components'],
    rating: 4,
  },
  {
    id: 'cnbb-visual-design',
    name: 'Visual Design System — Principled Web Design',
    summary: 'Production-grade visual design skill grounded in perceptual science, mathematical proportion, and composable spatial primitives. Covers color (OKLCH), typography, layout, and foundations.',
    source: 'cnbb-design/ai-design',
    category: 'visual-design',
    url: 'https://raw.githubusercontent.com/cnbb-design/ai-design/main/skills/design/SKILL.md',
    tags: ['visual-design', 'color-theory', 'typography', 'layout', 'perceptual-science'],
    rating: 5,
  },
];

async function main() {
  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf-8'));
  const existingIds = new Set(catalog.skills.map(s => s.id));

  let added = 0;
  let skipped = 0;

  for (const src of SKILLS) {
    if (existingIds.has(src.id)) {
      console.log(`  ~ ${src.id}: already exists`);
      skipped++;
      continue;
    }

    try {
      const resp = await fetch(src.url, { headers: { 'User-Agent': 'DesignX' } });
      if (!resp.ok) {
        console.error(`  ! ${src.id}: HTTP ${resp.status}`);
        skipped++;
        continue;
      }

      const content = await resp.text();
      const skillEntry = {
        id: src.id,
        name: src.name,
        summary: src.summary,
        source: src.source,
        category: src.category,
        content: content.substring(0, 500).trim(),
        tags: src.tags,
        rating: src.rating,
      };

      catalog.skills.push(skillEntry);
      existingIds.add(src.id);
      added++;
      console.log(`  + ${src.id}`);
    } catch (err) {
      console.error(`  ! ${src.id}: ${err.message}`);
      skipped++;
    }
  }

  console.log(`\nDone: ${added} added, ${skipped} skipped`);
  fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2), 'utf-8');
}

main().catch(console.error);
