# DESIGN.md — Booking / Reservation

## Aesthetic
scandinavian

## Tone
Доверительный, спокойный, ориентированный на конверсию

## Colors
bg: #f0f8ff, accent: #0284c7, accent2: #14b8a6

## Typography
- Font: $(System.Collections.Hashtable.font) (моноширинный)
- Scale: 0.75rem / 0.875rem / 1rem / 1.25rem / 1.5rem
- Line height: 1.0 (headings), 1.5 (body), 1.6 (long reads)

## Spacing
- Unit: 4px (0.25rem)
- Grid: 8px column gutter, 16px section margins
- Card padding: 16px (1rem)

## Radius
- $(System.Collections.Hashtable.radius) — все карточки, кнопки, инпуты

## Color Scheme
- light theme

## Principles
1. **Calendar-Centric**: наглядные календари, date picker, time slots, availability grid
2. **Step Progress**: чёткий wizard с шагами бронирования, progress indicator
3. **Trust Signals**: отзывы, рейтинги, гарантии, безопасные платежи
4. **Conversion-Focused**: крупные CTA, минимум трения до checkout
5. **Accessibility**: контраст 4.5:1 (WCAG AA), focus indicators, clear labels

## Agent Instructions
При генерации интерфейсов для этого продукта:
- Используй $(System.Collections.Hashtable.font) как единственный шрифт
- Цвета из палитры токенов
- Радиус $(System.Collections.Hashtable.radius) для всех интерактивных элементов
- Следуй принципам aesthetic $(System.Collections.Hashtable.aesthetic)
- Соблюдай Доверительный, спокойный, ориентированный на конверсию тон во всех текстах

## Tokens CSS
--bg, --bg-elevated, --text, --text-muted, --accent, --accent2, --border, --success, --error
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
| Primary | bg #0284c7, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #d0e4ed, text #1a2e3a | bg #f0f2f5 | border #0284c7 | opacity .4 |
| Ghost | bg transparent, text #5a7a8a | bg #f0f2f5 | text #1a2e3a | opacity .4 |
- Radius: 6px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #f0f8ff | #d0e4ed | #1a2e3a |
| Focus | #f0f8ff | #0284c7 (+shadow) | #1a2e3a |
| Error | #f0f8ff | #dc2626 | #dc2626 |
| Disabled | #f0f2f5 | #d0e4ed | #5a7a8a |
- Height: 36px | Radius: 6px | Padding: 0 12px

## Card Specs
- Background: #ffffff | Border: 1px solid #d0e4ed | Radius: 6px
- Padding: 16px | Hover: border #0284c7 (if interactive)

## Navigation
- Link: #5a7a8a, hover #1a2e3a, active #0284c7
- Tab active: bottom 2px #0284c7, color #0284c7
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #0284c7 outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #0284c7 for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale