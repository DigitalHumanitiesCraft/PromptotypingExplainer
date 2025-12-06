<script>
  import correspOverview from '../../../assets/images/correspexplorer/overview.png';

  export let progress = 0;

  // Animation thresholds
  // 0-0.10: Titel erscheint
  // 0.10-0.25: Akademische Konklusion
  // 0.25-0.40: Screenshot
  // 0.40-0.60: Beispiel-Karten
  // 0.60-0.78: Kernprinzip
  // 0.78-0.90: Imperative
  // 0.90-1.0: Call to Action

  $: titleOpacity = Math.min(1, progress / 0.10);

  $: conclusionOpacity = progress > 0.10 ? Math.min(1, (progress - 0.10) / 0.15) : 0;

  $: screenshotOpacity = progress > 0.25 ? Math.min(1, (progress - 0.25) / 0.15) : 0;

  $: examplesOpacity = progress > 0.40 ? Math.min(1, (progress - 0.40) / 0.20) : 0;

  $: principleOpacity = progress > 0.60 ? Math.min(1, (progress - 0.60) / 0.18) : 0;

  $: imperativesOpacity = progress > 0.78 ? Math.min(1, (progress - 0.78) / 0.12) : 0;

  $: ctaOpacity = progress > 0.90 ? Math.min(1, (progress - 0.90) / 0.10) : 0;

  const examples = [
    {
      name: 'CorrespExplorer',
      description: 'CMIF-Korrespondenzdaten → Netzwerk, Timeline, Karte',
      time: '2 Nachmittage',
      link: 'https://dhcraft.org/CorrespExplorer',
      github: 'https://github.com/DigitalHumanitiesCraft/CorrespExplorer',
    },
    {
      name: 'Lucina Digital Edition',
      description: 'Neulateinische Gedichte → TEI-Edition mit Prosopographie',
      time: '25 h (5 Iterationen)',
      link: 'https://chpollin.github.io/diged-neolat/edition-5/web/',
      github: 'https://github.com/chpollin/diged-neolat',
    },
    {
      name: 'Kriminalmuseum',
      description: 'TEI/LIDO-Archiv → Canvas-basierte Exploration',
      time: '10 h',
      link: 'https://chpollin.github.io/km/collection-explorer.html',
      github: 'https://github.com/chpollin/km',
    },
    {
      name: 'CVMA Glasfenster',
      description: 'NFDI4Culture KG → Annotations-Tool',
      time: '8 h',
      link: 'https://chpollin.github.io/stained-glass-metadata-annotation-tool/docs/version-2/',
      github: 'https://github.com/chpollin/stained-glass-metadata-annotation-tool',
    },
    {
      name: 'REALonline Inventare',
      description: 'Mittelalterliche Rauminventare → Dashboard',
      time: '5 h',
      link: 'https://chpollin.github.io/imareal-room-object/',
      github: 'https://github.com/chpollin/imareal-room-object',
    },
    {
      name: 'Stefan Zweig Digital',
      description: 'GAMS-Metadaten → Timeline-Annotationstool',
      time: '2 h',
      link: 'https://dhcraft.org/excellence/promptotyping/szd-annotation-timeline/',
      github: 'https://github.com/DigitalHumanitiesCraft/excellence',
    },
  ];
</script>

<div class="outro-scene">
  <header class="outro-header" style="opacity: {titleOpacity};">
    <h2>Konklusion</h2>
    <p class="lead">Von der Methode zur Praxis</p>
  </header>

  <div class="academic-conclusion" style="opacity: {conclusionOpacity};">
    <p>
      Promptotyping markiert einen signifikanten Fortschritt in der methodisch kontrollierten
      Integration generativer KI in die geisteswissenschaftliche Forschung. Die Methode überwindet
      die Dichotomie zwischen unkritischer Technikbegeisterung und reflexhafter Technologieablehnung
      durch einen dritten Weg: die <strong>kritisch-reflexive Appropriation</strong> von KI-Technologien
      unter Beibehaltung wissenschaftlicher Standards.
    </p>
  </div>

  <div class="screenshot-container" style="opacity: {screenshotOpacity};">
    <img src={correspOverview} alt="CorrespExplorer - Vier Views: Karte, Timeline, Themen, Korrespondenten" class="screenshot" />
    <p class="screenshot-caption">CorrespExplorer: 11.576 Briefe visualisiert in 2 Nachmittagen</p>
  </div>

  <div class="examples-grid" style="opacity: {examplesOpacity};">
    {#each examples as example}
      <div class="example-card">
        <h3>{example.name}</h3>
        <p class="description">{example.description}</p>
        <p class="time">
          <span class="time-icon">⏱</span>
          {example.time}
        </p>
        {#if example.link}
          <div class="links">
            <a href={example.link} target="_blank" rel="noopener" class="link-btn primary">
              Live Demo
            </a>
            {#if example.github}
              <a href={example.github} target="_blank" rel="noopener" class="link-btn secondary">
                GitHub
              </a>
            {/if}
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <div class="principle" style="opacity: {principleOpacity};">
    <blockquote>
      „Das Mapping von semantisch reichhaltigen Forschungsdaten und explizitem
      Forschungskontext auf funktionale Interfaces durch iterative
      Mensch-LLM-Kollaboration."
    </blockquote>
  </div>

  <div class="imperatives" style="opacity: {imperativesOpacity};">
    <div class="imperative">
      <h4>Epistemische Wachsamkeit</h4>
      <p>Jede LLM-Nutzung reflektiert ihre erkenntnistheoretischen Implikationen.</p>
    </div>
    <div class="imperative">
      <h4>Methodische Transparenz</h4>
      <p>Nachvollziehbare Dokumentation von Prozessen und Entscheidungen.</p>
    </div>
    <div class="imperative">
      <h4>Kritische Solidarität</h4>
      <p>Die Community teilt Erfahrungen und entwickelt gemeinsam Standards.</p>
    </div>
  </div>

  <div class="cta" style="opacity: {ctaOpacity};">
    <p class="final-text">Vom Wissen zum Werkzeug.</p>
    <a
      href="https://github.com/DigitalHumanitiesCraft/CorrespExplorer"
      target="_blank"
      rel="noopener"
      class="cta-btn"
    >
      CorrespExplorer auf GitHub erkunden
    </a>
  </div>
</div>

<style>
  .outro-scene {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-xl);
    padding: var(--space-lg);
  }

  .outro-header {
    text-align: center;
  }

  h2 {
    color: var(--color-black);
    margin-bottom: var(--space-sm);
  }

  .lead {
    color: var(--color-slate);
    font-size: 1.125rem;
  }

  /* Academic conclusion */
  .academic-conclusion {
    max-width: 750px;
    text-align: center;
  }

  .academic-conclusion p {
    font-size: clamp(0.95rem, 1.6vw, 1.1rem);
    color: var(--color-slate);
    line-height: 1.7;
  }

  .academic-conclusion strong {
    color: var(--color-terracotta);
  }

  /* Screenshot */
  .screenshot-container {
    text-align: center;
    max-width: 800px;
    width: 100%;
  }

  .screenshot {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }

  .screenshot-caption {
    margin-top: var(--space-sm);
    font-size: 0.875rem;
    color: var(--color-slate);
    font-style: italic;
  }

  /* Examples Grid */
  .examples-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-lg);
    width: 100%;
    max-width: 900px;
  }

  .example-card {
    background: var(--color-white);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: var(--space-lg);
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .example-card h3 {
    color: var(--color-terracotta);
    font-size: 1.25rem;
  }

  .description {
    color: var(--color-slate);
    font-size: 0.9rem;
    flex: 1;
  }

  .time {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    color: var(--color-black);
    font-weight: 600;
    font-size: 0.875rem;
  }

  .time-icon {
    font-size: 1rem;
  }

  .links {
    display: flex;
    gap: var(--space-sm);
    margin-top: var(--space-sm);
  }

  .link-btn {
    padding: var(--space-xs) var(--space-md);
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;
    text-decoration: none;
    transition: opacity 0.2s;
  }

  .link-btn:hover {
    opacity: 0.8;
  }

  .link-btn.primary {
    background: var(--color-terracotta);
    color: var(--color-white);
  }

  .link-btn.secondary {
    background: var(--color-slate);
    color: var(--color-white);
  }

  /* Principle */
  .principle {
    max-width: 700px;
    text-align: center;
  }

  blockquote {
    font-size: 1.125rem;
    color: var(--color-slate);
    font-style: italic;
    line-height: 1.6;
    border-left: 3px solid var(--color-terracotta);
    padding-left: var(--space-md);
    margin: 0;
    text-align: left;
  }

  /* Imperatives */
  .imperatives {
    display: flex;
    gap: var(--space-lg);
    max-width: 900px;
    width: 100%;
  }

  .imperative {
    flex: 1;
    text-align: center;
    padding: var(--space-md);
    background: rgba(96, 125, 139, 0.05);
    border-radius: 8px;
    border-top: 3px solid var(--color-terracotta);
  }

  .imperative h4 {
    font-size: 0.9rem;
    color: var(--color-terracotta);
    margin-bottom: var(--space-xs);
  }

  .imperative p {
    font-size: 0.85rem;
    color: var(--color-slate);
    line-height: 1.5;
    margin: 0;
  }

  /* CTA */
  .cta {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);
  }

  .final-text {
    font-size: 1.5rem;
    color: var(--color-terracotta);
    font-weight: 600;
  }

  .cta-btn {
    display: inline-block;
    padding: var(--space-sm) var(--space-lg);
    background: var(--color-terracotta);
    color: var(--color-white);
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(191, 91, 62, 0.3);
  }

  @media (max-width: 767px) {
    .examples-grid {
      grid-template-columns: 1fr;
    }

    blockquote {
      font-size: 1rem;
    }

    .imperatives {
      flex-direction: column;
      gap: var(--space-md);
    }
  }
</style>
