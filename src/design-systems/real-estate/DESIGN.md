# DESIGN.md — Real Estate Platform

## Aesthetic
luxury-refined

## Tone
Премиальный, визуальный, доверительный

## Colors
bg: #fdfbf7, accent: #b8963e, accent2: #264653

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
1. **Consistency**: единые токены, отступы, радиусы, типографика
2. **Hierarchy**: чёткая иерархия заголовков, контраст размеров
3. **Accessibility**: контраст 4.5:1 (WCAG AA), focus indicators, ARIA
4. **Performance**: CSS custom properties, no box-shadow, simple transitions (150ms)
5. **Minimalism**: каждый элемент служит цели, никакого декора ради декора

## Agent Instructions
При генерации интерфейсов для этого продукта:
- Используй $(System.Collections.Hashtable.font) как единственный шрифт
- Цвета из палитры токенов
- Радиус $(System.Collections.Hashtable.radius) для всех интерактивных элементов
- Следуй принципам aesthetic $(System.Collections.Hashtable.aesthetic)
- Соблюдай Премиальный, визуальный, доверительный тон во всех текстах

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
| Primary | bg #b8963e, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #e8e0d5, text #1a1410 | bg #f0f2f5 | border #b8963e | opacity .4 |
| Ghost | bg transparent, text #8a7a6a | bg #f0f2f5 | text #1a1410 | opacity .4 |
- Radius: 6px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #fdfbf7 | #e8e0d5 | #1a1410 |
| Focus | #fdfbf7 | #b8963e (+shadow) | #1a1410 |
| Error | #fdfbf7 | #c62828 | #c62828 |
| Disabled | #f0f2f5 | #e8e0d5 | #8a7a6a |
- Height: 36px | Radius: 6px | Padding: 0 12px

## Card Specs
- Background: #ffffff | Border: 1px solid #e8e0d5 | Radius: 6px
- Padding: 16px | Hover: border #b8963e (if interactive)

## Navigation
- Link: #8a7a6a, hover #1a1410, active #b8963e
- Tab active: bottom 2px #b8963e, color #b8963e
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #b8963e outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #b8963e for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale