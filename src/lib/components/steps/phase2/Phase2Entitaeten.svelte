<script>
  import { fade, fly } from 'svelte/transition';
  import EntityIcon from '../../elements/EntityIcon.svelte';
  import { phases } from '../../../data/phases.js';

  const entities = phases[2].entities;

  // Grid positions for entities
  const positions = [
    { x: -80, y: -60 },  // Person (top-left)
    { x: 80, y: -60 },   // Ort (top-right)
    { x: -80, y: 60 },   // Zeit (bottom-left)
    { x: 80, y: 60 },    // Relation (bottom-right)
  ];
</script>

<div class="phase2-entitaeten">
  <h3 in:fade={{ duration: 400 }}>Mapping: Entitäten identifizieren</h3>
  <p class="description" in:fade={{ delay: 150, duration: 400 }}>
    Die Analyse-Scripts offenbaren das Datenmodell:
    Welche Entitäten existieren? Wie sind sie verknüpft?
  </p>

  <div class="entities-container">
    <!-- Network lines (background) -->
    <svg class="network-lines" in:fade={{ delay: 600, duration: 500 }}>
      <!-- Horizontal lines -->
      <line x1="85" y1="70" x2="175" y2="70" />
      <line x1="85" y1="170" x2="175" y2="170" />
      <!-- Vertical lines -->
      <line x1="80" y1="75" x2="80" y2="165" />
      <line x1="180" y1="75" x2="180" y2="165" />
      <!-- Diagonal lines -->
      <line x1="95" y1="85" x2="165" y2="155" />
      <line x1="165" y1="85" x2="95" y2="155" />
    </svg>

    <!-- Entity icons -->
    {#each entities as entity, i}
      <div
        class="entity-item"
        style="--x: {positions[i].x}px; --y: {positions[i].y}px;"
        in:fly={{ x: positions[i].x > 0 ? 50 : -50, y: -20, duration: 500, delay: 300 + i * 100 }}
      >
        <div class="icon-wrapper">
          <EntityIcon type={entity.type} size={48} />
        </div>
        <span class="label" in:fade={{ delay: 500 + i * 100 }}>{entity.label}</span>
      </div>
    {/each}
  </div>

  <p class="insight" in:fade={{ delay: 800, duration: 400 }}>
    Das Datenmodell wird verstanden - <strong>noch nicht dokumentiert</strong>
  </p>
</div>

<style>
  .phase2-entitaeten {
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

  .entities-container {
    position: relative;
    width: 260px;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .network-lines {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .network-lines line {
    stroke: var(--color-slate);
    stroke-width: 1.5;
    stroke-dasharray: 4, 4;
    opacity: 0.4;
  }

  .entity-item {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
    transform: translate(var(--x), var(--y));
  }

  .icon-wrapper {
    padding: var(--space-sm);
    background: rgba(255, 255, 255, 0.9);
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .entity-item:hover .icon-wrapper {
    transform: scale(1.1);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }

  .label {
    font-size: 0.8rem;
    color: var(--color-black);
    font-weight: 500;
  }

  .insight {
    color: var(--color-slate);
    font-size: 0.9rem;
    margin: 0;
  }

  .insight strong {
    color: var(--color-terracotta);
  }

  @media (max-width: 767px) {
    .entities-container {
      width: 220px;
      height: 200px;
    }

    .entity-item {
      --x: calc(var(--x) * 0.7);
      --y: calc(var(--y) * 0.7);
    }
  }
</style>
