# SKILL: AI Trust & Transparency

## Source
`designx, RESOURCES.md §4.2`

## Purpose
Фреймворк GLASS+ для trustworthy AI UX: уверенность, объяснимость, контроль, прозрачность, обработка неопределённости. Паттерны explainability (why this, citations, confidence bars), control panel, feedback loops, honest uncertainty.

## Sources (RESOURCES.md)
- NN/g — Trustworthy AI UX research (confidence indicators, explainability patterns)
- UX Collective — AI Ethics, Trust & Transparency articles
- Google PAIR — People + AI Guidebook (explainability, feedback, control)
- Microsoft — Guidelines for Human-AI Interaction (18 principles)
- Raw Studio — Designing with Integrity (AI-specific ethics)
- Fogg Behavior Model — Trust calibration in AI interfaces
- WCAG / W3C — AI accessibility, explainability standards

## When to Use
- Проектирование AI-интерфейсов: рекомендации, персонализация, AI-ассистенты
- Отображение AI-результатов с объяснениями
- Настройка персонализации и контроля над AI
- Интерфейсы с неопределённостью (confidence < 100%)
- Financial, medical, legal AI — high-stakes explainability

## Behavior

### 1. GLASS+ Фреймворк

#### G — Goal transparency: объясни, зачем AI принимает решение
- Покажи цель AI в контексте задачи пользователя
- «To find the best results for you, I'm analyzing your purchase history and preferences»
- Не предполагай, что пользователь понимает, как работает AI
- Just-in-time объяснения, не перегружай

#### L — Level of confidence: покажи уверенность модели
- Визуализируй уверенность: progress bar, color coding, explicit percentage
- Low (< 60%): предложи уточнить, покажи альтернативы
- Medium (60-85%): покажи с оговоркой, предложи проверить
- High (> 85%): покажи с уверенностью, всё равно оставь контроль
- Честная неопределённость: не обещай точности там, где её нет

#### A — Attribution: укажи источники и контекст
- Citations: [1], [2] в тексте → список источников внизу
- Source preview: при наведении на [1] покажи краткую выдержку
- Data origin: откуда AI знает эту информацию
- Model version: какая версия модели дала ответ (для debug/audit)
- Uncertainty attribution: «This is based on limited data»

#### S — Steering: дай контроль над AI
- **Confidence calibration**: «Was this helpful?» 👍/👎
- **Preference setting**: настройка персонализации (slider: precise / creative)
- **Feedback loop**: оцени отдельные рекомендации (hide, not relevant, report)
- **Override**: возможность изменить AI-решение
- **Context**: «Why this?» кнопка для каждого AI-результата
- **Personalization panel**: централизованные настройки AI (RESOURCES.md §4.2)

#### S — Safeguards: сообщи об ограничениях
- Model limitations: что AI умеет и не умеет
- Fallback: если AI не уверен, предложи альтернативу
- Human handoff: когда AI не может помочь
- Data usage: какие данные AI использует для персонализации
- Hallucination notice: «AI can make mistakes. Verify important information.»
- Critical disclaimer: для medical/financial/legal контекстов

### 2. Explainability UX Patterns

#### 2.1 Pattern Catalog

| Паттерн | Описание | Пример |
|---------|----------|--------|
| **Confidence Bar** | Визуализация уверенности | Progress bar с цветом: red/yellow/green |
| **Confidence Badge** | Иконка уверенности рядом с ответом | ✓ Verified / ⚠ Low confidence / ✗ Uncertain |
| **Why This** | Кнопка/ссылка с объяснением | «Why this recommendation?» → popover |
| **Citation** | Ссылка на источник в тексте | «According to [1], the answer is...» |
| **Source Panel** | Боковая панель с источниками | Список источников с preview и ссылками |
| **Fact Check** | Верификация утверждений | Кнопка «Verify this fact» → поиск по источникам |
| **Comparison View** | Сравнение альтернатив | «Here are 3 options ranked by relevance» |
| **Uncertainty Range** | Диапазон возможных значений | «Estimated delivery: Jun 10 ± 3 days» |
| **Alternative Suggestions** | Альтернативы при низкой уверенности | «I'm not sure. Did you mean X or Y?» |
| **Feedback Button** | Оценка AI-ответа | 👍/👎 / «Report incorrect» |
| **Undo Confirmation** | Отмена AI-действия | «I sent an email to John. [Undo]» |
| **Settings Panel** | Настройки AI | Personalization slider, data controls, model selection |

#### 2.2 Confidence Indicators
```
High confidence (85-100%):  ┃██████████┃ 85%  — green
Medium confidence (60-85%): ┃█████░░░░░┃ 65%  — yellow  
Low confidence (< 60%):     ┃███░░░░░░░┃ 45%  — red + suggestion to clarify
```
- Всегда показывай confidence для AI-решений
- Без confidence пользователь не может calibrate trust
- Confidence ≠ accuracy — честно указывай ограничения

#### 2.3 Why This Pattern
```
[Product Recommendation Card]
┌──────────────────────────────────┐
│  Nike Air Max 2026               │
│  $149.99 ★★★★☆                  │
│                                  │
│  [Why this?] [Hide] [Save]       │
│                                  │
│  ── Why this? ────               │
│  Based on:                       │
│  • You viewed similar sneakers   │
│  • Your size (US 10) is in stock │
│  • 85% of users like this brand  │
│  ────────────────────             │
└──────────────────────────────────┘
```

### 3. Control Panel Patterns

#### 3.1 Personalization Controls
| Контрол | Описание | Паттерн |
|---------|----------|---------|
| Precision/Creativity slider | Диапазон: Точный → Креативный | Slider + label + пример |
| Data usage toggle | Использовать историю для персонализации | Toggle on/off |
| Content categories | Типы контента для персонализации | Checkbox group |
| Reset to default | Сброс всех AI-настроек | Кнопка + confirm dialog |
| Feedback summary | История оценок и их влияние | Card «Based on your feedback» |

#### 3.2 AI Transparency Dashboard
- **Active AI features**: что AI делает сейчас (recommendations, predictions, moderation)
- **Data sources**: какие данные используются и откуда
- **Confidence history**: как менялась уверенность AI за последние N запросов
- **Feedback impact**: как отзывы пользователя повлияли на персонализацию
- **Opt-out**: отключение AI-функций без потери базовой функциональности

### 4. Uncertainty & Error Handling

#### 4.1 Честная неопределённость
- Если AI не знает — скажи об этом прямо
- «I'm not sure about this. Here's what I found: [results]. Please verify.»
- Для AI-результатов с низкой уверенностью: предлагай альтернативы, а не один ответ
- Не выдавай speculation за fact
- Medical/financial: обязательный disclaimer «Consult a professional»

#### 4.2 Hallucination Mitigation
- «AI can make mistakes. Verify important information.»
- Source attribution: если AI не может найти источник — не выдумывай
- Uncertainty threshold: при confidence < 60% не выдавай как факт
- User verification prompt: «Does this look correct?»
- Critical actions: require user confirmation before AI performs them

#### 4.3 Error States
| Ситуация | UI response |
|----------|-------------|
| AI offline | «Service unavailable. Try again later.» |
| AI timeout | «Taking longer than expected. Please wait or try again.» |
| AI error | «Something went wrong. Please rephrase your request.» |
| Low confidence | «I'm not sure. Would you like to try a different approach?» |
| Out of scope | «I can't help with that. Here's what I can do: [list]» |
| Safety trigger | «I can't process this request due to safety guidelines.» |

### 5. Взаимосвязь с другими навыками

- **ai-conversation-design**: доверие в диалоговых AI
- **ai-systems-ux**: umbrella AI UX фреймворк
- **ethical-ux-framework**: integrity-чеклист для AI (GLASS)
- **ai-personalization-ethics**: грань персонализации и манипуляции
- **ai-safety-guardrails**: safety rules, content moderation
- **dark-patterns-audit**: манипуляция через ложную уверенность AI
- **ux-writing-content-strategy**: honest microcopy для AI
- **cross-cultural-ux**: культурные различия в доверии к AI

## Tags
ai, trust, transparency, explainability, confidence, uncertainty, control, feedback, calibration, glass

## For Product Types
web-app, mobile, saas, ai-chat, dashboard, desktop, ai-product
