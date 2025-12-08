<script>
  import { fly, fade } from 'svelte/transition';
  import DocumentIcon from '../../elements/DocumentIcon.svelte';
  import { phases } from '../../../data/phases.js';

  const artifacts = phases[1].artifacts;

  // Positionen für schwebende Icons (relativ zum Zentrum)
  const positions = [
    { x: -140, y: -70, delay: 0 },
    { x: 130, y: -50, delay: 100 },
    { x: -110, y: 70, delay: 200 },
    { x: 150, y: 60, delay: 300 },
  ];
</script>

<div class="phase1-rohdaten">
  <h3 in:fade={{ duration: 400 }}>Rohmaterialien sammeln</h3>

  <div class="explanation-block" in:fade={{ delay: 150, duration: 400 }}>
    <p>
      Die Rohmaterialien bilden die Wissensbasis für alle folgenden Phasen. In dieser Phase werden
      alle relevanten Quellen zusammengetragen, ohne sie bereits zu strukturieren oder zu destillieren.
      Die Vollständigkeit dieser Sammlung bestimmt die Qualität des späteren Vault.
    </p>
    <p>
      Typische Materialien umfassen <strong>Forschungsdaten</strong> in verschiedenen Formaten (XML, CSV, JSON),
      <strong>Dokumentation</strong> zu Standards, Schemata und Editionsrichtlinien,
      sowie <strong>Kontextmaterial</strong> wie Papers, Notizen aus Expertengesprächen und Workshop-Protokolle.
      Im CorrespExplorer-Projekt etwa wurden CMIF-XML-Dateien, die correspSearch-Dokumentation und
      projektspezifische Editionsrichtlinien gesammelt.
    </p>
  </div>

  <div class="materials-cloud">
    {#each artifacts as artifact, i}
      <div
        class="material-item"
        style="--offset-x: {positions[i].x}px; --offset-y: {positions[i].y}px;"
        in:fly={{ x: positions[i].x > 0 ? 100 : -100, y: -30, duration: 500, delay: 300 + positions[i].delay }}
      >
        <div class="icon-container">
          <DocumentIcon type={artifact.type} />
        </div>
        <span class="label" in:fade={{ delay: 500 + positions[i].delay }}>{artifact.label}</span>
      </div>
    {/each}
  </div>

  <div class="material-types" in:fade={{ delay: 600, duration: 400 }}>
    <div class="type-item">
      <span class="type-label">TEI/XML</span>
      <span class="type-desc">Strukturierte Forschungsdaten mit Markup für Editionen, Korrespondenzen, Annotationen</span>
    </div>
    <div class="type-item">
      <span class="type-label">PDF</span>
      <span class="type-desc">Spezifikationen, Standards, Dokumentationen und wissenschaftliche Publikationen</span>
    </div>
    <div class="type-item">
      <span class="type-label">CSV</span>
      <span class="type-desc">Tabellarische Daten für quantitative Analysen, Metadaten, Konkordanzen</span>
    </div>
    <div class="type-item">
      <span class="type-label">Notizen</span>
      <span class="type-desc">Implizites Domänenwissen aus Expertengesprächen, Workshops und Feldnotizen</span>
    </div>
  </div>
</div>

<style>
  .phase1-rohdaten {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
    text-align: center;
  }

  h3 {
    color: var(--color-black);
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    margin: 0;
  }

  .explanation-block {
    max-width: 700px;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .explanation-block p {
    font-size: clamp(0.9rem, 1.6vw, 1rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: justify;
    margin: 0;
  }

  .explanation-block p + p {
    margin-top: var(--space-md);
  }

  .explanation-block strong {
    color: var(--color-terracotta);
  }

  .materials-cloud {
    position: relative;
    width: 100%;
    max-width: 500px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .material-item {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
    transform: translate(var(--offset-x), var(--offset-y));
    transition: transform 0.3s ease;
  }

  .material-item:hover {
    transform: translate(var(--offset-x), var(--offset-y)) scale(1.1);
  }

  .icon-container {
    padding: var(--space-sm);
    background: rgba(255, 255, 255, 0.8);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .label {
    font-size: 0.8rem;
    color: var(--color-black);
    font-weight: 500;
    white-space: nowrap;
  }

  .material-types {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-sm);
    max-width: 700px;
    width: 100%;
  }

  .type-item {
    background: rgba(255, 255, 255, 0.9);
    padding: var(--space-sm) var(--space-md);
    border-radius: 8px;
    text-align: left;
    border-left: 3px solid var(--color-slate);
  }

  .type-label {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--color-terracotta);
    margin-bottom: 4px;
  }

  .type-desc {
    font-size: 0.8rem;
    color: var(--color-slate);
    line-height: 1.4;
  }

  @media (max-width: 767px) {
    .materials-cloud {
      height: 240px;
      max-width: 320px;
    }

    .material-item {
      --offset-x: calc(var(--offset-x) * 0.6);
      --offset-y: calc(var(--offset-y) * 0.7);
    }

    .material-types {
      grid-template-columns: 1fr;
    }
  }
</style>
