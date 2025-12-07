<script>
  import { fade, fly, scale } from 'svelte/transition';
</script>

<div class="phase3-dokumente">
  <h3 in:fade={{ duration: 400 }}>Die Vault-Dokumente</h3>
  <p class="description" in:fade={{ delay: 150, duration: 400 }}>
    Drei Kerndokumente verdichten das Wissen LLM-optimiert
  </p>

  <div class="documents-grid">
    <div class="document" in:fly={{ y: 30, duration: 500, delay: 300 }}>
      <div class="doc-icon data">
        <span class="doc-ext">.md</span>
      </div>
      <div class="doc-content">
        <h4>DATA.md</h4>
        <p>Struktur und Semantik der Forschungsdaten - Schema, Felder, Beziehungen</p>
      </div>
    </div>

    <div class="document" in:fly={{ y: 30, duration: 500, delay: 450 }}>
      <div class="doc-icon requirements">
        <span class="doc-ext">.md</span>
      </div>
      <div class="doc-content">
        <h4>REQUIREMENTS.md</h4>
        <p>Formalisierte Anforderungen mit MUSS / SOLL / KANN Priorisierung</p>
      </div>
    </div>

    <div class="document" in:fly={{ y: 30, duration: 500, delay: 600 }}>
      <div class="doc-icon context">
        <span class="doc-ext">.md</span>
      </div>
      <div class="doc-content">
        <h4>CONTEXT.md</h4>
        <p>Domänenwissen, Forschungsfragen und Projektziele</p>
      </div>
    </div>
  </div>

  <div class="compression-note" in:fade={{ delay: 800, duration: 400 }}>
    <span class="note-icon">!</span>
    <p><strong>Context Compression:</strong> Maximale Information bei minimaler Token-Anzahl</p>
  </div>
</div>

<style>
  .phase3-dokumente {
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

  .documents-grid {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    width: 100%;
    max-width: 450px;
  }

  .document {
    display: flex;
    align-items: flex-start;
    gap: var(--space-md);
    padding: var(--space-md);
    background: rgba(255, 255, 255, 0.9);
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    text-align: left;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .document:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  .doc-icon {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .doc-icon.data {
    background: linear-gradient(135deg, #607d8b 0%, #455a64 100%);
  }

  .doc-icon.requirements {
    background: linear-gradient(135deg, #bf5b3e 0%, #8b4513 100%);
  }

  .doc-icon.context {
    background: linear-gradient(135deg, #78909c 0%, #546e7a 100%);
  }

  .doc-ext {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: white;
    font-weight: 600;
  }

  .doc-content {
    flex: 1;
  }

  .doc-content h4 {
    font-family: var(--font-mono);
    font-size: 0.95rem;
    color: var(--color-black);
    margin: 0 0 var(--space-xs) 0;
  }

  .doc-content p {
    font-size: 0.8rem;
    color: var(--color-slate);
    margin: 0;
    line-height: 1.4;
  }

  .compression-note {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-md);
    background: rgba(191, 91, 62, 0.08);
    border-radius: 8px;
    max-width: 450px;
  }

  .note-icon {
    width: 24px;
    height: 24px;
    background: var(--color-terracotta);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.8rem;
    flex-shrink: 0;
  }

  .compression-note p {
    font-size: 0.85rem;
    color: var(--color-slate);
    margin: 0;
    text-align: left;
  }

  .compression-note strong {
    color: var(--color-terracotta);
  }

  @media (max-width: 767px) {
    .documents-grid {
      max-width: 100%;
    }

    .document {
      padding: var(--space-sm);
    }

    .doc-icon {
      width: 40px;
      height: 40px;
    }
  }
</style>
