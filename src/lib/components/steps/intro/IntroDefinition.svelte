<script>
  import GlossaryTerm from '../../GlossaryTerm.svelte';
  import promptotypingLogo from '../../../../assets/images/promptotyping-logo.png';
</script>

<div class="intro-definition">
  <div class="title-block">
    <img src={promptotypingLogo} alt="Promptotyping Logo" class="logo" />
    <h1 class="promptotyping-title">Promptotyping</h1>
  </div>

  <div class="text-card">
    <p>
      <span class="promptotyping">Promptotyping</span> ist eine <GlossaryTerm id="context-engineering">Context-Engineering</GlossaryTerm>-Arbeitstechnik,
      die das Mapping von semantischen Forschungsdaten und explizitem Forschungskontext auf Forschungsartefakte
      mittels <GlossaryTerm id="frontier-model">Frontier-LLMs</GlossaryTerm> ermöglicht.
    </p>

    <p>
      Der Name verbindet <GlossaryTerm id="prompt">Prompt</GlossaryTerm> (die Eingabe an ein LLM) mit
      <GlossaryTerm id="prototyping">Prototyping</GlossaryTerm> (iterative Entwicklung von Funktionsmustern).
      Die Arbeitstechnik entwickelt sich mit den Möglichkeiten der Frontier-LLMs und neuen Erkenntnissen zu Context Engineering weiter.
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

</style>
