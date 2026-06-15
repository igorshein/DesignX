# SKILL: Practical UI Design

## Source
`practical-ui.com, RESOURCES.md §9.4, source 12`

## Purpose
Практический, логически-ориентированный подход к UI-дизайну: система логических правил вместо "чутья". Управление цветом, типографикой, отступами, композицией, формами и кнопками через воспроизводимые принципы. Снижение субъективности в дизайн-решениях.

## Sources (RESOURCES.md)
- Adham Dannaway — Practical UI (practical-ui.com, source 12) — 100+ guidelines with rationale
- Steve Krug — Don't Make Me Think (usability fundamentals)
- Adam Wathan & Steve Schoger — Refactoring UI (visual design rules)
- NN/g — Visual design principles, UI design guidelines
- Material Design 3 — Layout, spacing, typography system

## When to Use
- Повседневная UI-дизайн работа: макеты, финальные экраны
- Обучение джуниоров: система объяснимых правил
- Code review дизайн-решений: объективная оценка
- Проектирование форм, кнопок, таблиц, карточек
- Создание и поддержка дизайн-систем

## Behavior

### 1. Design as a System of Rules

UI design — не магия и не "хороший вкус", а система логических правил:

- Each element should have a reason for its placement, size, colour
- If you can't explain WHY a design decision works — it needs more thought
- Good UI is measurable: alignment, contrast, spacing, hierarchy

### 2. Colour Principles

#### 2.1 Use Colour Sparingly
- One primary accent colour + one neutral grey
- Accent for interactive elements only (links, buttons, active states)
- Neutrals for everything else (text, backgrounds, borders)

#### 2.2 Colour with Purpose
- Colour = meaning, not decoration
- Blue = interactive (links, CTAs)
- Green = success, confirmation
- Red = error, danger, destructive action
- Grey = disabled, inactive, secondary

#### 2.3 Contrast Hierarchy
- Text on coloured backgrounds: ensure WCAG AA (4.5:1)
- Interactive elements: sufficient contrast from surrounding
- Disabled: reduce contrast to indicate inactive state

### 3. Typography Principles

#### 3.1 Type Scale
- Use a limited, consistent type scale (3-5 sizes max)
- Define: display, heading, subheading, body, caption
- Ratio: 1.25 (major third) or 1.333 (perfect fourth)

#### 3.2 Line Length
- Optimal: 45-75 characters per line (including spaces)
- Too long: hard to track return to next line
- Too short: eye tires from frequent scanning

#### 3.3 Hierarchy
- Size + weight = visual hierarchy
- Body: 16px (desktop), regular weight, 1.5 line-height
- Headings: larger + bolder, tighter line-height (1.2-1.3)
- Captions: smaller + muted colour

### 4. Layout & Spacing

#### 4.1 Consistent Spacing System
- Base unit: 4px or 8px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64
- Same spacing for margins, paddings, gaps

#### 4.2 Alignment
- Left-align text in left-to-right interfaces
- Align labels and inputs consistently
- Use a grid system for column layouts
- Don't centre-align body text (harder to read)

#### 4.3 Proximity & Grouping
- Related items: closer spacing
- Unrelated items: larger spacing
- Cards and borders for clear grouping

### 5. Form Design Principles

| Principle | Implementation |
|-----------|---------------|
| One column layout | Faster completion than multi-column |
| Labels above fields | Best scanability, works for all languages |
| Inline validation | Immediate feedback, fix errors in context |
| Match input width to expected content | Shorter for name, longer for address |
| Group related fields | Personal info, address, payment in sections |
| Autofocus first field | Reduce interaction cost |
| Smart defaults | Pre-fill what you can, let user override |

### 6. Button Design Principles

| Type | Use Case | Visual |
|------|----------|--------|
| Primary | Main action (1 per section) | Solid accent colour, white text |
| Secondary | Alternative action | Outline or ghost style |
| Tertiary/Text | Less important action | Text only, no border |
| Danger | Destructive action | Red accent |
| Disabled | Unavailable action | Reduced opacity, no hover |

**Golden rule**: one primary button per view. Multiple primaries compete.

### 7. The "Less is More" Principle

- Remove unnecessary borders, colours, and decorative elements
- Whitespace is not wasted space — it's breathing room
- If an element doesn't serve a purpose, remove it
- Each extra visual element adds cognitive load

### 8. Practical UI Checklist (pre-handoff)

- [ ] Consistent spacing everywhere (same padding for same components)
- [ ] Type scale used consistently (no random sizes)
- [ ] Colour used with purpose, not decoration
- [ ] One primary action per screen
- [ ] Labels on all inputs
- [ ] Error states visible and helpful
- [ ] Touch targets ≥ 40px
- [ ] Line length 45-75 chars
- [ ] Contrast ≥ 4.5:1 for body text
- [ ] No unnecessary decorative elements

### 9. Взаимосвязь с другими навыками

- **refactoring-ui-skill**: Refactoring UI — визуальные правила
- **visual-hierarchy**: иерархия через правила practical UI
- **layout-composition**: сетки и композиция
- **typography-design**: применение типографики
- **color-theory-palette**: осмысленное использование цвета
- **form-design**: конкретные паттерны форм
- **white-space**: работа с пустым пространством

## Tags
practical-ui, ui-design, design-rules, guidelines, visual-design, layout, spacing, typography, colour, forms, buttons

## For Product Types
web-app, mobile, saas, landing, ecommerce, dashboard, desktop
