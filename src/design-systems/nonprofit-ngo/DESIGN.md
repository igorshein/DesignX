# DESIGN.md — Non-Profit / NGO / Charity

## Aesthetic
soft-pastel

## Tone
Тёплый, доверительный, человечный, вдохновляющий

## Colors
bg: #f7faf7, accent: #2e7d32, accent2: #1565c0

## Typography
- Font: $(System.Collections.Hashtable.font) (моноширинный)
- Scale: 0.75rem / 0.875rem / 1rem / 1.25rem / 1.5rem
- Line height: 1.0 (headings), 1.6 (body), 1.7 (long reads)

## Spacing
- Unit: 4px (0.25rem)
- Grid: 12px column gutter, 20px section margins
- Card padding: 20px (1.25rem)

## Radius
- $(System.Collections.Hashtable.radius) — все карточки, кнопки, инпуты

## Color Scheme
- light theme

## Principles
1. **Warmth**: мягкие зелёные и синие тона, тёплые оттенки, дружелюбные формы
2. **Readability**: крупные тексты, высокая контрастность, чистый whitespace
3. **Storytelling**: фото-центричные секции, карточки историй, impact-статистика
4. **Trust Signals**: прозрачность сборов, progress bars, отчёты о результатах
5. **Accessibility**: контраст 4.5:1 (WCAG AA), focus indicators, large touch targets

## Agent Instructions
При генерации интерфейсов для этого продукта:
- Используй $(System.Collections.Hashtable.font) как единственный шрифт
- Цвета из палитры токенов
- Радиус $(System.Collections.Hashtable.radius) для всех интерактивных элементов
- Следуй принципам aesthetic $(System.Collections.Hashtable.aesthetic)
- Соблюдай Тёплый, доверительный, человечный, вдохновляющий тон во всех текстах

## Tokens CSS
--bg, --bg-elevated, --text, --text-muted, --accent, --accent2, --border, --success, --error
