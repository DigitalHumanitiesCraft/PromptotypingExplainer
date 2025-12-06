<script>
  import { currentPhase, phaseProgress, phaseBoundaries } from '../stores/scroll.js';

  // Phase metadata
  const phaseData = [
    { number: null, title: 'Promptotyping', subtitle: 'Einführung' },
    { number: 1, title: 'Vorbereitung', subtitle: 'Mise en place' },
    { number: 2, title: 'Exploration', subtitle: 'Kartierung' },
    { number: 3, title: 'Destillation', subtitle: 'Reduktion' },
    { number: 4, title: 'Implementation', subtitle: 'Ping-Pong' },
    { number: null, title: 'Praxis', subtitle: 'Case Studies' },
  ];

  $: current = phaseData[$currentPhase] || phaseData[0];
  $: progressPercent = Math.round($phaseProgress * 100);
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

    <!-- Title -->
    <h2 class="phase-title">{current.title}</h2>

    <!-- Progress indicator -->
    <div class="progress-wrapper">
      <div class="progress-bar">
        <div class="progress-fill" style="width: {progressPercent}%;"></div>
      </div>
      <span class="progress-text">{progressPercent}%</span>
    </div>
  </div>

  <!-- Full-width progress line at bottom -->
  <div class="header-progress-line">
    <div class="header-progress-fill" style="width: {progressPercent}%;"></div>
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

  .phase-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-black);
    margin: 0;
    flex-grow: 1;
  }

  .progress-wrapper {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    flex-shrink: 0;
  }

  .progress-bar {
    width: 80px;
    height: 4px;
    background: rgba(96, 125, 139, 0.2);
    border-radius: 2px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: var(--color-terracotta);
    border-radius: 2px;
    transition: width 0.15s ease-out;
  }

  .progress-text {
    font-size: 0.7rem;
    font-weight: 600;
    color: var(--color-slate);
    min-width: 32px;
    text-align: right;
    font-variant-numeric: tabular-nums;
  }

  /* Full-width progress line */
  .header-progress-line {
    height: 2px;
    background: transparent;
  }

  .header-progress-fill {
    height: 100%;
    background: var(--color-terracotta);
    transition: width 0.15s ease-out;
  }

  /* Mobile adjustments */
  @media (max-width: 767px) {
    .header-content {
      padding: var(--space-xs) var(--space-md);
    }

    .phase-title {
      font-size: 0.9rem;
    }

    .progress-bar {
      width: 50px;
    }
  }
</style>
