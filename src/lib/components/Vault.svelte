<script>
  import { vaultStructure, categoryStyles } from '../data/vault-structure.js';

  let expandedFolders = { 'knowledge': true };
  let selectedFile = null;

  function toggleFolder(name) {
    expandedFolders[name] = !expandedFolders[name];
    expandedFolders = expandedFolders;
  }

  function selectFile(file) {
    selectedFile = selectedFile?.name === file.name ? null : file;
  }

  function getCategoryStyle(category) {
    return categoryStyles[category] || categoryStyles.context;
  }
</script>

<section class="vault-page" id="vault">
  <div class="vault-content">
    <header class="vault-header">
      <h1>Promptotyping Vault</h1>
      <p class="vault-intro">
        Dies ist der <strong>echte Vault</strong> dieses Projekts – die strukturierte Dokumentation,
        die während der Entwicklung dieser Website mit Promptotyping entstanden ist.
      </p>
      <div class="meta-note">
        <span class="meta-icon">🔄</span>
        <span>Meta-Beispiel: Diese Dokumentation erklärt Promptotyping und wurde selbst damit entwickelt.</span>
      </div>
    </header>

    <div class="vault-container">
      <!-- File Tree -->
      <div class="file-tree">
        <div class="tree-header">
          <span class="folder-icon">📁</span>
          <span class="folder-name">knowledge/</span>
        </div>

        <ul class="tree-list">
          {#each vaultStructure.children as item}
            {#if item.type === 'folder'}
              <li class="tree-item folder">
                <button
                  class="tree-button"
                  class:expanded={expandedFolders[item.name]}
                  on:click={() => toggleFolder(item.name)}
                >
                  <span class="expand-icon">{expandedFolders[item.name] ? '▼' : '▶'}</span>
                  <span class="folder-icon">📁</span>
                  <span class="item-name">{item.name}</span>
                </button>

                {#if expandedFolders[item.name] && item.children}
                  <ul class="tree-list nested">
                    {#each item.children as child}
                      <li class="tree-item file">
                        <button
                          class="tree-button file-button"
                          class:selected={selectedFile?.name === child.name}
                          on:click={() => selectFile(child)}
                        >
                          <span class="file-icon">{getCategoryStyle(child.category).icon}</span>
                          <span class="item-name">{child.name}</span>
                        </button>
                      </li>
                    {/each}
                  </ul>
                {/if}
              </li>
            {:else}
              <li class="tree-item file">
                <button
                  class="tree-button file-button"
                  class:selected={selectedFile?.name === item.name}
                  on:click={() => selectFile(item)}
                  style="--category-color: {getCategoryStyle(item.category).color}"
                >
                  <span class="file-icon">{getCategoryStyle(item.category).icon}</span>
                  <span class="item-name">{item.name}</span>
                  <span class="category-badge" style="background: {getCategoryStyle(item.category).color}">
                    {getCategoryStyle(item.category).label}
                  </span>
                </button>
              </li>
            {/if}
          {/each}
        </ul>
      </div>

      <!-- File Preview -->
      <div class="file-preview">
        {#if selectedFile}
          <div class="preview-header">
            <h3>{selectedFile.name}</h3>
            <span class="category-tag" style="background: {getCategoryStyle(selectedFile.category).color}">
              {getCategoryStyle(selectedFile.category).label}
            </span>
          </div>

          <p class="preview-description">{selectedFile.description}</p>

          {#if selectedFile.purpose}
            <div class="preview-purpose">
              <strong>Vault-Rolle:</strong> {selectedFile.purpose}
            </div>
          {/if}

          {#if selectedFile.highlights}
            <div class="preview-highlights">
              <strong>Inhalte:</strong>
              <ul>
                {#each selectedFile.highlights as highlight}
                  <li>{highlight}</li>
                {/each}
              </ul>
            </div>
          {/if}

          <a
            href="https://github.com/DigitalHumanitiesCraft/PromptotypingExplainer/blob/main/knowledge/{selectedFile.name}"
            target="_blank"
            rel="noopener noreferrer"
            class="github-link"
          >
            Auf GitHub ansehen →
          </a>
        {:else}
          <div class="preview-placeholder">
            <span class="placeholder-icon">👆</span>
            <p>Wähle eine Datei aus dem Vault, um Details zu sehen.</p>
          </div>
        {/if}
      </div>
    </div>

    <!-- Vault Explanation -->
    <div class="vault-explanation">
      <h2>Vault-Struktur erklärt</h2>

      <div class="doc-types">
        {#each Object.entries(categoryStyles) as [key, style]}
          <div class="doc-type">
            <span class="doc-icon" style="color: {style.color}">{style.icon}</span>
            <div class="doc-info">
              <strong>{style.label}</strong>
              <span class="doc-desc">
                {#if key === 'context'}
                  Domänenwissen und Projektziele
                {:else if key === 'requirements'}
                  Anforderungen und User Stories
                {:else if key === 'implementation'}
                  Technische Dokumentation
                {:else if key === 'journal'}
                  Entscheidungen und Learnings
                {:else if key === 'paper'}
                  Akademische Ausarbeitung
                {/if}
              </span>
            </div>
          </div>
        {/each}
      </div>

      <div class="vault-tip">
        <h3>💡 Tipp für eigene Projekte</h3>
        <p>
          Ein minimaler Vault beginnt mit drei Dateien: <code>DATA.md</code>, <code>REQUIREMENTS.md</code>
          und <code>CONTEXT.md</code>. Das Journal (<code>JOURNAL.md</code>) wächst mit jeder Iteration.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .vault-page {
    min-height: 100dvh;
    padding: var(--space-xl) var(--space-lg);
    max-width: 1000px;
    margin: 0 auto;
  }

  .vault-content {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 12px;
    padding: var(--space-xl);
  }

  .vault-header {
    margin-bottom: var(--space-xl);
  }

  .vault-header h1 {
    font-size: 2rem;
    color: var(--color-terracotta);
    margin-bottom: var(--space-sm);
    padding-bottom: var(--space-sm);
    border-bottom: 2px solid var(--color-terracotta);
  }

  .vault-intro {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--color-black);
    margin-bottom: var(--space-md);
  }

  .meta-note {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-md);
    background: rgba(191, 91, 62, 0.1);
    border-radius: 8px;
    font-size: 0.9rem;
    color: var(--color-slate);
  }

  .meta-icon {
    font-size: 1.2rem;
  }

  .vault-container {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: var(--space-lg);
    margin-bottom: var(--space-xl);
  }

  /* File Tree */
  .file-tree {
    background: rgba(96, 125, 139, 0.05);
    border-radius: 8px;
    padding: var(--space-md);
    border: 1px solid rgba(96, 125, 139, 0.2);
  }

  .tree-header {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    padding-bottom: var(--space-sm);
    border-bottom: 1px solid rgba(96, 125, 139, 0.2);
    margin-bottom: var(--space-sm);
    font-weight: 600;
  }

  .tree-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tree-list.nested {
    padding-left: var(--space-md);
  }

  .tree-item {
    margin: 2px 0;
  }

  .tree-button {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    width: 100%;
    padding: var(--space-xs) var(--space-sm);
    background: transparent;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
    text-align: left;
    transition: background 0.15s ease;
  }

  .tree-button:hover {
    background: rgba(96, 125, 139, 0.1);
  }

  .tree-button.selected {
    background: rgba(191, 91, 62, 0.15);
  }

  .expand-icon {
    font-size: 0.7rem;
    width: 12px;
    color: var(--color-slate);
  }

  .folder-icon {
    font-size: 1rem;
  }

  .file-icon {
    font-size: 0.9rem;
  }

  .item-name {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .category-badge {
    font-size: 0.65rem;
    padding: 2px 6px;
    border-radius: 3px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* File Preview */
  .file-preview {
    background: white;
    border-radius: 8px;
    padding: var(--space-lg);
    border: 1px solid rgba(96, 125, 139, 0.2);
    min-height: 300px;
  }

  .preview-header {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    margin-bottom: var(--space-md);
  }

  .preview-header h3 {
    font-size: 1.2rem;
    color: var(--color-black);
    margin: 0;
    font-family: 'JetBrains Mono', monospace;
  }

  .category-tag {
    font-size: 0.75rem;
    padding: 4px 10px;
    border-radius: 4px;
    color: white;
  }

  .preview-description {
    color: var(--color-slate);
    line-height: 1.6;
    margin-bottom: var(--space-md);
  }

  .preview-purpose {
    background: rgba(96, 125, 139, 0.1);
    padding: var(--space-sm) var(--space-md);
    border-radius: 6px;
    margin-bottom: var(--space-md);
    font-size: 0.9rem;
  }

  .preview-highlights {
    margin-bottom: var(--space-md);
  }

  .preview-highlights ul {
    margin: var(--space-xs) 0 0 var(--space-md);
    padding-left: var(--space-sm);
  }

  .preview-highlights li {
    font-size: 0.9rem;
    color: var(--color-slate);
    margin-bottom: var(--space-xs);
  }

  .github-link {
    display: inline-block;
    color: var(--color-terracotta);
    text-decoration: none;
    font-weight: 500;
    padding: var(--space-sm) var(--space-md);
    border: 1px solid var(--color-terracotta);
    border-radius: 6px;
    transition: all 0.2s ease;
  }

  .github-link:hover {
    background: var(--color-terracotta);
    color: white;
  }

  .preview-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 250px;
    color: var(--color-slate);
    text-align: center;
  }

  .placeholder-icon {
    font-size: 2.5rem;
    margin-bottom: var(--space-sm);
    opacity: 0.5;
  }

  /* Vault Explanation */
  .vault-explanation {
    border-top: 1px solid rgba(96, 125, 139, 0.2);
    padding-top: var(--space-xl);
  }

  .vault-explanation h2 {
    font-size: 1.3rem;
    color: var(--color-slate);
    margin-bottom: var(--space-lg);
  }

  .doc-types {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: var(--space-md);
    margin-bottom: var(--space-xl);
  }

  .doc-type {
    display: flex;
    align-items: flex-start;
    gap: var(--space-sm);
    padding: var(--space-sm);
    background: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
  }

  .doc-icon {
    font-size: 1.5rem;
  }

  .doc-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .doc-info strong {
    font-size: 0.9rem;
  }

  .doc-desc {
    font-size: 0.8rem;
    color: var(--color-slate);
  }

  .vault-tip {
    background: rgba(191, 91, 62, 0.08);
    border-left: 3px solid var(--color-terracotta);
    padding: var(--space-md);
    border-radius: 0 8px 8px 0;
  }

  .vault-tip h3 {
    font-size: 1rem;
    color: var(--color-terracotta);
    margin-bottom: var(--space-sm);
  }

  .vault-tip p {
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;
  }

  .vault-tip code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85em;
    background: rgba(96, 125, 139, 0.15);
    padding: 2px 6px;
    border-radius: 4px;
  }

  @media (max-width: 767px) {
    .vault-page {
      padding: var(--space-lg) var(--space-md);
    }

    .vault-content {
      padding: var(--space-md);
    }

    .vault-header h1 {
      font-size: 1.5rem;
    }

    .vault-container {
      grid-template-columns: 1fr;
    }

    .file-tree {
      max-height: 300px;
      overflow-y: auto;
    }

    .doc-types {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
