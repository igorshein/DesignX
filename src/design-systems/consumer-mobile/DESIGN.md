# DESIGN.md — Consumer Mobile App

## Brand & Tone
Мобильное приложение для массовой аудитории. Тон: дружелюбный, человечный, простой. Интерфейс должен ощущаться лёгким и приятным.

## Visual Aesthetic
Эстетика: **soft / pastel**. Круглые формы, скругления 16px, пастельные тона, мягкие тени. Много иллюстраций и анимированных элементов.

## Color Tokens
- color-bg-surface: #faf5ff (светло-фиолетовый подтон)
- color-bg-elevated: #ffffff
- color-border: #e9ddf4
- color-text-primary: #2d1b4e
- color-text-muted: #7c6a9a
- color-accent-primary: #8b5cf6 (фиолетовый)
- color-accent-secondary: #f472b6 (розовый)
- color-success: #34d399
- color-error: #fb7185

## Typography
- Display Font: **Satoshi** или **Cabinet Grotesk** (геометрический гротеск)
- Body Font: **Inter** (читаемый, доступный)
- Headlines: Bold, 32px
- Body: Regular, 16px

## Platform Rules
- iOS: safe areas, notch, gesture navigation
- Touch targets: минимум 48×48pt
- Bottom navigation bar
- Haptic feedback на взаимодействия

## Motion
- Page transitions: slide-left/right (iOS native)
- Micro-interactions: subtle scale на button press
- Lottie анимации для пустых состояний и загрузок
