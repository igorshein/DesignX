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
