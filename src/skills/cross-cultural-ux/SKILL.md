# SKILL: Cross-Cultural UX

## Source
`designx, RESOURCES.md §3.2`

## Purpose
Глубокий кросс-культурный UX-дизайн: адаптация интерфейсов под культурные кластеры по регионам, культурные модели принятия решений, навигационные и коммуникационные паттерны для разных культур, локализация AI-интерфейсов, интеграция кросс-культурных исследований в дизайн-процесс.

## Sources (RESOURCES.md)
- Geert Hofstede — Cultural Dimensions Theory (6 измерений, country-level scores)
- Edward T. Hall — High/Low Context, Polychronic/Monochronic time, Proxemics (personal space)
- Erin Meyer — The Culture Map: 8 scales (communicating, evaluating, leading, deciding, trusting, disagreeing, scheduling, persuading)
- Aaron Marcus — Cross-Cultural UX research (mobile UX in Asia, Arab world, Africa)
- NN/g — International Usability Studies, cultural differences in web navigation
- Material Design — Internationalization patterns, locale adaptation
- Apple HIG — Cultural adaptation, localization beyond translation
- Figma resource library — global product design, multilingual typography
- Smashing Magazine — designing for international audiences

## When to Use
- Глобальная стратегия продукта для 3+ регионов
- Проектирование AI-интерфейсов для мультикультурной аудитории
- Аудит существующего интерфейса на культурную адекватность
- Разработка style guide для международной команды локализации
- Исследование новых рынков: Азия, Ближний Восток, Африка, LATAM

## Behavior

### 1. Культурные кластеры и их UX-паттерны

#### 1.1 Anglo-Saxon (US, UK, Canada, Australia, NZ)
| Измерение | Значение | UX Impact |
|-----------|----------|-----------|
| PDI | Низкий (35-40) | Flat hierarchy, неформальный тон, direct communication |
| IDV | Высокий (80-91) | Персонализация, личный выбор, achievement badges |
| UAI | Средний (35-46) | Минимальный help-контент, tolerate ambiguity |
| Context | Low | Ясные инструкции, CTA-driven, минимальный декор |
| Время | Monochronic | Sequential flows, дедлайны, progress indicators |

**Паттерны**: чистая типографика, generous whitespace, direct CTAs, minimalist UI, user control, error prevention > error recovery

#### 1.2 Germanic/Nordic (Germany, Netherlands, Scandinavia)
| Измерение | Значение | UX Impact |
|-----------|----------|-----------|
| PDI | Очень низкий (31-38) | Flat, функционально, без статусных элементов |
| IDV | Высокий (65-80) | Фокус на задаче, efficiency |
| UAI | Высокий (53-65) | Детальные инструкции, предсказуемость, точность |
| Context | Low | Точные формулировки, никакого fluff |
| Время | Monochronic | Чёткие сроки, пунктуальность в UI |

**Паттерны**: data-density, точные формулировки, функциональный минимализм, efficiency > delight, чёткая иерархия, никакой ambiguity

#### 1.3 Latin/Mediterranean (France, Italy, Spain, Brazil, LATAM)
| Измерение | Значение | UX Impact |
|-----------|----------|-----------|
| PDI | Высокий (60-80) | Статусные элементы, formal tone для B2B |
| IDV | Средний (30-50) | Социальный контекст, relationships |
| UAI | Высокий (75-85) | Help-контент, reassurance, детали |
| Context | Medium-High | Красочность, эмоциональность, rich visuals |

**Паттерны**: яркие цвета (Brasil), rich visuals, социальные элементы (share, community), эмоциональный контент, анимация, более высокий visual density

#### 1.4 East Asian (Japan, China, Korea)
| Измерение | Значение | UX Impact |
|-----------|----------|-----------|
| PDI | Средний-высокий (55-80) | Иерархия, формальный тон, статус |
| IDV | Низкий (18-30) | Групповая гармония, социальный контекст |
| UAI | Высокий (85-95) | Детальная документация, предсказуемость |
| Context | High | Меньше текста, больше контекста, rich Unicode |
| Время | Polychronic (Japan: mixed) | Multi-tasking UI, dense layouts |

**Паттерны**: высокая информационная плотность, small font sizes, busy layouts, яркие акценты (Китай), пастельные тона (Япония), групповые элементы, социальная гармония, много контента на экране

**Специфика**:
- Япония: вертикальное письмо (rare), кана + кандзи, pastel minimalism
- Китай: красный как удача, QR-культура, super-apps (WeChat), вертикальные списки
- Корея: яркие цвета, advanced typography (Hangul), 모바일-first

#### 1.5 Middle East / Arab World (Saudi, UAE, Egypt, Israel)
| Измерение | Значение | UX Impact |
|-----------|----------|-----------|
| PDI | Высокий (80-95) | Формальный тон, статус, уважение |
| IDV | Низкий (25-38) | Семейные/социальные ценности, коллективизм |
| UAI | Высокий (60-80) | Детали, reassurance, доверие |
| Context | High | Косвенная коммуникация, подтекст |
| Время | Polychronic | Многозадачность, отношения важнее расписания |

**Паттерны**: RTL, скромная визуальная эстетика (особенно изображения людей), богатый орнаментальный дизайн, семейные ценности в контенте, высокая ценность доверия и репутации, детальные confirmation flows

#### 1.6 South Asian (India, Pakistan, Bangladesh)
| Измерение | Значение | UX Impact |
|-----------|----------|-----------|
| PDI | Высокий (77+) | Иерархия, формальный тон для B2B, статус |
| IDV | Низкий (38-48) | Семья, сообщество, групповые решения |
| UAI | Средний (40-60) | Баланс инструкций и flexibility |
| Context | High | Непрямая коммуникация, rich visuals |
| Время | Polychronic | Flexibility в flows, многозадачность |

**Паттерны**: яркие цвета (India), высокая информационная плотность, многоязычность (хинди + английский + региональные), социальные элементы, mobile-first (Jio-экономика), offline-first (low connectivity)

### 2. Cross-Cultural UX Patterns by Component

#### 2.1 Navigation
| Регион | Паттерн | Почему |
|--------|---------|--------|
| US/EU | Simple top nav, burger menu | Direct, task-focused |
| China | Complex nested nav, много ссылок | High information density, busy layouts |
| Japan | Меню с категориями и подкатегориями | Detail-oriented, high UAI |
| Arab | Sidebar справа, RTL-зеркалирование | RTL, high PDI — status elements |
| India | Многоуровневое меню, видимые категории | High context, variety of user segments |

#### 2.2 Forms & Data Entry
| Регион | Паттерн |
|--------|---------|
| US | Minimal fields, social login |
| Germany | Много полей, детальная валидация, точность |
| China | WeChat/QR login, минимум полей |
| Japan | Имя: фамилия + имя + honorific (さん/様) |
| Arab | Многочастные имена, адаптация под RTL |
| India | Mobile-first, OTP-логин, многочисленные варианты имён |

#### 2.3 Color & Visual Style
| Регион | Палитра | Эстетика |
|--------|---------|----------|
| US/EU | Сдержанная, айтемная | Minimalist, функциональная |
| China | Красный + золотой | Rich, праздничная (для ecommerce) |
| Japan | Пастельная, приглушённая | Wabi-sabi, минимализм |
| Korea | Яркая, градиентная | Playful, advanced |
| Arab | Deep blues, gold, green | Орнаментальная, RTL |
| India | Яркая, насыщенная | Colourful, festive |

### 3. Культурная адаптация AI-интерфейсов

#### 3.1 AI Voice & Chat
| Культура | AI Persona | Тон |
|----------|------------|-----|
| US | Helpful assistant, informal | «Sure! Let me help you with that» |
| Germany | Expert, precise, formal | «Ich kann Ihnen dabei helfen» |
| Japan | Humble, polite, indirect | 「お手伝いさせていただきます」 |
| China | Helpful, hierarchical | 「让我来帮您」 |
| Arab | Warm, respectful, relationship-first | «يسعدني مساعدتك» |
| India | Polite, somewhat formal, helpful | «Kripya sahayata len» |

#### 3.2 AI Decision-Making Transparency
- Запад (low PDI): подробные объяснения, пользователь — партнёр
- Азия (high PDI): краткие объяснения, AI — авторитет
- Arab world: доверие через personal connection, именные обращения

#### 3.3 Error Messages & Recovery
- High-context (Japan, Arab): более косвенные, смягчающие формулировки
- Low-context (Germany, US): прямые, action-oriented
- High-uncertainty-avoidance (Germany, Japan): детальные инструкции по исправлению

### 4. Cross-Cultural UX Research

#### 4.1 Методы по регионам
| Метод | West | East Asia | Middle East | India |
|-------|------|-----------|-------------|-------|
| Usability testing | + | + (group pref.) | + (same gender) | + (English ok) |
| Surveys | + | + (avoid scales) | + (face-saving) | + (1-5 preferred) |
| Interviews | + | + (hierarchical) | + (build trust) | + (small talk) |
| Card sorting | + | + | + (RTL adapt) | + |
| Focus groups | + | + (same status) | + (gender-separate) | + (hierarchy) |

**Ключевые адаптации**:
- Avoid Likert scales in East Asia (культурная склонность к средним значениям, centrality bias)
- Face-saving culture: indirect feedback, избегай прямой критики
- Gender-sensitive: в некоторых культурах male-female interaction ограничено
- Hierarchy: младшие не критикуют старших в групповых сессиях

#### 4.2 Региональные UX-метрики
- China: DAU/MAU, share rate, time in app (> US avg)
- Japan: completion rate, satisfaction score, low complaint rate
- India: offline usage, data efficiency, shareability
- Arab world: trust metrics, repeat visits, social shares

### 5. Global Design System Adaptation

#### 5.1 Token-уровень
```css
:root {
  --direction: ltr;
  --font-primary: 'JetBrains Mono', sans-serif;
  --text-align: start;
  --nav-order: 1; /* sidebar: 1 LTR, 2 RTL */
}

[dir="rtl"] {
  --direction: rtl;
  --text-align: end;
  --nav-order: 2;
}
```

#### 5.2 Компонент-уровень
- Кнопки: min-width учитывает text expansion (+30%)
- Forms: labels position меняется под регион (top — универсально)
- Date picker: locale-aware week start, format, calendar type
- Navigation: position, ordering, hierarchy per cluster

#### 5.3 Контент-уровень
- Tone matrix per region (см. RESOURCES.md §3.3)
- Image bank: culturally appropriate visuals per region
- Icon set: avoid culturally sensitive symbols (thumbs up, animals, hand gestures)
- Color palette: локальные ассоциации, исключение конфликтных сочетаний

### 6. Взаимосвязь с другими навыками

- **localization-i18n**: техническая локализация, RTL, форматы
- **ux-writing-content-strategy**: мультиязычный tone of voice
- **typography-readability**: нелатинские шрифты, CJK-типографика
- **color-psychology**: культурные ассоциации цвета
- **icon-design**: культурная безопасность иконок
- **ethical-ux-framework**: культурная чувствительность как этика
- **consent-privacy-design**: локальные законы о данных
- **ethnographic-research**: полевые исследования в разных культурах

## Tags
cross-cultural, culture, hofstede, hall, global, international, regional, asia, middle-east, latin-america, cultural-adaptation

## For Product Types
web-app, mobile, saas, ecommerce, landing, dashboard, ai-chat