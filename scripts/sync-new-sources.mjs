/**
 * sync-new-sources.mjs
 *
 * Downloads SKILL.md files from newly discovered GitHub repos
 * and generates catalog entries.
 *
 * New sources:
 *   1. addyosmani/agent-skills   — 24 skills (frontend-ui-engineering, etc.)
 *   2. agent-skills-hub/agent-skills-hub — UI/UX designer skill
 *   3. jnPiyush/AgentX           — design skills
 *   4. Srinivas26k/agency-skill  — web-design skill
 *   5. gokulkrishh/skills        — UX writing, web animation
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ORIGINALS_DIR = path.resolve(__dirname, '..', 'src', 'originals');
const CATALOG_PATH = path.resolve(__dirname, '..', 'src', 'data', 'catalog.json');

function rawUrl(upstream, filePath) {
  return `https://raw.githubusercontent.com/${upstream}/main/${filePath}`;
}

async function fetchText(url) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status} ${resp.statusText}`);
  return resp.text();
}

// ─── Source definitions ──────────────────────────────────────────────

const SKILL_SOURCES = [
  // addyosmani/agent-skills
  ...['frontend-ui-engineering', 'api-and-interface-design'].map(name => ({
    source: 'addyosmani/agent-skills',
    slug: name,
    upstream: 'addyosmani/agent-skills',
    path: `skills/${name}/SKILL.md`,
  })),
  // addyosmani has 24 skills total — add the rest
  ...['accessibility-engineering', 'testing-and-quality', 'performance-optimization',
     'security-engineering', 'data-modeling', 'documentation-craft',
     'devops-and-cicd', 'architecture-and-design', 'code-review-workflow',
     'dependency-management', 'logging-and-observability', 'error-recovery',
     'technical-debt-management', 'migration-strategy', 'incident-response',
     'refactoring-workflow', 'database-operations', 'cli-tool-design',
     'responsive-web-engineering', 'state-management', 'build-system-engineering',
     'monitoring-alerting'].map(name => ({
    source: 'addyosmani/agent-skills',
    slug: name,
    upstream: 'addyosmani/agent-skills',
    path: `skills/${name}/SKILL.md`,
  })),

  // agent-skills-hub/agent-skills-hub
  { source: 'agent-skills-hub/agent-skills-hub', slug: 'ui-ux-designer',
    upstream: 'agent-skills-hub/agent-skills-hub', path: 'skills/ui-ux-designer/SKILL.md' },

  // Srinivas26k/agency-skill
  { source: 'Srinivas26k/agency-skill', slug: 'agency-designer',
    upstream: 'Srinivas26k/agency-skill', path: 'SKILL.md' },

  // gokulkrishh/skills
  ...['ux-writing', 'web-animation-design'].map(name => ({
    source: 'gokulkrishh/skills', slug: name,
    upstream: 'gokulkrishh/skills', path: `skills/${name}/SKILL.md`,
  })),

  // arvindand/agent-skills
  { source: 'arvindand/agent-skills', slug: 'ui-ux-design',
    upstream: 'arvindand/agent-skills', path: 'skills/ui-ux-design/SKILL.md' },

  // majiayu000/claude-skill-registry — ui-design-agent
  { source: 'majiayu000/claude-skill-registry', slug: 'ui-design-agent',
    upstream: 'majiayu000/claude-skill-registry', path: 'skills/data/ui-design-agent/SKILL.md' },
];

// ─── Sync ────────────────────────────────────────────────────────────

async function syncSkill(entry) {
  const url = rawUrl(entry.upstream, entry.path);
  const outDir = path.join(ORIGINALS_DIR, entry.source, entry.slug);
  const outFile = path.join(outDir, 'SKILL.md');

  if (fs.existsSync(outFile)) {
    const mtime = fs.statSync(outFile).mtime;
    if (mtime.toDateString() === new Date().toDateString()) {
      return { entry, status: 'skip' };
    }
  }

  try {
    const content = await fetchText(url);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(outFile, content, 'utf-8');
    return { entry, status: 'ok', chars: content.length };
  } catch (err) {
    return { entry, status: 'fail', error: err.message, url };
  }
}

// ─── Catalog entry generation ───────────────────────────────────────

function parseSkillFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const fm = {};
  const lines = match[1].split('\n');
  for (const line of lines) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) {
      let val = kv[2].trim().replace(/^["']|["']$/g, '');
      // Handle metadata as an object
      if (kv[1] === 'metadata') continue;
      fm[kv[1]] = val;
    }
  }
  return fm;
}

function generateEntry(source, slug, content) {
  const fm = parseSkillFrontmatter(content);
  const name = fm?.name || slug;
  const description = fm?.description || '';

  // Determine category from keywords
  let category = 'unspecified';
  const text = `${name} ${description}`.toLowerCase();
  if (/frontend|ui|ux|design|web|animation/.test(text)) category = 'visual-design';
  else if (/accessibility|a11y/.test(text)) category = 'accessibility';
  else if (/api|interface|architecture/.test(text)) category = 'architecture';

  // Determine complexity
  let complexity = 'intermediate';
  if (/advanced|senior|expert/.test(text)) complexity = 'advanced';
  else if (/beginner|basic|simple/.test(text)) complexity = 'beginner';

  const summary = description.length > 120 ? description.substring(0, 120) + '...' : description;

  return {
    id: source.replace('/', '-') + '-' + slug,
    name: name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    source,
    category,
    complexity,
    summary,
    description,
    for_product_types: [],
    tags: [source.split('/')[0]],
    key_principles: [],
    frameworks: [],
    rating: 0,
  };
}

// ─── Main ────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n═══ Syncing ${SKILL_SOURCES.length} skills from new sources ═══\n`);

  let ok = 0, fail = 0, skip = 0;
  const newEntries = [];

  // Process in batches of 5 for concurrency
  for (let i = 0; i < SKILL_SOURCES.length; i += 5) {
    const batch = SKILL_SOURCES.slice(i, i + 5);
    const results = await Promise.all(batch.map(syncSkill));

    for (const r of results) {
      if (r.status === 'ok') {
        console.log(`  OK    ${r.entry.source}/${r.entry.slug} (${r.chars} chars)`);
        newEntries.push(generateEntry(r.entry.source, r.entry.slug, 
          fs.readFileSync(path.join(ORIGINALS_DIR, r.entry.source, r.entry.slug, 'SKILL.md'), 'utf-8')));
        ok++;
      } else if (r.status === 'skip') {
        console.log(`  SKIP  ${r.entry.source}/${r.entry.slug} (cached)`);
        skip++;
      } else {
        console.log(`  FAIL  ${r.entry.source}/${r.entry.slug} → ${r.error}`);
        fail++;
      }
    }
  }

  console.log(`\n→ ${ok} synced, ${fail} failed, ${skip} skipped`);

  if (newEntries.length === 0) {
    console.log('No new entries to add.');
    return;
  }

  // Read existing catalog
  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf-8'));
  const existingIds = new Set(catalog.skills.map(s => s.id));
  let added = 0;

  for (const entry of newEntries) {
    if (!existingIds.has(entry.id)) {
      catalog.skills.push(entry);
      existingIds.add(entry.id);
      added++;
    }
  }

  // Backup
  const backupPath = CATALOG_PATH.replace('.json', '.backup.json');
  fs.copyFileSync(CATALOG_PATH, backupPath);

  // Write
  fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2), 'utf-8');
  console.log(`\nAdded ${added} new skills to catalog (${catalog.skills.length} total)`);

  // Show samples
  console.log('\nSample new entries:');
  newEntries.slice(0, 5).forEach(e => {
    console.log(`  ${e.id} → ${e.name} [${e.category}]`);
  });
}

main().catch(err => { console.error(err); process.exit(1); });
