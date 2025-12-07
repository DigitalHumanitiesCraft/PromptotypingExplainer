<script>
  import DeepDiveTrigger from '../../elements/DeepDiveTrigger.svelte';
  import { openDeepDive } from '../../../stores/deepDive.js';

  function handleDeepDive(event) {
    openDeepDive(event.detail.id);
  }
</script>

<div class="intro-kernprinzip">
  <div class="content">
    <h3>Co-Intelligence & "Strange New Minds"</h3>

    <div class="main-layout">
      <div class="text-card">
        <p>
          LLMs sind <em>"Strange New Minds"</em> (Summerfield, 2025), weder reine Werkzeuge
          noch echte Intelligenz. Sie sind statistische Mustermaschinen, die überzeugende
          Outputs produzieren, ohne deren Wahrheit validieren zu können. Diese "halluzinierenden
          Reasoner" erfordern externe Verifikation durch Domänenexpert:innen.
        </p>
        <p>
          Promptotyping nutzt das Konzept der <strong>Co-Intelligence</strong> nach Ethan Mollick (2024)
          für die produktive Zusammenarbeit zwischen menschlicher Expertise und KI-Fähigkeiten.
          Dabei wechseln wir zwischen zwei Modi. <strong>Centaur-Arbeit</strong> mit klarer Aufgabenteilung
          eignet sich für strukturierte Phasen wie die Dokumenterstellung. <strong>Cyborg-Arbeit</strong>
          mit fließender Zusammenarbeit auf Satzebene ist charakteristisch für explorative Phasen
          und kreative Iteration.
        </p>
        <p class="learn-more">
          Mehr über die theoretischen Grundlagen von LLMs in der
          <a href="https://chpollin.github.io/llmdh/" target="_blank" rel="noopener noreferrer">
            LLM Summer School for DH
          </a>.
        </p>
      </div>

      <div class="image-placeholder">
        <div class="placeholder-box">
          <span class="placeholder-icon">🖼️</span>
          <span class="placeholder-text">Bild</span>
        </div>
        <p class="image-caption">
          Weder Werkzeug noch Geist. LLMs als fremdartige Intelligenz,
          die menschliche Verifikation erfordert.
        </p>
      </div>
    </div>

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
    max-width: 950px;
  }

  h3 {
    font-size: clamp(1.25rem, 2.5vw, 1.5rem);
    color: var(--color-black);
    margin: 0;
    text-align: center;
  }

  .main-layout {
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: var(--space-xl);
    width: 100%;
    align-items: start;
  }

  .text-card {
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .text-card p {
    font-size: clamp(0.9rem, 1.5vw, 0.95rem);
    color: var(--color-slate);
    line-height: 1.7;
    text-align: justify;
    margin: 0;
  }

  .text-card p + p {
    margin-top: var(--space-md);
  }

  .text-card em {
    color: var(--color-terracotta);
    font-style: normal;
    font-weight: 600;
  }

  .text-card strong {
    color: var(--color-terracotta);
  }

  .text-card .learn-more {
    font-size: 0.85rem;
    padding-top: var(--space-sm);
    border-top: 1px solid rgba(96, 125, 139, 0.15);
    margin-top: var(--space-md);
  }

  .text-card .learn-more a {
    color: var(--color-terracotta);
    font-weight: 600;
    text-decoration: none;
  }

  .text-card .learn-more a:hover {
    text-decoration: underline;
  }

  .image-placeholder {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .placeholder-box {
    background: rgba(96, 125, 139, 0.08);
    border: 2px dashed rgba(96, 125, 139, 0.3);
    border-radius: 8px;
    aspect-ratio: 3 / 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-xs);
  }

  .placeholder-icon {
    font-size: 2rem;
    opacity: 0.5;
  }

  .placeholder-text {
    font-size: 0.8rem;
    color: var(--color-slate);
    opacity: 0.5;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .image-caption {
    font-size: 0.8rem;
    color: var(--color-slate);
    line-height: 1.5;
    text-align: center;
    font-style: italic;
    margin: 0;
  }

  .deep-dive-triggers {
    display: flex;
    gap: var(--space-md);
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 767px) {
    .main-layout {
      grid-template-columns: 1fr;
    }

    .image-placeholder {
      order: -1;
    }

    .placeholder-box {
      aspect-ratio: 16 / 9;
    }
  }
</style>
