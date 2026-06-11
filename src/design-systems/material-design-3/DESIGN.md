# DESIGN.md — Material Design 3

## Brand & Tone
Dynamic, адаптивный, системный. Material Design 3 (Material You) — эволюция Material Design с палитрой, генерируемой из обоев.

## Color Tokens
- Dynamic Color: primary, secondary, tertiary, error, neutral palettes из wallpaper
- Surface: light/dark variants (surface, surface-variant, surface-container)
- On-colors: on-primary, on-secondary, on-tertiary (всегда контрастные)
- Outline: для границ, outline-variant для слабых границ

## Typography
- UI: **Google Sans / Roboto Flex**
- Scale: display, headline, title, body, label (каждая 3 размера = 15 styles)
- Line-height: display (1.15), headline (1.25), title (1.35), body (1.5), label (1.4)

## Shape
- Corner scale: none (0), extra-small (4px), small (8px), medium (12px), large (16px), extra-large (28px), full (50%)
- Top-level surfaces: large corners
- Components: специфичные скругления (buttons: full, cards: medium, dialogs: large)

## Elevation
- Тени через уровень elevation (0-5): от 0dp (без тени) до 5dp (высокий подъем)
- В темной теме: elevation через overlay (белый с разной прозрачностью)

## Motion
- Duration: 200ms (small), 350ms (medium), 500ms (large)
- Easing: standard, emphasized, accelerated, decelerated
- Transition: Container Transform, Shared Axis, Fade Through

## Dark Theme
- Surfaces: color-scheme dark, color-bg на 1-2 тона светлее черного
- Колориметрия: насыщенные цвета снижают насыщенность для контраста 4.5:1

## Accessibility
- Текст: min 4.5:1 (AA), рекомендовано 7:1 (AAA)
- Touch targets: min 48×48dp
- Focus: четкие focus indicators
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
| Primary | bg #6750a4, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #e7e0ec, text #1c1b1f | bg #f0f2f5 | border #6750a4 | opacity .4 |
| Ghost | bg transparent, text #8c8998 | bg #f0f2f5 | text #1c1b1f | opacity .4 |
- Radius: 12px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #fffbff | #e7e0ec | #1c1b1f |
| Focus | #fffbff | #6750a4 (+shadow) | #1c1b1f |
| Error | #fffbff | #b3261e | #b3261e |
| Disabled | #f0f2f5 | #e7e0ec | #8c8998 |
- Height: 36px | Radius: 12px | Padding: 0 12px

## Card Specs
- Background: #fdf8fe | Border: 1px solid #e7e0ec | Radius: 12px
- Padding: 16px | Hover: border #6750a4 (if interactive)

## Navigation
- Link: #8c8998, hover #1c1b1f, active #6750a4
- Tab active: bottom 2px #6750a4, color #6750a4
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #6750a4 outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #6750a4 for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale