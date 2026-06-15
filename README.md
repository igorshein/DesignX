# DesignX v2

> Skill & Design System Matcher для ИИ-агентов. Самый большой открытый каталог UI/UX дизайн-скиллов.

**381 UI/UX навык · 1169 DESIGN.md стартеров · 20 категорий · 15 философий дизайна · 15+ источников**

---

## Чем отличается от Open Design?

| | Open Design | DesignX |
|---|---|---|
| Фокус | Генерация артефактов (десктоп) | Каталог + рекомендации (веб) |
| Архитектура | Electron + Next.js + daemon | Чистый HTML/CSS/JS |
| Skills | 54 + 104 templates (много мусора) | **371** — только UI/UX |
| Design Systems | 142 (через awesome-design-md) | **864** (+ WebDesignHot, nexu-io, ndroussi и др.) |
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
    │   └── catalog.json       # Каталог: 371 skill + 864 design systems
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
| Visual Design | 70 | UI Design, Frontend Engineering, Design Systems |
| Interaction | 32 | Micro-interactions, Feedback, Gestures |
| UX Research | 31 | User Interviews, Journey Mapping, Heuristic Eval |
| Media Production | 23 | Video, Animation, Image Generation |
| Brand | 22 | Brand Identity, Voice & Tone, Guidelines |
| Design System | 20 | Design Tokens, Components, Architecture |
| Critique | 18 | Design Review, UX Audit, Accessibility Audit |
| Design Ops | 16 | Governance, Handoff, Version Control |
| Motion | 14 | GSAP, Lottie, Scroll, Page Transitions |
| Frontend Dev | 14 | CSS Grid, Flexbox, Fluid Typography |
| Prototyping | 13 | Wireframing, Interaction Design, States |
| Documentation | 11 | PDF, PPTX, Templates |
| Accessibility | 9 | WCAG, ARIA, Screen Reader, Keyboard |
| Layout | 9 | Grid, Hierarchy, White Space |
| Color Theory | 8 | Psychology, Palette, Gradient, Contrast |
| Responsive | 7 | Media Queries, Mobile-First, Adaptive |
| Creative Art | 7 | Algorithmic Art, Hand-drawn, Pixel |
| Typography | 6 | Type Scale, Font Pairing, Readability |
| Content Templates | 6 | Editorial, Magazine, Deck |
| Mobile | 5 | iOS HIG, Android MD, Touch Targets |
| Prompt Engineering | 5 | Brainstorming, Enhancement |
| Image Editing | 5 | Fal.ai tools, Photo editing |
| Design Tools | 4 | Figma, Auto Layout, Variants |
| Tool Automation | 4 | Browser agents, Domain tools |
| Marketing | 4 | Ads, Competitive Analysis |
| Data Viz | 5 | Charts, Dashboards, Tables, KPIs |

## Дизайн-системы

**1169 DESIGN.md** из 15+ источников — от брендов (Apple, Airbnb, Stripe, Linear, Netflix, Instagram) до эстетик (Glassmorphism, Brutalism, Cosmic):

- **WebDesignHot** (393) — дизайн-системы реальных брендов
- **ndroussi/design-md-for-ai** (156) — дизайн-системы для ИИ-агентов
- **kwakseongjae/oh-my-design** (153) — OmD дизайн-системы
- **nexu-io/open-design** (149) — эстетики и стили
- **awesome-design-md** (74) — коллекция VoltAgent
- **awesome-design-skills** (67) — скиллы и стартеры
- **Meliwat/awesome-ios-design-md** (152) — iOS-дизайн-системы (social, travel, productivity, fitness, dating, video, messaging, misc, music, food, finance)
- **netsus/oh-my-design** (22) — OmD v0.1 философские дизайн-системы
- **soulcore-dev** (7), **google-labs-code** (3), **dimabraven** (1) — авторские подборки
- **Новые:** albemala/design-md-library, educlopez/design-bites, fabricioctelles/vibe-styles и др.

Каждая дизайн-система содержит:
- Цветовые токены
- Типографика
- Компоненты
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

Design Systems:
- [WebDesignHot/design-md](https://github.com/WebDesignHot/design-md) — 393 дизайн-системы брендов
- [ndroussi/design-md-for-ai](https://github.com/ndroussi/design-md-for-ai) — 156 дизайн-систем для ИИ
- [kwakseongjae/oh-my-design](https://github.com/kwakseongjae/oh-my-design) — 153 OmD дизайн-системы
- [nexu-io/open-design](https://github.com/nexu-io/open-design) — 149 эстетик + 155 скиллов
- [Meliwat/awesome-ios-design-md](https://github.com/Meliwat/awesome-ios-design-md) — 152 iOS-дизайн-систем
- [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) — 74 дизайн-системы
- [bergside/awesome-design-skills](https://github.com/bergside/awesome-design-skills) — 67 скиллов
- [netsus/oh-my-design](https://github.com/netsus/oh-my-design) — 22 OmD v0.1 дизайн-системы
- [albemala/design-md-library](https://github.com/albemala/design-md-library) — Open library DESIGN.md
- [educlopez/design-bites](https://github.com/educlopez/design-bites) — Curated DESIGN.md для сайтов
- [soulcore-dev/soul-design-md](https://github.com/soulcore-dev/soul-design-md) — 7 авторских
- [google-labs-code/design.md](https://github.com/google-labs-code/design.md) — официальные примеры spec
- [dimabraven/design-md](https://github.com/dimabraven/design-md) — авторские подборки

Skills:
- [carmahhawwari/ui-design-brain](https://github.com/carmahhawwari/ui-design-brain) (819★) — UI компоненты и паттерны
- [zeke/swiss-design-skill](https://github.com/zeke/swiss-design-skill) (106★) — Swiss International Style
- [content-designer/ux-writing-skill](https://github.com/content-designer/ux-writing-skill) (112★) — UX-райтинг
- [cnbb-design/ai-design](https://github.com/cnbb-design/ai-design) — Visual Design на перцептуальной науке
- [uxKero/anydesign](https://github.com/uxKero/anydesign) (109★) — Генератор DESIGN.md из скриншотов
- [jaywilburn/refactoring-ui-skill](https://github.com/jaywilburn/refactoring-ui-skill) — Refactoring UI
- [Ilm-Alan/frontend-design](https://github.com/Ilm-Alan/frontend-design) (55★) — Frontend Design
- [albertzhangz10/design-system-skill](https://github.com/albertzhangz10/design-system-skill) (20★) — Генерация дизайн-систем
- [anthropics/skills](https://github.com/anthropics/skills)
- [Owl-Listener/designer-skills](https://github.com/Owl-Listener/designer-skills)
- [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)
- и другие...

## Лицензия

MIT
