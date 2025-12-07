<script>
  import { currentPhase, currentStep, stepStructure, globalStepIndex, totalSteps, scrollToStep } from '../stores/scroll.js';

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

  // Calculate line fill percentage
  $: lineFillPercent = ($globalStepIndex / (totalSteps - 1)) * 100;
</script>

<nav class="progress-indicator" aria-label="Phasen-Navigation">
  <!-- Connection line -->
  <div class="connection-line">
    <div class="line-track"></div>
    <div class="line-fill" style="height: {lineFillPercent}%;"></div>
  </div>

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
          <span class="label">{phase.label}</span>
        </button>

        <!-- Sub-steps (only for active phase) -->
        {#if isActivePhase}
          <div class="sub-steps">
            {#each phase.steps as step, stepIndex}
              {@const isActiveStep = $currentStep === stepIndex}
              {@const isCompletedStep = $currentStep > stepIndex}
              <button
                class="step-dot"
                class:active={isActiveStep}
                class:completed={isCompletedStep}
                title={step.label}
                aria-label="Zu {step.label} springen"
                on:click={() => handleStepClick(phaseIndex, stepIndex)}
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

  /* Connection line between dots */
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
    padding: 0;
    margin: 0;
  }

  .phase-item {
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

  /* Sub-steps */
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

  /* Mobile: horizontal at bottom */
  @media (max-width: 767px) {
    .progress-indicator {
      right: auto;
      left: 50%;
      top: auto;
      bottom: var(--space-md);
      transform: translateX(-50%);
    }

    .connection-line {
      display: none;
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
