# DESIGN.md — Productivity / Notes App

## Aesthetic
industrial-minimal

## Tone
Минималистичный, быстрый, редактор-ориентированный, чистый

## Colors
bg: #fafafa, accent: #4da3ff, accent2: #7c4dff

## Typography
- Font: $(System.Collections.Hashtable.font) (моноширинный)
- Scale: 0.75rem / 0.875rem / 1rem / 1.25rem / 1.5rem
- Line height: 1.0 (headings), 1.7 (body — для читабельности), 1.6 (long reads)

## Spacing
- Unit: 4px (0.25rem)
- Grid: 8px column gutter, 24px section margins
- Card padding: 16px (1rem)

## Radius
- $(System.Collections.Hashtable.radius) — все карточки, кнопки, инпуты

## Color Scheme
- light theme (dark mode variant available)

## Principles
1. **Editor-First**: минимальный UI, фокус на контент, distraction-free режим
2. **Speed**: быстрые переходы, instant save, минимальная задержка отклика
3. **Clean Whitespace**: большие отступы, чистый фон, минимум границ
4. **Hierarchy**: чёткая структура заголовков, folder/tag организация, search
5. **Performance**: CSS custom properties, no box-shadow, simple transitions (150ms)

## Agent Instructions
При генерации интерфейсов для этого продукта:
- Используй $(System.Collections.Hashtable.font) как единственный шрифт
- Цвета из палитры токенов
- Радиус $(System.Collections.Hashtable.radius) для всех интерактивных элементов
- Следуй принципам aesthetic $(System.Collections.Hashtable.aesthetic)
- Соблюдай Минималистичный, быстрый, редактор-ориентированный, чистый тон во всех текстах

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
| Primary | bg #4da3ff, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #e0e0e0, text #1a1a1a | bg #f0f2f5 | border #4da3ff | opacity .4 |
| Ghost | bg transparent, text #6b6b6b | bg #f0f2f5 | text #1a1a1a | opacity .4 |
- Radius: 6px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #fafafa | #e0e0e0 | #1a1a1a |
| Focus | #fafafa | #4da3ff (+shadow) | #1a1a1a |
| Error | #fafafa | #ef4444 | #ef4444 |
| Disabled | #f0f2f5 | #e0e0e0 | #6b6b6b |
- Height: 36px | Radius: 6px | Padding: 0 12px

## Card Specs
- Background: #ffffff | Border: 1px solid #e0e0e0 | Radius: 6px
- Padding: 16px | Hover: border #4da3ff (if interactive)

## Navigation
- Link: #6b6b6b, hover #1a1a1a, active #4da3ff
- Tab active: bottom 2px #4da3ff, color #4da3ff
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #4da3ff outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #4da3ff for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale