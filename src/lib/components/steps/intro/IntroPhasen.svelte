<script>
  import { stepStructure } from '../../../stores/scroll.js';
  import overviewImage from '../../../../assets/images/promptotyping-overview.png';

  // Get phase data (skip intro and outro)
  const phases = stepStructure.filter(p => p.number !== null);
</script>

<div class="intro-phasen">
  <h3>Das vierphasige Prozessmodell</h3>

  <div class="explanation-block">
    <p>
      Das Phasenmodell strukturiert den Entwicklungsprozess von der ersten Materialsammlung bis zum
      funktionalen Prototyp. Es basiert auf dem <strong>Design Science Research Framework</strong> (Hevner et al., 2004)
      und integriert etablierte Methoden des Requirements Engineering mit den spezifischen Anforderungen
      wissenschaftlicher Softwareentwicklung.
    </p>
    <p>
      Ein zentrales Merkmal: Die strukturierten <strong>.md-Dokumente entstehen erst in Phase 3</strong> (Destillation),
      nicht am Projektanfang. Die ersten beiden Phasen sammeln und analysieren Rohmaterial, bevor es
      zu LLM-optimiertem Kontext verdichtet wird. Jede Phase produziert spezifische Artefakte und
      fungiert als Kontrollpunkt zur Risikoreduktion.
    </p>
  </div>

  <div class="side-by-side">
    <div class="content-side">
      <div class="phase-list">
        {#each phases as phase, i}
          <div class="phase-item">
            <div class="phase-number">{phase.number}</div>
            <div class="phase-info">
              <span class="phase-label">{phase.label}</span>
              <span class="phase-subtitle">{phase.subtitle}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="visual-side">
      <figure>
        <img src={overviewImage} alt="Promptotyping Workflow: Vorbereitung, Exploration, Destillation, Implementation" />
      </figure>
    </div>
  </div>

  <div class="process-flow">
    <p>
      Der Prozess ist <strong>iterativ</strong>: Jede Implementation-Iteration kann Updates an den
      Vault-Dokumenten auslösen. Neues Wissen fließt zurück in die .md-Dateien, verbessert den Kontext
      für die nächste Iteration und führt so zu immer präziseren Prototypen.
    </p>
  </div>
</div>

<style>
  .intro-phasen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: var(--space-lg);
  }

  h3 {
    color: var(--color-black);
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    margin: 0;
    text-align: center;
  }

  .explanation-block {
    max-width: 750px;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .explanation-block p {
    font-size: clamp(0.9rem, 1.6vw, 1rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: left;
    margin: 0;
  }

  .explanation-block p + p {
    margin-top: var(--space-md);
  }

  .explanation-block strong {
    color: var(--color-terracotta);
  }

  .side-by-side {
    display: flex;
    gap: var(--space-xl);
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 900px;
  }

  .content-side {
    flex: 1;
    max-width: 350px;
  }

  .visual-side {
    flex: 1;
    max-width: 450px;
  }

  .visual-side figure {
    margin: 0;
  }

  .visual-side img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .phase-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .phase-item {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    background: white;
    padding: var(--space-sm) var(--space-md);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .phase-item:hover {
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .phase-number {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--color-terracotta);
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  .phase-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .phase-label {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--color-black);
  }

  .phase-subtitle {
    font-size: 0.8rem;
    color: var(--color-slate);
  }

  .process-flow {
    max-width: 700px;
    background: rgba(191, 91, 62, 0.08);
    padding: var(--space-md) var(--space-lg);
    border-radius: 8px;
    border-left: 3px solid var(--color-terracotta);
  }

  .process-flow p {
    font-size: clamp(0.9rem, 1.5vw, 0.95rem);
    color: var(--color-black);
    line-height: 1.6;
    margin: 0;
    text-align: left;
  }

  .process-flow strong {
    color: var(--color-terracotta);
  }

  @media (max-width: 900px) {
    .side-by-side {
      flex-direction: column;
    }

    .content-side,
    .visual-side {
      max-width: 100%;
      width: 100%;
    }

    .phase-list {
      max-width: 350px;
      margin: 0 auto;
    }
  }
</style>
