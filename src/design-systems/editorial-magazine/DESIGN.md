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
- Sans: **Inter** или **Helvetica Now** (для подписей, кнопок)
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
