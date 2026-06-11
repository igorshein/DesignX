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
