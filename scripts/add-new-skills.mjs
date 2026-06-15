import { readFileSync, writeFileSync } from 'fs';

const CATALOG_PATH = 'src/data/catalog.json';
const raw = readFileSync(CATALOG_PATH, 'utf-8');
const catalog = JSON.parse(raw);

const newSkills = [
  {
    id: 'game-ux',
    name: 'Game UX Design',
    source: 'protopie.io',
    category: 'interaction',
    subcategory: 'game-ux',
    tags: ['game-ux', 'gaming', 'video-games', 'interaction', 'feedback', 'onboarding', 'playtest', 'flow', 'hud'],
    complexity: 'intermediate',
    rating: 4,
    summary: 'UX для видеоигр: сигналы и обратная связь, онбординг, accessibility, playtest-циклы, HUD, баланс сложности.',
    description: 'Проектирование пользовательского опыта в видеоиграх: сигналы и обратная связь, онбординг, accessibility, баланс сложности, playtest-циклы. Сочетает общие UX-принципы со спецификой игровой индустрии: flow, награды, progressive difficulty, HUD-дизайн.',
    key_principles: [
      'Signals and feedback create emotional connection with players',
      'Onboarding must be fun and interactive, not instructional',
      'Balance challenge and skill to maintain flow state',
      'Accessibility features benefit all players (subtitles, color-blind, difficulty)',
      'Early prototyping + playtests de-risk game development'
    ],
    for_product_types: ['game', 'web-app', 'mobile', 'desktop'],
    source_short: 'RESOURCES.md'
  },
  {
    id: 'information-architecture',
    name: 'Information Architecture',
    source: 'ux247.com',
    category: 'ux-research',
    subcategory: 'ia',
    tags: ['information-architecture', 'ia', 'navigation', 'content-structure', 'findability', 'card-sorting', 'taxonomy'],
    complexity: 'intermediate',
    rating: 5,
    summary: '8 принципов Dan Brown, системы навигации, labelling, карточная сортировка, tree testing, масштабируемость IA.',
    description: 'Структурирование и организация контента в цифровых продуктах: Dan Brown\'s 8 principles IA, системы навигации, labelling, поиск, карточная сортировка, tree testing. Обеспечивает находимость информации и понятную структуру продукта.',
    key_principles: [
      'Treat content as objects with lifecycle and attributes (Objects)',
      'Create meaningful choices — too many options overwhelm (Choices)',
      'Show only enough to let users decide (Disclosure)',
      'Not all users enter via homepage — design for any entry point (Front Doors)',
      'Design for content growth — IA must scale (Growth)'
    ],
    for_product_types: ['web-app', 'saas', 'ecommerce', 'mobile', 'landing', 'dashboard', 'desktop'],
    source_short: 'RESOURCES.md'
  },
  {
    id: 'emotional-design',
    name: 'Emotional Design',
    source: 'nngroup.com',
    category: 'visual-design',
    subcategory: 'emotional-design',
    tags: ['emotional-design', 'don-norman', 'visceral-behavioral-reflective', 'delight', 'trust', 'brand-identity'],
    complexity: 'intermediate',
    rating: 5,
    summary: 'Три уровня эмоционального дизайна (Norman): visceral, behavioral, reflective. Микровзаимодействия, delight, доверие.',
    description: 'Проектирование эмоционального отклика пользователя через три уровня обработки информации (Don Norman): visceral, behavioral, reflective. Применение эмоционального дизайна в интерфейсах: микровзаимодействия, delight, брендинг через эмоции, построение доверия.',
    key_principles: [
      'Visceral: first impression matters — attractive things work better',
      'Behavioral: core tasks must be effortless and satisfying',
      'Reflective: design for the story users will tell about your product',
      'Micro-interactions should serve function first, delight second',
      'Error states are emotional moments — handle with empathy'
    ],
    for_product_types: ['web-app', 'mobile', 'saas', 'ecommerce', 'landing', 'dashboard', 'game', 'ai-product'],
    source_short: 'RESOURCES.md'
  },
  {
    id: 'cognitive-load-design',
    name: 'Cognitive Load Design',
    source: 'javier8a.com',
    category: 'interaction',
    subcategory: 'cognitive-load',
    tags: ['cognitive-load', 'sweller', 'working-memory', 'progressive-disclosure', 'chunking', 'simplification'],
    complexity: 'advanced',
    rating: 4,
    summary: 'Управление когнитивной нагрузкой: intrinsic/extraneous/germane, chunking, progressive disclosure, визуальная иерархия.',
    description: 'Управление когнитивной нагрузкой в интерфейсах: три типа нагрузки (intrinsic, extraneous, germane), минимизация лишней информации, chunking, progressive disclosure, визуальная иерархия. Проектирование интерфейсов, которые не перегружают рабочую память пользователя.',
    key_principles: [
      'Intrinsic load: break complex tasks into smaller steps',
      'Extraneous load: remove everything that is not essential',
      'Germane load: use examples and analogies to help learning',
      'Chunk information using the 7±2 rule (Miller\'s Law)',
      'Progressive disclosure: show only what is needed now'
    ],
    for_product_types: ['web-app', 'saas', 'dashboard', 'mobile', 'ecommerce', 'desktop', 'ai-product'],
    source_short: 'RESOURCES.md'
  },
  {
    id: 'lean-ux-analytics',
    name: 'Lean UX & Analytics',
    source: 'uxdesign.cc',
    category: 'ux-research',
    subcategory: 'lean',
    tags: ['lean-ux', 'lean-analytics', 'build-measure-learn', 'mvp', 'experimentation', 'metrics'],
    complexity: 'advanced',
    rating: 4,
    summary: 'Lean-методология: Build-Measure-Learn, OMTM, actionable vs vanity metrics, MVP-дизайн, гипотезы.',
    description: 'Lean-методология в UX-дизайне: Build-Measure-Learn цикл, actionable vs vanity metrics, Lean Analytics, MVP-дизайн, метрики для разных стадий продукта. Фокус на проверку гипотез, а не на выпуск фич.',
    key_principles: [
      'Build-Measure-Learn: every feature is an experiment',
      'One Metric That Matters (OMTM) per product stage',
      'Actionable metrics drive decisions; vanity metrics feel good but mislead',
      'MVP is a learning vehicle, not a feature-light product',
      'Outcomes over outputs — impact > shipped features'
    ],
    for_product_types: ['web-app', 'saas', 'mobile', 'ecommerce', 'landing', 'dashboard', 'ai-product'],
    source_short: 'RESOURCES.md'
  },
  {
    id: 'practical-ui-design',
    name: 'Practical UI Design',
    source: 'practical-ui.com',
    category: 'visual-design',
    subcategory: 'ui-design',
    tags: ['practical-ui', 'ui-design', 'design-rules', 'guidelines', 'visual-design', 'layout', 'spacing'],
    complexity: 'beginner',
    rating: 5,
    summary: 'Логически-ориентированный UI-дизайн: цвет, типографика, отступы, композиция, формы, кнопки через правила.',
    description: 'Практический, логически-ориентированный подход к UI-дизайну: система логических правил вместо "чутья". Управление цветом, типографикой, отступами, композицией, формами и кнопками через воспроизводимые принципы. Снижение субъективности в дизайн-решениях.',
    key_principles: [
      'Every design decision must have a logical reason',
      'Use colour sparingly and with purpose — accent for interaction',
      'Consistent spacing system (4px base) removes guesswork',
      'One primary action per screen, everything else is secondary',
      'Whitespace is not wasted — it reduces cognitive load'
    ],
    for_product_types: ['web-app', 'mobile', 'saas', 'landing', 'ecommerce', 'dashboard', 'desktop'],
    source_short: 'RESOURCES.md'
  },
  {
    id: 'psychology-in-design',
    name: 'Psychology in Design',
    source: 'nightingaledesignresearch.com',
    category: 'ux-research',
    subcategory: 'psychology',
    tags: ['psychology', 'cognitive-science', 'behaviour', 'decision-making', 'memory', 'perception', 'mental-models'],
    complexity: 'intermediate',
    rating: 5,
    summary: '100 психологических принципов для дизайна: восприятие, память, решения, мотивация, награды (Weinschenk).',
    description: 'Применение когнитивной и поведенческой психологии в UX-дизайне: как люди видят, читают, запоминают, принимают решения и ошибаются. Основан на книге Susan Weinschenk "100 Things Every Designer Needs to Know About People" и смежных исследованиях.',
    key_principles: [
      'Fitts\'s Law: make important targets larger and closer',
      'Hick\'s Law: decision time increases with choices — limit options',
      'Miller\'s Law: working memory holds 7±2 items — chunk information',
      'Recognition over recall: show options, don\'t require remembering',
      'Variable rewards create engagement — use ethically, avoid addiction'
    ],
    for_product_types: ['web-app', 'mobile', 'saas', 'ecommerce', 'landing', 'dashboard', 'game', 'ai-product'],
    source_short: 'RESOURCES.md'
  }
];

const newDesignSystems = [
  {
    id: 'game-ux-starter',
    name: 'Game UI Starter',
    source: 'protopie.io',
    aesthetic: 'cyberpunk',
    product_types: ['game', 'web-app', 'mobile'],
    description: 'Яркий, иммерсивный дизайн для игровых интерфейсов: глубокие тёмные фоны, неоновые акценты, glow-эффекты, прогресс-бары, XP-индикаторы. HUD-компоненты и иерархия для геймплея.',
    tokens_css: {
      bg: '#0a0a12',
      bg_elevated: '#141420',
      text: '#f0f0f5',
      text_muted: '#7a7a9a',
      border: '#2a2a3e',
      accent: '#ff0044',
      accent2: '#00ffcc',
      success: '#00ff88',
      error: '#ff0044',
      font: 'JetBrains Mono',
      radius: '6px',
      dark: true
    },
    preview_demo: true,
    tags: ['game', 'hud', 'gaming'],
    category: 'cyberpunk',
    source_short: 'RESOURCES.md'
  },
  {
    id: 'information-architecture-starter',
    name: 'IA-Driven Design',
    source: 'ux247.com',
    aesthetic: 'industrial-minimal',
    product_types: ['web-app', 'saas', 'ecommerce', 'mobile', 'dashboard'],
    description: 'Информационно-плотный, структурированный дизайн с чёткой иерархией: breadcrumbs, mega-menu, faceted navigation, clean taxonomy. Приоритет — находимость и сканируемость.',
    tokens_css: {
      bg: '#f8f9fa',
      bg_elevated: '#ffffff',
      text: '#1a1d23',
      text_muted: '#6b7280',
      border: '#d1d5db',
      accent: '#2563eb',
      accent2: '#1e40af',
      success: '#16a34a',
      error: '#dc2626',
      font: 'JetBrains Mono',
      radius: '4px',
      dark: false
    },
    preview_demo: true,
    tags: ['ia', 'navigation', 'content'],
    category: 'industrial-minimal',
    source_short: 'RESOURCES.md'
  },
  {
    id: 'emotional-design-starter',
    name: 'Emotional Design System',
    source: 'nngroup.com',
    aesthetic: 'soft-pastel',
    product_types: ['web-app', 'mobile', 'saas', 'ecommerce', 'landing'],
    description: 'Тёплый, человеко-ориентированный дизайн с акцентом на эмоциональный отклик: плавные микровзаимодействия, персонализация, человечный tone of voice, delight-моменты.',
    tokens_css: {
      bg: '#faf8f5',
      bg_elevated: '#ffffff',
      text: '#2d2a24',
      text_muted: '#8a8580',
      border: '#e5e0db',
      accent: '#e8755a',
      accent2: '#c95a4a',
      success: '#5a9e7a',
      error: '#d9534f',
      font: 'JetBrains Mono',
      radius: '8px',
      dark: false
    },
    preview_demo: true,
    tags: ['emotional', 'warm', 'human'],
    category: 'soft-pastel',
    source_short: 'RESOURCES.md'
  },
  {
    id: 'cognitive-load-starter',
    name: 'Cognitive Load Optimized',
    source: 'javier8a.com',
    aesthetic: 'industrial-minimal',
    product_types: ['web-app', 'saas', 'dashboard', 'mobile', 'desktop'],
    description: 'Минималистичный дизайн с минимальной когнитивной нагрузкой: максимум whitespace, чёткая иерархия, progressive disclosure, никакой лишней информации. Оптимизирован для сложных задач.',
    tokens_css: {
      bg: '#ffffff',
      bg_elevated: '#f5f5f5',
      text: '#111111',
      text_muted: '#6e6e6e',
      border: '#d4d4d4',
      accent: '#0055cc',
      accent2: '#003d99',
      success: '#1a7a3a',
      error: '#cc3333',
      font: 'JetBrains Mono',
      radius: '4px',
      dark: false
    },
    preview_demo: true,
    tags: ['minimal', 'cognitive', 'simple'],
    category: 'industrial-minimal',
    source_short: 'RESOURCES.md'
  },
  {
    id: 'lean-ux-starter',
    name: 'Lean UX MVP Kit',
    source: 'uxdesign.cc',
    aesthetic: 'industrial-minimal',
    product_types: ['web-app', 'saas', 'mobile', 'landing'],
    description: 'Минимальный, функциональный дизайн для быстрого прототипирования и проверки гипотез. Чистая типографика, базовые компоненты, фокус на конверсию и метрики.',
    tokens_css: {
      bg: '#ffffff',
      bg_elevated: '#fafafa',
      text: '#1a1a1a',
      text_muted: '#757575',
      border: '#e0e0e0',
      accent: '#3366ff',
      accent2: '#254eda',
      success: '#2e7d32',
      error: '#d32f2f',
      font: 'JetBrains Mono',
      radius: '4px',
      dark: false
    },
    preview_demo: true,
    tags: ['lean', 'mvp', 'minimal'],
    category: 'industrial-minimal',
    source_short: 'RESOURCES.md'
  },
  {
    id: 'practical-ui-starter',
    name: 'Practical UI System',
    source: 'practical-ui.com',
    aesthetic: 'industrial-minimal',
    product_types: ['web-app', 'mobile', 'saas', 'landing', 'dashboard'],
    description: 'Система логических правил UI-дизайна. Функциональный минимализм: чистые формы, иерархия через размер и вес, осмысленный цвет, согласованные отступы (4px сетка).',
    tokens_css: {
      bg: '#f5f5f5',
      bg_elevated: '#ffffff',
      text: '#161616',
      text_muted: '#6e6e6e',
      border: '#d4d4d4',
      accent: '#3366ff',
      accent2: '#264dcc',
      success: '#1a8a3a',
      error: '#d93025',
      font: 'JetBrains Mono',
      radius: '4px',
      dark: false
    },
    preview_demo: true,
    tags: ['practical', 'rules', 'functional'],
    category: 'industrial-minimal',
    source_short: 'RESOURCES.md'
  },
  {
    id: 'psychology-design-starter',
    name: 'Psychology-Informed Design',
    source: 'nightingaledesignresearch.com',
    aesthetic: 'industrial-minimal',
    product_types: ['web-app', 'mobile', 'saas', 'ecommerce', 'landing'],
    description: 'Дизайн, основанный на когнитивной психологии: оптимальные размеры целей (Fitts), ограничение выбора (Hick), группировка информации (Miller), видимые опции вместо запоминания.',
    tokens_css: {
      bg: '#f2f4f6',
      bg_elevated: '#ffffff',
      text: '#1c1e22',
      text_muted: '#6c727a',
      border: '#d0d4dc',
      accent: '#4263eb',
      accent2: '#364fc7',
      success: '#2f9e44',
      error: '#e03131',
      font: 'JetBrains Mono',
      radius: '4px',
      dark: false
    },
    preview_demo: true,
    tags: ['psychology', 'cognitive', 'scientific'],
    category: 'industrial-minimal',
    source_short: 'RESOURCES.md'
  }
];

// Add skills
const existingIds = new Set(catalog.skills.map(s => s.id));
let addedSkills = 0;
for (const skill of newSkills) {
  if (!existingIds.has(skill.id)) {
    catalog.skills.push(skill);
    addedSkills++;
  }
}

// Add design systems
const existingDsIds = new Set(catalog.design_systems.map(ds => ds.id));
let addedDs = 0;
for (const ds of newDesignSystems) {
  if (!existingDsIds.has(ds.id)) {
    catalog.design_systems.push(ds);
    addedDs++;
  }
}

// Update meta
catalog.meta.total_skills = catalog.skills.length;
catalog.meta.total_design_systems = catalog.design_systems.length;
catalog.meta.skillsTotal = catalog.skills.length;
catalog.meta.lastUpdated = '2026-06-15';

// Write back
writeFileSync(CATALOG_PATH, JSON.stringify(catalog));
console.log(`✅ Added ${addedSkills} new skills (total: ${catalog.skills.length})`);
console.log(`✅ Added ${addedDs} new design systems (total: ${catalog.design_systems.length})`);
