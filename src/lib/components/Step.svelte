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
    scroll-snap-align: start;
    scroll-snap-stop: always;
    position: relative;
  }

  .step-content {
    width: 100%;
    max-width: 1200px;
    padding: var(--space-xl) var(--space-lg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-xl);
  }

  @media (max-width: 767px) {
    .step-content {
      padding: var(--space-lg) var(--space-md);
    }
  }
</style>
