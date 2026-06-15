# SKILL: Design Operations & Knowledge Architecture

## Source
`designer-skills, RESOURCES.md §5`

## Purpose
Системный подход к организации дизайн-процессов: построение воркфлоу, управление дизайн-активами, governance, structured knowledge representation, метрики эффективности дизайн-команды. Включает структурированное описание знаний для ИИ-агента: компоненты → паттерны → принципы.

## Sources (RESOURCES.md)
- Alla Kholmatova — Design Systems (компонентная архитектура, token-системы)
- Nathan Curtis — Design System documentation, contribution models
- DesignOps Handbook — процессы, метрики, governance
- Storybook — Component-driven documentation, CSF format
- W3C — Design token specification (DTCG)
- NN/g — DesignOps maturity model
- Smashing Magazine — Design systems books, documentation patterns

## When to Use
- Построение и эволюция дизайн-системы
- Организация воркфлоу команды дизайна
- Автоматизация handoff между дизайном и разработкой
- Структурирование знаний для ИИ-агента
- Ведение документации дизайн-системы

## Behavior

### 1. DesignOps Framework (SCALE)

#### S — Standardize: стандартизация процессов и артефактов
- Единый процесс: Request → Review → Approve → Document → Release
- Design review checklist: functionality, accessibility, consistency, feasibility
- Handoff specs: token-based, component-level, responsive breakpoints
- Naming conventions: BEM-inspired, component hierarchy, variant taxonomy

#### C — Centralize: единый источник правды (single source of truth)
- Design tokens как SSOT для всех цветов, отступов, шрифтов
- Component library: Figma (design) ↔ Storybook (code)
- Documentation: Notion / Storybook / DESIGN.md
- Asset management: иконки, иллюстрации, фото — central repository
- Versioning: semantic versioning для design tokens и компонентов

#### A — Automate: автоматизация рутины
- Token export: Figma → JSON → CSS custom properties
- Component generation: Figma API → code scaffolding
- QA automation: visual regression testing (Percy, Chromatic)
- Design review: автоматическая проверка контраста, отступов, состояний
- Documentation: auto-generate component docs from metadata

#### L — Learn: обучение и развитие команды
- Onboarding materials: DESIGN.md, contribution guidelines
- Design critiques: регулярные ревью, feedback culture
- Knowledge base: структурированная документация (см. §5.2)
- Competency models: skills matrix per role (junior → senior → lead)

#### E — Evaluate: измерение эффективности
- Design metrics: time-to-handoff, component reuse rate, design debt
- Design system adoption: % of designs using DS components
- Team health: удовлетворённость, throughput, cycle time
- Business impact: conversion, NPS, SUS связанные с redesign

### 2. Structured Knowledge Architecture (для ИИ-агента)

#### 2.1 Три уровня представления знаний

```
┌─────────────────────────────────────────┐
│           PRINCIPLES                     │
│  (абстрактные, универсальные правила)    │
│  • Visibility of system status          │
│  • Match between system and real world  │
│  • Error prevention                     │
│  • Consistency and standards            │
└────────────────┬────────────────────────┘
                 │ реализуются через
                 ▼
┌─────────────────────────────────────────┐
│           PATTERNS                       │
│  (типовые решения для задач)             │
│  • Form with validation                 │
│  • Onboarding flow                      │
│  • Search with filters                  │
│  • Checkout process                     │
└────────────────┬────────────────────────┘
                 │ состоят из
                 ▼
┌─────────────────────────────────────────┐
│           COMPONENTS                     │
│  (конкретные UI-элементы)               │
│  • Button, Input, Card, Modal           │
│  • Tab, Dropdown, Tooltip, Badge        │
└─────────────────────────────────────────┘
```

