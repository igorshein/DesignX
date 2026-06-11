# DESIGN.md — E-commerce / Marketplace

## Brand & Tone
Торговая площадка, объединяющая продавцов и покупателей. Тон: энергичный, надёжный, ориентированный на конверсию.

## Visual Aesthetic
Эстетика: **editorial / magazine**. Крупные изображения товаров, редакционная типографика, карточки продуктов как обложки журнала.

## Color Tokens
- color-bg-surface: #ffffff
- color-bg-elevated: #f9fafb
- color-border: #e5e7eb
- color-text-primary: #111827
- color-text-muted: #6b7280
- color-accent-primary: #f97316 (оранжевый — CTA)
- color-accent-hover: #ea580c
- color-success: #10b981
- color-warning: #f59e0b

## Typography
- Display: **Playfair Display** (для заголовков категорий)
- Body: **JetBrains Mono** (для контента)
- Price: **JetBrains Mono** tabular figures

## Components — Product Card
- Image: 3:2 aspect ratio, object-fit cover, border-radius 8px
- Title: 14px, medium, max 2 lines (line-clamp)
- Price: 18px, bold, tabular figures
- CTA: "Add to cart" — accent оранжевый
- Rating: stars + count
- Hover: subtle shadow elevation, scale(1.02)

## Components — Search
- Full-width search bar
- Autocomplete dropdown с категориями
- Filters sidebar: price range, brand, rating, delivery

## Cart & Checkout
- Всегда видимая корзина (top-right counter)
- Checkout: минимум полей, progress steps
- Без регистрации для покупки (guest checkout)
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
| Primary | bg #f97316, #fff | darker 10% | opacity .85 | opacity .4 |
| Secondary | bg transparent, border #e5e7eb, text #111827 | bg #f0f2f5 | border #f97316 | opacity .4 |
| Ghost | bg transparent, text #6b7280 | bg #f0f2f5 | text #111827 | opacity .4 |
- Radius: 8px | Height: 36px (default) / 28px (sm) / 44px (lg)
- Transition: all 0.15s ease

## Input Field Specs
| State | Background | Border | Text |
|---|---|---|---|
| Default | #ffffff | #e5e7eb | #111827 |
| Focus | #ffffff | #f97316 (+shadow) | #111827 |
| Error | #ffffff | #ef4444 | #ef4444 |
| Disabled | #f0f2f5 | #e5e7eb | #6b7280 |
- Height: 36px | Radius: 8px | Padding: 0 12px

## Card Specs
- Background: #f9fafb | Border: 1px solid #e5e7eb | Radius: 8px
- Padding: 16px | Hover: border #f97316 (if interactive)

## Navigation
- Link: #6b7280, hover #111827, active #f97316
- Tab active: bottom 2px #f97316, color #f97316
- Sidebar: padding 8px 16px

## Accessibility
- Contrast: WCAG AA (4.5:1 normal, 3:1 large)
- Focus: 2px #f97316 outline + offset
- Target: min 44x44px interactive
- Motion: respects prefers-reduced-motion

## Iconography
- Style: outline (1.5px), sizes 16/20/24px
- Color: inherits text; #f97316 for active
- Set: Lucide or Feather

## Motion
- Duration: 150ms (micro) / 250ms (transitions)
- Easing: ease (default), ease-out (in), ease-in (out)
- Pattern: opacity + translateY/scale