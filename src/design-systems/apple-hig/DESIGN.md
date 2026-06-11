# DESIGN.md — Apple HIG

## Brand & Tone
Чистый, интуитивный, человекоцентричный. Apple Human Interface Guidelines: дизайн, который ощущается естественным.

## Color Tokens
- bg-system: systemBackground, secondarySystemBackground, tertiarySystemBackground
- bg-grouped: systemGroupedBackground
- label: label, secondaryLabel, tertiaryLabel, quaternaryLabel
- fill: systemFill, secondarySystemFill
- accent: tintColor (blue #007AFF системный)
- separator: separator, opaqueSeparator

## Typography
- UI: **SF Pro** (variable, от 9pt до 32pt)
- Display: **SF Display** (для крупных заголовков)
- Monospace: **SF Mono** (для кода и цифр)
- Text styles: largeTitle (34), title1 (28), title2 (22), title3 (20), headline (17), body (17), callout (16), subheadline (15), footnote (13), caption1 (12), caption2 (11)
- Dynamic Type: все размеры адаптируются под настройки доступности

## Spacing
- База 8pt: все отступы кратны 8
- Padding внутри элементов: 16pt (minimum touch-friendly)

## Components — Buttons
- Pill shape (full corner radius)
- States: default, highlighted, focused, disabled
- Haptic Feedback: selection, impact, notification
- Min height: 44pt (touch target)

## Navigation
- Navigation Bar: large title (опционально), back button, actions
- Tab Bar: 5 tabs max, always visible
- Search Bar: integrated or modal

## Gestures
- Swipe back (edge swipe)
- Swipe to delete
- 3D Touch / Haptic Touch
- Drag and drop

## Dark Mode
- Colors invert intelligently (not just negative)
- SF Symbols: всегда читаемы в обоих режимах
- Vibrancy: blur + material effects

## Motion
- Spring animations: естественные, физические
- Page transitions: push/pop (navigation), modal (vertical), sheet
- Reduce Motion: уважать настройки пользователя
