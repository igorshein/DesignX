# DESIGN.md — Scandinavian Light

## Brand & Tone
Светлый, функциональный, минимальный. Скандинавский дизайн: clean, simple, human.

## Color Tokens
- bg-surface: #f8f8f6 (тёплый белый)
- bg-elevated: #ffffff
- bg-secondary: #efefec
- border: #e0e0dc
- text-primary: #2d2d2d
- text-muted: #888884
- accent-primary: #b8a88a (песочный/бежевый) или #2d3436 (угольный)
- accent-green: #7aa874
- accent-rose: #c98a8a

## Typography
- Display: **GT America** или **JetBrains Mono** (чистый гротеск)
- Body: **JetBrains Mono** или **system-ui**
- Scale: 14px body, 18px H3, 24px H2, 36px H1, 48px hero
- Line-height: 1.6 body, 1.2 headings

## Grid
- max-width: 1200px
- Padding: 24px sides
- 12-column grid
- Обилие whitespace

## Components — Card
- bg: white
- border: не обязательно, или 1px solid #e0e0dc
- border-radius: 0 (скандинавский straight edge)
- padding: 24px
- Image: 16:9 или 4:3, full-width

## Components — Button
- Height: 48px
- padding: 16px 32px
- bg: accent или transparent
- border: 1px solid accent (outline)
- border-radius: 0
- font-weight: 500

## Photography
- Большие, качественные изображения
- Природные мотивы (лес, море, горы)
- Естественное освещение
- Минимум обработки

## Motion
- Только functional motion (page load, scroll reveal)
- Easing: ease-out
- Duration: 200-300ms
- Никаких декоративных анимаций
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
| Primary | bg #b8a88a, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #e0e0dc, text #2d2d2d | bg #f0f2f5 | border #b8a88a | opacity .4 |
| Ghost | bg transparent, text #888884 | bg #f0f2f5 | text #2d2d2d | opacity .4 |
- Radius: 0px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #f8f8f6 | #e0e0dc | #2d2d2d |
| Focus | #f8f8f6 | #b8a88a (+shadow) | #2d2d2d |
| Error | #f8f8f6 | #c98a8a | #c98a8a |
| Disabled | #f0f2f5 | #e0e0dc | #888884 |
- Height: 36px | Radius: 0px | Padding: 0 12px

## Card Specs
- Background: #ffffff | Border: 1px solid #e0e0dc | Radius: 0px
- Padding: 16px | Hover: border #b8a88a (if interactive)

## Navigation
- Link: #888884, hover #2d2d2d, active #b8a88a
- Tab active: bottom 2px #b8a88a, color #b8a88a
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #b8a88a outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #b8a88a for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale