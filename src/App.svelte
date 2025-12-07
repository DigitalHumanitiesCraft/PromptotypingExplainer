<script>
  import { onMount } from 'svelte';
  import { initReducedMotion, globalProgress, scrollToHash, updateHash, currentPhase, currentStep } from './lib/stores/scroll.js';
  import { isDeepDiveOpen, currentDeepDive, closeDeepDive } from './lib/stores/deepDive.js';
  import ProgressIndicator from './lib/components/ProgressIndicator.svelte';
  import PhaseHeader from './lib/components/PhaseHeader.svelte';
  import Step from './lib/components/Step.svelte';
  import DeepDivePanel from './lib/components/DeepDivePanel.svelte';

  // Intro Steps
  import IntroDefinition from './lib/components/steps/intro/IntroDefinition.svelte';
  import IntroKernprinzip from './lib/components/steps/intro/IntroKernprinzip.svelte';
  import IntroMethodik from './lib/components/steps/intro/IntroMethodik.svelte';
  import IntroPhasen from './lib/components/steps/intro/IntroPhasen.svelte';

  // Phase 1 Steps
  import Phase1Titel from './lib/components/steps/phase1/Phase1Titel.svelte';
  import Phase1Rohdaten from './lib/components/steps/phase1/Phase1Rohdaten.svelte';
  import Phase1Sammlung from './lib/components/steps/phase1/Phase1Sammlung.svelte';

  // Legacy Scene imports (Phase 2-4 + Outro to be migrated)
  import Phase2Scene from './lib/components/scenes/Phase2Scene.svelte';
  import Phase3Scene from './lib/components/scenes/Phase3Scene.svelte';
  import Phase4Scene from './lib/components/scenes/Phase4Scene.svelte';
  import OutroScene from './lib/components/scenes/OutroScene.svelte';

  onMount(() => {
    initReducedMotion();

    // Wait for DOM, then scroll to hash
    setTimeout(() => {
      scrollToHash();
    }, 300);

    // Handle hash changes (back/forward navigation)
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  });

  // Update hash when phase/step changes
  $: if (typeof window !== 'undefined') {
    updateHash($currentPhase, $currentStep);
  }

  // Color interpolation helper
  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  // Calculate dynamic background based on scroll progress
  $: dynamicBackground = (() => {
    const progress = $globalProgress;

    // Slate RGB: 96, 125, 139
    // Terracotta RGB: 191, 91, 62
    // Base: 232, 232, 232

    // Temperature curve: starts cold, peaks hot at ~75%, cools down at end
    let temperature;
    if (progress < 0.2) {
      temperature = 0;
    } else if (progress < 0.5) {
      temperature = (progress - 0.2) / 0.3;
    } else if (progress < 0.85) {
      temperature = 1;
    } else {
      temperature = 1 - (progress - 0.85) / 0.15 * 0.3;
    }

    const r = Math.round(lerp(96, 191, temperature));
    const g = Math.round(lerp(125, 91, temperature));
    const b = Math.round(lerp(139, 62, temperature));

    const intensity = 0.04 + progress * 0.12;
    const ellipseX = 30 + progress * 40;
    const ellipseY = 50 - Math.sin(progress * Math.PI) * 20;
    const spread = 70 - progress * 20;

    return `radial-gradient(ellipse at ${ellipseX}% ${ellipseY}%, rgba(${r}, ${g}, ${b}, ${intensity}) 0%, rgba(232, 232, 232, 1) ${spread}%)`;
  })();
</script>

<div class="background-layer" style="background: {dynamicBackground};"></div>

<PhaseHeader />

<main class="scroll-container">
  <ProgressIndicator />

  <!-- Intro Phase: 4 Steps -->
  <Step id="intro-definition" phaseIndex={0} stepIndex={0}>
    <IntroDefinition />
  </Step>

  <Step id="intro-kernprinzip" phaseIndex={0} stepIndex={1}>
    <IntroKernprinzip />
  </Step>

  <Step id="intro-methodik" phaseIndex={0} stepIndex={2}>
    <IntroMethodik />
  </Step>

  <Step id="intro-phasen" phaseIndex={0} stepIndex={3}>
    <IntroPhasen />
  </Step>

  <!-- Phase 1: Vorbereitung - 3 Steps -->
  <Step id="phase1-titel" phaseIndex={1} stepIndex={0}>
    <Phase1Titel />
  </Step>

  <Step id="phase1-rohdaten" phaseIndex={1} stepIndex={1}>
    <Phase1Rohdaten />
  </Step>

  <Step id="phase1-sammlung" phaseIndex={1} stepIndex={2}>
    <Phase1Sammlung />
  </Step>

  <Step id="phase2-struktur" phaseIndex={2} stepIndex={0}>
    <div class="legacy-scene">
      <Phase2Scene progress={0.5} />
    </div>
  </Step>

  <Step id="phase2-entitaeten" phaseIndex={2} stepIndex={1}>
    <div class="placeholder-step">
      <h2>Phase 2: Entitäten</h2>
      <p>Coming soon...</p>
    </div>
  </Step>

  <Step id="phase2-fragen" phaseIndex={2} stepIndex={2}>
    <div class="placeholder-step">
      <h2>Phase 2: Fragen</h2>
      <p>Coming soon...</p>
    </div>
  </Step>

  <Step id="phase3-titel" phaseIndex={3} stepIndex={0}>
    <div class="legacy-scene">
      <Phase3Scene progress={0.5} />
    </div>
  </Step>

  <Step id="phase3-dokumente" phaseIndex={3} stepIndex={1}>
    <div class="placeholder-step">
      <h2>Phase 3: .md Dokumente</h2>
      <p>DATA.md, REQUIREMENTS.md, CONTEXT.md entstehen</p>
    </div>
  </Step>

  <Step id="phase3-vault" phaseIndex={3} stepIndex={2}>
    <div class="placeholder-step">
      <h2>Phase 3: Vault</h2>
      <p>Destilliertes Wissen für das LLM</p>
    </div>
  </Step>

  <Step id="phase4-titel" phaseIndex={4} stepIndex={0}>
    <div class="legacy-scene">
      <Phase4Scene progress={0.5} />
    </div>
  </Step>

  <Step id="phase4-iteration" phaseIndex={4} stepIndex={1}>
    <div class="placeholder-step">
      <h2>Phase 4: Iteration</h2>
      <p>Prompt → LLM → Validierung → neuer Prototype</p>
    </div>
  </Step>

  <Step id="phase4-vault-update" phaseIndex={4} stepIndex={2}>
    <div class="placeholder-step">
      <h2>Phase 4: Vault-Update</h2>
      <p>Neues Wissen fließt zurück in den Vault</p>
    </div>
  </Step>

  <Step id="outro-beispiele" phaseIndex={5} stepIndex={0}>
    <div class="legacy-scene">
      <OutroScene progress={0.5} />
    </div>
  </Step>

  <Step id="outro-zusammenfassung" phaseIndex={5} stepIndex={1}>
    <div class="placeholder-step">
      <h2>Zusammenfassung</h2>
      <p>Coming soon...</p>
    </div>
  </Step>
</main>

<!-- Deep Dive Panel -->
<DeepDivePanel
  isOpen={$isDeepDiveOpen}
  title={$currentDeepDive?.title || ''}
  content={$currentDeepDive?.content || ''}
  on:close={closeDeepDive}
/>

<style>
  .background-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: background 0.15s ease-out;
    pointer-events: none;
  }

  .scroll-container {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y proximity;
    scroll-behavior: smooth;
    padding-top: 50px; /* Space for fixed header */
  }

  .legacy-scene {
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .placeholder-step {
    text-align: center;
    color: var(--color-slate);
  }

  .placeholder-step h2 {
    color: var(--color-black);
    margin-bottom: var(--space-md);
  }
</style>
