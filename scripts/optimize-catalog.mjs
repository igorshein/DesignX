// optimize-catalog.mjs — комплексная оптимизация каталога DesignX
// Запуск: node scripts/optimize-catalog.mjs
import fs from 'fs';

const CATALOG_PATH = './src/data/catalog.json';
const BACKUP_PATH = './src/data/catalog.backup.json';
const NEW_SOURCES_PATH = './src/data/new-design-systems.json';

// ---- product_types inference ----
const BRAND_PRODUCT_MAP = {
  'airbnb': ['web-app', 'mobile', 'ecommerce'],
  'spotify': ['web-app', 'mobile', 'desktop'],
  'notion': ['web-app', 'mobile', 'desktop'],
  'figma': ['web-app', 'desktop', 'design-tool'],
  'linear': ['web-app', 'desktop'],
  'stripe': ['web-app', 'saas'],
  'vercel': ['web-app', 'saas'],
  'miro': ['web-app', 'saas'],
  'slack': ['web-app', 'desktop', 'saas'],
  'discord': ['web-app', 'mobile', 'desktop'],
  'telegram': ['mobile', 'web-app', 'desktop'],
  'whatsapp': ['mobile', 'web-app', 'desktop'],
  'instagram': ['mobile', 'web-app'],
  'pinterest': ['web-app', 'mobile'],
  'netflix': ['web-app', 'mobile', 'desktop'],
  'youtube': ['web-app', 'mobile', 'desktop'],
  'twitter': ['web-app', 'mobile'],
  'linkedin': ['web-app', 'mobile', 'saas'],
  'uber': ['mobile', 'web-app'],
  'doordash': ['mobile', 'web-app'],
  'airtable': ['web-app', 'saas'],
  'notion': ['web-app', 'mobile', 'desktop'],
  'todoist': ['web-app', 'mobile', 'desktop'],
  'trello': ['web-app', 'mobile'],
  'jira': ['web-app', 'saas', 'desktop'],
  'monday': ['web-app', 'saas'],
  'asana': ['web-app', 'saas'],
  'basecamp': ['web-app', 'saas'],
  'shopify': ['web-app', 'saas', 'ecommerce'],
  'stripe': ['web-app', 'saas'],
  'paypal': ['web-app', 'mobile'],
  'square': ['web-app', 'mobile'],
  'coinbase': ['web-app', 'mobile', 'desktop'],
  'kraken': ['web-app', 'mobile'],
  'binance': ['web-app', 'mobile'],
  'revolut': ['mobile', 'web-app'],
  'wise': ['web-app', 'mobile'],
  'monzo': ['mobile', 'web-app'],
  'chime': ['mobile', 'web-app'],
  'mint': ['web-app', 'mobile'],
  'robinhood': ['mobile', 'web-app'],
  'ibm': ['web-app', 'saas', 'desktop'],
  'microsoft': ['desktop', 'web-app', 'saas'],
  'apple': ['mobile', 'desktop', 'web-app'],
  'google': ['web-app', 'mobile', 'saas'],
  'amazon': ['web-app', 'ecommerce'],
  'meta': ['web-app', 'mobile'],
  'netflix': ['web-app', 'mobile', 'desktop'],
  'tesla': ['web-app', 'mobile'],
  'nvidia': ['desktop', 'web-app'],
  'mastercard': ['web-app', 'mobile'],
  'mcdonalds': ['mobile', 'web-app'],
  'nike': ['web-app', 'mobile', 'ecommerce'],
  'adidas': ['web-app', 'mobile', 'ecommerce'],
  'lululemon': ['web-app', 'mobile', 'ecommerce'],
  'zara': ['web-app', 'mobile', 'ecommerce'],
  'hm': ['web-app', 'mobile', 'ecommerce'],
  'ikea': ['web-app', 'mobile', 'ecommerce'],
  'target': ['web-app', 'mobile', 'ecommerce'],
  'walmart': ['web-app', 'mobile', 'ecommerce'],
  'bestbuy': ['web-app', 'mobile', 'ecommerce'],
  'ebay': ['web-app', 'mobile', 'ecommerce'],
  'etsy': ['web-app', 'mobile', 'ecommerce'],
  'kickstarter': ['web-app', 'mobile'],
  'indiegogo': ['web-app', 'mobile'],
  'producthunt': ['web-app'],
  'dribbble': ['web-app', 'design-tool'],
  'behance': ['web-app', 'design-tool'],
  'medium': ['web-app', 'mobile'],
  'substack': ['web-app', 'mobile'],
  'patreon': ['web-app', 'mobile'],
  'discourse': ['web-app', 'saas'],
  'github': ['web-app', 'desktop'],
  'gitlab': ['web-app', 'saas'],
  'bitbucket': ['web-app', 'saas', 'desktop'],
  'datadog': ['web-app', 'saas', 'dashboard'],
  'sentry': ['web-app', 'saas'],
  'newrelic': ['web-app', 'saas', 'dashboard'],
  'amplitude': ['web-app', 'saas', 'dashboard'],
  'mixpanel': ['web-app', 'saas', 'dashboard'],
  'hotjar': ['web-app', 'saas'],
  'intercom': ['web-app', 'saas'],
  'zendesk': ['web-app', 'saas'],
  'hubspot': ['web-app', 'saas'],
  'salesforce': ['web-app', 'saas'],
  'datadog': ['web-app', 'saas', 'dashboard'],
  'splunk': ['web-app', 'saas', 'dashboard'],
  'elastic': ['web-app', 'saas', 'dashboard'],
  'tableau': ['desktop', 'web-app', 'dashboard'],
  'looker': ['web-app', 'saas', 'dashboard'],
  'posthog': ['web-app', 'saas', 'dashboard'],
  'retool': ['web-app', 'saas'],
  'airplane': ['web-app', 'saas'],
  'railway': ['web-app', 'saas'],
  'netlify': ['web-app', 'saas'],
  'render': ['web-app', 'saas'],
  'fly': ['web-app', 'saas'],
  'digitalocean': ['web-app', 'saas'],
  'vercel': ['web-app', 'saas'],
  'cloudflare': ['web-app', 'saas'],
  'aws': ['web-app', 'saas'],
  'gcp': ['web-app', 'saas'],
  'azure': ['web-app', 'saas'],
  'mongodb': ['web-app', 'saas', 'desktop'],
  'redis': ['desktop', 'web-app', 'saas'],
  'postgres': ['web-app', 'saas'],
  'supabase': ['web-app', 'saas'],
  'firebase': ['web-app', 'saas'],
  'planetscale': ['web-app', 'saas'],
  'neon': ['web-app', 'saas'],
  'cockroachdb': ['web-app', 'saas'],
  'confluent': ['web-app', 'saas'],
  'stytch': ['web-app', 'saas'],
  'clerk': ['web-app', 'saas'],
  'auth0': ['web-app', 'saas'],
  'okta': ['web-app', 'saas'],
  'framer': ['web-app', 'design-tool'],
  'webflow': ['web-app', 'design-tool'],
  'wix': ['web-app', 'design-tool'],
  'squarespace': ['web-app', 'design-tool'],
  'wordpress': ['web-app', 'design-tool'],
  'ghost': ['web-app', 'saas'],
  'contentful': ['web-app', 'saas'],
  'sanity': ['web-app', 'saas'],
  'strapi': ['web-app', 'saas'],
  'directus': ['web-app', 'saas'],
  'prismic': ['web-app', 'saas'],
  'storyblok': ['web-app', 'saas'],
  'datocms': ['web-app', 'saas'],
  'cosmic': ['web-app', 'saas'],
  'buttercms': ['web-app', 'saas'],
  'tinacms': ['web-app', 'saas'],
  'forestry': ['web-app', 'saas'],
  'cloudcannon': ['web-app', 'saas'],
  'stackbit': ['web-app', 'saas'],
  'loom': ['web-app', 'saas'],
  'vimeo': ['web-app', 'saas'],
  'wistia': ['web-app', 'saas'],
  'mux': ['web-app', 'saas'],
  'twilio': ['web-app', 'saas'],
  'sendgrid': ['web-app', 'saas'],
  'mailchimp': ['web-app', 'saas'],
  'customerio': ['web-app', 'saas'],
  'iterable': ['web-app', 'saas'],
  'braze': ['web-app', 'saas'],
  'clevertap': ['web-app', 'saas'],
  'onesignal': ['web-app', 'saas'],
  'segment': ['web-app', 'saas'],
  'mparticle': ['web-app', 'saas'],
  'amplitude': ['web-app', 'saas', 'dashboard'],
  'calendly': ['web-app', 'saas'],
  'cal': ['web-app', 'saas'],
  'savvycal': ['web-app', 'saas'],
  'youcanbook': ['web-app', 'saas'],
  'acuity': ['web-app', 'saas'],
  'typeform': ['web-app', 'saas'],
  'surveymonkey': ['web-app', 'saas'],
  'jotform': ['web-app', 'saas'],
  'googleforms': ['web-app', 'saas'],
  'notion': ['web-app', 'mobile', 'desktop'],
  'obsidian': ['desktop', 'mobile', 'web-app'],
  'roam': ['web-app', 'desktop'],
  'logseq': ['desktop', 'web-app'],
  'bear': ['mobile', 'desktop'],
  'ulysses': ['desktop', 'mobile'],
  'iawriter': ['desktop', 'mobile'],
  'byword': ['desktop', 'mobile'],
  'drafts': ['mobile', 'desktop'],
  'tailwind': ['web-app', 'design-tool'],
  'bootstrap': ['web-app', 'design-tool'],
  'materialui': ['web-app', 'design-tool'],
  'antdesign': ['web-app', 'design-tool'],
  'chakra': ['web-app', 'design-tool'],
  'radix': ['web-app', 'design-tool'],
  'shadcn': ['web-app', 'design-tool'],
  'primereact': ['web-app', 'design-tool'],
  'nextui': ['web-app', 'design-tool'],
};

