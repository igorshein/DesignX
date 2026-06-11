# DESIGN.md — Dev Tool / CLI

## Brand & Tone
Инструмент для разработчиков. Тон: техничный, без излишеств, с уважением к профессионализму пользователя.

## Visual Aesthetic
Эстетика: **brutalist / industrial**. Моноширинный шрифт везде, минимум цвета, максимум функциональности. Terminal-inspired.

## Color Tokens
- color-bg-surface: #0d1117
- color-bg-elevated: #161b22
- color-border: #30363d
- color-text-primary: #e6edf3
- color-text-muted: #8b949e
- color-text-code: #79c0ff
- color-accent-primary: #3fb950 (terminal green)
- color-accent-hover: #4cd066
- color-warning: #d29922
- color-error: #f85149

## Typography
- Все: **JetBrains Mono** — единственный шрифт
- Scale: 12px code, 14px body, 18px H3, 24px H2, 32px H1
- Line-height: 1.5 для кода, 1.6 для текста

## Components — Sidebar
- File-tree inspired by VS Code
- Expandable folders, файлы с иконками типов
- Active file: underlined or accent color
- Hover: color-border background

## Components — Command Palette
- Trigger: Ctrl+K / Cmd+K
- Search: input в стиле terminal prompt (с $ или >)
- Categories: /commands, /files, /settings
- Fuse.js или similar для fuzzy matching

## Components — Code Block
- Background: #1c2128
- Border-radius: 6px
- Line numbers (опционально)
- Copy button: top-right, ghost style
- Syntax highlighting: One Dark Pro palette

## Motion
- Минимум анимаций: только transitions для hover/focus
- Command palette: slide-down, 150ms ease-out
- Progress bars: indeterminate animation
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
| Primary | bg #3fb950, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #30363d, text #e6edf3 | bg #161b22 | border #3fb950 | opacity .4 |
| Ghost | bg transparent, text #8b949e | bg #161b22 | text #e6edf3 | opacity .4 |
- Radius: 6px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #0d1117 | #30363d | #e6edf3 |
| Focus | #0d1117 | #3fb950 (+shadow) | #e6edf3 |
| Error | #0d1117 | #f85149 | #f85149 |
| Disabled | #161b22 | #30363d | #8b949e |
- Height: 36px | Radius: 6px | Padding: 0 12px

## Card Specs
- Background: #161b22 | Border: 1px solid #30363d | Radius: 6px
- Padding: 16px | Hover: border #3fb950 (if interactive)

## Navigation
- Link: #8b949e, hover #e6edf3, active #3fb950
- Tab active: bottom 2px #3fb950, color #3fb950
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #3fb950 outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #3fb950 for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale