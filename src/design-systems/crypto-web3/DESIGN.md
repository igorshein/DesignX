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
