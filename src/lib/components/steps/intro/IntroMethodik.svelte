<script>
  import GlossaryTerm from '../../GlossaryTerm.svelte';
</script>

<div class="intro-methodik">
  <div class="content">
    <p class="approach">
      Ein vierphasiges Prozessmodell mit systematischer Dokumentation
      und <GlossaryTerm id="critical-expert">Critical-Expert-in-the-Loop</GlossaryTerm>-Ansatz
      zur Qualitätssicherung durch Domänenwissen.
    </p>

    <div class="method-cards">
      <div class="method-card">
        <div class="card-icon">1</div>
        <h4>Strukturiert</h4>
        <p>Klare Phasen mit definierten Artefakten</p>
      </div>
      <div class="method-card">
        <div class="card-icon">2</div>
        <h4>Dokumentiert</h4>
        <p>Nachvollziehbare Entscheidungen</p>
      </div>
      <div class="method-card">
        <div class="card-icon">3</div>
        <h4>Validiert</h4>
        <p>Domänenexperten als Qualitätskontrolle</p>
      </div>
    </div>
  </div>
</div>

<style>
  .intro-methodik {
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
    max-width: 900px;
  }

  .approach {
    font-size: clamp(1rem, 1.8vw, 1.15rem);
    color: var(--color-slate);
    max-width: 650px;
    line-height: 1.7;
    text-align: center;
    margin: 0;
  }

  .method-cards {
    display: flex;
    gap: var(--space-lg);
    flex-wrap: wrap;
    justify-content: center;
  }

  .method-card {
    background: var(--color-white);
    border: 1px solid rgba(96, 125, 139, 0.2);
    border-radius: 8px;
    padding: var(--space-lg);
    text-align: center;
    width: 180px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .method-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  .card-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--color-terracotta);
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.25rem;
    margin: 0 auto var(--space-md);
  }

  .method-card h4 {
    color: var(--color-black);
    margin: 0 0 var(--space-xs);
    font-size: 1rem;
  }

  .method-card p {
    color: var(--color-slate);
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.4;
  }

  @media (max-width: 767px) {
    .method-cards {
      flex-direction: column;
      align-items: center;
    }

    .method-card {
      width: 100%;
      max-width: 280px;
    }
  }
</style>
