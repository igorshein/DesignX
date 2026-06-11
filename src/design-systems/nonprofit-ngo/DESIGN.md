# DESIGN.md — Non-Profit / NGO / Charity

## Aesthetic
soft-pastel

## Tone
Тёплый, доверительный, человечный, вдохновляющий

## Colors
bg: #f7faf7, accent: #2e7d32, accent2: #1565c0

## Typography
- Font: $(System.Collections.Hashtable.font) (моноширинный)
- Scale: 0.75rem / 0.875rem / 1rem / 1.25rem / 1.5rem
- Line height: 1.0 (headings), 1.6 (body), 1.7 (long reads)

## Spacing
- Unit: 4px (0.25rem)
- Grid: 12px column gutter, 20px section margins
- Card padding: 20px (1.25rem)

## Radius
- $(System.Collections.Hashtable.radius) — все карточки, кнопки, инпуты

## Color Scheme
- light theme

## Principles
1. **Warmth**: мягкие зелёные и синие тона, тёплые оттенки, дружелюбные формы
2. **Readability**: крупные тексты, высокая контрастность, чистый whitespace
3. **Storytelling**: фото-центричные секции, карточки историй, impact-статистика
4. **Trust Signals**: прозрачность сборов, progress bars, отчёты о результатах
5. **Accessibility**: контраст 4.5:1 (WCAG AA), focus indicators, large touch targets

## Agent Instructions
При генерации интерфейсов для этого продукта:
- Используй $(System.Collections.Hashtable.font) как единственный шрифт
- Цвета из палитры токенов
- Радиус $(System.Collections.Hashtable.radius) для всех интерактивных элементов
- Следуй принципам aesthetic $(System.Collections.Hashtable.aesthetic)
- Соблюдай Тёплый, доверительный, человечный, вдохновляющий тон во всех текстах

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
| Primary | bg #2e7d32, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #dce5dc, text #1a2e1a | bg #f0f2f5 | border #2e7d32 | opacity .4 |
| Ghost | bg transparent, text #6a8a6a | bg #f0f2f5 | text #1a2e1a | opacity .4 |
- Radius: 6px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #f7faf7 | #dce5dc | #1a2e1a |
| Focus | #f7faf7 | #2e7d32 (+shadow) | #1a2e1a |
| Error | #f7faf7 | #c62828 | #c62828 |
| Disabled | #f0f2f5 | #dce5dc | #6a8a6a |
- Height: 36px | Radius: 6px | Padding: 0 12px

## Card Specs
- Background: #ffffff | Border: 1px solid #dce5dc | Radius: 6px
- Padding: 16px | Hover: border #2e7d32 (if interactive)

## Navigation
- Link: #6a8a6a, hover #1a2e1a, active #2e7d32
- Tab active: bottom 2px #2e7d32, color #2e7d32
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #2e7d32 outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #2e7d32 for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale