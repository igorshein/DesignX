# SKILL: Lean UX & Analytics

## Source
`uxdesign.cc, RESOURCES.md §9.2, source 26, 45`

## Purpose
Lean-методология в UX-дизайне: Build-Measure-Learn цикл, actionable vs vanity metrics, Lean Analytics, MVP-дизайн, метрики для разных стадий продукта. Фокус на проверку гипотез, а не на выпуск фич.

## Sources (RESOURCES.md)
- Eric Ries — The Lean Startup (Build-Measure-Learn, MVP, validated learning)
- Alistair Croll & Benjamin Yoskovitz — Lean Analytics (One Metric That Matters, stages)
- Matt Jedraszczyk — "The Power of Lean Analytics in Product Development" (UX Collective, source 45)
- Jeff Gothelf & Josh Seiden — Lean UX (principles, cycles)
- Ash Maurya — Running Lean (Lean Canvas, problem/solution fit)
- NN/g — UX metrics, experimentation culture
- The Lean Series — theleanstartup.com (source 26)

## When to Use
- Стартапы и новые продукты — проверка гипотез
- Выход на новый рынок с минимальным продуктом
- Улучшение существующего продукта через data-driven подход
- Команды, внедряющие experimentation culture
- Продукты с высокой неопределённостью

## Behavior

### 1. Lean UX Principles

#### 1.1 Build-Measure-Learn Loop
```
Build → Measure → Learn → (repeat)
  │         │          │
  ▼         ▼          ▼
MVP → Data → Insight → Pivot or Persevere
```

- **Build**: минимальное решение для проверки гипотезы
- **Measure**: сбор данных о поведении пользователей
- **Learn**: инсайт → решение: изменить подход или продолжать

#### 1.2 Core Lean UX Shift

| Traditional UX | Lean UX |
|---------------|---------|
| Heavy upfront research | Continuous discovery |
| Detailed personas | Proto-personas (hypothesis-based) |
| Exhaustive specs | Lightweight documentation |
| Big-bang release | Iterative releases |
| "Is it perfect?" | "Does it solve the problem?" |
| Feature-driven | Hypothesis-driven |
| Siloed design team | Cross-functional team |

#### 1.3 Lean UX Principles (Gothelf & Seiden)
1. **Cross-functional teams** — no handoffs, shared ownership
2. **Small, dedicated, collocated** — rapid iteration
3. **Problem-focused** — solve problems, not build features
4. **Outcomes over outputs** — impact > shipped features
5. **Continuous discovery** — research every cycle, not just upfront
6. **Shared understanding** — collaborative sense-making
7. **Anti-"handoff"** — designers and developers co-create
8. **Externalising work** — sketches, whiteboards, rough prototypes

### 2. Lean Analytics Framework

#### 2.1 One Metric That Matters (OMTM)
At each stage, focus on ONE metric:
- **Empathy** (problem understanding) → problem interviews completed
- **Stickiness** (engagement) → DAU/MAU, retention
- **Virality** (growth) → viral coefficient, referral rate
- **Revenue** (monetisation) → ARPU, LTV, conversion
- **Scale** (efficiency) → CAC, unit economics

#### 2.2 Stages of a Lean Product

| Stage | Focus | OMTM | Question |
|-------|-------|------|----------|
| **Empathy** | Problem-solution fit | Problem interview confirmations | Is this a real problem? |
| **Stickiness** | Product-market fit | Active users, retention | Do users come back? |
| **Virality** | Growth | Viral coefficient | Do users invite others? |
| **Revenue** | Monetisation | Revenue, LTV | Will users pay? |
| **Scale** | Efficiency | CAC, margin | Can we scale profitably? |

#### 2.3 Actionable vs Vanity Metrics

| Vanity Metrics | Actionable Metrics |
|---------------|-------------------|
| Total registered users | Active users (DAU/MAU) |
| Total downloads | Activation rate |
| Page views per visit | Task completion rate |
| Number of features | Feature adoption rate |
| Social media followers | Net Promoter Score (NPS) |
| "Likes" | Repeat purchase rate |

**Rule**: a metric is actionable if it helps you decide what to do next.

### 3. Lean UX in Practice

#### 3.1 Hypothesis-Driven Design
Template:
```
We believe [action/change]
Will result in [outcome/metric change]
We'll know we're right when [observable signal]
```

Example:
"We believe that adding a progress indicator to the checkout flow will reduce cart abandonment. We'll know we're right when checkout completion rate increases by 10%."

#### 3.2 MVP Design Principles
- **Smallest possible experiment** to test the riskiest assumption
- **Not a feature-light product** — a learning vehicle
- **Concierge MVP**: manually deliver the service to learn
- **Wizard of Oz MVP**: users think it's automated, but it's manual
- **Landing page MVP**: test demand before building
- **Prototype MVP**: interactive mockup for user testing

#### 3.3 Continuous Discovery Cycle
Weekly cadence:
1. **Monday**: review metrics, define hypothesis
2. **Tuesday-Wednesday**: design experiment/prototype
3. **Thursday**: test with 5 users
4. **Friday**: synthesise learnings, decide next week's hypothesis

### 4. Metrics That Matter for UX

| UX Dimension | Metric | Method |
|-------------|--------|--------|
| Task Success | Completion rate, error rate | Usability testing |
| Efficiency | Time on task, clicks to complete | Analytics |
| Satisfaction | SUS, NPS, CSAT | Surveys |
| Adoption | Feature adoption rate | Product analytics |
| Retention | Day 1/7/30 retention | Cohort analysis |
| Engagement | DAU/MAU, session length | Product analytics |
| Learnability | Time to first success | Onboarding analytics |
| Accessibility | WCAG compliance score | Automated audit |

### 5. Lean UX in AI Product Design

- MVP for AI: start with rule-based, escalate to ML
- Measure: confidence accuracy, user correction rate
- Hypothesis: "Adding confidence indicators will increase user trust"
- OMTM for AI features: user correction rate (lower = better AI)

### 6. Взаимосвязь с другими навыками

- **ux-metrics-experimentation**: фреймворки метрик (HEART, GSM)
- **ab-testing**: A/B тесты как инструмент Lean Cycle
- **design-sprint**: 5-дневный цикл для проверки гипотез
- **ux-roadmap**: roadmap основанный на learnings
- **stakeholder-management**: коммуникация through experiments
- **jobs-to-be-done**: JTBD как framing для гипотез

## Tags
lean-ux, lean-analytics, build-measure-learn, mvp, experimentation, metrics, data-driven, product-discovery, hypothesis-testing

## For Product Types
web-app, saas, mobile, ecommerce, landing, dashboard, ai-product
