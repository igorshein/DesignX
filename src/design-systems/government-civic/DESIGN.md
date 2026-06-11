# DESIGN.md — Government / Civic Tech

## Aesthetic
industrial-minimal

## Tone
Доступный, официальный, информационно-плотный

## Colors
bg: #f8f9fa, accent: #2563eb, accent2: #1e40af

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
1. **Accessibility**: контраст 4.5:1 (WCAG AA/AAA), focus indicators, skip links
2. **Hierarchy**: чёткая иерархия заголовков, breadcrumbs, ясная навигация
3. **Consistency**: единые токены, отступы, радиусы, типографика
4. **Performance**: CSS custom properties, no box-shadow, simple transitions (150ms)
5. **Information Density**: плотные дата-таблицы, чёткие колонки, минимальный визуальный шум

## Agent Instructions
При генерации интерфейсов для этого продукта:
- Используй $(System.Collections.Hashtable.font) как единственный шрифт
- Цвета из палитры токенов
- Радиус $(System.Collections.Hashtable.radius) для всех интерактивных элементов
- Следуй принципам aesthetic $(System.Collections.Hashtable.aesthetic)
- Соблюдай Доступный, официальный, информационно-плотный тон во всех текстах

## Tokens CSS
--bg, --bg-elevated, --text, --text-muted, --accent, --accent2, --border, --success, --error