const AESTHETIC_PRODUCT_MAP = {
  'industrial-minimal': ['web-app', 'saas', 'dashboard', 'desktop'],
  'brutally-minimal': ['web-app', 'landing'],
  'brutalist-raw': ['web-app', 'desktop', 'landing'],
  'retro-futuristic': ['web-app', 'landing', 'game'],
  'luxury-refined': ['web-app', 'landing', 'marketing', 'ecommerce'],
  'editorial-magazine': ['web-app', 'landing', 'marketing'],
  'soft-pastel': ['web-app', 'mobile', 'landing', 'ecommerce'],
  'art-deco-geometric': ['web-app', 'landing', 'marketing'],
  'playful': ['web-app', 'mobile', 'landing', 'game'],
  'japanese-minimal': ['web-app', 'landing', 'ecommerce'],
  'scandinavian': ['web-app', 'landing', 'ecommerce', 'mobile'],
  'cyberpunk': ['web-app', 'game', 'mobile', 'landing'],
  'glassmorphism': ['web-app', 'mobile', 'dashboard', 'landing'],
  'neumorphism': ['mobile', 'web-app', 'dashboard'],
  'maximalist-chaos': ['web-app', 'landing', 'game'],
};

const SOURCE_PRODUCT_MAP = {
  'Meliwat/awesome-ios-design-md (social)': ['mobile'],
  'Meliwat/awesome-ios-design-md (finance)': ['mobile'],
  'Meliwat/awesome-ios-design-md (productivity)': ['mobile'],
  'Meliwat/awesome-ios-design-md (travel)': ['mobile'],
  'Meliwat/awesome-ios-design-md (misc)': ['mobile'],
  'Meliwat/awesome-ios-design-md (fitness)': ['mobile'],
  'Meliwat/awesome-ios-design-md (food)': ['mobile'],
  'Meliwat/awesome-ios-design-md (messaging)': ['mobile'],
  'Meliwat/awesome-ios-design-md (video)': ['mobile'],
  'Meliwat/awesome-ios-design-md (music)': ['mobile'],
  'Meliwat/awesome-ios-design-md (dating)': ['mobile'],
};

