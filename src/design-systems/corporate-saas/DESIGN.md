# DESIGN.md — Corporate SaaS

## Brand & Tone
Корпоративное B2B SaaS-решение. Тон: уверенный, профессиональный, без излишней эмоциональности. Каждая деталь должна внушать доверие.

## Visual Aesthetic
Эстетика: **industrial / minimal**. Чёткая сетка, строгая типографика, акцент на функциональность. Минимум декора — максимум контента.

## Color Tokens
- color-bg-surface: #ffffff
- color-bg-elevated: #f8f9fb
- color-bg-sidebar: #1a1d23
- color-border: #e2e5ec
- color-text-primary: #1a1d23
- color-text-muted: #6b7380
- color-accent-primary: #2563eb
- color-accent-hover: #1d4ed8
- color-success: #16a34a
- color-warning: #d97706
- color-error: #dc2626

## Typography
- UI Font: **JetBrains Mono** (без засечек, современный гротеск)
- Code Font: **JetBrains Mono**
- Baselining: 4px grid

## Components — Data Table
- Fixed header, scrollable body
- Row hover: bg #f8f9fb
- Сортировка по столбцам
- Пагинация снизу
- Actions column с иконками

## Accessibility
- Контраст ≥ 4.5:1 (WCAG AA)
- Focus indicators на всех интерактивных элементах
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
| Primary | bg #2563eb, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #e2e5ec, text #1a1d23 | bg #f0f2f5 | border #2563eb | opacity .4 |
| Ghost | bg transparent, text #6b7380 | bg #f0f2f5 | text #1a1d23 | opacity .4 |
- Radius: 6px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #ffffff | #e2e5ec | #1a1d23 |
| Focus | #ffffff | #2563eb (+shadow) | #1a1d23 |
| Error | #ffffff | #dc2626 | #dc2626 |
| Disabled | #f0f2f5 | #e2e5ec | #6b7380 |
- Height: 36px | Radius: 6px | Padding: 0 12px

## Card Specs
- Background: #f8f9fb | Border: 1px solid #e2e5ec | Radius: 6px
- Padding: 16px | Hover: border #2563eb (if interactive)

## Navigation
- Link: #6b7380, hover #1a1d23, active #2563eb
- Tab active: bottom 2px #2563eb, color #2563eb
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #2563eb outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #2563eb for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale