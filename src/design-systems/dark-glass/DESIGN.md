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
- Body: **JetBrains Mono**
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
| Primary | bg #00e5ff, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border rgba(255,255,255,.08), text #f0f0f5 | bg rgba(255,255,255,.05) | border #00e5ff | opacity .4 |
| Ghost | bg transparent, text #8888aa | bg rgba(255,255,255,.05) | text #f0f0f5 | opacity .4 |
- Radius: 16px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #0a0a0f | rgba(255,255,255,.08) | #f0f0f5 |
| Focus | #0a0a0f | #00e5ff (+shadow) | #f0f0f5 |
| Error | #0a0a0f | #ff1744 | #ff1744 |
| Disabled | rgba(255,255,255,.05) | rgba(255,255,255,.08) | #8888aa |
- Height: 36px | Radius: 16px | Padding: 0 12px

## Card Specs
- Background: rgba(255,255,255,.05) | Border: 1px solid rgba(255,255,255,.08) | Radius: 16px
- Padding: 16px | Hover: border #00e5ff (if interactive)

## Navigation
- Link: #8888aa, hover #f0f0f5, active #00e5ff
- Tab active: bottom 2px #00e5ff, color #00e5ff
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #00e5ff outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #00e5ff for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale