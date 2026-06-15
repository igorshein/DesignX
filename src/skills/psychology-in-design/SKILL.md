# SKILL: Psychology in Design

## Source
`nightingaledesignresearch.com, RESOURCES.md §9.4, source 17`

## Purpose
Применение когнитивной и поведенческой психологии в UX-дизайне: как люди видят, читают, запоминают, принимают решения и ошибаются. Основан на книге Susan Weinschenk "100 Things Every Designer Needs to Know About People" и смежных исследованиях.

## Sources (RESOURCES.md)
- Susan Weinschenk — 100 Things Every Designer Needs to Know About People (source 17)
- Susan Weinschenk — 100 More Things Every Designer Needs to Know About People
- Don Norman — The Design of Everyday Things (source 23)
- Jeff Johnson — Designing with the Mind in Mind (source 11)
- William Lidwell — Universal Principles of Design (source 22)
- B.F. Skinner — Operant Conditioning (variable rewards)
- Fitts's Law, Hick's Law, Miller's Law — psychophysics in UI
- NN/g — Psychology foundations for UX

## When to Use
- Проектирование новых интерфейсов — учёт человеческих ограничений
- Дизайн форм, навигации, CTAs — влияние на поведение
- Persuasive design (этичный) — мотивация и поведение
- Accessibility — понимание когнитивных ограничений
- AI-интерфейсы — trust, mental models, feedback loops
- Обучение команд — объяснение "почему" за UX-решениями

## Behavior

### 1. How People See

#### 1.1 Peripheral Vision
- Peripheral vision detects motion, not detail
- Important: use motion/animation to draw attention, not for detail
- People see the "gist" of a page in 50ms

#### 1.2 Patterns
- People look for patterns (Gestalt principles)
- Proximity, similarity, closure, continuity, figure-ground
- Use patterns to communicate grouping and relationships

#### 1.3 Faces
- Human faces capture attention immediately
- Eye gaze follows the direction a face is looking
- Use faces to guide attention toward important content
- Authentic photos > stock photos for trust

### 2. How People Read

#### 2.1 F-Shaped Pattern
- Most scanning follows F-pattern: top-left → across → down-left → across
- Put important content at the top and left
- Use headings, bullet points, bold keywords

#### 2.2 Chunking
- People read in chunks, not letter-by-letter
- Use typographic hierarchy to create scannable chunks
- Headlines, subheadings, short paragraphs

#### 2.3 Recognition > Recall
- It's easier to recognise than to remember
- Show options, don't require recall
- Use familiar icons, labels, patterns

### 3. How People Remember

#### 3.1 Miller's Law (7±2)
- Working memory holds 7±2 items
- Present 5-7 options max in navigation
- Use chunking for lists, forms, menus

#### 3.2 Primacy & Recency
- People remember first and last items best
- Put most important actions first/last
- Use this for navigation menus, lists, CTAs

#### 3.3 Schemas & Mental Models
- People create mental models based on past experiences
- Use familiar patterns to reduce learning curve
- Breaking conventions increases cognitive load

### 4. How People Make Decisions

#### 4.1 System 1 vs System 2 (Kahneman)
- **System 1**: fast, automatic, intuitive (most UX)
- **System 2**: slow, deliberate, analytical (complex decisions)
- Design for System 1: simplify, use defaults, reduce choices

#### 4.2 Choice Overload (Hick's Law)
- Decision time increases with number + complexity of choices
- Limit options per screen
- Progressive disclosure for complex decisions

#### 4.3 Fitts's Law
- Time to target = distance / size
- Make important targets larger
- Place frequent targets closer (edges/corners are fast)

#### 4.4 Social Proof & Defaults
- People follow what others do (social proof)
- People stick with defaults (status quo bias)
- Use ethically: make safe/beneficial options the default

### 5. How People Respond to Rewards

#### 5.1 Variable Rewards (Skinner)
- **Fixed ratio**: reward after N actions (predictable)
- **Fixed interval**: reward after time (predictable)
- **Variable ratio**: reward after unpredictable N (most engaging)
- **Variable interval**: reward after unpredictable time

**Design example**: likes on social media = variable ratio reward
**Ethical warning**: variable rewards can be addictive — use responsibly

#### 5.2 Dopamine Loops
- Anticipation of reward releases dopamine
- Progress bars, level-ups, notifications trigger anticipation
- Design for intrinsic motivation, not just extrinsic rewards

#### 5.3 Loss Aversion
- People feel losses 2x more than equivalent gains
- "You'll lose your progress" > "Save your work"
- Use for ethical persuasion, not manipulation

### 6. How People Feel

#### 6.1 Affect Heuristic
- Positive affect → creative problem-solving
- Negative affect → focused, detailed processing
- Beautiful interfaces are perceived as more usable

#### 6.2 Cognitive Dissonance
- People seek consistency between beliefs and actions
- Commitment + consistency: small yes → larger yes
- Use for onboarding (small commitment first)

### 7. Psychology Anti-Patterns

- ❌ Dark patterns exploiting cognitive biases (confirmshaming, forced action)
- ❌ Variable rewards for addictive/compulsive behaviour
- ❌ Scarcity manipulation ("Only 1 left!" when false)
- ❌ Social proof fabrication (fake reviews, fake counts)
- ❌ Defaults that harm user (opt-out sharing, hidden fees)

### 8. Applying Psychology in Design Process

| Psychology Concept | Design Application |
|-------------------|-------------------|
| Fitts's Law | Large CTAs, edge-hover menus |
| Hick's Law | 5-7 nav items, progressive disclosure |
| Miller's Law | Chunked forms, paginated content |
| Gestalt Principles | Grouped fields, card-based layouts |
| Variable Rewards | Gamification, progress indicators |
| Social Proof | Testimonials, user counts, reviews |
| Loss Aversion | "You'll lose your changes" warnings |
| System 1 | Simple choices, clear CTAs, defaults |
| Recognition > Recall | Icons + labels, autocomplete, history |

### 9. Взаимосвязь с другими навыками

- **cognitive-load-design**: рабочая память и когнитивные ограничения
- **gestalt-principles**: визуальное восприятие
- **emotional-design**: аффект и эмоции
- **ethical-ux-framework**: этичные границы применения психологии
- **behavioral-economics/ux**: behavioural economics в UX
- **data-entry**: Fitts's Law в формах
- **onboarding-flows**: commitment + consistency
- **game-ux**: variable rewards в геймификации

## Tags
psychology, cognitive-science, behaviour, decision-making, memory, perception, motivation, rewards, mental-models, kahneman, fitts, hick, miller, skinner

## For Product Types
web-app, mobile, saas, ecommerce, landing, dashboard, game, ai-product
