<script>
  import { fade, fly, scale } from 'svelte/transition';
  import DeepDiveTrigger from '../../elements/DeepDiveTrigger.svelte';
  import { openDeepDive } from '../../../stores/deepDive.js';

  function handleDeepDive(event) {
    openDeepDive(event.detail.id);
  }
</script>

<div class="outro-zusammenfassung">
  <h3 in:fade={{ duration: 400 }}>Promptotyping</h3>

  <blockquote in:fly={{ y: 20, duration: 500, delay: 200 }}>
    Das Mapping von semantisch reichhaltigen Forschungsdaten und explizitem
    Forschungskontext auf funktionale Interfaces durch iterative
    Mensch-LLM-Kollaboration.
  </blockquote>

  <div class="imperatives">
    <div class="imperative" in:fly={{ y: 20, duration: 400, delay: 400 }}>
      <div class="imp-icon">1</div>
      <h4>Epistemische Wachsamkeit</h4>
      <p>Jede LLM-Nutzung reflektiert ihre Implikationen</p>
    </div>
    <div class="imperative" in:fly={{ y: 20, duration: 400, delay: 500 }}>
      <div class="imp-icon">2</div>
      <h4>Methodische Transparenz</h4>
      <p>Nachvollziehbare Dokumentation aller Entscheidungen</p>
    </div>
    <div class="imperative" in:fly={{ y: 20, duration: 400, delay: 600 }}>
      <div class="imp-icon">3</div>
      <h4>Kritische Solidarität</h4>
      <p>Die Community entwickelt gemeinsam Standards</p>
    </div>
  </div>

  <div class="limitations-trigger" in:fade={{ delay: 700, duration: 400 }}>
    <DeepDiveTrigger
      label="Kritische Reflexion: Grenzen der Methode"
      deepDiveId="limitations"
      variant="block"
      on:open={handleDeepDive}
    />
  </div>

  <div class="cta" in:scale={{ duration: 400, delay: 800 }}>
    <p class="final-text">Vom Wissen zum Werkzeug.</p>
    <a
      href="https://github.com/DigitalHumanitiesCraft/CorrespExplorer"
      target="_blank"
      rel="noopener"
      class="cta-btn"
    >
      CorrespExplorer auf GitHub erkunden
    </a>
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

  blockquote {
    font-size: clamp(0.95rem, 1.8vw, 1.1rem);
    color: var(--color-black);
    font-style: italic;
    line-height: 1.7;
    border-left: 3px solid var(--color-terracotta);
    padding: var(--space-lg);
    padding-left: var(--space-md);
    margin: 0;
    max-width: 700px;
    text-align: justify;
    background: white;
    border-radius: 0 8px 8px 0;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .imperatives {
    display: flex;
    gap: var(--space-md);
    max-width: 700px;
    width: 100%;
  }

  .imperative {
    flex: 1;
    text-align: center;
    padding: var(--space-md);
    background: rgba(255, 255, 255, 0.9);
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    border-top: 3px solid var(--color-terracotta);
  }

  .imp-icon {
    width: 32px;
    height: 32px;
    background: var(--color-terracotta);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.9rem;
    margin: 0 auto var(--space-sm) auto;
  }

  .imperative h4 {
    font-size: 0.85rem;
    color: var(--color-black);
    margin: 0 0 var(--space-xs) 0;
  }

  .imperative p {
    font-size: 0.75rem;
    color: var(--color-slate);
    line-height: 1.4;
    margin: 0;
  }

  .limitations-trigger {
    max-width: 400px;
    width: 100%;
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

  .cta-btn {
    display: inline-block;
    padding: var(--space-sm) var(--space-lg);
    background: var(--color-terracotta);
    color: var(--color-white);
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(191, 91, 62, 0.3);
  }

  @media (max-width: 767px) {
    .imperatives {
      flex-direction: column;
    }

    .imperative {
      padding: var(--space-sm);
    }
  }
</style>
