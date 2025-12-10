<script>
  import { fade, fly } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

  export let isOpen = false;
  export let title = '';
  export let content = null;

  const dispatch = createEventDispatcher();

  function close() {
    dispatch('close');
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      close();
    }
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      close();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <!-- svelte-ignore a11y_click_events_have_key_events a11y_interactive_supports_focus -->
  <div
    class="deep-dive-overlay"
    transition:fade={{ duration: 200 }}
    on:click={handleBackdropClick}
    role="dialog"
    aria-modal="true"
    aria-labelledby="deep-dive-title"
    tabindex="-1"
  >
    <div
      class="deep-dive-panel"
      transition:fly={{ x: -300, duration: 300 }}
    >
      <header class="panel-header">
        <div class="header-indicator">
          <span class="branch-icon">←</span>
          <span class="branch-label">Deep Dive</span>
        </div>
        <h2 id="deep-dive-title">{title}</h2>
        <button class="close-button" on:click={close} aria-label="Schließen">
          ×
        </button>
      </header>

      <div class="panel-content">
        {#if content}
          {@html content}
        {:else}
          <slot />
        {/if}
      </div>

      <footer class="panel-footer">
        <button class="back-button" on:click={close}>
          → Zurück zum Hauptpfad
        </button>
      </footer>
    </div>
  </div>
{/if}

<style>
  .deep-dive-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(26, 26, 26, 0.6);
    backdrop-filter: blur(4px);
    z-index: 1000;
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
  }

  .deep-dive-panel {
    width: 100%;
    max-width: 600px;
    height: 100%;
    background: var(--color-white, #fff);
    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .panel-header {
    padding: var(--space-md, 1rem) var(--space-lg, 1.5rem);
    border-bottom: 1px solid rgba(96, 125, 139, 0.2);
    display: flex;
    flex-direction: column;
    gap: var(--space-xs, 0.25rem);
    position: relative;
    background: linear-gradient(135deg, rgba(96, 125, 139, 0.08) 0%, transparent 100%);
  }

  .header-indicator {
    display: flex;
    align-items: center;
    gap: var(--space-xs, 0.25rem);
    font-size: 0.75rem;
    color: var(--color-slate, #607D8B);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .branch-icon {
    font-size: 1rem;
    animation: pulse-left 1.5s ease-in-out infinite;
  }

  @keyframes pulse-left {
    0%, 100% { transform: translateX(0); opacity: 1; }
    50% { transform: translateX(-4px); opacity: 0.7; }
  }

  .panel-header h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-black, #1A1A1A);
    padding-right: 2rem;
  }

  .close-button {
    position: absolute;
    top: var(--space-md, 1rem);
    right: var(--space-md, 1rem);
    width: 32px;
    height: 32px;
    border: none;
    background: transparent;
    font-size: 1.5rem;
    color: var(--color-slate, #607D8B);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .close-button:hover {
    background: rgba(96, 125, 139, 0.1);
    color: var(--color-black, #1A1A1A);
  }

  .panel-content {
    flex: 1;
    overflow-y: auto;
    padding: var(--space-lg, 1.5rem);
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--color-black, #1A1A1A);
  }

  .panel-content :global(h3) {
    font-size: 1.1rem;
    font-weight: 600;
    margin: var(--space-lg, 1.5rem) 0 var(--space-sm, 0.5rem) 0;
    color: var(--color-terracotta, #BF5B3E);
  }

  .panel-content :global(h3:first-child) {
    margin-top: 0;
  }

  .panel-content :global(p) {
    margin: 0 0 var(--space-md, 1rem) 0;
  }

  .panel-content :global(ul),
  .panel-content :global(ol) {
    margin: 0 0 var(--space-md, 1rem) 0;
    padding-left: var(--space-lg, 1.5rem);
  }

  .panel-content :global(li) {
    margin-bottom: var(--space-xs, 0.25rem);
  }

  .panel-content :global(strong) {
    color: var(--color-terracotta, #BF5B3E);
  }

  .panel-content :global(code) {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85em;
    background: rgba(96, 125, 139, 0.1);
    padding: 0.1em 0.3em;
    border-radius: 3px;
  }

  .panel-content :global(table) {
    width: 100%;
    border-collapse: collapse;
    margin: var(--space-md, 1rem) 0;
    font-size: 0.85rem;
    display: block;
    overflow-x: auto;
  }

  .panel-content :global(thead),
  .panel-content :global(tbody),
  .panel-content :global(tr) {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  .panel-content :global(th),
  .panel-content :global(td) {
    padding: var(--space-sm, 0.5rem) var(--space-md, 1rem);
    text-align: left;
    border-bottom: 1px solid rgba(96, 125, 139, 0.2);
    word-wrap: break-word;
  }

  .panel-content :global(th:first-child),
  .panel-content :global(td:first-child) {
    width: 30%;
    min-width: 100px;
  }

  .panel-content :global(th) {
    font-weight: 600;
    color: var(--color-slate, #607D8B);
    background: rgba(96, 125, 139, 0.05);
  }

  .panel-content :global(.reference) {
    font-size: 0.85rem;
    color: var(--color-slate, #607D8B);
    border-left: 3px solid var(--color-terracotta, #BF5B3E);
    padding-left: var(--space-md, 1rem);
    margin: var(--space-md, 1rem) 0;
  }

  .panel-content :global(.reference a),
  .panel-content :global(a) {
    color: var(--color-terracotta, #BF5B3E);
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  .panel-content :global(.reference a:hover),
  .panel-content :global(a:hover) {
    opacity: 0.8;
    text-decoration: underline;
  }

  .panel-footer {
    padding: var(--space-md, 1rem) var(--space-lg, 1.5rem);
    border-top: 1px solid rgba(96, 125, 139, 0.2);
    background: rgba(96, 125, 139, 0.03);
  }

  .back-button {
    width: 100%;
    padding: var(--space-sm, 0.5rem) var(--space-md, 1rem);
    background: var(--color-terracotta, #BF5B3E);
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-xs, 0.25rem);
  }

  .back-button:hover {
    background: var(--color-terracotta-dark, #a14d34);
    transform: translateX(4px);
  }

  /* Mobile styles */
  @media (max-width: 767px) {
    .deep-dive-panel {
      max-width: 100%;
    }

    .panel-header {
      padding: var(--space-md, 1rem);
    }

    .panel-content {
      padding: var(--space-md, 1rem);
    }

    .panel-footer {
      padding: var(--space-md, 1rem);
    }
  }
</style>
