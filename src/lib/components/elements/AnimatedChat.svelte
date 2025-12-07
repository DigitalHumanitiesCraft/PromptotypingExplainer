<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  // Vollständiger Reasoning-Zyklus: Context → Plan → Implement → Test → Feedback → Dokumentation
  const conversation = [
    {
      type: 'human',
      pattern: 'Context setzen',
      text: 'Lies knowledge.md und requirements.md. Was sind die Story-Gaps im Frontend?',
    },
    {
      type: 'llm',
      pattern: 'Reasoning',
      text: 'Ich analysiere die Vault-Dokumente... Drei Gaps: 1) Phase 4 abstrakt, 2) Beispieldaten fehlen, 3) Komponenten ungenutzt.',
    },
    {
      type: 'human',
      pattern: 'Plan anfordern',
      text: 'Erstelle einen Plan! Wie lösen wir Gap 1?',
    },
    {
      type: 'llm',
      pattern: 'Plan',
      text: 'Plan: AnimatedChat-Komponente erstellen → echte Prompts zeigen → Typing-Indicator für Authentizität.',
    },
    {
      type: 'human',
      pattern: 'Implementieren',
      text: 'Setze den Plan um. Teste ob es kompiliert.',
    },
    {
      type: 'llm',
      pattern: 'Test',
      text: 'Komponente erstellt. Build erfolgreich. Aber: Beispiel zu generisch für Promptotyping.',
    },
    {
      type: 'human',
      pattern: 'Feedback',
      text: 'Nimm unseren eigenen Prozess als Meta-Beispiel – das ist authentischer!',
    },
    {
      type: 'llm',
      pattern: 'Dokumentation',
      text: 'Chat aktualisiert. Ergänze journal.md: "Meta-Beispiel zeigt echten Workflow".',
    },
  ];

  let visibleMessages = [];
  let currentIndex = 0;
  let isAnimating = true;

  onMount(() => {
    const showNextMessage = () => {
      if (currentIndex < conversation.length) {
        visibleMessages = [...visibleMessages, conversation[currentIndex]];
        currentIndex++;

        // Nächste Nachricht nach Verzögerung
        const delay = conversation[currentIndex - 1].type === 'human' ? 2000 : 2500;
        setTimeout(showNextMessage, delay);
      } else {
        // Nach Ende: kurz warten, dann neu starten
        setTimeout(() => {
          visibleMessages = [];
          currentIndex = 0;
          setTimeout(showNextMessage, 1000);
        }, 4000);
      }
    };

    // Start nach kurzer Verzögerung
    setTimeout(showNextMessage, 800);

    return () => {
      isAnimating = false;
    };
  });
</script>

<div class="animated-chat">
  <div class="chat-header">
    <div class="chat-dots">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
    <span class="chat-title">Promptotyping Session</span>
  </div>

  <div class="chat-messages">
    {#each visibleMessages as message, i (i)}
      <div
        class="message {message.type}"
        in:fly={{ y: 20, duration: 400 }}
      >
        {#if message.pattern}
          <span class="pattern-label">{message.pattern}</span>
        {/if}
        <div class="bubble">
          <p>{message.text}</p>
        </div>
      </div>
    {/each}

    {#if visibleMessages.length < conversation.length}
      <div class="typing-indicator" in:fade={{ duration: 200 }}>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    {/if}
  </div>
</div>

<style>
  .animated-chat {
    width: 100%;
    max-width: 650px;
    background: var(--color-white);
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .chat-header {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-sm) var(--space-lg);
    background: var(--color-code-bg);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .chat-dots {
    display: flex;
    gap: 4px;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color-slate);
    opacity: 0.4;
  }

  .dot:first-child { background: var(--color-error); opacity: 0.8; }
  .dot:nth-child(2) { background: var(--color-progress); opacity: 0.8; }
  .dot:last-child { background: var(--color-success); opacity: 0.8; }

  .chat-title {
    font-size: 0.75rem;
    color: var(--color-slate);
    font-family: var(--font-mono);
  }

  .chat-messages {
    padding: var(--space-md) var(--space-lg);
    min-height: 320px;
    max-height: 380px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .message {
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-width: 85%;
  }

  .message.human {
    align-self: flex-end;
    align-items: flex-end;
  }

  .message.llm {
    align-self: flex-start;
    align-items: flex-start;
  }

  .pattern-label {
    font-size: 0.65rem;
    color: var(--color-terracotta);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
    padding: 0 var(--space-xs);
  }

  .message.llm .pattern-label {
    color: var(--color-slate);
  }

  .bubble {
    padding: var(--space-sm) var(--space-md);
    border-radius: 12px;
    font-size: 0.8rem;
    line-height: 1.5;
  }

  .message.human .bubble {
    background: var(--color-terracotta);
    color: var(--color-white);
    border-bottom-right-radius: 4px;
  }

  .message.llm .bubble {
    background: rgba(96, 125, 139, 0.15);
    color: var(--color-black);
    border-bottom-left-radius: 4px;
  }

  .bubble p {
    margin: 0;
  }

  .typing-indicator {
    display: flex;
    gap: 4px;
    padding: var(--space-sm);
    align-self: flex-start;
  }

  .typing-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-slate);
    animation: typing 1.4s infinite;
  }

  .typing-dot:nth-child(2) {
    animation-delay: 0.2s;
  }

  .typing-dot:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes typing {
    0%, 60%, 100% {
      opacity: 0.3;
      transform: translateY(0);
    }
    30% {
      opacity: 1;
      transform: translateY(-4px);
    }
  }

  @media (max-width: 767px) {
    .animated-chat {
      max-width: 100%;
    }

    .chat-messages {
      min-height: 240px;
      max-height: 280px;
    }

    .bubble {
      font-size: 0.75rem;
    }
  }
</style>
