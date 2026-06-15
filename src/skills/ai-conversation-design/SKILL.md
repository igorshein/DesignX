# SKILL: AI Conversation Design

## Source
`designx, RESOURCES.md §4.1`

## Purpose
Фреймворк DIALOGUE+ для conversational AI: структура диалога, персона, turn-taking, контекст, multi-turn сценарии, graceful error recovery, диалоговые state machines, обработка ветвлений, multimodal паттерны.

## Sources (RESOURCES.md)
- UX Collective — Voice User Interface Design (sample dialogs, Grice's maxims)
- Google — Conversation Design guidelines (Persona, Tone, Flow)
- Microsoft — Bot Framework design principles (Dialogs, Prompts, Waterfalls)
- ProtoPie — Game UX, conversational UI patterns
- About Face (Cooper) — Interaction design for dialogue systems
- Designing Interfaces (Tidwell) — Conversation patterns
- Grice's Maxims — Quantity, Quality, Relevance, Manner

## When to Use
- Проектирование чат-ботов и голосовых ассистентов
- AI-агенты с conversational интерфейсом (customer support, sales, education)
- Multimodal интерфейсы: текст + кнопки + карточки + голос
- Проектирование multi-turn и multi-topic диалогов

## Behavior

### 1. DIALOGUE+ Фреймворк

#### D — Design conversations, not command lines
- Диалог — это естественная беседа, а не список команд
- Приветствуй пользователя и объясни возможности системы
- Используй sample dialogs как прототип (RESOURCES.md §8.2)
- Проектируй через сценарии (user stories → dialog flows)

#### I — Intent recognition & handling
- Определи основные интенты пользователя
- Для каждого интента: happy path, variations, edge cases
- Fallback на непонятный интент: «I didn't understand. Could you rephrase?»
- Confirmation loops для критических действий

#### A — Active listening & context
- Поддерживай контекст на протяжении всей беседы
- Переменные: user_name, current_topic, previous_query, session_state
- Multi-turn: вопросы с опорой на предыдущие ответы
- Topic switching: graceful переход между темами

#### L — Language persona & tone
- Определи персону: role, expertise, formality, emotion
- Tone matrix per context: happy path / error / celebration / urgency
- Grice's Maxims: be truthful (Quality), relevant (Relevance), clear (Manner), complete (Quantity)
- Для AI-агента: persona должна быть знакомой, комфортной, соответствовать бренду и культуре (RESOURCES.md §8.2)

#### O — Output variety & richness
- Rich responses: текст + кнопки + карточки + карусели + изображения
- Quick replies — предложи варианты ответа
- Typing indicator — покажи, что система «думает»
- Streaming response — показывай ответ по мере генерации

#### G — Graceful error recovery
- Обработка непонимания: уточняй, перефразируй, предлагай варианты
- 3 попытки → human handoff (перевод к человеку)
- Error recovery: «I'm sorry, I didn't get that. Did you mean X or Y?»
- Silence handling: при длительной паузе предложи помощь

#### U — User control & transparency
- Возможность отменить, уточнить, вернуться
- «Go back» — возврат к предыдущему шагу
- «Start over» — перезапуск диалога
- Объясни, почему AI ответил именно так (RESOURCES.md §4.2)

#### E — Exit & handoff
- Чёткое завершение диалога
- Оценка качества: «Was this helpful?»
- Human handoff: когда AI не может помочь, передай человеку с контекстом
- Post-conversation summary: краткое резюме диалога

### 2. Диалоговая State Machine

```
                    ┌──────────────┐
                    │  Greeting    │
                    │  / Onboarding │
                    └──────┬───────┘
                           │
                    ┌──────▼───────┐
                    │  Await Input │◄──────────────┐
                    └──────┬───────┘               │
                           │                        │
                    ┌──────▼───────┐               │
                    │  Intent Match│               │
                    └──┬───────┬───┘               │
                       │       │                    │
              ┌────────▼──┐ ┌──▼──────────┐        │
              │  Known     │ │  Unknown     │        │
              │  Intent    │ │  Intent      ├────────┘
              └──┬───┬─────┘ └─────────────┘        │
                 │   │                               │
        ┌────────▼┐ ┌▼──────────┐                    │
        │ Execute  │ │ Clarify   ├────────────────────┘
        │ Action   │ │ / Confirm │
        └──┬───┬───┘ └───────────┘
           │   │
     ┌─────▼┐ ┌▼──────┐
     │ Close │ │ Human  │
     │       │ │ Handoff│
     └───────┘ └───────┘
```

#### Состояния:
- **Greeting**: приветствие, onboarding, объяснение возможностей, privacy notice
- **Await Input**: ожидание ввода пользователя (текст/голос/кнопка)
- **Intent Match**: распознавание интента, валидация контекста
- **Execute Action**: выполнение задачи (поиск, создание, расчёт)
- **Clarify**: уточнение неоднозначного запроса
- **Confirm**: подтверждение критического действия
- **Human Handoff**: передача человеку с контекстом
- **Close**: завершение с summary + feedback

### 3. Conversation Patterns

#### 3.1 Opening / Greeting
| Тип | Паттерн | Когда |
|-----|---------|-------|
| Welcome | «Hi! I'm [name]. I can help you with X, Y, Z.» | Первый визит |
| Returning | «Welcome back, [name]. Last time we discussed X.» | Повторный визит |
| Contextual | «Hi! I see you're working on X. Need help?» | В контексте задачи |

#### 3.2 Quick Replies
- Максимум 3-4 варианта (чтобы избежать перегрузки выбора)
- Варианты должны быть взаимоисключающими и полными
- Всегда включай «Something else» или «I need help with something else»

#### 3.3 Clarification / Disambiguation
- «Did you mean X or Y?» — два варианта, не больше
- «Could you be more specific? Do you mean [option A], [option B], or something else?»
- Пример: пользователь: «Book a flight» → AI: «Where are you flying from?»
- Progressive disclosure: уточняй по одному параметру за шаг

#### 3.4 Confirmation
- Для критических действий (payment, delete, update personal data)
- «I'll send $50 to John Smith. Is that correct?»
- Confirmation с undo: «Item added to cart. [Undo]»
- Explicit confirmation vs implicit (RESOURCES.md §2.3 consent)

#### 3.5 Error Recovery
| Ситуация | Паттерн | Ответ AI |
|----------|---------|----------|
| Непонятный ввод | Rephrase prompt | «I didn't understand. Can you rephrase?» |
| Неполный ввод | Prompt for missing | «I need your email to proceed.» |
| Амбивалентный ввод | Offer choices | «Did you mean X or Y?» |
| Повторная ошибка | Simplify + guide | «Let me rephrase. Tap one of these buttons:» |
| 3+ ошибки | Handoff | «Let me connect you with a specialist.» |
| Out-of-scope | Redirect | «I can't help with that, but I can help with X and Y.» |

#### 3.6 Human Handoff
- Передавай полный контекст диалога человеку
- User intent, conversation history, attempted solutions, user frustration level
- «I wasn't able to resolve this. Let me connect you with [name] who can help.»
- Не заставляй пользователя повторять информацию

#### 3.7 Closing
- Summary: «Here's what we did today: X, Y, Z.»
- Feedback: «Was this helpful?» (1-5 scale или thumbs up/down)
- Follow-up: «I'll send you a summary by email.»
- Offering next steps: «Is there anything else I can help with?»

### 4. Multimodal Conversation Design

| Mode | UI | Voice | Use case |
|------|----|-------|----------|
| Text-only | chat bubbles, typing indicator | — | Support chat |
| Voice-only | — | TTS, wake word, voice feedback | Smart speakers |
| Voice + Screen | chat + buttons + cards | Voice input + TTS output | Mobile assistants |
| Voice + Visual | AR overlays, animated avatar | Voice interaction | AR assistants |
| Text + Cards | Chat + rich cards + carousels | — | E-commerce, search |

#### Voice-Specific Patterns (RESOURCES.md §8.2)
- Sample dialogs как прототип
- Grice's Maxims: количество, качество, релевантность, манера
- Persona voice assistant: роль, образ компании, аудитория, культура
- Silence handling: 5s → reprompt, 10s → offer help, 15s → close
- Confirmation loops: для критических подтверждений

### 5. Взаимосвязь с другими навыками

- **ai-trust-transparency**: confidence, explainability, citations
- **voice-ui-design**: VUI patterns, speech recognition, multimodal
- **ai-systems-ux**: umbrella AI UX framework
- **ai-personalization-ethics**: персонализация в диалоге
- **ai-prompt-ux**: prompt-дизайн для пользовательского ввода
- **ux-writing-content-strategy**: tone of voice, microcopy для диалогов
- **cross-cultural-ux**: культурная адаптация AI persona и тона
- **ethical-ux-framework**: достоверность, transparency, честность

## Tags
ai, conversation, chat, voice, dialog, dialogue, conversational-ai, chatbot, vui, multimodal

## For Product Types
web-app, mobile, saas, ai-chat, desktop
