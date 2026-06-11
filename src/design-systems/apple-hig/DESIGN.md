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
## Typography Scale
- **H1** — 2rem/2.5rem, 700, JetBrains Mono
- **H2** — 1.5rem/2rem, 700, JetBrains Mono
- **H3** — 1.25rem/1.75rem, 600, JetBrains Mono
- **Body** — 0.9375rem/1.5rem, 400, JetBrains Mono
- **Body Small** — 0.8125rem/1.25rem, 400, JetBrains Mono
- **Caption** — 0.75rem/1rem, 400, JetBrains Mono
- **Label** — 0.8125rem/1rem, 600, JetBrains Mono
- **Code** — 0.8125rem/1.25rem, 400, JetBrains Mono

## Spacing & Grid
- **Base unit**: 4px
- **Spacing scale**: 4px / 8px / 12px / 16px / 24px / 32px / 48px / 64px
- **Content max-width**: 1200px (12-col); **Gutter**: 24px
- **Padding**: 16px (mobile) / 24px (desktop)

## Button Specs
| Variant | Default | Hover | Active | Disabled |
|---|---|---|---|---|
| Primary | bg #007aff, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #c6c6c8, text #000000 | bg #f0f2f5 | border #007aff | opacity .4 |
| Ghost | bg transparent, text #8e8e93 | bg #f0f2f5 | text #000000 | opacity .4 |
- Radius: full | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #ffffff | #c6c6c8 | #000000 |
| Focus | #ffffff | #007aff (+shadow) | #000000 |
| Error | #ffffff | #ff3b30 | #ff3b30 |
| Disabled | #f0f2f5 | #c6c6c8 | #8e8e93 |
- Height: 36px | Radius: full | Padding: 0 12px

## Card Specs
- Background: #f2f2f6 | Border: 1px solid #c6c6c8 | Radius: full
- Padding: 16px | Hover: border #007aff (if interactive)

## Navigation
- Link: #8e8e93, hover #000000, active #007aff
- Tab active: bottom 2px #007aff, color #007aff
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #007aff outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #007aff for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale