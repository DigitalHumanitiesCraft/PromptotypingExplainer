<script>
  import { fly } from 'svelte/transition';
  import { caseStudies } from '../../../data/case-studies.js';
  import DeepDiveTrigger from '../../elements/DeepDiveTrigger.svelte';

  // Map case study IDs to deep dive IDs
  const deepDiveMap = {
    'correspexplorer': 'case-correspexplorer',
    'lucina': 'case-lucina',
    'kriminalmuseum': 'case-kriminalmuseum',
    'cvma-glasmalerei': 'case-cvma',
    'aldersbach': 'case-aldersbach',
    'szd-annotation': 'case-szd'
  };
</script>

<div class="outro-beispiele">
  <header class="scene-header" in:fly={{ y: -20, duration: 500 }}>
    <span class="section-label">Praxis</span>
    <h2>Case Studies</h2>
  </header>

  <div class="intro-text" in:fly={{ y: 20, duration: 400, delay: 100 }}>
    <p>
      Die folgenden Fallstudien dokumentieren die Anwendung von Promptotyping in verschiedenen
      DH-Kontexten. Jedes Projekt wurde mit einem LLM als Entwicklungspartner umgesetzt und
      demonstriert unterschiedliche Aspekte der Methodik: von der Netzwerkvisualisierung über
      Bildanalyse bis zur Annotationsunterstützung. Die Projekte sind als Open Source verfügbar
      und können als Ausgangspunkt für eigene Entwicklungen dienen.
    </p>
  </div>

  <div class="examples-grid">
    {#each caseStudies as study, i}
      <a
        href={study.link}
        target="_blank"
        rel="noopener"
        class="example-card"
        in:fly={{ y: 30, duration: 400, delay: 200 + i * 100 }}
      >
        <div class="card-thumbnail">
          <img
            src={study.thumbnail}
            alt="{study.name} Screenshot"
            loading="lazy"
          />
          <span class="type-badge">{study.type}</span>
          <span class="date-badge">{study.date}</span>
          {#if study.hasBlog}
            <span class="blog-badge">Blog</span>
          {/if}
        </div>
        <div class="card-content">
          <h3>{study.name}</h3>
          <p class="abstract">{study.abstract}</p>
          <span class="data-format">{study.dataFormat}</span>
        </div>

      </a>
    {/each}
  </div>

  <div class="deep-dive-triggers" in:fly={{ y: 20, duration: 400, delay: 800 }}>
    {#each caseStudies as study}
      <DeepDiveTrigger
        label={study.name}
        deepDiveId={deepDiveMap[study.id]}
      />
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

  .intro-text {
    max-width: 750px;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    margin-bottom: var(--space-md);
  }

  .intro-text p {
    font-size: clamp(0.9rem, 1.6vw, 1rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: left;
    margin: 0;
  }

  .examples-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
    width: 100%;
    max-width: 800px;
  }

  .example-card {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    position: relative;
    overflow: hidden;
  }

  .card-thumbnail {
    position: relative;
    width: 100%;
    height: 160px;
    overflow: hidden;
    background: linear-gradient(135deg, rgba(96, 125, 139, 0.1) 0%, rgba(191, 91, 62, 0.05) 100%);
  }

  .card-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.3s ease;
  }

  .example-card:hover .card-thumbnail img {
    transform: scale(1.05);
  }

  .card-thumbnail .type-badge {
    position: absolute;
    top: var(--space-xs);
    left: var(--space-xs);
  }

  .date-badge {
    position: absolute;
    top: var(--space-xs);
    right: var(--space-xs);
    font-size: 0.55rem;
    font-weight: 500;
    padding: 2px 6px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    border-radius: 3px;
    font-family: var(--font-mono);
  }

  .blog-badge {
    position: absolute;
    bottom: var(--space-xs);
    right: var(--space-xs);
    font-size: 0.55rem;
    font-weight: 600;
    padding: 2px 6px;
    background: var(--color-slate);
    color: white;
    border-radius: 3px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Subtiler Glow-Effekt bei Hover */
  .example-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 50% 100%,
      rgba(191, 91, 62, 0.08) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .example-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    border-color: var(--color-terracotta);
  }

  .example-card:hover::before {
    opacity: 1;
  }

  .card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding: var(--space-md);
    padding-top: var(--space-sm);
  }

  .type-badge {
    font-size: 0.6rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 2px 8px;
    background: var(--color-terracotta);
    color: white;
    border-radius: 3px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .example-card h3 {
    color: var(--color-black);
    font-size: 0.95rem;
    margin: 0;
    text-align: left;
  }

  .abstract {
    color: var(--color-slate);
    font-size: 0.8rem;
    margin: 0;
    text-align: left;
    line-height: 1.5;
  }

  /* Datenformat-Badge */
  .data-format {
    align-self: flex-start;
    font-family: var(--font-mono);
    font-size: 0.6rem;
    padding: 2px 6px;
    background: rgba(96, 125, 139, 0.1);
    border-radius: 3px;
    color: var(--color-slate);
    margin-top: auto;
  }


  .deep-dive-triggers {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: var(--space-sm);
    justify-content: center;
    margin-top: var(--space-md);
  }

  @media (max-width: 700px) {
    .examples-grid {
      grid-template-columns: 1fr;
      max-width: 380px;
    }

    .deep-dive-triggers {
      grid-template-columns: repeat(2, auto);
    }
  }
</style>
