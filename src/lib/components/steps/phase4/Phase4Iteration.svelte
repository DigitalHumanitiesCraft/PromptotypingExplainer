<script>
  import { fade, fly, scale } from 'svelte/transition';
</script>

<div class="phase4-iteration">
  <h3 in:fade={{ duration: 400 }}>Der Iterationszyklus</h3>
  <p class="description" in:fade={{ delay: 150, duration: 400 }}>
    Prompt → LLM → Prototype → Validierung → Wiederholung
  </p>

  <div class="iteration-visual">
    <!-- Vault input -->
    <div class="iteration-block vault" in:fly={{ x: -30, duration: 500, delay: 300 }}>
      <div class="block-icon">
        <svg viewBox="0 0 32 32" width="24" height="24">
          <rect x="4" y="8" width="24" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
          <path d="M4 14 L28 14" stroke="currentColor" stroke-width="2"/>
          <circle cx="16" cy="21" r="3" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
      </div>
      <span class="block-label">Vault</span>
      <span class="block-detail">.md Files</span>
    </div>

    <div class="arrow" in:fade={{ delay: 400 }}>→</div>

    <!-- LLM processing -->
    <div class="iteration-block llm" in:scale={{ duration: 400, delay: 500 }}>
      <div class="block-icon llm-icon">
        <span>LLM</span>
      </div>
      <span class="block-label">Generierung</span>
      <span class="block-detail">Code + UI</span>
    </div>

    <div class="arrow" in:fade={{ delay: 600 }}>→</div>

    <!-- Prototype output -->
    <div class="iteration-block prototype" in:fly={{ x: 30, duration: 500, delay: 700 }}>
      <div class="block-icon">
        <svg viewBox="0 0 32 32" width="24" height="24">
          <rect x="2" y="4" width="28" height="24" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
          <path d="M2 10 L30 10" stroke="currentColor" stroke-width="2"/>
          <circle cx="6" cy="7" r="1.5" fill="currentColor"/>
          <circle cx="11" cy="7" r="1.5" fill="currentColor"/>
        </svg>
      </div>
      <span class="block-label">Prototype</span>
      <span class="block-detail">Lauffähig</span>
    </div>
  </div>

  <div class="validation-row" in:fade={{ delay: 900, duration: 400 }}>
    <div class="validation-badge">
      <span class="expert-icon">👤</span>
      <span>Critical Expert validiert gegen REQUIREMENTS.md</span>
    </div>
  </div>

  <p class="conclusion" in:fade={{ delay: 1100, duration: 400 }}>
    Der Code ist <strong>Ausgangspunkt</strong>, nicht Endpunkt
  </p>
</div>

<style>
  .phase4-iteration {
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
    color: var(--color-black);
    font-size: clamp(0.9rem, 1.6vw, 1.05rem);
    max-width: 600px;
    margin: 0;
    font-family: var(--font-mono);
    background: white;
    padding: var(--space-md) var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .iteration-visual {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-md);
  }

  .iteration-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-md);
    background: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    min-width: 90px;
    transition: transform 0.2s ease;
  }

  .iteration-block:hover {
    transform: translateY(-2px);
  }

  .block-icon {
    color: var(--color-slate);
  }

  .block-icon.llm-icon {
    background: linear-gradient(135deg, #bf5b3e 0%, #8b4513 100%);
    color: white;
    padding: var(--space-xs) var(--space-sm);
    border-radius: 6px;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 600;
  }

  .block-label {
    font-size: 0.85rem;
    color: var(--color-black);
    font-weight: 600;
  }

  .block-detail {
    font-size: 0.7rem;
    color: var(--color-slate);
  }

  .arrow {
    color: var(--color-terracotta);
    font-size: 1.5rem;
    font-weight: 300;
  }

  .validation-row {
    margin-top: var(--space-sm);
  }

  .validation-badge {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-md);
    background: rgba(96, 125, 139, 0.08);
    border: 1px dashed var(--color-slate);
    border-radius: 8px;
    font-size: 0.85rem;
    color: var(--color-slate);
  }

  .expert-icon {
    font-size: 1.2rem;
  }

  .conclusion {
    color: var(--color-slate);
    font-size: clamp(0.95rem, 1.8vw, 1.1rem);
    margin: 0;
  }

  .conclusion strong {
    color: var(--color-terracotta);
  }

  @media (max-width: 767px) {
    .iteration-visual {
      flex-direction: column;
    }

    .arrow {
      transform: rotate(90deg);
    }

    .iteration-block {
      min-width: 120px;
    }
  }
</style>
