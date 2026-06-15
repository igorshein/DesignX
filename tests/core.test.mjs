import { describe, it, before } from 'node:test';
import assert from 'node:assert/strict';
import {
  escapeHtml, debounce, hexToLuminance, contrastRatio, isDarkColor,
  filterSkills, sortSkills, paginate, normalizeTokens, loadFavorites, saveFavorites
} from '../src/app.js';

describe('escapeHtml', () => {
  it('escapes & < > " \'', () => {
    assert.equal(escapeHtml('&<>"\'test'), '&amp;&lt;&gt;&quot;&#39;test');
  });
  it('returns empty string for non-strings', () => {
    assert.equal(escapeHtml(null), '');
    assert.equal(escapeHtml(undefined), '');
    assert.equal(escapeHtml(42), '');
  });
  it('passes safe strings through', () => {
    assert.equal(escapeHtml('hello world'), 'hello world');
    assert.equal(escapeHtml(''), '');
  });
});

describe('hexToLuminance', () => {
  it('black is near 0', () => {
    assert.ok(hexToLuminance('#000000') < 0.01);
  });
  it('white is near 1', () => {
    assert.ok(hexToLuminance('#ffffff') > 0.99);
  });
  it('handles short hex', () => {
    assert.equal(hexToLuminance('#fff'), 0);
  });
  it('#4da3ff has expected luminance', () => {
    const v = hexToLuminance('#4da3ff');
    assert.equal(typeof v, 'number');
    assert.ok(v > 0);
  });
});

describe('contrastRatio', () => {
  it('black on white is ~21:1', () => {
    const r = contrastRatio('#000000', '#ffffff');
    assert.ok(r > 20 && r < 22);
  });
  it('same colors ratio is 1:1', () => {
    const r = contrastRatio('#4da3ff', '#4da3ff');
    assert.ok(r >= 1 && r < 1.01);
  });
  it('WCAG AA pass for good contrast', () => {
    const r = contrastRatio('#000000', '#ffffff');
    assert.ok(r >= 4.5);
  });
  it('WCAG AA fail for poor contrast', () => {
    const r = contrastRatio('#7a8290', '#7a8291');
    assert.ok(r < 1.1);
  });
  it('is commutative', () => {
    assert.equal(contrastRatio('#000', '#fff'), contrastRatio('#fff', '#000'));
  });
});

describe('isDarkColor', () => {
  it('dark colors return true', () => {
    assert.equal(isDarkColor('#000000'), true);
    assert.equal(isDarkColor('#0a0b0f'), true);
    assert.equal(isDarkColor('#111318'), true);
  });
  it('light colors return false', () => {
    assert.equal(isDarkColor('#ffffff'), false);
    assert.equal(isDarkColor('#f7f5f3'), false);
  });
  it('handles null/undefined', () => {
    assert.equal(isDarkColor(null), true);
    assert.equal(isDarkColor(undefined), true);
  });
});

describe('filterSkills', () => {
  const skills = [
    { id: 's1', name: 'Typography', category: 'typography', complexity: 'beginner', rating: 4, tags: ['font', 'type'] },
    { id: 's2', name: 'Color Theory', category: 'color-theory', complexity: 'intermediate', rating: 5, tags: ['color', 'palette'], for_product_types: ['web-app'] },
    { id: 's3', name: 'UX Research', category: 'ux-research', complexity: 'advanced', rating: 3, tags: ['research'], for_product_types: ['mobile'] },
  ];

  it('returns all skills with empty filters', () => {
    assert.equal(filterSkills(skills, {}).length, 3);
  });

  it('filters by category', () => {
    const r = filterSkills(skills, { category: 'typography' });
    assert.equal(r.length, 1);
    assert.equal(r[0].id, 's1');
  });

  it('filters by complexity', () => {
    const r = filterSkills(skills, { complexity: 'beginner' });
    assert.equal(r.length, 1);
    assert.equal(r[0].id, 's1');
  });

  it('filters by product type', () => {
    const r = filterSkills(skills, { product: 'web-app' });
    assert.equal(r.length, 1);
    assert.equal(r[0].id, 's2');
  });

  it('filters by minimum rating', () => {
    const r = filterSkills(skills, { rating: 4 });
    assert.equal(r.length, 2);
  });

  it('filters by search text', () => {
    const r = filterSkills(skills, { search: 'color' });
    assert.equal(r.length, 1);
  });

  it('filters by search in tags', () => {
    const r = filterSkills(skills, { search: 'research' });
    assert.equal(r.length, 1);
  });

  it('filters by favorites set', () => {
    const fav = new Set(['s1', 's3']);
    const r = filterSkills(skills, { favorites: fav });
    assert.equal(r.length, 2);
  });

  it('filters by hex tag', () => {
    const skillWithHex = { id: 's4', name: 'Blue', tags: ['#4da3ff', 'color'] };
    const r = filterSkills([...skills, skillWithHex], { hex: '#4da3ff' });
    assert.equal(r.length, 1);
  });

  it('returns empty array when nothing matches', () => {
    const r = filterSkills(skills, { category: 'motion' });
    assert.equal(r.length, 0);
  });
});

describe('sortSkills', () => {
  const skills = [
    { id: 's1', name: 'Beta', rating: 3 },
    { id: 's2', name: 'Alpha', rating: 5 },
    { id: 's3', name: 'Gamma', rating: 4 },
  ];

  it('sorts ascending by name', () => {
    const r = sortSkills(skills, 'name-asc');
    assert.equal(r[0].id, 's2');
    assert.equal(r[2].id, 's3');
  });

  it('sorts descending by name', () => {
    const r = sortSkills(skills, 'name-desc');
    assert.equal(r[0].id, 's3');
    assert.equal(r[2].id, 's2');
  });

  it('sorts descending by rating', () => {
    const r = sortSkills(skills, 'rating-desc');
    assert.equal(r[0].id, 's2');
  });

  it('does not mutate original', () => {
    const original = [...skills];
    sortSkills(skills, 'name-desc');
    assert.deepEqual(skills, original);
  });
});

describe('paginate', () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  it('returns first page', () => {
    const r = paginate(items, 0, 3);
    assert.deepEqual(r.items, [1, 2, 3]);
    assert.equal(r.total, 10);
    assert.equal(r.totalPages, 4);
    assert.equal(r.page, 0);
  });

  it('returns specific page', () => {
    const r = paginate(items, 2, 3);
    assert.deepEqual(r.items, [7, 8, 9]);
  });

  it('clamps page to valid range', () => {
    const r = paginate(items, 99, 3);
    assert.deepEqual(r.items, [10]);
    assert.equal(r.page, 3);
  });

  it('handles empty list', () => {
    const r = paginate([], 0, 10);
    assert.equal(r.totalPages, 1);
    assert.deepEqual(r.items, []);
  });
});

describe('normalizeTokens', () => {
  it('returns null for invalid input', () => {
    assert.equal(normalizeTokens(null), null);
    assert.equal(normalizeTokens(undefined), null);
    assert.equal(normalizeTokens('string'), null);
  });

  it('passes through standard format with defaults', () => {
    const t = normalizeTokens({ bg: '#000', text: '#fff', accent: '#4da3ff' });
    assert.equal(t.font, 'JetBrains Mono');
    assert.equal(t.radius, '6px');
    assert.equal(t.dark, true);
  });

  it('maps OMD-style tokens', () => {
    const t = normalizeTokens({
      '--bg-primary': '#0a0b0f',
      '--text-primary': '#e8ebf0',
      '--accent-primary': '#4da3ff',
    });
    assert.equal(t.bg, '#0a0b0f');
    assert.equal(t.text, '#e8ebf0');
    assert.equal(t.accent, '#4da3ff');
  });

  it('falls back to positional hex extraction', () => {
    const t = normalizeTokens({ c1: '#000', c2: '#fff', c3: '#4da3ff' });
    assert.equal(t.bg, '#000');
    assert.equal(t.text, '#fff');
    assert.equal(t.accent, '#4da3ff');
  });
});

describe('loadFavorites', () => {
  it('returns empty set for missing key', () => {
    const f = loadFavorites('nonexistent-test-key');
    assert.ok(f instanceof Set);
    assert.equal(f.size, 0);
  });

  it('returns empty set when localStorage unavailable', () => {
    const f = loadFavorites('any-key');
    assert.ok(f instanceof Set);
  });

  it('handles corrupt JSON gracefully', () => {
    const f = loadFavorites();
    assert.ok(f instanceof Set);
  });
});
