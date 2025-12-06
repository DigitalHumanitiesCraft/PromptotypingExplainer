<script>
  /**
   * AcademicBlock - Wiederverwendbarer Container für akademische Texte
   * Extrahiert aus duplizierten Code in Phase1-4Scene.svelte
   */
  export let opacity = 1;
  export let maxWidth = '650px';
</script>

<div class="academic-block" style="opacity: {opacity}; max-width: {maxWidth};">
  <slot />
</div>

<style>
  .academic-block {
    text-align: center;
    line-height: 1.7;
  }

  .academic-block :global(p) {
    font-size: clamp(0.9rem, 1.6vw, 1.05rem);
    color: var(--color-slate);
    margin-bottom: var(--space-sm);
  }

  .academic-block :global(code) {
    background: rgba(96, 125, 139, 0.1);
    padding: 0.15em 0.4em;
    border-radius: 4px;
    font-size: 0.9em;
  }

  .academic-block :global(strong) {
    color: var(--color-terracotta);
    font-weight: 600;
  }

  .academic-block :global(.highlight) {
    color: var(--color-black);
    font-weight: 500;
  }
</style>
