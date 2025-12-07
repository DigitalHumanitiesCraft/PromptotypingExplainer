<script>
  import { glossary } from '../data/glossary.js';
  import { getBibEntry } from '../data/bibliography.js';
  import { onMount, tick } from 'svelte';

  export let id;
  export let inline = true;

  let showTooltip = false;
  let termElement;
  let popoverElement;
  let hoverTimeout;
  let position = { top: 0, left: 0, placement: 'above' };

  $: entry = glossary[id];
  $: bibEntry = entry?.source ? getBibEntry(entry.source) : null;

  // Calculate smart popover position
  async function calculatePosition() {
    await tick();
    if (!termElement) return;

    const rect = termElement.getBoundingClientRect();
    const popoverWidth = 280;
    const popoverHeight = 200; // Approximate max height
    const gap = 8; // Space between term and popover

    let top, left;
    let placement = 'above';

    // Check if there's space above
    if (rect.top > popoverHeight + gap) {
      // Place above - position at bottom of where popover will be
      top = rect.top - gap;
      placement = 'above';
    } else {
      // Place below - position at top of popover
      top = rect.bottom + gap;
      placement = 'below';
    }

    // Horizontal: center on the term
    left = rect.left + rect.width / 2;

    position = { top, left, placement };
  }

  function handleMouseEnter() {
    // 300ms delay to prevent flicker
    hoverTimeout = setTimeout(() => {
      showTooltip = true;
      calculatePosition();
    }, 300);
  }

  function handleMouseLeave() {
    clearTimeout(hoverTimeout);
    showTooltip = false;
  }

  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    clearTimeout(hoverTimeout);
    showTooltip = !showTooltip;
    if (showTooltip) calculatePosition();
  }

  // Close on click outside (for mobile)
  function handleClickOutside(event) {
    if (showTooltip &&
        termElement && !termElement.contains(event.target) &&
        popoverElement && !popoverElement.contains(event.target)) {
      showTooltip = false;
    }
  }

  // Close on scroll
  function handleScroll() {
    if (showTooltip) {
      showTooltip = false;
    }
  }

  // Close on Escape
  function handleKeydown(event) {
    if (event.key === 'Escape' && showTooltip) {
      showTooltip = false;
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('resize', calculatePosition);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('resize', calculatePosition);
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
    'evaluation': '#6366F1',
    'methodology': '#14B8A6',
    'theory': '#8B5CF6'
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
    aria-describedby={showTooltip ? `tooltip-${id}` : undefined}
    aria-expanded={showTooltip}
  >
    <slot>{entry.term}</slot>
  </span>

  {#if showTooltip}
    <div
      id="tooltip-{id}"
      class="glossary-popover"
      class:above={position.placement === 'above'}
      class:below={position.placement === 'below'}
      style="top: {position.top}px; left: {position.left}px;"
      bind:this={popoverElement}
      role="tooltip"
    >
      <div class="caret"></div>

      <div class="popover-header">
        <span class="popover-term">{entry.term}</span>
        {#if entry.en && entry.en !== entry.term}
          <span class="popover-en">({entry.en})</span>
        {/if}
      </div>

      <p class="popover-definition">{entry.definition}</p>

      <div class="popover-footer">
        <div class="popover-tags">
          {#each entry.tags as tag}
            <span class="tag" style="background-color: {tagColors[tag] || '#607D8B'}">
              {tag}
            </span>
          {/each}
        </div>
        {#if entry.source}
          <a
            href="#bibliographie-{bibEntry?.id || ''}"
            class="popover-source"
            on:click|stopPropagation
          >
            {entry.source}
          </a>
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
    border-bottom-color: var(--color-terracotta);
  }

  .glossary-term.active {
    color: var(--color-terracotta);
    border-bottom-style: solid;
  }

  .glossary-term.inline {
    display: inline;
  }

  /* Popover */
  .glossary-popover {
    position: fixed;
    z-index: 1000;
    width: 280px;
    padding: var(--space-md);
    background: var(--color-white);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }

  .glossary-popover.above {
    transform: translate(-50%, -100%);
    animation: popoverFadeInAbove 0.2s ease;
  }

  .glossary-popover.below {
    transform: translate(-50%, 0);
    animation: popoverFadeInBelow 0.2s ease;
  }

  @keyframes popoverFadeInAbove {
    from {
      opacity: 0;
      transform: translate(-50%, calc(-100% + 8px));
    }
    to {
      opacity: 1;
      transform: translate(-50%, -100%);
    }
  }

  @keyframes popoverFadeInBelow {
    from {
      opacity: 0;
      transform: translate(-50%, -8px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  /* Caret/Arrow */
  .caret {
    position: absolute;
    left: 50%;
    width: 12px;
    height: 12px;
    background: var(--color-white);
    border: 1px solid rgba(0, 0, 0, 0.1);
    transform: translateX(-50%) rotate(45deg);
  }

  .glossary-popover.above .caret {
    bottom: -7px;
    border-top: none;
    border-left: none;
  }

  .glossary-popover.below .caret {
    top: -7px;
    border-bottom: none;
    border-right: none;
  }

  .popover-header {
    display: flex;
    align-items: baseline;
    gap: var(--space-xs);
    margin-bottom: var(--space-sm);
    text-align: left;
  }

  .popover-term {
    font-weight: 600;
    color: var(--color-terracotta);
    font-size: 0.95rem;
  }

  .popover-en {
    font-size: 0.75rem;
    color: var(--color-slate);
    font-style: italic;
  }

  .popover-definition {
    font-size: 0.85rem;
    line-height: 1.5;
    color: var(--color-black);
    margin: 0 0 var(--space-sm) 0;
    text-align: left;
  }

  .popover-footer {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  .popover-tags {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }

  .tag {
    font-size: 0.6rem;
    padding: 2px 6px;
    border-radius: 4px;
    color: white;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .popover-source {
    font-size: 0.7rem;
    color: var(--color-slate);
    font-style: italic;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s ease;
  }

  .popover-source:hover {
    color: var(--color-terracotta);
    text-decoration: underline;
  }

  /* Mobile adjustments */
  @media (max-width: 767px) {
    .glossary-popover {
      width: calc(100vw - 2 * var(--space-md));
      max-width: 320px;
    }
  }
</style>
