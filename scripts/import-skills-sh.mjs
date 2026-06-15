// import-skills-sh.mjs
// Discovers new SKILL.md files from the vercel-labs/skills ecosystem.
// Uses GitHub API because skills.sh itself is behind Cloudflare (403).
//
// Strategy:
//   1. Fetch known skill repos from vercel-labs/skills CLI source
//   2. List contents of known skill subdirs (skills/, agents/, references/)
//   3. Cross-reference against existing catalog — only import truly new skills
//   4. GitHub Code Search as supplementary discovery
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CATALOG_PATH = path.resolve(__dirname, '..', 'src', 'data', 'catalog.json');
const ORIGINALS_DIR = path.resolve(__dirname, '..', 'src', 'originals');
const REGISTRY_DIR = path.resolve(__dirname, '..', 'src', 'skills');

const GITHUB_API = 'https://api.github.com';
const UA = 'DesignX-Importer/1.0';

const SKILL_SUBDIRS = ['skills', 'agents', 'references', 'agents/designs'];

const NON_SKILL_FILES = new Set([
  'readme.md', 'readme', 'license', 'license.md', 'contributing.md',
  'code_of_conduct.md', 'changelog.md', 'security.md', 'third_party_notices.md',
  'claude.md', 'claude', '.gitignore', 'package.json',
]);

async function fetchJson(pathname) {
  const url = `${GITHUB_API}${pathname}`;
  const resp = await fetch(url, { headers: { 'User-Agent': UA, 'Accept': 'application/vnd.github.v3+json' } });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return resp.json();
}

async function fetchText(url) {
  const resp = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return resp.text();
}

function isSkillFile(name) {
  const lower = name.toLowerCase();
  if (!lower.endsWith('.md')) return false;
  const base = lower.replace(/\.md$/, '');
  if (base === 'readme' || base === 'license' || base === 'contributing' ||
      base === 'code_of_conduct' || base === 'changelog' || base === 'security' ||
      base === 'third_party_notices' || base === 'claude') return false;
  return true;
}

async function listDir(upstream, subdir) {
  try {
    return await fetchJson(`/repos/${upstream}/contents/${subdir}`);
  } catch {
    return [];
  }
}

async function discoverSkills(repo) {
  const results = [];
  for (const subdir of SKILL_SUBDIRS) {
    const items = await listDir(repo.upstream, subdir);
    if (!Array.isArray(items)) continue;
    for (const item of items) {
      if (item.type !== 'dir') continue;
      // Check for SKILL.md or .md files inside
      const dirItems = await listDir(repo.upstream, `${subdir}/${item.name}`);
      if (!Array.isArray(dirItems)) continue;
      for (const file of dirItems) {
        if (file.type !== 'file') continue;
        if (!isSkillFile(file.name)) continue;
        results.push({
          source: repo.name,
          slug: item.name,
          upstream: repo.upstream,
          path: file.path,
          filename: file.name,
        });
      }
    }
  }
  return results;
}

