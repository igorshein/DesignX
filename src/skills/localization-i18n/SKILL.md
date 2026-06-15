# SKILL: Localization & Internationalization (i18n) UX

## Source
`designer-skills, RESOURCES.md §3`

## Purpose
Глубокая локализация интерфейсов: культурные измерения Хофстеде и Холла, RTL/LTR-дизайн, текстовая экспансия, кросс-культурные ассоциации цвета и символов, локализация контента, региональные форматы, UX-копирайтинг для разных языков.

## Sources (RESOURCES.md)
- Geert Hofstede — Cultural Dimensions Theory (Power Distance, Individualism, Uncertainty Avoidance, Masculinity, Long-Term Orientation, Indulgence)
- Edward T. Hall — High-Context vs Low-Context cultures, Monochronic vs Polychronic time
- Material Design — i18n guidelines, RTL mirroring, locale adaptation
- Apple HIG — Internationalization, RTL support, localization best practices
- W3C — Internationalization (i18n) standards: language tags, locale-aware formatting
- Figma resource library — typography and design for global products
- Smashing Magazine — cross-cultural UX design patterns
- Nielsen Norman Group — international usability, cultural differences in UX

## When to Use
- Проектирование интерфейсов для международных рынков
- Адаптация существующего продукта под новый регион
- Создание RTL-версии интерфейса (арабский, иврит, урду, фарси)
- Локализация контента, копирайтинга и маркетинговых материалов
- AI-продукты: мультиязычные чат-боты, глобальные рекомендательные системы

## Behavior

### 1. Культурные модели для UX

#### 1.1 Hofstede — 6 культурных измерений

| Измерение | Описание | Влияние на UX |
|-----------|----------|---------------|
| Power Distance (PDI) | Отношение к иерархии и авторитету | Высокий PDI: формальный тон, чёткие роли, статусные индикаторы. Низкий PDI:平等的, неформальный тон, flat hierarchy |
| Individualism (IDV) | Я vs Мы | Высокий IDV: персонализация, достижения, личный выбор. Низкий IDV: групповые цели, социальный контекст, harmony |
| Uncertainty Avoidance (UAI) | Отношение к неопределённости | Высокий UAI: детальные инструкции, help-контент, предсказуемость. Низкий UAI: минимализм, эксперименты, tolerate ambiguity |
| Masculinity (MAS) | Конкуренция vs забота | Высокий MAS: соревновательность, success-элементы. Низкий: collaboration, баланс, поддержка |
| Long-Term Orientation (LTO) | Традиция vs прагматизм | Высокий LTO: долгосрочные цели, детали истории. Низкий: быстрые результаты, now-фокус |
| Indulgence (IVR) | Удовольствие vs сдержанность | Высокий IVR: яркие цвета, playful UI. Низкий: сдержанный минимализм, функциональность |

#### 1.2 Hall — Контекст и время

| Аспект | High-Context | Low-Context |
|--------|-------------|-------------|
| Коммуникация | Косвенная, подтекст, намёки | Прямая, явная, чёткая |
| Примеры культур | Япония, Китай, арабские страны | Германия, скандинавские страны, США |
| UX | Меньше текста, больше контекста, rich visuals | Чёткие инструкции, много объяснений |
| Время (Hall) | Polychronic: многозадачность, отношения > расписание | Monochronic: последовательность, дедлайны > отношения |
| UX impact | Неблокирующие уведомления, параллельные потоки | Sequential flows, чёткие прогресс-индикаторы |

### 2. RTL (Right-to-Left) Design

#### 2.1 Языки с RTL
- **Арабский** (22 страны, ~420M носителей)
- **Иврит** (Израиль, ~9M)
- **Урду** (Пакистан, ~70M)
- **Фарси** (Иран, ~110M)
- **Курдский** (Sorani)

