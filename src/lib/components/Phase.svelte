<script>
  import { onMount, onDestroy } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { currentPhase, globalProgress, phaseBoundaries, totalScrollLength, updateHash } from '../stores/scroll.js';

  export let id;
  export let index;

  // Calculate height from phaseBoundaries
  $: phaseHeight = (() => {
    const boundary = phaseBoundaries[index];
    return boundary ? `${boundary.end - boundary.start}vh` : '100vh';
  })();

  let element;
  let scrollTrigger;
  let progress = 0;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Make ScrollTrigger available globally for navigation
    // @ts-ignore
    window.ScrollTrigger = ScrollTrigger;

    const boundary = phaseBoundaries[index];
    const phaseHeight = boundary ? (boundary.end - boundary.start) : 100;

    scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: `+=${phaseHeight}vh`,
      pin: true,
      pinSpacing: true,
      scrub: 0.3,
      anticipatePin: 1,
      fastScrollEnd: false,
      preventOverlaps: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        // Update progress directly for smooth animations
        progress = self.progress;

        if (self.isActive) {
          currentPhase.set(index);
          const boundary = phaseBoundaries[index];
          const phaseStart = boundary.start / totalScrollLength;
          const phaseLength = (boundary.end - boundary.start) / totalScrollLength;
          globalProgress.set(phaseStart + self.progress * phaseLength);

          // Update URL hash (debounced by replaceState check)
          updateHash(index, self.progress);
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
  style="height: {phaseHeight};"
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
