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
- Display: **Space Grotesk** или **Inter**
- Body: **Inter**
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
