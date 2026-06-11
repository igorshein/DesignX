# SKILL: CSS Variables Architecture

## Source
DesignX Catalog · frontend-dev

## Purpose
@property для typed variables, циклические зависимости, наследование, performance, CSS-layer integration, Houdini API для расширений.

## When to Use
- Проектирование и разработка интерфейсов в категории frontend-dev
- Работа над продуктами: web-app, dashboard, saas, mobile, desktop
- Интеграция с дизайн-системами и ИИ-агентами

## Behavior
1. Осмысли контекст: тип продукта, аудиторию, платформу, технические ограничения
2. Следуй ключевым принципам:
3. - @property: тип, initial value, inherits
4. - Циклы: избегать var() → var() → var() → itself
5. - CSS layers: @layer base/theme/components
6. - Производительность: не злоупотреблять var()

## Tags
css-variables, custom-properties, architecture, scalability

## For Product Types
web-app, dashboard, saas, mobile, desktop