#### 2.2 RTL-зеркалирование: что меняется
| Элемент | LTR | RTL |
|---------|-----|-----|
| Текст | Left-aligned | Right-aligned |
| Навигация | Слева направо | Справа налево |
| Back arrow | ← слева | → справа |
| Progress bar | → | ← |
| Checkbox/Radio | Слева от label | Справа от label |
| Card/Image | Слева, текст справа | Справа, текст слева |
| Form labels | Слева от инпута | Справа от инпута |
| Timeline | Слева → вправо | Справа → влево |
| Icons с направлением | →, ← | ←, → |

#### 2.3 RTL-чеклист
- [ ] Text alignment: body RTL, numbers/emails LTR сохраняют направление
- [ ] Navigation: sidebar — справа, hamburger — справа
- [ ] Icons: переворачивать directional icons (arrow, chevron, play/pause, progress)
- [ ] Forms: label + input зеркалируются, error messages — RTL
- [ ] Grid/Flexbox: order и direction зеркалируются
- [ ] Time: арабские цифры используются в арабском, Hebrew digits — в иврите
- [ ] Date: разные форматы (арабский: هـ / иврит: תאריך עברי)
- [ ] Font: поддержка Arabic script или Hebrew script, не только Latin
- [ ] Testing: проверять все экраны в RTL, не только main flow
- [ ] CSS: логические свойства (inset-inline-start вместо left)

#### 2.4 CSS Logical Properties
```css
/* Вместо left/right */
margin-inline-start: 16px;  /* left в LTR, right в RTL */
padding-inline-end: 8px;     /* right в LTR, left в RTL */
border-inline-start: 2px solid #4da3ff;

/* Вместо text-align: left/right */
text-align: start;  /* left в LTR, right в RTL */
text-align: end;    /* right в LTR, left в RTL */
```

### 3. Локализация текста и контента

#### 3.1 Текстовая экспансия
| Язык | Экспансия (+%) | Пример (English →) |
|------|---------------|---------------------|
| Немецкий | +30-40% | «Confirm» → «Bestätigen» (10 символов) |
| Русский | +20-30% | «Settings» → «Настройки» (10 символов) |
| Французский | +15-25% | «Save» → «Enregistrer» (11 символов) |
| Испанский | +15-25% | «Delete» → «Eliminar» (8 символов) |
| Арабский | +20-35% | «Search» → «بحث» (меньше, но шире glyphs) |
| Японский | +10-20% | «Log in» → 「ログイン」(3 символа в ширину) |
| Китайский | +0-15% | «Download» → 「下载」(2 символа) |
| Корейский | +10-15% | «Cancel» → «취소» (2 символа, wider spacing) |

**Правило**: резервируй +30% ширины для UI-компонентов с текстом (кнопки, labels, banners)

#### 3.2 Форматы по регионам
| Регион | Дата | Время | Числа | Валюта |
|--------|------|-------|-------|--------|
| US | MM/DD/YYYY | 12h (3:00 PM) | 1,234.56 | $1,234.56 |
| EU (DE) | DD.MM.YYYY | 24h (15:00) | 1.234,56 | 1.234,56 € |
| UK | DD/MM/YYYY | 24h (15:00) | 1,234.56 | £1,234.56 |
| Russia | DD.MM.YYYY | 24h (15:00) | 1 234,56 | 1 234,56 ₽ |
| Japan | YYYY/MM/DD | 24h (15:00) | 1,234 | ¥1,234 |
| Saudi Arabia | DD/MM/YYYY | 12h هـ | 1,234.56 | SAR 1,234.56 |
| Israel | DD.MM.YYYY | 24h | 1,234.56 | ₪1,234.56 |

#### 3.3 Культурная чувствительность

**Цвет**:
| Цвет | Запад | Китай | Япония | Индия | Ближний Восток |
|------|-------|-------|--------|-------|----------------|
| Красный | Опасность, любовь | Удача, процветание | Опасность, страсть | Свадьба, purity | Осторожно |
| Белый | Чистота, невинность | Смерть, траур | Смерть, траур | Мир, чистота | Саудаде |
| Зелёный | Природа, экология | Рост, гармония | Природа, молодость | Ислам, святость | Ислам, святость |
| Фиолетовый | Роскошь, креатив | Смерть (Китай) | Буддизм, элегантность | Печаль | Скрытность |
| Чёрный | Смерть, элегантность | Власть, знание | Мистерия, возраст | Зло, негатив | Trauer |