const TAG_PRODUCT_MAP = {
  'dashboard': ['dashboard'],
  'ecommerce': ['ecommerce'],
  'game': ['game'],
  'gaming': ['game'],
  'mobile': ['mobile'],
  'saas': ['saas'],
  'landing': ['landing', 'marketing'],
  'marketing': ['marketing'],
  'desktop': ['desktop'],
  'design-tool': ['design-tool'],
};

function inferProductTypes(ds) {
  if (ds.product_types && ds.product_types.length > 0) {
    // Normalize existing product_types if they use wrong IDs
    const validIds = new Set(['web-app', 'dashboard', 'landing', 'saas', 'mobile', 'ecommerce', 'desktop', 'marketing', 'game', 'design-tool']);
    const normalized = ds.product_types.filter(pt => validIds.has(pt));
    if (normalized.length > 0) return [...new Set(normalized)];
  }

  const result = new Set();
  const name = (ds.name || '').toLowerCase();

  // Check brand map
  for (const [brand, types] of Object.entries(BRAND_PRODUCT_MAP)) {
    if (name.includes(brand) || ds.id?.includes(brand)) {
      types.forEach(t => result.add(t));
    }
  }

  // Check aesthetic map
  if (ds.aesthetic && AESTHETIC_PRODUCT_MAP[ds.aesthetic]) {
    AESTHETIC_PRODUCT_MAP[ds.aesthetic].forEach(t => result.add(t));
  }

  // Check source map
  if (ds.source && SOURCE_PRODUCT_MAP[ds.source]) {
    SOURCE_PRODUCT_MAP[ds.source].forEach(t => result.add(t));
  }

  // Check tags
  if (ds.tags && ds.tags.length > 0) {
    for (const tag of ds.tags) {
      const tl = tag.toLowerCase();
      if (TAG_PRODUCT_MAP[tl]) {
        TAG_PRODUCT_MAP[tl].forEach(t => result.add(t));
      }
    }
  }

  // Check description for keywords
  const desc = (typeof ds.description === 'string' ? ds.description : '').toLowerCase();
  if (desc.includes('dashboard') || desc.includes('analytics') || desc.includes('kpi')) result.add('dashboard');
  if (desc.includes('ecommerce') || desc.includes('shop') || desc.includes('store') || desc.includes('marketplace')) result.add('ecommerce');
  if (desc.includes('mobile') || desc.includes('app') || desc.includes('ios') || desc.includes('android')) result.add('mobile');
  if (desc.includes('saas') || desc.includes('b2b') || desc.includes('enterprise') || desc.includes('platform')) result.add('saas');
  if (desc.includes('landing') || desc.includes('marketing') || desc.includes('hero') || desc.includes('campaign')) result.add('landing');
  if (desc.includes('game') || desc.includes('gaming') || desc.includes('play')) result.add('game');
  if (desc.includes('desktop') || desc.includes('native')) result.add('desktop');
  if (desc.includes('design tool') || desc.includes('design-tool') || desc.includes('figma') || desc.includes('editor')) result.add('design-tool');

  // Default fallback for brand-like names
  if (result.size === 0) {
    // If it looks like a brand name (single word, capitalized), default to web-app
    if (name.length > 0 && name.length < 30 && !name.includes('-design') && !name.includes('-analysis')) {
      result.add('web-app');
    }
  }

  return result.size > 0 ? [...result] : [];
}

