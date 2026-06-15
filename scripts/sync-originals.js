/**
 * sync-originals.js
 * 
 * Fetches original SKILL.md and DESIGN.md files from upstream GitHub
 * repositories and saves them to src/originals/ for offline export.
 * 
 * Usage: node scripts/sync-originals.js
 * 
 * Two sync modes:
 *   1. SKILL.md  — static map from DesignX catalog slug → upstream path
 *   2. DESIGN.md — dynamic discovery from awesome-design-md + awesome-design-skills
 *
 * Can be run locally or in GitHub Actions CI.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ORIGINALS_DIR = path.join(__dirname, '..', 'src', 'originals');
const HASHES_PATH = path.join(__dirname, '..', 'src', 'data', 'originals-hashes.json');
const CATALOG_PATH = path.join(__dirname, '..', 'src', 'data', 'catalog.json');

// Track changes: { slug: 'updated' | 'new' }
const changedEntries = {};

// ════════════════════════════════════════════════════════════════════
//  HELPERS
// ════════════════════════════════════════════════════════════════════

function sha256(content) {
  return crypto.createHash('sha256').update(content, 'utf-8').digest('hex');
}

function loadHashes() {
  try { return JSON.parse(fs.readFileSync(HASHES_PATH, 'utf-8')); }
  catch { return {}; }
}

function saveHashes(hashes) {
  fs.writeFileSync(HASHES_PATH, JSON.stringify(hashes, null, 2), 'utf-8');
}

async function fetchUrl(url) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status} ${resp.statusText}`);
  return resp.text();
}

function rawUrl(upstream, filePath) {
  return `https://raw.githubusercontent.com/${upstream}/main/${filePath}`;
}

async function githubApi(pathname) {
  const url = `https://api.github.com${pathname}`;
  const resp = await fetch(url, {
    headers: { 'User-Agent': 'DesignX/2.0', 'Accept': 'application/vnd.github.v3+json' },
  });
  if (!resp.ok) throw new Error(`GitHub API ${resp.status}: ${url}`);
  return resp.json();
}

// ════════════════════════════════════════════════════════════════════
//  PART 1: SKILL.md — static map
// ════════════════════════════════════════════════════════════════════
// Each entry: { source, slug, upstream, path }
//   source = value from catalog.json source field
//   slug   = DesignX directory name
//   upstream = GitHub user/repo
//   path   = file path within the repo

const SKILL_MAP = [

  // ─── anthropics/skills ───────────────────────────────────────────
  { source: 'anthropics/skills', slug: 'frontend-design', upstream: 'anthropics/skills', path: 'skills/frontend-design/SKILL.md' },
  { source: 'anthropics/skills', slug: 'canvas-design', upstream: 'anthropics/skills', path: 'skills/canvas-design/SKILL.md' },
  { source: 'anthropics/skills', slug: 'theme-factory', upstream: 'anthropics/skills', path: 'skills/theme-factory/SKILL.md' },
  { source: 'anthropics/skills', slug: 'web-artifacts-builder', upstream: 'anthropics/skills', path: 'skills/web-artifacts-builder/SKILL.md' },

  // ─── dembrandt/dembrandt-skills ──────────────────────────────────
  { source: 'dembrandt/dembrandt-skills', slug: 'algorithmic-color-palette', upstream: 'dembrandt/dembrandt-skills', path: 'skills/algorithmic-color-palette/SKILL.md' },
  { source: 'dembrandt/dembrandt-skills', slug: 'color-mode--theme-design', upstream: 'dembrandt/dembrandt-skills', path: 'skills/color-mode-and-theme/SKILL.md' },
  { source: 'dembrandt/dembrandt-skills', slug: 'component-family-consistency', upstream: 'dembrandt/dembrandt-skills', path: 'skills/component-family-consistency/SKILL.md' },
  { source: 'dembrandt/dembrandt-skills', slug: 'elevation--shadow-design', upstream: 'dembrandt/dembrandt-skills', path: 'skills/elevation-and-depth/SKILL.md' },
  { source: 'dembrandt/dembrandt-skills', slug: 'performance--web-vitals', upstream: 'dembrandt/dembrandt-skills', path: 'skills/performance-and-web-vitals/SKILL.md' },
  { source: 'dembrandt/dembrandt-skills', slug: 'ui-density-management', upstream: 'dembrandt/dembrandt-skills', path: 'skills/ui-density/SKILL.md' },

  // ─── varunk130/ai-ux-skill-library ───────────────────────────────
  { source: 'varunk130/ai-ux-skill-library', slug: 'ai-agent-ux', upstream: 'varunk130/ai-ux-skill-library', path: 'skills/ai-agent-ux/SKILL.md' },
  { source: 'varunk130/ai-ux-skill-library', slug: 'ai-error-resilience', upstream: 'varunk130/ai-ux-skill-library', path: 'skills/ai-error-resilience/SKILL.md' },
  { source: 'varunk130/ai-ux-skill-library', slug: 'ai-feedback-loops', upstream: 'varunk130/ai-ux-skill-library', path: 'skills/ai-feedback-loops/SKILL.md' },
  { source: 'varunk130/ai-ux-skill-library', slug: 'ai-onboarding--calibration', upstream: 'varunk130/ai-ux-skill-library', path: 'skills/ai-onboarding-calibration/SKILL.md' },
  { source: 'varunk130/ai-ux-skill-library', slug: 'ai-output--multimodal-design', upstream: 'varunk130/ai-ux-skill-library', path: 'skills/ai-multimodal-output/SKILL.md' },
  { source: 'varunk130/ai-ux-skill-library', slug: 'ai-personalization--ethics', upstream: 'varunk130/ai-ux-skill-library', path: 'skills/ai-personalization-ethics/SKILL.md' },
  { source: 'varunk130/ai-ux-skill-library', slug: 'ai-prompt-ux', upstream: 'varunk130/ai-ux-skill-library', path: 'skills/ai-prompt-ux/SKILL.md' },
  { source: 'varunk130/ai-ux-skill-library', slug: 'ai-safety-guardrails', upstream: 'varunk130/ai-ux-skill-library', path: 'skills/ai-safety-guardrails/SKILL.md' },

  // ─── ghaida/intent ───────────────────────────────────────────────
  { source: 'ghaida/intent', slug: 'design-storytelling', upstream: 'ghaida/intent', path: 'skills/storytelling/SKILL.md' },
  { source: 'ghaida/intent', slug: 'design-strategy--framing', upstream: 'ghaida/intent', path: 'skills/strategize/SKILL.md' },
  { source: 'ghaida/intent', slug: 'edge-cases--resilience', upstream: 'ghaida/intent', path: 'skills/fortify/SKILL.md' },
  { source: 'ghaida/intent', slug: 'ux-metrics--experimentation', upstream: 'ghaida/intent', path: 'skills/measure/SKILL.md' },
  { source: 'ghaida/intent', slug: 'ux-writing--content-strategy', upstream: 'ghaida/intent', path: 'skills/articulate/SKILL.md' },

  // ─── plugin87/ux-ui-agent-skills ─────────────────────────────────
  { source: 'plugin87/ux-ui-agent-skills', slug: 'design-to-code-handoff', upstream: 'plugin87/ux-ui-agent-skills', path: 'CLAUDE.md' },
  { source: 'plugin87/ux-ui-agent-skills', slug: 'component-anatomy--specs', upstream: 'plugin87/ux-ui-agent-skills', path: 'CLAUDE.md' },

  // ─── designer-skills / Owl-Listener ──────────────────────────────
  // Plugin-level → README.md; individual → SKILL.md (slug differs from DesignX)
  { source: 'designer-skills', slug: 'visual-critique', upstream: 'Owl-Listener/designer-skills', path: 'visual-critique/README.md' },

  { source: 'designer-skills', slug: '3d-ui-elements', upstream: 'Owl-Listener/designer-skills', path: 'ui-design/skills/aesthetic-usability/SKILL.md' },
  { source: 'designer-skills', slug: 'data-visualization-design', upstream: 'Owl-Listener/designer-skills', path: 'ui-design/skills/data-visualization/SKILL.md' },
  { source: 'designer-skills', slug: 'grid-systems-advanced', upstream: 'Owl-Listener/designer-skills', path: 'ui-design/skills/layout-grid/SKILL.md' },
  { source: 'designer-skills', slug: 'mobile-ui-design', upstream: 'Owl-Listener/designer-skills', path: 'ui-design/skills/responsive-design/SKILL.md' },
  { source: 'designer-skills', slug: 'typography-design', upstream: 'Owl-Listener/designer-skills', path: 'ui-design/skills/typography-scale/SKILL.md' },
  { source: 'designer-skills', slug: 'darklight-mode-design', upstream: 'Owl-Listener/designer-skills', path: 'ui-design/skills/dark-mode-design/SKILL.md' },
  { source: 'designer-skills', slug: 'texture--pattern-design', upstream: 'Owl-Listener/designer-skills', path: 'ui-design/skills/illustration-style/SKILL.md' },

  { source: 'designer-skills', slug: 'interaction-design', upstream: 'Owl-Listener/designer-skills', path: 'interaction-design/README.md' },
  { source: 'designer-skills', slug: 'desktop-app-ux', upstream: 'Owl-Listener/designer-skills', path: 'interaction-design/skills/interfaces-that-feel/SKILL.md' },
  { source: 'designer-skills', slug: 'page-transitions-advanced', upstream: 'Owl-Listener/designer-skills', path: 'interaction-design/skills/animation-principles/SKILL.md' },
  { source: 'designer-skills', slug: 'scroll-based-animation', upstream: 'Owl-Listener/designer-skills', path: 'interaction-design/skills/micro-interaction-spec/SKILL.md' },
  { source: 'designer-skills', slug: 'lottierive-animation', upstream: 'Owl-Listener/designer-skills', path: 'interaction-design/skills/animation-principles/SKILL.md' },
  { source: 'designer-skills', slug: 'version-control-for-design', upstream: 'Owl-Listener/designer-skills', path: 'design-ops/skills/version-control-strategy/SKILL.md' },
  { source: 'designer-skills', slug: 'pwa-design', upstream: 'Owl-Listener/designer-skills', path: 'interaction-design/skills/loading-states/SKILL.md' },

  { source: 'designer-skills', slug: 'prototyping', upstream: 'Owl-Listener/designer-skills', path: 'prototyping-testing/README.md' },
  { source: 'designer-skills', slug: 'wireframing', upstream: 'Owl-Listener/designer-skills', path: 'prototyping-testing/skills/wireframe-spec/SKILL.md' },
  { source: 'designer-skills', slug: 'accessibility-review', upstream: 'Owl-Listener/designer-skills', path: 'prototyping-testing/skills/accessibility-test-plan/SKILL.md' },
  { source: 'designer-skills', slug: 'ux-review', upstream: 'Owl-Listener/designer-skills', path: 'prototyping-testing/skills/heuristic-evaluation/SKILL.md' },

  { source: 'designer-skills', slug: 'design-research', upstream: 'Owl-Listener/designer-skills', path: 'design-research/README.md' },
  { source: 'designer-skills', slug: 'contextual-inquiry', upstream: 'Owl-Listener/designer-skills', path: 'design-research/skills/interview-script/SKILL.md' },
  { source: 'designer-skills', slug: 'diary-studies', upstream: 'Owl-Listener/designer-skills', path: 'design-research/skills/diary-study-plan/SKILL.md' },
  { source: 'designer-skills', slug: 'stakeholder-management', upstream: 'Owl-Listener/designer-skills', path: 'ux-strategy/skills/stakeholder-alignment/SKILL.md' },

  { source: 'designer-skills', slug: 'component-design', upstream: 'Owl-Listener/designer-skills', path: 'design-systems/README.md' },
  { source: 'designer-skills', slug: 'design-system-architect', upstream: 'Owl-Listener/designer-skills', path: 'design-systems/skills/design-system-governance/SKILL.md' },

  { source: 'designer-skills', slug: 'brand-identity', upstream: 'Owl-Listener/designer-skills', path: 'ux-strategy/README.md' },
  { source: 'designer-skills', slug: 'data-storytelling', upstream: 'Owl-Listener/designer-skills', path: 'ux-strategy/skills/content-strategy/SKILL.md' },

  { source: 'designer-skills', slug: 'design-critique-facilitation', upstream: 'Owl-Listener/designer-skills', path: 'design-ops/README.md' },
  { source: 'designer-skills', slug: 'design-pricing--proposals', upstream: 'Owl-Listener/designer-skills', path: 'design-ops/skills/design-sprint-plan/SKILL.md' },
  { source: 'designer-skills', slug: 'inclusive-design', upstream: 'Owl-Listener/designer-skills', path: 'design-ops/skills/design-qa-checklist/SKILL.md' },

  { source: 'designer-skills', slug: 'ab-testing-analysis', upstream: 'Owl-Listener/designer-skills', path: 'designer-toolkit/README.md' },
];

// ════════════════════════════════════════════════════════════════════
//  PART 2: DESIGN.md — dynamic discovery from awesome repos
// ════════════════════════════════════════════════════════════════════
// These repos contain DESIGN.md files organised per-brand or per-style.
// Instead of a static map, we discover entries via GitHub API.

const DESIGN_REPOS = [
  // ═══ Core repos (already in sync) ═══
  { name: 'awesome-design-md', upstream: 'VoltAgent/awesome-design-md', subdir: 'design-md', filename: 'DESIGN.md', count: 74 },
  { name: 'awesome-design-skills', upstream: 'bergside/awesome-design-skills', subdir: 'skills', filename: 'DESIGN.md', count: 67 },

  // ═══ Major brand repos ═══
  { name: 'ndroussi/design-md-for-ai', upstream: 'ndroussi/design-md-for-ai', subdir: 'design-md', filename: 'DESIGN.md', count: 156 },
  { name: 'kwakseongjae/oh-my-design', upstream: 'kwakseongjae/oh-my-design', subdir: 'design-md', filename: 'DESIGN.md', count: 246 },
  { name: 'educlopez/design-bites', upstream: 'educlopez/design-bites', subdir: 'design-mds', filename: 'DESIGN.md', count: 281 },
  { name: 'Eldergenix/SUPER-DESIGN', upstream: 'Eldergenix/SUPER-DESIGN', subdir: 'super-design-md', filename: 'DESIGN.md', count: 56 },
  { name: 'albemala/design-md-library', upstream: 'albemala/design-md-library', subdir: 'design-md', filename: 'DESIGN.md', count: 14 },
  { name: 'soulcore-dev/soul-design-md', upstream: 'soulcore-dev/soul-design-md', subdir: 'designs', filename: 'DESIGN.md', count: 7 },
  { name: 'google-labs-code/design.md', upstream: 'google-labs-code/design.md', subdir: 'examples', filename: 'DESIGN.md', count: 3 },
  { name: 'nexu-io/open-design', upstream: 'nexu-io/open-design', subdir: 'design-systems', filename: 'DESIGN.md', count: 149 },
  { name: 'netsus/oh-my-design', upstream: 'netsus/oh-my-design', subdir: 'design-md', filename: 'DESIGN.md', count: 22 },

  // ═══ DesignMD.sh repos (new additions) ═══
  { name: 'cola-runner/awesome-tui-design', upstream: 'cola-runner/awesome-tui-design', subdir: 'designs', filename: 'DESIGN.md', count: 10 },
  { name: 'supernovae-st/nika-design-skill', upstream: 'supernovae-st/nika-design-skill', subdir: 'nika-design', filename: 'DESIGN.md', count: 8 },
  { name: 'kzhrknt/awesome-design-md-jp', upstream: 'kzhrknt/awesome-design-md-jp', subdir: 'design-md', filename: 'DESIGN.md', count: 20 },
  { name: 'whyashthakker/design-md-templates-skills', upstream: 'whyashthakker/design-md-templates-skills', subdir: 'agents/designs', filename: 'DESIGN.md', count: 5 },
];

// ═══ Static DESIGN.md entries (root-only repos, cannot auto-discover) ═══
const DESIGN_MAP_STATIC = [
  { source: 'pbakaus/impeccable', slug: 'impeccable', upstream: 'pbakaus/impeccable', path: 'DESIGN.md' },
  { source: 'voltagent/voltagent', slug: 'voltagent', upstream: 'voltagent/voltagent', path: 'DESIGN.md' },
  { source: 'masa-sumimoto/dreamcore-design-md', slug: 'dreamcore-design-md', upstream: 'masa-sumimoto/dreamcore-design-md', path: 'DESIGN.md' },
];

// ═══ WebDesignHot — file-based (no subdirs, .md files directly) ═══
const WEBDESIGNHOT = { name: 'WebDesignHot/design-md', upstream: 'WebDesignHot/design-md', subdir: 'design-md', count: 403 };

  // ═══ Meliwat — 2-level nesting: design-md/{category}/{brand}/DESIGN.md ═══
const MELIWAT = { name: 'Meliwat/awesome-ios-design-md', upstream: 'Meliwat/awesome-ios-design-md', subdir: 'design-md', filename: 'DESIGN.md', count: 152 };

// ═══ Skill repos (dynamic discover — SKILL.md in subdirs) ═══
const SKILL_REPOS = [
  { name: 'nexu-io/open-design', upstream: 'nexu-io/open-design', subdir: 'skills', filename: 'SKILL.md', count: 155 },
  { name: 'netsus/oh-my-design', upstream: 'netsus/oh-my-design', subdir: 'references', filename: 'SKILL.md', count: 1 },
];

/**
 * Discover all sub-directories in an upstream repo at a given path,
 * each containing a target file (e.g. DESIGN.md).
 */
