<script>
  import DeepDiveTrigger from '../../elements/DeepDiveTrigger.svelte';
  import { openDeepDive } from '../../../stores/deepDive.js';

  function handleDeepDive(event) {
    openDeepDive(event.detail.id);
  }
</script>

<div class="intro-kernprinzip">
  <div class="content">
    <p class="core-concept">
      <strong>Das Kernprinzip:</strong> Das Mapping von semantisch reichhaltigen
      Forschungsdaten und explizitem Forschungskontext auf funktionale Interfaces
      durch iterative Mensch-LLM-Kollaboration.
    </p>

    <p class="foundation-note">
      LLMs sind <em>"Strange New Minds"</em> (Summerfield, 2025) – weder reine Werkzeuge
      noch echte Intelligenz. Um produktiv mit ihnen zu arbeiten, müssen wir verstehen,
      <strong>wie</strong> sie funktionieren: als statistische Mustermaschinen, die
      halluzinieren können und externe Validierung brauchen.
    </p>

    <div class="deep-dive-triggers">
      <DeepDiveTrigger
        label="System 1.42 – LLM-Grundlagen"
        deepDiveId="system-1-42"
        on:open={handleDeepDive}
      />
      <DeepDiveTrigger
        label="Scholar-Centered Design"
        deepDiveId="scholar-centered-design"
        on:open={handleDeepDive}
      />
      <DeepDiveTrigger
        label="Knowledge Acquisition"
        deepDiveId="knowledge-acquisition"
        on:open={handleDeepDive}
      />
    </div>
  </div>
</div>

<style>
  .intro-kernprinzip {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xl);
    max-width: 700px;
  }

  .core-concept {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: var(--color-black);
    line-height: 1.7;
    background: rgba(191, 91, 62, 0.08);
    padding: var(--space-lg) var(--space-xl);
    border-radius: 8px;
    border-left: 4px solid var(--color-terracotta);
    margin: 0;
  }

  .core-concept strong {
    color: var(--color-terracotta);
    display: block;
    margin-bottom: var(--space-sm);
    font-size: 1.1em;
  }

  .foundation-note {
    font-size: clamp(0.9rem, 1.5vw, 1rem);
    color: var(--color-slate);
    line-height: 1.6;
    max-width: 600px;
    text-align: center;
    margin: 0;
  }

  .foundation-note em {
    color: var(--color-terracotta);
    font-style: normal;
    font-weight: 600;
  }

  .deep-dive-triggers {
    display: flex;
    gap: var(--space-md);
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
