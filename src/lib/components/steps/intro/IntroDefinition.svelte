<script>
  import GlossaryTerm from '../../GlossaryTerm.svelte';
  import promptotypingLogo from '../../../../assets/images/promptotyping-logo.png';
  import vibecodingImage from '../../../../assets/images/vibecoding.png';
</script>

<div class="intro-definition">
  <div class="title-block">
    <img src={promptotypingLogo} alt="Promptotyping Logo" class="logo" />
    <h1 class="promptotyping-title">Promptotyping</h1>
  </div>

  <div class="research-blog-block">
    <p>
      <span class="promptotyping">Promptotyping</span> ist eine <GlossaryTerm id="context-engineering">Context Engineering</GlossaryTerm>-Methode
      für die schnelle, forschungsdatengetriebene Erstellung von Prototypen für Forschungstools, Workflows
      und Modelle mittels Frontier-<GlossaryTerm id="llm">LLMs</GlossaryTerm>. Die Methode synthetisiert
      Context- und Requirements Engineering in einem vierphasigen Prozessmodell.
    </p>

    <p>
      Der Name setzt sich zusammen aus <em>Prompt</em> (die Eingabe an ein LLM) und
      <em>Prototyping</em> (iterative Entwicklung von Funktionsmustern).
    </p>

    <p>
      Frontier-LLMs können zwar Code generieren, produzieren aber ohne strukturierten Kontext
      generische Lösungen, die am Forschungsbedarf vorbeigehen. Das Phänomen des "Vibe Coding"
      (Karpathy, 2025) exemplifiziert diese Ambivalenz: Intuitive Code-Generierung durch vage Prompts
      funktioniert, führt aber ohne Struktur zu technischen Schulden und Abhängigkeit statt Verständnis.
    </p>

    <figure class="vibecoding-figure">
      <img src={vibecodingImage} alt="Andrej Karpathy Tweet über Vibe Coding" class="vibecoding-image" />
      <figcaption>Andrej Karpathy prägt den Begriff "Vibe Coding" (Februar 2025)</figcaption>
    </figure>

    <p>
      <strong>Wie kommuniziert man Domänenwissen so an ein LLM, dass es passende Werkzeuge generiert?</strong>
      Nicht das Coden selbst ist die Kernkompetenz, sondern das Wissen darüber, was guter Code für
      Forschungszwecke ist: Modellierung, Formalisierung, Domänenwissen und kritische Validierung.
    </p>

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

  .research-blog-block em {
    font-style: normal;
    background: rgba(96, 125, 139, 0.1);
    padding: 2px 6px;
    border-radius: 3px;
    font-family: var(--font-mono);
    font-size: 0.9em;
  }

  .research-blog-block strong {
    color: var(--color-terracotta);
  }

  .vibecoding-figure {
    margin: var(--space-md) 0;
    text-align: center;
  }

  .vibecoding-image {
    max-width: 100%;
    width: 500px;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  .vibecoding-figure figcaption {
    font-size: 0.8rem;
    color: var(--color-slate);
    margin-top: var(--space-xs);
    font-style: italic;
  }
</style>
