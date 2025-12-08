<script>
  import GlossaryTerm from '../../GlossaryTerm.svelte';
  import DeepDiveTrigger from '../../elements/DeepDiveTrigger.svelte';
  import { openDeepDive } from '../../../stores/deepDive.js';

  function handleDeepDive(event) {
    openDeepDive(event.detail.id);
  }
</script>

<div class="intro-methodik">
  <div class="content">
    <h3>Critical Expert in the Loop</h3>

    <div class="explanation">
      <p>
        Der Critical Expert in the Loop ist nicht passiver Empfänger, sondern <strong>kritischer Validator</strong>.
        Domänenexpert:innen bringen ihr Fachwissen kontinuierlich in den Dialog ein. LLMs können technisch
        korrekte, aber fachlich inadäquate Lösungen produzieren. Nur Expert:innen erkennen, ob eine
        Visualisierung historisch sinnvoll ist oder ob Kategorisierungen dem Forschungsgegenstand
        gerecht werden.
      </p>

      <p>
        Der Critical-Expert-Ansatz operationalisiert Schöns <strong>Reflective Practice</strong> für die
        KI-gestützte Forschung: <em>Reflection-in-action</em> bedeutet kritische Prüfung während des
        LLM-Dialogs; <em>Reflection-on-action</em> ist die nachträgliche Analyse und Dokumentation
        im Journal. Polanyis Konzept des <strong>impliziten Wissens</strong> ("We can know more than we
        can tell") ist zentral: Der Prozess der Explizierung taciten Wissens in formale Strukturen
        bildet einen Kernaspekt der Methodik.
      </p>
    </div>

    <div class="strategies-block">
      <h4>Strategien gegen Sycophancy</h4>
      <div class="strategy-list">
        <div class="strategy-item">
          <span class="strategy-name">Critical Questioning</span>
          <span class="strategy-desc">Explizites Auffordern zur Kritik: "Was sind Schwächen in diesem Ansatz?" "Welche Fehler könnten in meinen Annahmen stecken?"</span>
        </div>
        <div class="strategy-item">
          <span class="strategy-name">Alternative Exploration</span>
          <span class="strategy-desc">Einfordern von Alternativen: Verschiedene Ansätze generieren lassen, gegenteilige Standpunkte erfragen</span>
        </div>
        <div class="strategy-item">
          <span class="strategy-name">Assumption Surfacing</span>
          <span class="strategy-desc">Explizitmachen von Annahmen: Implizite Annahmen im Code oder Voraussetzungen bewusst machen</span>
        </div>
      </div>
    </div>

    <div class="example-block">
      <h4>Beispiel: REALonline-Projekt</h4>
      <p>
        Der Historiker korrigierte die technische Annahme, Objekte nach modernen funktionalen Kategorien
        (Möbel, Textilien, Gefäße) zu strukturieren. Die historisch adäquate Lösung: Objekte werden
        über Räume und Gebäude organisiert, mit historischen Begriffen aus dem Originalvokabular.
        <strong>Räumliche Organisation war im Mittelalter primärer Bedeutungsträger für soziale Hierarchien.</strong>
        Diese Korrektur transformierte das Datenmodell von einer anachronistischen zu einer
        historisch adäquaten Repräsentation.
      </p>
    </div>

    <div class="vibe-coding-note">
      <strong>Verhältnis zu Vibe Coding</strong>
      <p>
        Promptotyping ist kein Gegenentwurf zu Vibe Coding, sondern gibt ihm Struktur für
        Forschungskontexte. Die intuitive, explorative Arbeitsweise bleibt erhalten, ergänzt
        durch systematische Dokumentation, die <GlossaryTerm id="context-rot">Context Rot</GlossaryTerm>
        verhindert und die Informationsdichte maximiert.
      </p>
    </div>

    <div class="deep-dive-triggers">
      <DeepDiveTrigger
        label="Critical Expert"
        deepDiveId="critical-expert"
        on:open={handleDeepDive}
      />
      <DeepDiveTrigger
        label="Scholar-Centered Design"
        deepDiveId="scholar-centered-design"
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
    justify-content: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
    max-width: 900px;
  }

  h3 {
    font-size: clamp(1.25rem, 2.5vw, 1.5rem);
    color: var(--color-black);
    margin: 0;
    text-align: center;
  }

  .explanation {
    max-width: 800px;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .explanation p {
    font-size: clamp(0.9rem, 1.5vw, 0.95rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: justify;
    margin: 0;
  }

  .explanation p + p {
    margin-top: var(--space-md);
  }

  .explanation strong {
    color: var(--color-terracotta);
  }

  .explanation em {
    font-style: italic;
    color: var(--color-slate);
  }

  .strategies-block {
    max-width: 800px;
    width: 100%;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .strategies-block h4 {
    font-size: 0.9rem;
    color: var(--color-terracotta);
    margin: 0 0 var(--space-md) 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .strategy-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .strategy-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: var(--space-sm) var(--space-md);
    background: rgba(96, 125, 139, 0.05);
    border-radius: 6px;
    border-left: 3px solid var(--color-slate);
  }

  .strategy-name {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--color-black);
  }

  .strategy-desc {
    font-size: 0.8rem;
    color: var(--color-slate);
    line-height: 1.5;
  }

  .example-block {
    max-width: 750px;
    background: rgba(191, 91, 62, 0.06);
    padding: var(--space-lg);
    border-radius: 8px;
    border-left: 3px solid var(--color-terracotta);
  }

  .example-block h4 {
    font-size: 0.85rem;
    color: var(--color-terracotta);
    margin: 0 0 var(--space-sm) 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .example-block p {
    font-size: 0.9rem;
    color: var(--color-black);
    line-height: 1.7;
    margin: 0;
    text-align: justify;
  }

  .example-block strong {
    color: var(--color-terracotta);
  }

  .vibe-coding-note {
    max-width: 700px;
    background: rgba(96, 125, 139, 0.06);
    padding: var(--space-md) var(--space-lg);
    border-radius: 8px;
  }

  .vibe-coding-note strong {
    display: block;
    font-size: 0.85rem;
    color: var(--color-black);
    margin-bottom: var(--space-xs);
  }

  .vibe-coding-note p {
    font-size: 0.85rem;
    color: var(--color-slate);
    line-height: 1.6;
    margin: 0;
    text-align: justify;
  }

  .deep-dive-triggers {
    display: flex;
    gap: var(--space-md);
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 767px) {
    .strategy-item {
      padding: var(--space-sm);
    }
  }
</style>
