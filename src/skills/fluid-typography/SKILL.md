# SKILL: Fluid Typography

## Source
`DesignX Catalog`

## Purpose
Fluid типографика: clamp(min, preferred, max), vw-based scaling, типографика без медиа-запросов. Формула: clamp(1rem, 0.5rem + 1vw, 2rem).

## When to Use
- Проектирование и разработка интерфейсов в категории typography
- Работа над продуктами: web-app, dashboard, landing, saas, mobile, ecommerce, desktop
- Интеграция с дизайн-системами и ИИ-агентами

## Behavior
1. Осмысли контекст: тип продукта, аудиторию, платформу, технические ограничения
2. Следуй ключевым принципам:
3. - clamp(): min, preferred (vw-based), max
4. - Формула: clamp(16px, 1rem + 0.5vw, 24px)
5. - Не использовать vw для body — проблема с зумом
6. - Fluid scale: каждый размер шкалы через clamp

## Tags
fluid, typography, clamp, responsive, viewport

## For Product Types
web-app, dashboard, landing, saas, mobile, ecommerce, desktop
