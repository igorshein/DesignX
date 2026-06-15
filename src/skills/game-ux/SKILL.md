# SKILL: Game UX Design

## Source
`protopie.io, RESOURCES.md §8.3, source 60`

## Purpose
Проектирование пользовательского опыта в видеоиграх: сигналы и обратная связь, онбординг, accessibility, баланс сложности, playtest-циклы. Сочетает общие UX-принципы со спецификой игровой индустрии: flow, награды, progressive difficulty, HUD-дизайн.

## Sources (RESOURCES.md)
- ProtoPie — Basic Guide to Game UX Design (signals, feedback, onboarding, playtests)
- Don Norman — Emotional Design (visceral/behavioral/reflective в играх)
- Csikszentmihalyi — Flow Theory (баланс вызова и навыка)
- NN/g — Game usability research, engagement metrics
- UX Collective — Game UI patterns, microinteractions в играх

## When to Use
- Дизайн интерфейсов для видеоигр (HUD, меню, инвентарь)
- Онбординг и обучение игрока
- Accessibility в играх (субтитры, color-blind mode, настройки сложности)
- Баланс сложности и прогрессии
- Playtest-циклы: прототип → тест → итерация

## Behavior

### 1. Core UX Principles for Games

#### 1.1 Signals & Feedback
- **Signals**: визуальные/аудиальные подсказки о происходящем в игре (иконки, анимации, звуковые эффекты, текстовые сообщения)
- **Feedback**: реакция игры на действия игрока (положительная — награда, прогресс; отрицательная — смерть, поражение)
- Feedback должен быть чётким, своевременным и релевантным
- Сочетание positive (reinforcement) и negative (correction) feedback

#### 1.2 Usability & Ergonomics
- Контролы должны быть интуитивными и не вызывать физический дискомфорт
- HUD — чистая иерархия: критическая информация (здоровье, боеприпасы) всегда на видном месте
- Минимизация cognitive load во время gameplay
- Поддержка re-mapping клавиш/кнопок

#### 1.3 Onboarding
- Интерактивный tutorial, а не пассивное чтение инструкций
- Progressive disclosure: сложность растёт постепенно
- Tooltips и contextual help по мере необходимости
- Примеры: Call of Duty WWII, Crusader Kings III

#### 1.4 Playtests & Iteration
- Playtest с реальными пользователями на каждом этапе
- Раннее прототипирование (hi-fi prototypes без кода — ProtoPie)
- Метрики: engagement, retention, completion rate, satisfaction

### 2. The UX Pyramid for Games

```
        ┌─────────────────┐
        │   Engagement    │  — emotional connection, narrative
        ├─────────────────┤
        │   Accessibility │  — color-blind, subtitles, difficulty
        ├─────────────────┤
        │   Usability     │  — intuitive controls, clear HUD
        ├─────────────────┤
        │   Functionality │  — game works, no bugs, stable FPS
        └─────────────────┘
```

### 3. Game UX Design Stages

| Stage | Activities |
|-------|-----------|
| 1. Research & Planning | Audience research, competitor analysis, define mechanics |
| 2. Concept & Ideation | Storyline, game mechanics, prototyping |
| 3. Design & Production | Interface, graphics, sound, wireframes, hi-fi mockups |
| 4. Testing & Iteration | Playtest → feedback → iterate |
| 5. Launch & Post-Launch | Monitor metrics, updates, live ops |

### 4. Game UI Patterns

#### 4.1 HUD Components
- **Health/Status**: top-left, colour-coded (green → yellow → red)
- **Ammo/Resources**: bottom-right, numeric + icon
- **Mini-map**: top-right or corner, optional
- **Quest/Objective**: top or side, collapsible
- **Notifications**: toast-style, non-intrusive

#### 4.2 Menu Patterns
- Main Menu: simple, atmospheric, 3-5 options max
- Pause Menu: overlay with blur, continue + settings + quit
- Settings: tabs (controls, audio, video, accessibility)
- Inventory: grid + details panel + equip/use/drop

#### 4.3 Feedback Patterns
- **Hit feedback**: screen shake, sound, colour flash
- **Level up**: celebratory animation + stat summary
- **Achievement**: toast + sound + optional animation
- **Death**: screen fade, respawn options, stats
- **Loading**: progress bar + tips + lore text

### 5. Accessibility in Games

| Feature | Implementation |
|---------|---------------|
| Color-blind modes | Filters or symbol-based indicators |
| Subtitles | Toggle, size adjustment, speaker labels |
| Difficulty levels | Easy / Normal / Hard + custom sliders |
| Control remapping | Full keyboard/gamepad re-binding |
| Audio cues | Visual alternatives for sound-based mechanics |
| Text size | Scalable UI text |
| Tutorial skip | Optional for experienced players |

### 6. Player Motivation & Flow

По Csikszentmihalyi — Flow Theory:
- **Challenge < Skill**: boredom → player leaves
- **Challenge > Skill**: anxiety → player leaves
- **Challenge ≈ Skill**: flow → player stays engaged

UX-задача: поддерживать player в flow через progressive difficulty, обратную связь и чёткие цели.

### 7. Взаимосвязь с другими навыками

- **interaction-design**: базовые UX-принципы для игр
- **micro-interactions**: анимация наград, feedback loops
- **motion-design-principles**: внутриигровые анимации
- **accessibility-audit**: accessibility в играх
- **onboarding-flows**: игровой онбординг
- **prototyping**: rapid prototyping для playtest
- **ux-metrics**: engagement, retention, satisfaction

## Tags
game-ux, gaming, video-games, interaction, feedback, onboarding, playtest, flow, hud, accessibility, engagement

## For Product Types
game, web-app, mobile, desktop, ecommerce
