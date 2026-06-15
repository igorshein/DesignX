# SKILL: Ethical UX Framework

## Source
`designx, RESOURCES.md §2`

## Purpose
Общий фреймворк этического UX-дизайна: integrity-чеклисты, граница убеждения vs манипуляции, ответственный дизайн для AI-систем, оценка последствий интерфейсных решений. Надстройка над dark-patterns-audit и privacy-ux.

## Sources (RESOURCES.md)
- Harry Brignull — deceptive.design (таксономия 12 типов)
- Raw Studio — «Designing with Integrity» handbook
- Ethics for Designers — ethical mindmaps & checklists
- Fogg Behavior Model — грань между persuasion и manipulation
- UX Collective — статьи по этике, trust, dark patterns
- NN/g — «Trustworthy AI UX», ethical design research
- WCAG / GDPR — регуляторные требования
- Nielsen Norman Group — «100 years of UX», эволюция этики

## When to Use
- Старт любого нового проекта — установка этических ограничений
- Ревью дизайн-решений на соответствие integrity-принципам
- Проектирование AI-интерфейсов (доверие, explainability, контроль)
- Обучение команд этическому дизайну
- Продукты: web-app, mobile, saas, ecommerce, dashboard, AI-продукты

## Behavior

### 1. Integrity-чеклист (перед выдачей любого UI-решения)

- [ ] Решение уважает автономию пользователя (user autonomy)
- [ ] Все опции имеют равный визуальный вес
- [ ] Нет pre-ticked checkbox без явной необходимости
- [ ] Формулировки нейтральны — не стыдят, не манипулируют
- [ ] Стоимость и условия полностью прозрачны до подтверждения
- [ ] Отказ/отмена симметричны по сложности с согласием/подпиской
- [ ] Пользователь явно соглашается на каждое платное действие
- [ ] Уведомления имеют кнопку «Больше не показывать»
- [ ] Социальное доказательство (отзывы, статистика) верифицировано
- [ ] Решение не создаёт когнитивную перегрузку
- [ ] Время пользователя уважается — нет навязчивых флоу
- [ ] Доступность (WCAG AA) — часть решения, не надстройка
- [ ] Privacy by design: минимальный сбор данных, ясное согласие

### 2. Грань между убеждением (persuasion) и манипуляцией

По Fogg Behavior Model: B = MAP (Behavior = Motivation + Ability + Prompt)

| Аспект | Persuasion (этично) | Manipulation (неэтично) |
|--------|---------------------|-------------------------|
| Motivation | Усиление существующей мотивации | Создание ложной мотивации (страх, жадность) |
| Ability | Упрощение реально полезного действия | Усложнение отказа, скрытие альтернатив |
| Prompt | Контекстный timely сигнал | Навязчивый, повторяющийся, неотключаемый prompt |
| Goal | Помочь пользователю достичь его цели | Достичь цели компании против интересов пользователя |
| Transparency | Механика влияния понятна | Механика скрыта или запутана |

**Правило**: Если пользователь, поняв механику влияния, почувствует себя обманутым — это manipulation.

### 3. Оценка последствий (Consequence Assessment)

Перед запуском каждого интерфейсного решения оцени:

1. **User harm**: может ли решение навредить пользователю (финансово, психологически, privacy)?
2. **Scalability of harm**: автоматизация масштабирует вред — что, если решение будет применено к 1M пользователей?
3. **Dark pattern detection**: содержит ли решение хотя бы один из 12 типов Бригнулла?
4. **Regulatory risk**: нарушает ли решение GDPR, CCPA, ADA, WCAG?
5. **Trust erosion**: снизит ли это решение доверие к продукту/бренду?
6. **Equity**: одинаково ли решение работает для разных групп пользователей?
7. **Reversibility**: может ли пользователь легко отменить последствия решения?

### 4. Trustworthy AI UX — паттерны доверия к AI-системам

#### 4.1 GLASS-фреймворк для AI-интерфейсов
- **G** — Goal transparency: объясни, зачем AI принимает решение
- **L** — Level of confidence: покажи уверенность модели
- **A** — Attribution: укажи источники и контекст
- **S** — Steering: дай контроль над AI (уточнить, отменить, настроить)
- **S** — Safeguards: сообщи об ограничениях и fallback (человек / альтернатива)

#### 4.2 UX-паттерны для AI
| Паттерн | Описание | Пример |
|---------|----------|--------|
| Confidence bar | Визуализация уверенности AI | 85% — высокая, 40% — низкая |
| Why this | Объяснение конкретной рекомендации | «Based on your purchase history» |
| Citation | Ссылка на источник ответа | Число с [1], ссылка внизу |
| Feedback loop | Оценка/коррекция AI-ответа | 👍/👎, «Not helpful» |
| Human handoff | Переход к человеку | «Transfer to support» |
| Uncertainty display | Честное указание неопределённости | «This may not be accurate» |
| Personalization control | Настройка AI-персонализации | Slider: More precise / More creative |

#### 4.3 Чего нельзя делать в AI UX
- Не выдавай AI за человека (no deception)
- Не обещай точности без указания ограничений
- Не скрывай, что решение принимает AI
- Не делай отказ от AI сложнее, чем согласие
- Не собирай данные для AI без явного consent

### 5. Взаимосвязь с другими навыками

- **dark-patterns-audit**: детальная таксономия + альтернативы
- **privacy-ux**: consent design, GDPR, cookie banners
- **ai-trust-transparency**: GLASS для AI уверенности
- **inclusive-design**: этический дизайн = дизайн для всех
- **accessibility-audit**: доступность как этическое требование
- **localization-i18n**: культурные различия в этике и приватности
- **cognitive-walkthrough**: проверка решений на когнитивную нагрузку

## Tags
ethics, integrity, dark-patterns, trust, transparency, ai-ethics, responsibility, user-autonomy, persuasion-vs-manipulation

## For Product Types
web-app, mobile, saas, ecommerce, landing, dashboard, ai-product