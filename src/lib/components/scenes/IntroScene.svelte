<script>
  import { phases } from '../../data/phases.js';

  export let progress = 0;

  // Animation thresholds (aus knowledge.md → TEIL 3 → Intro)
  // 0-30vh: Titel erscheint
  // 30-60vh: Zentrale Frage
  // 60-100vh: Phasen-Icons

  $: titleOpacity = Math.min(1, progress / 0.3);
  $: titleScale = 0.8 + (Math.min(1, progress / 0.3) * 0.2);

  $: questionOpacity = progress > 0.3 ? Math.min(1, (progress - 0.3) / 0.3) : 0;

  $: iconsOpacity = progress > 0.6 ? Math.min(1, (progress - 0.6) / 0.4) : 0;
  $: iconsTranslateY = progress > 0.6 ? Math.max(0, 30 - ((progress - 0.6) / 0.4) * 30) : 30;

  const phaseLabels = phases.slice(1).map(p => p.title);
</script>

<div class="intro-scene">
  <div
    class="title-block"
    style="opacity: {titleOpacity}; transform: scale({titleScale});"
  >
    <h1>Promptotyping</h1>
    <p class="subtitle">Vom Wissen zum Werkzeug</p>
  </div>

  <p
    class="question"
    style="opacity: {questionOpacity};"
  >
    Wie wird aus Forschungsdaten ein funktionales Interface?
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

  .question {
    font-size: clamp(1.25rem, 3vw, 2rem);
    color: var(--color-terracotta);
    max-width: 600px;
    font-weight: 500;
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
