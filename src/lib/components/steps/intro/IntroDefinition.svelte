<script>
  import GlossaryTerm from '../../GlossaryTerm.svelte';
</script>

<div class="intro-definition">
  <div class="title-block">
    <h1>Promptotyping</h1>
    <p class="subtitle">Methodik LLM-gestützter Werkzeugentwicklung</p>
  </div>

  <p class="definition">
    Eine <GlossaryTerm id="context-engineering">Context Engineering</GlossaryTerm>-Methodik
    für die <GlossaryTerm id="llm">LLM</GlossaryTerm>-gestützte Entwicklung von
    Forschungsworkflows und -werkzeugen in den Digital Humanities.
  </p>
</div>

<style>
  .intro-definition {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xl);
    text-align: center;
  }

  .title-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
  }

  h1 {
    color: var(--color-black);
    margin: 0;
    font-size: clamp(2.5rem, 6vw, 4rem);
  }

  .subtitle {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    color: var(--color-slate);
    font-weight: 400;
  }

  .definition {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: var(--color-slate);
    max-width: 700px;
    line-height: 1.6;
  }
</style>
