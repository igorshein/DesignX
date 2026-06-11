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
- Body Font: **JetBrains Mono** (читаемый, доступный)
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
| Primary | bg #8b5cf6, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #e9ddf4, text #2d1b4e | bg #f0f2f5 | border #8b5cf6 | opacity .4 |
| Ghost | bg transparent, text #7c6a9a | bg #f0f2f5 | text #2d1b4e | opacity .4 |
- Radius: 16px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #faf5ff | #e9ddf4 | #2d1b4e |
| Focus | #faf5ff | #8b5cf6 (+shadow) | #2d1b4e |
| Error | #faf5ff | #fb7185 | #fb7185 |
| Disabled | #f0f2f5 | #e9ddf4 | #7c6a9a |
- Height: 36px | Radius: 16px | Padding: 0 12px

## Card Specs
- Background: #ffffff | Border: 1px solid #e9ddf4 | Radius: 16px
- Padding: 16px | Hover: border #8b5cf6 (if interactive)

## Navigation
- Link: #7c6a9a, hover #2d1b4e, active #8b5cf6
- Tab active: bottom 2px #8b5cf6, color #8b5cf6
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #8b5cf6 outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #8b5cf6 for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale