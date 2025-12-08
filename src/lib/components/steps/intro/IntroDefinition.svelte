<script>
  import GlossaryTerm from '../../GlossaryTerm.svelte';
  import promptotypingLogo from '../../../../assets/images/promptotyping-logo.png';
</script>

<div class="intro-definition">
  <div class="title-block">
    <img src={promptotypingLogo} alt="Promptotyping Logo" class="logo" />
    <h1 class="promptotyping-title">Promptotyping</h1>
  </div>

  <div class="definition-block">
    <p class="definition">
      <span class="promptotyping">Promptotyping</span> ist eine <GlossaryTerm id="context-engineering">Context Engineering</GlossaryTerm>-Methode
      für die schnelle, forschungsdatengetriebene Erstellung von Prototypen für Forschungstools, Workflows
      und Modelle mittels Frontier-<GlossaryTerm id="llm">LLMs</GlossaryTerm>. Die Methode synthetisiert
      Context- und Requirements Engineering in einem vierphasigen Prozessmodell.
    </p>

    <p class="etymology">
      Der Name setzt sich zusammen aus <em>Prompt</em> (die Eingabe an ein LLM) und
      <em>Prototyping</em> (iterative Entwicklung von Funktionsmustern).
    </p>
  </div>

  <div class="problem-block">
    <h4>Die Kernfrage</h4>
    <p>
      Frontier-LLMs können zwar Code generieren, produzieren aber ohne strukturierten Kontext
      generische Lösungen, die am Forschungsbedarf vorbeigehen. Das Phänomen des "Vibe Coding"
      (Karpathy, 2025) exemplifiziert diese Ambivalenz: Intuitive Code-Generierung durch vage Prompts
      funktioniert, führt aber ohne Struktur zu technischen Schulden und Abhängigkeit statt Verständnis.
    </p>
    <p class="core-question">
      <strong>Wie kommuniziert man Domänenwissen so an ein LLM, dass es passende Werkzeuge generiert?</strong>
      Nicht das Coden selbst ist die Kernkompetenz, sondern das Wissen darüber, was guter Code für
      Forschungszwecke ist: Modellierung, Formalisierung, Domänenwissen und kritische Validierung.
    </p>
  </div>

  <div class="scope-block">
    <p>
      Obwohl die Methodik ihren Ursprung in den Digital Humanities hat, sind ihre Mechanismen
      universell auf datenintensive Forschungsprozesse übertragbar. Die Methode dient dazu,
      intuitiven Ansätzen wie dem Vibe Coding die für Forschungskontexte notwendige Strenge zu
      verleihen, ist jedoch explizit als exploratives Framework zu verstehen.
    </p>
  </div>
</div>

<style>
  .intro-definition {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
    text-align: center;
  }

  .title-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
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

  .definition-block {
    max-width: 750px;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .definition {
    font-size: clamp(1rem, 1.8vw, 1.1rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: left;
    margin-bottom: var(--space-md);
  }

  .etymology {
    font-size: clamp(0.9rem, 1.5vw, 0.95rem);
    color: var(--color-slate);
    line-height: 1.6;
    text-align: left;
    margin: 0;
  }

  .etymology em {
    font-style: normal;
    background: rgba(96, 125, 139, 0.1);
    padding: 2px 6px;
    border-radius: 3px;
    font-family: var(--font-mono);
    font-size: 0.9em;
  }

  .problem-block {
    max-width: 750px;
    background: rgba(191, 91, 62, 0.06);
    padding: var(--space-lg);
    border-radius: 8px;
    border-left: 3px solid var(--color-terracotta);
    text-align: left;
  }

  .problem-block h4 {
    font-size: 0.85rem;
    color: var(--color-terracotta);
    margin: 0 0 var(--space-sm) 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .problem-block p {
    font-size: clamp(0.9rem, 1.5vw, 0.95rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: left;
    margin: 0;
  }

  .problem-block .core-question {
    margin-top: var(--space-md);
    padding-top: var(--space-md);
    border-top: 1px solid rgba(191, 91, 62, 0.2);
  }

  .problem-block strong {
    color: var(--color-terracotta);
  }

  .scope-block {
    max-width: 700px;
    background: rgba(96, 125, 139, 0.06);
    padding: var(--space-md) var(--space-lg);
    border-radius: 8px;
  }

  .scope-block p {
    font-size: clamp(0.85rem, 1.4vw, 0.9rem);
    color: var(--color-slate);
    line-height: 1.6;
    text-align: left;
    margin: 0;
  }
</style>
