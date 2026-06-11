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
- Body: **JetBrains Mono** или **Inter**
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
