<script>
  import { fade, fly } from 'svelte/transition';
</script>

<div class="phase3-titel">
  <header class="scene-header" in:fly={{ y: -20, duration: 500 }}>
    <span class="phase-number">Phase 3</span>
    <h2>Destillation</h2>
    <p class="subtitle">Vom Rohmaterial zum Vault</p>
  </header>

  <div class="content-block" in:fade={{ delay: 200, duration: 400 }}>
    <p class="lead">
      Die Erkenntnisse aus der Exploration werden nun <strong>destilliert</strong>.
      Das Kernprinzip: maximale Information mit minimalen Tokens. Je präziser der Kontext,
      desto besser die LLM-Performance – denn <strong>Context Rot</strong> ist real.
    </p>

    <div class="vault-preview">
      <div class="vault-icon" in:fly={{ y: 20, duration: 400, delay: 400 }}>
        <svg viewBox="0 0 64 64" width="80" height="80">
          <rect x="8" y="16" width="48" height="40" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
          <path d="M8 28 L56 28" stroke="currentColor" stroke-width="2"/>
          <circle cx="32" cy="38" r="6" fill="none" stroke="currentColor" stroke-width="2"/>
          <path d="M32 32 L32 20" stroke="currentColor" stroke-width="2"/>
          <rect x="24" y="8" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
      </div>
      <p class="vault-label" in:fade={{ delay: 600, duration: 400 }}>Der Promptotyping Vault</p>
    </div>
  </div>

  <p class="insight" in:fade={{ delay: 800, duration: 400 }}>
    Hier entstehen die <strong>.md-Dateien</strong> - optimiert für das LLM
  </p>
</div>

<style>
  .phase3-titel {
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
    margin: 0;
  }

  .lead strong {
    color: var(--color-terracotta);
  }

  .vault-preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    margin-top: var(--space-lg);
  }

  .vault-icon {
    color: var(--color-slate);
    padding: var(--space-md);
    background: rgba(255, 255, 255, 0.8);
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }

  .vault-label {
    font-size: 0.9rem;
    color: var(--color-slate);
    font-weight: 500;
    margin: 0;
  }

  .insight {
    color: var(--color-slate);
    font-size: clamp(0.95rem, 1.8vw, 1.1rem);
    margin: 0;
  }

  .insight strong {
    color: var(--color-terracotta);
  }
</style>
