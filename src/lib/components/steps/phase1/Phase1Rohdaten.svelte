<script>
  import { fly, fade } from 'svelte/transition';
  import DocumentIcon from '../../elements/DocumentIcon.svelte';
  import { phases } from '../../../data/phases.js';

  const artifacts = phases[1].artifacts;

  // Positionen für schwebende Icons (relativ zum Zentrum)
  const positions = [
    { x: -140, y: -70, delay: 0 },
    { x: 130, y: -50, delay: 100 },
    { x: -110, y: 70, delay: 200 },
    { x: 150, y: 60, delay: 300 },
  ];
</script>

<div class="phase1-rohdaten">
  <h3 in:fade={{ duration: 400 }}>Rohmaterialien sammeln</h3>
  <p class="description" in:fade={{ delay: 150, duration: 400 }}>
    Forschungsdaten in verschiedenen Formaten bilden die Grundlage
  </p>

  <div class="materials-cloud">
    {#each artifacts as artifact, i}
      <div
        class="material-item"
        style="--offset-x: {positions[i].x}px; --offset-y: {positions[i].y}px;"
        in:fly={{ x: positions[i].x > 0 ? 100 : -100, y: -30, duration: 500, delay: 300 + positions[i].delay }}
      >
        <div class="icon-container">
          <DocumentIcon type={artifact.type} />
        </div>
        <span class="label" in:fade={{ delay: 500 + positions[i].delay }}>{artifact.label}</span>
      </div>
    {/each}
  </div>
</div>

<style>
  .phase1-rohdaten {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
    text-align: center;
  }

  h3 {
    color: var(--color-black);
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    margin: 0;
  }

  .description {
    color: var(--color-slate);
    font-size: clamp(0.9rem, 1.6vw, 1.05rem);
    max-width: 500px;
    margin: 0;
  }

  .materials-cloud {
    position: relative;
    width: 100%;
    max-width: 500px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .material-item {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
    transform: translate(var(--offset-x), var(--offset-y));
    transition: transform 0.3s ease;
  }

  .material-item:hover {
    transform: translate(var(--offset-x), var(--offset-y)) scale(1.1);
  }

  .icon-container {
    padding: var(--space-sm);
    background: rgba(255, 255, 255, 0.8);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .label {
    font-size: 0.8rem;
    color: var(--color-black);
    font-weight: 500;
    white-space: nowrap;
  }

  @media (max-width: 767px) {
    .materials-cloud {
      height: 240px;
      max-width: 320px;
    }

    .material-item {
      --offset-x: calc(var(--offset-x) * 0.6);
      --offset-y: calc(var(--offset-y) * 0.7);
    }
  }
</style>
