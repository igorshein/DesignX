# DESIGN.md — Brutalist Dark

## Brand & Tone
Брутальный, честный, без компромиссов. Максимальная функциональность, минимум эстетических уступок.

## Color Tokens
- bg-base: #000000
- bg-elevated: #111111
- bg-inverse: #ffffff
- border: #333333
- text-primary: #ffffff
- text-muted: #666666
- accent: цвет на выбор (красный #ff0000, зелёный #00ff00, жёлтый #ffff00)
- error: совпадает с accent если красный, иначе #ff3333

## Typography
- Display: **system-ui**, **Impact**, **Helvetica Now**, или **Arial Black**
- Body: **system-ui**, **JetBrains Mono**
- Code: **JetBrains Mono**
- Size: 16px base, 64px hero, 10px captions
- Weight: bold везде, где возможно

## Corners & Borders
- border-radius: 0 (везде)
- border: solid, 1-4px, часто цвет "как есть"
- outline: только важное, жирное

## Grid
- Single column или максимально простая сетка
- Никаких сложных композиций
- Элементы прижаты к краям
- Пробелы: 0 или очень большие (48px+)

## Colors Philosophy
- Один accent цвет. Один. Не больше.
- Никаких градиентов
- Никаких теней (box-shadow: none)
- Ч/Б основа + один цвет для акцентов

## Anti-Patterns (Required Reading)
- НЕ используй border-radius > 0
- НЕ используй box-shadow
- НЕ используй градиенты
- НЕ используй сложные hover-эффекты
- НЕ используй иллюстрации и украшения
- НЕ используй больше 2 шрифтов

## Accessibility
- Максимальный контраст (7:1+)
- Focus: жирная обводка или изменение фона
- Размер текста: минимум 14px body
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
| Primary | bg #ff0000, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #333333, text #ffffff | bg #111111 | border #ff0000 | opacity .4 |
| Ghost | bg transparent, text #666666 | bg #111111 | text #ffffff | opacity .4 |
- Radius: 0px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #000000 | #333333 | #ffffff |
| Focus | #000000 | #ff0000 (+shadow) | #ffffff |
| Error | #000000 | #ff0000 | #ff0000 |
| Disabled | #111111 | #333333 | #666666 |
- Height: 36px | Radius: 0px | Padding: 0 12px

## Card Specs
- Background: #111111 | Border: 1px solid #333333 | Radius: 0px
- Padding: 16px | Hover: border #ff0000 (if interactive)

## Navigation
- Link: #666666, hover #ffffff, active #ff0000
- Tab active: bottom 2px #ff0000, color #ff0000
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #ff0000 outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #ff0000 for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale