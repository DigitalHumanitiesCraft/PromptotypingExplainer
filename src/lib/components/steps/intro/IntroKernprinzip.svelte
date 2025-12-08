<script>
  import GlossaryTerm from '../../GlossaryTerm.svelte';
</script>

<div class="intro-kernprinzip">
  <h2>Das Kernprinzip</h2>

  <div class="research-blog-block">
    <p class="core-question">
      <strong>Wie kommuniziert man Domänenwissen so an ein LLM, dass es passende Werkzeuge generiert?</strong>
    </p>

    <p>
      Nicht das Coden selbst ist die Kernkompetenz, sondern das Wissen darüber, was guter Code für
      Forschungszwecke ist: Modellierung, Formalisierung, Domänenwissen und kritische Validierung.
    </p>

    <p>
      Die unklare epistemologische Natur von <GlossaryTerm id="llm">LLMs</GlossaryTerm> erfordert abgestufte
      Validierungsstrategien. Für komplexe Aufgaben wie die Entwicklung von Forschungswerkzeugen sind
      strukturierte Workflows, explizite Dokumentation und kontinuierliche Expertenvalidierung nötig.
    </p>

    <p>
      Mollick beobachtet, dass sich die Rolle des Menschen verschiebt: vom Korrigieren von KI-Fehlern zum Steuern
      von KI-Arbeit (Mollick, 2025). Der <GlossaryTerm id="critical-expert">"Critical Expert in the Loop"</GlossaryTerm>
      geht einen Schritt weiter. Der Mensch prüft nicht nur, ob das Ergebnis korrekt ist, sondern ob es fachlich
      angemessen ist. Er erkennt <GlossaryTerm id="sycophancy">Sycophancy</GlossaryTerm>, prüft auf
      <GlossaryTerm id="halluzinationen">Konfabulationen</GlossaryTerm> und bringt das Domänenwissen ein, das LLMs
      strukturell fehlt. LLMs liefern oft sehr gute Ergebnisse und können gleichzeitig nie Verlässlichkeit garantieren.
      Diese Spannung ist nicht auflösbar, nur durch fachliche Prüfung handhabbar.
    </p>

    <p>
      <span class="promptotyping">Promptotyping</span> ist ein Weg, diese Anforderungen methodisch umzusetzen.
      Die Methode verbindet <GlossaryTerm id="context-engineering">Context Engineering</GlossaryTerm> mit
      Scholar-Centered Design.
    </p>
  </div>
</div>

<style>
  .intro-kernprinzip {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
  }

  h2 {
    margin: 0;
    font-size: clamp(1.5rem, 4vw, 2rem);
    color: var(--color-terracotta);
    text-align: center;
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

  .core-question {
    font-size: clamp(1.05rem, 1.8vw, 1.15rem) !important;
    text-align: center !important;
    padding: var(--space-md);
    background: rgba(191, 91, 62, 0.06);
    border-radius: 6px;
    border-left: 3px solid var(--color-terracotta);
  }

  .core-question strong {
    color: var(--color-terracotta);
  }

  .promptotyping {
    font-family: var(--font-mono);
    font-weight: 700;
    color: var(--color-terracotta);
    letter-spacing: 0.02em;
  }
</style>
