<script>
  import { fade, fly, scale } from 'svelte/transition';
  import Icon from '../../elements/Icon.svelte';

  const baseUrl = import.meta.env.BASE_URL;

  function downloadVaultTemplate() {
    // Direct download of pre-built ZIP
    const link = document.createElement('a');
    link.href = `${baseUrl}downloads/vault-template.zip`;
    link.download = 'promptotyping-vault-template.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
</script>

<div class="outro-zusammenfassung">
  <h3 in:fade={{ duration: 400 }}>Zusammenfassung</h3>

  <div class="text-card" in:fly={{ y: 20, duration: 500, delay: 200 }}>
    <p>
      <span class="promptotyping">Promptotyping</span> strukturiert die Zusammenarbeit zwischen Forscher:innen und LLMs
      durch einen vierphasigen Prozess: Materialsammlung, explorative Analyse, Wissensdestillation
      im <span class="promptotyping">Promptotyping</span> Vault, und iterative Implementation.
    </p>
    <p>
      Der <span class="promptotyping">Promptotyping</span> Vault ist ein flexibler Wissensspeicher aus <strong>Promptotyping Documents</strong>.
      Die Kerndokumente DATA.md, REQUIREMENTS.md und CONTEXT.md bilden den Ausgangspunkt, können aber je nach Domäne erweitert werden.
      Sie machen implizites Domänenwissen für LLMs nutzbar und wachsen mit jeder Iteration.
    </p>
    <p>
      <strong>Critical Expert in the Loop</strong>: Domänenexpert:innen bleiben unverzichtbar.
      Sie validieren Outputs, erkennen Halluzinationen und steuern die fachliche Qualität.
    </p>
  </div>

  <div class="three-levels" in:fly={{ y: 20, duration: 500, delay: 400 }}>
    <h4>Drei Ebenen der Methodik</h4>
    <div class="levels-grid">
      <div class="level-item">
        <span class="level-label">Technisch</span>
        <p>Vault-Dokumente, Context Engineering, iterative Prototypen</p>
      </div>
      <div class="level-item">
        <span class="level-label">Methodisch</span>
        <p>Phasenmodell, Critical Expert, Cyborg-Kollaboration</p>
      </div>
      <div class="level-item">
        <span class="level-label">Epistemisch</span>
        <p>Validierung, Sycophancy-Bewusstsein, Grenzen der Automation</p>
      </div>
    </div>
  </div>

  <div class="savepoint-box" in:fly={{ y: 20, duration: 500, delay: 500 }}>
    <h4>Der Vault als Savepoint</h4>
    <p>
      Der Vault funktioniert wie ein Savepoint in einem Computerspiel: Der akkumulierte Wissensstand
      bleibt erhalten, auch wenn die Entwicklung unterbrochen wird. Neue Teammitglieder können den
      Vault lesen und den Projektstand verstehen. Bei Modellwechseln oder nach längeren Pausen
      ermöglicht der Vault einen nahtlosen Wiedereinstieg.
    </p>
  </div>

  <div class="cta" in:scale={{ duration: 400, delay: 600 }}>
    <div class="cta-section">
      <h4>Selbst ausprobieren</h4>
      <button
        class="cta-btn cta-btn-download"
        on:click={downloadVaultTemplate}
      >
        <Icon name="file-text" size={18} />
        Vault-Template herunterladen
      </button>
      <p class="cta-hint">Enthält DATA.md, REQUIREMENTS.md, CONTEXT.md und JOURNAL.md</p>
    </div>

    <div class="cta-section">
      <h4>Beispielprojekt ansehen</h4>
      <div class="cta-links">
        <a
          href="https://github.com/DigitalHumanitiesCraft/CorrespExplorer"
          target="_blank"
          rel="noopener"
          class="cta-btn"
        >
          <Icon name="github" size={18} />
          GitHub Repository
        </a>
        <a
          href="https://dhcraft.org/CorrespExplorer"
          target="_blank"
          rel="noopener"
          class="cta-btn cta-btn-secondary"
        >
          <Icon name="external-link" size={18} />
          Live Demo
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .outro-zusammenfassung {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xl);
    text-align: center;
  }

  h3 {
    color: var(--color-black);
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin: 0;
  }

  .text-card {
    max-width: 700px;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .text-card p {
    font-size: clamp(0.9rem, 1.6vw, 1rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: left;
    margin: 0;
  }

  .text-card p + p {
    margin-top: var(--space-md);
  }

  .text-card strong {
    color: var(--color-terracotta);
  }

  .three-levels {
    max-width: 800px;
    width: 100%;
  }

  .three-levels h4 {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-slate);
    margin: 0 0 var(--space-md) 0;
    text-align: center;
  }

  .levels-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-md);
  }

  .level-item {
    background: white;
    padding: var(--space-md);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    text-align: center;
  }

  .level-label {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-terracotta);
    display: block;
    margin-bottom: var(--space-xs);
  }

  .level-item p {
    font-size: 0.85rem;
    color: var(--color-black);
    line-height: 1.5;
    margin: 0;
  }

  .savepoint-box {
    max-width: 700px;
    background: rgba(96, 125, 139, 0.06);
    padding: var(--space-md) var(--space-lg);
    border-radius: 8px;
    border-left: 3px solid var(--color-slate);
    text-align: left;
  }

  .savepoint-box h4 {
    font-size: 0.85rem;
    color: var(--color-slate);
    margin: 0 0 var(--space-sm) 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .savepoint-box p {
    font-size: 0.9rem;
    color: var(--color-black);
    line-height: 1.6;
    margin: 0;
  }

  .cta {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: var(--space-xl);
    flex-wrap: wrap;
    width: 100%;
    max-width: 800px;
  }

  .cta-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    flex: 1;
    min-width: 280px;
  }

  .cta-section h4 {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-slate);
    margin: 0;
  }

  .cta-hint {
    font-size: 0.75rem;
    color: var(--color-slate);
    margin: 0;
    opacity: 0.8;
  }

  .cta-links {
    display: flex;
    gap: var(--space-md);
    flex-wrap: wrap;
    justify-content: center;
  }

  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-sm) var(--space-lg);
    background: var(--color-terracotta);
    color: var(--color-white);
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    border: none;
    cursor: pointer;
    font-family: inherit;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .cta-btn-download {
    background: var(--color-slate);
  }

  .cta-btn-download:hover {
    box-shadow: 0 6px 20px rgba(96, 125, 139, 0.3);
  }

  .cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(191, 91, 62, 0.3);
  }

  .cta-btn-secondary {
    background: transparent;
    color: var(--color-terracotta);
    border: 2px solid var(--color-terracotta);
  }

  .cta-btn-secondary:hover {
    background: rgba(191, 91, 62, 0.1);
    box-shadow: none;
  }

  @media (max-width: 767px) {
    .cta-links {
      flex-direction: column;
      width: 100%;
      max-width: 250px;
    }

    .levels-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
