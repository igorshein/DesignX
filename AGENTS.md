# AGENTS.md — DesignX

## Что это за проект
DesignX — Skill & Design System Matcher. Легкий веб-инструмент для подбора AI-agent skills и DESIGN.md стартеров под конкретный тип продукта.

## Ключевые файлы
- `DESIGN.md` — дизайн-система проекта (industrial/minimal, JetBrains Mono, темная тема)
- `public/index.html` — одностраничное приложение (чистый HTML/CSS/JS, без зависимостей)
- `src/data/catalog.json` — каталог всех навыков и дизайн-систем
- `src/skills/*/SKILL.md` — отдельные SKILL.md файлы для импорта
- `src/design-systems/*/DESIGN.md` — стартеры дизайн-систем

## Технологии
- Чистый HTML + CSS (CSS custom properties) + Vanilla JS
- Google Fonts: JetBrains Mono (единственный шрифт)
- Никаких фреймворков, билдов, зависимостей

## Эстетика
Industrial / minimal. Моноширинный шрифт, темная тема, минимум декора — максимум контента.

## Важные правила
- НЕ используй Inter, Arial, system-ui — только JetBrains Mono
- НЕ добавляй тени (box-shadow) — только border
- НЕ используй скругления > 6px
- НЕ добавляй сложные анимации — только 150ms transitions
- Скругления кнопок и карточек: 6px

## Цвета
- bg-surface: #0a0b0f
- bg-elevated: #111318
- accent-primary: #4da3ff
- text-primary: #e8ebf0
- text-muted: #7a8290
- text-code: #9cdcfe
