# SKILL: Design Knowledge Architecture

## Source
`designx, RESOURCES.md §5.2-5.3`

## Purpose
Структурированное представление UX-знаний для ИИ-агента: онтология компонентов, паттернов и принципов; knowledge graph; метаданные; табличное представление как «стыковочная поверхность»; JSON/YAML-схемы для машинного чтения.

## Sources (RESOURCES.md)
- DesignOps Handbook — structured knowledge, metadata standards
- W3C DTCG — Design token specification
- Storybook CSF — Component Story Format (structured component metadata)
- Schema.org — semantic metadata patterns
- Wikipedia — Ontology engineering, knowledge graphs
- Alla Kholmatova — Design Systems (component taxonomy)
- NN/g — Information architecture principles (для knowledge IA)

## When to Use
- Построение базы знаний UX для ИИ-агента
- Создание machine-readable документации дизайн-системы
- Разработка онтологии компонентов, паттернов и принципов
- Интеграция знаний между дизайн-системами, тулами и ИИ
- Формирование «стыковочной поверхности» между человеком и агентом

## Behavior

### 1. Онтология UX-знаний (3 уровня)

```
┌─────────────────────────────────────────────────────┐
│                    PRINCIPLES                        │
│  Абстрактные универсальные правила                   │
│  ├── Heuristics (Nielsen 10)                        │
│  ├── Laws (Fitts, Hick, Miller, Jakob)              │
│  ├── Cognitive (Mental models, Affordances)         │
│  └── Ethical (Integrity, Transparency, Privacy)     │
├─────────────────────────────────────────────────────┤
│                    PATTERNS                          │
│  Типовые решения для повторяющихся задач             │
│  ├── Navigation (Tab bar, Breadcrumb, Mega-menu)    │
│  ├── Input (Form, Search, Filter, Auth)             │
│  ├── Feedback (Toast, Modal, Error, Empty state)    │
│  ├── Content (Card, List, Table, Gallery)           │
│  └── Flow (Onboarding, Checkout, Sign-up)           │
├─────────────────────────────────────────────────────┤
│                   COMPONENTS                         │
│  Конкретные UI-элементы                              │
│  ├── Actions (Button, Link, Icon button, FAB)       │
│  ├── Input (Input, Select, Checkbox, Radio, Toggle) │
│  ├── Display (Card, Avatar, Badge, Tag, Tooltip)    │
│  ├── Navigation (Tab, Breadcrumb, Pagination)       │
│  └── Feedback (Toast, Modal, Progress, Spinner)     │
└─────────────────────────────────────────────────────┘
```

### 2. Structured Metadata Schema

#### 2.1 JSON Schema для компонента
```json
{
  "$schema": "designx-component-v1",
  "id": "string (kebab-case, unique)",
  "name": "string (human readable)",
  "category": "string (actions | input | display | navigation | feedback)",
  "purpose": "string (one sentence, why exists)",
  
  "anatomy": ["string (parts of component)"],
  
  "variants": ["string (primary, secondary, ghost, ...)"],
  
  "states": [
    {
      "name": "string (default | hover | active | focus | disabled | loading | error)",
      "description": "string",
      "tokens": {"bg": "string", "text": "string", "border": "string"}
    }
  ],
  
  "tokens": {
    "bg": "CSS variable or hex",
    "text": "CSS variable or hex", 
    "border": "CSS variable or hex",
    "radius": "string",
    "font_size": "string",
    "padding": "string"
  },
  
  "constraints": {
    "min_width": "string",
    "max_width": "string", 
    "height": "string"
  },
  
  "text_rules": {
    "max_length": "number",
    "case": "string (sentence | title | uppercase)",
    "no_placeholder": "boolean"
  },
  
  "accessibility": {
    "contrast_ratio": "string (4.5:1)",
    "focus_ring": "string (2px offset)",
    "aria_role": "string",
    "keyboard_interaction": "string"
  },
  
  "usage": {
    "do": ["string (правильные сценарии)"],
    "dont": ["string (неправильные сценарии)"]
  },
  
  "related_components": ["string (ids)"],
  "related_patterns": ["string (ids)"],
  "related_principles": ["string (ids)"]
}
```

#### 2.2 JSON Schema для паттерна
```json
{
  "$schema": "designx-pattern-v1",
  "id": "string (kebab-case)",
  "name": "string",
  "purpose": "string",
  
  "components": ["string (component ids)"],
  
  "flow": ["string (step-by-step description)"],
  
  "states": ["string (empty, filling, error, success, ...)"],
  
  "principles_applied": ["string (principle ids)"],
  
  "text_guidelines": ["string"],
  
  "adaptation": {
    "responsive": "string",
    "rtl": "string",
    "locale": "string"
  },
  
  "examples": {
    "good": ["string (URLs or descriptions)"],
    "bad": ["string (URLs or descriptions)"]
  }
}
```

