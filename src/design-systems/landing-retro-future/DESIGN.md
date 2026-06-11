# DESIGN.md — Landing / Marketing

## Brand & Tone
Маркетинговый сайт для запуска продукта. Тон: харизматичный, смелый, запоминающийся. Цель — wow-эффект за 3 секунды.

## Visual Aesthetic
Эстетика: **retro-futuristic**. Неоновые акценты на тёмном фоне, сетчатые бэкграунды, моноширинные шрифты, glitch-эффекты и градиенты.

## Color Tokens
- color-bg-surface: #050510
- color-bg-elevated: #0a0a20
- color-border: #1a1a3e
- color-text-primary: #e0e0ff
- color-text-muted: #8080aa
- color-accent-primary: #00f5ff (циан)
- color-accent-secondary: #ff00ff (маджента)
- color-accent-gradient: linear-gradient(135deg, #00f5ff, #ff00ff)

## Typography
- Display: **Space Grotesk** или **Aeroport** (геометрический, футуристический)
- Body: **JetBrains Mono** (моноширинный для контраста)
- Hero: 72px, bold, letter-spacing -2px
- Глитч-эффекты на H1 через css pseudo-elements

## Motion
- Hero-секция: загрузка с typewriter + grid reveal
- Scroll-triggered: параллакс, gradient shift, числа-счетчики
- Hover: neon glow на кнопках и ссылках
- Фоновые частицы (CSS canvas или three.js минимально)

## Sections
1. Hero: product name + tagline + CTA, градиентный бэкграунд
2. Features: 3-column grid с иконками-глифами
3. Demo: анимированный скриншот продукта
4. Pricing: 3 колонки (Starter, Pro, Enterprise)
5. CTA: финальный призыв + email capture

## Anti-Patterns
- НЕ используй стандартные Hero sections с center-aligned текстом
- НЕ убери градиент — это фича данного дизайна, не ошибка
- НЕ делай более 3 CTA на странице
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
| Primary | bg #00f5ff, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #1a1a3e, text #e0e0ff | bg #0a0a20 | border #00f5ff | opacity .4 |
| Ghost | bg transparent, text #8080aa | bg #0a0a20 | text #e0e0ff | opacity .4 |
- Radius: 4px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #050510 | #1a1a3e | #e0e0ff |
| Focus | #050510 | #00f5ff (+shadow) | #e0e0ff |
| Error | #050510 | #ff0044 | #ff0044 |
| Disabled | #0a0a20 | #1a1a3e | #8080aa |
- Height: 36px | Radius: 4px | Padding: 0 12px

## Card Specs
- Background: #0a0a20 | Border: 1px solid #1a1a3e | Radius: 4px
- Padding: 16px | Hover: border #00f5ff (if interactive)

## Navigation
- Link: #8080aa, hover #e0e0ff, active #00f5ff
- Tab active: bottom 2px #00f5ff, color #00f5ff
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #00f5ff outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #00f5ff for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale