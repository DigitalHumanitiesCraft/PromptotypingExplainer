<script>
  import { fade, fly } from 'svelte/transition';

  const examples = [
    {
      name: 'CorrespExplorer',
      description: 'CMIF-Korrespondenzdaten → Netzwerk, Timeline, Karte',
      time: '2 Nachmittage',
      link: 'https://dhcraft.org/CorrespExplorer',
    },
    {
      name: 'Lucina Digital Edition',
      description: 'Neulateinische Gedichte → TEI-Edition',
      time: '25 h',
      link: 'https://chpollin.github.io/diged-neolat/edition-5/web/',
    },
    {
      name: 'REALonline Inventare',
      description: 'Mittelalterliche Rauminventare → Dashboard',
      time: '5 h',
      link: 'https://chpollin.github.io/imareal-room-object/',
    },
    {
      name: 'Stefan Zweig Digital',
      description: 'GAMS-Metadaten → Timeline-Tool',
      time: '2 h',
      link: 'https://dhcraft.org/excellence/promptotyping/szd-annotation-timeline/',
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
          <span class="time">
            <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM7 3v5.5l4 2.5.5-.87-3.5-2.13V3H7z"/>
            </svg>
            {example.time}
          </span>
          <span class="link-arrow">→</span>
        </div>
      </a>
    {/each}
  </div>

  <p class="insight" in:fade={{ delay: 800, duration: 400 }}>
    Von <strong>2 Stunden</strong> bis <strong>25 Stunden</strong> - je nach Komplexität
  </p>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--space-xs);
    padding-top: var(--space-xs);
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }

  .time {
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--color-black);
    font-weight: 600;
    font-size: 0.8rem;
  }

  .time svg {
    opacity: 0.6;
  }

  .link-arrow {
    color: var(--color-terracotta);
    font-size: 1.1rem;
    opacity: 0.6;
    transition: opacity 0.2s, transform 0.2s;
  }

  .example-card:hover .link-arrow {
    opacity: 1;
    transform: translateX(3px);
  }

  .insight {
    color: var(--color-slate);
    font-size: clamp(0.9rem, 1.6vw, 1rem);
    margin: 0;
  }

  .insight strong {
    color: var(--color-terracotta);
  }

  @media (max-width: 767px) {
    .examples-grid {
      grid-template-columns: 1fr;
      max-width: 320px;
    }
  }
</style>
