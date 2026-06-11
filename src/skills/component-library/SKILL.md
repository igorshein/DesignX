# SKILL: Component Library Architecture

## Source
DesignX Catalog · design-system

## Purpose
Архитектура component library: атомарный дизайн, tree-shaking (ESM exports), theming через Context/CSS tokens, типобезопасность (TypeScript), Storybook docs.

## When to Use
- Проектирование и разработка интерфейсов в категории design-system
- Работа над продуктами: web-app, saas, mobile, ecommerce, desktop
- Интеграция с дизайн-системами и ИИ-агентами

## Behavior
1. Осмысли контекст: тип продукта, аудиторию, платформу, технические ограничения
2. Следуй ключевым принципам:
3. - Atomic: atoms → molecules → organisms → templates
4. - Tree-shaking: ESM exports, barrel files запрещены
5. - Theming: React Context + CSS variables
6. - Types: TypeScript для всех props

## Tags
component-library, ui-library, atomic, npm, tree-shaking

## For Product Types
web-app, saas, mobile, ecommerce, desktop
