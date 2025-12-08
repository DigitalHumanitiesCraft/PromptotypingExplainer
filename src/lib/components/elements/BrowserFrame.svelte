<script>
  export let state = 'empty'; // empty, code, wireframe, network, success, error, markdown
  export let showSpinner = false;
  export let filename = 'localhost:3000'; // Custom filename for URL bar
  export let content = ''; // Custom content for markdown state
</script>

<div class="browser-frame" class:success={state === 'success'} class:error={state === 'error'}>
  <div class="browser-chrome">
    <div class="dots">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
    </div>
    <div class="url-bar">{filename}</div>
  </div>

  <div class="browser-content">
    {#if showSpinner}
      <div class="spinner"></div>
    {:else if state === 'empty'}
      <div class="empty-state">
        <span class="cursor">|</span>
      </div>
    {:else if state === 'code'}
      <div class="code-view">
        <div class="code-line"><span class="keyword">function</span> <span class="fn">loadData</span>() {'{'}</div>
        <div class="code-line indent"><span class="keyword">const</span> xml = <span class="fn">fetch</span>(<span class="string">'data.xml'</span>);</div>
        <div class="code-line indent"><span class="keyword">return</span> <span class="fn">parse</span>(xml);</div>
        <div class="code-line">{'}'}</div>
      </div>
    {:else if state === 'wireframe'}
      <div class="wireframe-view">
        <div class="wf-header"></div>
        <div class="wf-sidebar"></div>
        <div class="wf-main">
          <div class="wf-box"></div>
          <div class="wf-box"></div>
        </div>
      </div>
    {:else if state === 'network'}
      <div class="network-view">
        <svg viewBox="0 0 200 120">
          <!-- Network nodes -->
          <circle cx="50" cy="40" r="15" fill="var(--color-terracotta)" />
          <circle cx="150" cy="40" r="12" fill="var(--color-terracotta)" opacity="0.8" />
          <circle cx="100" cy="90" r="10" fill="var(--color-terracotta)" opacity="0.6" />
          <circle cx="40" cy="100" r="8" fill="var(--color-slate)" opacity="0.5" />
          <circle cx="160" cy="95" r="8" fill="var(--color-slate)" opacity="0.5" />
          <!-- Edges -->
          <line x1="50" y1="40" x2="150" y2="40" stroke="var(--color-slate)" stroke-width="1" opacity="0.4" />
          <line x1="50" y1="40" x2="100" y2="90" stroke="var(--color-slate)" stroke-width="1" opacity="0.4" />
          <line x1="150" y1="40" x2="100" y2="90" stroke="var(--color-slate)" stroke-width="1" opacity="0.4" />
          <line x1="100" y1="90" x2="40" y2="100" stroke="var(--color-slate)" stroke-width="1" opacity="0.3" />
          <line x1="100" y1="90" x2="160" y2="95" stroke="var(--color-slate)" stroke-width="1" opacity="0.3" />
        </svg>
      </div>
    {:else if state === 'success'}
      <div class="status-view success">
        <span class="status-icon">✓</span>
        <span class="status-text">Tests bestanden</span>
      </div>
    {:else if state === 'error'}
      <div class="status-view error">
        <span class="status-icon">✕</span>
        <span class="status-text">Test fehlgeschlagen</span>
      </div>
    {:else if state === 'markdown'}
      <div class="markdown-view">
        <pre>{content}</pre>
      </div>
    {/if}
  </div>
</div>

<style>
  .browser-frame {
    width: 100%;
    max-width: 380px;
    border: 2px solid var(--color-slate);
    border-radius: 8px;
    overflow: hidden;
    background: var(--color-white);
  }

  .browser-frame.success {
    border-color: var(--color-success);
  }

  .browser-frame.error {
    border-color: var(--color-error);
  }

  .browser-chrome {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-xs) var(--space-sm);
    background: var(--color-code-bg);
    border-bottom: 1px solid var(--color-slate);
  }

  .dots {
    display: flex;
    gap: 4px;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .dot.red { background: var(--color-error); }
  .dot.yellow { background: var(--color-progress); }
  .dot.green { background: var(--color-success); }

  .url-bar {
    flex: 1;
    font-size: 0.6rem;
    color: var(--color-slate);
    font-family: var(--font-mono);
  }

  .browser-content {
    min-height: 120px;
    padding: var(--space-sm);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Empty state */
  .empty-state {
    color: var(--color-slate);
    font-family: var(--font-mono);
  }

  .cursor {
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  /* Spinner */
  .spinner {
    width: 24px;
    height: 24px;
    border: 3px solid var(--color-slate);
    border-top-color: var(--color-progress);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Code view */
  .code-view {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    line-height: 1.5;
    text-align: left;
    width: 100%;
  }

  .code-line.indent {
    padding-left: var(--space-md);
  }

  .keyword { color: var(--color-code-keyword); }
  .fn { color: var(--color-code-function); }
  .string { color: var(--color-code-string); }

  /* Wireframe view */
  .wireframe-view {
    display: grid;
    grid-template-columns: 40px 1fr;
    grid-template-rows: 20px 1fr;
    gap: 4px;
    width: 100%;
    height: 100px;
  }

  .wf-header {
    grid-column: 1 / -1;
    background: var(--color-slate);
    opacity: 0.3;
    border-radius: 2px;
  }

  .wf-sidebar {
    background: var(--color-slate);
    opacity: 0.2;
    border-radius: 2px;
  }

  .wf-main {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .wf-box {
    flex: 1;
    background: var(--color-slate);
    opacity: 0.15;
    border-radius: 2px;
  }

  /* Network view */
  .network-view {
    width: 100%;
  }

  .network-view svg {
    width: 100%;
    height: auto;
  }

  /* Status view */
  .status-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
  }

  .status-icon {
    font-size: 2rem;
    font-weight: bold;
  }

  .status-view.success .status-icon { color: var(--color-success); }
  .status-view.error .status-icon { color: var(--color-error); }

  .status-text {
    font-size: 0.75rem;
    color: var(--color-slate);
  }

  /* Markdown view */
  .markdown-view {
    width: 100%;
    height: 100%;
    overflow: auto;
    text-align: left;
  }

  .markdown-view pre {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    line-height: 1.5;
    color: var(--color-black);
    white-space: pre-wrap;
    word-wrap: break-word;
    margin: 0;
  }
</style>
