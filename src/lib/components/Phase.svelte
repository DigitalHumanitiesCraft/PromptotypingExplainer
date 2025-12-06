<script>
  import { onMount, onDestroy } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { currentPhase, globalProgress, totalScrollLength, phaseBoundaries } from '../stores/scroll.js';

  export let id;
  export let index;
  export let height = '100vh';

  let element;
  let scrollTrigger;
  let progress = 0;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const boundary = phaseBoundaries[index];
    const phaseHeight = boundary ? (boundary.end - boundary.start) : 100;

    scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: `+=${phaseHeight}vh`,
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        progress = self.progress;

        // Update global stores
        if (self.isActive) {
          currentPhase.set(index);
        }

        // Calculate global progress
        const scrollY = window.scrollY;
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        globalProgress.set(scrollY / totalHeight);
      },
    });
  });

  onDestroy(() => {
    if (scrollTrigger) {
      scrollTrigger.kill();
    }
  });
</script>

<section
  bind:this={element}
  {id}
  class="phase"
  style="height: {height};"
  aria-label="Phase {index}"
>
  <slot {progress} />
</section>

<style>
  .phase {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
</style>
