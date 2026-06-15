// import-kwak-oh-my-design.mjs
// Импорт 492 DESIGN.md из kwakseongjae/oh-my-design
import fs from 'fs';

const CATALOG_PATH = './src/data/catalog.json';
const REPO = 'kwakseongjae/oh-my-design';
const BRANCH = 'main';
const RAW_BASE = `https://raw.githubusercontent.com/${REPO}/${BRANCH}`;

function genId(name) {
  return 'kwak-' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

async function main() {
  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf-8'));
  const existingIds = new Set(catalog.design_systems.map(d => d.id));

  const r = await fetch(`https://api.github.com/repos/${REPO}/git/trees/main?recursive=1`, { headers: { 'User-Agent': 'DesignX' } });
  const j = await r.json();
  if (!j.tree) { console.error('No tree:', JSON.stringify(j).substring(0, 300)); process.exit(1); }

  const files = j.tree.filter(x => x.type === 'blob' && x.path.startsWith('design-md/') && x.path.endsWith('/DESIGN.md'));
  console.log(`Found ${files.length} DESIGN.md files`);

  let added = 0, skip = 0;
  const batchSize = 5;

  for (let i = 0; i < files.length; i += batchSize) {
    const batch = files.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(async (f) => {
      const name = f.path.split('/')[1];
      const id = genId(name);
      if (existingIds.has(id)) return { s: 'skip', id };

      try {
        const resp = await fetch(`${RAW_BASE}/${f.path}`, { headers: { 'User-Agent': 'DesignX' } });
        if (!resp.ok) return { s: 'err', id, reason: `HTTP ${resp.status}` };

        const content = await resp.text();
        const hex = [...content.matchAll(/#([0-9a-fA-F]{3,8})\b/g)].map(m => '#' + m[1].toLowerCase());
        const u = [...new Set(hex)].slice(0, 20);
        const tokens = {};
        if (u[0]) tokens['--bg-primary'] = u[0];
        if (u[1]) tokens['--text-primary'] = u[1];
        if (u[2]) tokens['--accent-primary'] = u[2];
        if (u[3]) tokens['--bg-secondary'] = u[3];
        if (u[4]) tokens['--border-color'] = u[4];

        return {
          s: 'add', entry: {
            id, name: name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' '),
            source: 'kwakseongjae/oh-my-design',
            format: 'omd-v0.1',
            category: 'brand',
            description: `OmD v0.1 — ${name}`,
            content: content.substring(0, 500).trim(),
            tokens_css: Object.keys(tokens).length > 0 ? tokens : undefined,
            tags: ['brand'],
            product_types: [],
            rating: 4,
          }
        };
      } catch (e) { return { s: 'err', id, reason: e.message }; }
    }));

    for (const r of results) {
      if (r.s === 'add') { catalog.design_systems.push(r.entry); existingIds.add(r.entry.id); added++; }
      else if (r.s === 'err') { skip++; console.error('  ! ' + r.id + ': ' + r.reason); }
      else skip++;
    }

    if (i % 50 === 0) console.log(`${added} added / ${skip} skipped / ${i + batch.length} total`);
    if (i + batchSize < files.length) await new Promise(r => setTimeout(r, 150));
  }

  console.log(`\nDone: ${added} added, ${skip} skipped`);
  fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2), 'utf-8');
}

main().catch(console.error);
