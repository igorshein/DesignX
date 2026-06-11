# DESIGN.md — Neumorphism Dark

## Brand & Tone
Тёмный neumorphism: мягкие светящиеся элементы на глубоком тёмном фоне.

## Color Tokens
- bg-surface: #1a1a2e (основной фон)
- bg-elevated: #1e1e35
- text-primary: #e0e0f0
- text-muted: #8888aa
- accent: #7c4dff (фиолетовый)
- success: #4ac7a2
- error: #ff6b6b
- shadow-dark: rgba(0, 0, 0, 0.5)
- shadow-light: rgba(255, 255, 255, 0.05)

## Typography
- Display: **Space Grotesk** или **JetBrains Mono**
- Body: **JetBrains Mono**
- Code: **JetBrains Mono**

## Components — Neumorphic Card (convex)
- bg: #1a1a2e
- border-radius: 12px
- box-shadow:
  - 6px 6px 12px rgba(0, 0, 0, 0.5)
  - -6px -6px 12px rgba(255, 255, 255, 0.05)

## Components — Inset
- Те же shadow, inset
- Для input полей и активных состояний

## Glow Elements
- accent: дополнительный box-shadow: 0 0 15px rgba(124, 77, 255, 0.3)
- Допустимо для кнопок CTA и состояний hover
- Не злоупотреблять

## Motion
- Convex ↔ concave переключение при клике
- glow: плавное появление (200ms)
- Без анимаций для остальных элементов
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
| Primary | bg #7c4dff, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border transparent, text #e0e0f0 | bg #1e1e35 | border #7c4dff | opacity .4 |
| Ghost | bg transparent, text #8888aa | bg #1e1e35 | text #e0e0f0 | opacity .4 |
- Radius: 12px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #1a1a2e | transparent | #e0e0f0 |
| Focus | #1a1a2e | #7c4dff (+shadow) | #e0e0f0 |
| Error | #1a1a2e | #ff6b6b | #ff6b6b |
| Disabled | #1e1e35 | transparent | #8888aa |
- Height: 36px | Radius: 12px | Padding: 0 12px

## Card Specs
- Background: #1e1e35 | Border: 1px solid transparent | Radius: 12px
- Padding: 16px | Hover: border #7c4dff (if interactive)

## Navigation
- Link: #8888aa, hover #e0e0f0, active #7c4dff
- Tab active: bottom 2px #7c4dff, color #7c4dff
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #7c4dff outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #7c4dff for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale