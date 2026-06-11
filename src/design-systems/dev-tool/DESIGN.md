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
