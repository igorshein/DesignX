# SKILL: Emotional Design

## Source
`nngroup.com, RESOURCES.md §8.3, source 16, 52`

## Purpose
Проектирование эмоционального отклика пользователя через три уровня обработки информации (Don Norman): visceral, behavioral, reflective. Применение эмоционального дизайна в интерфейсах: микровзаимодействия, delight, брендинг через эмоции, построение доверия.

## Sources (RESOURCES.md)
- Don Norman — Emotional Design: Why We Love (Or Hate) Everyday Things (3 levels: visceral, behavioral, reflective)
- NN/g — Persuasive and Emotional Design (research reports, courses)
- Stephen Anderson — Seductive Interaction Design
- Aarron Walter — Designing for Emotion
- Trevor van Gorp & Edie Adams — Design for Emotion
- UX Collective — Emotional design patterns, micro-interactions
- NN/g — Emotional Design, 100 Years of UX (source 16, 64)

## When to Use
- Продукты, где важна эмоциональная связь с пользователем
- Брендинг и визуальная идентичность через эмоции
- Микровзаимодействия и анимация для delight
- Построение доверия в AI-интерфейсах
- Игровые и развлекательные продукты
- Onboarding и first-run experience

## Behavior

### 1. Three Levels of Emotional Design (Norman)

```
┌─────────────────────────────────────────────┐
│         REFLECTIVE (осмысление)              │
│  • Brand perception, self-image, meaning     │
│  • "I feel good about using this product"    │
│  • Story, culture, personal identity         │
├─────────────────────────────────────────────┤
│         BEHAVIORAL (использование)            │
│  • Function, usability, performance           │
│  • "This works well and feels right"         │
│  • Control, feedback, efficiency             │
├─────────────────────────────────────────────┤
│         VISCERAL (внешность)                 │
│  • Appearance, sound, touch, first impression│
│  • "This looks beautiful/interesting"        │
│  • Colour, shape, texture, typography        │
└─────────────────────────────────────────────┘
```

#### 1.1 Visceral Design
- First impression: 50ms to form an opinion (Hassan & Barber, 2013)
- 94% of first impressions are design-related (NN/g)
- Key elements: colour harmony, typography, spacing, imagery, contrast
- **Guideline**: invest in visual polish — it directly affects perceived usability
- "Attractive things work better" — positive affect → creative problem-solving

#### 1.2 Behavioral Design
- About use: function, understandability, usability, physical feel
- Key concepts: affordances, signifiers, feedback, mapping, constraints
- **Guideline**: make core tasks effortless; error states are emotional moments
- Pleasure in mastery: flow state through progressive challenge

#### 1.3 Reflective Design
- The meaning of a product, its cultural and personal significance
- Brand loyalty, pride of ownership, storytelling
- **Guideline**: design for the story users will tell about your product
- Reflective level is where long-term relationships are built

### 2. Emotional Design Patterns for UI

| Pattern | Level | Implementation |
|---------|-------|---------------|
| **Delightful micro-interaction** | Visceral/Behavioral | Animated like button, confetti on achievement |
| **Personality in copy** | Reflective | Witty error messages, brand voice at touchpoints |
| **Surprise & reward** | Behavioral | Unexpected easter egg, bonus content |
| **Progress celebration** | Behavioral | Animated checkmark, level-up effect |
| **Empathetic empty states** | Reflective | "Nothing here yet" + illustration + helpful CTA |
| **Loading with character** | Behavioral | Progress with personality, tips, mini-games |
| **Loss aversion framing** | Reflective | "You'll lose your progress" vs "Save your work" |
| **Social proof** | Reflective | "Join 10K+ happy users" with faces/names |
| **Scarcity & urgency** | Visceral/Reflective | "Only 3 left" with visual emphasis |
| **Personalisation** | Reflective | Custom themes, avatars, preferred name |

### 3. Emotional Design in Practice

#### 3.1 Micro-interactions that Delight
- **Toggle switch**: smooth transition, colour change, subtle shadow
- **Pull-to-refresh**: playful animation (e.g., bouncing ball)
- **Form completion**: confetti on success, progress celebration
- **Button press**: subtle scale, ripple effect
- **Rating**: animated stars, haptic feedback (mobile)

**Rule**: micro-interactions should serve function first, delight second. Never sacrifice usability for decoration.

#### 3.2 Error States as Emotional Moments
- User is already frustrated → don't make it worse
- **Do**: clear message + solution + human tone
- **Don't**: blame user, technical jargon, dead end
- Example: "Something went wrong. We've logged this and will fix it. Try again?"

#### 3.3 Building Trust through Emotional Design
- **Consistency**: reliable behaviour builds confidence
- **Transparency**: explain what's happening and why
- **Control**: undo, cancel, edit — user agency
- **Humanness**: conversational tone, empathy in copy
- **Social**: reviews, testimonials, community

### 4. Measuring Emotional Response

| Method | What It Measures | When |
|--------|-----------------|------|
| AttrakDiff | Pragmatic + Hedonic quality | Post-task, benchmarking |
| SAM (Self-Assessment Manikin) | Pleasure, Arousal, Dominance | During/after experience |
| Emotion Cards | Emotional vocabulary | During testing |
| Facial Expression Analysis | Moment-to-moment affect | Usability testing |
| Heart Rate / GSR | Physiological arousal | Lab studies |
| NPS (Net Promoter Score) | Overall satisfaction | Post-experience |

### 5. Emotional Design Anti-Patterns

- ❌ Manipulative dark patterns disguised as "emotional design"
- ❌ Over-animation that slows down task completion
- ❌ Forced delight — animation without purpose
- ❌ Generic stock photos that feel fake
- ❌ Tone-deaf humour in serious contexts (medical, financial)
- ❌ Emotional manipulation (false scarcity, fake social proof)

### 6. Взаимосвязь с другими навыками

- **micro-interactions**: тактильный уровень emotional design
- **motion-design-principles**: анимация как эмоциональный сигнал
- **voice-tone-brand**: голос и тон бренда на reflective уровне
- **brand-identity**: визуальная идентичность как эмоциональный якорь
- **onboarding-flows**: первое впечатление (visceral level)
- **ethical-ux-framework**: грань между delight и манипуляцией
- **game-ux**: эмоциональный дизайн в играх

## Tags
emotional-design, don-norman, visceral-behavioral-reflective, delight, trust, micro-interactions, brand-identity, user-emotion, persuasion

## For Product Types
web-app, mobile, saas, ecommerce, landing, dashboard, game, ai-product
