<script>
  import { fade, fly } from 'svelte/transition';
</script>

<div class="phase4-vault-update">
  <h3 in:fade={{ duration: 400 }}>Vault-Update</h3>
  <p class="description" in:fade={{ delay: 150, duration: 400 }}>
    Neues Wissen fließt zurück - der Vault wächst mit jeder Iteration
  </p>

  <div class="update-visual">
    <!-- Prototype box -->
    <div class="update-source" in:fly={{ x: -30, duration: 500, delay: 300 }}>
      <div class="source-header">Prototype zeigt...</div>
      <div class="source-items">
        <div class="source-item">Fehlende Datenfelder</div>
        <div class="source-item">Unklare Anforderungen</div>
        <div class="source-item">Neue Erkenntnisse</div>
      </div>
    </div>

    <!-- Arrow -->
    <div class="update-arrow" in:fade={{ delay: 500, duration: 400 }}>
      <svg viewBox="0 0 60 40" width="60" height="40">
        <path d="M5 20 L45 20" stroke="var(--color-terracotta)" stroke-width="2" stroke-dasharray="4 3"/>
        <polygon points="45,15 55,20 45,25" fill="var(--color-terracotta)"/>
      </svg>
      <span class="arrow-label">Update</span>
    </div>

    <!-- Vault target -->
    <div class="update-target" in:fly={{ x: 30, duration: 500, delay: 400 }}>
      <div class="target-header">Vault</div>
      <div class="target-items">
        <div class="target-item" in:fade={{ delay: 600 }}>
          <span class="file-name">DATA.md</span>
          <span class="update-type">+ Felder</span>
        </div>
        <div class="target-item" in:fade={{ delay: 700 }}>
          <span class="file-name">REQUIREMENTS.md</span>
          <span class="update-type">+ Klarheit</span>
        </div>
        <div class="target-item" in:fade={{ delay: 800 }}>
          <span class="file-name">CONTEXT.md</span>
          <span class="update-type">+ Wissen</span>
        </div>
      </div>
    </div>
  </div>

  <div class="loop-indicator" in:fade={{ delay: 900, duration: 400 }}>
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17 1l4 4-4 4"/>
      <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
      <path d="M7 23l-4-4 4-4"/>
      <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
    </svg>
    <span>Verbesserter Vault → besserer Prototype → nächste Iteration</span>
  </div>

  <p class="conclusion" in:fade={{ delay: 1000, duration: 400 }}>
    <strong>Vom Wissen zum Werkzeug</strong>
  </p>
</div>

<style>
  .phase4-vault-update {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
    text-align: center;
  }

  h3 {
    color: var(--color-black);
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    margin: 0;
  }

  .description {
    color: var(--color-slate);
    font-size: clamp(0.9rem, 1.6vw, 1.05rem);
    max-width: 500px;
    margin: 0;
  }

  .update-visual {
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }

  .update-source {
    background: rgba(255, 255, 255, 0.95);
    border: 2px solid var(--color-slate);
    border-radius: 12px;
    padding: var(--space-md);
    min-width: 160px;
  }

  .source-header {
    font-size: 0.75rem;
    color: var(--color-slate);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--space-sm);
    font-weight: 600;
  }

  .source-items {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .source-item {
    font-size: 0.8rem;
    color: var(--color-black);
    padding: 4px 8px;
    background: rgba(191, 91, 62, 0.1);
    border-radius: 4px;
    text-align: left;
  }

  .update-arrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .arrow-label {
    font-size: 0.7rem;
    color: var(--color-terracotta);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .update-target {
    background: linear-gradient(135deg, #455a64 0%, #37474f 100%);
    border-radius: 12px;
    padding: var(--space-md);
    min-width: 180px;
  }

  .target-header {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 0.1em;
    margin-bottom: var(--space-sm);
  }

  .target-items {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .target-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  .file-name {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: white;
  }

  .update-type {
    font-size: 0.65rem;
    color: var(--color-success);
    font-weight: 600;
  }

  .loop-indicator {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-md);
    background: rgba(191, 91, 62, 0.08);
    border-radius: 8px;
    color: var(--color-terracotta);
    font-size: 0.85rem;
  }

  .loop-indicator svg {
    flex-shrink: 0;
  }

  .conclusion {
    color: var(--color-terracotta);
    font-size: clamp(1rem, 2vw, 1.2rem);
    margin: 0;
  }

  @media (max-width: 767px) {
    .update-visual {
      flex-direction: column;
    }

    .update-arrow svg {
      transform: rotate(90deg);
    }

    .update-source,
    .update-target {
      min-width: 200px;
    }
  }
</style>
