# SKILL: Design Documentation & Spec Writing

## Source
`designer-skills, RESOURCES.md §5.2`

## Purpose
Дизайн-документация: spec writing, design decisions, component docs, contribution guidelines, DESIGN.md. Структурированное описание компонентов, паттернов и принципов в формате, пригодном для ИИ-агента (YAML/JSON-шаблоны).

## Sources (RESOURCES.md)
- Alla Kholmatova — Design Systems (component documentation patterns)
- Nathan Curtis — Component documentation, contribution models
- Storybook — CSF (Component Story Format), MDX documentation
- W3C DTCG — Design token specification standard
- Zeroheight / Supernova — DS documentation platforms
- NN/g — Design documentation best practices
- Smashing Magazine — Designing for documentation

## When to Use
- Ведение документации дизайн-системы
- Написание component specs (purpose, usage, anatomy, states)
- Документирование design decisions (ADR)
- Создание DESIGN.md для новых продуктов
- Генерация документации для ИИ-агента (structured output)

## Behavior

### 1. Типы документации

#### 1.1 Component Documentation
Каждый компонент документируется через:

```yaml
# Component Spec
component:
  id: "button"
  name: "Button"
  purpose: "Запускает действие или переход"
  
  anatomy:
    - "Container"
    - "Label"
    - "Icon (optional)"
    - "Spinner (loading state)"
  
  variants:
    - "primary"
    - "secondary"
    - "ghost"
    - "danger"
    - "link"
  
  states:
    - "default"
    - "hover"
    - "active"
    - "focus-visible"
    - "disabled"
    - "loading"
  
  tokens:
    bg: "--accent"
    text: "--text-primary"
    border: "--border"
    radius: "--radius"
    font_size: "0.875rem"
    padding: "0 16px"
  
  constraints:
    min_width: "36px (icon only) / 80px (with text)"
    max_width: "360px"
    height: "36px default / 28px sm / 44px lg"
    text_max_length: "20 chars"
  
  accessibility:
    contrast: "4.5:1"
    focus_ring: "2px offset"
    aria: "role='button' if not native <button>"
  
  usage:
    do:
      - "Use primary for main CTA"
      - "Use secondary for alternative actions"
      - "Show loading state during async operations"
    dont:
      - "Don't use multiple primary buttons in one section"
      - "Don't disable without explaining why"
      - "Don't use ghost for critical actions"
```

#### 1.2 Pattern Documentation
```yaml
# Pattern Spec
pattern:
  id: "form-with-validation"
  name: "Form with Inline Validation"
  purpose: "Сбор данных пользователя с валидацией в реальном времени"
  
  components:
    - "input-field"
    - "label"
    - "error-message"
    - "submit-button"
    - "checkbox (optional)"
  
  flow:
    - "1. Пользователь видит пустую форму"
    - "2. Заполняет поля — inline validation после debounce"
    - "3. Ошибки показываются под каждым полем"
    - "4. Submit button disabled до исправления всех ошибок"
    - "5. После submit: success message или server errors"
  
  states:
    - "empty"
    - "filling"
    - "validating"
    - "error-inline"
    - "submitting"
    - "success"
    - "error-server"
  
  text_rules:
    - "Error: what went wrong + how to fix it"
    - "Placeholder: example input, not empty instruction"
    - "Submit: action-oriented ('Save' not 'Submit')"
```

#### 1.3 Design Decision Record (DDR)
```markdown
## DDR-001: Выбор цветовой палитры

**Date**: 2026-06-01
**Author**: @design-lead
**Status**: Approved

### Context
Нам нужна палитра, которая работает в тёмной теме,
контрастна (WCAG AA), и минималистична (industrial aesthetic).

### Options Considered
1. **Blue monochrome** — просто, контрастно, технологично
2. **Green accent** — экологично, но не подходит aesthetic
3. **Purple accent** — креативно, но хуже контраст

### Decision
Выбран blue monochrome (#4da3ff accent) как основной.

### Rationale
- WCAG AA на всех поверхностях (4.5:1+)
- Соответствует industrial/minimal aesthetic
- Хорошо масштабируется на light/dark theme

### Consequences
- Нужно протестировать на цветовую слепоту
- Blue — universally safe для всех рынков
```

### 2. DESIGN.md Structure

#### 2.1 Обязательные секции
```markdown
# DESIGN.md — [Product Name]

## Aesthetic
[industrial-minimal / cyberpunk / swiss / ...]

## Tone
[Краткое описание тона коммуникации]

## Colors
[Основные цвета: bg, accent, accent2]

## Typography
[Шрифт, scale, line heights]

## Spacing
[Base unit, grid, card padding]

## Radius
[Скругления для разных элементов]

## Principles
[5-7 ключевых принципов дизайн-системы]

## Tokens CSS
[Список CSS custom properties]

## Component Specs
[Кнопки, инпуты, карточки, навигация, модалки]

## Accessibility
[Контраст, focus, target size, motion]

## Agent Instructions
[Специфические указания для ИИ-агента]
```

#### 2.2 Рекомендации по написанию
- **Purpose**: одна строка, зачем этот компонент
- **Anatomy**: из каких частей состоит
- **States**: все визуальные состояния
- **Usage**: do/don't для правильного использования
- **Accessibility**: контраст, ARIA, keyboard
- **Tokens**: CSS-переменные с значениями
- **Responsive**: как адаптируется (breakpoints, RTL)
- **Variants**: все варианты, отличия
- **Constraints**: размеры, лимиты, правила

### 3. Structured Output Formats

#### 3.1 Для ИИ-агента: YAML/JSON
Все компоненты, паттерны и принципы должны выдаваться в структурированном виде с полями:
- id, name, category, tags, complexity, rating, source
- description, key_principles, behavior
- for_product_types, related_skills, frameworks

#### 3.2 Для человека: Markdown + таблицы
- README-style документация
- Таблицы для состояний и токенов
- Do/Dont списки для usage guidelines
- Интерактивные примеры (Storybook)

### 4. Contribution & Governance Docs

#### 4.1 Contribution Guidelines
```markdown
# How to contribute to Design System

1. **Propose**: create RFC with motivation, sketches, alternatives
2. **Review**: design review + accessibility review + dev review
3. **Prototype**: build in Figma + Storybook playground
4. **Test**: visual regression + screen reader + responsive
5. **Document**: update component docs + examples + changeset
6. **Release**: semantic version bump + changelog + migration guide
```

#### 4.2 Review Checklist
- [ ] Purpose clear: зачем нужен этот компонент/паттерн
- [ ] All states covered: default, hover, active, focus, disabled, loading, error
- [ ] Accessibility: 4.5:1 contrast, focus ring, ARIA, keyboard
- [ ] Responsive: mobile → tablet → desktop + RTL
- [ ] Tokens: все цвета/шрифты — из токенов, нет хардкода
- [ ] Usage guidelines: do/dont, примеры
- [ ] Edge cases: пустые состояния, error states, long text
- [ ] Documentation: spec заполнен по шаблону

### 5. Взаимосвязь с другими навыками

- **design-ops**: structured knowledge, metadata standards
- **design-knowledge-architecture**: углублённая структура знаний
- **design-system-architect**: DS архитектура
- **component-naming-standards**: BEM-таксономия
- **design-tokens**: YAML/JSON token specs
- **design-qa-process**: review checklist, acceptance criteria
- **design-handoff-communication**: handoff specs

## Tags
documentation, specs, writing, handoff, knowledge, design-system, component-docs, structured-output

## For Product Types
web-app, saas, mobile, desktop, dashboard
