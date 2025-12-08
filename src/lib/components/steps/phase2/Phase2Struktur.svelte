<script>
  import { fade, fly } from 'svelte/transition';
  import GlossaryTerm from '../../GlossaryTerm.svelte';
  import explorationImg from '../../../../assets/images/exploration.png';
</script>

<div class="phase2-exploration" in:fade={{ duration: 400 }}>
  <header class="scene-header" in:fly={{ y: -20, duration: 500 }}>
    <span class="phase-number">Phase 2</span>
    <h2>Exploration</h2>
    <p class="subtitle">Daten-Kontext-Relationen</p>
  </header>

  <div class="content-block" in:fade={{ delay: 200, duration: 400 }}>
    <p class="lead">
      Systematische Sondierung der Schnittstelle zwischen Rohdaten und Forschungskontext.
      Wir prüfen: Lässt sich die abstrakte Forschungsfrage konkret auf diese Datenstruktur abbilden?
    </p>

    <div class="key-point">
      <span class="key-label">Ziel</span>
      <p><strong>Validierung der Machbarkeit</strong>: Geben die Daten das her, was der Forschungskontext verlangt? Sackgassen sind hier positive Erkenntnisse, keine Fehler.</p>
    </div>

    <div class="example-box">
      <div class="example-label">Typische Fragen</div>
      <p class="example-text">
        "Lässt sich diese Netzwerkanalyse mit den vorhandenen Relationen umsetzen?"<br><br>
        "Welche Felder in der XML-Struktur tragen die gewünschte Filterlogik?"<br><br>
        "Können wir 'Als Historiker will ich nach Datum filtern...' mit diesen Daten realisieren?"
      </p>
    </div>
  </div>

  <figure class="exploration-visual" in:fly={{ y: 30, duration: 500, delay: 400 }}>
    <img src={explorationImg} alt="Sondierung der Daten-Kontext-Schnittstelle" />
    <figcaption>Brücken identifizieren – mental entstehen hier die ersten User Stories</figcaption>
  </figure>

  <p class="transition-hint" in:fade={{ delay: 600, duration: 400 }}>
    Ergebnis: Wissen über Datenqualität und User-Story-Validität → Voraussetzung für Phase 3
  </p>
</div>

<style>
  .phase2-exploration {
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
    font-style: italic;
  }

  .content-block {
    max-width: 700px;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .lead {
    font-size: clamp(0.95rem, 1.8vw, 1.1rem);
    color: var(--color-black);
    line-height: 1.8;
    text-align: justify;
    margin: 0 0 var(--space-md) 0;
  }

  .lead strong {
    color: var(--color-terracotta);
  }

  .key-point {
    background: rgba(191, 91, 62, 0.08);
    border-left: 3px solid var(--color-terracotta);
    padding: var(--space-md);
    border-radius: 0 8px 8px 0;
    text-align: left;
    margin-bottom: var(--space-md);
  }

  .key-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-terracotta);
    font-weight: 600;
  }

  .key-point p {
    margin: var(--space-xs) 0 0 0;
    font-size: 0.95rem;
    color: var(--color-black);
  }

  .key-point strong {
    color: var(--color-terracotta);
  }

  .example-box {
    background: rgba(96, 125, 139, 0.08);
    border-left: 3px solid var(--color-slate);
    padding: var(--space-md);
    border-radius: 0 8px 8px 0;
    text-align: left;
  }

  .example-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-slate);
    margin-bottom: var(--space-xs);
    font-weight: 600;
  }

  .example-text {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    color: var(--color-black);
    margin: 0;
    line-height: 1.6;
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
    max-width: min(500px, 85vw);
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .exploration-visual figcaption {
    font-size: 0.85rem;
    color: var(--color-slate);
    font-style: italic;
  }

  .transition-hint {
    color: var(--color-slate);
    font-size: 0.95rem;
    margin: 0;
  }

  .transition-hint strong {
    color: var(--color-terracotta);
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
