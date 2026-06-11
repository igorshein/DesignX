# DESIGN.md — CRM / Enterprise

## Aesthetic
industrial-minimal

## Tone
Профессиональный, эффективный, деловой, сдержанный

## Colors
bg: #f5f6f8, accent: #1a73e8, accent2: #374151

## Typography
- Font: $(System.Collections.Hashtable.font) (моноширинный)
- Scale: 0.75rem / 0.875rem / 1rem / 1.25rem / 1.5rem
- Line height: 1.0 (headings), 1.5 (body), 1.4 (data tables)

## Spacing
- Unit: 4px (0.25rem)
- Grid: 4px column gutter (compact), 16px section margins
- Card padding: 12px (0.75rem) — компактный режим

## Radius
- $(System.Collections.Hashtable.radius) — все карточки, кнопки, инпуты

## Color Scheme
- light theme

## Principles
1. **Density**: высокая информационная плотность, компактные таблицы, плотные дата-гриды
2. **Efficiency**: toolbar-rich интерфейсы, bulk actions, keyboard shortcuts
3. **Hierarchy**: sidebar навигация, чёткая иерархия секций, breadcrumbs
4. **Consistency**: единые токены, размеры ячеек, выравнивание колонок
5. **Performance**: CSS custom properties, no box-shadow, simple transitions (150ms)

## Agent Instructions
При генерации интерфейсов для этого продукта:
- Используй $(System.Collections.Hashtable.font) как единственный шрифт
- Цвета из палитры токенов
- Радиус $(System.Collections.Hashtable.radius) для всех интерактивных элементов
- Следуй принципам aesthetic $(System.Collections.Hashtable.aesthetic)
- Соблюдай Профессиональный, эффективный, деловой, сдержанный тон во всех текстах

## Tokens CSS
--bg, --bg-elevated, --text, --text-muted, --accent, --accent2, --border, --success, --error
