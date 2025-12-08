<script>
  export let filename = 'file.md';
  export let content = '';
  export let maxHeight = '320px';
</script>

<div class="code-preview">
  <div class="file-header">
    <div class="file-icon">
      <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14">
        <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"/>
      </svg>
    </div>
    <span class="file-name">{filename}</span>
  </div>

  <div class="code-content" style="max-height: {maxHeight}">
    <pre><code>{content}</code></pre>
  </div>
</div>

<style>
  .code-preview {
    width: 100%;
    max-width: 420px;
    border-radius: 8px;
    overflow: hidden;
    background: #1e1e1e;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }

  .file-header {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-md);
    background: #2d2d2d;
    border-bottom: 1px solid #3d3d3d;
  }

  .file-icon {
    color: var(--color-terracotta);
    display: flex;
    align-items: center;
  }

  .file-name {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.8);
  }

  .code-content {
    padding: var(--space-md);
    overflow-y: auto;
  }

  .code-content pre {
    margin: 0;
  }

  .code-content code {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    line-height: 1.6;
    color: #d4d4d4;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  /* Scrollbar styling */
  .code-content::-webkit-scrollbar {
    width: 6px;
  }

  .code-content::-webkit-scrollbar-track {
    background: #2d2d2d;
  }

  .code-content::-webkit-scrollbar-thumb {
    background: #4d4d4d;
    border-radius: 3px;
  }

  .code-content::-webkit-scrollbar-thumb:hover {
    background: #5d5d5d;
  }
</style>
