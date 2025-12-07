<script>
  import { fade, fly } from 'svelte/transition';
  import GlossaryTerm from '../../GlossaryTerm.svelte';
  import explorationImg from '../../../../assets/images/exploration.png';
</script>

<div class="phase2-struktur" in:fade={{ duration: 400 }}>
  <header class="scene-header" in:fly={{ y: -20, duration: 500 }}>
    <span class="phase-number">Phase 2</span>
    <h2>Exploration</h2>
    <p class="subtitle">Datenstrukturen entdecken</p>
  </header>

  <div class="content-block" in:fade={{ delay: 200, duration: 400 }}>
    <p class="lead">
      Forschungsdaten überschreiten häufig die Kapazität des <GlossaryTerm term="context-window">Context Window</GlossaryTerm>.
      Eine vollständige Analyse großer Korpora in einem Durchgang ist daher nicht möglich.
    </p>

    <p class="solution">
      Der methodische Ausweg: LLM-generierte Analyse-Scripts, die lokal auf den Rohdaten operieren
      und deren Struktur systematisch erfassen.
    </p>

    <div class="example-box">
      <div class="example-label">Beispiel-Prompt</div>
      <p class="example-text">
        "Analysiere die Struktur dieser XML-Dateien: Welche Elemente und Attribute kommen vor?
        Wie oft, in welcher Hierarchie? Erkläre mir das Datenmodell, das du erkennst."
      </p>
    </div>
  </div>

  <figure class="exploration-visual" in:fly={{ y: 30, duration: 500, delay: 400 }}>
    <img src={explorationImg} alt="Rohdaten werden durch LLM-generierte Scripts analysiert und Entitäten wie Personen, Orte und Zeitangaben werden extrahiert" />
    <figcaption>Vom Datenberg zur Struktur: Scripts extrahieren das Datenmodell</figcaption>
  </figure>
</div>

<style>
  .phase2-struktur {
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

  .content-block {
    max-width: 640px;
  }

  .lead {
    font-size: clamp(0.95rem, 1.8vw, 1.1rem);
    color: var(--color-slate);
    line-height: 1.8;
    margin: 0 0 var(--space-md) 0;
  }

  .lead strong {
    color: var(--color-terracotta);
    font-weight: 600;
  }

  .solution {
    font-size: clamp(0.95rem, 1.8vw, 1.1rem);
    color: var(--color-black);
    font-weight: 500;
    margin: 0 0 var(--space-lg) 0;
  }

  .example-box {
    background: rgba(96, 125, 139, 0.08);
    border-left: 3px solid var(--color-terracotta);
    padding: var(--space-md);
    border-radius: 0 8px 8px 0;
    text-align: left;
  }

  .example-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-terracotta);
    margin-bottom: var(--space-xs);
    font-weight: 600;
  }

  .example-text {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    color: var(--color-black);
    margin: 0;
    line-height: 1.5;
  }

  .exploration-visual {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    margin: 0;
    max-width: 100%;
  }

  .exploration-visual img {
    max-width: min(600px, 90vw);
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .exploration-visual figcaption {
    font-size: 0.85rem;
    color: var(--color-slate);
    font-style: italic;
  }

  @media (max-width: 767px) {
    .exploration-visual img {
      max-width: 95vw;
    }

    .example-text {
      font-size: 0.8rem;
    }
  }
</style>
