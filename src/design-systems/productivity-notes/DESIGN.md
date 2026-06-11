# DESIGN.md — Productivity / Notes App

## Aesthetic
industrial-minimal

## Tone
Минималистичный, быстрый, редактор-ориентированный, чистый

## Colors
bg: #fafafa, accent: #4da3ff, accent2: #7c4dff

## Typography
- Font: $(System.Collections.Hashtable.font) (моноширинный)
- Scale: 0.75rem / 0.875rem / 1rem / 1.25rem / 1.5rem
- Line height: 1.0 (headings), 1.7 (body — для читабельности), 1.6 (long reads)

## Spacing
- Unit: 4px (0.25rem)
- Grid: 8px column gutter, 24px section margins
- Card padding: 16px (1rem)

## Radius
- $(System.Collections.Hashtable.radius) — все карточки, кнопки, инпуты

## Color Scheme
- light theme (dark mode variant available)

## Principles
1. **Editor-First**: минимальный UI, фокус на контент, distraction-free режим
2. **Speed**: быстрые переходы, instant save, минимальная задержка отклика
3. **Clean Whitespace**: большие отступы, чистый фон, минимум границ
4. **Hierarchy**: чёткая структура заголовков, folder/tag организация, search
5. **Performance**: CSS custom properties, no box-shadow, simple transitions (150ms)

## Agent Instructions
При генерации интерфейсов для этого продукта:
- Используй $(System.Collections.Hashtable.font) как единственный шрифт
- Цвета из палитры токенов
- Радиус $(System.Collections.Hashtable.radius) для всех интерактивных элементов
- Следуй принципам aesthetic $(System.Collections.Hashtable.aesthetic)
- Соблюдай Минималистичный, быстрый, редактор-ориентированный, чистый тон во всех текстах

## Tokens CSS
--bg, --bg-elevated, --text, --text-muted, --accent, --accent2, --border, --success, --error
