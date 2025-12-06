<script>
  import { currentPhase, phaseBoundaries, phaseProgress } from '../stores/scroll.js';

  function scrollToPhase(index) {
    const phase = phaseBoundaries[index];
    window.location.hash = phase.id;
  }

  function scrollToStep(phaseIndex, stepIndex) {
    const phase = phaseBoundaries[phaseIndex];
    const stepId = phase.steps?.[stepIndex];
    if (stepId) {
      window.location.hash = `${phase.id}-${stepId}`;
    }
  }

  function handleKeydown(event, index) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToPhase(index);
    }
  }

  // Calculate line fill percentage based on current phase and progress
  $: lineFillPercent = (() => {
    const totalPhases = phaseBoundaries.length - 1;
    const basePercent = ($currentPhase / totalPhases) * 100;
    const phaseContribution = (1 / totalPhases) * $phaseProgress * 100;
    return Math.min(100, basePercent + phaseContribution);
  })();

  // Sub-steps for each phase (matching animation thresholds in scenes)
  const phaseSteps = [
    ['Definition', 'System 1.42', 'Herausforderung', 'Methodik', 'Phasen'],
    ['Titel', 'Text', 'Sammeln', 'Zusammenführen', 'Workspace'],
    ['DATA', 'Dialog', 'Exploration', 'Entitäten'],
    ['Requirements', 'Layout', 'Partikel', 'Dokumente'],
    ['Implementation', 'Expert', 'Dialog', 'Browser', 'Loops'],
    ['Konklusion', 'Screenshot', 'Cases', 'Imperative'],
  ];
</script>

<nav class="progress-indicator" aria-label="Phasen-Navigation">
  <!-- Connection line -->
  <div class="connection-line">
    <div class="line-track"></div>
    <div class="line-fill" style="height: {lineFillPercent}%;"></div>
  </div>

  <ul>
    {#each phaseBoundaries as phase, index}
      {@const isActive = $currentPhase === index}
      {@const isCompleted = $currentPhase > index}
      {@const steps = phaseSteps[index] || []}
      {@const activeStepIndex = Math.floor($phaseProgress * steps.length)}

      <li>
        <button
          class="progress-dot"
          class:active={isActive}
          class:completed={isCompleted}
          on:click={() => scrollToPhase(index)}
          on:keydown={(e) => handleKeydown(e, index)}
          aria-label="Zu {phase.label} springen"
          aria-current={isActive ? 'step' : undefined}
        >
          <span class="dot">
            {#if isCompleted}
              <svg class="check-icon" viewBox="0 0 12 12" fill="none">
                <path d="M2 6L5 9L10 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            {/if}
          </span>
          <span class="label">{phase.label}</span>
        </button>

        <!-- Sub-steps indicator (only for active phase) -->
        {#if isActive && steps.length > 0}
          <div class="sub-steps">
            {#each steps as step, stepIndex}
              <button
                class="step-dot"
                class:active={stepIndex === activeStepIndex}
                class:completed={stepIndex < activeStepIndex}
                title={step}
                aria-label="Zu {step} springen"
                on:click={() => scrollToStep(index, stepIndex)}
              ></button>
            {/each}
          </div>
        {/if}
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

  /* Connection line between dots - dotted style */
  .connection-line {
    position: absolute;
    left: 5px;
    top: 6px;
    bottom: 6px;
    width: 2px;
    pointer-events: none;
  }

  .line-track {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* Dotted pattern using gradient */
    background: repeating-linear-gradient(
      to bottom,
      var(--color-slate) 0px,
      var(--color-slate) 3px,
      transparent 3px,
      transparent 8px
    );
    opacity: 0.3;
  }

  .line-fill {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* Dotted pattern using gradient */
    background: repeating-linear-gradient(
      to bottom,
      var(--color-terracotta) 0px,
      var(--color-terracotta) 3px,
      transparent 3px,
      transparent 8px
    );
    transition: height 0.3s var(--ease-out);
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    position: relative;
  }

  li {
    transition: all 0.3s var(--ease-out);
  }

  .progress-dot {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--space-xs);
    position: relative;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--color-slate);
    transition: all var(--duration-fast) var(--ease-out);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    flex-shrink: 0;
  }

  .check-icon {
    width: 8px;
    height: 8px;
    color: var(--color-white);
  }

  .progress-dot.completed .dot {
    background-color: var(--color-terracotta);
    opacity: 0.7;
  }

  .progress-dot.active .dot {
    background-color: var(--color-terracotta);
    transform: scale(1.3);
    box-shadow: 0 0 0 4px rgba(191, 91, 62, 0.2);
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

  .progress-dot.completed .label {
    color: var(--color-terracotta);
    opacity: 0.7;
  }

  .progress-dot:focus {
    outline: 2px solid var(--color-terracotta);
    outline-offset: 4px;
    border-radius: 4px;
  }

  /* Sub-steps: compact dot row under active phase */
  .sub-steps {
    display: flex;
    gap: 4px;
    margin-left: 18px;
    margin-top: 4px;
    padding: 2px 0;
  }

  .step-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-slate);
    opacity: 0.3;
    transition: all 0.2s ease;
    cursor: pointer;
    border: none;
    padding: 0;
  }

  .step-dot:hover {
    transform: scale(1.5);
    opacity: 0.6;
  }

  .step-dot:focus {
    outline: 2px solid var(--color-terracotta);
    outline-offset: 2px;
  }

  .step-dot.completed {
    background: var(--color-terracotta);
    opacity: 0.5;
  }

  .step-dot.active {
    background: var(--color-terracotta);
    opacity: 1;
    transform: scale(1.3);
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

    .connection-line {
      top: 5px;
      left: 6px;
      right: 6px;
      bottom: auto;
      width: auto;
      height: 2px;
    }

    .line-fill {
      height: 100% !important;
      width: var(--fill-percent, 0%);
      transition: width 0.4s var(--ease-out);
    }

    ul {
      flex-direction: row;
    }

    .label {
      display: none;
    }

    .sub-steps {
      display: none;
    }
  }
</style>
