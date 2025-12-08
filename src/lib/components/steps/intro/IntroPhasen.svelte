<script>
  import { stepStructure } from '../../../stores/scroll.js';

  // Get phase data (skip intro and outro)
  const phases = stepStructure.filter(p => p.number !== null);
</script>

<div class="intro-phasen">
  <h2>Das vierphasige Prozessmodell</h2>

  <div class="content-grid">
    <div class="text-column">
      <p>
        Das Phasenmodell strukturiert den Entwicklungsprozess von der ersten Materialsammlung bis zum
        funktionalen Prototyp. Es basiert auf dem <strong>Design Science Research Framework</strong>
        (Hevner et al., 2004) und integriert etablierte Methoden des Requirements Engineering mit
        den spezifischen Anforderungen wissenschaftlicher Softwareentwicklung.
      </p>

      <p>
        Ein zentrales Merkmal ist, dass die strukturierten <strong>.md-Dokumente erst in Phase 3</strong>
        (Destillation) entstehen, nicht am Projektanfang. Die ersten beiden Phasen sammeln und analysieren
        Rohmaterial, bevor es zu LLM-optimiertem Kontext verdichtet wird.
      </p>

      <p>
        Der Prozess ist <strong>iterativ</strong>. Jede Implementation-Iteration kann Updates an den
        Vault-Dokumenten auslösen. Neues Wissen fließt zurück in die .md-Dateien und führt so zu
        immer präziseren Prototypen.
      </p>
    </div>

    <div class="phases-column">
      {#each phases as phase}
        <div class="phase-item">
          <span class="phase-number">{phase.number}</span>
          <div class="phase-text">
            <span class="phase-label">{phase.label}</span>
            <span class="phase-subtitle">{phase.subtitle}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .intro-phasen {
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

  .content-grid {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--space-xl);
    max-width: 900px;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    align-items: start;
  }

  .text-column p {
    font-size: clamp(0.95rem, 1.6vw, 1rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: left;
    margin: 0 0 var(--space-md) 0;
  }

  .text-column p:last-child {
    margin-bottom: 0;
  }

  .text-column strong {
    color: var(--color-terracotta);
  }

  .phases-column {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    min-width: 200px;
  }

  .phase-item {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-xs) var(--space-sm);
    background: var(--color-cream);
    border-radius: 6px;
  }

  .phase-number {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--color-terracotta);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.85rem;
    flex-shrink: 0;
  }

  .phase-text {
    display: flex;
    flex-direction: column;
  }

  .phase-label {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-black);
  }

  .phase-subtitle {
    font-size: 0.75rem;
    color: var(--color-slate);
  }

  @media (max-width: 768px) {
    .content-grid {
      grid-template-columns: 1fr;
    }

    .phases-column {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }

    .phase-item {
      flex: 0 1 auto;
    }
  }
</style>
