<script>
  import { onMount } from 'svelte';
  import { initReducedMotion } from './lib/stores/scroll.js';
  import ProgressIndicator from './lib/components/ProgressIndicator.svelte';
  import Phase from './lib/components/Phase.svelte';
  import IntroScene from './lib/components/scenes/IntroScene.svelte';
  import Phase1Scene from './lib/components/scenes/Phase1Scene.svelte';
  import Phase2Scene from './lib/components/scenes/Phase2Scene.svelte';
  import Phase3Scene from './lib/components/scenes/Phase3Scene.svelte';
  import Phase4Scene from './lib/components/scenes/Phase4Scene.svelte';

  onMount(() => {
    initReducedMotion();
  });
</script>

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
</main>

<style>
  main {
    width: 100%;
  }
</style>
