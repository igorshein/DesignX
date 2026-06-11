# DESIGN.md — Crypto / Web3 / DeFi

## Aesthetic
cyberpunk

## Tone
Футуристичный, технологичный, надёжный, инновационный

## Colors
bg: #0a0a1a, accent: #7c3aed, accent2: #22d3ee

## Typography
- Font: $(System.Collections.Hashtable.font) (моноширинный)
- Scale: 0.75rem / 0.875rem / 1rem / 1.25rem / 1.75rem
- Line height: 1.0 (headings), 1.5 (body), 1.6 (long reads)

## Spacing
- Unit: 4px (0.25rem)
- Grid: 8px column gutter, 16px section margins
- Card padding: 16px (1rem)

## Radius
- $(System.Collections.Hashtable.radius) — все карточки, кнопки, инпуты

## Color Scheme
- dark theme

## Principles
1. **Futuristic Aesthetic**: gradient-heavy интерфейсы, glassmorphism, glow-эффекты
2. **Wallet-First**: подключение кошелька как primary action, балансы, транзакции
3. **Data Rich**: цены, графики, объёмы, pool-статистика в реальном времени
4. **Trust & Security**: чёткий статус транзакций, confirmations, safety indicators
5. **Accessibility**: контраст 4.5:1 (WCAG AA), focus indicators, readable на градиентах

## Agent Instructions
При генерации интерфейсов для этого продукта:
- Используй $(System.Collections.Hashtable.font) как единственный шрифт
- Цвета из палитры токенов
- Радиус $(System.Collections.Hashtable.radius) для всех интерактивных элементов
- Следуй принципам aesthetic $(System.Collections.Hashtable.aesthetic)
- Соблюдай Футуристичный, технологичный, надёжный, инновационный тон во всех текстах

## Tokens CSS
--bg, --bg-elevated, --text, --text-muted, --accent, --accent2, --border, --success, --error
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
| Primary | bg #7c3aed, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #2a1a4a, text #e8e0ff | bg #12122a | border #7c3aed | opacity .4 |
| Ghost | bg transparent, text #7a6aaa | bg #12122a | text #e8e0ff | opacity .4 |
- Radius: 6px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #0a0a1a | #2a1a4a | #e8e0ff |
| Focus | #0a0a1a | #7c3aed (+shadow) | #e8e0ff |
| Error | #0a0a1a | #ef4444 | #ef4444 |
| Disabled | #12122a | #2a1a4a | #7a6aaa |
- Height: 36px | Radius: 6px | Padding: 0 12px

## Card Specs
- Background: #12122a | Border: 1px solid #2a1a4a | Radius: 6px
- Padding: 16px | Hover: border #7c3aed (if interactive)

## Navigation
- Link: #7a6aaa, hover #e8e0ff, active #7c3aed
- Tab active: bottom 2px #7c3aed, color #7c3aed
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #7c3aed outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #7c3aed for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale