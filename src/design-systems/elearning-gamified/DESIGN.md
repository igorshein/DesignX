# DESIGN.md — E-learning Gamified

## Aesthetic
playful

## Tone
Яркий, мотивирующий, игровой, поощряющий

## Colors
bg: #0d0d1a, accent: #f59e0b, accent2: #10b981

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
1. **Gamification**: XP-баллы, уровни, бейджи, прогресс-бары, достижения
2. **Bright Colors**: золотые и зелёные акценты, яркие CTA, encouraging palette
3. **Progress Visibility**: чёткие индикаторы прогресса, completion status, streaks
4. **Rewards System**: анимации получения наград, конфетти, unlock-эффекты
5. **Playfulness**: игровые элементы, карточки курсов как уровни, leaderboard

## Agent Instructions
При генерации интерфейсов для этого продукта:
- Используй $(System.Collections.Hashtable.font) как единственный шрифт
- Цвета из палитры токенов
- Радиус $(System.Collections.Hashtable.radius) для всех интерактивных элементов
- Следуй принципам aesthetic $(System.Collections.Hashtable.aesthetic)
- Соблюдай Яркий, мотивирующий, игровой, поощряющий тон во всех текстах

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
| Primary | bg #f59e0b, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #2a2a45, text #f0e8ff | bg #1a1a30 | border #f59e0b | opacity .4 |
| Ghost | bg transparent, text #887aaa | bg #1a1a30 | text #f0e8ff | opacity .4 |
- Radius: 6px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #0d0d1a | #2a2a45 | #f0e8ff |
| Focus | #0d0d1a | #f59e0b (+shadow) | #f0e8ff |
| Error | #0d0d1a | #ef4444 | #ef4444 |
| Disabled | #1a1a30 | #2a2a45 | #887aaa |
- Height: 36px | Radius: 6px | Padding: 0 12px

## Card Specs
- Background: #1a1a30 | Border: 1px solid #2a2a45 | Radius: 6px
- Padding: 16px | Hover: border #f59e0b (if interactive)

## Navigation
- Link: #887aaa, hover #f0e8ff, active #f59e0b
- Tab active: bottom 2px #f59e0b, color #f59e0b
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #f59e0b outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #f59e0b for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale