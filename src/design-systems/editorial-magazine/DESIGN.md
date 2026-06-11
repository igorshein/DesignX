# DESIGN.md — Editorial Magazine

## Brand & Tone
Интеллектуальный, контент-первый, типографический. Журнальная эстетика: колонки, заголовки, акцент на readability.

## Color Tokens
- bg-surface: #ffffff
- bg-elevated: #f8f8f8
- bg-accent: #1a1a1a
- border: #e0e0e0
- text-primary: #1a1a1a
- text-muted: #555555
- text-accent: цвет по выбору (часто красный #cc3333 или синий #2952a3)
- accent: #cc3333 (editorial red klassisch)

## Typography
- Display: **Playfair Display** или **GT Sectra** (драматичный serif)
- Body: **Merriweather** или **Source Serif Pro** (читаемый serif)
- Sans: **JetBrains Mono** или **Helvetica Now** (для подписей, кнопок)
- Scale:
  - Hero: 64px, display, bold
  - H1: 36px, display, regular
  - H2: 24px, display, regular
  - Deck: 18px, sans, regular, 1.5
  - Body: 16px, serif, 1.8 (оптимальная длина строки: 60-75 символов)
  - Caption: 12px, sans, uppercase, tracked

## Layout
- Multi-column grid (2-3 колонки для контента)
- Hero section: full-bleed image + overlay текст
- Pull quotes: увеличенный текст, другой шрифт, accent color
- Drop caps для первой буквы статьи
- Asymmetric layouts для разнообразия

## Components — Article Card
- Image: 16:9 или 5:4, full-width
- Category label: uppercase, tracked, small, accent цвет
- Headline: 24px, serif
- Author + date: sans, muted, 12px
- border-bottom: 1px solid

## Features
- Table of contents: sticky sidebar
- Infinite scroll или "load more"
- Progress bar для чтения
- Related articles в конце

## Motion
- Scroll-triggered: fade-in для секций
- Progress bar: 0 → 100 по скроллу
- Sticky header: появляется при скролле вверх
- Parallax для hero изображений
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
| Primary | bg #cc3333, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #e0e0e0, text #1a1a1a | bg #f0f2f5 | border #cc3333 | opacity .4 |
| Ghost | bg transparent, text #555555 | bg #f0f2f5 | text #1a1a1a | opacity .4 |
- Radius: 0px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #ffffff | #e0e0e0 | #1a1a1a |
| Focus | #ffffff | #cc3333 (+shadow) | #1a1a1a |
| Error | #ffffff | #cc3333 | #cc3333 |
| Disabled | #f0f2f5 | #e0e0e0 | #555555 |
- Height: 36px | Radius: 0px | Padding: 0 12px

## Card Specs
- Background: #f8f8f8 | Border: 1px solid #e0e0e0 | Radius: 0px
- Padding: 16px | Hover: border #cc3333 (if interactive)

## Navigation
- Link: #555555, hover #1a1a1a, active #cc3333
- Tab active: bottom 2px #cc3333, color #cc3333
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #cc3333 outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #cc3333 for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale