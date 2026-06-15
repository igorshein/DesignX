# SKILL: Privacy UX

## Source
`designer-skills, RESOURCES.md §2.3`

## Purpose
Проектирование privacy-first интерфейсов: consent management, cookie banners, data deletion flows, privacy dashboards, GDPR/CCPA compliance без sacrifice usability, layered notices, granular consent, data portability UX, privacy-by-design архитектура.

## Sources (RESOURCES.md)
- GDPR (Regulation (EU) 2016/679) — требования к согласию, прозрачности, portability
- CCPA/CPRA — California Consumer Privacy Act
- WCAG / W3C — рекомендации по доступности privacy-интерфейсов
- Raw Studio — «Designing with Integrity»
- UX Collective — consent design, dark patterns в cookie banners
- Fogg Behavior Model — грань между убеждением и манипуляцией в consent flow

## When to Use
- Проектирование и разработка интерфейсов в категории inclusive-design
- Работа над продуктами: web-app, saas, mobile, ecommerce, dashboard, landing
- Интеграция с дизайн-системами и ИИ-агентами
- Compliance-аудит существующих privacy-интерфейсов

## Behavior

### 1. Consent Design — паттерны согласия

#### 1.1 Layered Notices (Многоуровневые уведомления)
- **Layer 1 (Just-in-time)**: краткое уведомление в контексте действия
- **Layer 2 (Summary)**: краткая сводка с ключевыми опциями
- **Layer 3 (Full policy)**: полная политика с деталями и юридическими формулировками
- **Принцип**: пользователь получает достаточно информации на каждом уровне для принятия решения

#### 1.2 Типы согласия
| Тип | Паттерн | Пример | Оценка |
|-----|---------|--------|--------|
| Explicit opt-in | Pre-unchecked + явное действие | «Email me offers» unchecked | Этично |
| Pre-ticked opt-in | Уже отмечено, нужно снять | Галочка на рассылку стоит по умолчанию | Dark pattern |
| Implicit consent | Продолжение = согласие | «Используя сайт, вы соглашаетесь...» | Серая зона |
| Opt-out | Автоматически включено, нужно отключить | Авто-подписка с возможностью отказа | Агрессивно |
| Granular consent | Категории отдельно | Маркетинг / Аналитика / Функциональные / Необходимые | Этично (рекомендуется) |
| Toggle consent | Вкл/Выкл для каждой категории | Dashboard с переключателями | Этично + контроль |

#### 1.3 Cookie Banner Patterns
- **Этичный**: «Accept All» = «Reject All» (равный вес) + «Customize»
- **Dark pattern**: «Accept All» яркая кнопка, «Reject» скрыт / требует 3 клика
- **Рекомендация**: три кнопки равного размера: Accept All / Customize / Reject All
- **Consent wall**: запрещён GDPR — нельзя блокировать доступ при отказе от не-необходимых cookie

#### 1.4 Cookie Banner Specs
| Компонент | Этичный | Dark pattern |
|-----------|---------|--------------|
| Accept | Такой же размер/цвет как Reject | Крупная яркая кнопка |
| Reject | Равный вес с Accept | Серая ссылка, мелкий текст |
| Customize | Виден с первого экрана | Спрятан за 2+ клика |
| Close (X) | Не закрывает — требует решения | Закрытие = Accept All |
| Повторный показ | Только при изменении политики | Каждый визит |

### 2. Privacy Dashboard — дашборд управления данными

#### 2.1 Обязательные секции
- **Data overview**: какие данные собраны, категории, объём
- **Consent status**: текущие согласия по категориям с toggle
- **Data deletion**: self-service удаление аккаунта и/или отдельных данных
- **Data export**: экспорт всех данных в машиночитаемом формате (JSON, CSV)
- **Download my data**: one-click export с прогрессом
- **Connected services**: интеграции и их доступ к данным
- **Activity log**: кто и когда запрашивал данные
- **Privacy settings**: granular toggles для каждой категории

#### 2.2 Принципы
- Privacy dashboard доступен из основного меню, не спрятан
- Каждое действие подтверждается (delete, export)
- Delete — мягкое удаление (grace period) + жёсткое (immediate)
- Data portability: JSON + CSV + human-readable summary
- Для AI-продуктов: control panel для персонализации и рекомендаций

### 3. Privacy by Design — архитектурные принципы

#### 3.1 7 принципов (по Ann Cavoukian)
1. **Proactive not Reactive**: privacy встраивается до разработки
2. **Privacy as Default**: минимум данных по умолчанию
3. **Privacy Embedded**: не отдельный слой, а часть архитектуры
4. **Full Functionality**: privacy не ломает функциональность (positive-sum)
5. **End-to-End Security**: защита на всём жизненном цикле
6. **Visibility & Transparency**: все процессы открыты
7. **Respect for Users**: user-centric design

#### 3.2 Data Minimization UX
- Спрашивай данные, только если они нужны для конкретной функции
- Предлагай анонимные альтернативы (гостевой вход)
- Показывай, зачем нужен каждый запрос данных
- Время жизни данных указывай при сборе
- Data retention policy — user-visible

#### 3.3 AI & Data Collection
- Показывай, какие данные используются для персонализации
- Confidence indicators для AI-обработки данных
- Возможность отказаться от AI-анализа без потери базовой функциональности
- Explainability: почему система запрашивает эти данные

### 4. Регуляторные требования (GDPR/CCPA)

#### 4.1 GDPR (EU)
- **Consent**: affirmative act, pre-ticked запрещены, withdrawal такой же лёгкий как grant
- **Data portability**: Article 20 — право на перенос данных
- **Right to erasure**: Article 17 — «right to be forgotten»
- **DPIA**: Data Protection Impact Assessment для high-risk обработки
- **DSR**: Data Subject Request — ответ в течение 30 дней
- **Age of consent**: 16 лет (варьируется по странам EU, 13-16)

#### 4.2 CCPA/CPRA (California)
- **Right to know**: какие данные собраны, источник, цель
- **Right to delete**: удаление персональных данных
- **Right to opt-out**: продажа данных (Do Not Sell My Personal Information)
- **Non-discrimination**: отказ от прав не влияет на качество сервиса
- **CPRA amendments**: sensitive data categories, stricter consent

### 5. Взаимосвязь с другими навыками

- **dark-patterns-audit**: пересечение по cookie banners, trick questions
- **ethical-ux-framework**: общий этический фреймворк для интерфейсов
- **ai-trust-transparency**: confidence, explainability, data usage
- **security-ux**: безопасность данных, authentication, encryption UX
- **inclusive-design**: равный доступ к privacy-опциям
- **localization-i18n**: культурные различия в приватности, локальные регуляции

## Tags
privacy, gdpr, ccpa, consent, data, compliance, cookie-banner, privacy-dashboard, data-deletion, data-portability

## For Product Types
web-app, saas, mobile, ecommerce, dashboard, landing