async function discoverDesignEntries({ name, upstream, subdir, filename }) {
  const entries = [];

  const apiPath = `/repos/${upstream}/contents/${subdir}`;
  let items;
  try {
    items = await githubApi(apiPath);
  } catch (err) {
    console.log(`  FAIL  ${name} → cannot list ${apiPath}: ${err.message}`);
    return entries;
  }

  if (!Array.isArray(items)) {
    console.log(`  FAIL  ${name} → ${apiPath} returned non-array`);
    return entries;
  }

  const dirs = items.filter(d => d.type === 'dir');
  for (const dir of dirs) {
    entries.push({
      source: name,
      slug: dir.name,
      upstream,
      path: `${subdir}/${dir.name}/${filename}`,
    });
  }

  return entries;
}

/**
 * Discover DESIGN.md from Meliwat/awesome-ios-design-md (2-level nesting).
 * design-md/{category}/{brand}/DESIGN.md
 */
async function discoverMeliwatEntries() {
  const entries = [];
  const { name, upstream, subdir, filename } = MELIWAT;

  const apiPath = `/repos/${upstream}/contents/${subdir}`;
  let categories;
  try {
    categories = await githubApi(apiPath);
  } catch (err) {
    console.log(`  FAIL  ${name} → cannot list categories: ${err.message}`);
    return entries;
  }

  if (!Array.isArray(categories)) return entries;

  for (const cat of categories.filter(d => d.type === 'dir')) {
    const catPath = `${subdir}/${cat.name}`;
    let brands;
    try {
      brands = await githubApi(`/repos/${upstream}/contents/${catPath}`);
    } catch {
      continue;
    }
    if (!Array.isArray(brands)) continue;

    for (const brand of brands.filter(d => d.type === 'dir')) {
      entries.push({
        source: `${name} (${cat.name})`,
        slug: brand.name,
        upstream,
        path: `${catPath}/${brand.name}/${filename}`,
      });
    }
  }

  return entries;
}

/**
 * Discover files directly in WebDesignHot/design-md/ (no subdirs).
 * Each file is a .md named after the brand.
 */
async function discoverWebdesignhotEntries() {
  const entries = [];
  const { name, upstream, subdir } = WEBDESIGNHOT;

  const apiPath = `/repos/${upstream}/contents/${subdir}`;
  let items;
  try {
    items = await githubApi(apiPath);
  } catch (err) {
    console.log(`  FAIL  ${name} → cannot list: ${err.message}`);
    return entries;
  }

  if (!Array.isArray(items)) return entries;

  for (const file of items.filter(f => f.type === 'file' && f.name.endsWith('.md'))) {
    const slug = file.name.replace(/\.md$/i, '');
    entries.push({
      source: name,
      slug,
      upstream,
      path: `${subdir}/${file.name}`,
    });
  }

  return entries;
}

// ════════════════════════════════════════════════════════════════════
//  SYNC ENGINE
// ════════════════════════════════════════════════════════════════════

async function syncOne(entry, hashes) {
  const url = rawUrl(entry.upstream, entry.path);
  const outDir = path.join(ORIGINALS_DIR, entry.source, entry.slug);
  const outFile = path.join(outDir, path.basename(entry.path));
  const hashKey = `${entry.source}/${entry.slug}/${path.basename(entry.path)}`;

  // Cache: skip if synced today AND hash unchanged
  if (fs.existsSync(outFile)) {
    const mtime = fs.statSync(outFile).mtime;
    if (mtime.toDateString() === new Date().toDateString()) {
      return { entry, status: 'skip' };
    }
  }

  try {
    const content = await fetchUrl(url);
    const newHash = sha256(content);

    // Check if content actually changed
    const oldHash = hashes[hashKey];
    const changed = oldHash && oldHash !== newHash;
    const isNew = !oldHash;

    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(outFile, content, 'utf-8');

    // Update hash store
    hashes[hashKey] = newHash;

    if (changed) {
      changedEntries[hashKey] = 'updated';
      return { entry, status: 'updated', chars: content.length };
    } else if (isNew) {
      changedEntries[hashKey] = 'new';
      return { entry, status: 'new', chars: content.length };
    }
    return { entry, status: 'ok', chars: content.length };
  } catch (err) {
    return { entry, status: 'fail', error: err.message, url };
  }
}

