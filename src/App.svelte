<script>
  import { onMount } from 'svelte';
  import { initReducedMotion, currentPhase, globalProgress, phaseProgress, scrollToHash } from './lib/stores/scroll.js';
  import ProgressIndicator from './lib/components/ProgressIndicator.svelte';
  import PhaseHeader from './lib/components/PhaseHeader.svelte';
  import Phase from './lib/components/Phase.svelte';
  import IntroScene from './lib/components/scenes/IntroScene.svelte';
  import Phase1Scene from './lib/components/scenes/Phase1Scene.svelte';
  import Phase2Scene from './lib/components/scenes/Phase2Scene.svelte';
  import Phase3Scene from './lib/components/scenes/Phase3Scene.svelte';
  import Phase4Scene from './lib/components/scenes/Phase4Scene.svelte';
  import OutroScene from './lib/components/scenes/OutroScene.svelte';

  onMount(() => {
    initReducedMotion();

    // Wait for ScrollTrigger to initialize, then scroll to hash
    setTimeout(() => {
      scrollToHash();
    }, 500);

    // Handle hash changes (back/forward navigation)
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  });

  // Continuous background based on globalProgress
  // Metaphor: Slate (cold/raw) → Terracotta (hot/transformed)
  // The gradient intensity and position changes as you scroll

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
      // Intro + Phase 1: Cold (Slate)
      temperature = 0;
    } else if (progress < 0.5) {
      // Phase 2-3: Warming up
      temperature = (progress - 0.2) / 0.3; // 0 → 1
    } else if (progress < 0.85) {
      // Phase 4: Hot (peak)
      temperature = 1;
    } else {
      // Outro: Cooling down
      temperature = 1 - (progress - 0.85) / 0.15 * 0.3; // 1 → 0.7
    }

    // Interpolate colors
    const r = Math.round(lerp(96, 191, temperature));
    const g = Math.round(lerp(125, 91, temperature));
    const b = Math.round(lerp(139, 62, temperature));

    // Intensity increases with progress (more visible as you go deeper)
    const intensity = 0.04 + progress * 0.12;

    // Ellipse position moves: center → right (following the "flow")
    const ellipseX = 30 + progress * 40; // 30% → 70%
    const ellipseY = 50 - Math.sin(progress * Math.PI) * 20; // Arc motion

    // Gradient spread tightens as intensity increases
    const spread = 70 - progress * 20; // 70% → 50%

    return `radial-gradient(ellipse at ${ellipseX}% ${ellipseY}%, rgba(${r}, ${g}, ${b}, ${intensity}) 0%, rgba(232, 232, 232, 1) ${spread}%)`;
  })();
</script>

<div class="background-layer" style="background: {dynamicBackground};"></div>

<PhaseHeader />

<main>
  <ProgressIndicator />

  <Phase id="intro" index={0} height="100vh" let:progress>
    <IntroScene {progress} />
  </Phase>

  <Phase id="phase1" index={1} height="100vh" let:progress>
    <Phase1Scene {progress} />
  </Phase>

  <Phase id="phase2" index={2} height="120vh" let:progress>
    <Phase2Scene {progress} />
  </Phase>

  <Phase id="phase3" index={3} height="120vh" let:progress>
    <Phase3Scene {progress} />
  </Phase>

  <Phase id="phase4" index={4} height="160vh" let:progress>
    <Phase4Scene {progress} />
  </Phase>

  <Phase id="outro" index={5} height="120vh" let:progress>
    <OutroScene {progress} />
  </Phase>
</main>

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

  main {
    width: 100%;
    position: relative;
    padding-top: 50px; /* Space for fixed header */
  }
</style>
