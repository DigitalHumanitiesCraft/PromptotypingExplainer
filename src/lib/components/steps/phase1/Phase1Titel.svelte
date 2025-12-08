<script>
  import { fade, fly } from 'svelte/transition';
  import DeepDiveTrigger from '../../elements/DeepDiveTrigger.svelte';
  import GlossaryTerm from '../../GlossaryTerm.svelte';
</script>

<div class="phase1-titel" in:fade={{ duration: 400 }}>
  <header class="scene-header" in:fly={{ y: -20, duration: 500 }}>
    <span class="phase-number">Phase 1</span>
    <h2>Preparation</h2>
    <p class="subtitle">Materialsammlung</p>
  </header>

  <div class="content" in:fade={{ delay: 200, duration: 400 }}>
    <p>
      In der Preparation-Phase werden <strong>alle relevanten Rohmaterialien zusammengetragen</strong>,
      bevor technische Entscheidungen getroffen werden. Diese Sammlung umfasst Forschungsdaten in
      verschiedenen Formaten, Dokumentation zu Standards und Datenmodellen, erste Forschungsfragen
      und implizites Domänenwissen aus Expertengesprächen.
    </p>

    <p>
      Die Materialsammlung zwingt zur präzisen Artikulation der Projektziele, bevor ein LLM-Dialog
      beginnt. Das verhindert die unkritische Übernahme technischer Lösungen, die am tatsächlichen
      Forschungsbedarf vorbeigehen.
    </p>

    <div class="example-block">
      <h4>Beispiel <GlossaryTerm id="correspexplorer">CorrespExplorer</GlossaryTerm></h4>
      <p>
        Im CorrespExplorer-Projekt wurden <GlossaryTerm id="cmif">CMIF-XML</GlossaryTerm>-Dateien aus <GlossaryTerm id="correspsearch">correspSearch</GlossaryTerm>,
        die TEI-Correspondence-SIG-Dokumentation, Editionsrichtlinien der beteiligten Projekte und
        Notizen aus Gesprächen mit Briefeditor:innen gesammelt.
      </p>
    </div>
  </div>

  <div class="deep-dive-row" in:fade={{ delay: 400, duration: 400 }}>
    <DeepDiveTrigger
      label="Context Engineering"
      deepDiveId="context-engineering"
    />
  </div>
</div>

<style>
  .phase1-titel {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
    text-align: center;
  }

  .scene-header {
    text-align: center;
  }

  .phase-number {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-terracotta);
    font-weight: 600;
  }

  h2 {
    color: var(--color-black);
    margin: var(--space-xs) 0;
  }

  .subtitle {
    color: var(--color-slate);
    margin: 0;
  }

  .content {
    max-width: 750px;
    line-height: 1.7;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .content p {
    font-size: clamp(0.9rem, 1.6vw, 1rem);
    color: var(--color-black);
    margin: 0;
    text-align: left;
  }

  .content p + p {
    margin-top: var(--space-md);
  }

  .content strong {
    color: var(--color-terracotta);
    font-weight: 600;
  }

</style>
