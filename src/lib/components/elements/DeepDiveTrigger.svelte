<script>
  import { openDeepDive } from '../../stores/deepDive.js';
  import Icon from './Icon.svelte';

  export let label = 'Mehr erfahren';
  export let deepDiveId = '';
  export let variant = 'inline'; // 'inline' | 'block' | 'icon'

  function handleClick() {
    openDeepDive(deepDiveId);
  }
</script>

<button
  class="deep-dive-trigger {variant}"
  on:click={handleClick}
  aria-label="Deep Dive öffnen: {label}"
>
  <span class="trigger-icon"><Icon name="arrow-left" size={16} /></span>
  <span class="trigger-label">{label}</span>
  <span class="trigger-hint">Deep Dive</span>
</button>

<style>
  .deep-dive-trigger {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs, 0.25rem);
    padding: 0.25rem 0.5rem;
    background: transparent;
    border: 1px dashed var(--color-slate, #607D8B);
    border-radius: 4px;
    font-size: 0.85rem;
    color: var(--color-slate, #607D8B);
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
  }

  .deep-dive-trigger:hover {
    background: rgba(96, 125, 139, 0.1);
    border-color: var(--color-terracotta, #BF5B3E);
    color: var(--color-terracotta, #BF5B3E);
  }

  .deep-dive-trigger:hover .trigger-icon {
    transform: translateX(-4px);
  }

  .trigger-icon {
    font-size: 1rem;
    transition: transform 0.2s ease;
  }

  .trigger-label {
    font-weight: 500;
  }

  .trigger-hint {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    opacity: 0.7;
    padding-left: var(--space-xs, 0.25rem);
    border-left: 1px solid currentColor;
    margin-left: var(--space-xs, 0.25rem);
  }

  /* Block variant - full width */
  .deep-dive-trigger.block {
    display: flex;
    width: 100%;
    padding: var(--space-sm, 0.5rem) var(--space-md, 1rem);
    margin: var(--space-md, 1rem) 0;
    justify-content: flex-start;
  }

  /* Icon-only variant */
  .deep-dive-trigger.icon {
    padding: var(--space-xs, 0.25rem);
    border-radius: 50%;
    width: 32px;
    height: 32px;
    justify-content: center;
  }

  .deep-dive-trigger.icon .trigger-label,
  .deep-dive-trigger.icon .trigger-hint {
    display: none;
  }

  /* Mobile adjustments */
  @media (max-width: 767px) {
    .trigger-hint {
      display: none;
    }
  }
</style>
