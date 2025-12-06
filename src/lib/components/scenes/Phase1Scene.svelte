<script>
  import { phases } from '../../data/phases.js';
  import DocumentIcon from '../elements/DocumentIcon.svelte';

  export let progress = 0;

  const phase = phases[1];

  // Animation thresholds
  // 0-0.15: Titel erscheint
  // 0.15-0.30: Akademischer Text erscheint
  // 0.30-0.45: Icons erscheinen am Rand
  // 0.45-0.65: Icons bewegen sich zur Mitte
  // 0.65-0.85: Icons stapeln sich
  // 0.85-1.0: Labels erscheinen

  $: titleOpacity = Math.min(1, progress / 0.15);

  // Akademischer Text
  $: textOpacity = progress > 0.15 ? Math.min(1, (progress - 0.15) / 0.15) : 0;

  $: iconsVisible = progress > 0.30;
  $: iconProgress = progress > 0.30 ? Math.min(1, (progress - 0.30) / 0.15) : 0;

  // Move progress: 0.45 - 0.65
  $: moveProgress = progress > 0.45 ? Math.min(1, (progress - 0.45) / 0.2) : 0;

  // Stack progress: 0.65 - 0.85
  $: stackProgress = progress > 0.65 ? Math.min(1, (progress - 0.65) / 0.2) : 0;

  // Label progress: 0.85 - 1.0
  $: labelOpacity = progress > 0.85 ? Math.min(1, (progress - 0.85) / 0.15) : 0;

  // Pulse animation when complete
  $: pulseActive = progress > 0.95;

  // Calculate icon positions
  const startPositions = [
    { x: -200, y: -100 },
    { x: 200, y: -100 },
    { x: -200, y: 100 },
    { x: 200, y: 100 },
  ];

  const stackOffsets = [
    { x: -30, y: -20, rotate: -5 },
    { x: 30, y: -10, rotate: 8 },
    { x: -20, y: 10, rotate: -3 },
    { x: 20, y: 20, rotate: 5 },
  ];

  function getIconStyle(index) {
    const start = startPositions[index];
    const stack = stackOffsets[index];

    // Interpolate from start to center, then to stack
    let x, y, rotate;

    if (moveProgress < 1) {
      // Moving to center
      x = start.x * (1 - moveProgress);
      y = start.y * (1 - moveProgress);
      rotate = 0;
    } else {
      // Stacking
      x = stack.x * stackProgress;
      y = stack.y * stackProgress;
      rotate = stack.rotate * stackProgress;
    }

    const opacity = iconProgress;
    const scale = 0.8 + (iconProgress * 0.2);

    return `transform: translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale}); opacity: ${opacity};`;
  }
</script>

<div class="phase1-scene">
  <header class="phase-header" style="opacity: {titleOpacity};">
    <span class="phase-number">Phase 1</span>
    <h2>{phase.title}</h2>
    <p class="metaphor">{phase.metaphor}</p>
  </header>

  <div class="academic-text" style="opacity: {textOpacity};">
    <p>
      Die CONTEXT-Phase etabliert durch <code>README.md</code> den epistemischen Rahmen.
      Forschungsfragen, theoretische Vorannahmen und methodische Constraints werden expliziert.
    </p>
    <p class="highlight">
      Diese Phase verhindert die unkritische Übernahme technischer Lösungen
      für wissenschaftliche Probleme und zwingt zur präzisen Artikulation der Projektziele.
    </p>
  </div>

  <div class="workspace" class:pulse={pulseActive}>
    <div class="workspace-area">
      {#if iconsVisible}
        {#each phase.artifacts as artifact, i}
          <div class="icon-wrapper" style={getIconStyle(i)}>
            <DocumentIcon type={artifact.type} />
            <span class="icon-label" style="opacity: {labelOpacity};">
              {artifact.label}
            </span>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</div>

<style>
  .phase1-scene {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-xl);
    padding: var(--space-lg);
  }

  .phase-header {
    text-align: center;
  }

  .phase-number {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-terracotta);
    font-weight: 600;
  }

  h2 {
    color: var(--color-black);
    margin: var(--space-xs) 0;
  }

  .metaphor {
    font-style: italic;
    color: var(--color-slate);
  }

  .academic-text {
    max-width: 600px;
    text-align: center;
    line-height: 1.7;
  }

  .academic-text p {
    font-size: clamp(0.9rem, 1.6vw, 1.05rem);
    color: var(--color-slate);
    margin-bottom: var(--space-sm);
  }

  .academic-text code {
    background: rgba(96, 125, 139, 0.1);
    padding: 0.15em 0.4em;
    border-radius: 4px;
    font-size: 0.9em;
  }

  .academic-text .highlight {
    color: var(--color-black);
    font-weight: 500;
  }

  .workspace {
    position: relative;
    width: 100%;
    max-width: 600px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .workspace-area {
    position: relative;
    width: 200px;
    height: 200px;
    border: 2px dashed var(--color-slate);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .workspace.pulse .workspace-area {
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      border-color: var(--color-slate);
      box-shadow: 0 0 0 0 rgba(191, 91, 62, 0);
    }
    50% {
      border-color: var(--color-terracotta);
      box-shadow: 0 0 0 8px rgba(191, 91, 62, 0.1);
    }
  }

  .icon-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
    transition: none;
  }

  .icon-label {
    font-size: 0.75rem;
    color: var(--color-black);
    white-space: nowrap;
  }

  @media (max-width: 767px) {
    .workspace {
      height: 250px;
    }

    .workspace-area {
      width: 160px;
      height: 160px;
    }
  }
</style>