// ---- Token normalization ----
function normalizeTokens(tokens) {
  if (!tokens || typeof tokens !== 'object') return null;

  // Check if already in standard format
  if (tokens.bg || tokens.text || tokens.accent) {
    // Already standard, just ensure all fields exist
    const out = { ...tokens };
    if (!out.font) out.font = 'JetBrains Mono';
    if (!out.radius && out.radius !== 0) out.radius = '6px';
    if (out.dark === undefined) {
      // Infer from bg luminance
      const bg = out.bg || '#ffffff';
      const isDark = isDarkColor(bg);
      out.dark = isDark;
    }
    return out;
  }

  // OmD format: --bg-primary, --text-primary, --accent-primary, etc.
  const omdMap = {
    '--bg-primary': 'bg',
    '--bg-secondary': 'bg_elevated',
    '--bg-elevated': 'bg_elevated',
    '--text-primary': 'text',
    '--text-secondary': 'text_muted',
    '--text-muted': 'text_muted',
    '--accent-primary': 'accent',
    '--accent-secondary': 'accent2',
    '--accent': 'accent',
    '--border-color': 'border',
    '--border': 'border',
    '--success': 'success',
    '--error': 'error',
    '--warning': 'warning',
    '--radius': 'radius',
    '--font': 'font',
  };

  const out = {};
  let hasValue = false;

  for (const [key, val] of Object.entries(tokens)) {
    if (omdMap[key]) {
      out[omdMap[key]] = val;
      hasValue = true;
    }
  }

  // If no match with CSS var names, try to extract hex values positionally
  if (!hasValue) {
    const hexValues = Object.values(tokens)
      .filter(v => typeof v === 'string' && /^#[0-9a-f]{3,8}$/i.test(v));
    if (hexValues.length >= 1) out.bg = hexValues[0];
    if (hexValues.length >= 2) out.text = hexValues[1];
    if (hexValues.length >= 3) out.accent = hexValues[2];
    if (hexValues.length >= 4) out.bg_elevated = hexValues[3];
    if (hexValues.length >= 5) out.border = hexValues[4];
    if (hexValues.length >= 6) out.text_muted = hexValues[5];
    if (hexValues.length >= 7) out.accent2 = hexValues[6];
    hasValue = Object.keys(out).length > 0;
  }

  if (!hasValue) return null;

  if (!out.font) out.font = 'JetBrains Mono';
  if (!out.radius) out.radius = '6px';
  if (out.dark === undefined && out.bg) {
    out.dark = isDarkColor(out.bg);
  }

  return out;
}

function isDarkColor(hex) {
  if (!hex || typeof hex !== 'string') return true;
  const h = hex.replace('#', '');
  if (h.length < 6) return true;
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance < 128;
}

// ---- Deduplication ----
function mergeDuplicates(systems) {
  const groups = new Map();

  for (const ds of systems) {
    const key = ds.name.toLowerCase().trim();
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(ds);
  }

  const merged = [];

  for (const [name, group] of groups) {
    if (group.length === 1) {
      merged.push(group[0]);
      continue;
    }

    // Merge: keep the best tokens, union of product_types, all sources
    const bestTokens = group
      .map(ds => ds.tokens_css)
      .filter(Boolean)
      .sort((a, b) => {
        const score = (t) => {
          if (!t) return 0;
          let s = 0;
          if (t.bg && t.text && t.accent) s += 3;
          if (t.bg_elevated) s += 1;
          if (t.border) s += 1;
          if (t.text_muted) s += 1;
          if (t.accent2) s += 1;
          return s;
        };
        return score(b) - score(a);
      })[0] || group[0].tokens_css;

    const allProductTypes = [...new Set(group.flatMap(ds => ds.product_types || []))];
    const allTags = [...new Set(group.flatMap(ds => ds.tags || []))];
    const allSources = group.map(ds => ds.source).filter(Boolean);

    // Pick the best entry as base
    const base = group.sort((a, b) => {
      const score = (ds) => {
        let s = 0;
        if (ds.tokens_css && ds.tokens_css.bg) s += 10;
        if (ds.description && ds.description.length > 10) s += 5;
        if (ds.product_types && ds.product_types.length > 0) s += 3;
        if (ds.rating) s += ds.rating;
        return s;
      };
      return score(b) - score(a);
    })[0];

    // Preserve timestamps: earliest createdAt, latest updatedAt
    const allDates = group.filter(ds => ds.createdAt).map(d => d.createdAt).sort();
    const allUpdated = group.filter(ds => ds.updatedAt).map(d => d.updatedAt).sort().reverse();
    const createdAt = allDates.length > 0 ? allDates[0] : base.createdAt;
    const updatedAt = allUpdated.length > 0 ? allUpdated[0] : base.updatedAt;

    merged.push({
      ...base,
      createdAt: createdAt || base.createdAt,
      updatedAt: updatedAt || base.updatedAt,
      tokens_css: bestTokens || base.tokens_css,
      product_types: allProductTypes.length > 0 ? allProductTypes : (base.product_types || []),
      tags: allTags,
      sources: allSources,
      source: allSources[0] || base.source,
      cross_references: allSources.slice(1),
      rating: Math.max(...group.map(ds => ds.rating || 0), base.rating || 0),
    });
  }

  return merged;
}

// ---- Main pipeline ----
function main() {
  console.log('=== DesignX Catalog Optimization Pipeline ===\n');

  // Backup
  const raw = fs.readFileSync(CATALOG_PATH, 'utf-8');
  fs.writeFileSync(BACKUP_PATH, raw);
  console.log('✓ Backup saved to catalog.backup.json');

  const catalog = JSON.parse(raw);
  const originalSize = Buffer.byteLength(raw, 'utf-8');
  console.log(`\nOriginal: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);

  // 1. Normalize tokens for all DS
  console.log('\n--- Step 1: Normalize tokens ---');
  let tokenFixed = 0;
  for (const ds of catalog.design_systems) {
    const normalized = normalizeTokens(ds.tokens_css);
    if (normalized) {
      if (JSON.stringify(ds.tokens_css) !== JSON.stringify(normalized)) {
        ds.tokens_css = normalized;
        tokenFixed++;
      }
    } else if (ds.tokens_css) {
      // Remove invalid tokens
      delete ds.tokens_css;
    }
  }
  console.log(`  Fixed tokens: ${tokenFixed}`);

  // 2. Infer missing product_types
  console.log('\n--- Step 2: Infer product_types ---');
  let ptFixed = 0;
  for (const ds of catalog.design_systems) {
    const inferred = inferProductTypes(ds);
    if (inferred.length > 0) {
      if (!ds.product_types || ds.product_types.length === 0) {
        ds.product_types = inferred;
        ptFixed++;
      }
    }
  }
  console.log(`  Filled product_types: ${ptFixed}`);

  // 2b. Ensure product_types links are valid
  const validProductTypeIds = new Set(catalog.product_types.map(pt => pt.id));
  let ptInvalidFixed = 0;
  for (const ds of catalog.design_systems) {
    if (ds.product_types && ds.product_types.length > 0) {
      const filtered = ds.product_types.filter(pt => validProductTypeIds.has(pt));
      if (filtered.length !== ds.product_types.length) {
        ds.product_types = filtered.length > 0 ? filtered : (ds.product_types.length > 0 ? [ds.product_types[0]] : []);
        ptInvalidFixed++;
      }
    }
  }
  console.log(`  Fixed invalid product_type IDs: ${ptInvalidFixed}`);

  // 3. Merge duplicates
  console.log('\n--- Step 3: Merge duplicate brands ---');
  const beforeMerge = catalog.design_systems.length;
  catalog.design_systems = mergeDuplicates(catalog.design_systems);
  console.log(`  Before: ${beforeMerge}, After: ${catalog.design_systems.length} (removed ${beforeMerge - catalog.design_systems.length})`);

  // 3b. Add new design systems from new-design-systems.json
  console.log('\n--- Step 3b: Add new design systems ---');
  const today = new Date().toISOString().split('T')[0];
  if (fs.existsSync(NEW_SOURCES_PATH)) {
    const newSystems = JSON.parse(fs.readFileSync(NEW_SOURCES_PATH, 'utf-8'));
    const existingIds = new Set(catalog.design_systems.map(d => d.id));
    let added = 0;
    for (const ds of newSystems) {
      if (!existingIds.has(ds.id)) {
        ds.createdAt = ds.createdAt || today;
        ds.updatedAt = ds.updatedAt || ds.createdAt;
        catalog.design_systems.push(ds);
        existingIds.add(ds.id);
        added++;
      }
    }
    console.log(`  Added from new-design-systems.json: ${added}`);
  }

  // 4. Ensure all items have timestamps
  for (const skill of catalog.skills) {
    if (!skill.createdAt) skill.createdAt = today;
    if (!skill.updatedAt) skill.updatedAt = skill.createdAt;
  }
  for (const ds of catalog.design_systems) {
    if (!ds.createdAt) ds.createdAt = today;
    if (!ds.updatedAt) ds.updatedAt = ds.createdAt;
  }

  // Update meta
  catalog.meta.lastUpdated = today;
  catalog.meta.totalDesignSystems = catalog.design_systems.length;
  catalog.meta.totalSkills = catalog.skills.length;
  catalog.meta.skillsTotal = catalog.skills.length;

  // 5. Write minified output
  console.log('\n--- Step 4: Write minified catalog ---');
  const minified = JSON.stringify(catalog);
  fs.writeFileSync(CATALOG_PATH, minified, 'utf-8');
  const newSize = Buffer.byteLength(minified, 'utf-8');
  const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
  console.log(`  Size: ${(newSize / 1024 / 1024).toFixed(2)} MB (saved ${savings}%)`);

  // Stats
  const withPt = catalog.design_systems.filter(d => d.product_types && d.product_types.length > 0).length;
  const withoutPt = catalog.design_systems.length - withPt;
  console.log(`\n=== Final Stats ===`);
  console.log(`  Skills: ${catalog.skills.length}`);
  console.log(`  Design Systems: ${catalog.design_systems.length}`);
  console.log(`  With product_types: ${withPt}`);
  console.log(`  Without product_types: ${withoutPt}`);
  console.log(`  Categories: ${catalog.categories.length}`);
  console.log(`  Product Types: ${catalog.product_types.length}`);
  console.log(`  Philosophies: ${catalog.design_philosophies.length}`);
  console.log(`\n✓ Done!`);
}

main();
