// import-designmd-sh.mjs
// Discovers new DESIGN.md repositories from designmd.sh registry
// and alerts about repos not yet tracked in sync-originals.js.
//
// Usage: node scripts/import-designmd-sh.mjs
//   — Fetches sitemap from designmd.sh
//   — Cross-references against DESIGN_REPOS and DESIGN_MAP_STATIC
//   — Reports new/untracked repos for manual addition to sync-originals.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITEMAP_URL = 'https://designmd.sh/sitemap.xml';

// These are the repos already tracked in sync-originals.js
const TRACKED_REPOS = new Set([
  'voltagent/awesome-design-md',
  'bergside/awesome-design-skills',
  'ndroussi/design-md-for-ai',
  'kwakseongjae/oh-my-design',
  'educlopez/design-bites',
  'Eldergenix/SUPER-DESIGN',
  'albemala/design-md-library',
  'soulcore-dev/soul-design-md',
  'google-labs-code/design.md',
  'nexu-io/open-design',
  'netsus/oh-my-design',
  'WebDesignHot/design-md',
  'Meliwat/awesome-ios-design-md',
  'cola-runner/awesome-tui-design',
  'supernovae-st/nika-design-skill',
  'kzhrknt/awesome-design-md-jp',
  'whyashthakker/design-md-templates-skills',
  'pbakaus/impeccable',
  'voltagent/voltagent',
  'masa-sumimoto/dreamcore-design-md',
]);

async function fetchText(url) {
  const resp = await fetch(url, { headers: { 'User-Agent': 'DesignX-Importer/1.0' } });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return resp.text();
}

function parseSitemap(xml) {
  const locs = [...xml.matchAll(/<loc>(https:\/\/designmd\.sh[^<]+)<\/loc>/g)].map(m => m[1]);
  return locs.filter(l =>
    !l.includes('/docs') && !l.includes('/about') && !l.includes('/privacy') &&
    !l.includes('/terms') && !l.includes('/saved') && l !== 'https://designmd.sh/'
  );
}

function parseEntry(url) {
  const u = new URL(url);
  const parts = u.pathname.split('/').filter(Boolean);
  if (parts.length < 2) return null;
  return {
    owner: parts[0],
    repo: parts[1],
    upstream: `${parts[0]}/${parts[1]}`,
    rest: parts.slice(2),
  };
}

async function main() {
  console.log('=== designmd.sh Discovery Tool ===\n');

  const xml = await fetchText(SITEMAP_URL);
  const urls = parseSitemap(xml);
  console.log(`Entries in sitemap: ${urls.length}\n`);

  const entries = urls.map(parseEntry).filter(Boolean);

  // Group by upstream repo
  const byRepo = {};
  for (const e of entries) {
    if (!byRepo[e.upstream]) {
      byRepo[e.upstream] = { entries: [] };
    }
    byRepo[e.upstream].entries.push(e);
  }

  const tracked = [];
  const untracked = [];

  for (const [upstream, info] of Object.entries(byRepo)) {
    if (TRACKED_REPOS.has(upstream) || TRACKED_REPOS.has(upstream.toLowerCase())) {
      tracked.push({ upstream, entries: info.entries.length });
    } else {
      untracked.push({ upstream, entries: info.entries });
    }
  }

  console.log(`Tracked repos (covered by sync-originals.js): ${tracked.length}`);
  for (const t of tracked) {
    console.log(`  ✓ ${t.upstream} (${t.entries} entries)`);
  }

  if (untracked.length === 0) {
    console.log('\n✓ No untracked repos found — all designmd.sh entries are covered.\n');
  } else {
    console.log(`\n⚠  UNTRACKED REPOS (${untracked.length}) — add to sync-originals.js:`);
    for (const u of untracked) {
      const slugs = u.entries.map(e => e.rest.join('/') || 'DESIGN.md at root').join(', ');
      console.log(`\n  ${u.upstream}`);
      console.log(`    Entries: ${slugs}`);
    }
    console.log('\nTo add: insert into DESIGN_REPOS[] or DESIGN_MAP_STATIC[] in scripts/sync-originals.js\n');
  }
}

main().catch(err => { console.error(err); process.exit(1); });
