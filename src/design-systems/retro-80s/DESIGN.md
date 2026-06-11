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
