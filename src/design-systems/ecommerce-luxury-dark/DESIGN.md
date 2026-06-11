# DESIGN.md — E-commerce Luxury Dark

## Aesthetic
dark-glass

## Tone
Премиальный, тёмный, золотой

## Colors
bg: #0d0d12, accent: #d4a84b, accent2: #6b4c8a

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
- dark theme

## Principles
1. **Consistency**: единые токены, отступы, радиусы, типографика
2. **Hierarchy**: чёткая иерархия заголовков, контраст размеров
3. **Accessibility**: контраст 4.5:1 (WCAG AA), focus indicators, ARIA
4. **Performance**: CSS custom properties, no box-shadow, simple transitions (150ms)
5. **Minimalism**: каждый элемент служит цели, никакого декора ради декора

## Agent Instructions
При генерации интерфейсов для этого продукта:
- Используй $(System.Collections.Hashtable.font) как единственный шрифт
- Цвета из палитры токенов
- Радиус $(System.Collections.Hashtable.radius) для всех интерактивных элементов
- Следуй принципам aesthetic $(System.Collections.Hashtable.aesthetic)
- Соблюдай Премиальный, тёмный, золотой тон во всех текстах

## Tokens CSS
--bg, --bg-elevated, --text, --text-muted, --accent, --accent2, --border, --success, --error
