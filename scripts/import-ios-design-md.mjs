// import-ios-design-md.mjs
// Импорт generic DESIGN.md из Meliwat/awesome-ios-design-md
// Каждый бренд имеет DESIGN.md (+ platform variants). Берём только generic.
import fs from 'fs';

const CATALOG_PATH = './src/data/catalog.json';
const REPO = 'Meliwat/awesome-ios-design-md';
const BRANCH = 'main';
const RAW_BASE = `https://raw.githubusercontent.com/${REPO}/${BRANCH}`;

function generateId(name) {
  return 'ios-' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function extractTokens(content) {
  const hexColors = [...content.matchAll(/#([0-9a-fA-F]{3,8})\b/g)].map(m => '#' + m[1].toLowerCase());
  const unique = [...new Set(hexColors)].slice(0, 20);
  if (unique.length === 0) return {};
  const tokens = {};
  if (unique.length >= 1) tokens['--bg-primary'] = unique[0];
  if (unique.length >= 2) tokens['--text-primary'] = unique[1];
  if (unique.length >= 3) tokens['--accent-primary'] = unique[2];
  if (unique.length >= 4) tokens['--bg-secondary'] = unique[3];
  if (unique.length >= 5) tokens['--border-color'] = unique[4];
  return tokens;
}

function getCategory(path) {
  const cat = path.split('/')[1]; // design-md/{category}/{brand}/DESIGN.md
  const catMap = {
    dating: 'mobile',
    finance: 'mobile',
    fitness: 'mobile',
    food: 'mobile',
    messaging: 'mobile',
    misc: 'mobile',
    music: 'mobile',
    productivity: 'mobile',
    social: 'mobile',
    travel: 'mobile',
    video: 'mobile',
  };
  return catMap[cat] || 'mobile';
}

async function main() {
  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf-8'));
  const existingIds = new Set(catalog.design_systems.map(d => d.id));

  // Получаем дерево репозитория
  const treeUrl = `https://api.github.com/repos/${REPO}/git/trees/${BRANCH}?recursive=1`;
  const treeRes = await fetch(treeUrl, { headers: { 'User-Agent': 'DesignX' } });
  const treeData = await treeRes.json();
  if (!treeData.tree) {
    console.error('Failed to fetch tree:', JSON.stringify(treeData).substring(0, 300));
    process.exit(1);
  }

  // Берём только generic DESIGN.md (не platform-specific android/expo/swiftui)
  const designMdFiles = treeData.tree.filter(
    x => x.type === 'blob' && x.path.includes('/DESIGN.md') && !x.path.includes('DESIGN-android') && !x.path.includes('DESIGN-expo') && !x.path.includes('DESIGN-swiftui')
  );

  console.log(`Found ${designMdFiles.length} generic DESIGN.md files`);

  let added = 0;
  let skipped = 0;
  const batchSize = 5;

  for (let i = 0; i < designMdFiles.length; i += batchSize) {
    const batch = designMdFiles.slice(i, i + batchSize);
    const promises = batch.map(async (file) => {
      const parts = file.path.split('/');
      const brandName = parts[2]; // design-md/{category}/{brand}/DESIGN.md
      const id = generateId(brandName);

      if (existingIds.has(id)) {
        return { status: 'skipped', id, brandName };
      }

      try {
        const resp = await fetch(`${RAW_BASE}/${file.path}`, { headers: { 'User-Agent': 'DesignX' } });
        if (!resp.ok) return { status: 'error', id, brandName, reason: `HTTP ${resp.status}` };

        const content = await resp.text();
        const tokens = extractTokens(content);
        const contentPreview = content.substring(0, 500).trim();

        const entry = {
          id,
          name: brandName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
          source: `Meliwat/awesome-ios-design-md (${parts[1]})`,
          format: 'design-md',
          category: getCategory(file.path),
          description: `iOS design system — ${brandName}`,
          content: contentPreview,
          tokens_css: Object.keys(tokens).length > 0 ? tokens : undefined,
          tags: ['ios', 'mobile', parts[1]],
          product_types: ['mobile-app'],
          rating: 4,
        };

        return { status: 'added', entry, brandName };
      } catch (err) {
        return { status: 'error', id, brandName, reason: err.message };
      }
    });

    const results = await Promise.all(promises);
    for (const r of results) {
      if (r.status === 'added') {
        catalog.design_systems.push(r.entry);
        existingIds.add(r.entry.id);
        added++;
        if (added <= 10 || added % 20 === 0) console.log(`  + ${r.entry.id}`);
      } else if (r.status === 'error') {
        console.error(`  ! ${r.brandName}: ${r.reason}`);
        skipped++;
      } else {
        skipped++;
      }
    }

    if (i + batchSize < designMdFiles.length) {
      await new Promise(r => setTimeout(r, 300));
    }
  }

  console.log(`\nDone: ${added} added, ${skipped} skipped`);
  fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2), 'utf-8');
}

main().catch(console.error);
