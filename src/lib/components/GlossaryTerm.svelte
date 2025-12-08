<script>
  import { glossary } from '../data/glossary.js';
  import { getBibEntry } from '../data/bibliography.js';
  import { onMount, tick } from 'svelte';

  export let id;
  export let inline = true;

  let showTooltip = false;
  let isLocked = false;
  let isLocking = false;
  let termElement;
  let popoverElement;
  let hoverTimeout;
  let lockTimeout;
  let position = { top: 0, left: 0, placement: 'above' };

  const LOCK_DELAY = 800; // ms to wait before locking

  $: entry = glossary[id];
  $: bibEntry = entry?.source ? getBibEntry(entry.source) : null;

  // Calculate smart popover position
  async function calculatePosition() {
    await tick();
    if (!termElement) return;

    const rect = termElement.getBoundingClientRect();
    const popoverWidth = 280;
    const popoverHeight = 200;
    const gap = 8;

    let top, left;
    let placement = 'above';

    if (rect.top > popoverHeight + gap) {
      top = rect.top - gap;
      placement = 'above';
    } else {
      top = rect.bottom + gap;
      placement = 'below';
    }

    left = rect.left + rect.width / 2;
    position = { top, left, placement };
  }

  function handleMouseEnter() {
    if (isLocked) return;

    // Show tooltip after short delay
    hoverTimeout = setTimeout(() => {
      showTooltip = true;
      isLocking = true;
      calculatePosition();

      // Start lock timer
      lockTimeout = setTimeout(() => {
        isLocked = true;
        isLocking = false;
      }, LOCK_DELAY);
    }, 200);
  }

  function handleMouseLeave() {
    clearTimeout(hoverTimeout);
    clearTimeout(lockTimeout);

    if (!isLocked) {
      showTooltip = false;
      isLocking = false;
    }
  }

  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    clearTimeout(hoverTimeout);
    clearTimeout(lockTimeout);

    if (isLocked) {
      // Unlock and close
      isLocked = false;
      showTooltip = false;
      isLocking = false;
    } else {
      // Instant lock on click
      showTooltip = true;
      isLocked = true;
      isLocking = false;
      calculatePosition();
    }
  }

  function handlePopoverMouseEnter() {
    // Keep open when hovering popover
    clearTimeout(hoverTimeout);
    clearTimeout(lockTimeout);
  }

  function handlePopoverMouseLeave() {
    if (!isLocked) {
      showTooltip = false;
      isLocking = false;
    }
  }

  // Close on click outside
  function handleClickOutside(event) {
    if (showTooltip &&
        termElement && !termElement.contains(event.target) &&
        popoverElement && !popoverElement.contains(event.target)) {
      showTooltip = false;
      isLocked = false;
      isLocking = false;
    }
  }

  // Close on scroll (only if not locked)
  function handleScroll() {
    if (showTooltip && !isLocked) {
      showTooltip = false;
      isLocking = false;
      clearTimeout(lockTimeout);
    }
  }

  // Close on Escape
  function handleKeydown(event) {
    if (event.key === 'Escape' && showTooltip) {
      showTooltip = false;
      isLocked = false;
      isLocking = false;
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
      clearTimeout(lockTimeout);
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

{#if entry}<span
    class="glossary-term"
    class:inline
    class:active={showTooltip}
    class:locked={isLocked}
    bind:this={termElement}
    on:click={handleClick}
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    on:keydown={(e) => e.key === 'Enter' && handleClick(e)}
    role="button"
    tabindex="0"
    aria-describedby={showTooltip ? `tooltip-${id}` : undefined}
    aria-expanded={showTooltip}
  ><slot>{entry.term}</slot></span>{#if showTooltip}
    <div
      id="tooltip-{id}"
      class="glossary-popover"
      class:above={position.placement === 'above'}
      class:below={position.placement === 'below'}
      class:locked={isLocked}
      class:locking={isLocking}
      style="top: {position.top}px; left: {position.left}px;"
      bind:this={popoverElement}
      on:mouseenter={handlePopoverMouseEnter}
      on:mouseleave={handlePopoverMouseLeave}
      role="tooltip"
    >
      <div class="caret"></div>

      <!-- Lock progress indicator -->
      {#if isLocking}
        <div class="lock-progress"></div>
      {/if}

      <!-- Lock indicator -->
      {#if isLocked}
        <button class="lock-indicator" on:click={handleClick} title="Klicken zum Schließen">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </button>
      {/if}

      <div class="popover-header">
        <span class="popover-term">{entry.term}</span>
        {#if entry.en && entry.en !== entry.term && !entry.term.includes(entry.en)}
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
        <div class="popover-meta">
          {#if entry.source}
            <span class="popover-source">{entry.source}</span>
          {/if}
          {#if entry.link}
            <a
              href={entry.link}
              class="popover-link"
              target="_blank"
              rel="noopener noreferrer"
              on:click|stopPropagation
            >
              {entry.linkLabel || 'Mehr'} →
            </a>
          {/if}
        </div>
      </div>
    </div>
  {/if}{:else}<slot />{/if}

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

  .glossary-term.locked {
    border-bottom-width: 2px;
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
    overflow: hidden;
  }

  .glossary-popover.locked {
    border-color: var(--color-terracotta);
    box-shadow: 0 4px 24px rgba(191, 91, 62, 0.25);
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

  /* Lock progress bar */
  .lock-progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 3px;
    background: var(--color-terracotta);
    animation: lockProgress 0.8s linear forwards;
    border-radius: 8px 8px 0 0;
  }

  @keyframes lockProgress {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  /* Lock indicator */
  .lock-indicator {
    position: absolute;
    top: 6px;
    right: 6px;
    width: 20px;
    height: 20px;
    padding: 0;
    border: none;
    background: var(--color-terracotta);
    color: white;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease;
  }

  .lock-indicator:hover {
    background: #a04a2e;
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

  .glossary-popover.locked .caret {
    border-color: var(--color-terracotta);
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
    padding-right: 24px;
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
    font-weight: 400;
    line-height: 1.5;
    color: var(--color-black);
    margin: 0 0 var(--space-sm) 0;
    text-align: left;
    text-transform: none;
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

  .popover-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-sm);
  }

  .popover-source {
    font-size: 0.7rem;
    color: var(--color-slate);
    font-style: italic;
  }

  .popover-link {
    font-size: 0.75rem;
    color: var(--color-terracotta);
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s ease;
  }

  .popover-link:hover {
    opacity: 0.8;
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