#### 2.3 JSON Schema для принципа
```json
{
  "$schema": "designx-principle-v1",
  "id": "string (kebab-case)",
  "name": "string",
  "source": "string (book, author, heuristic set)",
  
  "statement": "string (core formulation)",
  
  "category": "string (heuristic | law | cognitive | ethical)",
  
  "examples": {
    "good": ["string"],
    "bad": ["string"]
  },
  
  "related_patterns": ["string (pattern ids)"],
  "related_components": ["string (component ids)"],
  
  "evidence": "string (research / study backing this principle)",
  "severity": "string (must | should | nice-to-have)"
}
```

### 3. Knowledge Graph: связи между сущностями

```
[Principle] ----(realizes)----> [Pattern]
[Pattern]  ----(composes)----> [Component]
[Component] ----(uses)--------> [Token]
[Pattern]  ----(applies)------> [Principle]
[Component] ----(has_state)--> [State]
[Pattern]  ----(adapts_to)----> [Locale/Platform]
[Skill]    ----(teaches)------> [Pattern]
[Skill]    ----(teaches)------> [Principle]
[Skill]    ----(guides)-------> [Component]
```

**Пример графа для «Button»**:
```
Button
  ├── uses → bg, text, border, radius tokens
  ├── has_state → default, hover, active, focus, disabled, loading
  ├── part_of → Form, Dialog, Card (patterns)
  ├── related_to → Link, IconButton (components)
  └── applies → Visibility, Consistency, Affordance (principles)
```

### 4. Табличное представление («стыковочная поверхность»)

#### 4.1 Почему таблицы для ИИ-агента
- Строка → сущность
- Столбец → атрибут/поле
- Таблица → коллекция сущностей одного типа
- Join между таблицами → связи (knowledge graph)
- Фильтр/сортировка → выборка по критериям

#### 4.2 Пример: таблица компонентов

| id | name | category | states | tokens | variants | complexity |
|----|------|----------|--------|--------|----------|------------|
| button | Button | actions | 6 | 8 vars | 5 | beginner |
| input | Input Field | input | 5 | 6 vars | 3 | beginner |
| card | Card | display | 3 | 4 vars | 2 | beginner |
| modal | Modal Dialog | feedback | 4 | 8 vars | 2 | advanced |
| form | Form | input | 7 | — | 1 | advanced |

#### 4.3 Пример: таблица принципов

| id | name | category | severity | related_patterns |
|----|------|----------|----------|------------------|
| visibility | Visibility of System Status | heuristic | must | loading, progress, confirmation |
| error-prevention | Error Prevention | heuristic | must | form-validation, confirmation |
| consistency | Consistency & Standards | heuristic | should | design-system, component-library |
| autonomy | User Autonomy | ethical | must | consent, opt-out, undo |

### 5. Integration Patterns для ИИ-агента

#### 5.1 Как агент использует structured knowledge
1. **Query**: по id / tags / category получает спецификацию
2. **Generate**: заполняет шаблон под контекст задачи
3. **Validate**: проверяет соответствие schema
4. **Link**: устанавливает связи между сущностями
5. **Export**: выдаёт в нужном формате (JSON/YAML/Markdown/HTML)

#### 5.2 Output-форматы
| Формат | Когда | Пример |
|--------|-------|--------|
| JSON | Machine-readable, API, CI/CD | Component spec |
| YAML | Config-as-code, design tokens | Token definitions |
| Markdown | Human-readable docs, DESIGN.md | Component documentation |
| HTML | Storybook, Zeroheight | Interactive component docs |
| CSV/TSV | Таблицы, анализ | Catalog export |

### 6. Взаимосвязь с другими навыками

- **design-ops**: общий DesignOps фреймворк
- **design-documentation**: шаблоны документации
- **design-system-architect**: DS архитектура и токены
- **component-naming-standards**: BEM-таксономия
- **design-tokens**: DTCG spec, token hierarchy
- **storybook**: CSF format, component metadata
- **design-handoff-communication**: structured handoff specs

## Tags
knowledge-architecture, ontology, metadata, structured-knowledge, knowledge-graph, schema, taxonomy

## For Product Types
web-app, saas, mobile, dashboard, desktop