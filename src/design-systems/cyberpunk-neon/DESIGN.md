# DESIGN.md — Cyberpunk Neon

## Brand & Tone
Футуристичный, агрессивный, технологичный. Эстетика киберпанка: высокий контраст, неон, цифровой хаос.

## Color Tokens
- bg-base: #0a0a1a
- bg-elevated: #121225
- bg-card: #1a1a30
- border: #2a2a45
- text-primary: #e0e0ff
- text-muted: #6666aa
- neon-pink: #ff00ff
- neon-cyan: #00ffff
- neon-green: #00ff41
- neon-yellow: #ffff00
- neon-orange: #ff6600

## Typography
- Display: **Orbitron** или **Rajdhani** (футуристический)
- Body: **JetBrains Mono** или **JetBrains Mono**
- Code: **JetBrains Mono** (обязательно)
- Hero: 80px, heavy, letter-spacing: 4px
- Встроенные glitch-эффекты через CSS pseudo-elements

## Grid
- Асимметричная сетка
- Наложение элементов друг на друга
- Перспективные линии (grid lines под углом)
- Сдвинутые секции (offset sections)

## Components — Neon Button
- border: 2px solid neon color
- text: neon color
- box-shadow: 0 0 10px neon, 0 0 20px neon
- hover: расширение shadow, background fill
- border-radius: 0 или 2px

## Components — Glitch Text
- Animation: clip-path shuffle
- Pseudo-elements: смещенные копии текста в cyan и magenta
- Duration: 0.2-0.5s random intervals

## Background Effects
- Scanlines (CSS repeating-linear-gradient)
- Grid overlay с перспективой
- Floating hex/binaries ASCII
- Particle system (canvas)

## Motion
- Glitch transitions на hover
- Scanline animation
- Neon flicker (CSS steps animation)
- Синхронизация с music beat ритмом
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
| Primary | bg #ff00ff, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #2a2a45, text #e0e0ff | bg #121225 | border #ff00ff | opacity .4 |
| Ghost | bg transparent, text #6666aa | bg #121225 | text #e0e0ff | opacity .4 |
- Radius: 2px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #0a0a1a | #2a2a45 | #e0e0ff |
| Focus | #0a0a1a | #ff00ff (+shadow) | #e0e0ff |
| Error | #0a0a1a | #ff0044 | #ff0044 |
| Disabled | #121225 | #2a2a45 | #6666aa |
- Height: 36px | Radius: 2px | Padding: 0 12px

## Card Specs
- Background: #121225 | Border: 1px solid #2a2a45 | Radius: 2px
- Padding: 16px | Hover: border #ff00ff (if interactive)

## Navigation
- Link: #6666aa, hover #e0e0ff, active #ff00ff
- Tab active: bottom 2px #ff00ff, color #ff00ff
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #ff00ff outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #ff00ff for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale