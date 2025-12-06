<script>
  export let size = 120;
  export let pulsing = false;
  export let documents = [];
</script>

<div
  class="vault-icon"
  class:pulsing
  style="width: {size}px; height: {size}px;"
  role="img"
  aria-label="Knowledge Vault"
>
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Folder base -->
    <path
      d="M10 25 L10 85 L90 85 L90 30 L50 30 L45 25 Z"
      fill="var(--color-white)"
      stroke="var(--color-slate)"
      stroke-width="2"
    />
    <!-- Folder tab -->
    <path
      d="M10 25 L45 25 L50 30 L50 30 L10 30 Z"
      fill="var(--color-slate)"
      opacity="0.2"
    />
    <!-- Graph nodes inside -->
    <circle cx="35" cy="55" r="6" fill="var(--color-terracotta)" opacity="0.8" />
    <circle cx="65" cy="50" r="6" fill="var(--color-terracotta)" opacity="0.8" />
    <circle cx="50" cy="70" r="6" fill="var(--color-terracotta)" opacity="0.8" />
    <!-- Graph edges -->
    <line x1="35" y1="55" x2="65" y2="50" stroke="var(--color-slate)" stroke-width="1" opacity="0.5" />
    <line x1="35" y1="55" x2="50" y2="70" stroke="var(--color-slate)" stroke-width="1" opacity="0.5" />
    <line x1="65" y1="50" x2="50" y2="70" stroke="var(--color-slate)" stroke-width="1" opacity="0.5" />
  </svg>

  <!-- Document labels -->
  {#if documents.length > 0}
    <div class="documents">
      {#each documents as doc, i}
        <div
          class="doc-label"
          style="animation-delay: {i * 0.15}s;"
        >
          {doc}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .vault-icon {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  svg {
    width: 100%;
    height: auto;
  }

  .vault-icon.pulsing svg {
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      filter: drop-shadow(0 0 0 rgba(191, 91, 62, 0));
    }
    50% {
      filter: drop-shadow(0 0 12px rgba(191, 91, 62, 0.4));
    }
  }

  .documents {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: var(--space-xs);
  }

  .doc-label {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--color-slate);
    background: var(--color-white);
    padding: 2px 6px;
    border-radius: 2px;
    border: 1px solid var(--color-slate);
  }

  .vault-icon.pulsing .doc-label {
    animation: fadeIn 0.5s ease-out forwards;
    opacity: 0;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
</style>
