# DESIGN.md — DesignX (Cosmos Redesign)

## Brand & Tone
DesignX — каталог AI-skills и DESIGN.md стартеров. Интерфейс вдохновлён эстетикой Cosmos: чистота, воздух, тёплые нейтральные тона, акцент на контент. Минимум UI-шума — максимум читаемости и сканируемости.

Тон: спокойный, экспертный, визуально-ориентированный.

## Visual Aesthetic
Эстетика: **clean editorial / warm minimal** — светлый фон (#f7f5f3), тёплый бумажный оттенок, почти чёрный текст (#0d0d0d). Тонкие полупрозрачные бордеры, отсутствие теней, крупная типографика, большие отступы. Наследие Cosmos, SSENSE, Aesop — editorial-подход к каталогу.

## Color Tokens
- color-bg-paper: #f7f5f3 (тёплый бумажный фон страницы)
- color-bg-surface: #ffffff (карточки, панели, elevated поверхности)
- color-bg-elevated: #fcfbfa (лёгкий подъём над фоном)
- color-bg-hover: rgba(13,13,13,0.04)
- color-border: rgba(13,13,13,0.10) (тонкие разделители, 0.5px)
- color-border-hover: rgba(13,13,13,0.20)
- color-text-primary: #0d0d0d (почти чёрный)
- color-text-muted: #6e6a69 (тёплый серый для второстепенного)
- color-text-dim: #9a9796 (самый светлый текст)
- color-accent: #2965f6 (синий — ссылки, CTA, акценты)
- color-accent-hover: #1a4fd0
- color-focus-ring: rgba(41,101,246,0.2)
- color-success: #00af5d
- color-warning: #e8a838
- color-error: #bd3c1f

Все текстовые цвета обеспечивают контраст ≥ 4.5:1 относительно фона.

## Typography
- UI Font: **Inter** (sans-serif) — чистый геометрический гротеск, аналогичен CosmosOracle
- Code Font: **JetBrains Mono** — для сниппетов, путей, токенов
- Шкала (mobile-first, rem-based):
  - Display: 3rem / 1.1, weight 500
  - H1: 2rem / 1.2, weight 500
  - H2: 1.5rem / 1.3, weight 500
  - H3: 1.125rem / 1.4, weight 500
  - Body: 0.9375rem / 1.6, weight 400
  - Small: 0.8125rem / 1.5, weight 400
  - Code: 0.8125rem / 1.5, weight 400
  - Label: 0.6875rem / 1.4, weight 500, uppercase, letter-spacing 0.5px

## Spacing & Grid
- Base unit: 4px (0.25rem)
- Scale: 2 (8px), 4 (16px), 6 (24px), 8 (32px), 10 (40px), 12 (48px), 16 (64px), 20 (80px)
- Контейнер: max-width 80rem (1280px), padding inline 1.5rem (mobile) / 2.5rem (desktop)
- Карточки: padding 1.25rem 1.5rem, gap 1rem
- Горизонтальные отступы между секциями: 2.5rem

## Components — Cards
- Фон: color-bg-surface
- Border: 0.5px solid color-border
- Radius: 0px (прямые углы, как в Cosmos)
- Hover: bg color-bg-hover, transition 150ms ease
- Padding: 1.25rem 1.5rem
- Заголовок: H3, color-text-primary
- Описание: Body, color-text-muted
- Теги: inline, background color-bg-paper, border none, radius 0, padding 2px 10px, small font

## Components — Buttons
- Min-height: 40px (touch target), padding: 0 20px
- Radius: 0px
- Primary: bg color-text-primary, text color-bg-surface, weight 500
- Primary hover: opacity 0.85
- Secondary: transparent bg, border 0.5px solid color-border, text color-text-primary
- Secondary hover: border-color color-border-hover
- Ghost: transparent, text color-text-muted, hover text color-text-primary

## Components — Inputs & Selects
- Height: 44px
- Padding: 0 16px
- Background: color-bg-surface
- Border: 0.5px solid color-border
- Radius: 0px
- Placeholder: color-text-dim
- Focus: border-color color-accent, ring 2px color-focus-ring

## Components — Nav/Tabs
- Навигация: inline, без подчёркиваний, активный пункт — weight 500 + color-text-primary
- Неактивный: color-text-muted
- Hover: color-text-primary
- Никаких нижних линий, бордеров — только изменение веса и цвета

## Components — States (обязательны для каждого компонента)
- **Loading:** спиннер 28px, border-top color-text-primary, rotate .8s
- **Empty:** текст "Nothing found" + кнопка сброса
- **Error:** текст ошибки + кнопка повтора
- **Hover:** bg color-bg-hover или color-text-primary (для текста)
- **Focus:** ring 2px color-focus-ring
- **Disabled:** opacity .4, cursor not-allowed

## Motion
- Все переходы: 150ms ease
- Hover/focus: 100ms ease
- Никаких сложных анимаций
- prefers-reduced-motion: отключать анимации

## Accessibility
- Контраст текста ≥ 4.5:1 (WCAG AA)
- Фокус-индикаторы видимы на всех интерактивных элементах
- Семантический HTML
- Клавиатурная навигация
- ARIA labels для иконок

## Anti-Patterns
- НЕ используй box-shadow — только border
- НЕ используй скругления > 0px (кроме бейджей)
- НЕ используй яркие/насыщенные цвета — только палитра из токенов
- НЕ используй тёмную тему (этот дизайн только light mode)
- НЕ используй градиенты, glassmorphism
- НЕ ставь фильтрацию по кнопке "Применить" — только мгновенная oninput
- НЕ показывай ошибки в alert() — только inline
- НЕ используй эмодзи в UI — только текст