async function sync(label, entries, hashes, concurrency = 5) {
  console.log(`\n── ${label} (${entries.length} entries) ──\n`);
  let ok = 0, updated = 0, added = 0, fail = 0, skip = 0;

  for (let i = 0; i < entries.length; i += concurrency) {
    const batch = entries.slice(i, i + concurrency);
    const results = await Promise.all(batch.map(e => syncOne(e, hashes)));

    for (const r of results) {
      switch (r.status) {
        case 'ok':
          console.log(`  OK    ${r.entry.source}/${r.entry.slug} (${r.chars} chars)`);
          ok++;
          break;
        case 'updated':
          console.log(`  🔄 UPD  ${r.entry.source}/${r.entry.slug} (${r.chars} chars)`);
          updated++;
          break;
        case 'new':
          console.log(`  ✨ NEW  ${r.entry.source}/${r.entry.slug} (${r.chars} chars)`);
          added++;
          break;
        case 'skip':
          console.log(`  SKIP  ${r.entry.source}/${r.entry.slug} (cached today)`);
          skip++;
          break;
        default:
          console.log(`  FAIL  ${r.entry.source}/${r.entry.slug} → ${r.url}\n        ${r.error}`);
          fail++;
      }
    }

    if (i + concurrency < entries.length) {
      await new Promise(r => setTimeout(r, 500));
    }
  }

  console.log(`  → ${ok} synced, ${updated} updated, ${added} new, ${fail} failed, ${skip} skipped`);
  return { ok, updated, added, fail, skip };
}