async function main() {
  console.log('=== skills.sh Discovery & Import ===\n');

  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf-8'));
  const existingSources = new Set(catalog.skills.map(s => s.source));
  const existingIds = new Set(catalog.skills.map(s => s.id));
  const today = new Date().toISOString().split('T')[0];

  // ── Phase 1: Known repos ──
  console.log('── Known skill repos ──\n');

  // Repos we KNOW about but might not have all skills synced yet
  const KNOWN_REPOS = [
    { name: 'vercel-labs/agent-skills', upstream: 'vercel-labs/agent-skills' },
    { name: 'find-collabs/find-skills', upstream: 'find-collabs/find-skills' },
    { name: 'nick-keller/skills.sh', upstream: 'nick-keller/skills.sh' },
  ];

  let added = 0, skipped = 0, failed = 0;

  for (const repo of KNOWN_REPOS) {
    console.log(`  ${repo.name}...`);
    const entries = await discoverSkills(repo);
    console.log(`    Found ${entries.length} skill files`);

    for (const entry of entries) {
      if (existingIds.has(entry.slug)) {
        skipped++;
        continue;
      }

      const rawUrl = `https://raw.githubusercontent.com/${entry.upstream}/main/${entry.path}`;
      let content;
      try {
        content = await fetchText(rawUrl);
      } catch {
        try {
          content = await fetchText(rawUrl.replace('/main/', '/master/'));
        } catch {
          failed++;
          continue;
        }
      }

      const firstLine = content.split('\n')[0].replace(/^#\s*/, '').trim();
      const name = firstLine || entry.slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const descMatch = content.match(/^>\s*(.+)$/m);
      const description = descMatch ? descMatch[1].trim() : `AI skill from ${entry.upstream}.`;

      catalog.skills.push({
        id: entry.slug,
        name,
        source: entry.source,
        description: description.substring(0, 300),
        tags: [entry.upstream.split('/')[0]],
        createdAt: today,
        updatedAt: today,
      });
      existingIds.add(entry.slug);
      added++;

      const origDir = path.join(ORIGINALS_DIR, `skills-sh/${repo.name}`, entry.slug);
      fs.mkdirSync(origDir, { recursive: true });
      fs.writeFileSync(path.join(origDir, entry.filename), content, 'utf-8');

      const skillDir = path.join(REGISTRY_DIR, entry.slug);
      fs.mkdirSync(skillDir, { recursive: true });
      fs.writeFileSync(path.join(skillDir, entry.filename), content, 'utf-8');

      console.log(`    + ${entry.slug} (${entry.source})`);
    }
  }

  // ── Phase 2: GitHub Code Search ──
  console.log('\n── GitHub Code Search ──\n');

  const searchQueries = [
    'SKILL.md path:skills/ "Design" "name:" filename:SKILL.md',
    'SKILL.md path:agents/ "design system" filename:SKILL.md',
  ];

  for (const query of searchQueries) {
    console.log(`  Search: ${query.substring(0, 50)}...`);
    const q = encodeURIComponent(query);
    let data;
    try {
      data = await fetchJson(`/search/code?q=${q}&per_page=20`);
    } catch (err) {
      console.log(`    ⚠ Search failed: ${err.message}`);
      continue;
    }
    const items = data.items || [];
    console.log(`    ${items.length} results`);

    for (const item of items) {
      const repoName = item.repository.full_name;
      const filePath = item.path;
      const slug = path.basename(filePath, '.md');

      // Skip known repos (already handled)
      if (KNOWN_REPOS.some(r => r.upstream === repoName)) continue;
      if (existingIds.has(slug)) continue;

      const rawUrl = `https://raw.githubusercontent.com/${repoName}/main/${filePath}`;
      let content;
      try {
        content = await fetchText(rawUrl);
      } catch {
        continue;
      }

      const firstLine = content.split('\n')[0].replace(/^#\s*/, '').trim();
      const name = firstLine || slug;
      const descMatch = content.match(/^>\s*(.+)$/m);
      const description = descMatch ? descMatch[1].trim() : `AI skill from ${repoName}.`;

      catalog.skills.push({
        id: slug,
        name,
        source: repoName,
        description: description.substring(0, 300),
        tags: [repoName.split('/')[0]],
        createdAt: today,
        updatedAt: today,
      });
      existingIds.add(slug);
      added++;

      console.log(`    + ${slug} (${repoName})`);
    }
  }

  // ── Save ──
  catalog.meta.lastUpdated = today;
  catalog.meta.totalSkills = catalog.skills.length;
  fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog), 'utf-8');

  console.log(`\n=== Done ===`);
  console.log(`New: ${added}, Skipped: ${skipped}, Failed: ${failed}`);
  console.log(`Total skills: ${catalog.skills.length}`);
}

main().catch(err => { console.error(err); process.exit(1); });
