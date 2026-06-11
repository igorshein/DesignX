# SKILL: Performance Design Audit

## Source
DesignX Catalog · critique

## Purpose
Аудит влияния дизайн-решений на производительность: LCP (шрифты, изображения), CLS (layout shifts от шрифтов/баннеров), INP (сложные анимации), bundle size, font loading.

## When to Use
- Проектирование и разработка интерфейсов в категории critique
- Работа над продуктами: web-app, landing, saas, ecommerce, mobile
- Интеграция с дизайн-системами и ИИ-агентами

## Behavior
1. Осмысли контекст: тип продукта, аудиторию, платформу, технические ограничения
2. Следуй ключевым принципам:
3. - LCP: font-display: swap, preload, оптимизация изображений
4. - CLS: размеры для изображений, avoid layout shifts
5. - INP: лёгкие анимации, не блокировать main thread
6. - Font: woff2, subset, font-display: swap, preconnect

## Tags
performance, lighthouse, optimization, core-web-vitals, speed

## For Product Types
web-app, landing, saas, ecommerce, mobile
