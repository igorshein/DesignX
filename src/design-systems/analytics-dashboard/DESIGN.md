# DESIGN.md — Analytics Dashboard

## Brand & Tone
Аналитическая платформа для профессионалов. Тон: точный, строгий, data-driven. Каждый пиксель служит данным.

## Visual Aesthetic
Эстетика: **brutalist / raw**. Монохромная палитра, высокая плотность информации, системный шрифт. Никаких украшений — только данные и инструменты.

## Color Tokens
- color-bg-surface: #0d1117 (GitHub-dark inspired)
- color-bg-elevated: #161b22
- color-bg-card: #1c2128
- color-border: #30363d
- color-text-primary: #e6edf3
- color-text-muted: #8b949e
- color-accent-primary: #58a6ff
- color-accent-green: #3fb950
- color-accent-orange: #d29922
- color-accent-red: #f85149
- color-accent-purple: #bc8cff

## Typography
- UI Font: **Inter** (reading)
- Data Font: **JetBrains Mono** (все цифры, таблицы, коды)
- Scale: 11px data labels, 13px body, 16px titles, 24px page headers

## Components — Charts
- Подписи: JetBrains Mono, 11px, color-text-muted
- Grid lines: dashed, color-border
- Tooltip: bg color-bg-elevated, border color-border, padding 8px 12px
- Анимация: только initial draw, без постоянных обновлений

## Components — KPI Card
- Value: 32px, bold, color-text-primary
- Label: 12px, color-text-muted, uppercase
- Delta: положительная color-accent-green, отрицательная color-accent-red
- Border: 1px solid color-border, radius 6px

## Data Density Rules
- Минимум пустого пространства между данными
- Полосы прокрутки всегда видимы
- Пользователь сам настраивает плотность (comfortable / compact)
