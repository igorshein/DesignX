// import-oh-my-design.mjs
// Импорт 67 DESIGN.md из netsus/oh-my-design (OmD v0.1 spec)
// Prose-формат с философским слоем
import fs from 'fs';
import path from 'path';

const CATALOG_PATH = './src/data/catalog.json';
const REPO = 'netsus/oh-my-design';
const BRANCH = 'main';
const RAW_BASE = `https://raw.githubusercontent.com/${REPO}/${BRANCH}`;

// Лёгкие тэги
const TAG_MAP = {
  'dark-mode': ['dark', 'achromatic', 'near-black', '#0a0', 'dark-mode'],
  'light-mode': ['light', 'white bg', 'clean background'],
  'minimal': ['minimal', 'clean', 'simple', 'restrained'],
  'premium': ['premium', 'luxury', 'high-end', 'sophisticated'],
  'tech': ['tech', 'developer', 'engineering', 'startup'],
  'playful': ['playful', 'colorful', 'vibrant', 'fun'],
  'brand': ['brand', 'identity'],
};

function deriveTags(content, name) {
  const lower = (content + ' ' + name).toLowerCase();
  const tags = [];
  for (const [tag, keywords] of Object.entries(TAG_MAP)) {
    if (keywords.some(kw => lower.includes(kw))) tags.push(tag);
  }
  return tags;
}

function extractTokens(content) {
  // Извлекаем hex-цвета из текста
  const hexColors = [...content.matchAll(/#([0-9a-fA-F]{3,8})\b/g)].map(m => '#' + m[1].toLowerCase());
  const unique = [...new Set(hexColors)].slice(0, 20);
  if (unique.length === 0) return {};

  // Формируем базовые CSS-токены из найденных цветов
  const tokens = {};
  if (unique.length >= 1) tokens['--bg-primary'] = unique[0];
  if (unique.length >= 2) tokens['--text-primary'] = unique[1];
  if (unique.length >= 3) tokens['--accent-primary'] = unique[2];
  if (unique.length >= 4) tokens['--bg-secondary'] = unique[3];
  if (unique.length >= 5) tokens['--border-color'] = unique[4];
  return tokens;
}

function extractBrand(fm, content, name) {
  // Из frontmatter берём brand, иначе из пути
  if (fm?.brand) return fm.brand;
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function parseOmdFrontmatter(raw) {
  const fm = {};
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (match) {
    match[1].split('\n').forEach(line => {
      const sep = line.indexOf(': ');
      if (sep > 0) {
        fm[line.slice(0, sep).trim()] = line.slice(sep + 2).trim();
      }
    });
  }
  return fm;
}

function generateId(name) {
  return 'omd-' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

async function main() {
  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf-8'));
  const existingIds = new Set(catalog.design_systems.map(d => d.id));

  // Получаем список всех DESIGN.md в references/
  const treeUrl = `https://api.github.com/repos/${REPO}/git/trees/${BRANCH}?recursive=1`;
  const treeRes = await fetch(treeUrl, { headers: { 'User-Agent': 'DesignX' } });
  const treeData = await treeRes.json();

  if (!treeData.tree) {
    console.error('Failed to fetch tree:', JSON.stringify(treeData).substring(0, 300));
    process.exit(1);
  }

  // Фильтруем файлы DESIGN.md из references/ (не web/references/)
  const designMdFiles = treeData.tree.filter(
    x => x.type === 'blob' && x.path.startsWith('references/') && x.path.endsWith('/DESIGN.md')
  );

  console.log(`Found ${designMdFiles.length} DESIGN.md files in references/`);

  let added = 0;
  let skipped = 0;

  // Обрабатываем батчами по 5 для избегания rate limit
  const batchSize = 5;
  for (let i = 0; i < designMdFiles.length; i += batchSize) {
    const batch = designMdFiles.slice(i, i + batchSize);
    const promises = batch.map(async (file) => {
      const brandName = file.path.split('/')[1];
      const id = generateId(brandName);

      if (existingIds.has(id)) {
        return { status: 'skipped', id, brandName, reason: 'already exists' };
      }

      try {
        const rawUrl = `${RAW_BASE}/${file.path}`;
        const resp = await fetch(rawUrl, { headers: { 'User-Agent': 'DesignX' } });
        if (!resp.ok) return { status: 'error', id, brandName, reason: `HTTP ${resp.status}` };

        const content = await resp.text();
        const fm = parseOmdFrontmatter(content);
        const brand = extractBrand(fm, content, brandName);

        // Извлекаем цветовые токены из прозы
        const tokens = extractTokens(content);
        const contentPreview = content.substring(0, 500).trim();

        // Улучшаем описание: ищем "Visual Theme" секцию
        const themeMatch = content.match(/##[^#]*Visual Theme[^#]*##/s);
        let description = `OmD v0.1 — ${brand}`;
        if (themeMatch) {
          const themeText = themeMatch[0].replace(/^##[^#]*##\s*/m, '').trim();
          // Берём первую осмысленную фразу
          const firstSentence = themeText.split(/(?<=\.)\s+/).slice(0, 2).join(' ');
          description = firstSentence.length > 40 ? firstSentence.substring(0, 200) : brand;
        }

        const entry = {
          id,
          name: brand,
          category: fm.type || 'brand',
          source: `${REPO} (references/${brandName})`,
          format: 'omd-v0.1',
          description,
          content: contentPreview,
          tokens_css: Object.keys(tokens).length > 0 ? tokens : undefined,
          tags: deriveTags(content, brand),
          product_types: [],
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
        console.log(`  + ${r.entry.id} (${r.brandName})`);
      } else if (r.status === 'error') {
        console.error(`  ! ${r.brandName}: ${r.reason}`);
        skipped++;
      } else {
        skipped++;
      }
    }

    // Небольшая пауза между батчами
    if (i + batchSize < designMdFiles.length) {
      await new Promise(r => setTimeout(r, 500));
    }
  }

  console.log(`\nDone: ${added} added, ${skipped} skipped`);
  fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2), 'utf-8');
}

main().catch(console.error);
