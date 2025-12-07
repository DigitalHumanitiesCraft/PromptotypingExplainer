<script>
  import GlossaryTerm from '../../GlossaryTerm.svelte';
</script>

<div class="intro-definition">
  <div class="title-block">
    <h1>Promptotyping</h1>
    <p class="subtitle">Strukturiertes Context Engineering mit Vibe-Coding-Elementen</p>
  </div>

  <div class="definition-block">
    <p class="definition">
      <strong>Promptotyping</strong> ist eine Methode zur systematischen Entwicklung funktionaler
      Prototypen durch strukturierte Interaktion mit <GlossaryTerm id="llm">Large Language Models</GlossaryTerm>.
      Sie kombiniert die Intuition des "Vibe Codings" mit einem systematischen Framework zur
      Wissensaufbereitung, ein <GlossaryTerm id="context-engineering">Context Engineering</GlossaryTerm>-Prozess,
      der domänenspezifisches Wissen für LLMs optimal strukturiert.
    </p>

    <p class="etymology">
      Der Name setzt sich zusammen aus <em>Prompt</em> (die Eingabe an ein LLM) und
      <em>Prototyping</em> (iterative Entwicklung von Funktionsmustern).
    </p>

    <p class="context-addendum">
      Obwohl die Methodik ihren Ursprung in den Digital Humanities hat, sind ihre Mechanismen
      universell auf datenintensive Forschungsprozesse übertragbar, darunter statistische Analysen,
      Datenvisualisierung und explorative Analysen in verschiedensten Disziplinen.
    </p>
  </div>
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
    font-size: clamp(2.5rem, 6vw, 3.5rem);
  }

  .subtitle {
    font-size: clamp(0.9rem, 2vw, 1.2rem);
    color: var(--color-slate);
    font-weight: 400;
  }

  .definition-block {
    max-width: 750px;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .definition {
    font-size: clamp(1rem, 1.8vw, 1.15rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: justify;
    margin-bottom: var(--space-md);
  }

  .definition strong {
    color: var(--color-terracotta);
  }

  .etymology {
    font-size: clamp(0.9rem, 1.5vw, 1rem);
    color: var(--color-slate);
    line-height: 1.6;
    text-align: justify;
    margin: 0;
  }

  .etymology em {
    font-style: normal;
    background: rgba(96, 125, 139, 0.1);
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9em;
  }

  .context-addendum {
    font-size: clamp(0.9rem, 1.5vw, 0.95rem);
    color: var(--color-slate);
    line-height: 1.6;
    text-align: justify;
    margin: var(--space-md) 0 0 0;
    padding-top: var(--space-md);
    border-top: 1px solid rgba(96, 125, 139, 0.15);
  }
</style>
