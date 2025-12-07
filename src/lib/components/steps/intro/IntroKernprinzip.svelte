<script>
  import DeepDiveTrigger from '../../elements/DeepDiveTrigger.svelte';
  import { openDeepDive } from '../../../stores/deepDive.js';

  function handleDeepDive(event) {
    openDeepDive(event.detail.id);
  }
</script>

<div class="intro-kernprinzip">
  <div class="content">
    <h3>Co-Intelligence</h3>

    <p class="intro-text">
      Promptotyping basiert auf dem Konzept der <strong>Co-Intelligence</strong> nach Ethan Mollick (2024),
      der produktiven Zusammenarbeit zwischen menschlicher Expertise und KI-Fähigkeiten.
      Dabei unterscheiden wir zwei Arbeitsmodi.
    </p>

    <div class="mode-cards">
      <div class="mode-card centaur">
        <h4>Centaur-Arbeit</h4>
        <p>
          Klare Aufgabenteilung zwischen Mensch und KI. Der Mensch definiert Anforderungen
          und Qualitätskriterien, die KI führt technische Implementierung aus. Ideal für
          strukturierte Phasen wie die Dokumenterstellung.
        </p>
      </div>
      <div class="mode-card cyborg">
        <h4>Cyborg-Arbeit</h4>
        <p>
          Fließende, verschränkte Zusammenarbeit auf Satzebene. Mensch und KI arbeiten
          eng verzahnt, Ideen entstehen im Dialog. Charakteristisch für explorative
          Phasen und kreative Iteration.
        </p>
      </div>
    </div>

    <p class="foundation-note">
      LLMs sind <em>"Strange New Minds"</em> (Summerfield, 2025), weder reine Werkzeuge
      noch echte Intelligenz. Sie sind "halluzinierende Reasoner", statistische Mustermaschinen,
      die überzeugende Outputs produzieren, ohne deren Wahrheit validieren zu können.
      Externe Verifikation durch Domänenexpert:innen bleibt notwendig.
    </p>

    <div class="deep-dive-triggers">
      <DeepDiveTrigger
        label="Co-Intelligence"
        deepDiveId="co-intelligence"
        on:open={handleDeepDive}
      />
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
    </div>
  </div>
</div>

<style>
  .intro-kernprinzip {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
    max-width: 850px;
  }

  h3 {
    font-size: clamp(1.25rem, 2.5vw, 1.5rem);
    color: var(--color-black);
    margin: 0;
    text-align: center;
  }

  .intro-text {
    font-size: clamp(0.95rem, 1.6vw, 1.05rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: justify;
    max-width: 700px;
    margin: 0;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .intro-text strong {
    color: var(--color-terracotta);
  }

  .mode-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
    width: 100%;
  }

  .mode-card {
    background: white;
    border-radius: 8px;
    padding: var(--space-lg);
    border: 1px solid rgba(96, 125, 139, 0.2);
    text-align: left;
  }

  .mode-card.centaur {
    border-top: 3px solid var(--color-slate);
  }

  .mode-card.cyborg {
    border-top: 3px solid var(--color-terracotta);
  }

  .mode-card h4 {
    font-size: 1rem;
    margin: 0 0 var(--space-sm);
    color: var(--color-black);
  }

  .mode-card p {
    font-size: 0.9rem;
    color: var(--color-slate);
    line-height: 1.6;
    margin: 0;
  }

  .foundation-note {
    font-size: clamp(0.9rem, 1.5vw, 0.95rem);
    color: var(--color-slate);
    line-height: 1.6;
    max-width: 700px;
    text-align: justify;
    margin: 0;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
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

  @media (max-width: 767px) {
    .mode-cards {
      grid-template-columns: 1fr;
    }
  }
</style>
