<script>
  import { fade, fly, scale } from 'svelte/transition';
</script>

<div class="outro-zusammenfassung">
  <h3 in:fade={{ duration: 400 }}>Zusammenfassung</h3>

  <div class="text-card" in:fly={{ y: 20, duration: 500, delay: 200 }}>
    <p>
      <span class="promptotyping">Promptotyping</span> strukturiert die Zusammenarbeit zwischen Forscher:innen und LLMs
      durch einen vierphasigen Prozess: Materialsammlung, explorative Analyse, Wissensdestillation
      im <span class="promptotyping">Promptotyping</span> Vault, und iterative Implementation.
    </p>
    <p>
      Der <span class="promptotyping">Promptotyping</span> Vault besteht aus drei <strong>Promptotyping Documents</strong>
      (DATA.md, REQUIREMENTS.md, CONTEXT.md) – sie machen implizites Domänenwissen für LLMs nutzbar
      und wachsen mit jeder Iteration.
    </p>
    <p>
      <strong>Critical Expert in the Loop</strong>: Domänenexpert:innen bleiben unverzichtbar.
      Sie validieren Outputs, erkennen Halluzinationen und steuern die fachliche Qualität.
    </p>
  </div>

  <div class="cta" in:scale={{ duration: 400, delay: 600 }}>
    <p class="final-text">Vom Wissen zum Werkzeug.</p>
    <div class="cta-links">
      <a
        href="https://github.com/DigitalHumanitiesCraft/CorrespExplorer"
        target="_blank"
        rel="noopener"
        class="cta-btn"
      >
        GitHub Repository
      </a>
      <a
        href="https://dhcraft.org/CorrespExplorer"
        target="_blank"
        rel="noopener"
        class="cta-btn cta-btn-secondary"
      >
        Live Demo
      </a>
    </div>
  </div>
</div>

<style>
  .outro-zusammenfassung {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xl);
    text-align: center;
  }

  h3 {
    color: var(--color-black);
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin: 0;
  }

  .text-card {
    max-width: 700px;
  }

  .cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);
  }

  .final-text {
    font-size: clamp(1.25rem, 3vw, 1.5rem);
    color: var(--color-terracotta);
    font-weight: 600;
    margin: 0;
  }

  .cta-links {
    display: flex;
    gap: var(--space-md);
    flex-wrap: wrap;
    justify-content: center;
  }

  .cta-btn {
    display: inline-block;
    padding: var(--space-sm) var(--space-lg);
    background: var(--color-terracotta);
    color: var(--color-white);
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(191, 91, 62, 0.3);
  }

  .cta-btn-secondary {
    background: transparent;
    color: var(--color-terracotta);
    border: 2px solid var(--color-terracotta);
  }

  .cta-btn-secondary:hover {
    background: rgba(191, 91, 62, 0.1);
    box-shadow: none;
  }

  @media (max-width: 767px) {
    .cta-links {
      flex-direction: column;
      width: 100%;
      max-width: 250px;
    }
  }
</style>
