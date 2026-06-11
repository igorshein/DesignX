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
- Body: **system-ui**, **Inter**
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