#### 2.2 Component Spec Template
```yaml
# Шаблон описания компонента для ИИ-агента
id: "button"
name: "Button"
category: "actions"
description: "Запускает действие или переход"

variants:
  - "primary"
  - "secondary"  
  - "ghost"
  - "danger"

states:
  - "default"
  - "hover"
  - "active"
  - "focus-visible"
  - "disabled"
  - "loading"

tokens:
  - "bg"
  - "text"
  - "border"
  - "radius"
  - "font-size"
  - "padding"

constraints:
  min_width: "36px (icon) / 80px (text)"
  max_width: "360px"
  height: "36px (default) / 28px (sm) / 44px (lg)"

text_rules:
  max_length: "20 chars"
  case: "sentence / title"
  no_placeholder: true

accessibility:
  contrast: "4.5:1"
  focus_ring: "2px offset"
  aria: "button role (if not <button>)"
```

#### 2.3 Pattern Spec Template
```yaml
# Шаблон описания паттерна
id: "form-with-validation"
name: "Form with inline validation"
description: "Форма с валидацией полей в реальном времени"

components:
  - "input-field"
  - "label"
  - "error-message"
  - "submit-button"
  - "checkbox"

states:
  - "empty"
  - "filling"
  - "validating"
  - "error"
  - "submitting"
  - "success"
  - "error-server"

principles_applied:
  - "error prevention"
  - "visibility of system status"
  - "user control and freedom"

text_guidelines:
  - "Error messages: what went wrong + how to fix"
  - "Success: brief confirmation, next steps"
  - "Placeholder: example, not instruction"

adaptation:
  - "responsive: single column (mobile), multi-column (desktop)"
  - "RTL: mirror field order, label position"
  - "locale: date/phone/address per region"
```

#### 2.4 Principle Spec Template
```yaml
# Шаблон описания принципа
id: "visibility-system-status"
name: "Visibility of system status"
source: "Nielsen — 10 Usability Heuristics"

statement: "Система всегда должна информировать пользователя о том, что происходит, через соответствующую обратную связь в разумное время."

good_example: 
  - "Progress bar при загрузке"
  - "Confirmation message после отправки формы"
  - "Typing indicator в AI-чате"

bad_example:
  - "Экран зависает без индикатора"
  - "Нет подтверждения после сохранения"
  - "Кнопка не показывает loading state"

related_patterns:
  - "loading-states"
  - "feedback-confirmation"
  - "form-design"

tokens:
  - "loading-spinner"
  - "progress-bar"
  - "toast"
```

### 3. Knowledge Graph: связи между элементами

| Уровень | Связи | Пример |
|---------|-------|--------|
| Principle → Pattern | Реализуется через | Visibility → Loading skeleton, Progress bar |
| Pattern → Components | Состоит из | Form → Input, Button, Label, Error |
| Component → Tokens | Использует | Button → bg, text, radius, font-size |
| Pattern → Principles | Опирается на | Form → Error prevention + Visibility |
| Component → States | Имеет | Button → default, hover, disabled, loading |

### 4. Metadata Standards для ИИ-агента

Каждый артефакт (компонент, паттерн, принцип) должен содержать:

- **id**: уникальный идентификатор (kebab-case)
- **name**: человекочитаемое название
- **category**: тематическая категория
- **tags**: массив тегов для поиска
- **complexity**: beginner / intermediate / advanced
- **rating**: 1-5 (качество/релевантность)
- **source**: откуда взяты знания
- **for_product_types**: для каких типов продуктов применимо
- **related_skills**: связанные навыки
- **frameworks**: инструменты/библиотеки
- **description**: краткое описание (для preview)
- **behavior**: детальное описание (для генерации)
- **key_principles**: ключевые принципы (5-7 пунктов)
- **examples**: хорошие и плохие примеры

### 5. Взаимосвязь с другими навыками

- **design-documentation**: документация компонентов, spec writing
- **design-knowledge-architecture**: углублённая структура знаний
- **design-system-architect**: архитектура DS, token hierarchy
- **design-system-governance**: contribution model, versioning
- **component-naming-standards**: BEM, taxonomy
- **design-tokens**: token системы
- **design-handoff-communication**: handoff specs и annotation
- **design-qa-process**: QA checklist для DS

## Tags
design-ops, workflow, process, governance, handoff, asset-management, knowledge-architecture, metadata, structured-knowledge

## For Product Types
web-app, saas, mobile, dashboard, desktop
