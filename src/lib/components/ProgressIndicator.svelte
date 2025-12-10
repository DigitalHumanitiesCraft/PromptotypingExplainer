<script>
  import { currentPhase, currentStep, stepStructure, scrollToStep, globalStepIndex, totalSteps } from '../stores/scroll.js';

  // Check if we're at the last step
  $: isLastStep = $globalStepIndex >= totalSteps - 1;

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

  // Get the ID of the next step
  function getNextStepId() {
    const currentGlobalIndex = $globalStepIndex;
    let stepCounter = 0;

    for (let phaseIdx = 0; phaseIdx < stepStructure.length; phaseIdx++) {
      const phase = stepStructure[phaseIdx];
      for (let stepIdx = 0; stepIdx < phase.steps.length; stepIdx++) {
        if (stepCounter === currentGlobalIndex + 1) {
          return `${phase.id}-${phase.steps[stepIdx].id}`;
        }
        stepCounter++;
      }
    }
    return null;
  }

  function scrollToNextSection() {
    const nextId = getNextStepId();
    if (nextId) {
      const element = document.getElementById(nextId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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

  <!-- Scroll to next section button -->
  {#if !isLastStep}
    <button
      class="scroll-nav-button"
      on:click={scrollToNextSection}
      aria-label="Zum nächsten Abschnitt scrollen"
    >
      <span class="scroll-arrow"></span>
    </button>
  {/if}
</nav>

<style>
  .progress-indicator {
    position: fixed;
    right: var(--space-lg);
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    padding: var(--space-md) var(--space-md) var(--space-md) var(--space-sm);
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(96, 125, 139, 0.1);
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
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
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--color-slate);
    transition: all var(--duration-fast) var(--ease-out);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    flex-shrink: 0;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  .check-icon {
    width: 11px;
    height: 11px;
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
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--color-slate);
    opacity: 0.7;
    text-align: left;
    transition: all var(--duration-fast) var(--ease-out);
    white-space: nowrap;
  }

  .phase-number {
    font-size: 0.65rem;
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
    width: 11px;
    height: 11px;
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
    font-size: 0.8rem;
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

  /* Scroll to next button - integrated */
  .scroll-nav-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 36px;
    margin-top: var(--space-sm);
    padding-top: var(--space-sm);
    border-top: 1px solid rgba(96, 125, 139, 0.15);
    background: none;
    border-left: none;
    border-right: none;
    border-bottom: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .scroll-nav-button:hover {
    background: rgba(191, 91, 62, 0.08);
    border-radius: 8px;
  }

  .scroll-nav-button:hover .scroll-arrow {
    border-color: var(--color-terracotta);
    animation: bounceDown 0.6s ease-in-out infinite;
  }

  .scroll-nav-button:focus {
    outline: 2px solid var(--color-terracotta);
    outline-offset: 2px;
    border-radius: 8px;
  }

  .scroll-arrow {
    width: 12px;
    height: 12px;
    border-right: 2px solid var(--color-slate);
    border-bottom: 2px solid var(--color-slate);
    transform: rotate(45deg) translateY(-2px);
    transition: border-color 0.3s ease;
  }

  @keyframes bounceDown {
    0%, 100% {
      transform: rotate(45deg) translateY(-2px);
    }
    50% {
      transform: rotate(45deg) translateY(2px);
    }
  }

  /* Respect reduced motion preference */
  @media (prefers-reduced-motion: reduce) {
    .scroll-nav-button:hover .scroll-arrow {
      animation: none;
    }
  }

  /* Mobile: horizontal at bottom */
  @media (max-width: 767px) {
    .progress-indicator {
      right: auto;
      left: 50%;
      top: auto;
      bottom: var(--space-md);
      transform: translateX(-50%);
      padding: var(--space-sm) var(--space-md);
      border-radius: 24px;
    }

    ul {
      flex-direction: row;
      gap: var(--space-sm);
    }

    .label-container {
      display: none;
    }

    .sub-steps {
      display: none;
    }
  }
</style>
