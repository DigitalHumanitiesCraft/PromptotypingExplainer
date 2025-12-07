<script>
  import { fly, fade, scale } from 'svelte/transition';
  import DocumentIcon from '../../elements/DocumentIcon.svelte';
  import { phases } from '../../../data/phases.js';

  const artifacts = phases[1].artifacts;

  // Gestapelte Positionen mit leichter Rotation
  const stackOffsets = [
    { x: -22, y: -18, rotate: -6 },
    { x: 28, y: -10, rotate: 9 },
    { x: -18, y: 14, rotate: -4 },
    { x: 24, y: 22, rotate: 6 },
  ];
</script>

<div class="phase1-sammlung">
  <h3 in:fade={{ duration: 400 }}>Materialien gesammelt</h3>

  <div class="workspace" in:scale={{ duration: 400, start: 0.9 }}>
    <div class="workspace-area">
      {#each artifacts as artifact, i}
        <div
          class="icon-stacked"
          style="transform: translate({stackOffsets[i].x}px, {stackOffsets[i].y}px) rotate({stackOffsets[i].rotate}deg);"
          in:fly={{ y: -40, duration: 400, delay: 200 + i * 80 }}
        >
          <DocumentIcon type={artifact.type} />
          <span class="label" in:fade={{ delay: 550 + i * 60 }}>{artifact.label}</span>
        </div>
      {/each}
    </div>
  </div>

  <p class="ready-text" in:fade={{ delay: 700, duration: 400 }}>
    Alle Materialien bereit für die <strong>Exploration</strong>
  </p>
</div>

<style>
  .phase1-sammlung {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xl);
    text-align: center;
  }

  h3 {
    color: var(--color-black);
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    margin: 0;
  }

  .workspace {
    position: relative;
    width: 100%;
    max-width: 400px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .workspace-area {
    position: relative;
    width: 180px;
    height: 180px;
    border: 2px dashed var(--color-slate);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      border-color: var(--color-slate);
      box-shadow: 0 0 0 0 rgba(191, 91, 62, 0);
    }
    50% {
      border-color: var(--color-terracotta);
      box-shadow: 0 0 0 10px rgba(191, 91, 62, 0.08);
    }
  }

  .icon-stacked {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
    transition: transform 0.3s ease;
  }

  .icon-stacked:hover {
    z-index: 10;
    transform: translate(var(--x, 0), var(--y, 0)) rotate(0deg) scale(1.15) !important;
  }

  .label {
    font-size: 0.75rem;
    color: var(--color-black);
    font-weight: 500;
    white-space: nowrap;
    background: rgba(255, 255, 255, 0.9);
    padding: 2px 6px;
    border-radius: 4px;
  }

  .ready-text {
    color: var(--color-slate);
    font-size: clamp(0.95rem, 1.8vw, 1.1rem);
    margin: 0;
  }

  .ready-text strong {
    color: var(--color-terracotta);
  }

  @media (max-width: 767px) {
    .workspace {
      height: 240px;
    }

    .workspace-area {
      width: 150px;
      height: 150px;
    }
  }
</style>
