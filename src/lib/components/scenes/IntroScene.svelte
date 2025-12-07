<script>
  import { phases } from '../../data/phases.js';
  import GlossaryTerm from '../GlossaryTerm.svelte';
  import DeepDiveTrigger from '../elements/DeepDiveTrigger.svelte';
  import { openDeepDive } from '../../stores/deepDive.js';
  import overviewImage from '../../../assets/images/promptotyping-overview.png';

  export let progress = 0;

  function handleDeepDive(event) {
    openDeepDive(event.detail.id);
  }

  // Animation thresholds
  // 0-0.1: Titel sofort sichtbar
  // 0.1-0.25: Definition (akademisch)
  // 0.25-0.4: Kernprinzip (Mapping)
  // 0.4-0.55: Methodischer Ansatz
  // 0.55-0.7: Phasen-Icons
  // 0.7-1.0: Overview-Grafik

  $: titleOpacity = 1;
  $: titleScale = 1;

  // Definition fadet ein
  $: definitionOpacity = Math.min(1, progress / 0.1);

  // Kernprinzip (Mapping)
  $: coreConceptOpacity = progress > 0.1 ? Math.min(1, (progress - 0.1) / 0.15) : 0;

  // Methodischer Ansatz
  $: approachOpacity = progress > 0.25 ? Math.min(1, (progress - 0.25) / 0.15) : 0;

  // Phasen-Icons
  $: iconsOpacity = progress > 0.4 ? Math.min(1, (progress - 0.4) / 0.15) : 0;
  $: iconsTranslateY = progress > 0.4 ? Math.max(0, 30 - ((progress - 0.4) / 0.15) * 30) : 30;

  // Overview-Grafik
  $: overviewOpacity = progress > 0.55 ? Math.min(1, (progress - 0.55) / 0.2) : 0;
  $: overviewScale = progress > 0.55 ? 0.95 + ((progress - 0.55) / 0.2) * 0.05 : 0.95;

  const phaseLabels = phases.slice(1).map(p => p.title);
</script>

<div class="intro-scene">
  <div class="title-block" style="opacity: {titleOpacity}; transform: scale({titleScale});">
    <h1>Promptotyping</h1>
    <p class="subtitle">Methodik LLM-gestützter Werkzeugentwicklung</p>
  </div>

  <p class="definition" style="opacity: {definitionOpacity};">
    Eine <GlossaryTerm id="context-engineering">Context Engineering</GlossaryTerm>-Methodik
    für die <GlossaryTerm id="llm">LLM</GlossaryTerm>-gestützte Entwicklung von
    Forschungsworkflows und -werkzeugen in den Digital Humanities.
  </p>

  <p class="core-concept" style="opacity: {coreConceptOpacity};">
    <strong>Das Kernprinzip:</strong> Das Mapping von semantisch reichhaltigen
    Forschungsdaten und explizitem Forschungskontext auf funktionale Interfaces
    durch iterative Mensch-LLM-Kollaboration.
  </p>

  <p class="approach" style="opacity: {approachOpacity};">
    Ein vierphasiges Prozessmodell mit systematischer Dokumentation
    und <GlossaryTerm id="critical-expert">Critical-Expert-in-the-Loop</GlossaryTerm>-Ansatz
    zur Qualitätssicherung durch Domänenwissen.
  </p>

  <div class="deep-dive-triggers" style="opacity: {approachOpacity};">
    <DeepDiveTrigger
      label="Scholar-Centered Design"
      deepDiveId="scholar-centered-design"
      on:open={handleDeepDive}
    />
    <DeepDiveTrigger
      label="Knowledge Acquisition"
      deepDiveId="knowledge-acquisition"
      on:open={handleDeepDive}
    />
  </div>

  <div
    class="phase-icons"
    style="opacity: {iconsOpacity}; transform: translateY({iconsTranslateY}px);"
  >
    {#each phaseLabels as label, i}
      <div class="phase-icon">
        <div class="icon-circle">{i + 1}</div>
        <span class="icon-label">{label}</span>
      </div>
    {/each}
  </div>

  <div
    class="overview-image"
    style="opacity: {overviewOpacity}; transform: scale({overviewScale});"
  >
    <img src={overviewImage} alt="Promptotyping Workflow: Vorbereitung, Exploration, Destillation, Implementation" />
  </div>
</div>

<style>
  .intro-scene {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-xl);
    text-align: center;
    padding: var(--space-lg);
  }

  .title-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
  }

  h1 {
    color: var(--color-black);
    margin: 0;
  }

  .subtitle {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    color: var(--color-slate);
    font-weight: 400;
  }

  .definition {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: var(--color-slate);
    max-width: 700px;
    line-height: 1.6;
  }

  .core-concept {
    font-size: clamp(0.95rem, 1.8vw, 1.15rem);
    color: var(--color-black);
    max-width: 650px;
    line-height: 1.7;
    background: rgba(191, 91, 62, 0.08);
    padding: var(--space-md) var(--space-lg);
    border-radius: 8px;
    border-left: 3px solid var(--color-terracotta);
  }

  .core-concept strong {
    color: var(--color-terracotta);
  }

  .approach {
    font-size: clamp(0.9rem, 1.6vw, 1.05rem);
    color: var(--color-slate);
    max-width: 580px;
    line-height: 1.6;
  }

  .deep-dive-triggers {
    display: flex;
    gap: var(--space-md);
    flex-wrap: wrap;
    justify-content: center;
  }

  .phase-icons {
    display: flex;
    gap: var(--space-xl);
    flex-wrap: wrap;
    justify-content: center;
    margin-top: var(--space-lg);
  }

  .phase-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
  }

  .icon-circle {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: var(--color-slate);
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.25rem;
    opacity: 0.5;
  }

  .icon-label {
    font-size: 0.875rem;
    color: var(--color-slate);
  }

  .overview-image {
    max-width: 900px;
    width: 100%;
    margin-top: var(--space-lg);
  }

  .overview-image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 767px) {
    .phase-icons {
      gap: var(--space-lg);
    }

    .icon-circle {
      width: 40px;
      height: 40px;
      font-size: 1rem;
    }

    .overview-image {
      max-width: 100%;
      padding: 0 var(--space-sm);
    }
  }
</style>
