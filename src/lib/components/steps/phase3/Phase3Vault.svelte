<script>
  import { fade, fly, scale } from 'svelte/transition';

  // GitHub repository base URL for raw files
  const githubBase = 'https://github.com/DigitalHumanitiesCraft/PromptotypingExplainer/blob/main/knowledge';
  const downloadBase = import.meta.env.BASE_URL + 'downloads';

  const vaultFiles = [
    { name: 'DATA.md', desc: 'Was haben wir?', github: `${githubBase}/knowledge.md` },
    { name: 'REQUIREMENTS.md', desc: 'Was wollen wir?', github: `${githubBase}/requirements.md` },
    { name: 'CONTEXT.md', desc: 'Was wissen wir?', github: `${githubBase}/implementation.md` },
  ];
</script>

<div class="phase3-vault">
  <h3 in:fade={{ duration: 400 }}>Der <span class="promptotyping">Promptotyping</span> Vault</h3>

  <div class="text-card" in:fade={{ delay: 150, duration: 400 }}>
    <p>
      Der Vault fungiert als <strong>Boundary Object</strong> (Star & Griesemer, 1989) – ein Artefakt,
      das zwischen verschiedenen sozialen Welten vermittelt: zwischen technischer Implementation und
      fachlicher Anforderung, zwischen Entwickler:in und Domänenexpert:in, zwischen Mensch und LLM.
      Er ist strukturiert genug für maschinelle Verarbeitung und gleichzeitig verständlich für
      menschliche Leser:innen.
    </p>
    <p>
      Die Dokumentstruktur ist <strong>flexibel und erweiterbar</strong>. Die drei Kerndokumente
      (DATA.md, REQUIREMENTS.md, CONTEXT.md) bilden den Ausgangspunkt. Je nach Domäne können
      weitere Dokumente ergänzt werden: SCHEMA.md für komplexe Datenmodelle, VALIDATION.md für
      Qualitätskriterien, API-NOTES.md für Schnittstellendokumentation.
    </p>
  </div>

  <div class="vault-visual">
    <!-- Incoming arrows from sources -->
    <div class="source-flow" in:fade={{ delay: 300, duration: 400 }}>
      <div class="source-item">
        <span class="source-label">Datenstrukturen</span>
        <div class="arrow">→</div>
      </div>
      <div class="source-item">
        <span class="source-label">Erkenntnisse</span>
        <div class="arrow">→</div>
      </div>
      <div class="source-item">
        <span class="source-label">Anforderungen</span>
        <div class="arrow">→</div>
      </div>
    </div>

    <!-- Central vault -->
    <div class="vault-center" in:scale={{ duration: 500, delay: 500 }}>
      <div class="vault-box">
        <div class="vault-header">VAULT</div>
        <div class="vault-files">
          <div class="file-item">
            <span class="file">DATA.md</span>
            <span class="file-desc">Was haben wir?</span>
          </div>
          <div class="file-item">
            <span class="file">REQUIREMENTS.md</span>
            <span class="file-desc">Was wollen wir?</span>
          </div>
          <div class="file-item">
            <span class="file">CONTEXT.md</span>
            <span class="file-desc">Was wissen wir?</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Outgoing arrow to LLM -->
    <div class="llm-flow" in:fade={{ delay: 700, duration: 400 }}>
      <div class="arrow large">→</div>
      <div class="llm-target">
        <span class="llm-label">Phase 4</span>
        <span class="llm-sublabel">Implementation</span>
      </div>
    </div>
  </div>

  
  <!-- Download Section -->
  <div class="download-section" in:fade={{ delay: 1000, duration: 400 }}>
    <p class="download-intro">Starte dein eigenes Projekt:</p>
    <div class="download-buttons">
      <a
        href="{downloadBase}/VAULT-TEMPLATE-README.md"
        download
        class="download-btn primary"
      >
        <span class="btn-icon">&#8595;</span>
        Vault-Template
      </a>
      <a
        href="https://github.com/DigitalHumanitiesCraft/PromptotypingExplainer/tree/main/knowledge"
        target="_blank"
        rel="noopener"
        class="download-btn secondary"
      >
        <span class="btn-icon">&#8599;</span>
        Echtes Beispiel auf GitHub
      </a>
    </div>
  </div>
</div>

<style>
  .phase3-vault {
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

  .promptotyping {
    font-family: var(--font-mono);
    font-weight: 700;
    color: var(--color-terracotta);
    letter-spacing: 0.02em;
  }

  .vault-visual {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
    padding: var(--space-md);
  }

  .source-flow {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .source-item {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
  }

  .source-label {
    font-size: 0.75rem;
    color: var(--color-slate);
    background: rgba(96, 125, 139, 0.1);
    padding: var(--space-xs) var(--space-sm);
    border-radius: 4px;
    min-width: 90px;
    text-align: center;
  }

  .arrow {
    color: var(--color-slate);
    font-size: 1rem;
    opacity: 0.6;
  }

  .arrow.large {
    font-size: 1.5rem;
    color: var(--color-terracotta);
    opacity: 1;
  }

  .vault-center {
    flex-shrink: 0;
  }

  .vault-box {
    background: linear-gradient(135deg, #455a64 0%, #37474f 100%);
    border-radius: 12px;
    padding: var(--space-md);
    min-width: 160px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }

  .vault-header {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 0.1em;
    margin-bottom: var(--space-sm);
  }

  .vault-files {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .file-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-sm);
  }

  .file {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: white;
    background: rgba(255, 255, 255, 0.15);
    padding: 4px 8px;
    border-radius: 4px;
    white-space: nowrap;
  }

  .file-desc {
    font-size: 0.65rem;
    color: rgba(255, 255, 255, 0.7);
    font-style: italic;
    white-space: nowrap;
  }

  .llm-flow {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }

  .llm-target {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }

  .llm-label {
    font-size: 0.85rem;
    color: var(--color-terracotta);
    font-weight: 600;
  }

  .llm-sublabel {
    font-size: 0.7rem;
    color: var(--color-slate);
  }

  .conclusion {
    color: var(--color-slate);
    font-size: clamp(0.95rem, 1.8vw, 1.1rem);
    margin: 0;
  }

  .conclusion strong {
    color: var(--color-terracotta);
  }

  /* Download Section */
  .download-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    padding-top: var(--space-md);
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    margin-top: var(--space-sm);
  }

  .download-intro {
    font-size: 0.85rem;
    color: var(--color-slate);
    margin: 0;
  }

  .download-buttons {
    display: flex;
    gap: var(--space-sm);
    flex-wrap: wrap;
    justify-content: center;
  }

  .download-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: var(--space-xs) var(--space-md);
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 500;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .download-btn:hover {
    transform: translateY(-2px);
  }

  .download-btn.primary {
    background: var(--color-terracotta);
    color: white;
  }

  .download-btn.primary:hover {
    box-shadow: 0 4px 12px rgba(191, 91, 62, 0.3);
  }

  .download-btn.secondary {
    background: transparent;
    color: var(--color-slate);
    border: 1px solid var(--color-slate);
  }

  .download-btn.secondary:hover {
    background: rgba(96, 125, 139, 0.1);
  }

  .btn-icon {
    font-size: 0.9rem;
  }

  @media (max-width: 767px) {
    .vault-visual {
      flex-direction: column;
      gap: var(--space-md);
    }

    .source-flow {
      flex-direction: row;
    }

    .source-item {
      flex-direction: column;
    }

    .arrow {
      transform: rotate(90deg);
    }

    .llm-flow {
      flex-direction: column;
    }

    .arrow.large {
      transform: rotate(90deg);
    }

    .llm-target {
      align-items: center;
    }

    .download-buttons {
      flex-direction: column;
      width: 100%;
      max-width: 200px;
    }

    .download-btn {
      justify-content: center;
    }
  }
</style>
