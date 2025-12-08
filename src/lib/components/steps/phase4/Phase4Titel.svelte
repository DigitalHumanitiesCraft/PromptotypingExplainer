<script>
  import { fade, fly } from 'svelte/transition';
</script>

<div class="phase4-titel">
  <header class="scene-header" in:fly={{ y: -20, duration: 500 }}>
    <span class="phase-number">Phase 4</span>
    <h2>Implementation</h2>
    <p class="subtitle">Iterative Entwicklung</p>
  </header>

  <div class="content-block" in:fade={{ delay: 200, duration: 400 }}>
    <p class="lead">
      Der Vault oder eine gezielte Auswahl wird dem LLM übergeben und die <strong>Cyborg-Arbeit</strong> beginnt.
      Mensch und KI entwickeln gemeinsam, validieren iterativ und aktualisieren den Vault sofort mit neuem Wissen.
    </p>

    <div class="cycle-preview" in:fly={{ y: 20, duration: 400, delay: 400 }}>
      <div class="cycle-step">
        <span class="cycle-icon">1</span>
        <span class="cycle-label">Prompt + Vault</span>
      </div>
      <div class="cycle-arrow">→</div>
      <div class="cycle-step">
        <span class="cycle-icon">2</span>
        <span class="cycle-label">LLM "reasoned"</span>
      </div>
      <div class="cycle-arrow">→</div>
      <div class="cycle-step">
        <span class="cycle-icon">3</span>
        <span class="cycle-label">Expert validiert</span>
      </div>
    </div>
  </div>

  <p class="insight" in:fade={{ delay: 600, duration: 400 }}>
    Jede Iteration = <strong>neuer Prototype</strong> + potentielles Vault-Update
  </p>
</div>

<style>
  .phase4-titel {
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
    max-width: 700px;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .lead {
    font-size: clamp(0.95rem, 1.8vw, 1.1rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: justify;
    margin: 0 0 var(--space-lg) 0;
  }

  .lead strong {
    color: var(--color-terracotta);
  }

  .cycle-preview {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-sm);
    flex-wrap: wrap;
  }

  .cycle-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-sm) var(--space-md);
    background: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    min-width: 100px;
  }

  .cycle-icon {
    width: 28px;
    height: 28px;
    background: var(--color-terracotta);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 0.85rem;
  }

  .cycle-label {
    font-size: 0.8rem;
    color: var(--color-slate);
    font-weight: 500;
  }

  .cycle-arrow {
    color: var(--color-slate);
    font-size: 1.2rem;
    opacity: 0.5;
  }

  .insight {
    color: var(--color-slate);
    font-size: clamp(0.95rem, 1.8vw, 1.1rem);
    margin: 0;
  }

  .insight strong {
    color: var(--color-terracotta);
  }

  @media (max-width: 767px) {
    .cycle-preview {
      flex-direction: column;
    }

    .cycle-arrow {
      transform: rotate(90deg);
    }
  }
</style>
