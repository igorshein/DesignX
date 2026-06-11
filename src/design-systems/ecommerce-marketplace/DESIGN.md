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
- Body: **Inter** (для контента)
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
