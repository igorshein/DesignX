import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CATALOG = path.resolve(__dirname, '..', 'src', 'data', 'catalog.json');
const ORIGINALS = path.resolve(__dirname, '..', 'src', 'originals');
const GH = { 'User-Agent': 'DesignX' };

async function fetch(url) {
  const r = await globalThis.fetch(url, { headers: GH });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.text();
}

function parseYaml(text) {
  const m = text.match(/^---\n([\s\S]*?)\n(?:---|\.\.\.)/);
  if (!m) return {};
  const lines = m[1].split('\n');
  const result = {};
  let multiKey = null;
  for (const line of lines) {
    const kv = line.match(/^(\w[\w-]*):\s*(.*)$/);
    if (kv) {
      multiKey = null;
      let val = kv[2].trim().replace(/^["']|["']$/g, '');
      if (val === '|' || val === '>-') { multiKey = kv[1]; result[multiKey] = ''; }
      else { result[kv[1]] = val; }
    } else if (multiKey && line.startsWith('  ')) {
      result[multiKey] += (result[multiKey] ? ' ' : '') + line.trim();
    } else { multiKey = null; }
  }
  return result;
}

async function main() {
  const catalog = JSON.parse(fs.readFileSync(CATALOG, 'utf-8'));
  const tasks = [
    // zeke/swiss-design-skill
    { id: 'swiss-design-skill', url: 'https://raw.githubusercontent.com/zeke/swiss-design-skill/main/swiss-design/SKILL.md', dir: 'zeke/swiss-design-skill' },
    // jaywilburn/refactoring-ui-skill
    { id: 'refactoring-ui-skill', url: 'https://raw.githubusercontent.com/jaywilburn/refactoring-ui-skill/main/skills/refactoring-ui/SKILL.md', dir: 'jaywilburn/refactoring-ui-skill' },
    // cnbb-design/ai-design - try various paths
    { id: 'cnbb-visual-design', urls: [
      'https://raw.githubusercontent.com/cnbb-design/ai-design/main/skills/cnbb-visual-design/SKILL.md',
      'https://raw.githubusercontent.com/cnbb-design/ai-design/main/skills/visual-design/SKILL.md',
      'https://raw.githubusercontent.com/cnbb-design/ai-design/main/skills/Visual-Design/SKILL.md',
      'https://raw.githubusercontent.com/cnbb-design/ai-design/master/skills/visual-design/SKILL.md',
      'https://raw.githubusercontent.com/cnbb-design/ai-design/main/concept-cards/visual-design/SKILL.md',
      'https://raw.githubusercontent.com/cnbb-design/ai-design/main/sources-md/visual-design-skills/SKILL.md',
    ], dir: 'cnbb-design/ai-design' },
    // addyosmani/agent-skills - try various paths
    { id: 'frontend-ui-engineering', urls: [
      'https://raw.githubusercontent.com/addyosmani/agent-skills/main/src/SKILL.md',
      'https://raw.githubusercontent.com/addyosmani/agent-skills/main/skills/SKILL.md',
      'https://raw.githubusercontent.com/addyosmani/agent-skills/main/skills/frontend-ui-engineering/SKILL.md',
      'https://raw.githubusercontent.com/addyosmani/agent-skills/main/.claude/skills/SKILL.md',
      'https://raw.githubusercontent.com/addyosmani/agent-skills/main/AGENTS.md',
    ], dir: 'addyosmani/agent-skills' },
  ];

  for (const t of tasks) {
    let content = null;
    let usedUrl = null;

    if (t.url) {
      try { content = await fetch(t.url); usedUrl = t.url; } catch (e) {}
    } else if (t.urls) {
      for (const u of t.urls) {
        try { content = await fetch(u); usedUrl = u; break; } catch (e) {}
      }
    }

    if (!content) {
      console.log(`  ✗ ${t.id} — not found`);
      continue;
    }

    // Save original
    const origDir = path.join(ORIGINALS, t.dir.replace('/', path.sep));
    fs.mkdirSync(origDir, { recursive: true });
    fs.writeFileSync(path.join(origDir, 'SKILL.md'), content, 'utf-8');

    let desc = '';
    if (t.id === 'frontend-ui-engineering' && usedUrl?.endsWith('AGENTS.md')) {
      // AGENTS.md might have the description in its frontmatter or first section
      const yml = parseYaml(content);
      desc = yml.description || '';
      if (!desc) {
        // Try to extract from the body
        const body = content.replace(/^---[\s\S]*?---\n*/, '');
        const lines = body.split('\n').filter(l => l.trim());
        desc = lines.find(l => l.startsWith('#') && l.length > 20)?.replace(/^#+\s*/, '') || '';
      }
    } else {
      const yml = parseYaml(content);
      desc = yml.description || '';
    }

    const skill = catalog.skills.find(s => s.id === t.id);
    if (!skill) { console.log(`  ✗ ${t.id} — not in catalog`); continue; }

    if (desc) {
      skill.description = desc.trim();
      if (!skill.summary) {
        skill.summary = desc.length > 120 ? desc.substring(0, 120) + '...' : desc;
      }
      console.log(`  ✓ ${t.id} — restored (${desc.trim().length} chars)`);
    } else {
      // Try first meaningful line
      const body = content.replace(/^---[\s\S]*?---\n*/, '').trim();
      const firstLine = body.split('\n')[0].replace(/^#\s*/, '').trim();
      if (firstLine && firstLine.length > 10) {
        skill.description = firstLine;
        console.log(`  ~ ${t.id} — used first line (${firstLine.length} chars)`);
      } else {
        console.log(`  ✗ ${t.id} — no description found`);
      }
    }
  }

  fs.writeFileSync(CATALOG, JSON.stringify(catalog, null, 2), 'utf-8');
  console.log('\nDone');
}

main().catch(err => { console.error(err); process.exit(1); });
