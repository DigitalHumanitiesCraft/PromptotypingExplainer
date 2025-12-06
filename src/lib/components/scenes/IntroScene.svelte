<script>
  import { phases } from '../../data/phases.js';
  import GlossaryTerm from '../GlossaryTerm.svelte';

  export let progress = 0;

  // Animation thresholds
  // 0-0.1: Titel sofort sichtbar
  // 0.1-0.25: Definition (akademisch)
  // 0.25-0.45: System 1.42 Konzept
  // 0.45-0.65: Zentrale Herausforderung
  // 0.65-0.85: Methodischer Ansatz
  // 0.85-1.0: Phasen-Icons

  $: titleOpacity = 1;
  $: titleScale = 1;

  // Definition fadet ein
  $: definitionOpacity = Math.min(1, progress / 0.1);

  // System 1.42 Konzept
  $: system142Opacity = progress > 0.1 ? Math.min(1, (progress - 0.1) / 0.15) : 0;

  // Zentrale Herausforderung
  $: challengeOpacity = progress > 0.25 ? Math.min(1, (progress - 0.25) / 0.2) : 0;

  // Methodischer Ansatz
  $: approachOpacity = progress > 0.45 ? Math.min(1, (progress - 0.45) / 0.2) : 0;

  // Phasen-Icons
  $: iconsOpacity = progress > 0.65 ? Math.min(1, (progress - 0.65) / 0.2) : 0;
  $: iconsTranslateY = progress > 0.65 ? Math.max(0, 30 - ((progress - 0.65) / 0.2) * 30) : 30;

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

  <p class="system142" style="opacity: {system142Opacity};">
    <GlossaryTerm id="llm">LLMs</GlossaryTerm> operieren als <strong>„System 1.42"</strong> – ein epistemologischer
    Zwischenraum zwischen intuitiver Musterassoziation und systematischer
    Problemlösung, ohne vollständige Eigenschaften beider Systeme zu erreichen.
  </p>

  <p class="challenge" style="opacity: {challengeOpacity};">
    Die zentrale Herausforderung: Wie können Evaluationsverfahren entwickelt werden,
    die sowohl die Varianz von LLM-Leistungen als auch qualitative Maßstäbe
    epistemischer Belastbarkeit abbilden?
  </p>

  <p class="approach" style="opacity: {approachOpacity};">
    Ein sechsphasiges Prozessmodell mit systematischer Dokumentation
    und Critical-Expert-in-the-Loop-Ansatz zur Reduktion
    <GlossaryTerm id="sycophancy">zustimmungsorientierter Antwortverzerrungen</GlossaryTerm>.
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

  .system142 {
    font-size: clamp(0.95rem, 1.8vw, 1.15rem);
    color: var(--color-black);
    max-width: 650px;
    line-height: 1.7;
    background: rgba(96, 125, 139, 0.08);
    padding: var(--space-md) var(--space-lg);
    border-radius: 8px;
    border-left: 3px solid var(--color-slate);
  }

  .system142 strong {
    color: var(--color-terracotta);
  }

  .challenge {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: var(--color-terracotta);
    max-width: 600px;
    font-weight: 500;
    line-height: 1.5;
  }

  .approach {
    font-size: clamp(0.9rem, 1.6vw, 1.05rem);
    color: var(--color-slate);
    max-width: 580px;
    line-height: 1.6;
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
