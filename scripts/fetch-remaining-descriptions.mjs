/**
 * fetch-remaining-descriptions.mjs
 *
 * Fetches SKILL.md from GitHub for the 11 remaining skills without descriptions.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CATALOG = path.resolve(__dirname, '..', 'src', 'data', 'catalog.json');
const ORIGINALS = path.resolve(__dirname, '..', 'src', 'originals');

const GH_HEADERS = { 'User-Agent': 'DesignX-Patcher/1.0' };

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
      if (val === '|' || val === '>-') {
        multiKey = kv[1];
        result[multiKey] = '';
      } else {
        result[kv[1]] = val;
      }
    } else if (multiKey && line.startsWith('  ')) {
      result[multiKey] += (result[multiKey] ? ' ' : '') + line.trim();
    } else {
      multiKey = null;
    }
  }
  return result;
}

const sources = [
  { id: 'frontend-ui-engineering',  user: 'addyosmani',       repo: 'agent-skills',                paths: ['main/SKILL.md'] },
  { id: 'omd-brand-context',        user: 'netsus',            repo: 'oh-my-design',                paths: ['main/.claude/skills/omd/SKILL.md', 'master/.claude/skills/omd/SKILL.md'] },
  { id: 'ui-design-brain',          user: 'carmahhawwari',     repo: 'ui-design-brain',             paths: ['main/SKILL.md', 'master/SKILL.md'] },
  { id: 'swiss-design-skill',       user: 'zeke',              repo: 'swiss-design-skill',          paths: ['main/SKILL.md', 'master/SKILL.md'] },
  { id: 'frontend-design-skill',    user: 'Ilm-Alan',          repo: 'frontend-design',             paths: ['main/SKILL.md', 'master/SKILL.md'] },
  { id: 'ux-writing-skill',         user: 'content-designer',  repo: 'ux-writing-skill',            paths: ['main/SKILL.md', 'master/SKILL.md'] },
  { id: 'anydesign',                user: 'uxKero',            repo: 'anydesign',                   paths: ['main/SKILL.md', 'master/SKILL.md'] },
  { id: 'refactoring-ui-skill',     user: 'jaywilburn',        repo: 'refactoring-ui-skill',        paths: ['main/SKILL.md', 'master/SKILL.md'] },
  { id: 'pencil-design-skill',      user: 'chiroro-jr',        repo: 'pencil-design-skill',         paths: ['main/SKILL.md', 'master/SKILL.md'] },
  { id: 'design-system-skill',      user: 'albertzhangz10',    repo: 'design-system-skill',         paths: ['main/SKILL.md', 'master/SKILL.md'] },
  { id: 'cnbb-visual-design',       user: 'cnbb-design',       repo: 'ai-design',                   paths: ['main/SKILL.md', 'master/SKILL.md'] },
];

async function fetchText(url) {
  const resp = await fetch(url, { headers: GH_HEADERS });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return resp.text();
}

async function main() {
  const catalog = JSON.parse(fs.readFileSync(CATALOG, 'utf-8'));
  let found = 0, notFound = 0;

  for (const s of sources) {
    let content = null;
    let usedPath = null;

    for (const p of s.paths) {
      const url = `https://raw.githubusercontent.com/${s.user}/${s.repo}/${p}`;
      try {
        content = await fetchText(url);
        usedPath = url;
        break;
      } catch (e) {
        // try next
      }
    }

    if (!content) {
      console.log(`  ✗ ${s.id} — not found (tried ${s.paths.length} paths)`);
      notFound++;
      continue;
    }

    // Save original
    const origDir = path.join(ORIGINALS, s.user, s.repo.replace(/[^a-z0-9-]/gi, '-'));
    fs.mkdirSync(origDir, { recursive: true });
    fs.writeFileSync(path.join(origDir, 'SKILL.md'), content, 'utf-8');

    // Parse description
    const yml = parseYaml(content);
    const desc = (yml.description || '').trim();

    const skill = catalog.skills.find(sk => sk.id === s.id);
    if (!skill) {
      console.log(`  ✗ ${s.id} — not in catalog`);
      notFound++;
      continue;
    }

    if (desc) {
      skill.description = desc;
      if (!skill.summary) {
        skill.summary = desc.length > 120 ? desc.substring(0, 120) + '...' : desc;
      }
      console.log(`  ✓ ${s.id} — restored (${desc.length} chars)`);
      found++;
    } else {
      // Try to get description from body (first line after frontmatter)
      const body = content.replace(/^---[\s\S]*?---\n*/, '').trim();
      const firstLine = body.split('\n')[0].replace(/^#\s*/, '').trim();
      if (firstLine && firstLine.length > 10) {
        skill.description = firstLine;
        console.log(`  ~ ${s.id} — used first body line (${firstLine.length} chars)`);
        found++;
      } else {
        console.log(`  ✗ ${s.id} — no description in YAML or body`);
        notFound++;
      }
    }
  }

  fs.writeFileSync(CATALOG, JSON.stringify(catalog, null, 2), 'utf-8');
  console.log(`\nDone: ${found} found, ${notFound} not found`);
}

main().catch(err => { console.error(err); process.exit(1); });
