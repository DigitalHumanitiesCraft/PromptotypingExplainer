<script>
  import { phases } from '../../data/phases.js';
  import EntityIcon from '../elements/EntityIcon.svelte';

  export let progress = 0;

  const phase = phases[2];

  // Animation thresholds (aus knowledge.md → TEIL 3 → Phase 2)
  // 0-0.15: Titel erscheint
  // 0.15-0.3: Zoom auf XML
  // 0.3-0.5: XML öffnet sich, Farbcodierung
  // 0.5-0.65: Terracotta-Elemente hervorgehoben
  // 0.65-0.8: Entity-Icons lösen sich
  // 0.8-0.9: Netzwerk entsteht
  // 0.9-1.0: Interface-Skizzen

  $: titleOpacity = Math.min(1, progress / 0.15);

  // XML zoom and open
  $: xmlScale = progress > 0.15 ? 1 + Math.min(0.3, (progress - 0.15) / 0.15 * 0.3) : 1;
  $: xmlOpen = progress > 0.3 ? Math.min(1, (progress - 0.3) / 0.2) : 0;

  // Entity extraction
  $: entityProgress = progress > 0.5 ? Math.min(1, (progress - 0.5) / 0.3) : 0;

  // Network formation
  $: networkOpacity = progress > 0.8 ? Math.min(1, (progress - 0.8) / 0.1) : 0;

  // Interface sketches
  $: sketchOpacity = progress > 0.9 ? Math.min(1, (progress - 0.9) / 0.1) : 0;

  // Entity positions (start from XML, move to right)
  const entityTypes = ['person', 'place', 'time', 'relation'];

  function getEntityStyle(index) {
    const startX = -100;
    const endX = 80 + (index % 2) * 60;
    const endY = -60 + Math.floor(index / 2) * 80;

    const x = startX + (endX - startX) * entityProgress;
    const y = endY * entityProgress;
    const opacity = entityProgress;
    const scale = 0.5 + entityProgress * 0.5;

    return `transform: translate(${x}px, ${y}px) scale(${scale}); opacity: ${opacity};`;
  }
</script>

