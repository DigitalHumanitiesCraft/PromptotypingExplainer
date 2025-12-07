<script>
  import { fade, fly } from 'svelte/transition';
  import GlossaryTerm from '../../GlossaryTerm.svelte';
  import explorationImg from '../../../../assets/images/exploration.png';
</script>

<div class="phase2-exploration" in:fade={{ duration: 400 }}>
  <header class="scene-header" in:fly={{ y: -20, duration: 500 }}>
    <span class="phase-number">Phase 2</span>
    <h2>Exploration</h2>
    <p class="subtitle">Die epistemische Spielwiese</p>
  </header>

  <div class="content-block" in:fade={{ delay: 200, duration: 400 }}>
    <p class="lead">
      Freies Experimentieren mit dem Rohmaterial. LLM-gestützte Analyse der Daten,
      erste Prompt-Versuche, Erkundung der Möglichkeitsräume – <strong>ohne Dokumentationszwang</strong>.
    </p>

    <div class="key-point">
      <span class="key-label">Kennzeichen</span>
      <p>Diese Phase produziert <strong>keine formalen Artefakte</strong>. Die Erkenntnisse fließen informell in die Destillation (Phase 3) ein.</p>
    </div>

    <div class="example-box">
      <div class="example-label">Beispiel-Prompts</div>
      <p class="example-text">
        "Analysiere die Struktur dieser XML-Dateien: Welche Elemente kommen vor?"<br><br>
        "Erkläre mir das Datenmodell, das du in diesen Dokumenten erkennst."<br><br>
        "Welche Entitäten (Personen, Orte, Zeiten) sind in den Daten enthalten?"
      </p>
    </div>
  </div>

  <figure class="exploration-visual" in:fly={{ y: 30, duration: 500, delay: 400 }}>
    <img src={explorationImg} alt="LLM-gestützte Exploration der Rohdaten" />
    <figcaption>Verstehen durch Experimentieren – keine Dokumentation, nur Erkenntnis</figcaption>
  </figure>

  <p class="transition-hint" in:fade={{ delay: 600, duration: 400 }}>
    Was hier verstanden wird, wird in Phase 3 <strong>destilliert</strong>
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
