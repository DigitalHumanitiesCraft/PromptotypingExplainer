<script>
  /**
   * SceneHeader - Wiederverwendbarer Header für Phase-Szenen
   * Extrahiert aus duplizierten Code in Phase1-4Scene.svelte
   */
  export let number = null;
  export let title;
  export let subtitle = '';
  export let opacity = 1;
</script>

<header class="scene-header" style="opacity: {opacity};">
  {#if number}
    <span class="phase-number">Phase {number}</span>
  {/if}
  <h2>{title}</h2>
  {#if subtitle}
    <p class="subtitle">{subtitle}</p>
  {/if}
</header>

<style>
  .scene-header {
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

  .subtitle {
    color: var(--color-slate);
  }
</style>
