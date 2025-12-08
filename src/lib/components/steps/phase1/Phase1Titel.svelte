<script>
  import { fade, fly } from 'svelte/transition';
  import DeepDiveTrigger from '../../elements/DeepDiveTrigger.svelte';
  import { openDeepDive } from '../../../stores/deepDive.js';

  function handleDeepDive(event) {
    openDeepDive(event.detail.id);
  }
</script>

<div class="phase1-titel" in:fade={{ duration: 400 }}>
  <header class="scene-header" in:fly={{ y: -20, duration: 500 }}>
    <span class="phase-number">Phase 1</span>
    <h2>Vorbereitung</h2>
    <p class="subtitle">Materialsammlung</p>
  </header>

  <div class="content" in:fade={{ delay: 200, duration: 400 }}>
    <p>
      Die Vorbereitungsphase hat ein klares Ziel: <strong>alle relevanten Rohmaterialien zusammentragen</strong>,
      bevor technische Entscheidungen getroffen werden. Diese Sammlung umfasst Forschungsdaten in
      verschiedenen Formaten, Dokumentation zu Standards und Datenmodellen, erste Forschungsfragen
      und implizites Domänenwissen aus Expertengesprächen.
    </p>

    <p>
      Diese Phase verhindert ein häufiges Problem in der Softwareentwicklung für Forschung: die
      unkritische Übernahme technischer Lösungen, die am tatsächlichen Forschungsbedarf vorbeigehen.
      Die Materialsammlung zwingt zur präzisen Artikulation der Projektziele, bevor überhaupt
      ein LLM-Dialog beginnt.
    </p>

    <div class="example-block">
      <h4>Beispiel: CorrespExplorer</h4>
      <p>
        Im CorrespExplorer-Projekt wurden in dieser Phase gesammelt: CMIF-XML-Dateien aus correspSearch,
        die TEI-Correspondence-SIG-Dokumentation, Editionsrichtlinien der beteiligten Projekte, und
        Notizen aus Gesprächen mit Briefeditor:innen über ihre Arbeitsabläufe und Forschungsfragen.
      </p>
    </div>
  </div>

  <div class="deep-dive-row" in:fade={{ delay: 400, duration: 400 }}>
    <DeepDiveTrigger
      label="Context Engineering"
      deepDiveId="context-engineering"
      on:open={handleDeepDive}
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

  .example-block {
    margin-top: var(--space-lg);
    background: rgba(96, 125, 139, 0.06);
    padding: var(--space-md);
    border-radius: 8px;
    border-left: 3px solid var(--color-slate);
    text-align: left;
  }

  .example-block h4 {
    font-size: 0.85rem;
    color: var(--color-slate);
    margin: 0 0 var(--space-xs) 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .example-block p {
    font-size: 0.85rem !important;
    color: var(--color-slate) !important;
    line-height: 1.6;
  }

  .deep-dive-row {
    display: flex;
    gap: var(--space-sm);
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