<div class="phase2-scene">
  <header class="phase-header" style="opacity: {titleOpacity};">
    <span class="phase-number">Phase 2</span>
    <h2>{phase.title}</h2>
    <p class="metaphor">{phase.metaphor}</p>
  </header>

  <div class="exploration-area">
    <!-- XML Document (left) -->
    <div
      class="xml-container"
      style="transform: scale({xmlScale});"
    >
      <div class="xml-document" class:open={xmlOpen > 0.5}>
        <div class="xml-header">&lt;TEI&gt;</div>
        <div class="xml-content" style="opacity: {xmlOpen};">
          <div class="xml-line">
            <span class="tag">&lt;correspDesc&gt;</span>
          </div>
          <div class="xml-line indent">
            <span class="tag">&lt;persName</span>
            <span class="attr">ref</span>=<span class="value highlight">"#person1"</span><span class="tag">&gt;</span>
          </div>
          <div class="xml-line indent">
            <span class="tag">&lt;placeName</span>
            <span class="attr">ref</span>=<span class="value">"#place1"</span><span class="tag">&gt;</span>
          </div>
          <div class="xml-line indent">
            <span class="tag">&lt;date</span>
            <span class="attr">when</span>=<span class="value">"1800-01-01"</span><span class="tag">/&gt;</span>
          </div>
          <div class="xml-line">
            <span class="tag">&lt;/correspDesc&gt;</span>
          </div>
        </div>
        <div class="xml-footer">&lt;/TEI&gt;</div>
      </div>
    </div>

    <!-- Entities (moving to right) -->
    <div class="entities-area">
      {#each entityTypes as type, i}
        <div class="entity-wrapper" style={getEntityStyle(i)}>
          <EntityIcon {type} size={48} />
          <span class="entity-label">{phase.entities[i]?.label || type}</span>
        </div>
      {/each}

      <!-- Network lines -->
      {#if networkOpacity > 0}
        <svg class="network-lines" style="opacity: {networkOpacity};">
          <line x1="100" y1="20" x2="160" y2="20" stroke="var(--color-slate)" stroke-width="1" />
          <line x1="100" y1="20" x2="100" y2="80" stroke="var(--color-slate)" stroke-width="1" />
          <line x1="160" y1="20" x2="160" y2="80" stroke="var(--color-slate)" stroke-width="1" />
          <line x1="100" y1="80" x2="160" y2="80" stroke="var(--color-slate)" stroke-width="1" />
        </svg>
      {/if}
    </div>

    <!-- Interface sketches (far right) -->
    <div class="sketches" style="opacity: {sketchOpacity};">
      <div class="sketch">
        <div class="sketch-label">Timeline?</div>
        <div class="sketch-box timeline">
          <div class="sketch-line"></div>
          <div class="sketch-dot"></div>
          <div class="sketch-dot"></div>
          <div class="sketch-dot"></div>
        </div>
      </div>
      <div class="sketch">
        <div class="sketch-label">Karte?</div>
        <div class="sketch-box map">
          <div class="sketch-pin"></div>
          <div class="sketch-pin"></div>
        </div>
      </div>
      <div class="question-mark">?</div>
    </div>
  </div>
</div>

<style>
  .phase2-scene {
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

  .exploration-area {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-xl);
    width: 100%;
    max-width: 900px;
    min-height: 300px;
    position: relative;
  }

  /* XML Document */
  .xml-container {
    flex-shrink: 0;
    transition: transform 0.3s var(--ease-out);
  }

  .xml-document {
    background: var(--color-white);
    border: 2px solid var(--color-slate);
    border-radius: 4px;
    padding: var(--space-md);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    min-width: 240px;
  }

  .xml-header, .xml-footer {
    color: var(--color-slate);
  }

  .xml-content {
    margin: var(--space-sm) 0;
    padding-left: var(--space-sm);
    border-left: 2px solid var(--color-terracotta);
  }

  .xml-line {
    line-height: 1.6;
  }

  .xml-line.indent {
    padding-left: var(--space-md);
  }

  .tag { color: var(--color-slate); }
  .attr { color: var(--color-terracotta); }
  .value { color: var(--color-success); }
  .value.highlight {
    background: rgba(191, 91, 62, 0.2);
    padding: 0 2px;
    border-radius: 2px;
  }

  /* Entities */
  .entities-area {
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .entity-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
  }

  .entity-label {
    font-size: 0.7rem;
    color: var(--color-black);
  }

  .network-lines {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  /* Sketches */
  .sketches {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    align-items: center;
  }

  .sketch {
    text-align: center;
  }

  .sketch-label {
    font-size: 0.75rem;
    color: var(--color-slate);
    margin-bottom: var(--space-xs);
  }

  .sketch-box {
    width: 80px;
    height: 50px;
    border: 1px dashed var(--color-slate);
    border-radius: 4px;
    opacity: 0.6;
    position: relative;
  }

  .sketch-box.timeline {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 var(--space-sm);
  }

  .sketch-line {
    position: absolute;
    top: 50%;
    left: 10%;
    right: 10%;
    height: 2px;
    background: var(--color-slate);
  }

  .sketch-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color-slate);
    position: relative;
    z-index: 1;
  }

  .sketch-box.map {
    position: relative;
  }

  .sketch-pin {
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--color-terracotta);
    border-radius: 50%;
  }

  .sketch-pin:nth-child(1) { top: 30%; left: 25%; }
  .sketch-pin:nth-child(2) { top: 60%; left: 65%; }

  .question-mark {
    font-size: 2rem;
    color: var(--color-terracotta);
    font-weight: 700;
    margin-top: var(--space-sm);
  }

  @media (max-width: 767px) {
    .exploration-area {
      flex-direction: column;
      gap: var(--space-lg);
    }

    .xml-document {
      min-width: auto;
      font-size: 0.65rem;
    }

    .sketches {
      flex-direction: row;
    }
  }
</style>
