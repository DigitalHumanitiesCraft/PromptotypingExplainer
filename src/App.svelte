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

  // Phase 2 Steps
  import Phase2Struktur from './lib/components/steps/phase2/Phase2Struktur.svelte';
  import Phase2Entitaeten from './lib/components/steps/phase2/Phase2Entitaeten.svelte';
  import Phase2Fragen from './lib/components/steps/phase2/Phase2Fragen.svelte';

  // Phase 3 Steps
  import Phase3Titel from './lib/components/steps/phase3/Phase3Titel.svelte';
  import Phase3Dokumente from './lib/components/steps/phase3/Phase3Dokumente.svelte';
  import Phase3Vault from './lib/components/steps/phase3/Phase3Vault.svelte';

  // Phase 4 Steps
  import Phase4Titel from './lib/components/steps/phase4/Phase4Titel.svelte';
  import Phase4Iteration from './lib/components/steps/phase4/Phase4Iteration.svelte';
  import Phase4VaultUpdate from './lib/components/steps/phase4/Phase4VaultUpdate.svelte';

  // Outro Steps
  import OutroBeispiele from './lib/components/steps/outro/OutroBeispiele.svelte';
  import OutroZusammenfassung from './lib/components/steps/outro/OutroZusammenfassung.svelte';

  // Bibliography & Glossary
  import Glossary from './lib/components/Glossary.svelte';
  import Bibliography from './lib/components/Bibliography.svelte';

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

  <!-- Phase 2: Exploration - 3 Steps -->
  <Step id="phase2-struktur" phaseIndex={2} stepIndex={0}>
    <Phase2Struktur />
  </Step>

  <Step id="phase2-entitaeten" phaseIndex={2} stepIndex={1}>
    <Phase2Entitaeten />
  </Step>

  <Step id="phase2-fragen" phaseIndex={2} stepIndex={2}>
    <Phase2Fragen />
  </Step>

  <!-- Phase 3: Destillation - 3 Steps -->
  <Step id="phase3-titel" phaseIndex={3} stepIndex={0}>
    <Phase3Titel />
  </Step>

  <Step id="phase3-dokumente" phaseIndex={3} stepIndex={1}>
    <Phase3Dokumente />
  </Step>

  <Step id="phase3-vault" phaseIndex={3} stepIndex={2}>
    <Phase3Vault />
  </Step>

  <!-- Phase 4: Implementation - 3 Steps -->
  <Step id="phase4-titel" phaseIndex={4} stepIndex={0}>
    <Phase4Titel />
  </Step>

  <Step id="phase4-iteration" phaseIndex={4} stepIndex={1}>
    <Phase4Iteration />
  </Step>

  <Step id="phase4-vault-update" phaseIndex={4} stepIndex={2}>
    <Phase4VaultUpdate />
  </Step>

  <!-- Outro: Praxis - 2 Steps -->
  <Step id="outro-beispiele" phaseIndex={5} stepIndex={0}>
    <OutroBeispiele />
  </Step>

  <Step id="outro-zusammenfassung" phaseIndex={5} stepIndex={1}>
    <OutroZusammenfassung />
  </Step>

  <!-- Glossar -->
  <Glossary />

  <!-- Bibliographie -->
  <Bibliography />
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
</style>
