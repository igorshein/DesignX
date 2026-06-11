# DESIGN.md — Dating App / Social Discovery

## Aesthetic
soft-pastel

## Tone
Тёплый, романтичный, дружелюбный, современный

## Colors
bg: #fef8f9, accent: #ff4d6d, accent2: #ff8fa3

## Typography
- Font: $(System.Collections.Hashtable.font) (моноширинный)
- Scale: 0.75rem / 0.875rem / 1rem / 1.25rem / 1.75rem
- Line height: 1.0 (headings), 1.5 (body), 1.6 (long reads)

## Spacing
- Unit: 4px (0.25rem)
- Grid: 12px column gutter, 20px section margins
- Card padding: 20px (1.25rem)

## Radius
- $(System.Collections.Hashtable.radius) — карточки, кнопки, инпуты

## Color Scheme
- light theme

## Principles
1. **Image-Forward**: крупные фотографии, overlay-текст, swipe-жесты
2. **Soft Aesthetic**: пастельные градиенты, скруглённые углы, тёплые тона
3. **Card-Based**: карточки профилей, карточки matching, анимации стека
4. **Accessibility**: контраст 4.5:1 (WCAG AA), focus indicators, large touch targets
5. **Trust Signals**: верифицированные профили, понятный flow, безопасность

## Agent Instructions
При генерации интерфейсов для этого продукта:
- Используй $(System.Collections.Hashtable.font) как единственный шрифт
- Цвета из палитры токенов
- Радиус $(System.Collections.Hashtable.radius) для всех интерактивных элементов
- Следуй принципам aesthetic $(System.Collections.Hashtable.aesthetic)
- Соблюдай Тёплый, романтичный, дружелюбный, современный тон во всех текстах

## Tokens CSS
--bg, --bg-elevated, --text, --text-muted, --accent, --accent2, --border, --success, --error
