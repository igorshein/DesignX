# DESIGN.md — Neumorphism Light

## Brand & Tone
Мягкий, тактильный, пластиковый. Neumorphism на светлом фоне: элементы выглядят как выпуклые/вогнутые части поверхности.

## Color Tokens
- bg-surface: #e0e5ec (основной фон — он же цвет "пластика")
- bg-elevated: #e8edf5
- text-primary: #4a4a4a
- text-muted: #888888
- accent: #4a90d9 (синий, для редких акцентов)
- success: #6bbf8a
- error: #e87070
- shadow-dark: rgba(163, 177, 198, 0.6)
- shadow-light: rgba(255, 255, 255, 0.8)

## Typography
- Display: **Inter** или **SF Pro**
- Body: **Inter**
- Code: **JetBrains Mono**
- Size: 14px body, 16px H3, 20px H2, 28px H1
- Weight: 400 regular body, 600 semibold headings

## Components — Neumorphic Card (convex)
- bg: #e0e5ec
- border-radius: 16px
- box-shadow:
  - 9px 9px 16px rgba(163, 177, 198, 0.6) (outside dark)
  - -9px -9px 16px rgba(255, 255, 255, 0.8) (outside light)
- Нет border (чистый neumorphism)

## Components — Inset (concave, pressed)
- Те же box-shadow, но inset
- Использовать для input, активных состояний

## Components — Button
- Convex в rest, concave в active
- Никаких hover-эффектов кроме переключения convex ↔ concave
- Акцент: цветной текст или иконка на нейтральном фоне

## Anti-Patterns
- НЕ используй градиенты
- НЕ используй outline/borders (это разрушает иллюзию)
- НЕ используй больше 2-3 акцентных цветов
- НЕ используй на тёмных фонах (смотри neumorphism-dark)

## Limitations
- Работает только на однотонном фоне (#e0e5ec)
- Плохая доступность (низкий контраст)
- НЕ для data-heavy интерфейсов
- Хорошо для концептуальных/портфолио проектов

## Accessibility Warning
⚠ Neumorphism по умолчанию имеет плохой контраст. Обязательно:
- accent элементы с контрастом 4.5:1+
- Текст: semibold weight
- Избегать серого текста на сером фоне
