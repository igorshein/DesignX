/**
 * generate-design-systems.js
 *
 * Reads upstream DESIGN.md files from src/originals/ and generates
 * catalog entries for awesome-design-md and awesome-design-skills.
 *
 * Output: src/data/catalog-design-systems.json
 *
 * Usage: node scripts/generate-design-systems.js
 *
 * This REPLACES the old DesignX-authored design systems in catalog.json
 * with entries sourced from upstream repos. The frontend handles entries
 * without tokens_css gracefully (no mini-preview, but still selectable).
 */

const fs = require('fs');
const path = require('path');

const ORIGINALS_DIR = path.join(__dirname, '..', 'src', 'originals');
const CATALOG_PATH = path.join(__dirname, '..', 'src', 'data', 'catalog.json');
const OUTPUT_PATH = path.join(__dirname, '..', 'src', 'data', 'catalog-design-systems.json');

// Aesthetic mapping: awesome-design-skills slug → DesignX aesthetic id
const AESTHETIC_MAP = {
  brutalism: 'brutalist-raw',
  minimal: 'industrial-minimal',
  neon: 'cyberpunk',
  glassmorphism: 'glassmorphism',
  neumorphism: 'neumorphism',
  retro: 'retro-futuristic',
  luxury: 'luxury-refined',
  corporate: 'industrial-minimal',
  editorial: 'editorial-magazine',
  playful: 'playful',
  colorful: 'playful',
  elegant: 'luxury-refined',
  modern: 'industrial-minimal',
  clean: 'industrial-minimal',
  bold: 'brutalist-raw',
  dark: 'brutalist-raw',
  futuristic: 'cyberpunk',
  vibrant: 'playful',
  premium: 'luxury-refined',
  creative: 'playful',
  professional: 'industrial-minimal',
  simple: 'scandinavian',
  sleek: 'cyberpunk',
  sketch: 'playful',
  artistic: 'playful',
  dramatic: 'brutalist-raw',
  energetic: 'playful',
  expressive: 'playful',
  fantasy: 'playful',
  immersive: 'cyberpunk',
  spacious: 'scandinavian',
  // Fallback for rest
  _default: 'industrial-minimal',
};

/**
 * Parse YAML frontmatter from a DESIGN.md file.
 * Handles flat keys and indented child keys (like colors: primary: "#fff").
 * Returns an object with top-level keys + flattened nested children.
 */