**Символы и иконки**:
- 👍 (Thumbs up): позитивно в западных странах — оскорбительно на Ближнем Востоке
- 👌 (OK): США — OK, Бразилия — оскорбление, Япония — деньги
- 🐍 (Snake): Запад — опасность, Китай — мудрость
- 🦉 (Owl): Запад — мудрость, Индия — глупость, Китай — плохая удача
- Жест Victory ✌️: США — победа, Великобритания — оскорбление (обратная сторона)
- Собака 🐕: Запад — питомец, Ближний Восток — нечисто

**Изображения людей**:
- Запад: разнообразие, индивидуализм
- Ближний Восток: скромная одежда, семейные ценности
- Азия: групповая гармония, избегать прямого eye contact в некоторых культурах
- Индия: иерархия, разнообразие религиозных символов

**Тон коммуникации**:
| Культура | Тон | Пример |
|----------|-----|--------|
| США / скандинавские | Прямой, неформальный | «Hey, let's go!» |
| Германия | Прямой, формальный | «Bitte bestätigen Sie» |
| Япония | Косвенный, вежливый | 「お手数ですが、ご確認ください」 |
| Арабские страны | Тёплый, многословный | «من فضلك، نرجو التأكيد» |
| Россия | Формальный, особенно B2B | «Пожалуйста, подтвердите» |

### 4. Локализация UI-компонентов

#### 4.1 Date/Time picker
- Календарная неделя: US — Sunday, EU — Monday, Israel — Sunday, Saudi — Sunday
- Формат даты: локальный (см. таблицу выше)
- Первый день недели: Monday (EU/Russia), Sunday (US), Saturday (Middle East)

#### 4.2 Address form
- US: Street, City, State, ZIP
- UK: House number, Street, City, Postcode
- Japan: Postal code, Prefecture, City, District, Building
- Russia: Postal code, Region, City, Street, Building, Apartment
- Saudi Arabia: Building, Street, District, City, Postal code

#### 4.3 Phone number input
- Формат: +N (N) NNN-NNNN (вариации)
- Флаг страны в начале
- Маска ввода под локальный формат
- Максимальная длина варьируется (ITU-T E.164)

#### 4.4 Name fields
- Запад: First Name / Last Name
- Азия: Family Name / Given Name (Япония, Китай, Корея)
- Арабские страны: Given / Father / Grandfather / Family (многочастные)
- Индия: Given / Family / Caste-sensitive (avoid caste assumptions)
- Бразилия: First / Last + middle names common

#### 4.5 Currency display
- Позиция символа: $10 (US), 10€ (EU), 10₽ (Russia), ¥10 (Japan), ١٠ ﷼ (Saudi)
- Десятичный разделитель: . (US/UK) vs , (EU/Russia)
- Тысячный разделитель: , (US) vs . (EU) vs space (France/Russia) vs none (Japan)

### 5. Взаимосвязь с другими навыками

- **cross-cultural-ux**: глубокие культурные паттерны (надстройка)
- **ux-writing-content-strategy**: мультиязычный копирайтинг, tone of voice per locale
- **typography-readability**: поддержка нелатинских шрифтов
- **design-tokens**: locale-aware tokens (direction, spacing, font-family)
- **ethical-ux-framework**: культурная чувствительность как этическое требование
- **consent-privacy-design**: региональные законы (GDPR vs CCPA vs PIPEDA)

## Tags
localization, i18n, rtl, cultural, adaptation, hofstede, hall, cross-cultural, internationalization, l10n

## For Product Types
web-app, mobile, saas, ecommerce, landing, dashboard
