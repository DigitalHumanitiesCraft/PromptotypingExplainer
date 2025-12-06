<script>
  import { onMount } from 'svelte';
  import { initReducedMotion, currentPhase, globalProgress } from './lib/stores/scroll.js';
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
  });

  // Phase colors: neutral → cool/analytical → warm/concentrated → hot/implementation
  const phaseGradients = [
    'radial-gradient(ellipse at 50% 30%, rgba(232, 232, 232, 1) 0%, rgba(232, 232, 232, 1) 100%)', // Intro: neutral
    'radial-gradient(ellipse at 50% 50%, rgba(96, 125, 139, 0.08) 0%, rgba(232, 232, 232, 1) 70%)', // Phase 1: slight slate
    'radial-gradient(ellipse at 30% 50%, rgba(96, 125, 139, 0.12) 0%, rgba(232, 232, 232, 1) 60%)', // Phase 2: cool/analytical
    'radial-gradient(ellipse at 50% 50%, rgba(191, 91, 62, 0.06) 0%, rgba(232, 232, 232, 1) 70%)', // Phase 3: warming
    'radial-gradient(ellipse at 70% 50%, rgba(191, 91, 62, 0.10) 0%, rgba(232, 232, 232, 1) 60%)', // Phase 4: hot
    'radial-gradient(ellipse at 50% 70%, rgba(191, 91, 62, 0.08) 0%, rgba(232, 232, 232, 1) 70%)', // Outro: settled warmth
  ];

  $: backgroundGradient = phaseGradients[$currentPhase] || phaseGradients[0];
</script>

<div class="background-layer" style="background: {backgroundGradient};"></div>

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
    transition: background 0.8s ease-out;
    pointer-events: none;
  }

  main {
    width: 100%;
    position: relative;
    padding-top: 50px; /* Space for fixed header */
  }
</style>
