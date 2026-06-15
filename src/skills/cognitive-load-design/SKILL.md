# SKILL: Cognitive Load Design

## Source
`javier8a.com, RESOURCES.md §8.3, source 55`

## Purpose
Управление когнитивной нагрузкой в интерфейсах: три типа нагрузки (intrinsic, extraneous, germane), минимизация лишней информации, chunking, progressive disclosure, визуальная иерархия. Проектирование интерфейсов, которые не перегружают рабочую память пользователя.

## Sources (RESOURCES.md)
- John Sweller — Cognitive Load Theory (1988) — основа
- Chandler & Sweller — "Why Some Material is Difficult to Learn" (Cognitive Load Theory)
- Susan Weinschenk — 100 Things Every Designer Needs to Know About People (cognitive limits)
- NN/g — Cognitive load research, working memory, chunking
- Steve Krug — Don't Make Me Think (minimising cognitive effort)
- Steven Skaggs — Simplification in design (source 55)
- Harry Brignull — Dark Patterns (cognitive manipulation)

## When to Use
- Проектирование сложных дашбордов и аналитических панелей
- Формы с большим количеством полей
- Onboarding новых пользователей
- Интерфейсы в high-stress контекстах (medical, aviation, security)
- AI-интерфейсы с большим объёмом выходных данных
- Любой интерфейс, где пользователь обрабатывает много информации

## Behavior

### 1. Cognitive Load Theory (Sweller)

```
     ┌────────────────────────────────────┐
     │       COGNITIVE LOAD               │
     │                                    │
     │  ┌──────────────┐                  │
     │  │  INTRINSIC   │ ← сложность задачи│
     │  │  (native)    │                  │
     │  └──────┬───────┘                  │
     │         │                          │
     │  ┌──────▼───────┐                  │
     │  │  EXTRANEOUS  │ ← плохой дизайн  │
     │  │  (лишняя)    │                  │
     │  └──────┬───────┘                  │
     │         │                          │
     │  ┌──────▼───────┐                  │
     │  │  GERMANE     │ ← полезная       │
     │  │  (полезная)  │   нагрузка       │
     │  └──────────────┘                  │
     └────────────────────────────────────┘
```

#### 1.1 Intrinsic Load
- Присущая сложность самой задачи
- Зависит от: количества элементов, их взаимосвязей, prior knowledge
- **Управление**: разбивка на подзадачи (segmentation), pre-training

#### 1.2 Extraneous Load
- Дополнительная нагрузка от плохо спроектированного интерфейса
- Причины: лишняя информация, запутанная навигация, противоречивые сигналы
- **Управление**: минимизация — главная задача UX-дизайнера

#### 1.3 Germane Load
- Полезная нагрузка — усилия по построению ментальных моделей
- Способствует обучению и пониманию
- **Управление**: примеры, аналогии, scaffolding

### 2. Cognitive Load Heuristics for UI

#### 2.1 Chunking (Magic Number 7±2)
- Miller's Law: working memory holds 7±2 items
- Group related information into chunks
- Use visual hierarchy to create clear chunks
- **Rule**: never present more than 7 items per visual group

#### 2.2 Progressive Disclosure
- Show only what's needed for the current task
- Hide advanced options behind "Show more" / "Advanced"
- Use accordions, tabs, wizards for multi-step processes
- **Rule**: "What can I safely hide right now?"

#### 2.3 Recognition over Recall
- Show options rather than asking users to remember
- Use familiar patterns and conventions
- Provide autocomplete, suggestions, history
- **Rule**: make options visible, not memorable

#### 2.4 Visual Hierarchy
- Guide attention through size, colour, contrast, spacing
- One primary action per screen
- Group related elements visually (proximity)
- Use whitespace to create breathing room

#### 2.5 Consistency
- Consistent patterns reduce cognitive load
- Same terms, same positions, same behaviour
- Users don't need to re-learn each screen

### 3. Reducing Extraneous Load

| Technique | Implementation |
|-----------|---------------|
| Remove clutter | Hide non-essential elements by default |
| Clear navigation | Breadcrumbs, current location indicator |
| Consistent layouts | Same structure across pages |
| Meaningful labels | User vocabulary, not internal jargon |
| Error prevention | Validate input, show constraints upfront |
| Smart defaults | Pre-fill with reasonable values |
| Concise microcopy | Short, direct, task-focused text |
| Loading feedback | Progress bars, skeleton screens |
| Reduce choices | Hick's Law: time increases with choices |

### 4. Cognitive Load Patterns by Component

| Component | Cognitive Load Rule |
|-----------|-------------------|
| Navigation | 5-7 items, consistent location, clear labels |
| Forms | Single column, one thing at a time, inline validation |
| Tables | Sortable columns, sticky header, row hover highlight |
| Dashboards | 3-5 key metrics above the fold, drill-down details |
| Search | Prominent, autocomplete, recent searches, filters |
| Settings | Grouped by category, searchable, undo-friendly |
| Data Entry | Smart defaults, progress indicator, save drafts |
| AI Output | Progressive streaming, confidence indicators, citations |

### 5. Cognitive Walkthrough for Cognitive Load

При проверке интерфейса задай:

1. **Intrinsic**: Можно ли разбить эту задачу на подшаги?
2. **Extraneous**: Что здесь лишнее? Какая информация не нужна сейчас?
3. **Extraneous**: Последовательность действий логична?
4. **Extraneous**: Используются ли знакомые паттерны?
5. **Germane**: Даёт ли интерфейс пользователю понять, как он устроен?
6. **Germane**: Есть ли подсказки и примеры для обучения?
7. **Overall**: Сколько элементов на экране конкурируют за внимание?

### 6. Cognitive Load Anti-Patterns

- ❌ Information dumping — всё сразу на одном экране
- ❌ Ambiguous labels — пользователь гадает, что значит пункт
- ❌ Inconsistent patterns — разные поведения для одного типа элементов
- ❌ Hidden navigation — важные разделы buried в меню
- ❌ Excessive animation — движение отвлекает от задачи
- ❌ Forced reading — пользователь должен прочитать, чтобы понять
- ❌ Too many choices — paradox of choice (Hick's Law violation)

### 7. Взаимосвязь с другими навыками

- **visual-hierarchy**: иерархия как инструмент снижения extraneous load
- **form-design**: минимизация нагрузки в формах
- **navigation-patterns**: навигация и когнитивная нагрузка
- **empty-states**: пустые состояния без лишней информации
- **gestalt-principles**: группировка для chunking
- **data-visualization**: снижение нагрузки при работе с данными
- **edge-cases-resilience**: обработка состояний без перегрузки

## Tags
cognitive-load, sweller, working-memory, mental-models, progressive-disclosure, chunking, millers-law, hicks-law, simplification

## For Product Types
web-app, saas, dashboard, mobile, ecommerce, desktop, ai-product
