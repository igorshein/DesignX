# SKILL: CSS Custom Properties Architecture

## Source
`DesignX Catalog`

## Purpose
Архитектура CSS-переменных: global (цвета, шрифты), semantic (bg, text, border), component, theme (light/dark). @property, fallback, data-attribute темы.

## When to Use
- Проектирование и разработка интерфейсов в категории frontend-dev
- Работа над продуктами: web-app, dashboard, landing, saas, mobile, ecommerce, desktop
- Интеграция с дизайн-системами и ИИ-агентами

## Behavior
1. Осмысли контекст: тип продукта, аудиторию, платформу, технические ограничения
2. Следуй ключевым принципам:
3. - --color-bg-surface — семантический нейминг
4. - Тема через data-attribute или prefers-color-scheme
5. - @property для typed custom properties
6. - Fallback: var(--color, #000) для старых браузеров

## Tags
css-variables, custom-properties, theming, scalability, architecture

## For Product Types
web-app, dashboard, landing, saas, mobile, ecommerce, desktop
