<script>
  import GlossaryTerm from '../../GlossaryTerm.svelte';
  import promptotypingLogo from '../../../../assets/images/promptotyping-logo.png';
</script>

<div class="intro-definition">
  <div class="title-block">
    <img src={promptotypingLogo} alt="Promptotyping Logo" class="logo" />
    <h1 class="promptotyping-title">Promptotyping</h1>
  </div>

  <div class="research-blog-block">
    <p>
      <span class="promptotyping">Promptotyping</span> ist eine strukturierte Methode zur forschungsdatengetriebenen
      Entwicklung von Prototypen für Forschungstools, Workflows und Modelle mittels Frontier-<GlossaryTerm id="llm">LLMs</GlossaryTerm>. Das vierphasige Prozessmodell formalisiert, wie Domänenwissen für die LLM-gestützte Iteration aufbereitet und validiert wird.
    </p>

    <p>
      Der Name verbindet <GlossaryTerm id="prompt">Prompt</GlossaryTerm> (die Eingabe an ein LLM) mit
      <GlossaryTerm id="prototyping">Prototyping</GlossaryTerm> (iterative Entwicklung von Funktionsmustern).
      Die Methode ist nicht abgeschlossen, sondern entwickelt sich mit den Möglichkeiten der Frontier-LLMs weiter.
    </p>
  </div>
</div>

<style>
  .intro-definition {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
  }

  .title-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
    text-align: center;
  }

  .logo {
    width: clamp(180px, 25vw, 250px);
    height: auto;
    margin-bottom: var(--space-md);
  }

  h1 {
    margin: 0;
    font-size: clamp(2rem, 5vw, 2.75rem);
  }

  .promptotyping-title {
    font-family: var(--font-mono);
    font-weight: 700;
    color: var(--color-terracotta);
    letter-spacing: 0.03em;
  }

  .research-blog-block {
    max-width: 750px;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .research-blog-block p {
    font-size: clamp(0.95rem, 1.6vw, 1rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: left;
    margin: 0 0 var(--space-md) 0;
  }

  .research-blog-block p:last-child {
    margin-bottom: 0;
  }
</style>
