<script>
  import { phases } from '../../data/phases.js';
  import DocumentIcon from '../elements/DocumentIcon.svelte';
  import SceneHeader from '../blocks/SceneHeader.svelte';
  import AcademicBlock from '../blocks/AcademicBlock.svelte';
  import { fadeIn, lerp } from '../../utils/progressAnimations.js';

  export let progress = 0;

  const phase = phases[1];

  // Animation thresholds (dokumentiert in ANIMATION_GUIDE.md)
  // 0-0.15: Titel erscheint
  // 0.15-0.30: Akademischer Text erscheint
  // 0.30-0.45: Icons erscheinen am Rand
  // 0.45-0.65: Icons bewegen sich zur Mitte
  // 0.65-0.85: Icons stapeln sich
  // 0.85-1.0: Labels erscheinen

  $: titleOpacity = fadeIn(progress, 0, 0.15);
  $: textOpacity = fadeIn(progress, 0.15, 0.30);
  $: iconsVisible = progress > 0.30;
  $: iconProgress = fadeIn(progress, 0.30, 0.45);
  $: moveProgress = fadeIn(progress, 0.45, 0.65);
  $: stackProgress = fadeIn(progress, 0.65, 0.85);
  $: labelOpacity = fadeIn(progress, 0.85, 1.0);
  $: pulseActive = progress > 0.95;

  // Icon positions
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

    let x, y, rotate;

    if (moveProgress < 1) {
      x = start.x * (1 - moveProgress);
      y = start.y * (1 - moveProgress);
      rotate = 0;
    } else {
      x = stack.x * stackProgress;
      y = stack.y * stackProgress;
      rotate = stack.rotate * stackProgress;
    }

    const scale = 0.8 + (iconProgress * 0.2);
    return `transform: translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale}); opacity: ${iconProgress};`;
  }
</script>

<div class="phase1-scene">
  <SceneHeader
    number={1}
    title={phase.title}
    metaphor={phase.metaphor}
    opacity={titleOpacity}
  />

  <AcademicBlock opacity={textOpacity} maxWidth="600px">
    <p>
      Die CONTEXT-Phase etabliert durch <code>README.md</code> den epistemischen Rahmen.
      Forschungsfragen, theoretische Vorannahmen und methodische Constraints werden expliziert.
    </p>
    <p class="highlight">
      Diese Phase verhindert die unkritische Übernahme technischer Lösungen
      für wissenschaftliche Probleme und zwingt zur präzisen Artikulation der Projektziele.
    </p>
  </AcademicBlock>

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
