# DESIGN.md — Booking / Reservation

## Aesthetic
scandinavian

## Tone
Доверительный, спокойный, ориентированный на конверсию

## Colors
bg: #f0f8ff, accent: #0284c7, accent2: #14b8a6

## Typography
- Font: $(System.Collections.Hashtable.font) (моноширинный)
- Scale: 0.75rem / 0.875rem / 1rem / 1.25rem / 1.5rem
- Line height: 1.0 (headings), 1.5 (body), 1.6 (long reads)

## Spacing
- Unit: 4px (0.25rem)
- Grid: 8px column gutter, 16px section margins
- Card padding: 16px (1rem)

## Radius
- $(System.Collections.Hashtable.radius) — все карточки, кнопки, инпуты

## Color Scheme
- light theme

## Principles
1. **Calendar-Centric**: наглядные календари, date picker, time slots, availability grid
2. **Step Progress**: чёткий wizard с шагами бронирования, progress indicator
3. **Trust Signals**: отзывы, рейтинги, гарантии, безопасные платежи
4. **Conversion-Focused**: крупные CTA, минимум трения до checkout
5. **Accessibility**: контраст 4.5:1 (WCAG AA), focus indicators, clear labels

## Agent Instructions
При генерации интерфейсов для этого продукта:
- Используй $(System.Collections.Hashtable.font) как единственный шрифт
- Цвета из палитры токенов
- Радиус $(System.Collections.Hashtable.radius) для всех интерактивных элементов
- Следуй принципам aesthetic $(System.Collections.Hashtable.aesthetic)
- Соблюдай Доверительный, спокойный, ориентированный на конверсию тон во всех текстах

## Tokens CSS
--bg, --bg-elevated, --text, --text-muted, --accent, --accent2, --border, --success, --error
