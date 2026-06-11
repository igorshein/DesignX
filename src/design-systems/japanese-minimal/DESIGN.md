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
- Body: **Noto Sans JP** или **Inter**
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
