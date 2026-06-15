// DesignX — Core Engine
// Shared logic between index.html and public/index.html

// --- Constants ---
export const CAT_COLORS = {
  'visual-design': '#4da3ff', 'ux-research': '#9cdcfe', 'prototyping': '#dcdcaa',
  'design-system': '#4ec990', 'critique': '#f14c4c', 'brand': '#c9a84c',
  'motion': '#b388ff', 'typography': '#e8ebf0', 'color-theory': '#ff6b6b',
  'layout-composition': '#7a8290', 'interaction': '#00e5ff', 'mobile': '#8b5cf6',
  'responsive': '#4ec990', 'frontend-dev': '#9cdcfe', 'data-viz': '#f0a060',
  'accessibility': '#4da3ff', 'game-ui': '#ff6600', 'design-tools': '#7a8290',
  'ai-tools': '#b388ff', 'design-ops': '#4da3ff'
};

export const COMPLEXITY_LABELS = {
  beginner: { ru: 'Начальный', en: 'Beginner' },
  intermediate: { ru: 'Средний', en: 'Intermediate' },
  advanced: { ru: 'Продвинутый', en: 'Advanced' }
};

// --- Security ---
export function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return str.replace(/[&<>"']/g, c => map[c]);
}

export function escapeAttr(str) {
  return escapeHtml(str);
}

// --- Debounce ---
export function debounce(fn, ms = 250) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

// --- Color utilities ---
export function hexToLuminance(hex) {
  const h = hex.replace('#', '');
  if (h.length < 6) return 0;
  const r = parseInt(h.substring(0, 2), 16) / 255;
  const g = parseInt(h.substring(2, 4), 16) / 255;
  const b = parseInt(h.substring(4, 6), 16) / 255;
  const f = n => n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

export function contrastRatio(fg, bg) {
  const l1 = hexToLuminance(fg) + 0.05;
  const l2 = hexToLuminance(bg) + 0.05;
  return Math.max(l1, l2) / Math.min(l1, l2);
}

export function isDarkColor(hex) {
  if (!hex || typeof hex !== 'string') return true;
  const h = hex.replace('#', '');
  if (h.length < 6) return true;
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) < 128;
}

// --- Data operations ---
export function filterSkills(skills, filters) {
  let result = [...skills];
  const { category, complexity, product, source, rating, search, hex, favorites } = filters;

  if (category && category !== 'all') result = result.filter(s => s.category === category);
  if (complexity && complexity !== 'all') result = result.filter(s => s.complexity === complexity);
  if (product) result = result.filter(s => s.for_product_types?.includes(product));
  if (source) result = result.filter(s => (s.source_short || s.source || '') === source);
  if (rating > 0) result = result.filter(s => (s.rating || 0) >= rating);
  if (search) {
    const q = search.toLowerCase();
    result = result.filter(s =>
      s.name.toLowerCase().includes(q) ||
      (s.tags || []).some(t => t.toLowerCase().includes(q)) ||
      (s.description || s.summary || '').toLowerCase().includes(q)
    );
  }
  if (favorites) result = result.filter(s => favorites.has(s.id));
  if (hex && /^#[0-9a-f]{3,8}$/i.test(hex)) {
    const h = hex.toLowerCase();
    result = result.filter(s => (s.tags || []).some(t => t.toLowerCase().includes(h)));
  }

  return result;
}

export function sortSkills(skills, sortBy) {
  return [...skills].sort((a, b) => {
    switch (sortBy) {
      case 'name-desc': return b.name.localeCompare(a.name);
      case 'rating-desc': return (b.rating || 0) - (a.rating || 0) || a.name.localeCompare(b.name);
      case 'rating-asc': return (a.rating || 0) - (b.rating || 0) || a.name.localeCompare(b.name);
      default: return a.name.localeCompare(b.name);
    }
  });
}

export function paginate(items, page, pageSize) {
  const total = items.length;
  const totalPages = Math.ceil(total / pageSize) || 1;
  const p = Math.max(0, Math.min(page, totalPages - 1));
  const start = p * pageSize;
  return { items: items.slice(start, start + pageSize), total, totalPages, page: p, start };
}

// --- Catalog loader ---
export function loadCatalog(paths, onSuccess, onError) {
  function tryPath(i) {
    if (i >= paths.length) {
      onError?.();
      return;
    }
    fetch(paths[i])
      .then(r => { if (!r.ok) throw new Error('fetch failed'); return r.json(); })
      .then(c => onSuccess?.(c))
      .catch(() => tryPath(i + 1));
  }
  tryPath(0);
}

// --- Event delegation ---
export function delegate(container, selector, eventType, handler) {
  container.addEventListener(eventType, e => {
    const target = e.target.closest(selector);
    if (target) handler(target, e);
  });
}

// --- LocalStorage wrapper (safe for Node.js) ---
function getStorage() {
  return typeof localStorage !== 'undefined' ? localStorage : null;
}

export function loadFavorites(key = 'designx-favs') {
  try {
    const ls = getStorage();
    if (!ls) return new Set();
    return new Set(JSON.parse(ls.getItem(key) || '[]'));
  } catch { return new Set(); }
}

export function saveFavorites(favorites, key = 'designx-favs') {
  try {
    const ls = getStorage();
    if (ls) ls.setItem(key, JSON.stringify([...favorites]));
  } catch { /* localStorage not available */ }
}

// --- Date badge ---
export function dateBadge(item) {
  if (!item.createdAt) return '';
  const created = item.createdAt;
  const updated = item.updatedAt;
  const isUpdated = updated && updated !== created;
  const today = new Date().toISOString().split('T')[0];
  const isRecent = today === updated || today === created;
  const dateStr = isUpdated ? updated : created;
  const cls = isUpdated ? 'badge-updated' : 'badge-created';
  const label = isUpdated ? 'ОБНОВЛЕНО' : 'НОВОЕ';
  const showLabel = isRecent || isUpdated;
  return showLabel
    ? `<span class="date-badge ${cls}" title="${isUpdated ? 'обновлено' : 'создано'}: ${dateStr}">${label}</span>`
    : `<span class="date-badge date-muted" title="${isUpdated ? 'обновлено' : 'создано'}: ${dateStr}">${dateStr}</span>`;
}

// --- Token normalization (from optimize-catalog.mjs) ---
// --- i18n re-exports ---
export {
  registerLocale, setLanguage, getLanguage, getLocales, getLocaleNames,
  onChange, t, tArray, initLanguage, extendLocale
} from './i18n.js';

export function normalizeTokens(tokens) {
  if (!tokens || typeof tokens !== 'object') return null;
  if (tokens.bg || tokens.text || tokens.accent) {
    const out = { ...tokens };
    if (!out.font) out.font = 'JetBrains Mono';
    if (!out.radius && out.radius !== 0) out.radius = '6px';
    if (out.dark === undefined) out.dark = isDarkColor(out.bg || '#ffffff');
    return out;
  }
  const omdMap = {
    '--bg-primary': 'bg', '--bg-secondary': 'bg_elevated', '--bg-elevated': 'bg_elevated',
    '--text-primary': 'text', '--text-secondary': 'text_muted', '--text-muted': 'text_muted',
    '--accent-primary': 'accent', '--accent-secondary': 'accent2', '--accent': 'accent',
    '--border-color': 'border', '--border': 'border', '--success': 'success',
    '--error': 'error', '--warning': 'warning', '--radius': 'radius', '--font': 'font',
  };
  const out = {};
  let hasValue = false;
  for (const [key, val] of Object.entries(tokens)) {
    if (omdMap[key]) { out[omdMap[key]] = val; hasValue = true; }
  }
  if (!hasValue) {
    const hexValues = Object.values(tokens).filter(v => typeof v === 'string' && /^#[0-9a-f]{3,8}$/i.test(v));
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
  if (out.dark === undefined && out.bg) out.dark = isDarkColor(out.bg);
  return out;
}
