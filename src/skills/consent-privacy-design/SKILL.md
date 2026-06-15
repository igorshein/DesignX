# SKILL: Consent & Privacy Design

## Source
`designx, RESOURCES.md §2.3`

## Purpose
Специализированный навык по проектированию consent-интерфейсов: cookie banners, GDPR/CCPA flows, privacy dashboards, data deletion UX, layered notices, granular consent. Отдельный фокус на AI-consent и data collection transparency.

## Sources (RESOURCES.md)
- GDPR Article 7 (Consent), Article 17 (Erasure), Article 20 (Portability)
- CCPA/CPRA — California Consumer Privacy Act
- ePrivacy Directive — cookie consent
- UX Collective — consent UX, cookie banner dark patterns
- Raw Studio — «Designing with Integrity» — consent patterns
- NN/g — consent UX research
- Fogg Behavior Model — consent flow design

## When to Use
- Проектирование cookie banners и consent flows
- Создание privacy dashboard и data management UX
- Аудит compliance-интерфейсов на юзабилити
- AI-продукты: consent на использование данных для обучения
- Регуляторный редизайн: GDPR, CCPA, LGPD, PIPEDA
- Продукты: web-app, saas, mobile, ecommerce, landing, AI-chat

## Behavior

### 1. Consent Flow Architecture

#### 1.1 Just-in-Time Consent
- Запрос согласия именно в момент, когда данные нужны (не при первом визите)
- Пример: «Разрешить доступ к камере?» при открытии сканера, а не при входе
- Преимущество: пользователь понимает контекст запроса

#### 1.2 Layered Architecture
```
Layer 1: Just-in-time notice (2-3 строки, контекст)
  |
  v (если нужно больше информации)
Layer 2: Summary notice (краткая сводка, категории, toggles)
  |
  v (если нужно полное раскрытие)
Layer 3: Full privacy policy (юридический документ)
```
- Каждый layer доступен с предыдущего
- Основное решение принимается на Layer 1 или 2
- Layer 3 — для compliance и transparency

#### 1.3 Consent Flow Types
| Тип | Описание | Compliance | Usability |
|-----|----------|------------|-----------|
| Single opt-in | Один чекбокс | GDPR basic | Высокая |
| Granular categories | Toggles по категориям | GDPR ++ | Средняя |
| Toggle all / none | Master switch | GDPR ++ | Высокая |
| Just-in-time | В контексте | GDPR ++ | Высокая |
| Cookie wall | Блокировка без согласия | GDPR — | Низкая |
| Pre-ticked | Уже отмечено | GDPR невалид | Очень низкая |

### 2. Cookie Banner Design System

#### 2.1 Компоненты cookie banner
- **Bar/Banner**: sticky bottom/top, содержит Layer 1
- **Modal**: полный consent с категориями, содержит Layer 2
- **Floating button**: «Cookie Settings» для повторного доступа
- **Preference center**: полная панель управления

#### 2.2 Варианты структуры
| Структура | Use case | Complexity |
|-----------|----------|------------|
| Bar + Reject + Accept | Cookie wall для EEA | Low |
| Bar + Customize + Accept All | GDPR-оптимальный | Medium |
| Modal + категории + toggles | Данные для AI + маркетинг | High |
| Just-in-time tooltip | Контекстный запрос | Low |

#### 2.3 Рекомендуемый паттерн (GDPR-compliant + usable)
```
┌─────────────────────────────────────────┐
│ We use cookies to improve your          │
│ experience. Customize or accept all.    │
│                                         │
│ [  Customize  ]  [  Accept All  ]       │
│ [  Reject All  ] (равный размер)        │
│                                         │
│ Privacy Policy · Cookie Policy          │
└─────────────────────────────────────────┘
```
- Все три кнопки одинакового размера и контраста
- Reject All виден без скролла
- Customize открывает preference center с категориями

### 3. Privacy Dashboard Design

#### 3.1 Обязательные разделы
1. **Data Overview**: карточка «What we know about you» с категориями данных
2. **Consent Controls**: toggles для каждой категории (Necessary / Functional / Analytics / Marketing / AI Training)
3. **Data Export**: кнопка «Download my data» + выбор формата (JSON, CSV, HTML)
4. **Account Deletion**: self-service удаление с confirmation flow
5. **Activity Log**: кто и когда обращался к данным за последние 30/90 дней
6. **Connected Apps**: интеграции и их доступ к данным

#### 3.2 Ключевые UI-паттерны
- **Toggle с label**: On/Off для каждой категории consent
- **Progress indicator**: «Data export in progress — 65%»
- **Confirm dialog**: «Are you sure? This cannot be undone»
- **Grace period**: «Account will be deleted in 30 days. Cancel anytime»
- **Summary card**: «You have 3 active consents. Last updated 2 days ago»

#### 3.3 AI-Specific Privacy Controls
- **Training opt-out**: «Don't use my data for AI training»
- **Personalization slider**: от «No personalization» до «Full personalization»
- **Data retention selector**: 3 months / 6 months / 1 year / indefinite
- **AI explanation**: «This data is used to personalize your recommendations»

### 4. Regulatory Compliance per Region

| Регион | Закон | Ключевые требования | Особенности UX |
|--------|-------|---------------------|----------------|
| EU/EEA | GDPR + ePrivacy | Explicit opt-in, withdrawal symmetry, portability | «Reject All» как обязательная опция |
| California | CCPA/CPRA | Right to know, delete, opt-out | «Do Not Sell My Personal Information» |
| Brazil | LGPD | Аналогично GDPR | Consent granularity |
| Canada | PIPEDA | Meaningful consent | Just-in-time preferred |
| India | DPDPA (2023) | Consent manager, data fidiciary | Data dashboard mandatory |

### 5. Consent for AI & Data Collection

#### 5.1 AI Training Consent
- Явное согласие на использование данных для обучения AI
- Возможность отказаться без потери базовой функциональности
- Прозрачность: какие данные, для каких моделей, как долго хранятся
- Пример: «Help improve AI — allow us to use your conversations for training»

#### 5.2 Collection Transparency
- Показывай, какие данные собираются, прямо в UI
- «This input will be processed by AI» — label рядом с полем ввода
- Data usage indicator: иконка 🛈 с popover «Why we need this data»
- Periodic reminders: раз в 6 месяцев напоминание о собранных данных

### 6. Взаимосвязь с другими навыками

- **privacy-ux**: общий privacy-by-design фреймворк
- **dark-patterns-audit**: запрещённые паттерны в cookie banners
- **ethical-ux-framework**: integrity-чеклисты
- **ai-trust-transparency**: GLASS принципы для AI consent
- **localization-i18n**: локальные регуляции, перевод consent текстов
- **inclusive-design**: равный доступ к privacy-опциям для всех
- **security-ux**: data encryption, authentication для privacy dashboard

## Tags
consent, privacy, gdpr, ccpa, lgpd, cookie, banner, data-collection, ai-consent, compliance, transparency

## For Product Types
web-app, saas, mobile, ecommerce, landing, dashboard, ai-chat