<script>
  import GlossaryTerm from '../../GlossaryTerm.svelte';
  import DeepDiveTrigger from '../../elements/DeepDiveTrigger.svelte';
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
      Die Validierung findet auf zwei Ebenen statt. <strong>Während des LLM-Dialogs</strong> prüft der Expert
      jeden Output auf fachliche Angemessenheit und korrigiert falsche Annahmen sofort. <strong>Nach der
      Session</strong> dokumentiert er Erkenntnisse und Entscheidungen im Journal, um den Prozess
      nachvollziehbar zu machen.
    </p>

    <p>
      Drei Strategien adressieren das Problem der <strong><GlossaryTerm id="sycophancy">Sycophancy</GlossaryTerm></strong>.
      Critical Questioning fordert das LLM explizit zur Kritik auf ("Was sind Schwächen in diesem Ansatz?").
      Alternative Exploration verlangt verschiedene Ansätze und gegenteilige Standpunkte.
      Assumption Surfacing macht implizite Annahmen im Code bewusst.
    </p>

    <div class="deep-dive-triggers">
      <DeepDiveTrigger
        label="Critical Expert"
        deepDiveId="critical-expert"
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

</style>
