<script>
  import { phases } from '../../data/phases.js';
  import { prompts } from '../../data/prompts.js';
  import VaultIcon from '../elements/VaultIcon.svelte';
  import ChatBubble from '../elements/ChatBubble.svelte';
  import BrowserFrame from '../elements/BrowserFrame.svelte';

  export let progress = 0;

  const phase = phases[4];

  // Animation thresholds (aus knowledge.md → TEIL 3 → Phase 4)
  // 0-0.1: Titel erscheint
  // 0.1-0.2: Layout erscheint
  // 0.2-0.3: Erster Prompt
  // 0.3-0.35: Docs fliegen zum Chat
  // 0.35-0.45: LLM-Antwort, Code
  // 0.45-0.55: Zweiter Prompt, Wireframe
  // 0.55-0.65: Error
  // 0.65-0.75: Fix-Prompt, LLM-Korrektur
  // 0.75-0.85: Spinner, Update
  // 0.85-0.92: Success, Network
  // 0.92-1.0: Closing

  $: titleOpacity = Math.min(1, progress / 0.1);
  $: layoutOpacity = progress > 0.1 ? Math.min(1, (progress - 0.1) / 0.1) : 0;

  // Chat progression
  $: visiblePrompts = Math.floor(
    progress > 0.2 ? Math.min(prompts.length, ((progress - 0.2) / 0.6) * prompts.length + 1) : 0
  );

  // Browser states
  $: browserState =
    progress > 0.85 ? 'network' :
    progress > 0.75 ? 'wireframe' :
    progress > 0.55 ? 'error' :
    progress > 0.45 ? 'wireframe' :
    progress > 0.35 ? 'code' :
    'empty';

  $: showSpinner = progress > 0.75 && progress < 0.85;

  // Success indicator
  $: showSuccess = progress > 0.85;

  // Closing
  $: closingOpacity = progress > 0.92 ? Math.min(1, (progress - 0.92) / 0.08) : 0;

  // Vault docs flying animation
  $: docsFlying = progress > 0.3 && progress < 0.35;
</script>

<div class="phase4-scene">
  <header class="phase-header" style="opacity: {titleOpacity};">
    <span class="phase-number">Phase 4</span>
    <h2>{phase.title}</h2>
    <p class="metaphor">{phase.metaphor}</p>
  </header>

  <div class="implementation-area" style="opacity: {layoutOpacity};">
    <!-- Left: Vault -->
    <div class="vault-section">
      <VaultIcon
        size={100}
        documents={['data.md', 'user-story.md', 'context.md']}
      />
      {#if docsFlying}
        <div class="flying-docs">
          <span class="flying-doc">→</span>
        </div>
      {/if}
    </div>

    <!-- Right: Chat + Browser -->
    <div class="dialog-section">
      <!-- Chat -->
      <div class="chat-area">
        {#each prompts.slice(0, visiblePrompts) as prompt (prompt.id)}
          <ChatBubble
            type={prompt.type}
            text={prompt.text}
            pattern={prompt.pattern}
          />
        {/each}
      </div>

      <!-- Browser -->
      <div class="browser-area">
        <BrowserFrame state={browserState} {showSpinner} />
        {#if showSuccess}
          <div class="success-badge">
            <span class="success-icon">✓</span>
            <span>Tests bestanden</span>
          </div>
        {/if}
      </div>
    </div>
  </div>

  <!-- Closing text -->
  <p class="closing-text" style="opacity: {closingOpacity};">
    {phase.closingText}
  </p>
</div>

<style>
  .phase4-scene {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--space-lg);
    padding: var(--space-lg);
    padding-top: var(--space-xl);
  }

  .phase-header {
    text-align: center;
  }

  .phase-number {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-terracotta);
    font-weight: 600;
  }

  h2 {
    color: var(--color-black);
    margin: var(--space-xs) 0;
  }

  .metaphor {
    font-style: italic;
    color: var(--color-slate);
  }

  .implementation-area {
    display: flex;
    gap: var(--space-xl);
    width: 100%;
    max-width: 1000px;
    flex: 1;
    min-height: 0;
  }

  /* Vault section */
  .vault-section {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);
    padding-top: var(--space-lg);
  }

  .flying-docs {
    animation: flyRight 0.5s ease-out;
    color: var(--color-terracotta);
    font-size: 1.5rem;
  }

  @keyframes flyRight {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(100px);
    }
  }

  /* Dialog section */
  .dialog-section {
    flex: 1;
    display: flex;
    gap: var(--space-lg);
    min-height: 0;
  }

  /* Chat area */
  .chat-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    overflow-y: auto;
    padding: var(--space-sm);
    background: #fafafa;
    border-radius: 8px;
    max-height: 350px;
  }

  /* Browser area */
  .browser-area {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
  }

  .success-badge {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-xs) var(--space-sm);
    background: var(--color-success);
    color: white;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    animation: fadeIn 0.3s ease-out;
  }

  .success-icon {
    font-weight: bold;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Closing text */
  .closing-text {
    font-size: 1.25rem;
    color: var(--color-terracotta);
    font-weight: 600;
    text-align: center;
    margin-top: auto;
    padding-bottom: var(--space-lg);
  }

  @media (max-width: 767px) {
    .implementation-area {
      flex-direction: column;
    }

    .vault-section {
      padding-top: 0;
    }

    .dialog-section {
      flex-direction: column;
    }

    .chat-area {
      max-height: 200px;
    }
  }
</style>
