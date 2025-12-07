<script>
  import { currentPhase, phaseProgress, phaseBoundaries } from '../stores/scroll.js';

  // Phase metadata with sub-steps
  const phaseData = [
    { number: null, title: 'Promptotyping', subtitle: 'Einführung', steps: ['Definition', 'Kernprinzip', 'Methodik', 'Phasen'] },
    { number: 1, title: 'Vorbereitung', subtitle: 'Materialsammlung', steps: ['Sammeln', 'Zusammenführen', 'Workspace'] },
    { number: 2, title: 'Exploration', subtitle: 'Datenanalyse', steps: ['Struktur', 'Entitäten', 'Fragen'] },
    { number: 3, title: 'Destillation', subtitle: 'Wissenskomprimierung', steps: ['Layout', 'Dokumente', 'Vault'] },
    { number: 4, title: 'Implementation', subtitle: 'Iterative Entwicklung', steps: ['Dialog', 'Iteration', 'Rückschleifen'] },
    { number: null, title: 'Praxis', subtitle: 'Case Studies', steps: ['Beispiele', 'Zusammenfassung'] },
  ];

  $: current = phaseData[$currentPhase] || phaseData[0];
  $: steps = current.steps || [];
  $: currentStepIndex = Math.min(Math.floor($phaseProgress * steps.length), steps.length - 1);
  $: currentStep = steps[currentStepIndex] || '';
</script>

<header class="phase-header">
  <div class="header-content">
    <!-- Phase badge -->
    <div class="phase-badge">
      {#if current.number}
        <span class="phase-number">Phase {current.number}</span>
      {:else}
        <span class="phase-tag">{current.subtitle}</span>
      {/if}
    </div>

    <!-- Title + Current Step -->
    <div class="title-group">
      <h2 class="phase-title">{current.title}</h2>
      {#if currentStep}
        <span class="step-separator">—</span>
        <span class="current-step">{currentStep}</span>
      {/if}
    </div>
  </div>
</header>

<style>
  .phase-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 90;
    background: rgba(232, 232, 232, 0.95);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(96, 125, 139, 0.1);
  }

  .header-content {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-sm) var(--space-lg);
    max-width: 1200px;
    margin: 0 auto;
  }

  .phase-badge {
    flex-shrink: 0;
  }

  .phase-number {
    display: inline-block;
    background: var(--color-terracotta);
    color: var(--color-white);
    font-size: 0.7rem;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .phase-tag {
    display: inline-block;
    background: var(--color-slate);
    color: var(--color-white);
    font-size: 0.7rem;
    font-weight: 500;
    padding: 2px 8px;
    border-radius: 10px;
  }

  .title-group {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    flex-grow: 1;
  }

  .phase-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-black);
    margin: 0;
  }

  .step-separator {
    color: var(--color-slate);
    opacity: 0.5;
  }

  .current-step {
    font-size: 0.9rem;
    color: var(--color-terracotta);
    font-weight: 500;
  }

  /* Mobile adjustments */
  @media (max-width: 767px) {
    .header-content {
      padding: var(--space-xs) var(--space-md);
    }

    .phase-title {
      font-size: 0.9rem;
    }

    .current-step {
      font-size: 0.8rem;
    }
  }
</style>
