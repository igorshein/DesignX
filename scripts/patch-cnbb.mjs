import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CATALOG = path.resolve(__dirname, '..', 'src', 'data', 'catalog.json');

const catalog = JSON.parse(fs.readFileSync(CATALOG, 'utf-8'));
const skill = catalog.skills.find(s => s.id === 'cnbb-visual-design');

if (skill && skill.content) {
  const m = skill.content.match(/^---\n([\s\S]*?)(?:\n(?:---|\.\.\.)|$)/);
  if (m) {
    const lines = m[1].split('\n');
    let desc = '';
    let multiKey = null;
    for (const line of lines) {
      const kv = line.match(/^(\w[\w-]*):\s*(.*)$/);
      if (kv) {
        multiKey = null;
        const val = kv[2].trim().replace(/^["']|["']$/g, '');
        if (val === '|' || val === '>-') {
          multiKey = kv[1];
        } else if (kv[1] === 'description') {
          desc = val;
        }
      } else if (multiKey === 'description' && line.startsWith('  ')) {
        desc += (desc ? ' ' : '') + line.trim();
      } else {
        multiKey = null;
      }
    }
    if (desc) {
      skill.description = desc.trim();
      console.log(`Restored: ${desc.trim().length} chars`);
      // Save original
      const origDir = path.resolve(__dirname, '..', 'src', 'originals', 'cnbb-design', 'ai-design');
      fs.mkdirSync(origDir, { recursive: true });
      fs.writeFileSync(path.join(origDir, 'SKILL.md'), skill.content, 'utf-8');
      fs.writeFileSync(CATALOG, JSON.stringify(catalog, null, 2), 'utf-8');
      console.log('Saved to catalog and originals');
    }
  }
}