// ════════════════════════════════════════════════════════════════════
//  MAIN
// ════════════════════════════════════════════════════════════════════

function updateCatalogTimestamps() {
  const today = new Date().toISOString().split('T')[0];
  try {
    const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf-8'));
    let skillUpdates = 0, dsUpdates = 0;

    for (const skill of catalog.skills) {
      if (!skill.createdAt) skill.createdAt = today;
      const slug = skill.id;
      // Check if any originals hash changed for this skill
      for (const [hashKey, changeType] of Object.entries(changedEntries)) {
        if (hashKey.startsWith(skill.source + '/' + slug + '/') ||
            hashKey.includes('/' + slug + '/')) {
          skill.updatedAt = today;
          skillUpdates++;
          break;
        }
      }
      // Also check by matching source-slug pattern
      for (const [hashKey] of Object.entries(changedEntries)) {
        const parts = hashKey.split('/');
        if (parts.length >= 2) {
          const hashSource = parts[0];
          const hashSlug = parts[1];
          if (hashSource === skill.source && (hashSlug === slug || hashSlug === skill.name)) {
            skill.updatedAt = today;
            skillUpdates++;
            break;
          }
        }
      }
    }

    for (const ds of catalog.design_systems) {
      if (!ds.createdAt) ds.createdAt = today;
      const slug = ds.id;
      for (const [hashKey, changeType] of Object.entries(changedEntries)) {
        if (hashKey.startsWith(ds.source + '/' + slug + '/') ||
            hashKey.includes('/' + slug + '/') ||
            hashKey.endsWith('/' + slug + '.md')) {
          ds.updatedAt = today;
          dsUpdates++;
          break;
        }
      }
    }

    if (skillUpdates > 0 || dsUpdates > 0) {
      catalog.meta.lastUpdated = today;
      fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog), 'utf-8');
      console.log(`\n✓ Catalog timestamps updated: ${skillUpdates} skills, ${dsUpdates} DS`);
    } else {
      console.log(`\n− No catalog timestamp changes needed`);
    }
  } catch (err) {
    console.error(`\n⚠ Failed to update catalog timestamps: ${err.message}`);
  }
}

