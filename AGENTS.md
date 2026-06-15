# AGENTS.md — DesignX

## Что это за проект
DesignX — Skill & Design System Matcher. Легкий веб-инструмент для подбора AI-agent skills и DESIGN.md стартеров под конкретный тип продукта.

## Обязательный порядок работы
1. Прочитай DESIGN.md ПОЛНОСТЬЮ перед любой задачей. Это единственный источник правды о визуальном языке.
2. Определи тип задачи и активируй соответствующий skill:
   - Новая фича / интерфейс → `frontend-design` + `search-filter` + `data-visualization`
   - Экспорт навыков → следуй UI в `public/index.html`
   - Анализ и критика → `visual-critique`
   - Доступность → `accessibility-audit`
3. Перед выдачей результата пройди чеклист самопроверки. Если хотя бы один пункт провален — исправь ДО выдачи.

## Ключевые файлы
- `DESIGN.md` — дизайн-система проекта (industrial/minimal, JetBrains Mono, темная тема)
- `public/index.html` — одностраничное приложение (чистый HTML/CSS/JS, без зависимостей)
- `src/data/catalog.json` — каталог всех навыков (381) и дизайн-систем (1169)
- `src/data/new-design-systems.json` — новые DS для импорта
- `scripts/optimize-catalog.mjs` — оптимизация: токены, product_types, слияние дубликатов, сжатие
- `scripts/cleanup-data.mjs` — очистка: source, aesthetic, category
- `scripts/import-new-sources.mjs` — добавление новых источников в мету
- `scripts/sync-new-sources.mjs` — синхронизация SKILL.md из новых репозиториев
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
- НЕ используй эмодзи в UI-текстах вместо иконок
- НЕ придумывай цвета «на глаз» — только токены из DESIGN.md
- НЕ выдавай UI без состояний: loading, empty, error — обязательны для каждого компонента

## Цвета
- bg-surface: #0a0b0f
- bg-elevated: #111318
- accent-primary: #4da3ff
- text-primary: #e8ebf0
- text-muted: #7a8290
- text-code: #9cdcfe

## Чеклист самопроверки (перед выдачей)
- [ ] Все цвета/размеры — из токенов DESIGN.md, хардкода нет
- [ ] Контраст текста ≥ 4.5:1 на всех парах
- [ ] Loading / empty / error / hover / focus / disabled — есть
- [ ] Тач-цели ≥ 40px, фокус-кольцо видно с клавиатуры
- [ ] Ни одного пункта из DESIGN.md Anti-Patterns не нарушено
- [ ] Выдан код + 2-4 предложения обоснования решений

## Формат выдачи результата
- Код: семантический HTML + CSS-переменные из токенов DESIGN.md
- К каждому решению — 2-4 предложения обоснования: какую проблему пользователя решает и на какой токен опирается
- Если задача неоднозначна — задай до 3 уточняющих вопросов
