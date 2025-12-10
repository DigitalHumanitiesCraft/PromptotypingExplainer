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
  import IntroVibeCoding from './lib/components/steps/intro/IntroVibeCoding.svelte';
  import IntroStrangeNewMinds from './lib/components/steps/intro/IntroStrangeNewMinds.svelte';
  import IntroKernprinzip from './lib/components/steps/intro/IntroKernprinzip.svelte';
  import IntroMethodik from './lib/components/steps/intro/IntroMethodik.svelte';
  import IntroScholarCentered from './lib/components/steps/intro/IntroScholarCentered.svelte';
  import IntroPhasen from './lib/components/steps/intro/IntroPhasen.svelte';

  // Phase 1 Steps
  import Phase1Titel from './lib/components/steps/phase1/Phase1Titel.svelte';
  import Phase1Datenqualitaet from './lib/components/steps/phase1/Phase1Datenqualitaet.svelte';
  import Phase1Sammlung from './lib/components/steps/phase1/Phase1Sammlung.svelte';

  // Phase 2 Steps
  import Phase2Exploration from './lib/components/steps/phase2/Phase2Struktur.svelte';

  // Phase 3 Steps
  import Phase3Titel from './lib/components/steps/phase3/Phase3Titel.svelte';
  import Phase3Dokumente from './lib/components/steps/phase3/Phase3Dokumente.svelte';
  import Phase3Vault from './lib/components/steps/phase3/Phase3Vault.svelte';

  // Phase 4 Steps
  import Phase4Titel from './lib/components/steps/phase4/Phase4Titel.svelte';
  import Phase4Iteration from './lib/components/steps/phase4/Phase4Iteration.svelte';
  import Phase4Journal from './lib/components/steps/phase4/Phase4Journal.svelte';
  import Phase4Versionierung from './lib/components/steps/phase4/Phase4Versionierung.svelte';
  import Phase4VaultUpdate from './lib/components/steps/phase4/Phase4VaultUpdate.svelte';

  // Outro Steps
  import OutroBeispiele from './lib/components/steps/outro/OutroBeispiele.svelte';
  import OutroDiskussion from './lib/components/steps/outro/OutroDiskussion.svelte';
  import OutroZusammenfassung from './lib/components/steps/outro/OutroZusammenfassung.svelte';

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

  function handleScroll(e) {
    // Could track scroll position for other purposes
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

<main class="scroll-container" on:scroll={handleScroll}>
  <ProgressIndicator />

  <!-- Intro Phase: 5 Steps -->
  <Step id="intro-definition" phaseIndex={0} stepIndex={0}>
    <IntroDefinition />
  </Step>

  <Step id="intro-vibecoding" phaseIndex={0} stepIndex={1}>
    <IntroVibeCoding />
  </Step>

  <Step id="intro-strangeminds" phaseIndex={0} stepIndex={2}>
    <IntroStrangeNewMinds />
  </Step>

  <Step id="intro-kernprinzip" phaseIndex={0} stepIndex={3}>
    <IntroKernprinzip />
  </Step>

  <Step id="intro-methodik" phaseIndex={0} stepIndex={4}>
    <IntroMethodik />
  </Step>

  <Step id="intro-scholar-centered" phaseIndex={0} stepIndex={5}>
    <IntroScholarCentered />
  </Step>

  <Step id="intro-phasen" phaseIndex={0} stepIndex={6}>
    <IntroPhasen />
  </Step>

  <!-- Phase 1: Vorbereitung - 4 Steps -->
  <Step id="phase1-titel" phaseIndex={1} stepIndex={0}>
    <Phase1Titel />
  </Step>

  <Step id="phase1-datenqualitaet" phaseIndex={1} stepIndex={1}>
    <Phase1Datenqualitaet />
  </Step>

  <Step id="phase1-sammlung" phaseIndex={1} stepIndex={2}>
    <Phase1Sammlung />
  </Step>

  <!-- Phase 2: Exploration - 1 Step -->
  <Step id="phase2-exploration" phaseIndex={2} stepIndex={0}>
    <Phase2Exploration />
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

  <Step id="phase4-journal" phaseIndex={4} stepIndex={2}>
    <Phase4Journal />
  </Step>

  <Step id="phase4-versionierung" phaseIndex={4} stepIndex={3}>
    <Phase4Versionierung />
  </Step>

  <Step id="phase4-vault-update" phaseIndex={4} stepIndex={4}>
    <Phase4VaultUpdate />
  </Step>

  <!-- Outro: Praxis - 3 Steps -->
  <Step id="outro-beispiele" phaseIndex={5} stepIndex={0}>
    <OutroBeispiele />
  </Step>

  <Step id="outro-diskussion" phaseIndex={5} stepIndex={1}>
    <OutroDiskussion />
  </Step>

  <Step id="outro-zusammenfassung" phaseIndex={5} stepIndex={2}>
    <OutroZusammenfassung />
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
    height: 100dvh;
    overflow-y: scroll;
    scroll-snap-type: y proximity;
    scroll-behavior: smooth;
    padding-top: 50px; /* Space for fixed header */
  }
</style>
