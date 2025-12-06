<script>
  import { glossary } from '../data/glossary.js';
  import { onMount, tick } from 'svelte';

  export let id;
  export let inline = true;

  let showTooltip = false;
  let termElement;
  let termRect = { top: 0, left: 0, right: 0 };
  let panelRect = { top: 0, left: 0 };

  $: entry = glossary[id];

  // Update positions for connection line
  async function updatePositions() {
    await tick();
    if (termElement) {
      const rect = termElement.getBoundingClientRect();
      termRect = {
        top: rect.top + rect.height / 2,
        left: rect.left,
        right: rect.right
      };
    }
  }

  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    showTooltip = !showTooltip;
    if (showTooltip) updatePositions();
  }

  function handleMouseEnter() {
    showTooltip = true;
    updatePositions();
  }

  let hoverTimeout;
  function handleMouseLeave() {
    // Delay close to allow moving to panel
    hoverTimeout = setTimeout(() => {
      showTooltip = false;
    }, 300);
  }

  function handlePanelEnter() {
    clearTimeout(hoverTimeout);
  }

  function handlePanelLeave() {
    showTooltip = false;
  }

  function closeTooltip() {
    showTooltip = false;
  }

  // Close on scroll (after a delay to allow reading)
  let scrollTimeout;
  function handleScroll() {
    if (showTooltip) {
      updatePositions();
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        showTooltip = false;
      }, 2000); // Close after 2s of scrolling
    }
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updatePositions);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updatePositions);
      clearTimeout(scrollTimeout);
      clearTimeout(hoverTimeout);
    };
  });

  // Tag colors
  const tagColors = {
    'prompting': '#3B82F6',
    'ai-engineering': '#8B5CF6',
    'fundamentals': '#607D8B',
    'architecture': '#059669',
    'safety': '#DC2626',
    'training': '#D97706',
    'agents': '#EC4899',
    'evaluation': '#6366F1'
  };
</script>

{#if entry}
  <span
    class="glossary-term"
    class:inline
    class:active={showTooltip}
    bind:this={termElement}
    on:click={handleClick}
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    on:keydown={(e) => e.key === 'Enter' && handleClick(e)}
    role="button"
    tabindex="0"
    aria-describedby="tooltip-{id}"
    aria-expanded={showTooltip}
  >
    <slot>{entry.term}</slot>
    <span class="glossary-indicator">?</span>
  </span>

  {#if showTooltip}
    <!-- Connection line from term to panel -->
    <svg class="connection-line" aria-hidden="true">
      <line
        x1={termRect.right + 4}
        y1={termRect.top}
        x2={window.innerWidth - 180 - 280 - 32}
        y2={window.innerHeight / 2}
        stroke="var(--color-terracotta)"
        stroke-width="1.5"
        stroke-dasharray="4 3"
        opacity="0.5"
      />
      <circle
        cx={termRect.right + 4}
        cy={termRect.top}
        r="3"
        fill="var(--color-terracotta)"
      />
    </svg>

    <aside
      id="tooltip-{id}"
      class="glossary-panel"
      role="complementary"
      aria-label="Glossar: {entry.term}"
      on:mouseenter={handlePanelEnter}
      on:mouseleave={handlePanelLeave}
    >
      <button class="close-btn" on:click={closeTooltip} aria-label="Schließen">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <div class="panel-header">
        <span class="panel-term">{entry.term}</span>
        {#if entry.en !== entry.term}
          <span class="panel-en">({entry.en})</span>
        {/if}
      </div>

      <p class="panel-definition">{entry.definition}</p>

      <div class="panel-footer">
        <div class="panel-tags">
          {#each entry.tags as tag}
            <span class="tag" style="background-color: {tagColors[tag] || '#607D8B'}">
              {tag}
            </span>
          {/each}
        </div>
        {#if entry.source}
          <span class="panel-source">{entry.source}</span>
        {/if}
      </div>
    </aside>
  {/if}
{:else}
  <slot />
{/if}

<style>
  .glossary-term {
    position: relative;
    cursor: pointer;
    border-bottom: 1px dotted var(--color-terracotta);
    transition: all 0.2s ease;
  }

  .glossary-term:hover,
  .glossary-term:focus {
    color: var(--color-terracotta);
    border-bottom-style: solid;
  }

  .glossary-term.active {
    color: var(--color-terracotta);
    border-bottom-style: solid;
    background: rgba(191, 91, 62, 0.1);
    padding: 0 2px;
    margin: 0 -2px;
    border-radius: 2px;
  }

  .glossary-term.inline {
    display: inline;
  }

  .glossary-indicator {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    font-size: 9px;
    font-weight: 700;
    color: var(--color-white);
    background: var(--color-terracotta);
    border-radius: 50%;
    margin-left: 2px;
    vertical-align: super;
    opacity: 0.8;
  }

  /* Connection line */
  .connection-line {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 999;
    overflow: visible;
  }

  /* Side panel - fixed right */
  .glossary-panel {
    position: fixed;
    z-index: 1000;
    top: 50%;
    right: var(--space-lg);
    transform: translateY(-50%);
    width: 280px;
    max-width: calc(100vw - 2 * var(--space-lg));
    max-height: 60vh;
    overflow-y: auto;
    padding: var(--space-md);
    background: var(--color-white);
    border: 2px solid var(--color-terracotta);
    border-radius: 8px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
    animation: panelSlideIn 0.25s ease;
  }

  @keyframes panelSlideIn {
    from {
      opacity: 0;
      transform: translateY(-50%) translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateY(-50%) translateX(0);
    }
  }

  /* Close button */
  .close-btn {
    position: absolute;
    top: var(--space-xs);
    right: var(--space-xs);
    width: 24px;
    height: 24px;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--color-slate);
    opacity: 0.6;
    transition: all 0.2s ease;
  }

  .close-btn:hover {
    opacity: 1;
    color: var(--color-terracotta);
  }

  .close-btn svg {
    width: 16px;
    height: 16px;
  }

  .panel-header {
    display: flex;
    align-items: baseline;
    gap: var(--space-xs);
    margin-bottom: var(--space-sm);
    padding-right: var(--space-lg);
  }

  .panel-term {
    font-weight: 600;
    color: var(--color-terracotta);
    font-size: 1rem;
  }

  .panel-en {
    font-size: 0.8rem;
    color: var(--color-slate);
    font-style: italic;
  }

  .panel-definition {
    font-size: 0.85rem;
    line-height: 1.6;
    color: var(--color-black);
    margin: 0 0 var(--space-sm) 0;
  }

  .panel-footer {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  .panel-tags {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }

  .tag {
    font-size: 0.65rem;
    padding: 2px 6px;
    border-radius: 4px;
    color: white;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .panel-source {
    font-size: 0.7rem;
    color: var(--color-slate);
    font-style: italic;
  }

  /* Adjust position when Progress Indicator is visible */
  @media (min-width: 768px) {
    .glossary-panel {
      right: calc(var(--space-lg) + 180px); /* Space for ProgressIndicator */
    }
  }

  /* Mobile: bottom sheet */
  @media (max-width: 767px) {
    .connection-line {
      display: none;
    }

    .glossary-panel {
      top: auto;
      bottom: 0;
      right: 0;
      left: 0;
      width: auto;
      max-width: none;
      max-height: 50vh;
      transform: none;
      border-radius: 16px 16px 0 0;
      border-bottom: none;
      animation: panelSlideUp 0.25s ease;
    }

    @keyframes panelSlideUp {
      from {
        opacity: 0;
        transform: translateY(100%);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
</style>
