<script>
  export let currentPage = '';
  export let pageTitle = '';

  const basePath = '/PromptotypingExplainer';

  const navItems = [
    { id: 'about', label: 'About', href: `${basePath}/about.html` },
    { id: 'vault', label: 'Vault', href: `${basePath}/vault.html` },
    { id: 'glossar', label: 'Glossar', href: `${basePath}/glossar.html` },
    { id: 'bibliographie', label: 'Bibliographie', href: `${basePath}/bibliographie.html` },
  ];
</script>

<div class="page-layout">
  <header class="phase-header">
    <div class="header-content">
      <!-- Back to main page with title -->
      <a href="{basePath}/" class="back-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span class="site-title">Promptotyping</span>
      </a>

      <!-- Current page title -->
      <div class="title-group">
        <span class="step-separator">—</span>
        <span class="current-page">{pageTitle}</span>
      </div>

      <!-- Navigation Links -->
      <nav class="header-nav">
        {#each navItems as item}
          <a
            href={item.href}
            class="nav-link"
            class:active={currentPage === item.id}
          >
            {item.label}
          </a>
        {/each}
      </nav>
    </div>
  </header>

  <main class="page-content">
    <slot />
  </main>
</div>

<style>
  .page-layout {
    min-height: 100dvh;
    background: linear-gradient(135deg, rgba(96, 125, 139, 0.05) 0%, rgba(232, 232, 232, 1) 50%);
  }

  .phase-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 90;
    background: rgba(232, 232, 232, 0.95);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(96, 125, 139, 0.1);
  }

  .header-content {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-sm) var(--space-lg);
    max-width: 1200px;
    margin: 0 auto;
  }

  .back-link {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    color: var(--color-black);
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: color 0.2s ease;
    flex-shrink: 0;
  }

  .back-link:hover {
    color: var(--color-terracotta);
  }

  .back-link svg {
    width: 16px;
    height: 16px;
    color: var(--color-slate);
  }

  .site-title {
    font-size: 1rem;
    font-weight: 600;
  }

  .title-group {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    flex-grow: 1;
  }

  .step-separator {
    color: var(--color-slate);
    opacity: 0.5;
  }

  .current-page {
    font-size: 0.9rem;
    color: var(--color-terracotta);
    font-weight: 500;
  }

  .header-nav {
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }

  .nav-link {
    font-size: 0.8rem;
    color: var(--color-slate);
    text-decoration: none;
    padding: 4px 12px;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .nav-link:hover {
    color: var(--color-terracotta);
    background: rgba(191, 91, 62, 0.1);
  }

  .nav-link.active {
    color: var(--color-terracotta);
    background: rgba(191, 91, 62, 0.12);
  }

  .page-content {
    max-width: 1000px;
    margin: 0 auto;
    padding: var(--space-xl);
    padding-top: calc(50px + var(--space-xl));
  }

  @media (max-width: 767px) {
    .header-content {
      padding: var(--space-xs) var(--space-md);
    }

    .site-title {
      font-size: 0.9rem;
    }

    .current-page {
      font-size: 0.8rem;
    }

    .header-nav {
      display: none;
    }

    .page-content {
      padding: var(--space-md);
      padding-top: calc(50px + var(--space-md));
    }
  }
</style>
