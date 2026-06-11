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
- Display: **JetBrains Mono** или **SF Pro**
- Body: **JetBrains Mono**
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
| Primary | bg #4a90d9, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border transparent, text #4a4a4a | bg #f0f2f5 | border #4a90d9 | opacity .4 |
| Ghost | bg transparent, text #888888 | bg #f0f2f5 | text #4a4a4a | opacity .4 |
- Radius: 16px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #e0e5ec | transparent | #4a4a4a |
| Focus | #e0e5ec | #4a90d9 (+shadow) | #4a4a4a |
| Error | #e0e5ec | #e87070 | #e87070 |
| Disabled | #f0f2f5 | transparent | #888888 |
- Height: 36px | Radius: 16px | Padding: 0 12px

## Card Specs
- Background: #e8edf5 | Border: 1px solid transparent | Radius: 16px
- Padding: 16px | Hover: border #4a90d9 (if interactive)

## Navigation
- Link: #888888, hover #4a4a4a, active #4a90d9
- Tab active: bottom 2px #4a90d9, color #4a90d9
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #4a90d9 outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #4a90d9 for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale