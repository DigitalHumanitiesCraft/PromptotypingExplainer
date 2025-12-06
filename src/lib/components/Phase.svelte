<script>
  import { onMount, onDestroy } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { currentPhase, globalProgress, phaseBoundaries, totalScrollLength } from '../stores/scroll.js';

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

    // Throttle progress updates to reduce reactivity overhead
    let lastProgress = 0;
    const PROGRESS_THRESHOLD = 0.005; // Only update if changed by 0.5%

    scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: `+=${phaseHeight}vh`,
      pin: true,
      pinSpacing: true,
      scrub: 0.8,
      anticipatePin: 1,
      fastScrollEnd: true,
      preventOverlaps: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        // Only update if progress changed significantly (reduces reactivity)
        if (Math.abs(self.progress - lastProgress) > PROGRESS_THRESHOLD) {
          lastProgress = self.progress;
          progress = self.progress;

          if (self.isActive) {
            currentPhase.set(index);
            const boundary = phaseBoundaries[index];
            const phaseStart = boundary.start / totalScrollLength;
            const phaseLength = (boundary.end - boundary.start) / totalScrollLength;
            globalProgress.set(phaseStart + self.progress * phaseLength);
          }
        }
      },
      onEnter: () => {
        currentPhase.set(index);
      },
      onEnterBack: () => {
        currentPhase.set(index);
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
