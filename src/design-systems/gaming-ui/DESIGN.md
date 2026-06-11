# DESIGN.md — Gaming Interface

## Aesthetic
cyberpunk

## Tone
Яркий, иммерсивный, энергичный, игровой

## Colors
bg: #0a0a12, accent: #ff0044, accent2: #00ffcc

## Typography
- Font: $(System.Collections.Hashtable.font) (моноширинный)
- Scale: 0.75rem / 0.875rem / 1rem / 1.25rem / 2rem
- Line height: 1.0 (headings), 1.4 (body), 1.6 (long reads)

## Spacing
- Unit: 4px (0.25rem)
- Grid: 8px column gutter, 16px section margins
- Card padding: 16px (1rem)

## Radius
- $(System.Collections.Hashtable.radius) — все карточки, кнопки, инпуты

## Color Scheme
- dark theme

## Principles
1. **Immersion**: глубокие тёмные фоны, неоновые акценты, layered интерфейсы
2. **Vibrancy**: насыщенные цвета, glow-эффекты, динамическая подсветка
3. **Playfulness**: игровая типографика, прогресс-бары, XP-индикаторы
4. **Readability**: контрастные тексты на ярких фонах, чёткие HUD-элементы
5. **Performance**: CSS custom properties, minimal box-shadow, 150ms transitions

## Agent Instructions
При генерации интерфейсов для этого продукта:
- Используй $(System.Collections.Hashtable.font) как единственный шрифт
- Цвета из палитры токенов
- Радиус $(System.Collections.Hashtable.radius) для всех интерактивных элементов
- Следуй принципам aesthetic $(System.Collections.Hashtable.aesthetic)
- Соблюдай Яркий, иммерсивный, энергичный, игровой тон во всех текстах

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
| Primary | bg #ff0044, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #2a2a3e, text #f0f0f5 | bg #141420 | border #ff0044 | opacity .4 |
| Ghost | bg transparent, text #7a7a9a | bg #141420 | text #f0f0f5 | opacity .4 |
- Radius: 6px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #0a0a12 | #2a2a3e | #f0f0f5 |
| Focus | #0a0a12 | #ff0044 (+shadow) | #f0f0f5 |
| Error | #0a0a12 | #ff0044 | #ff0044 |
| Disabled | #141420 | #2a2a3e | #7a7a9a |
- Height: 36px | Radius: 6px | Padding: 0 12px

## Card Specs
- Background: #141420 | Border: 1px solid #2a2a3e | Radius: 6px
- Padding: 16px | Hover: border #ff0044 (if interactive)

## Navigation
- Link: #7a7a9a, hover #f0f0f5, active #ff0044
- Tab active: bottom 2px #ff0044, color #ff0044
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #ff0044 outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #ff0044 for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale