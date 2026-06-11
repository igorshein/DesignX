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
- Body: **Inter** или **Neue Haas Grotesk** (clean sans)
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
