// DesignX — i18n Engine
// Zero-dependency localization with key-value dictionaries
// Supports simple interpolation: t('welcome', name) → "Привет, {0}!"

const STORAGE_KEY = 'designx-lang';
const _locales = {};
let _current = 'ru';
let _listeners = new Set();

export function registerLocale(lang, dict) {
  _locales[lang] = { ...dict };
}

export function setLanguage(lang) {
  if (!_locales[lang]) return;
  _current = lang;
  try { localStorage.setItem(STORAGE_KEY, lang); } catch {}
  _listeners.forEach(fn => fn(lang));
}

export function getLanguage() {
  return _current;
}

export function getLocales() {
  return Object.keys(_locales);
}

export function getLocaleNames() {
  return Object.fromEntries(
    Object.entries(_locales).map(([k, v]) => [k, v._name || k])
  );
}

export function onChange(fn) {
  _listeners.add(fn);
  return () => _listeners.delete(fn);
}

export function t(key, ...args) {
  const dict = _locales[_current];
  const val = key.split('.').reduce((o, k) => o?.[k], dict);
  if (val === undefined || val === null) return key;
  if (typeof val === 'string' && args.length > 0) {
    return val.replace(/\{(\d+)\}/g, (_, i) => String(args[Number(i)] ?? ''));
  }
  return val;
}

export function tArray(key) {
  const val = t(key);
  return Array.isArray(val) ? val : [];
}

export function initLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && _locales[saved]) _current = saved;
  } catch {}
  return _current;
}

export function getStatic(key) {
  return t(key);
}

// Deep merge helper for locale overrides
export function extendLocale(lang, overrides) {
  if (!_locales[lang]) return;
  _locales[lang] = deepMerge(_locales[lang], overrides);
}

function deepMerge(a, b) {
  const result = { ...a };
  for (const [k, v] of Object.entries(b)) {
    if (v && typeof v === 'object' && !Array.isArray(v) && a[k] && typeof a[k] === 'object') {
      result[k] = deepMerge(a[k], v);
    } else {
      result[k] = v;
    }
  }
  return result;
}
