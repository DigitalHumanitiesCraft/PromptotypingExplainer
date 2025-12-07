<script>
  import { currentPhase, currentStep, stepStructure } from '../stores/scroll.js';

  $: phase = stepStructure[$currentPhase] || stepStructure[0];
  $: step = phase.steps[$currentStep] || phase.steps[0];
</script>

<header class="phase-header">
  <div class="header-content">
    <!-- Phase badge -->
    <div class="phase-badge">
      {#if phase.number}
        <span class="phase-number">Phase {phase.number}</span>
      {:else}
        <span class="phase-tag">{phase.subtitle}</span>
      {/if}
    </div>

    <!-- Title + Current Step -->
    <div class="title-group">
      <h2 class="phase-title">{phase.label}</h2>
      {#if step}
        <span class="step-separator">—</span>
        <span class="current-step">{step.label}</span>
      {/if}
    </div>

    <!-- Navigation Links -->
    <nav class="header-nav">
      <a href="/PromptotypingExplainer/about.html" class="nav-link">About</a>
      <a href="/PromptotypingExplainer/vault.html" class="nav-link">Vault</a>
      <a href="/PromptotypingExplainer/glossar.html" class="nav-link">Glossar</a>
      <a href="/PromptotypingExplainer/bibliographie.html" class="nav-link">Bibliographie</a>
    </nav>
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

  .header-nav {
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }

  .nav-link {
    font-size: 0.8rem;
    color: var(--color-slate);
    text-decoration: none;
    padding: 4px 12px;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .nav-link:hover {
    color: var(--color-terracotta);
    background: rgba(191, 91, 62, 0.1);
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

    .header-nav {
      display: none;
    }
  }
</style>
