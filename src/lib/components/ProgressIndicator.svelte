<script>
  import { currentPhase } from '../stores/scroll.js';
  import { phases } from '../data/phases.js';

  function scrollToPhase(index) {
    const phaseId = phases[index].id;
    const element = document.getElementById(phaseId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleKeydown(event, index) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToPhase(index);
    }
  }
</script>

<nav class="progress-indicator" aria-label="Phasen-Navigation">
  <ul>
    {#each phases as phase, index}
      <li>
        <button
          class="progress-dot"
          class:active={$currentPhase === index}
          on:click={() => scrollToPhase(index)}
          on:keydown={(e) => handleKeydown(e, index)}
          aria-label="Zu {phase.title} springen"
          aria-current={$currentPhase === index ? 'step' : undefined}
        >
          <span class="dot"></span>
          <span class="label">{phase.number ? `Phase ${phase.number}` : phase.title}</span>
        </button>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .progress-indicator {
    position: fixed;
    right: var(--space-lg);
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }

  .progress-dot {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--space-xs);
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--color-slate);
    transition: all var(--duration-fast) var(--ease-out);
  }

  .progress-dot.active .dot {
    background-color: var(--color-terracotta);
    transform: scale(1.3);
  }

  .label {
    font-size: 0.75rem;
    color: var(--color-slate);
    opacity: 0;
    transform: translateX(-8px);
    transition: all var(--duration-fast) var(--ease-out);
    white-space: nowrap;
  }

  .progress-dot:hover .label,
  .progress-dot:focus .label,
  .progress-dot.active .label {
    opacity: 1;
    transform: translateX(0);
  }

  .progress-dot.active .label {
    color: var(--color-terracotta);
    font-weight: 600;
  }

  .progress-dot:focus {
    outline: 2px solid var(--color-terracotta);
    outline-offset: 4px;
    border-radius: 4px;
  }

  /* Mobile: horizontal am unteren Rand */
  @media (max-width: 767px) {
    .progress-indicator {
      right: auto;
      left: 50%;
      top: auto;
      bottom: var(--space-md);
      transform: translateX(-50%);
    }

    ul {
      flex-direction: row;
    }

    .label {
      display: none;
    }
  }
</style>
