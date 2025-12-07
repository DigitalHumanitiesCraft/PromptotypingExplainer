<script>
  import { stepStructure } from '../../../stores/scroll.js';
  import overviewImage from '../../../../assets/images/promptotyping-overview.png';

  // Get phase data (skip intro and outro)
  const phases = stepStructure.filter(p => p.number !== null);
</script>

<div class="intro-phasen">
  <div class="content">
    <h3>Die vier Phasen</h3>

    <div class="phase-icons">
      {#each phases as phase, i}
        <div class="phase-icon">
          <div class="icon-circle">{phase.number}</div>
          <span class="icon-label">{phase.label}</span>
          <span class="icon-subtitle">{phase.subtitle}</span>
        </div>
      {/each}
    </div>

    <div class="overview-image">
      <img src={overviewImage} alt="Promptotyping Workflow: Vorbereitung, Exploration, Destillation, Implementation" />
    </div>
  </div>
</div>

<style>
  .intro-phasen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xl);
    width: 100%;
  }

  h3 {
    color: var(--color-black);
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    margin: 0;
    text-align: center;
  }

  .phase-icons {
    display: flex;
    gap: var(--space-xl);
    flex-wrap: wrap;
    justify-content: center;
  }

  .phase-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
  }

  .icon-circle {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: var(--color-terracotta);
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.5rem;
    transition: transform 0.2s ease;
  }

  .phase-icon:hover .icon-circle {
    transform: scale(1.1);
  }

  .icon-label {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-black);
  }

  .icon-subtitle {
    font-size: 0.75rem;
    color: var(--color-slate);
  }

  .overview-image {
    max-width: 800px;
    width: 100%;
  }

  .overview-image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 767px) {
    .phase-icons {
      gap: var(--space-lg);
    }

    .icon-circle {
      width: 48px;
      height: 48px;
      font-size: 1.25rem;
    }

    .overview-image {
      padding: 0 var(--space-sm);
    }
  }
</style>
