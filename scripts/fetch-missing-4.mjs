/**
 * Try alternative paths for the 4 remaining missing skills.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CATALOG = path.resolve(__dirname, '..', 'src', 'data', 'catalog.json');
const ORIGINALS = path.resolve(__dirname, '..', 'src', 'originals');

const GH_HEADERS = { 'User-Agent': 'DesignX-Patcher/1.0' };

async function fetchText(url) {
  const resp = await fetch(url, { headers: GH_HEADERS });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return resp.text();
}

async function tryPaths(user, repo, paths) {
  for (const p of paths) {
    try {
      const url = `https://raw.githubusercontent.com/${user}/${repo}/${p}`;
      const content = await fetchText(url);
      return { url, content };
    } catch (e) {}
  }
  return null;
}

async function listRepo(user, repo, path) {
  try {
    const url = `https://api.github.com/repos/${user}/${repo}/contents/${path}`;
    const resp = await fetch(url, { headers: GH_HEADERS });
    if (!resp.ok) return null;
    return await resp.json();
  } catch (e) { return null; }
}

async function main() {
  const catalog = JSON.parse(fs.readFileSync(CATALOG, 'utf-8'));
  let found = 0;

  // 1. frontend-ui-engineering - addyosmani/agent-skills
  console.log('=== frontend-ui-engineering (addyosmani/agent-skills) ===');
  let items = await listRepo('addyosmani', 'agent-skills', '');
  if (items) {
    console.log('Root contents:', items.filter(i => i.type === 'file').map(i => i.name).join(', '));
    // Try to find SKILL.md anywhere
    const dirs = items.filter(i => i.type === 'dir');
    for (const dir of dirs) {
      const sub = await listRepo('addyosmani', 'agent-skills', dir.name);
      if (sub) {
        const skillFile = sub.find(i => i.name === 'SKILL.md' || i.name === 'skill.md');
        if (skillFile) {
          const result = await tryPaths('addyosmani', 'agent-skills', [`main/${dir.name}/SKILL.md`]);
          if (result) {
            console.log(`Found SKILL.md in ${dir.name}/`);
            // Save and parse
            const origDir = path.join(ORIGINALS, 'addyosmani', 'agent-skills', dir.name);
            fs.mkdirSync(origDir, { recursive: true });
            fs.writeFileSync(path.join(origDir, 'SKILL.md'), result.content, 'utf-8');
            const yml = parseYaml(result.content);
            const desc = (yml.description || '').trim();
            const skill = catalog.skills.find(s => s.id === 'frontend-ui-engineering');
            if (skill && desc) {
              skill.description = desc;
              console.log(`  ✓ restored (${desc.length} chars)`);
              found++;
            }
          }
        }
      }
    }
  } else {
    // Try alternate branch
    console.log('Trying alternate approaches...');
    const result = await tryPaths('addyosmani', 'agent-skills', [
      'main/src/SKILL.md',
      'master/src/SKILL.md',
      'main/skills/frontend-ui-engineering/SKILL.md',
      'master/skills/frontend-ui-engineering/SKILL.md',
    ]);
    if (result) {
      console.log('Found at:', result.url);
      const yml = parseYaml(result.content);
      const desc = (yml.description || '').trim();
      const skill = catalog.skills.find(s => s.id === 'frontend-ui-engineering');
      if (skill && desc) {
        skill.description = desc;
        console.log(`  ✓ restored (${desc.length} chars)`);
        found++;
      }
    } else {
      console.log('  ✗ not found');
    }
  }

  // 2. swiss-design-skill - zeke/swiss-design-skill
  console.log('\n=== swiss-design-skill (zeke/swiss-design-skill) ===');
  const result2 = await tryPaths('zeke', 'swiss-design-skill', [
    'main/skill.md',
    'master/skill.md',
    'main/swiss-design-skill/SKILL.md',
    'master/swiss-design-skill/SKILL.md',
    'main/SKILL.md',
  ]);
  if (result2) {
    console.log('Found at:', result2.url);
    const yml = parseYaml(result2.content);
    const desc = (yml.description || '').trim() || result2.content.replace(/^---[\s\S]*?---\n*/, '').trim().split('\n')[0].replace(/^#\s*/, '');
    const skill = catalog.skills.find(s => s.id === 'swiss-design-skill');
    if (skill && desc) {
      skill.description = desc;
      console.log(`  ✓ restored (${desc.length} chars)`);
      found++;
    }
  } else {
    console.log('  ✗ not found');
  }

  // 3. refactoring-ui-skill - jaywilburn/refactoring-ui-skill
  console.log('\n=== refactoring-ui-skill (jaywilburn/refactoring-ui-skill) ===');
  const result3 = await tryPaths('jaywilburn', 'refactoring-ui-skill', [
    'main/skill.md', 'master/skill.md',
    'main/SKILL.md', 'master/SKILL.md',
    'main/src/SKILL.md', 'master/src/SKILL.md',
  ]);
  if (result3) {
    console.log('Found at:', result3.url);
    const yml = parseYaml(result3.content);
    const desc = (yml.description || '').trim();
    const skill = catalog.skills.find(s => s.id === 'refactoring-ui-skill');
    if (skill && desc) {
      skill.description = desc;
      console.log(`  ✓ restored (${desc.length} chars)`);
      found++;
    } else {
      console.log('  has content but no description');
    }
  } else {
    console.log('  ✗ not found');
  }

  // 4. cnbb-visual-design - cnbb-design/ai-design
  console.log('\n=== cnbb-visual-design (cnbb-design/ai-design) ===');
  const result4 = await tryPaths('cnbb-design', 'ai-design', [
    'main/skill.md', 'master/skill.md',
    'main/SKILL.md', 'master/SKILL.md',
    'main/src/SKILL.md', 'master/src/SKILL.md',
    'main/skills/cnbb-visual-design/SKILL.md',
    'master/skills/cnbb-visual-design/SKILL.md',
  ]);
  if (result4) {
    console.log('Found at:', result4.url);
    const yml = parseYaml(result4.content);
    const desc = (yml.description || '').trim();
    const skill = catalog.skills.find(s => s.id === 'cnbb-visual-design');
    if (skill && desc) {
      skill.description = desc;
      console.log(`  ✓ restored (${desc.length} chars)`);
      found++;
    }
  } else {
    console.log('  ✗ not found');
  }

  if (found > 0) {
    fs.writeFileSync(CATALOG, JSON.stringify(catalog, null, 2), 'utf-8');
  }
  console.log(`\nTotal found this round: ${found}`);
}

// Copy of parseYaml
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

main().catch(err => { console.error(err); process.exit(1); });
