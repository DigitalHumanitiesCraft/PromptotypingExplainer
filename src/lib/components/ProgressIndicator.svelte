<script>
  import { currentPhase, currentStep, stepStructure, scrollToStep } from '../stores/scroll.js';

  function handlePhaseClick(phaseIndex) {
    const phase = stepStructure[phaseIndex];
    const stepId = `${phase.id}-${phase.steps[0].id}`;
    scrollToStep(stepId);
  }

  function handleStepClick(phaseIndex, stepIndex) {
    const phase = stepStructure[phaseIndex];
    const step = phase.steps[stepIndex];
    const stepId = `${phase.id}-${step.id}`;
    scrollToStep(stepId);
  }

  function handleKeydown(event, phaseIndex) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handlePhaseClick(phaseIndex);
    }
  }
</script>

<nav class="progress-indicator" aria-label="Phasen-Navigation">
  <ul>
    {#each stepStructure as phase, phaseIndex}
      {@const isActivePhase = $currentPhase === phaseIndex}
      {@const isCompletedPhase = $currentPhase > phaseIndex}

      <li class="phase-item">
        <button
          class="progress-dot"
          class:active={isActivePhase}
          class:completed={isCompletedPhase}
          on:click={() => handlePhaseClick(phaseIndex)}
          on:keydown={(e) => handleKeydown(e, phaseIndex)}
          aria-label="Zu {phase.label} springen"
          aria-current={isActivePhase ? 'step' : undefined}
        >
          <span class="dot">
            {#if isCompletedPhase}
              <svg class="check-icon" viewBox="0 0 12 12" fill="none">
                <path d="M2 6L5 9L10 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            {/if}
          </span>
          <span class="label-container">
            <span class="label">{phase.label}</span>
            {#if phase.number}
              <span class="phase-number">Phase {phase.number}</span>
            {/if}
          </span>
        </button>

        <!-- Sub-steps (only for active phase) - vertical with labels -->
        {#if isActivePhase}
          <div class="sub-steps">
            {#each phase.steps as step, stepIndex}
              {@const isActiveStep = $currentStep === stepIndex}
              {@const isCompletedStep = $currentStep > stepIndex}
              <button
                class="step-dot"
                class:active={isActiveStep}
                class:completed={isCompletedStep}
                aria-label="Zu {step.label} springen"
                on:click={() => handleStepClick(phaseIndex, stepIndex)}
              >
                <span class="step-dot-marker"></span>
                <span class="step-label">{step.label}</span>
              </button>
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
    right: var(--space-xl);
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
    position: relative;
    padding: 0;
    margin: 0;
  }

  .phase-item {
    display: flex;
    flex-direction: column;
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
    width: 18px;
    height: 18px;
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
    width: 10px;
    height: 10px;
    color: var(--color-white);
  }

  .progress-dot.completed .dot {
    background-color: var(--color-terracotta);
    opacity: 0.7;
  }

  .progress-dot.active .dot {
    background-color: var(--color-terracotta);
    transform: scale(1.4);
    box-shadow: 0 0 0 5px rgba(191, 91, 62, 0.25);
  }

  .label-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1px;
  }

  .label {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--color-slate);
    opacity: 0.7;
    text-align: left;
    transition: all var(--duration-fast) var(--ease-out);
    white-space: nowrap;
  }

  .phase-number {
    font-size: 0.6rem;
    color: var(--color-slate);
    opacity: 0.5;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .progress-dot:hover .label,
  .progress-dot:focus .label {
    opacity: 1;
  }

  .progress-dot.active .label {
    opacity: 1;
    color: var(--color-terracotta);
    font-weight: 600;
  }

  .progress-dot.active .phase-number {
    opacity: 0.8;
    color: var(--color-terracotta);
  }

  .progress-dot.completed .label {
    color: var(--color-terracotta);
    opacity: 0.7;
  }

  .progress-dot.completed .phase-number {
    color: var(--color-terracotta);
    opacity: 0.5;
  }

  .progress-dot:focus {
    outline: 2px solid var(--color-terracotta);
    outline-offset: 4px;
    border-radius: 4px;
  }

  /* Sub-steps - aligned left with labels to the right */
  .sub-steps {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: var(--space-sm);
    margin-left: 4px; /* Align with main dot */
    padding: var(--space-xs) 0;
  }

  .step-dot {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    background: none;
    border: none;
    cursor: pointer;
    padding: 2px 4px;
  }

  .step-dot-marker {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--color-slate);
    opacity: 0.4;
    transition: all 0.2s ease;
    flex-shrink: 0;
  }

  .step-dot:hover .step-dot-marker {
    transform: scale(1.2);
    opacity: 0.7;
  }

  .step-dot:focus {
    outline: 2px solid var(--color-terracotta);
    outline-offset: 2px;
    border-radius: 4px;
  }

  .step-dot.completed .step-dot-marker {
    background: var(--color-terracotta);
    opacity: 0.6;
  }

  .step-dot.active .step-dot-marker {
    background: var(--color-terracotta);
    opacity: 1;
    transform: scale(1.2);
  }

  .step-label {
    font-size: 0.7rem;
    color: var(--color-slate);
    opacity: 0.6;
    white-space: nowrap;
    transition: all 0.2s ease;
  }

  .step-dot:hover .step-label {
    opacity: 0.9;
  }

  .step-dot.active .step-label {
    color: var(--color-terracotta);
    opacity: 1;
    font-weight: 500;
  }

  .step-dot.completed .step-label {
    color: var(--color-terracotta);
    opacity: 0.6;
  }

  /* Mobile: horizontal at bottom */
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
      gap: var(--space-md);
    }

    .sub-steps {
      display: none;
    }
  }
</style>
