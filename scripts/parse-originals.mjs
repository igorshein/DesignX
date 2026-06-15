/**
 * Parse original DESIGN.md/SKILL.md files and enrich catalog JSON with:
 * - tokens_css (colors, font, radius)
 * - product_types (derived from brand/company name)
 * - tags (derived from aesthetic + domain)
 *
 * Supports 4 source types:
 *   1. awesome-design-md — YAML frontmatter
 *   2. ndroussi/design-md-for-ai — Markdown tables + prose
 *   3. soulcore-dev/soul-design-md — Markdown tables + prose
 *   4. dimabraven/design-md — YAML frontmatter
 */

import fs from 'fs';
import path from 'path';

// ─── Config ───────────────────────────────────────────────────────────────────

const CATALOG_PATH = 'src/data/catalog.json';
const ORIGINALS_DIR = 'src/originals';

const SOURCE_CONFIG = {
  'awesome-design-md':    { dir: 'awesome-design-md',            file: 'DESIGN.md' },
  'ndroussi/design-md-for-ai': { dir: 'ndroussi-design-md-for-ai',      file: 'DESIGN.md' },
  'soulcore-dev/soul-design-md': { dir: 'soulcore-dev-soul-design-md',   file: 'DESIGN.md' },
  'dimabraven/design-md': { dir: 'dimabraven-design-md',         file: null }, // {subdir}/{subdir}.md
};

// ID prefixes to strip for subdirectory lookup
const STRIP_PREFIXES = [
  'design-md-', 'skill-design-', 'ndroussi-', 'soulcore-', 'dimabraven-',
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function stripId(id) {
  for (const pfx of STRIP_PREFIXES) {
    if (id.startsWith(pfx)) return id.slice(pfx.length);
  }
  return id;
}

function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch { return null; }
}

/** Extract YAML frontmatter (between --- delimiters) */
function parseYamlFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  return parseSimpleYaml(match[1]);
}

/** Simple YAML parser for flat/moderately nested YAML (good enough for our use) */
function parseSimpleYaml(yamlText) {
  const result = {};
  const lines = yamlText.split('\n');
  const stack = [{ obj: result, indent: -1 }];
  
  for (const rawLine of lines) {
    if (!rawLine.trim() || rawLine.trim().startsWith('#')) continue;
    const line = rawLine.replace(/\t/g, '  ');
    const indent = line.search(/\S/);
    const trimmed = line.trim();
    if (indent < 0) continue;

    // Array item
    if (trimmed.startsWith('- ')) {
      const val = trimmed.slice(2).trim().replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');
      // Find the parent array
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i].indent < indent) {
          const parent = stack[i].obj;
          // If parent is an array, push
          if (Array.isArray(parent)) {
            parent.push(val);
          } else {
            // Find last key that could be an array
            const keys = Object.keys(parent);
            const lastKey = keys[keys.length - 1];
            if (lastKey && indent > stack[i].indent) {
              if (!Array.isArray(parent[lastKey])) parent[lastKey] = [];
              parent[lastKey].push(val);
            }
          }
          break;
        }
      }
      continue;
    }

    const colonIdx = trimmed.indexOf(':');
    if (colonIdx === -1) continue;
    const key = trimmed.slice(0, colonIdx).trim();
    let val = trimmed.slice(colonIdx + 1).trim();

    // Pop stack to correct indent level
    while (stack.length > 1 && stack[stack.length - 1].indent >= indent) stack.pop();
    
    if (val === '' || val === '|' || val === '>') {
      // This key has children (object or block scalar)
      const newObj = {};
      stack[stack.length - 1].obj[key] = newObj;
      stack.push({ obj: newObj, indent });
    } else {
      // Simple value
      val = val.replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');
      // Parse booleans
      if (val === 'true') val = true;
      else if (val === 'false') val = false;
      // Parse numbers
      else if (/^\d+$/.test(val)) val = parseInt(val, 10);
      else if (/^\d+\.\d+$/.test(val)) val = parseFloat(val);
      
      stack[stack.length - 1].obj[key] = val;
    }
  }
  return result;
}

