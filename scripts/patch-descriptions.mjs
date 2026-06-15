/**
 * patch-descriptions.mjs
 *
 * Reads original SKILL.md files from src/originals/nexu-io/
 * and patches catalog.json with proper multi-line YAML descriptions.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CATALOG = path.resolve(__dirname, '..', 'src', 'data', 'catalog.json');
const ORIGINALS = path.resolve(__dirname, '..', 'src', 'originals', 'nexu-io');

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

const catalog = JSON.parse(fs.readFileSync(CATALOG, 'utf-8'));
let patched = 0, notFound = 0, noChange = 0;

const dirs = fs.readdirSync(ORIGINALS, { withFileTypes: true }).filter(d => d.isDirectory());
for (const dir of dirs) {
  const skillDir = path.join(ORIGINALS, dir.name);
  const skillFile = path.join(skillDir, 'SKILL.md');
  if (!fs.existsSync(skillFile)) continue;

  const content = fs.readFileSync(skillFile, 'utf-8');
  const yml = parseYaml(content);
  const desc = (yml.description || '').trim();
  if (!desc) continue;

  const skillId = `nexu-io-${dir.name}`;
  const skill = catalog.skills.find(s => s.id === skillId);
  if (!skill) { notFound++; continue; }

  if (skill.description !== desc) {
    skill.description = desc;
    // Also update summary if it was an empty string
    if (!skill.summary || skill.summary === '') {
      skill.summary = desc.length > 120 ? desc.substring(0, 120) + '...' : desc;
    }
    patched++;
  } else {
    noChange++;
  }
}

fs.writeFileSync(CATALOG, JSON.stringify(catalog, null, 2), 'utf-8');
console.log(`Patched ${patched} skills, ${notFound} not found, ${noChange} already correct`);
