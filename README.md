# DesignX v2

> Skill & Design System Matcher для ИИ-агентов. Самый большой открытый каталог UI/UX дизайн-скиллов.

**110+ UI/UX навыков · 20 DESIGN.md стартеров · 20 категорий · 15 философий дизайна**

---

## Чем отличается от Open Design?

| | Open Design | DesignX |
|---|---|---|
| Фокус | Генерация артефактов (десктоп) | Каталог + рекомендации (веб) |
| Архитектура | Electron + Next.js + daemon | Чистый HTML/CSS/JS |
| Skills | 54 + 104 templates (много мусора) | **110** — только UI/UX |
| Design Systems | 142 (через awesome-design-md) | **20** авторских DESIGN.md стартеров |
| Философии | нет | **15** философий дизайна |
| Установка | pnpm, Docker, curl | Открыть index.html в браузере |

## Быстрый старт

```bash
# Откройте в браузере
start public/index.html

# Или через сервер
npx serve .
```

## Структура

```
DesignX/
├── DESIGN.md                  # Система дизайна самого DesignX
├── AGENTS.md                  # Инструкции для ИИ-агентов
├── RESEARCH.md                # Исследование (86 KB)
├── README.md
├── public/
│   └── index.html             # Веб-интерфейс (один файл, 0 зависимостей)
└── src/
    ├── data/
    │   └── catalog.json       # Каталог: 110 skills + 20 design systems
    ├── skills/                # SKILL.md для импорта в ИИ-агента
    │   ├── frontend-design/
    │   ├── visual-critique/
    │   ├── design-md/
    │   ├── theme-factory/
    │   ├── accessibility-review/
    │   └── ux-review/
    └── design-systems/        # DESIGN.md стартеры
        ├── corporate-saas/        # B2B SaaS
        ├── consumer-mobile/       # Mobile App
        ├── analytics-dashboard/   # Дашборд
        ├── ecommerce-marketplace/ # Магазин
        ├── landing-retro-future/  # Лендинг
        ├── dev-tool/              # Инструмент разработчика
        ├── material-design-3/     # Material You
        ├── apple-hig/             # Apple HIG
        ├── dark-glass/            # Glassmorphism
        ├── brutalist-dark/        # Brutalism
        ├── scandinavian-light/    # Scandinavian
        ├── cyberpunk-neon/        # Cyberpunk
        ├── japanese-minimal/      # Japanese Minimal
        ├── art-deco-luxury/       # Art Deco
        ├── playful-colorful/      # Playful
        ├── luxury-minimal/        # Luxury Minimal
        ├── editorial-magazine/    # Magazine
        ├── retro-80s/             # Retro 80s
        ├── neumorphism-light/     # Neumorphism Light
        └── neumorphism-dark/      # Neumorphism Dark
```

## Категории навыков

| Категория | Кол-во | Примеры |
|-----------|--------|---------|
| Visual Design | 18 | Color Theory, Typography, Layout, Gestalt |
| UX Research | 10 | User Interviews, Journey Mapping, Heuristic Eval |
| Design System | 12 | Design Tokens, Components, Design Systems Arch |
| Prototyping | 10 | Wireframing, Interaction Design, States |
| Critique | 8 | Design Review, UX Audit, Accessibility Audit |
| Brand | 8 | Brand Identity, Voice & Tone, Guidelines |
| Typography | 7 | Type Scale, Font Pairing, Readability |
| Color Theory | 6 | Psychology, Palette, Gradient, Contrast |
| Layout | 5 | Grid, Hierarchy, White Space |
| Interaction | 5 | Micro-interactions, Feedback, Gestures |
| Mobile | 5 | iOS HIG, Android MD, Touch Targets |
| Motion | 8 | Lottie, GSAP, Scroll, Page Transitions |
| Frontend Dev | 8 | CSS Grid, Flexbox, Fluid Typography |
| Accessibility | 5 | WCAG, ARIA, Screen Reader, Keyboard |
| Data Viz | 5 | Charts, Dashboards, Tables, KPIs |
| Design Tools | 5 | Figma, Auto Layout, Variants |
| AI Tools | 5 | Midjourney, Claude, Cursor |
| Responsive | 4 | Media Queries, Mobile-First, Adaptive |
| Game UI | 4 | HUD, Menus, Inventory |
| Design Ops | 4 | Governance, Handoff, Version Control |

## Дизайн-системы

20 DESIGN.md стартеров — каждая с полным описанием:
- Цветовые токены
- Типографика
- Компоненты (кнопки, карточки, навигация)
- Motion и анимация
- Accessibility правила
- Anti-patterns

## Использование в ИИ-агентах

1. Откройте `public/index.html`
2. Выберите тип продукта → получите рекомендации
3. Выберите философию дизайна
4. Кликните на навыки и дизайн-системы чтобы выбрать
5. Нажмите "Экспорт" — получите Markdown-файл
6. Положите SKILL.md и DESIGN.md в корень репозитория
7. ИИ-агент (Claude Code, Cursor, Codex, OpenCode) прочитает их

## Источники

- [anthropics/skills](https://github.com/anthropics/skills)
- [Owl-Listener/designer-skills](https://github.com/Owl-Listener/designer-skills)
- [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)
- [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
- [bergside/awesome-design-skills](https://github.com/bergside/awesome-design-skills)
- [nexu-io/open-design](https://github.com/nexu-io/open-design) — конкурент

## Лицензия

MIT
