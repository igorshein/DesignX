# DESIGN.md — Japanese Minimal

## Brand & Tone
Спокойный, созерцательный, асимметричный. Философия ваби-саби: красота несовершенного и неполного.

## Color Tokens
- bg-surface: #faf7f2 (тёплый рисовый)
- bg-elevated: #f5f0eb
- bg-dark: #2c2c2c
- border: #d4cfc8
- text-primary: #2c2c2c
- text-muted: #88807a
- accent-red: #bf4a3a (киноварь — бенигара)
- accent-green: #2f5a4a (тёмно-зелёный — фукамедзоси)
- accent-gold: #af8f5a (золотой — кин)
- accent-sumi: #1c1c1c (тушь — суми)

## Typography
- Display: **Noto Serif JP** или **IBM Plex Serif** (шрифт с засечками)
- Body: **Noto Sans JP** или **JetBrains Mono**
- Code: **JetBrains Mono**
- Размеры: 12px caption, 14px body, 18px H3, 24px H2, 32px H1
- Вертикальное письмо для акцентов (writing-mode: vertical-rl)

## Grid
- Асимметричная композиция (правило третей)
- Много пустого пространства (ма — 間)
- Элементы не обязательно выровнены по сетке
- Использование отрицательного пространства как активного элемента

## Visual Elements
- Enso (円相) — круг как символ просветления
- Текстуры: washi (японская бумага), дерево, камень
- Тени: sumi-e ink wash стиль
- Kintsugi (золотой шов) для ошибок и границ

## Components — Card
- bg: белый или натуральный
- border: 1px solid #d4cfc8 или no border
- border-radius: 0
- Асимметричное расположение контента внутри
- Акцент-линия слева (красная или золотая)

## Motion
- Медленные, спокойные анимации (300-500ms)
- Fade transitions, никаких слайдов
- Parallax в стиле "scroll, don't rush"
- reveal: fade-in с задержкой на stagger

## Anti-Patterns
- НЕ используй симметрию
- НЕ используй яркие неоновые цвета
- НЕ используй много текста
- НЕ используй сложные анимации
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
| Primary | bg #bf4a3a, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #d4cfc8, text #2c2c2c | bg #f0f2f5 | border #bf4a3a | opacity .4 |
| Ghost | bg transparent, text #88807a | bg #f0f2f5 | text #2c2c2c | opacity .4 |
- Radius: 0px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #faf7f2 | #d4cfc8 | #2c2c2c |
| Focus | #faf7f2 | #bf4a3a (+shadow) | #2c2c2c |
| Error | #faf7f2 | #a04040 | #a04040 |
| Disabled | #f0f2f5 | #d4cfc8 | #88807a |
- Height: 36px | Radius: 0px | Padding: 0 12px

## Card Specs
- Background: #f5f0eb | Border: 1px solid #d4cfc8 | Radius: 0px
- Padding: 16px | Hover: border #bf4a3a (if interactive)

## Navigation
- Link: #88807a, hover #2c2c2c, active #bf4a3a
- Tab active: bottom 2px #bf4a3a, color #bf4a3a
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #bf4a3a outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #bf4a3a for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale