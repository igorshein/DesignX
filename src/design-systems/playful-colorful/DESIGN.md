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
- Body: **Nunito** или **Inter**
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
