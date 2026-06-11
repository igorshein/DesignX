# DESIGN.md — Analytics Dashboard

## Brand & Tone
Аналитическая платформа для профессионалов. Тон: точный, строгий, data-driven. Каждый пиксель служит данным.

## Visual Aesthetic
Эстетика: **brutalist / raw**. Монохромная палитра, высокая плотность информации, системный шрифт. Никаких украшений — только данные и инструменты.

## Color Tokens
- color-bg-surface: #0d1117 (GitHub-dark inspired)
- color-bg-elevated: #161b22
- color-bg-card: #1c2128
- color-border: #30363d
- color-text-primary: #e6edf3
- color-text-muted: #8b949e
- color-accent-primary: #58a6ff
- color-accent-green: #3fb950
- color-accent-orange: #d29922
- color-accent-red: #f85149
- color-accent-purple: #bc8cff

## Typography
- UI Font: **JetBrains Mono** (reading)
- Data Font: **JetBrains Mono** (все цифры, таблицы, коды)
- Scale: 11px data labels, 13px body, 16px titles, 24px page headers

## Components — Charts
- Подписи: JetBrains Mono, 11px, color-text-muted
- Grid lines: dashed, color-border
- Tooltip: bg color-bg-elevated, border color-border, padding 8px 12px
- Анимация: только initial draw, без постоянных обновлений

## Components — KPI Card
- Value: 32px, bold, color-text-primary
- Label: 12px, color-text-muted, uppercase
- Delta: положительная color-accent-green, отрицательная color-accent-red
- Border: 1px solid color-border, radius 6px

## Data Density Rules
- Минимум пустого пространства между данными
- Полосы прокрутки всегда видимы
- Пользователь сам настраивает плотность (comfortable / compact)
## Typography Scale
- **H1** — 2rem/2.5rem, 700, JetBrains Mono
- **H2** — 1.5rem/2rem, 700, JetBrains Mono
- **H3** — 1.25rem/1.75rem, 600, JetBrains Mono
- **Body** — 0.9375rem/1.5rem, 400, JetBrains Mono
- **Body Small** — 0.8125rem/1.25rem, 400, JetBrains Mono
- **Caption** — 0.75rem/1rem, 400, JetBrains Mono
- **Label** — 0.8125rem/1rem, 600, JetBrains Mono
- **Code** — 0.8125rem/1.25rem, 400, JetBrains Mono

## Spacing & Grid
- **Base unit**: 4px
- **Spacing scale**: 4px / 8px / 12px / 16px / 24px / 32px / 48px / 64px
- **Content max-width**: 1200px (12-col); **Gutter**: 24px
- **Padding**: 16px (mobile) / 24px (desktop)

## Button Specs
| Variant | Default | Hover | Active | Disabled |
|---|---|---|---|---|
| Primary | bg #58a6ff, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #30363d, text #e6edf3 | bg #161b22 | border #58a6ff | opacity .4 |
| Ghost | bg transparent, text #8b949e | bg #161b22 | text #e6edf3 | opacity .4 |
- Radius: 6px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #0d1117 | #30363d | #e6edf3 |
| Focus | #0d1117 | #58a6ff (+shadow) | #e6edf3 |
| Error | #0d1117 | #f85149 | #f85149 |
| Disabled | #161b22 | #30363d | #8b949e |
- Height: 36px | Radius: 6px | Padding: 0 12px

## Card Specs
- Background: #161b22 | Border: 1px solid #30363d | Radius: 6px
- Padding: 16px | Hover: border #58a6ff (if interactive)

## Navigation
- Link: #8b949e, hover #e6edf3, active #58a6ff
- Tab active: bottom 2px #58a6ff, color #58a6ff
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #58a6ff outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #58a6ff for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale