# Edge Cases & Resilience

## Source
`ghaida/intent` · [GitHub](https://github.com/ghaida/intent)

## Purpose
State inventory (9 states per screen: idle, loading, empty, partial, error, success, warning, disabled, edge case), error recovery, first-run, stress testing.

## When to Use
- Проектирование и разработка интерфейсов в категории critique
- Работа над продуктами: web-app, saas, mobile, desktop
- Интеграция с дизайн-системами и ИИ-агентами

## Behavior
1. Осмысли контекст: тип продукта, аудиторию, платформу, технические ограничения
2. Следуй ключевым принципам:
   Every screen has 9 states
   Design for worst case first
   First-run experience is a state, not a feature
   Stress test with slow networks and large data
   Timeout UX should preserve user work

## Tags
edge-cases, resilience, states, error, stress-testing

## For Product Types
web-app, saas, mobile, desktop
