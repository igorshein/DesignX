# DESIGN.md — CRM / Enterprise

## Aesthetic
industrial-minimal

## Tone
Профессиональный, эффективный, деловой, сдержанный

## Colors
bg: #f5f6f8, accent: #1a73e8, accent2: #374151

## Typography
- Font: $(System.Collections.Hashtable.font) (моноширинный)
- Scale: 0.75rem / 0.875rem / 1rem / 1.25rem / 1.5rem
- Line height: 1.0 (headings), 1.5 (body), 1.4 (data tables)

## Spacing
- Unit: 4px (0.25rem)
- Grid: 4px column gutter (compact), 16px section margins
- Card padding: 12px (0.75rem) — компактный режим

## Radius
- $(System.Collections.Hashtable.radius) — все карточки, кнопки, инпуты

## Color Scheme
- light theme

## Principles
1. **Density**: высокая информационная плотность, компактные таблицы, плотные дата-гриды
2. **Efficiency**: toolbar-rich интерфейсы, bulk actions, keyboard shortcuts
3. **Hierarchy**: sidebar навигация, чёткая иерархия секций, breadcrumbs
4. **Consistency**: единые токены, размеры ячеек, выравнивание колонок
5. **Performance**: CSS custom properties, no box-shadow, simple transitions (150ms)

## Agent Instructions
При генерации интерфейсов для этого продукта:
- Используй $(System.Collections.Hashtable.font) как единственный шрифт
- Цвета из палитры токенов
- Радиус $(System.Collections.Hashtable.radius) для всех интерактивных элементов
- Следуй принципам aesthetic $(System.Collections.Hashtable.aesthetic)
- Соблюдай Профессиональный, эффективный, деловой, сдержанный тон во всех текстах

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
| Primary | bg #1a73e8, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #dde1e6, text #1a1d23 | bg #f0f2f5 | border #1a73e8 | opacity .4 |
| Ghost | bg transparent, text #6b7380 | bg #f0f2f5 | text #1a1d23 | opacity .4 |
- Radius: 4px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #f5f6f8 | #dde1e6 | #1a1d23 |
| Focus | #f5f6f8 | #1a73e8 (+shadow) | #1a1d23 |
| Error | #f5f6f8 | #d93025 | #d93025 |
| Disabled | #f0f2f5 | #dde1e6 | #6b7380 |
- Height: 36px | Radius: 4px | Padding: 0 12px

## Card Specs
- Background: #ffffff | Border: 1px solid #dde1e6 | Radius: 4px
- Padding: 16px | Hover: border #1a73e8 (if interactive)

## Navigation
- Link: #6b7380, hover #1a1d23, active #1a73e8
- Tab active: bottom 2px #1a73e8, color #1a73e8
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #1a73e8 outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #1a73e8 for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale