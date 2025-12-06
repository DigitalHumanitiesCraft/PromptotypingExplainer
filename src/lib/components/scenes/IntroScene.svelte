<script>
  import { phases } from '../../data/phases.js';

  export let progress = 0;

  // Animation thresholds (aus knowledge.md → TEIL 3 → Intro)
  // 0-0.15: Titel sofort sichtbar, Definition erscheint
  // 0.15-0.4: Zentrale Frage
  // 0.4-0.7: Kontext (Dissertation)
  // 0.7-1.0: Phasen-Icons

  // Titel ist sofort sichtbar (opacity startet bei 1)
  $: titleOpacity = 1;
  $: titleScale = 1;

  // Definition fadet ein
  $: definitionOpacity = Math.min(1, progress / 0.15);

  // Zentrale Frage
  $: questionOpacity = progress > 0.15 ? Math.min(1, (progress - 0.15) / 0.25) : 0;

  // Kontext-Text
  $: contextOpacity = progress > 0.4 ? Math.min(1, (progress - 0.4) / 0.3) : 0;

  // Phasen-Icons
  $: iconsOpacity = progress > 0.7 ? Math.min(1, (progress - 0.7) / 0.3) : 0;
  $: iconsTranslateY = progress > 0.7 ? Math.max(0, 30 - ((progress - 0.7) / 0.3) * 30) : 30;

  const phaseLabels = phases.slice(1).map(p => p.title);
</script>

<div class="intro-scene">
  <div class="title-block" style="opacity: {titleOpacity}; transform: scale({titleScale});">
    <h1>Promptotyping</h1>
    <p class="subtitle">Vom Wissen zum Werkzeug</p>
  </div>

  <p class="definition" style="opacity: {definitionOpacity};">
    Eine Context-Engineering-Methode für die schnelle, forschungsdatengetriebene
    Erstellung von Prototypen mittels Frontier-LLMs.
  </p>

  <p class="question" style="opacity: {questionOpacity};">
    Wie wird aus Forschungsdaten ein funktionales Interface?
  </p>

  <p class="context" style="opacity: {contextOpacity};">
    Entwickelt im Rahmen einer Dissertation über die Modellierung,
    Operationalisierung und Exploration historischer Information.
  </p>

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

  .question {
    font-size: clamp(1.25rem, 3vw, 2rem);
    color: var(--color-terracotta);
    max-width: 600px;
    font-weight: 500;
  }

  .context {
    font-size: clamp(0.875rem, 1.5vw, 1rem);
    color: var(--color-slate);
    max-width: 550px;
    font-style: italic;
    opacity: 0.8;
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

  @media (max-width: 767px) {
    .phase-icons {
      gap: var(--space-lg);
    }

    .icon-circle {
      width: 40px;
      height: 40px;
      font-size: 1rem;
    }
  }
</style>
