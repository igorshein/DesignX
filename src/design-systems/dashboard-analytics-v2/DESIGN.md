# DESIGN.md — Analytics Dashboard v2

## Aesthetic
brutalist-raw

## Tone
Дата-ориентированный, плотный, профессиональный, аналитический

## Colors
bg: #0d1117, accent: #58a6ff, accent2: #f0883e

## Typography
- Font: $(System.Collections.Hashtable.font) (моноширинный)
- Scale: 0.7rem / 0.8rem / 0.9rem / 1.1rem / 1.35rem
- Line height: 1.0 (headings), 1.4 (body), 1.2 (KPI numbers)

## Spacing
- Unit: 4px (0.25rem)
- Grid: 4px column gutter (compact), 12px section margins
- Card padding: 12px (0.75rem)

## Radius
- $(System.Collections.Hashtable.radius) — все карточки, кнопки, инпуты

## Color Scheme
- dark theme

## Principles
1. **Charts-First**: графики и визуализации как основной контент, не декорация
2. **KPI Cards**: крупные метрики, sparklines, delta indicators (↑↓), mini-charts
3. **Data-Dense Grids**: multi-panel layout, draggable panels, resizable columns
4. **Multi-Panel**: до 4+ панелей на экране, синхронизация фильтров, linked brushing
5. **Performance**: CSS custom properties, no box-shadow, simple transitions (150ms), виртуализация

## Agent Instructions
При генерации интерфейсов для этого продукта:
- Используй $(System.Collections.Hashtable.font) как единственный шрифт
- Цвета из палитры токенов
- Радиус $(System.Collections.Hashtable.radius) для всех интерактивных элементов
- Следуй принципам aesthetic $(System.Collections.Hashtable.aesthetic)
- Соблюдай Дата-ориентированный, плотный, профессиональный, аналитический тон во всех текстах

## Tokens CSS
--bg, --bg-elevated, --text, --text-muted, --accent, --accent2, --border, --success, --error
