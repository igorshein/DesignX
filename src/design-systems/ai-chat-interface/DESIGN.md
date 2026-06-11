# DESIGN.md — AI Chat / Conversational UI

## Aesthetic
industrial-minimal

## Tone
Дружелюбный, умный, отзывчивый, современный

## Colors
bg: #0f1117, accent: #7c3aed, accent2: #6366f1

## Typography
- Font: $(System.Collections.Hashtable.font) (моноширинный)
- Scale: 0.75rem / 0.875rem / 1rem / 1.25rem / 1.5rem
- Line height: 1.0 (headings), 1.6 (body), 1.6 (long reads)

## Spacing
- Unit: 4px (0.25rem)
- Grid: 8px column gutter, 16px section margins
- Card padding: 16px (1rem)

## Radius
- $(System.Collections.Hashtable.radius) — все карточки, кнопки, инпуты

## Color Scheme
- dark theme

## Principles
1. **Message Bubbles**: чёткое разделение user/assistant, отличные стили сообщений
2. **Streaming States**: live cursor, animated dots, partial content reveal
3. **Input Bar**: фиксированная панель ввода, auto-resize, отправка по Enter
4. **Assistant Branding**: аватар, имя, статус, характер assistant-а
5. **Accessibility**: контраст 4.5:1 (WCAG AA), focus indicators, keyboard navigation

## Agent Instructions
При генерации интерфейсов для этого продукта:
- Используй $(System.Collections.Hashtable.font) как единственный шрифт
- Цвета из палитры токенов
- Радиус $(System.Collections.Hashtable.radius) для всех интерактивных элементов
- Следуй принципам aesthetic $(System.Collections.Hashtable.aesthetic)
- Соблюдай Дружелюбный, умный, отзывчивый, современный тон во всех текстах

## Tokens CSS
--bg, --bg-elevated, --text, --text-muted, --accent, --accent2, --border, --success, --error
