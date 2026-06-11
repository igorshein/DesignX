# DESIGN.md — DesignX

## Brand & Tone
DesignX — инструмент для подбора AI-skills и DESIGN.md стартеров. Помогает разработчикам и продуктам понять, какие навыки и системы дизайна подключить к ИИ-агенту для их будущего приложения.
Тон: техничный, прагматичный, без лишнего шума. Интерфейс — справочник, а не 놀이터.

## Visual Aesthetic
Эстетика: **industrial / minimal**. Функциональный минимализм: сетка, моноширинный шрифт для кода, много whitespace, акцент на сканируемость. Никаких декоративных иллюстраций — только типографика, таблицы, карточки.

## Color Tokens
- color-bg-surface: #0a0b0f (основной фон)
- color-bg-elevated: #111318 (карточки, панели)
- color-border: #22262e (разделители)
- color-text-primary: #e8ebf0
- color-text-muted: #7a8290
- color-text-code: #9cdcfe
- color-accent-primary: #4da3ff (ссылки, фокус, активные состояния)
- color-accent-hover: #7ab3ff
- color-success: #4ec990
- color-warning: #dcdcaa
- color-error: #f14c4c

Все текстовые цвета обеспечивают контраст ≥ 4.5:1 относительно фона.

## Typography
- UI Font: **JetBrains Mono** (monospace) — для всего интерфейса, включая заголовки
- Code Font: **JetBrains Mono** — для сниппетов, путей, токенов
- Шкала (mobile-first, rem-based):
  - Display: 2.5rem / 1.2, weight 700
  - H1: 1.75rem / 1.3, weight 600
  - H2: 1.375rem / 1.3, weight 600
  - H3: 1.125rem / 1.4, weight 500
  - Body: 1rem / 1.6, weight 400
  - Small: 0.8125rem / 1.5, weight 400
  - Code: 0.875rem / 1.5, weight 400
- Межстрочный интервал следует Material Design 3 type scale

## Spacing & Grid
- Base unit: 4px (0.25rem)
- Scale: 1 (4px), 2 (8px), 3 (12px), 4 (16px), 5 (20px), 6 (24px), 8 (32px), 10 (40px), 12 (48px), 16 (64px)
- Контейнер: max-width 72rem (1152px), padding inline 1.5rem (mobile) / 3rem (desktop)
- Карточки: padding 1.5rem, gap 1rem

## Components — Cards
- Фон: color-bg-elevated
- Border: 1px solid color-border
- Radius: 6px
- Hover: border-color color-accent-primary, transition 150ms ease
- Padding: 1.5rem
- Заголовок карточки: H3, color-text-primary
- Описание: Body, color-text-muted
- Теги: inline, background color-bg-surface, border color-border, radius 4px, padding 2px 8px, small font

## Components — Buttons
- Min-height: 40px, min-width: 40px (touch target)
- Radius: 6px
- Primary: bg color-accent-primary, text color-bg-surface, weight 500
- Primary hover: bg color-accent-hover
- Secondary: transparent bg, border 1px solid color-border, text color-text-primary
- Secondary hover: border color-accent-primary, text color-accent-primary
- Ghost: transparent, text color-text-muted, hover text color-text-primary

## Components — Inputs & Selects
- Height: 40px
- Padding: 0 12px
- Background: color-bg-surface
- Border: 1px solid color-border
- Radius: 6px
- Placeholder: color-text-muted
- Focus: border color-accent-primary, outline none, ring 2px color-accent-primary @ 20% opacity
- Error: border color-error

## Components — Tables
- Header: weight 600, color-text-muted, text-align left, padding 12px 16px, border-bottom 1px solid color-border
- Row: padding 12px 16px, border-bottom 1px solid color-border (last: none)
- Hover row: bg color-bg-elevated
- Code cells: font-family JetBrains Mono, color-text-code

## Motion
- Все переходы: 150ms ease-out
- Hover/focus: 100ms ease-out
- Нет сложных анимаций — только мгновенная обратная связь

## Accessibility
- Контраст текста ≥ 4.5:1 (WCAG AA)
- Фокус-индикаторы видимы на всех интерактивных элементах
- Семантический HTML: header, main, section, article, nav, button, label
- ARIA labels для иконок без текста
- Клавиатурная навигация: Tab, Enter, Escape, стрелки в селектах

## Anti-Patterns (What to Avoid)
- НЕ используй Inter, Roboto, system-ui — только JetBrains Mono
- НЕ используй фиолетовые/пурпурные градиенты
- НЕ используй тени (box-shadow) — только border для глубины
- НЕ используй rounded-xl (12px+) — max 6px
- НЕ используй анимации длинее 200ms
- НЕ используй декоративные иконки без подписи
- НЕ делай карточки с hover-эффектом scale/translate — только border/color change