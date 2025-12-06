<script>
  import { glossary } from '../data/glossary.js';

  export let id;
  export let inline = true;

  let showTooltip = false;
  let tooltipPosition = { x: 0, y: 0 };
  let termElement;

  $: entry = glossary[id];

  function handleMouseEnter(event) {
    if (!entry) return;
    const rect = termElement.getBoundingClientRect();
    tooltipPosition = {
      x: rect.left + rect.width / 2,
      y: rect.top
    };
    showTooltip = true;
  }

  function handleMouseLeave() {
    showTooltip = false;
  }

  function handleClick(event) {
    event.preventDefault();
    showTooltip = !showTooltip;
  }

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
    bind:this={termElement}
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    on:click={handleClick}
    on:keydown={(e) => e.key === 'Enter' && handleClick(e)}
    role="button"
    tabindex="0"
    aria-describedby="tooltip-{id}"
  >
    <slot>{entry.term}</slot>
    <span class="glossary-indicator">?</span>
  </span>

  {#if showTooltip}
    <div
      id="tooltip-{id}"
      class="glossary-tooltip"
      style="left: {tooltipPosition.x}px; top: {tooltipPosition.y}px;"
      role="tooltip"
    >
      <div class="tooltip-header">
        <span class="tooltip-term">{entry.term}</span>
        {#if entry.en !== entry.term}
          <span class="tooltip-en">({entry.en})</span>
        {/if}
      </div>

      <p class="tooltip-definition">{entry.definition}</p>

      <div class="tooltip-footer">
        <div class="tooltip-tags">
          {#each entry.tags as tag}
            <span class="tag" style="background-color: {tagColors[tag] || '#607D8B'}">
              {tag}
            </span>
          {/each}
        </div>
        {#if entry.source}
          <span class="tooltip-source">{entry.source}</span>
        {/if}
      </div>
    </div>
  {/if}
{:else}
  <slot />
{/if}

<style>
  .glossary-term {
    position: relative;
    cursor: help;
    border-bottom: 1px dotted var(--color-terracotta);
    transition: all 0.2s ease;
  }

  .glossary-term:hover,
  .glossary-term:focus {
    color: var(--color-terracotta);
    border-bottom-style: solid;
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

  .glossary-tooltip {
    position: fixed;
    z-index: 1000;
    width: 320px;
    max-width: 90vw;
    padding: var(--space-md);
    background: var(--color-white);
    border: 1px solid rgba(96, 125, 139, 0.2);
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    transform: translate(-50%, -100%) translateY(-12px);
    animation: tooltipFadeIn 0.2s ease;
  }

  @keyframes tooltipFadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -100%) translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -100%) translateY(-12px);
    }
  }

  .glossary-tooltip::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    border: 8px solid transparent;
    border-top-color: var(--color-white);
    border-bottom: none;
  }

  .tooltip-header {
    display: flex;
    align-items: baseline;
    gap: var(--space-xs);
    margin-bottom: var(--space-sm);
  }

  .tooltip-term {
    font-weight: 600;
    color: var(--color-black);
    font-size: 0.95rem;
  }

  .tooltip-en {
    font-size: 0.8rem;
    color: var(--color-slate);
    font-style: italic;
  }

  .tooltip-definition {
    font-size: 0.85rem;
    line-height: 1.5;
    color: var(--color-black);
    margin: 0 0 var(--space-sm) 0;
  }

  .tooltip-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-xs);
  }

  .tooltip-tags {
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

  .tooltip-source {
    font-size: 0.7rem;
    color: var(--color-slate);
    font-style: italic;
  }

  /* Mobile: tooltip as modal */
  @media (max-width: 767px) {
    .glossary-tooltip {
      position: fixed;
      bottom: var(--space-lg);
      left: var(--space-md);
      right: var(--space-md);
      top: auto;
      width: auto;
      max-width: none;
      transform: none;
    }

    .glossary-tooltip::after {
      display: none;
    }
  }
</style>
