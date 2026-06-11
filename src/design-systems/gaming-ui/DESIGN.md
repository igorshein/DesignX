# DESIGN.md — Gaming Interface

## Aesthetic
cyberpunk

## Tone
Яркий, иммерсивный, энергичный, игровой

## Colors
bg: #0a0a12, accent: #ff0044, accent2: #00ffcc

## Typography
- Font: $(System.Collections.Hashtable.font) (моноширинный)
- Scale: 0.75rem / 0.875rem / 1rem / 1.25rem / 2rem
- Line height: 1.0 (headings), 1.4 (body), 1.6 (long reads)

## Spacing
- Unit: 4px (0.25rem)
- Grid: 8px column gutter, 16px section margins
- Card padding: 16px (1rem)

## Radius
- $(System.Collections.Hashtable.radius) — все карточки, кнопки, инпуты

## Color Scheme
- dark theme

## Principles
1. **Immersion**: глубокие тёмные фоны, неоновые акценты, layered интерфейсы
2. **Vibrancy**: насыщенные цвета, glow-эффекты, динамическая подсветка
3. **Playfulness**: игровая типографика, прогресс-бары, XP-индикаторы
4. **Readability**: контрастные тексты на ярких фонах, чёткие HUD-элементы
5. **Performance**: CSS custom properties, minimal box-shadow, 150ms transitions

## Agent Instructions
При генерации интерфейсов для этого продукта:
- Используй $(System.Collections.Hashtable.font) как единственный шрифт
- Цвета из палитры токенов
- Радиус $(System.Collections.Hashtable.radius) для всех интерактивных элементов
- Следуй принципам aesthetic $(System.Collections.Hashtable.aesthetic)
- Соблюдай Яркий, иммерсивный, энергичный, игровой тон во всех текстах

## Tokens CSS
--bg, --bg-elevated, --text, --text-muted, --accent, --accent2, --border, --success, --error
