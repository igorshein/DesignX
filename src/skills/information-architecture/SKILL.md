# SKILL: Information Architecture

## Source
`ux247.com, RESOURCES.md §3.2, source 25`

## Purpose
Структурирование и организация контента в цифровых продуктах: Dan Brown's 8 principles IA, системы навигации, labelling, поиск, карточная сортировка, tree testing. Обеспечивает находимость информации и понятную структуру продукта.

## Sources (RESOURCES.md)
- Dan Brown — 8 Principles of Information Architecture (objects, choices, disclosure, exemplars, front doors, multiple classification, focused navigation, growth)
- Louis Rosenfeld, Peter Morville — Information Architecture for the World Wide Web (4th ed, "Polar Bear" book)
- NN/g — Information Architecture research, navigation patterns, findability
- Abby Covert — How to Make Sense of Any Mess
- Donna Spencer — Card Sorting, A Practical Guide
- UX247 — The 8 Principles of Information Architecture (source 25)

## When to Use
- Создание нового сайта/приложения — определение структуры
- Редизайн существующего продукта — аудит IA
- Проектирование сложных систем с большим объёмом контента
- Организация контента в дизайн-системах и базах знаний
- eCommerce, SaaS, intranet, documentation portals

## Behavior

### 1. Dan Brown's 8 Principles of IA

#### 1.1 Principle of Objects
Content — living thing with lifecycle, behaviours, attributes.
- Treat content as objects with types, states, and relationships
- Define content types before building structure
- Consider each object's lifecycle: create → publish → update → archive

#### 1.2 Principle of Choices
Create meaningful choices; too many options overwhelm.
- Limit navigation options per level (7±2 rule, Miller's Law)
- Focus choices on current task context
- Progressive disclosure: reveal complexity gradually
- Avoid "paradox of choice" — paralysis from too many options

#### 1.3 Principle of Disclosure
Show only enough to let users decide if they want to go deeper.
- Preview content before requiring commitment to click
- Use excerpts, summaries, thumbnails
- "Show, don't tell" with exemplars

#### 1.4 Principle of Exemplars
Show examples of category content when labels are abstract.
- Use images/icons as content previews
- Show representative items under category headings
- Especially useful for abstract or unfamiliar categories

#### 1.5 Principle of Front Doors
Not all users enter via homepage — design for any entry point.
- Every page should provide navigation context
- Include breadcrumbs, site maps, search on every page
- Landing pages need orientation cues

#### 1.6 Principle of Multiple Classification
Offer multiple ways to find content (search, browse, filter).
- Search for known-item seeking
- Browse/categories for exploration
- Filters for narrowing results
- Faceted navigation for complex content

#### 1.7 Principle of Focused Navigation
Keep navigation consistent and focused; don't mix categories.
- Each navigation system serves one purpose
- Don't mix product types with functional items
- Consistent labelling across all navigation points

#### 1.8 Principle of Growth
Content grows — design IA that scales.
- Plan for 2x-3x content growth
- Create flexible taxonomies (not rigid, date-specific)
- Design for organic addition without restructuring

### 2. IA Design Process

| Step | Activity | Methods |
|------|----------|---------|
| 1. Define Goals | Business + user goals alignment | Stakeholder interviews, analytics |
| 2. Content Audit | Inventory existing content | Spreadsheet audit, content mapping |
| 3. Organise | Categorise and structure | Card sorting (open/closed) |
| 4. Label | Create clear, consistent labels | Labelling exercises, preference tests |
| 5. Navigate | Design navigation systems | Tree testing, first-click tests |
| 6. Search | Design search experience | Search analytics, query review |
| 7. Test & Iterate | Validate IA with users | Tree testing, usability testing |

### 3. Navigation Systems

#### 3.1 Global Navigation
- **Top nav**: primary categories (5-7 max)
- **Sidebar**: deep hierarchy, categories + subcategories
- **Mega menu**: rich preview of sub-sections
- **Hamburger menu**: mobile, space-saving

#### 3.2 Local Navigation
- Breadcrumbs: show current location and path
- Sub-navigation: secondary options within section
- Related links: cross-references between content

#### 3.3 Supplementary Navigation
- Site map: full content tree
- Index: alphabetical listing
- Search: query-based access
- Footer: secondary links, legal, about

### 4. IA Research Methods

| Method | When | What It Tests |
|--------|------|---------------|
| Open Card Sort | Early IA design | How users naturally group content |
| Closed Card Sort | Validating categories | Whether categories make sense |
| Tree Testing | Navigation validation | Whether users can find items |
| First-Click Test | Navigation efficiency | Where users click first |
| Content Inventory | Audit existing content | What content exists, gaps, duplicates |

### 5. IA Heuristics for UX Review

- [ ] Every page answers "Where am I? What can I do here? Where can I go?"
- [ ] Navigation labels match user vocabulary (not internal jargon)
- [ ] No more than 7±2 items per navigation level
- [ ] Primary task paths require 3 clicks or fewer
- [ ] Search is available from every page
- [ ] Breadcrumbs visible on deep pages
- [ ] Footer contains secondary navigation
- [ ] Content is categorised, not dumped in one section
- [ ] Each content type has consistent fields and behaviour
- [ ] IA scales for future content growth

### 6. Взаимосвязь с другими навыками

- **navigation-patterns**: конкретные паттерны навигации
- **search-filter**: поиск и фильтрация как часть IA
- **card-sorting**: метод исследования IA
- **tree-testing**: метод валидации IA
- **cognitive-mapping**: ментальные модели и навигация
- **ux-writing-content-strategy**: labelling и микро-копирайтинг
- **service-blueprinting**: IA в контексте сервис-дизайна

## Tags
information-architecture, ia, navigation, content-structure, findability, card-sorting, tree-testing, taxonomy

## For Product Types
web-app, saas, ecommerce, mobile, landing, dashboard, desktop
