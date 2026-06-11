# DESIGN.md — Retro 80s

## Brand & Tone
Ностальгический, неоновый, синтвейв. Эстетика 80-х с современными технологиями: да, это чисто эстетическое заявление.

## Color Tokens
- bg-base: #0a0b1a (глубокий purple-black)
- bg-elevated: #0f1025
- bg-card: #1a1b35
- border: #2a2b55
- text-primary: #f0f0ff
- text-muted: #8888bb
- neon-magenta: #ff00ff
- neon-cyan: #00ffff
- neon-pink: #ff0080
- neon-yellow: #ffff00
- sun-orange: #ff6600

## Typography
- Display: **VT323**, **Press Start 2P** (пиксельные), или **Orbitron**
- Body: **JetBrains Mono** или **Space Mono**
- Code: **JetBrains Mono**
- Размеры: 12px pixel font, 16px code, 24px H2, 48px H1

## Visual Elements
- Grid with perspective (transform: perspective + rotateX)
- Sun/moon gradient (yellow → orange → magenta → purple)
- Chrome text effect (CSS gradients)
- Retro scanlines (repeating-linear-gradient)
- Stars background (CSS box-shadow)

## Components — Card
- border: 2px solid neon
- bg: тёмный с сеткой
- box-shadow: neon glow
- Углы: прямые (0px) или cut corners
- Если скругление — то только 2px

## Components — Button
- Скошенные углы (clip-path: polygon)
- Neon glow border + text
- Two-tone градиент фона
- Retro cursor blink

## Patterns
- Grid с точками на пересечениях
- Diagonal stripes (полосы под 45°)
- Star field (CSS box-shadow)
- Circle patterns (ретро-геометрия)

## Motion
- Blink animation для курсоров и акцентов
- Scanlines: медленная анимация
- Glitch на hover
- Transitions: step-end, steps()
- Page load: CRT turn-on effect (screen flash)
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
| Secondary | bg transparent, border #2a2b55, text #f0f0ff | bg #0f1025 | border #ff00ff | opacity .4 |
| Ghost | bg transparent, text #8888bb | bg #0f1025 | text #f0f0ff | opacity .4 |
- Radius: 0px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #0a0b1a | #2a2b55 | #f0f0ff |
| Focus | #0a0b1a | #ff00ff (+shadow) | #f0f0ff |
| Error | #0a0b1a | #ff0044 | #ff0044 |
| Disabled | #0f1025 | #2a2b55 | #8888bb |
- Height: 36px | Radius: 0px | Padding: 0 12px

## Card Specs
- Background: #0f1025 | Border: 1px solid #2a2b55 | Radius: 0px
- Padding: 16px | Hover: border #ff00ff (if interactive)

## Navigation
- Link: #8888bb, hover #f0f0ff, active #ff00ff
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