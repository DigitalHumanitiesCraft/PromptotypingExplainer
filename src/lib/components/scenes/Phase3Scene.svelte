<script>
  import { phases } from '../../data/phases.js';
  import VaultIcon from '../elements/VaultIcon.svelte';
  import DocumentIcon from '../elements/DocumentIcon.svelte';
  import GlossaryTerm from '../GlossaryTerm.svelte';
  import SceneHeader from '../blocks/SceneHeader.svelte';
  import AcademicBlock from '../blocks/AcademicBlock.svelte';
  import { fadeIn, fadeOut } from '../../utils/progressAnimations.js';

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

  $: titleOpacity = fadeIn(progress, 0, 0.08);
  $: academicTextOpacity = fadeIn(progress, 0.08, 0.22);
  $: layoutOpacity = fadeIn(progress, 0.22, 0.35);
  $: stackOpacity = fadeOut(progress, 0.85, 1.0, 0.2);
  $: particleProgress = fadeIn(progress, 0.35, 0.50);
  $: doc1Opacity = fadeIn(progress, 0.50, 0.60);
  $: doc2Opacity = fadeIn(progress, 0.60, 0.72);
  $: doc3Opacity = fadeIn(progress, 0.72, 0.85);
  $: vaultPulsing = progress > 0.72;
  $: closingOpacity = fadeIn(progress, 0.85, 1.0);

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
  <SceneHeader
    number={3}
    title={phase.title}
    metaphor={phase.metaphor}
    opacity={titleOpacity}
  />

  <AcademicBlock opacity={academicTextOpacity}>
    <p>
      Die REQUIREMENTS-Phase formalisiert in <code>REQUIREMENTS.md</code> vage
      Forschungsideen in testbare Spezifikationen. Die Unterscheidung zwischen
      <strong>MUSS</strong>, <strong>SOLL</strong> und <strong>KANN</strong> Anforderungen
      zwingt zur Priorisierung.
    </p>
    <p class="highlight">
      Trade-offs zwischen technischer Machbarkeit und wissenschaftlichem Anspruch
      werden explizit dokumentiert. <GlossaryTerm id="context-rot">Context Compression</GlossaryTerm> reduziert
      <GlossaryTerm id="token">Tokens</GlossaryTerm> bei maximaler Informationsdichte.
    </p>
  </AcademicBlock>

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
