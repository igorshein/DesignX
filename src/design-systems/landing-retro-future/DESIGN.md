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
