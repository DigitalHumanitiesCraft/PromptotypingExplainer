<script>
  import GlossaryTerm from '../../GlossaryTerm.svelte';
  import DeepDiveTrigger from '../../elements/DeepDiveTrigger.svelte';
  import { openDeepDive } from '../../../stores/deepDive.js';

  function handleDeepDive(event) {
    openDeepDive(event.detail.id);
  }
</script>

<div class="intro-methodik">
  <h2>Critical Expert in the Loop</h2>

  <div class="research-blog-block">
    <p>
      Der Critical Expert in the Loop ist nicht passiver Empfänger, sondern <strong>kritischer Validator</strong>.
      Domänenexpert:innen bringen ihr Fachwissen kontinuierlich in den Dialog ein. LLMs können technisch
      korrekte, aber fachlich inadäquate Lösungen produzieren. Nur Expert:innen erkennen, ob eine
      Visualisierung historisch sinnvoll ist oder ob Kategorisierungen dem Forschungsgegenstand
      gerecht werden.
    </p>

    <p>
      Der Critical-Expert-Ansatz operationalisiert Schöns <strong>Reflective Practice</strong> für die
      KI-gestützte Forschung: Reflection-in-action bedeutet kritische Prüfung während des
      LLM-Dialogs; Reflection-on-action ist die nachträgliche Analyse und Dokumentation
      im Journal. Polanyis Konzept des <strong>impliziten Wissens</strong> ("We can know more than we
      can tell") ist zentral: Der Prozess der Explizierung taciten Wissens in formale Strukturen
      bildet einen Kernaspekt der Methodik.
    </p>

    <p>
      <strong>Strategien gegen <GlossaryTerm id="sycophancy">Sycophancy</GlossaryTerm>:</strong>
      Critical Questioning fordert das LLM explizit zur Kritik auf ("Was sind Schwächen in diesem Ansatz?").
      Alternative Exploration verlangt verschiedene Ansätze und gegenteilige Standpunkte.
      Assumption Surfacing macht implizite Annahmen im Code oder Voraussetzungen bewusst.
    </p>

    <p>
      Promptotyping ist kein Gegenentwurf zu Vibe Coding, sondern gibt ihm Struktur für
      Forschungskontexte. Die intuitive, explorative Arbeitsweise bleibt erhalten, ergänzt
      durch systematische Dokumentation, die <GlossaryTerm id="context-rot">Context Rot</GlossaryTerm>
      verhindert und die Informationsdichte maximiert.
    </p>

    <div class="deep-dive-triggers">
      <DeepDiveTrigger
        label="Critical Expert"
        deepDiveId="critical-expert"
        on:open={handleDeepDive}
      />
    </div>
  </div>
</div>

<style>
  .intro-methodik {
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

  .research-blog-block p:last-of-type {
    margin-bottom: 0;
  }

  .research-blog-block strong {
    color: var(--color-terracotta);
  }

  .deep-dive-triggers {
    display: flex;
    gap: var(--space-md);
    flex-wrap: wrap;
    justify-content: center;
    margin-top: var(--space-md);
    padding-top: var(--space-md);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>