/** Extract first meaningful font name from a font-family string */
function extractFontName(fontFamily) {
  if (!fontFamily) return null;
  // Split by comma, take first non-system font
  const parts = fontFamily.split(',').map(p => p.trim().replace(/['"]/g, '').trim());
  const systemFonts = [
    '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto',
    '"Segoe UI"', 'Segoe UI', '"Helvetica Neue"', 'Helvetica Neue',
    'Helvetica', 'Arial', 'sans-serif', '"Noto Sans"', 'Noto Sans',
    '"Liberation Sans"', 'Liberation Sans', 'Apple Color Emoji',
    '"Segoe UI Emoji"', 'Segoe UI Emoji', '"Segoe UI Symbol"', 'Segoe UI Symbol',
  ];
  for (const p of parts) {
    if (!systemFonts.includes(p) && !p.startsWith('-') && p.length > 1) {
      return p;
    }
  }
  // Fallback: return first non-empty part
  return parts.find(p => p.length > 0) || null;
}

// ─── Product Type Derivation ────────────────────────────────────────────────

/**
 * Heuristic mapping from DS name/id to product_type IDs.
 * Uses word-boundary matching on name + id only (not description) to reduce false positives.
 */
const PRODUCT_TYPE_RULES = [
  { patterns: [/\b(saas|b2b)\b/i, /\benterprise\b/i, /\bcorporate\b/i, /\badmin\b/i, /\bdashboard\b/i], type: 'b2b-saas' },
  { patterns: [/\b(ecommerce|commerce)\b/i, /\bshop\b/i, /\bstore\b/i, /\bretail\b/i], type: 'ecommerce' },
  { patterns: [/\bsocial\b/i, /\bnetwork\b/i, /\bcommunity\b/i, /\bforum\b/i], type: 'social-network' },
  { patterns: [/\bgaming\b/i, /\bgame\b/i], type: 'gaming' },
  { patterns: [/\b(ai|llm|ml)\b/i, /\bchat\b/i, /\bassistant\b/i, /\bagent(ic)?\b/i], type: 'ai-assistant' },
  { patterns: [/\bfintech\b/i, /\bcrypto\b/i, /\bblockchain\b/i, /\bpayment\b/i, /\bbank(ing)?\b/i, /\bfinance\b/i], type: 'fintech' },
  { patterns: [/\bhealth\b/i, /\bfitness\b/i, /\bmedical\b/i], type: 'health-fitness' },
  { patterns: [/\btravel\b/i, /\bhotel\b/i, /\bbooking\b/i, /\bhospitality\b/i], type: 'travel-hospitality' },
  { patterns: [/\beducation\b/i, /\blearn(ing)?\b/i, /\bcourse\b/i], type: 'education' },
  { patterns: [/\bnews\b/i, /\bmedia\b/i, /\bpublishing\b/i, /\bstreaming\b/i, /\bmusic\b/i], type: 'media-entertainment' },
  { patterns: [/\bfood\b/i, /\brestaurant\b/i, /\bdelivery\b/i], type: 'food-drink' },
  { patterns: [/\breal.?estate\b/i, /\bproperty\b/i], type: 'real-estate' },
  // 'design' too broad on its own — require more specific context
  { patterns: [/\bdesign[-\s]?system\b/i, /\bfigma\b/i, /\bdesign[-\s]?tool\b/i], type: 'design-creative' },
  { patterns: [/\bdev(tool|eloper)?\b/i, /\bapi\b/i, /\bsdk\b/i], type: 'developer-tools' },
  { patterns: [/\bproductivity\b/i, /\bnotes?\b/i, /\btask\b/i, /\bcalendar\b/i], type: 'productivity' },
  { patterns: [/\bdating\b/i], type: 'dating' },
  { patterns: [/\bfashion\b/i, /\bbeauty\b/i], type: 'fashion-beauty' },
  { patterns: [/\bautomotive\b/i, /\bcar\b/i, /\bvehicle\b/i], type: 'automotive' },
  { patterns: [/\bmobile\b/i, /\bapp\b/i], type: 'mobile-app' },
];

function deriveProductTypes(id, name) {
  // Only match against ID (not name) to avoid false positives
  // from generic naming like "X Design System" or "X Design Analysis"
  const text = `${id}`.toLowerCase();
  const types = new Set();
  for (const rule of PRODUCT_TYPE_RULES) {
    if (rule.patterns.some(p => p.test(text))) {
      types.add(rule.type);
    }
  }
  return [...types];
}

// ─── Tags Derivation ─────────────────────────────────────────────────────────

function deriveTags(aesthetic, productTypes, id, name) {
  const tags = [];
  // Add aesthetic as tag if present and non-default
  if (aesthetic && aesthetic !== 'industrial-minimal' && aesthetic !== '_default') {
    tags.push(aesthetic);
  }
  // Add product types as tags
  if (productTypes && Array.isArray(productTypes)) {
    for (const pt of productTypes) {
      if (pt) tags.push(pt);
    }
  }
  // Add some generic tags based on ID/name
  const text = `${id || ''} ${name || ''}`.toLowerCase();
  if (text.includes('dark')) tags.push('dark-theme');
  if (text.includes('light')) tags.push('light-theme');
  if (text.includes('minimal')) tags.push('minimal');
  if (text.includes('brutal')) tags.push('brutalist');
  if (text.includes('playful') || text.includes('colorful')) tags.push('colorful');
  if (text.includes('luxury') || text.includes('premium')) tags.push('premium');
  if (text.includes('retro') || text.includes('vintage')) tags.push('retro');
  
  return [...new Set(tags)];
}

// ─── Parser: awesome-design-md (YAML) ────────────────────────────────────────

function parseAwesomeDesignMd(text) {
  const yaml = parseYamlFrontmatter(text);
  if (!yaml || !yaml.colors) return null;
  
  const colors = yaml.colors;
  const typography = yaml.typography;
  const rounded = yaml.rounded;
  const tokens = {};
  
  // Colors
  if (colors.canvas) tokens.bg = colors.canvas;
  else if (colors.background) tokens.bg = colors.background;
  
  if (colors['surface-soft']) tokens.bg_elevated = colors['surface-soft'];
  else if (colors['surface-card']) tokens.bg_elevated = colors['surface-card'];
  else if (colors.surface) tokens.bg_elevated = colors.surface;
  
  if (colors.ink) tokens.text = colors.ink;
  else if (colors.body) tokens.text = colors.body;
  else if (colors['text-primary']) tokens.text = colors['text-primary'];
  
  if (colors.muted) tokens.text_muted = colors.muted;
  else if (colors['text-muted']) tokens.text_muted = colors['text-muted'];
  else if (colors['text-secondary']) tokens.text_muted = colors['text-secondary'];
  
  if (colors.hairline) tokens.border = colors.hairline;
  else if (colors['hairline-soft']) tokens.border = colors['hairline-soft'];
  else if (colors['border-strong']) tokens.border = colors['border-strong'];
  else if (colors.border) tokens.border = colors.border;
  
  if (colors.primary) tokens.accent = colors.primary;
  if (colors['primary-active']) tokens.accent2 = colors['primary-active'];
  if (colors.success) tokens.success = colors.success;
  if (colors.error) tokens.error = colors.error;
  
  // Font — find any typography.*.fontFamily
  if (typography) {
    for (const key of Object.keys(typography)) {
      const entry = typography[key];
      if (typeof entry === 'object' && entry.fontFamily) {
        tokens.font = extractFontName(entry.fontFamily);
        if (tokens.font) break;
      }
    }
    if (!tokens.font && typography.heading) {
      tokens.font = extractFontName(typography.heading);
    }
  }
  
  // Radius — use sm (small) as base radius, skip xs (too small)
  if (rounded) {
    if (rounded.sm) tokens.radius = String(rounded.sm);
    else if (rounded.base) tokens.radius = String(rounded.base);
    else if (rounded.md) tokens.radius = String(rounded.md);
    else if (rounded.xs) tokens.radius = String(rounded.xs);
    else {
      const keys = Object.keys(rounded);
      if (keys.length > 0) tokens.radius = String(rounded[keys[0]]);
    }
  }
  
  return Object.keys(tokens).length > 0 ? tokens : null;
}

// ─── Parser: dimabraven/design-md (YAML) ─────────────────────────────────────

function parseDimabravenDesignMd(text) {
  const yaml = parseYamlFrontmatter(text);
  if (!yaml || !yaml.colors) return null;
  
  const colors = yaml.colors;
  const typography = yaml.typography;
  const tokens = {};
  
  if (colors.background) tokens.bg = colors.background;
  if (colors.surface) tokens.bg_elevated = colors.surface;
  else if (colors['surface-raised']) tokens.bg_elevated = colors['surface-raised'];
  
  if (colors['text-primary']) tokens.text = colors['text-primary'];
  if (colors['text-muted']) tokens.text_muted = colors['text-muted'];
  else if (colors['text-secondary']) tokens.text_muted = colors['text-secondary'];
  
  if (colors.border) tokens.border = colors.border;
  else if (colors['border-subtle']) tokens.border = colors['border-subtle'];
  
  if (colors.primary) tokens.accent = colors.primary;
  if (colors.success) tokens.success = colors.success;
  if (colors.error) tokens.error = colors.error;
  
  if (typography) {
    if (typography.heading) tokens.font = extractFontName(typography.heading);
    else if (typography.body) tokens.font = extractFontName(typography.body);
  }
  
  return Object.keys(tokens).length > 0 ? tokens : null;
}

// ─── Common Markdown Parser (ndroussi + soulcore) ───────────────────────────

function parseMarkdownDesignMd(text, sourceDir) {
  const tokens = {};
  
  // ── 1. Font: look for --font-sans or font-family declarations ──
  const fontRegexes = [
    /--font-sans:\s*'([^']+)'/,
    /font-family:\s*['"]?([^'",;\n]+)/,
    /ships\s+`([^`]+)`/,
    // Markdown table rows: | role | `FontName` | font-family...|
    /\|\s*`([A-Za-z][A-Za-z0-9 .]+)`\s*\|\s*`[A-Za-z][A-Za-z0-9 .]+`/,
    // "anchored in FontName" pattern
    /(?:typeface|font)\s+(?:is|of|called|named|anchored in)\s+([A-Z][A-Za-z0-9 .]+?)(?:[,.]|;|$)/,
  ];
  for (const re of fontRegexes) {
    const match = text.match(re);
    if (match) {
      tokens.font = extractFontName(match[1]);
      if (tokens.font) break;
    }
  }
  
  // ── 2. Colors: find markdown tables with hex values ──
  // Pattern: | `--token-name` | `#HEX` | role description |
  const tableRows = text.match(/\|.*\|.*\|.*\|/g) || [];
  const hexValues = {};
  
  for (const row of tableRows) {
    const cells = row.split('|').map(c => c.trim()).filter(c => c);
    if (cells.length < 2) continue;
    
    // Find hex values in cells
    for (let i = 0; i < cells.length; i++) {
      const hexMatch = cells[i].match(/#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})\b/);
      if (!hexMatch) continue;
      
      const hex = '#' + hexMatch[1].toUpperCase();
      // Get context from adjacent cells (token name, role description)
      const context = cells.map(c => c.toLowerCase()).join(' ');
      
      if (!hexValues[hex]) hexValues[hex] = context;
      else hexValues[hex] += ' ' + context;
    }
  }
  
  // Also find hex values outside tables (inline in paragraphs)
  const inlineHexes = text.match(/#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})\b/g) || [];
  for (const h of inlineHexes) {
    const hex = h.toUpperCase();
    if (!hexValues[hex]) {
      // Find surrounding context (20 chars before)
      const idx = text.indexOf(h);
      const start = Math.max(0, idx - 40);
      const context = text.slice(start, idx + 7).toLowerCase();
      hexValues[hex] = context;
    }
  }
  
  // ── 3. Classify hex values into token slots ──
  for (const [hex, context] of Object.entries(hexValues)) {
    const ctx = context.toLowerCase();
    
    // Background / canvas
    if (!tokens.bg && (ctx.includes('canvas') || ctx.includes('background') || ctx.includes('page bg') || 
        (ctx.includes('white') && (ctx.includes('surface') || ctx.includes('canvas') || ctx.includes('page'))))) {
      tokens.bg = hex;
    }
    
    // Elevated background
    if (!tokens.bg_elevated && (ctx.includes('surface') || ctx.includes('elevated') || ctx.includes('card') || 
        ctx.includes('raised') || ctx.includes('soft bg'))) {
      if (hex !== tokens.bg) tokens.bg_elevated = hex;
    }
    
    // Primary text
    if (!tokens.text && (ctx.includes('primary text') || ctx.includes('body copy') || ctx.includes('heading') || 
        ctx.includes('ink') || (ctx.includes('text') && ctx.includes('primary')) || 
        ctx.includes('charcoal') || (/#222222|#1d1d1f|#111111|#000000/.test(hex) && !ctx.includes('border')))) {
      // Only assign very dark colors as text
      const r = parseInt(hex.slice(1,3), 16);
      const g = parseInt(hex.slice(3,5), 16);
      const b = parseInt(hex.slice(5,7), 16);
      if (r + g + b < 200) tokens.text = hex;
    }
    
    // Accent / primary brand
    if (!tokens.accent && (ctx.includes('accent') || ctx.includes('primary cta') || ctx.includes('brand') || 
        ctx.includes('primary action') || (ctx.includes('primary') && ctx.includes('button')))) {
      tokens.accent = hex;
    }
    
    // Border
    if (!tokens.border && (ctx.includes('border') || ctx.includes('hairline') || ctx.includes('divider') || 
        ctx.includes('stroke'))) {
      // Should be a medium color, not too dark
      const r = parseInt(hex.slice(1,3), 16);
      const g = parseInt(hex.slice(3,5), 16);
      const b = parseInt(hex.slice(5,7), 16);
      if (r + g + b > 300 && r + g + b < 700) tokens.border = hex;
    }
    
    // Muted text
    if (!tokens.text_muted && (ctx.includes('muted') || ctx.includes('secondary text') || ctx.includes('secondary copy') || 
        ctx.includes('metadata') || ctx.includes('subtle'))) {
      const r = parseInt(hex.slice(1,3), 16);
      const g = parseInt(hex.slice(3,5), 16);
      const b = parseInt(hex.slice(5,7), 16);
      if (r + g + b > 200 && r + g + b < 650) tokens.text_muted = hex;
    }
  }
  
  // ── 4. Border radius: look for border-radius values ──
  const radiusMatches = text.match(/border-radius:\s*(\d+px)/g);
  if (radiusMatches && radiusMatches.length > 0) {
    // Find the smallest radius (base) from the values
    const radii = radiusMatches.map(m => parseInt(m.match(/\d+/)[0]));
    // Filter reasonable values (4-16px)
    const baseRadii = radii.filter(r => r >= 4 && r <= 16).sort((a,b) => a-b);
    if (baseRadii.length > 0) {
      tokens.radius = baseRadii[0] + 'px';
    } else {
      tokens.radius = Math.min(...radii) + 'px';
    }
  }
  
  return Object.keys(tokens).length > 0 ? tokens : null;
}

// ─── Read original file ──────────────────────────────────────────────────────

function readOriginalFile(source, id) {
  const cfg = SOURCE_CONFIG[source];
  if (!cfg) return null;
  
  const stripped = stripId(id);
  let filePath;
  
  if (cfg.file === 'DESIGN.md') {
    // Handle dot in directory names (e.g., "linear.app")
    const dirName = stripped;
    filePath = path.join(ORIGINALS_DIR, cfg.dir, dirName, 'DESIGN.md');
    let content = readFile(filePath);
    if (content) return { content, filePath };
    
    // Try with dots replaced
    const altName = stripped.replace(/\./g, '-');
    if (altName !== dirName) {
      filePath = path.join(ORIGINALS_DIR, cfg.dir, altName, 'DESIGN.md');
      content = readFile(filePath);
      if (content) return { content, filePath };
    }
    
    return null;
  } else {
    // dimabraven style: {subdir}/{subdir}.md
    filePath = path.join(ORIGINALS_DIR, cfg.dir, stripped, stripped + '.md');
    let content = readFile(filePath);
    if (content) return { content, filePath };
    
    // Try with dots replaced
    const altName = stripped.replace(/\./g, '-');
    if (altName !== stripped) {
      filePath = path.join(ORIGINALS_DIR, cfg.dir, altName, altName + '.md');
      content = readFile(filePath);
      if (content) return { content, filePath };
    }
    
    return null;
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function main() {
  console.log('Loading catalog...');
  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf-8'));
  
  const noTokens = catalog.design_systems.filter(d => !d.tokens_css || Object.keys(d.tokens_css).length === 0);
  console.log(`Found ${noTokens.length} design systems without tokens_css`);
  
  let parsed = 0;
  let failed = 0;
  let updatedEntries = [];
  
  for (const ds of noTokens) {
    const sourceCfg = SOURCE_CONFIG[ds.source];
    if (!sourceCfg) {
      console.log(`  SKIP ${ds.id}: unknown source "${ds.source}"`);
      failed++;
      continue;
    }
    
    const original = readOriginalFile(ds.source, ds.id);
    if (!original) {
      console.log(`  SKIP ${ds.id}: original file not found`);
      failed++;
      continue;
    }
    
    let tokens = null;
    
    // Select parser based on source
    if (ds.source === 'awesome-design-md') {
      // Try YAML parser first (64/74 files), fall back to markdown parser
      tokens = parseAwesomeDesignMd(original.content);
      if (!tokens) tokens = parseMarkdownDesignMd(original.content, sourceCfg.dir);
    } else if (ds.source === 'dimabraven/design-md') {
      tokens = parseDimabravenDesignMd(original.content);
    } else if (ds.source === 'ndroussi/design-md-for-ai' || ds.source === 'soulcore-dev/soul-design-md') {
      tokens = parseMarkdownDesignMd(original.content, sourceCfg.dir);
    }
    
    if (tokens) {
      ds.tokens_css = tokens;
      parsed++;
      updatedEntries.push(ds.id);
    } else {
      console.log(`  FAIL ${ds.id}: parser returned null`);
      failed++;
    }
    
    // Derive product_types
    if (!ds.product_types || ds.product_types.length === 0) {
      const pts = deriveProductTypes(ds.id, ds.name);
      if (pts.length > 0) ds.product_types = pts;
    }
    
    // Derive tags
    if (!ds.tags || ds.tags.length === 0) {
      const tags = deriveTags(ds.aesthetic, ds.product_types, ds.id, ds.name);
      if (tags.length > 0) ds.tags = tags;
    }
  }
  
  console.log(`\nParsed tokens_css: ${parsed}/${noTokens.length}`);
  console.log(`Failed: ${failed}`);
  console.log(`Updated entries: ${updatedEntries.length}`);
  if (updatedEntries.length > 0) {
    console.log('Examples:', updatedEntries.slice(0, 5));
  }
  
  // Check what product_types and tags we added
  const withPT = catalog.design_systems.filter(d => d.product_types && d.product_types.length > 0);
  const withTags = catalog.design_systems.filter(d => d.tags && d.tags.length > 0);
  console.log(`\nWith product_types: ${withPT.length}/${catalog.design_systems.length}`);
  console.log(`With tags: ${withTags.length}/${catalog.design_systems.length}`);
  
  // Write updated catalog
  console.log('\nWriting updated catalog...');
  fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2), 'utf-8');
  console.log('Done!');
}

main();
