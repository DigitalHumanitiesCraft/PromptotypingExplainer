<script>
  import { fade, fly } from 'svelte/transition';

  const examples = [
    {
      name: 'CorrespExplorer',
      description: 'CMIF-Korrespondenzdaten → Netzwerk, Timeline, Karte',
      link: 'https://dhcraft.org/CorrespExplorer',
    },
    {
      name: 'Kriminalmuseum',
      description: 'Sammlungsdaten → Dual-Interface Explorer',
      link: 'https://chpollin.github.io/km/collection-explorer.html',
    },
    {
      name: 'CVMA Glasmalerei',
      description: 'Glasfenster-Metadaten → Annotations-Viewer',
      link: 'https://chpollin.github.io/stained-glass-metadata-annotation-tool/docs/version-2/',
    },
    {
      name: 'Aldersbach',
      description: 'TEI-Klosterrechnungen → Annotations-Tool',
      link: 'https://chpollin.github.io/depcha-aldersbach',
    },
  ];
</script>

<div class="outro-beispiele">
  <header class="scene-header" in:fly={{ y: -20, duration: 500 }}>
    <span class="section-label">Praxis</span>
    <h2>Case Studies</h2>
    <p class="subtitle">Promptotyping in Aktion</p>
  </header>

  <div class="examples-grid">
    {#each examples as example, i}
      <a
        href={example.link}
        target="_blank"
        rel="noopener"
        class="example-card"
        in:fly={{ y: 30, duration: 400, delay: 200 + i * 100 }}
      >
        <h3>{example.name}</h3>
        <p class="description">{example.description}</p>
        <div class="card-footer">
          <span class="link-arrow">Demo ansehen →</span>
        </div>
      </a>
    {/each}
  </div>

  </div>

<style>
  .outro-beispiele {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xl);
    text-align: center;
  }

  .scene-header {
    text-align: center;
  }

  .section-label {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-terracotta);
    font-weight: 600;
  }

  h2 {
    color: var(--color-black);
    margin: var(--space-xs) 0;
  }

  .subtitle {
    color: var(--color-slate);
    margin: 0;
  }

  .examples-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-md);
    width: 100%;
    max-width: 600px;
  }

  .example-card {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    padding: var(--space-md);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }

  .example-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    border-color: var(--color-terracotta);
  }

  .example-card h3 {
    color: var(--color-terracotta);
    font-size: 1rem;
    margin: 0;
    text-align: left;
  }

  .description {
    color: var(--color-slate);
    font-size: 0.8rem;
    margin: 0;
    text-align: left;
    flex: 1;
    line-height: 1.4;
  }

  .card-footer {
    margin-top: var(--space-xs);
    padding-top: var(--space-xs);
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }

  .link-arrow {
    color: var(--color-terracotta);
    font-size: 0.8rem;
    font-weight: 500;
    opacity: 0.8;
    transition: opacity 0.2s;
  }

  .example-card:hover .link-arrow {
    opacity: 1;
  }

  @media (max-width: 767px) {
    .examples-grid {
      grid-template-columns: 1fr;
      max-width: 320px;
    }
  }
</style>
