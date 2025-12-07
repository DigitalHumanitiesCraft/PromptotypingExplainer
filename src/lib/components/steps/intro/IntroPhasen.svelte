<script>
  import { stepStructure } from '../../../stores/scroll.js';
  import overviewImage from '../../../../assets/images/promptotyping-overview.png';

  // Get phase data (skip intro and outro)
  const phases = stepStructure.filter(p => p.number !== null);
</script>

<div class="intro-phasen">
  <div class="side-by-side">
    <!-- Content Side -->
    <div class="content-side">
      <h3>Die vier Phasen</h3>

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

    <!-- Visual Side -->
    <div class="visual-side">
      <figure>
        <img src={overviewImage} alt="Promptotyping Workflow: Vorbereitung, Exploration, Destillation, Implementation" />
        <figcaption>Vier Phasen: Von Rohmaterial zu funktionalem Interface</figcaption>
      </figure>
    </div>
  </div>
</div>

<style>
  .intro-phasen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  h3 {
    color: var(--color-black);
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    margin: 0;
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

  @media (max-width: 900px) {
    .phase-list {
      width: 100%;
      max-width: 350px;
    }
  }
</style>
