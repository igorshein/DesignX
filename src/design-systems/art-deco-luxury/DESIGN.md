# DESIGN.md — Art Deco Luxury

## Brand & Tone
Роскошный, геометрический, вневременной. Art Deco: симметрия, золотые акценты, богатство деталей.

## Color Tokens
- bg-surface: #fef9e7 (слоновая кость)
- bg-elevated: #ffffff
- bg-dark: #1a1a2e (глубокий ультрамарин)
- border: #d4c5a0
- text-primary: #1a1a2e
- text-muted: #6b6080
- accent-gold: #c9a84c
- accent-gold-light: #e0c770
- accent-navy: #1a1a2e
- accent-rose: #c08080
- accent-cream: #f5efe0

## Typography
- Display: **Cormorant Garamond** или **Playfair Display** (элегантный serif)
- Body: **JetBrains Mono** или **Lato** (clean sans для контраста)
- Scale: 12px petites, 16px body, 24px titles, 48px headlines
- Italics для акцентов

## Borders & Ornaments
- Double lines (border-style: double)
- Chevron и herringbone паттерны
- Corner ornaments (CSS или SVG)
- Gold lines толщиной 1px и 2px

## Geometry
- Симметричные композиции
- Золотое сечение (1:1.618) для пропорций
- Геометрические формы: треугольники, ромбы, арки
- Sunburst мотивы (лучи от центра)

## Components — Card
- Double border (1px gold + 1px dark)
- Ornamental corner accents
- bg: cream или white
- padding: 32px

## Components — Button
- Double outline border
- Металлический градиент
- Симметричный паттерн
- gold bg + dark text или dark bg + gold text

## Patterns (CSS)
- Fan pattern (sunburst)
- Greek key (меандр)
- Chevron stripe
- Diamond grid

## Typography Hierarchy
- H1: 48px, gold color на dark bg или dark на cream
- H2: 32px, uppercase, letter-spacing 4px
- Body: 16px, leading 1.8
- Caption: 12px, uppercase, tracked 2px
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
| Primary | bg #c9a84c, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #d4c5a0, text #1a1a2e | bg #f0f2f5 | border #c9a84c | opacity .4 |
| Ghost | bg transparent, text #6b6080 | bg #f0f2f5 | text #1a1a2e | opacity .4 |
- Radius: 0px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #fef9e7 | #d4c5a0 | #1a1a2e |
| Focus | #fef9e7 | #c9a84c (+shadow) | #1a1a2e |
| Error | #fef9e7 | #c08060 | #c08060 |
| Disabled | #f0f2f5 | #d4c5a0 | #6b6080 |
- Height: 36px | Radius: 0px | Padding: 0 12px

## Card Specs
- Background: #ffffff | Border: 1px solid #d4c5a0 | Radius: 0px
- Padding: 16px | Hover: border #c9a84c (if interactive)

## Navigation
- Link: #6b6080, hover #1a1a2e, active #c9a84c
- Tab active: bottom 2px #c9a84c, color #c9a84c
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #c9a84c outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #c9a84c for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale