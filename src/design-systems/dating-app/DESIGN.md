# DESIGN.md — Dating App / Social Discovery

## Aesthetic
soft-pastel

## Tone
Тёплый, романтичный, дружелюбный, современный

## Colors
bg: #fef8f9, accent: #ff4d6d, accent2: #ff8fa3

## Typography
- Font: $(System.Collections.Hashtable.font) (моноширинный)
- Scale: 0.75rem / 0.875rem / 1rem / 1.25rem / 1.75rem
- Line height: 1.0 (headings), 1.5 (body), 1.6 (long reads)

## Spacing
- Unit: 4px (0.25rem)
- Grid: 12px column gutter, 20px section margins
- Card padding: 20px (1.25rem)

## Radius
- $(System.Collections.Hashtable.radius) — карточки, кнопки, инпуты

## Color Scheme
- light theme

## Principles
1. **Image-Forward**: крупные фотографии, overlay-текст, swipe-жесты
2. **Soft Aesthetic**: пастельные градиенты, скруглённые углы, тёплые тона
3. **Card-Based**: карточки профилей, карточки matching, анимации стека
4. **Accessibility**: контраст 4.5:1 (WCAG AA), focus indicators, large touch targets
5. **Trust Signals**: верифицированные профили, понятный flow, безопасность

## Agent Instructions
При генерации интерфейсов для этого продукта:
- Используй $(System.Collections.Hashtable.font) как единственный шрифт
- Цвета из палитры токенов
- Радиус $(System.Collections.Hashtable.radius) для всех интерактивных элементов
- Следуй принципам aesthetic $(System.Collections.Hashtable.aesthetic)
- Соблюдай Тёплый, романтичный, дружелюбный, современный тон во всех текстах

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
| Primary | bg #ff4d6d, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #f0dde0, text #2d1b1e | bg #f0f2f5 | border #ff4d6d | opacity .4 |
| Ghost | bg transparent, text #8a6a6a | bg #f0f2f5 | text #2d1b1e | opacity .4 |
- Radius: 6px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #fef8f9 | #f0dde0 | #2d1b1e |
| Focus | #fef8f9 | #ff4d6d (+shadow) | #2d1b1e |
| Error | #fef8f9 | #e63946 | #e63946 |
| Disabled | #f0f2f5 | #f0dde0 | #8a6a6a |
- Height: 36px | Radius: 6px | Padding: 0 12px

## Card Specs
- Background: #ffffff | Border: 1px solid #f0dde0 | Radius: 6px
- Padding: 16px | Hover: border #ff4d6d (if interactive)

## Navigation
- Link: #8a6a6a, hover #2d1b1e, active #ff4d6d
- Tab active: bottom 2px #ff4d6d, color #ff4d6d
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #ff4d6d outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #ff4d6d for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale