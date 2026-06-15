export default {
  _name: 'English',

  lang: {
    ru: 'РУС',
    en: 'ENG',
    zh: '中文',
    title: 'Interface language',
    switcherTitle: 'Language'
  },

  nav: {
    browse: 'Browse',
    favorites: 'Favorites',
    matcher: 'Matcher',
    systems: 'Design Systems',
    philosophies: 'Philosophies',
    process: 'Process',
    references: 'References',
    tools: 'Tools',
    about: 'About'
  },

  search: {
    placeholder: 'Search skills by name, tags, description...',
    hexPlaceholder: '#4da3ff',
    hexTitle: 'Search systems by hex color. Results in Design Systems tab',
    pressToSearch: 'Press / to search'
  },

  filter: {
    all: 'All',
    allProducts: 'All products',
    category: 'Category',
    level: 'Level',
    productType: 'Product type',
    source: 'Source',
    rating: 'Rating',
    any: 'Any',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    favorites: 'Favorites',
    hex: 'HEX:',
    reset: 'Reset',
    resetFilters: 'Reset filters',
    activeFilters: 'Active filters',
    anyRating: 'Any',
    rating4: '4+',
    rating3: '3+',
    found: 'Found:',
    skills: 'skills',
    systems: 'systems',
    noResults: 'Nothing found',
    noSystems: 'No systems',
    showing: 'Showing'
  },

  sort: {
    label: 'Sort:',
    nameAsc: 'Name ↑',
    nameDesc: 'Name ↓',
    ratingDesc: 'Rating ↓',
    ratingAsc: 'Rating ↑'
  },

  date: {
    new: 'NEW',
    updated: 'UPDATED',
    created: 'created',
    modified: 'updated'
  },

  card: {
    save: 'Save',
    complexity: {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced'
    },
    tags: 'Tags',
    meta: 'Meta',
    source: 'Source',
    alsoIn: 'Also in:'
  },

  pagination: {
    first: '«',
    prev: '‹',
    next: '›',
    last: '»',
    of: 'of'
  },

  matcher: {
    step1: 'What are you building?',
    step2: 'Which aesthetic?',
    step3: 'Recommended skills',
    step4: 'Design systems',
    step5: 'Export set',
    reason: 'recommended for',
    noSkills: 'No skills',
    noSystems: 'No systems'
  },

  ds: {
    filterPhilosophy: 'Filter by philosophy',
    filterProduct: 'Filter by product type',
    filterRating: 'Rating',
    all: 'All',
    systems: 'systems',
    noSystems: 'No systems',
    noTokens: 'No color tokens',
    selectSystem: 'Select a design system to view tokens',
    preview: 'Preview',
    tokens: 'Design Tokens',
    font: 'Font',
    radius: 'Radius',
    scheme: 'Scheme',
    dark: 'Dark',
    light: 'Light',
    relatedSkills: 'Related skills',
    searchSystems: 'Search design systems...',
    clearFilter: 'Clear HEX filter',
    byCategory: 'By philosophy',
    byProduct: 'By product type',
    byRating: 'By rating'
  },

  philosophies: {
    title: 'Design Philosophies',
    subtitle: '55 aesthetic directions for AI agents. Each philosophy defines a visual language and atmosphere.',
    of: 'of',
    philosophies: 'philosophies',
    all: 'All',
    categories: {
      minimal: 'Minimal & Clean',
      refined: 'Classic & Refined',
      expressive: 'Bold & Colorful',
      raw: 'Edgy & Raw',
      retro: 'Retro & Nostalgic',
      futuristic: 'Futuristic & Tech',
      effects: 'Modern Effects'
    },
    characteristics: 'Key characteristics',
    noSystems: 'No linked systems',
    designSystems: 'Design systems in this philosophy',
    systems: 'design systems'
  },

  process: {
    title: 'UX/UI Process',
    subtitle: 'Complete design-development cycle map: from research to launch. Click a stage to see matching skills.',
    stages: [
      { id: 'research', title: 'Research', desc: 'User research, interviews, competitive analysis' },
      { id: 'analysis', title: 'Analysis', desc: 'CJM, service blueprint, data-driven decisions' },
      { id: 'design', title: 'Design', desc: 'Wireframes, IA, user flows, scenarios' },
      { id: 'visual', title: 'Visual Design', desc: 'Grid, typography, color, components, brand' },
      { id: 'prototype', title: 'Prototyping', desc: 'Interactive prototypes, motion, animation' },
      { id: 'test', title: 'Testing', desc: 'Usability tests, A/B, expert review, accessibility' },
      { id: 'dev', title: 'Development', desc: 'Design-to-code, frontend, responsive layout' },
      { id: 'launch', title: 'Launch', desc: 'Design review, metrics, post-release iterations' }
    ]
  },

  references: {
    title: 'References & Visual Context',
    subtitle: 'Curated references by visual style. Sources: Behance, Dribbble, Awwwards, Tilda Publishing.'
  },

  tools: {
    title: 'Tools',
    contrast: {
      title: 'WCAG Contrast Checker',
      desc: 'Color contrast checker per WCAG 2.2 (AA: 4.5:1, AAA: 7:1)',
      textColor: 'Text color',
      bgColor: 'Background',
      sample: 'Sample text for readability check',
      largeText: 'Large text',
      invalid: 'Enter HEX colors (#RRGGBB)'
    },
    principles: {
      title: 'Design Principles (NN/g)',
      desc: '10 Nielsen Norman Group heuristics + 5 visual design principles',
      list: [
        { n: 'Visibility of Status', d: 'System always informs users about what is happening.' },
        { n: 'Match Real World', d: 'Speak the user language, not system terms.' },
        { n: 'User Control', d: 'Users can undo or redo actions.' },
        { n: 'Consistency', d: 'Same terms, elements, patterns everywhere.' },
        { n: 'Error Prevention', d: 'Prevent errors rather than show messages.' },
        { n: 'Recognition', d: 'Minimize memory load — make elements visible.' },
        { n: 'Flexibility', d: 'Shortcuts for power users without breaking basics.' },
        { n: 'Aesthetic Design', d: 'Minimalist design with no irrelevant info.' },
        { n: 'Error Recovery', d: 'Clear error messages with solutions.' },
        { n: 'Help & Docs', d: 'Easy to find, task-focused documentation.' }
      ]
    },
    gestalt: {
      title: 'Gestalt Principles in UI',
      desc: 'Gestalt psychology principles explaining how people perceive visual compositions',
      list: [
        { n: 'Proximity', d: 'Objects close together are perceived as a group. Use spacing for grouping.' },
        { n: 'Similarity', d: 'Similar elements are perceived as related. Color, shape, size signal group belonging.' },
        { n: 'Figure/Ground', d: 'Perception separates image into object (figure) and background.' },
        { n: 'Closure', d: 'The brain completes incomplete forms. Used in logos and icons.' },
        { n: 'Common Region', d: 'Elements inside a bounded area are perceived as a group. The basis of cards.' },
        { n: 'Continuation', d: 'The eye follows a line even if interrupted. Used in steps, progress bars.' }
      ]
    },
    tokens: {
      title: 'Design Tokens Viewer',
      desc: 'Visualize tokens from any DESIGN.md. Select a system below:',
      searchPlaceholder: 'Search design systems...',
      noTokens: 'No color tokens',
      selectSystem: 'Select a design system to view tokens',
      noSystems: 'No systems found'
    },
    toolsMap: {
      title: 'Design Tools Map',
      desc: 'Categorized reference of real services and tools for UI/UX design',
      categories: {
        color: 'Color',
        typography: 'Typography',
        icons: 'Icons',
        prototyping: 'Prototyping',
        collaboration: 'Collaboration',
        references: 'References'
      }
    }
  },

  about: {
    title: 'DesignX v2',
    desc: 'The largest open catalog of UI/UX design skills and DESIGN.md design systems for AI agents.',
    diff: '<strong>Difference from Open Design:</strong> DesignX is a recommendation catalog, not an artifact generator. We help you understand which skills and design systems your project needs.',
    howToUse: 'How to use',
    steps: [
      'Select product type → DesignX picks skills + design system',
      'Select design philosophy → refine the style',
      'Export set → SKILL.md + DESIGN.md to repo root',
      'AI agent reads files and follows the design system'
    ],
    stats: 'Statistics',
    sources: 'Sources',
    skills: 'skills',
    categories: 'categories',
    designSystems: 'design systems',
    productTypes: 'product types',
    philosophies: 'philosophies',
    tags: 'tags',
    complexity: 'Complexity',
    saved: 'saved'
  },

  detail: {
    close: '✕',
    compare: 'Compare skills',
    description: 'Description',
    tags: 'Tags',
    principles: 'Principles',
    products: 'Products',
    source: 'Source',
    keyPrinciples: 'Key principles',
    suitableFor: 'Suitable for'
  },

  exportBar: {
    selected: 'Selected',
    skills: 'skills',
    systems: 'design systems',
    compare: '⇄ Compare',
    clear: 'Clear',
    export: '📦 Export',
    nothing: 'Selected: 0'
  },

  states: {
    loading: 'Loading catalog...',
    error: 'Error loading catalog',
    errorHint: 'Run',
    errorServe: 'npx serve .',
    nothingFound: 'Nothing found',
    noFavorites: 'Nothing saved yet. Click ★ on a skill to add it.'
  },

};
