# DESIGN.md — Dark Glassmorphism

## Brand & Tone
Современный, технологичный, immersive. Стеклянные элементы на тёмном фоне с размытием и свечением.

## Color Tokens
- bg-base: #0a0a0f (глубокий чёрный)
- bg-glass: rgba(255, 255, 255, 0.03) до rgba(255, 255, 255, 0.08)
- glass-border: rgba(255, 255, 255, 0.08)
- glass-blur: blur(20px) до blur(40px)
- text-primary: #f0f0f5
- text-muted: #8888aa
- accent-primary: #00e5ff (циан)
- accent-secondary: #7c4dff (фиолетовый)
- glow-primary: 0 0 20px rgba(0, 229, 255, 0.3)

## Typography
- Display: **Space Grotesk** или **Satoshi** (геометрический, современный)
- Body: **Inter**
- Code: **JetBrains Mono**

## Components — Glass Card
- bg: rgba(255, 255, 255, 0.05)
- backdrop-filter: blur(24px) saturate(1.4)
- border: 1px solid rgba(255, 255, 255, 0.08)
- border-radius: 16px
- shadow: 0 8px 32px rgba(0, 0, 0, 0.3)
- padding: 24px

## Components — Glow Button
- bg: transparent или accent
- box-shadow: accent glow
- border: 1px solid accent @ 40%
- hover: расширить glow (больший radius)
- text: color-accent-primary

## Effects
- Gradient mesh backgrounds (subtle)
- Floating particles (CSS canvas или круги с анимацией)
- Animated gradient borders
- Noise texture overlay (opacity 0.03)
