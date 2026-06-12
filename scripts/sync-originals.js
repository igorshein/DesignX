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

const ORIGINALS_DIR = path.join(__dirname, '..', 'src', 'originals');

// ════════════════════════════════════════════════════════════════════
//  HELPERS
// ════════════════════════════════════════════════════════════════════

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
  {
    // 74 brand design systems (Apple, Stripe, Figma, etc.)
    name: 'awesome-design-md',
    upstream: 'VoltAgent/awesome-design-md',
    subdir: 'design-md',
    filename: 'DESIGN.md',
  },
  {
    // 68 style-based design systems (Minimal, Neon, Brutalism, etc.)
    name: 'awesome-design-skills',
    upstream: 'bergside/awesome-design-skills',
    subdir: 'skills',
    filename: 'DESIGN.md',
  },
];

/**
 * Discover all sub-directories in an upstream repo at a given path,
 * each containing a target file (e.g. DESIGN.md).
 */
async function discoverDesignEntries({ name, upstream, subdir, filename }) {
  const entries = [];

  // Grab the directory listing from GitHub API
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

// ════════════════════════════════════════════════════════════════════
//  SYNC ENGINE
// ════════════════════════════════════════════════════════════════════

async function syncOne(entry) {
  const url = rawUrl(entry.upstream, entry.path);
  const outDir = path.join(ORIGINALS_DIR, entry.source, entry.slug);
  const outFile = path.join(outDir, path.basename(entry.path));

  // Cache: skip if synced today
  if (fs.existsSync(outFile)) {
    const mtime = fs.statSync(outFile).mtime;
    if (mtime.toDateString() === new Date().toDateString()) {
      return { entry, status: 'skip' };
    }
  }

  try {
    const content = await fetchUrl(url);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(outFile, content, 'utf-8');
    return { entry, status: 'ok', chars: content.length };
  } catch (err) {
    return { entry, status: 'fail', error: err.message, url };
  }
}

async function sync(label, entries, concurrency = 5) {
  console.log(`\n── ${label} (${entries.length} entries) ──\n`);
  let ok = 0, fail = 0, skip = 0;

  // Process in batches for concurrency
  for (let i = 0; i < entries.length; i += concurrency) {
    const batch = entries.slice(i, i + concurrency);
    const results = await Promise.all(batch.map(syncOne));

    for (const r of results) {
      if (r.status === 'ok') {
        console.log(`  OK    ${r.entry.source}/${r.entry.slug} (${r.chars} chars)`);
        ok++;
      } else if (r.status === 'skip') {
        console.log(`  SKIP  ${r.entry.source}/${r.entry.slug} (cached today)`);
        skip++;
      } else {
        console.log(`  FAIL  ${r.entry.source}/${r.entry.slug} → ${r.url}\n        ${r.error}`);
        fail++;
      }
    }

    if (i + concurrency < entries.length) {
      await new Promise(r => setTimeout(r, 500));
    }
  }

  console.log(`  → ${ok} synced, ${fail} failed, ${skip} skipped`);
  return { ok, fail, skip };
}

// ════════════════════════════════════════════════════════════════════
//  MAIN
// ════════════════════════════════════════════════════════════════════

async function main() {
  console.log(`\n═══════════════ Sync Originals ═══════════════ ${new Date().toISOString()}\n`);

  // Part 1: SKILL.md from static map
  const s1 = await sync('SKILL.md', SKILL_MAP);

  // Part 2: DESIGN.md — discover + sync
  let designEntries = [];
  for (const repo of DESIGN_REPOS) {
    const discovered = await discoverDesignEntries(repo);
    console.log(`  Discovered ${discovered.length} entries from ${repo.name}`);
    designEntries = designEntries.concat(discovered);
  }
  const s2 = await sync('DESIGN.md', designEntries);

  // Summary
  const totalOk = s1.ok + s2.ok;
  const totalFail = s1.fail + s2.fail;
  const totalSkip = s1.skip + s2.skip;

  console.log(`\n═══════════════════════════════════════════════════════`);
  console.log(`Total: ${totalOk} synced, ${totalFail} failed, ${totalSkip} skipped`);
  console.log(`  SKILL.md:   ${s1.ok} ok, ${s1.fail} fail, ${s1.skip} skip`);
  console.log(`  DESIGN.md:  ${s2.ok} ok, ${s2.fail} fail, ${s2.skip} skip`);
  console.log(`═══════════════════════════════════════════════════════\n`);

  if (totalFail > 0) {
    console.log(`⚠  ${totalFail} failures — some originals may be missing`);
  }
}

main();
