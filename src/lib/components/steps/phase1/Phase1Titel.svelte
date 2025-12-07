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
      Die <strong>Preparation</strong>-Phase sammelt alle relevanten Rohmaterialien, darunter
      Forschungsdaten, Dokumentation zu Standards und Modellen,
      Forschungsfragen und Domänenwissen.
    </p>
    <p class="highlight">
      Diese Phase verhindert die unkritische Übernahme technischer Lösungen
      für wissenschaftliche Probleme und zwingt zur präzisen Artikulation der Projektziele.
    </p>
    <div class="deep-dive-row">
      <DeepDiveTrigger
        label="Context Engineering"
        deepDiveId="context-engineering"
        on:open={handleDeepDive}
      />
      <DeepDiveTrigger
        label="Critical Expert"
        deepDiveId="critical-expert"
        on:open={handleDeepDive}
      />
    </div>
  </div>
</div>

<style>
  .phase1-titel {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xl);
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
    max-width: 700px;
    line-height: 1.7;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .content p {
    font-size: clamp(0.95rem, 1.8vw, 1.1rem);
    color: var(--color-black);
    margin-bottom: var(--space-md);
    text-align: justify;
  }

  .content strong {
    color: var(--color-terracotta);
    font-weight: 600;
  }

  .content .highlight {
    color: var(--color-black);
    font-weight: 500;
  }

  .deep-dive-row {
    display: flex;
    gap: var(--space-sm);
    flex-wrap: wrap;
    margin-top: var(--space-lg);
    justify-content: center;
  }
</style>
