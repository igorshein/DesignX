# DESIGN.md — API Docs / Dev Portal

## Aesthetic
brutalist-raw

## Tone
Технический, чёткий, code-friendly, минималистичный

## Colors
bg: #0d1117, accent: #58a6ff, accent2: #3fb950

## Typography
- Font: $(System.Collections.Hashtable.font) (моноширинный)
- Scale: 0.75rem / 0.85rem / 1rem / 1.25rem / 1.5rem
- Line height: 1.0 (headings), 1.5 (body), 1.6 (code blocks)

## Spacing
- Unit: 4px (0.25rem)
- Grid: 8px column gutter, 16px section margins
- Card padding: 16px (1rem)

## Radius
- $(System.Collections.Hashtable.radius) — все карточки, кнопки, инпуты

## Color Scheme
- dark theme

## Principles
1. **Code-Friendly**: тёмная редакторская область, syntax highlighting, моноширинный шрифт
2. **Navigation-Centric**: sidebar с иерархией эндпоинтов, search-first подход
3. **Search-Centric**: глобальный поиск, fuzzy matching, быстрые переходы
4. **Minimalism**: минимум декора, максимум контента, чистые секции
5. **Performance**: CSS custom properties, no box-shadow, simple transitions (150ms)

## Agent Instructions
При генерации интерфейсов для этого продукта:
- Используй $(System.Collections.Hashtable.font) как единственный шрифт
- Цвета из палитры токенов
- Радиус $(System.Collections.Hashtable.radius) для всех интерактивных элементов
- Следуй принципам aesthetic $(System.Collections.Hashtable.aesthetic)
- Соблюдай Технический, чёткий, code-friendly, минималистичный тон во всех текстах

## Tokens CSS
--bg, --bg-elevated, --text, --text-muted, --accent, --accent2, --border, --success, --error