async function main() {
  console.log(`\n═══════════════ Sync Originals ═══════════════ ${new Date().toISOString()}\n`);

  const hashes = loadHashes();

  // Part 1: SKILL.md — static map + dynamic discovery
  let skillEntries = [...SKILL_MAP];

  // Dynamically discover skills from known repos
  for (const repo of SKILL_REPOS) {
    const discovered = await discoverDesignEntries(repo);
    console.log(`  Discovered ${discovered.length} skill entries from ${repo.name}`);
    skillEntries = skillEntries.concat(discovered);
  }

  const s1 = await sync('SKILL.md', skillEntries, hashes);

  // Part 2: DESIGN.md — discover + sync
  let designEntries = [];

  // Standard repos (subdir per brand)
  for (const repo of DESIGN_REPOS) {
    const discovered = await discoverDesignEntries(repo);
    console.log(`  Discovered ${discovered.length} entries from ${repo.name} (expected ~${repo.count})`);
    designEntries = designEntries.concat(discovered);
  }

  // Meliwat (2-level nesting)
  const meliwatEntries = await discoverMeliwatEntries();
  console.log(`  Discovered ${meliwatEntries.length} entries from ${MELIWAT.name} (expected ~${MELIWAT.count})`);
  designEntries = designEntries.concat(meliwatEntries);

  // WebDesignHot (file-based)
  const webhotEntries = await discoverWebdesignhotEntries();
  console.log(`  Discovered ${webhotEntries.length} entries from ${WEBDESIGNHOT.name} (expected ~${WEBDESIGNHOT.count})`);
  designEntries = designEntries.concat(webhotEntries);

  // Static entries (root-only repos)
  console.log(`\n  + ${DESIGN_MAP_STATIC.length} static DESIGN.md entries (root-only repos)`);
  designEntries = designEntries.concat(DESIGN_MAP_STATIC);

  const s2 = await sync('DESIGN.md', designEntries, hashes);

  // Save hashes for next run
  saveHashes(hashes);

  // Update catalog timestamps for changed items
  updateCatalogTimestamps();

  // Summary
  const totalOk = s1.ok + s2.ok;
  const totalUpdated = s1.updated + s2.updated;
  const totalNew = s1.added + s2.added;
  const totalFail = s1.fail + s2.fail;
  const totalSkip = s1.skip + s2.skip;

  console.log(`\n═══════════════════════════════════════════════════════`);
  console.log(`Total: ${totalOk} ok, ${totalUpdated} updated, ${totalNew} new, ${totalFail} failed, ${totalSkip} skipped`);
  console.log(`  SKILL.md:   ${s1.ok} ok, ${s1.updated} upd, ${s1.added} new, ${s1.fail} fail, ${s1.skip} skip`);
  console.log(`  DESIGN.md:  ${s2.ok} ok, ${s2.updated} upd, ${s2.added} new, ${s2.fail} fail, ${s2.skip} skip`);
  console.log(`═══════════════════════════════════════════════════════\n`);

  if (totalFail > 0) {
    console.log(`⚠  ${totalFail} failures — some originals may be missing`);
  }
  if (totalUpdated > 0 || totalNew > 0) {
    console.log(`📝 ${totalUpdated} updated, ${totalNew} new — catalog.json timestamps synced`);
  }

  const allEntries = skillEntries.length + designEntries.length;
  console.log(`Total sources tracked: ${allEntries} (${skillEntries.length} skills, ${designEntries.length} DS)`);
}

main();
