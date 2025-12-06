<script>
  import { currentPhase, phaseBoundaries, globalProgress, phaseProgress, totalScrollLength } from '../stores/scroll.js';

  function scrollToPhase(index) {
    const phaseId = phaseBoundaries[index].id;
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

  // Sub-items for each phase (what content appears)
  const phaseSubItems = [
    // Intro
    ['Definition', 'System 1.42', 'Herausforderung', 'Methodik'],
    // Phase 1: Vorbereitung
    ['Materialien', 'README.md', 'Epistemischer Rahmen'],
    // Phase 2: Exploration
    ['DATA-Phase', 'Chat-Dialog', 'EXPLORATION', 'Entitäten'],
    // Phase 3: Destillation
    ['REQUIREMENTS', 'Vault', 'Context Compression'],
    // Phase 4: Implementation
    ['IMPLEMENTATION', 'Iterativer Dialog', 'Browser-Ansicht', 'PROTOTYPE'],
    // Outro
    ['Konklusion', 'Case Studies', 'Ressourcen'],
  ];

  // Calculate line fill percentage based on current phase and progress
  $: lineFillPercent = (() => {
    const totalPhases = phaseBoundaries.length - 1;
    const basePercent = ($currentPhase / totalPhases) * 100;
    // Add partial progress within current phase
    const phaseContribution = (1 / totalPhases) * $phaseProgress * 100;
    return Math.min(100, basePercent + phaseContribution);
  })();

  // Calculate phase duration as percentage for visual weight
  function getPhaseDuration(index) {
    const boundary = phaseBoundaries[index];
    return ((boundary.end - boundary.start) / totalScrollLength) * 100;
  }
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
      {@const subItems = phaseSubItems[index] || []}
      {@const duration = getPhaseDuration(index)}

      <li class:expanded={isActive}>
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

          <!-- Duration indicator (visual hint of phase length) -->
          {#if isActive}
            <span class="duration-hint" title="{Math.round(duration)}% der Gesamtlänge">
              {#if duration > 15}●●●{:else if duration > 10}●●{:else}●{/if}
            </span>
          {/if}
        </button>

        <!-- Sub-items (only visible when active) -->
        {#if isActive && subItems.length > 0}
          <div class="sub-items">
            <!-- Mini progress bar for current phase -->
            <div class="phase-progress-bar">
              <div class="phase-progress-fill" style="width: {$phaseProgress * 100}%;"></div>
            </div>

            <ul class="sub-list">
              {#each subItems as item, subIndex}
                {@const subProgress = subIndex / (subItems.length - 1)}
                {@const isSubActive = $phaseProgress >= subProgress - 0.05 && $phaseProgress < subProgress + (1 / subItems.length)}
                {@const isSubCompleted = $phaseProgress > subProgress + (1 / subItems.length) * 0.5}

                <li
                  class="sub-item"
                  class:sub-active={isSubActive}
                  class:sub-completed={isSubCompleted}
                >
                  <span class="sub-dot"></span>
                  <span class="sub-label">{item}</span>
                </li>
              {/each}
            </ul>
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
    background: var(--color-slate);
    opacity: 0.3;
    border-radius: 1px;
  }

  .line-fill {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--color-terracotta);
    border-radius: 1px;
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

  li.expanded {
    margin-bottom: var(--space-xs);
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

  /* Duration hint */
  .duration-hint {
    font-size: 0.5rem;
    color: var(--color-terracotta);
    opacity: 0.6;
    margin-left: var(--space-xs);
    letter-spacing: 1px;
  }

  /* Sub-items styling */
  .sub-items {
    margin-left: 20px;
    padding-left: var(--space-sm);
    border-left: 1px solid rgba(96, 125, 139, 0.2);
    animation: slideIn 0.3s var(--ease-out);
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Mini progress bar for current phase */
  .phase-progress-bar {
    width: 60px;
    height: 3px;
    background: rgba(96, 125, 139, 0.2);
    border-radius: 2px;
    margin: var(--space-xs) 0;
    overflow: hidden;
  }

  .phase-progress-fill {
    height: 100%;
    background: var(--color-terracotta);
    border-radius: 2px;
    transition: width 0.2s var(--ease-out);
  }

  .sub-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 0;
    margin: 0;
  }

  .sub-item {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 2px 0;
    transition: all 0.2s var(--ease-out);
  }

  .sub-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--color-slate);
    opacity: 0.4;
    flex-shrink: 0;
    transition: all 0.2s var(--ease-out);
  }

  .sub-label {
    font-size: 0.65rem;
    color: var(--color-slate);
    opacity: 0.6;
    transition: all 0.2s var(--ease-out);
  }

  .sub-item.sub-active .sub-dot {
    background: var(--color-terracotta);
    opacity: 1;
    transform: scale(1.5);
  }

  .sub-item.sub-active .sub-label {
    color: var(--color-terracotta);
    opacity: 1;
    font-weight: 500;
  }

  .sub-item.sub-completed .sub-dot {
    background: var(--color-terracotta);
    opacity: 0.6;
  }

  .sub-item.sub-completed .sub-label {
    opacity: 0.5;
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

    .duration-hint {
      display: none;
    }

    .sub-items {
      display: none;
    }
  }
</style>
