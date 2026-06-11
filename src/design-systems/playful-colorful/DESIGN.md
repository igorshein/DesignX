# DESIGN.md — Playful Colorful

## Brand & Tone
Радостный, дружелюбный, энергичный. Игривый дизайн с яркими цветами и неожиданными элементами.

## Color Tokens
- bg-surface: #fff8e7 (светлый, тёплый)
- bg-elevated: #ffffff
- bg-accent-1: #ff6b6b (коралловый)
- bg-accent-2: #4ecdc4 (бирюзовый)
- bg-accent-3: #ffe66d (жёлтый)
- bg-accent-4: #a8e6cf (мятный)
- text-primary: #2d2d2d
- text-on-accent: #ffffff
- accent-coral: #ff6b6b
- accent-teal: #4ecdc4
- accent-yellow: #ffd93d
- accent-purple: #6c5ce7

## Typography
- Display: **Nunito** или **Fredoka One** (rounded sans-serif)
- Body: **Nunito** или **JetBrains Mono**
- Sizes: fluid, large
- Текст всегда дружелюбный, с эмодзи где уместно

## Shapes
- Organic, blob shapes (clip-path: polygon)
- border-radius: 16-24px на карточках
- Асимметричные формы
- Scribble/brush underline вместо solid

## Components — Card
- border-radius: 20px
- bg: accent цвет или белый
- Тень: 0 4px 20px accent @ 20%
- Цветные иконки-эмодзи
- Наклонённые элементы (transform: rotate)

## Components — Button
- Pill shape (border-radius: 100px)
- Яркий фон, белый текст
- Bounce hover (transform: scale(1.05) + shadow)
- Эмодзи внутри или рядом с текстом

## Illustration Style
- 2D flat illustrations
- Чёрные линии (1-2px)
- Заливка пастельными цветами
- Doodle стиль для декоративных элементов

## Motion
- Elastic overshoot (cubic-bezier spring)
- Staggered entrance animations
- Bounce на нажатие кнопки
- Rotating/ wiggling декоративных элементов
- Confetti на достижения

## Gamification
- XP/level система
- Badges и achievements
- Animated progress bars
- Celebrations (конфетти, звездочки)
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
| Primary | bg #ff6b6b, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #e8e0d0, text #2d2d2d | bg #f0f2f5 | border #ff6b6b | opacity .4 |
| Ghost | bg transparent, text #888888 | bg #f0f2f5 | text #2d2d2d | opacity .4 |
- Radius: 20px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #fff8e7 | #e8e0d0 | #2d2d2d |
| Focus | #fff8e7 | #ff6b6b (+shadow) | #2d2d2d |
| Error | #fff8e7 | #ff6b6b | #ff6b6b |
| Disabled | #f0f2f5 | #e8e0d0 | #888888 |
- Height: 36px | Radius: 20px | Padding: 0 12px

## Card Specs
- Background: #ffffff | Border: 1px solid #e8e0d0 | Radius: 20px
- Padding: 16px | Hover: border #ff6b6b (if interactive)

## Navigation
- Link: #888888, hover #2d2d2d, active #ff6b6b
- Tab active: bottom 2px #ff6b6b, color #ff6b6b
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #ff6b6b outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #ff6b6b for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale