<script>
  import { onMount } from 'svelte';
  import { currentStep, currentPhase } from '../stores/scroll.js';

  export let id;
  export let phaseIndex;
  export let stepIndex;

  let element;

  onMount(() => {
    // IntersectionObserver to detect when step is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            currentStep.set(stepIndex);
            currentPhase.set(phaseIndex);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  });
</script>

<section
  bind:this={element}
  {id}
  class="step"
  data-phase={phaseIndex}
  data-step={stepIndex}
>
  <div class="step-content">
    <slot />
  </div>
</section>

<style>
  .step {
    min-height: 100dvh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    scroll-snap-align: center;
    scroll-snap-stop: normal;
    position: relative;
    /* Offset for navigation */
    padding-right: 220px;
    padding-left: 40px;
  }

  .step-content {
    width: 100%;
    max-width: 1000px;
    padding: var(--space-lg) var(--space-md);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-lg);
  }

  /* Tablet */
  @media (max-width: 1100px) {
    .step {
      padding-right: 200px;
      padding-left: 32px;
    }
  }

  /* Mobile */
  @media (max-width: 767px) {
    .step {
      padding-right: var(--space-md);
      padding-left: var(--space-md);
      padding-bottom: 100px; /* Space for bottom nav */
    }

    .step-content {
      padding: var(--space-md);
    }
  }
</style>
