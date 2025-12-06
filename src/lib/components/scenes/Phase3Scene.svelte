<script>
  import { phases } from '../../data/phases.js';
  import VaultIcon from '../elements/VaultIcon.svelte';
  import DocumentIcon from '../elements/DocumentIcon.svelte';

  export let progress = 0;

  const phase = phases[3];

  // Animation thresholds
  // 0-0.08: Titel erscheint
  // 0.08-0.22: Akademischer Text
  // 0.22-0.35: Drei-Spalten-Layout
  // 0.35-0.50: Partikel fließen zum Vault
  // 0.50-0.60: data.md erscheint
  // 0.60-0.72: user-story.md erscheint
  // 0.72-0.85: context.md erscheint
  // 0.85-1.0: Stapel verblasst, Vault ist Zentrum

  $: titleOpacity = Math.min(1, progress / 0.08);

  // Akademischer Text
  $: academicTextOpacity = progress > 0.08 ? Math.min(1, (progress - 0.08) / 0.14) : 0;

  // Layout visibility
  $: layoutOpacity = progress > 0.22 ? Math.min(1, (progress - 0.22) / 0.13) : 0;

  // Source stack fade
  $: stackOpacity = progress > 0.85 ? Math.max(0.2, 1 - (progress - 0.85) / 0.15) : 1;

  // Particle flow progress
  $: particleProgress = progress > 0.35 ? Math.min(1, (progress - 0.35) / 0.15) : 0;

  // Document appearances
  $: doc1Opacity = progress > 0.50 ? Math.min(1, (progress - 0.50) / 0.1) : 0;
  $: doc2Opacity = progress > 0.60 ? Math.min(1, (progress - 0.60) / 0.12) : 0;
  $: doc3Opacity = progress > 0.72 ? Math.min(1, (progress - 0.72) / 0.13) : 0;

  // Vault pulsing
  $: vaultPulsing = progress > 0.72;

  // Closing text
  $: closingOpacity = progress > 0.85 ? Math.min(1, (progress - 0.85) / 0.15) : 0;

  // Visible documents
  $: visibleDocs = [
    doc1Opacity > 0.5 ? 'data.md' : null,
    doc2Opacity > 0.5 ? 'user-story.md' : null,
    doc3Opacity > 0.5 ? 'context.md' : null,
  ].filter(Boolean);

  // Particle positions
  const particles = [
    { id: 1, startX: -250, startY: -30, delay: 0 },
    { id: 2, startX: -230, startY: 20, delay: 0.1 },
    { id: 3, startX: -260, startY: 50, delay: 0.2 },
    { id: 4, startX: 250, startY: -20, delay: 0.3 },
    { id: 5, startX: 240, startY: 40, delay: 0.4 },
  ];

  function getParticleStyle(particle) {
    const adjustedProgress = Math.max(0, particleProgress - particle.delay);
    const x = particle.startX * (1 - adjustedProgress);
    const y = particle.startY * (1 - adjustedProgress);
    const opacity = adjustedProgress > 0 ? Math.min(1, adjustedProgress * 2) : 0;
    const scale = 0.5 + adjustedProgress * 0.5;

    return `transform: translate(${x}px, ${y}px) scale(${scale}); opacity: ${opacity};`;
  }
</script>

<div class="phase3-scene">
  <header class="phase-header" style="opacity: {titleOpacity};">
    <span class="phase-number">Phase 3</span>
    <h2>{phase.title}</h2>
    <p class="metaphor">{phase.metaphor}</p>
  </header>

  <div class="academic-text" style="opacity: {academicTextOpacity};">
    <p>
      Die REQUIREMENTS-Phase formalisiert in <code>REQUIREMENTS.md</code> vage
      Forschungsideen in testbare Spezifikationen. Die Unterscheidung zwischen
      <strong>MUSS</strong>, <strong>SOLL</strong> und <strong>KANN</strong> Anforderungen
      zwingt zur Priorisierung.
    </p>
    <p class="highlight">
      Trade-offs zwischen technischer Machbarkeit und wissenschaftlichem Anspruch
      werden explizit dokumentiert. Context Compression reduziert Tokens bei
      maximaler Informationsdichte.
    </p>
  </div>

  <div class="destillation-area" style="opacity: {layoutOpacity};">
    <!-- Left: Source stack -->
    <div class="source-stack" style="opacity: {stackOpacity};">
      <div class="stack-label">Rohmaterial</div>
      <div class="stack">
        <div class="stack-item" style="transform: rotate(-3deg) translateY(0);">
          <DocumentIcon type="xml" size={40} />
        </div>
        <div class="stack-item" style="transform: rotate(2deg) translateY(-8px);">
          <DocumentIcon type="pdf" size={40} />
        </div>
        <div class="stack-item" style="transform: rotate(-1deg) translateY(-16px);">
          <DocumentIcon type="notes" size={40} />
        </div>
      </div>
    </div>

    <!-- Center: Vault with particles -->
    <div class="vault-area">
      <!-- Particles -->
      {#each particles as particle}
        <div class="particle" style={getParticleStyle(particle)}>
          <div class="particle-dot"></div>
        </div>
      {/each}

      <!-- Vault -->
      <VaultIcon
        size={140}
        pulsing={vaultPulsing}
        documents={visibleDocs}
      />
    </div>

    <!-- Right: Interface sketches (fading) -->
    <div class="sketches-stack" style="opacity: {stackOpacity};">
      <div class="stack-label">Ideen</div>
      <div class="sketch-items">
        <div class="sketch-item">Timeline</div>
        <div class="sketch-item">Netzwerk</div>
        <div class="sketch-item">Karte</div>
      </div>
    </div>
  </div>

  <!-- Closing text -->
  <p class="closing-text" style="opacity: {closingOpacity};">
    {phase.closingText}
  </p>
</div>

<style>
  .phase3-scene {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-lg);
    padding: var(--space-lg);
  }

  .phase-header {
    text-align: center;
  }

  .phase-number {
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

  .metaphor {
    font-style: italic;
    color: var(--color-slate);
  }

  .academic-text {
    max-width: 650px;
    text-align: center;
    line-height: 1.7;
  }

  .academic-text p {
    font-size: clamp(0.9rem, 1.6vw, 1.05rem);
    color: var(--color-slate);
    margin-bottom: var(--space-sm);
  }

  .academic-text code {
    background: rgba(96, 125, 139, 0.1);
    padding: 0.15em 0.4em;
    border-radius: 4px;
    font-size: 0.9em;
  }

  .academic-text strong {
    color: var(--color-terracotta);
    font-weight: 600;
  }

  .academic-text .highlight {
    color: var(--color-black);
    font-weight: 500;
  }

  .destillation-area {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-xl);
    width: 100%;
    max-width: 900px;
    min-height: 280px;
  }

  /* Source stack */
  .source-stack, .sketches-stack {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    min-width: 100px;
  }

  .stack-label {
    font-size: 0.75rem;
    color: var(--color-slate);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .stack {
    position: relative;
    height: 80px;
    width: 60px;
  }

  .stack-item {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  /* Sketches */
  .sketch-items {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  .sketch-item {
    font-size: 0.7rem;
    color: var(--color-slate);
    padding: var(--space-xs) var(--space-sm);
    border: 1px dashed var(--color-slate);
    border-radius: 4px;
    opacity: 0.6;
  }

  /* Vault area */
  .vault-area {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 200px;
    min-height: 200px;
  }

  /* Particles */
  .particle {
    position: absolute;
    pointer-events: none;
  }

  .particle-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color-terracotta);
  }

  /* Closing text */
  .closing-text {
    font-size: 1.125rem;
    color: var(--color-terracotta);
    font-weight: 500;
    text-align: center;
    max-width: 400px;
  }

  @media (max-width: 767px) {
    .destillation-area {
      flex-direction: column;
      gap: var(--space-lg);
    }

    .source-stack, .sketches-stack {
      flex-direction: row;
      gap: var(--space-md);
    }

    .stack {
      width: 50px;
      height: 70px;
    }
  }
</style>