function parseFrontmatter(filepath) {
  try {
    const content = fs.readFileSync(filepath, 'utf-8');
    const m = content.match(/^---\s*\n([\s\S]*?)\n---/);
    if (!m) return null;

    const yaml = m[1];
    const result = {};
    let currentSection = null;

    for (const line of yaml.split('\n')) {
      // Top-level key: value
      const top = line.match(/^(\w[\w_-]*)\s*:\s*(.*)$/);
      if (top) {
        let val = top[2].trim();
        if ((val.startsWith('"') && val.endsWith('"')) ||
            (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (val === '' || val === '|') {
          // This is a section header (like "colors:" with children below)
          currentSection = top[1];
          result[top[1]] = {};
        } else {
          result[top[1]] = val;
          currentSection = null;
        }
        continue;
      }

      // Indented child key (2+ spaces prefix)
      const child = line.match(/^\s{2,}(\w[\w_-]*)\s*:\s*(.*)$/);
      if (child && currentSection) {
        let val = child[2].trim();
        if ((val.startsWith('"') && val.endsWith('"')) ||
            (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (typeof result[currentSection] === 'object') {
          result[currentSection][child[1]] = val;
        }
      }
    }

    return result;
  } catch (err) {
    return null;
  }
}

/**
 * Generate catalog entry for an awesome-design-md design system.
 */
function entryForDesignMd(slug, fm) {
  const name = fm?.name || slug;
  const desc = fm?.description || `Design system analysis for ${name}.`;

  return {
    id: `design-md-${slug}`,
    name: name,
    source: 'awesome-design-md',
    aesthetic: AESTHETIC_MAP._default,
    product_types: [],
    description: desc,
    preview: '',
    tokens_css: null, // no token data available
    preview_demo: false,
  };
}

/**
 * Generate catalog entry for an awesome-design-skills design system.
 * Extracts color tokens from YAML frontmatter when available.
 */
function entryForSkillDesign(slug, fm) {
  const name = fm?.name || slug;
  const aesthetic = AESTHETIC_MAP[slug] || AESTHETIC_MAP._default;

  // Try to build tokens from YAML colors section
  let tokens = null;
  const colors = fm?.colors || {};
  const hasColors = Object.keys(colors).length > 0;
  if (hasColors) {
    const primary = colors.primary || '#4da3ff';
    const secondary = colors.secondary || '#2d7bea';
    tokens = {
      bg: colors.surface || '#ffffff',
      bg_elevated: '#f5f6f8',
      text: colors.text || colors.neutral || '#1a1d23',
      text_muted: '#6b7380',
      accent: primary,
      accent2: secondary,
      border: '#e2e5ec',
      success: colors.success || '#16a34a',
      error: colors.danger || colors.error || '#dc2626',
      font: 'Inter',
      radius: '6px',
      dark: false,
    };
  }

  // Build description from available info
  const descParts = [];
  if (fm?.description) descParts.push(fm.description);
  if (aesthetic !== AESTHETIC_MAP._default) {
    const philNames = { 'brutalist-raw': 'Brutalist/Raw', 'industrial-minimal': 'Industrial Minimal',
      cyberpunk: 'Cyberpunk/Neon', glassmorphism: 'Glassmorphism', neumorphism: 'Neumorphism',
      'retro-futuristic': 'Retro Futuristic', 'luxury-refined': 'Luxury Refined',
      'editorial-magazine': 'Editorial Magazine', playful: 'Playful/Colorful',
      scandinavian: 'Scandinavian Light' };
    descParts.push(`Aesthetic: ${philNames[aesthetic] || aesthetic}.`);
  }
  const description = descParts.join(' ') || `${name} design system from awesome-design-skills.`;

  return {
    id: `skill-design-${slug}`,
    name: name,
    source: 'awesome-design-skills',
    aesthetic: aesthetic,
    product_types: [],
    description: description,
    preview: tokens ? `color-accent-primary: ${tokens.accent}\ncolor-bg-surface: ${tokens.bg}` : '',
    tokens_css: tokens,
    preview_demo: !!tokens,
  };
}

function main() {
  const results = [];

  // ── awesome-design-md ──────────────────────────────────────────
  const mdDir = path.join(ORIGINALS_DIR, 'awesome-design-md');
  if (fs.existsSync(mdDir)) {
    const entries = fs.readdirSync(mdDir, { withFileTypes: true })
      .filter(d => d.isDirectory());
    for (const entry of entries) {
      const fmPath = path.join(mdDir, entry.name, 'DESIGN.md');
      const fm = parseFrontmatter(fmPath);
      results.push(entryForDesignMd(entry.name, fm));
    }
  }

  // ── awesome-design-skills ──────────────────────────────────────
  const skillsDir = path.join(ORIGINALS_DIR, 'awesome-design-skills');
  if (fs.existsSync(skillsDir)) {
    const entries = fs.readdirSync(skillsDir, { withFileTypes: true })
      .filter(d => d.isDirectory());
    for (const entry of entries) {
      const fmPath = path.join(skillsDir, entry.name, 'DESIGN.md');
      const fm = parseFrontmatter(fmPath);
      results.push(entryForSkillDesign(entry.name, fm));
    }
  }

  // Write output
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`Generated ${results.length} design system entries`);
  console.log(`  awesome-design-md: ${results.filter(r => r.source === 'awesome-design-md').length}`);
  console.log(`  awesome-design-skills: ${results.filter(r => r.source === 'awesome-design-skills').length}`);
  console.log(`  With tokens: ${results.filter(r => r.tokens_css).length}`);
  console.log(`Output: ${OUTPUT_PATH}`);
}

main();
