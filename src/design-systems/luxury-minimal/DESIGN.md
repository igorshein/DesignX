# DESIGN.md — Luxury Minimal

## Brand & Tone
Премиальный, сдержанный, безупречный. Минимализм высшего качества: дорогие материалы, чистые линии.

## Color Tokens
- bg-surface: #ffffff
- bg-elevated: #fafafa
- bg-dark: #1a1a1a
- border: #e0e0e0
- border-accent: #c9a84c (золото, опционально)
- text-primary: #1a1a1a
- text-muted: #666666
- accent-gold: #c9a84c
- accent-charcoal: #333333
- accent-ivory: #f5f0eb

## Typography
- Display: **Playfair Display** или **Cormorant Garant** (serif для роскоши)
- Body: **JetBrains Mono** или **Neue Haas Grotesk** (clean sans)
- Size: 14px body (чуть меньше — премиальнее), 48px hero, 21px H2
- Line-height: 1.2 для заголовков, 1.8 для текста
- Letter-spacing: -0.5px для H1, 0.5px для body (опционально)

## Spacing
- Щедрые отступы: 48-80px между секциями
- Padding в карточках: 24-40px
- Никаких тесных раскладок

## Components — Card
- border: 0.5px solid #e0e0e0 (тонкая линия)
- border-radius: 4px (едва заметное)
- shadow: нет или 0 1px 2px rgba(0,0,0,0.04)
- hover: border-color accent или подъем на 1px

## Components — Button
- Primary: dark bg, white text, weight 500
- Outline: 1px solid, text color
- Ghost: transparent, text-muted → text-primary
- border-radius: 2px
- height: 44px

## Components — Divider
- 0.5px solid #e0e0e0
- 80% container width (not full)
- With label: inline-block text, color-muted

## Imagery
- Full-bleed photography
- Черно-белое или монохромное
- Минимум текста на изображениях
- Large format (2:1 или 3:2)

## Motion
- Subtle fade-in on scroll
- 200ms, ease
- Staggered entrance: 50ms delay per item
- No bounce, no wobble, no flash
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
| Secondary | bg transparent, border #e0e0e0, text #1a1a1a | bg #f0f2f5 | border #c9a84c | opacity .4 |
| Ghost | bg transparent, text #666666 | bg #f0f2f5 | text #1a1a1a | opacity .4 |
- Radius: 2px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #ffffff | #e0e0e0 | #1a1a1a |
| Focus | #ffffff | #c9a84c (+shadow) | #1a1a1a |
| Error | #ffffff | #c04040 | #c04040 |
| Disabled | #f0f2f5 | #e0e0e0 | #666666 |
- Height: 36px | Radius: 2px | Padding: 0 12px

## Card Specs
- Background: #fafafa | Border: 1px solid #e0e0e0 | Radius: 2px
- Padding: 16px | Hover: border #c9a84c (if interactive)

## Navigation
- Link: #666666, hover #1a1a1a, active #c9a84c
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