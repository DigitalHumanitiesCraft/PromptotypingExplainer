<script>
  import { fade, fly } from 'svelte/transition';
  import GlossaryTerm from '../../GlossaryTerm.svelte';
  import explorationImg from '../../../../assets/images/exploration.png';
</script>

<div class="phase2-exploration" in:fade={{ duration: 400 }}>
  <header class="scene-header" in:fly={{ y: -20, duration: 500 }}>
    <span class="phase-number">Phase 2</span>
    <h2>Exploration</h2>
    <p class="subtitle">Daten-Kontext-Relationen</p>
  </header>

  <div class="content-block" in:fade={{ delay: 200, duration: 400 }}>
    <p class="lead">
      Die Explorationsphase ist eine systematische Sondierung der Schnittstelle zwischen Rohdaten
      und Forschungskontext. Die zentrale Frage: <strong>Lässt sich die abstrakte Forschungsfrage
      konkret auf diese Datenstruktur abbilden?</strong> Diese Phase produziert bewusst keine formalen
      Dokumente – das Ergebnis ist Wissen, nicht Artefakte.
    </p>

    <p>
      Das Wissen umfasst: Datenqualität und ihre Grenzen, technische Machbarkeit von Visualisierungen,
      und die Validität potentieller User Stories. Dieses destillierte Wissen ist zwingende
      Voraussetzung für die Präzision in Phase 3. Wichtig: <strong>Sackgassen sind positive Erkenntnisse,
      keine Fehler.</strong> Zu verstehen, was die Daten nicht hergeben, ist genauso wertvoll wie
      zu wissen, was möglich ist.
    </p>

    <div class="key-point">
      <span class="key-label">Ziel</span>
      <p><strong>Validierung der Machbarkeit</strong>: Geben die Daten das her, was der Forschungskontext verlangt?</p>
    </div>

    <div class="user-story-box">
      <div class="box-label">User Story Format</div>
      <p>
        User Stories folgen dem Format: <em>"Als [Rolle] will ich [Funktion], um [Nutzen] zu erreichen."</em>
      </p>
      <p class="example">
        Beispiel: "Als Historikerin will ich Korrespondenznetzwerke nach Zeitraum filtern,
        um Kommunikationsmuster in Exilgemeinschaften zu rekonstruieren."
      </p>
      <p class="validation">
        Die Exploration prüft: Können wir diese Story mit den vorhandenen Daten realisieren?
        Welche Felder tragen die Filterlogik? Sind die Relationen vollständig genug?
      </p>
    </div>

    <div class="example-box">
      <div class="example-label">Typische Explorationsfragen</div>
      <p class="example-text">
        "Lässt sich diese Netzwerkanalyse mit den vorhandenen Relationen umsetzen?"<br><br>
        "Welche Felder in der XML-Struktur tragen die gewünschte Filterlogik?"<br><br>
        "Sind die Datumsangaben konsistent genug für eine Timeline-Visualisierung?"
      </p>
    </div>
  </div>

  <figure class="exploration-visual" in:fly={{ y: 30, duration: 500, delay: 400 }}>
    <img src={explorationImg} alt="Sondierung der Daten-Kontext-Schnittstelle" />
  </figure>
</div>

<style>
  .phase2-exploration {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
    text-align: center;
  }

  .scene-header {
    text-align: center;
  }

  .phase-number {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-terracotta);
    font-weight: 600;
  }

  h2 {
    color: var(--color-black);
    margin: var(--space-xs) 0;
  }

  .subtitle {
    color: var(--color-slate);
    margin: 0;
    font-style: italic;
  }

  .content-block {
    max-width: 750px;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .lead {
    font-size: clamp(0.9rem, 1.6vw, 1rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: left;
    margin: 0;
  }

  .content-block p {
    font-size: clamp(0.9rem, 1.6vw, 1rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: left;
    margin: 0;
  }

  .content-block p + p {
    margin-top: var(--space-md);
  }

  .lead strong,
  .content-block strong {
    color: var(--color-terracotta);
  }

  .key-point {
    background: rgba(191, 91, 62, 0.08);
    border-left: 3px solid var(--color-terracotta);
    padding: var(--space-md);
    border-radius: 0 8px 8px 0;
    text-align: left;
    margin-top: var(--space-md);
  }

  .key-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-terracotta);
    font-weight: 600;
  }

  .key-point p {
    margin: var(--space-xs) 0 0 0 !important;
    font-size: 0.95rem !important;
  }

  .key-point strong {
    color: var(--color-terracotta);
  }

  .user-story-box {
    background: rgba(96, 125, 139, 0.06);
    border-left: 3px solid var(--color-slate);
    padding: var(--space-md);
    border-radius: 0 8px 8px 0;
    text-align: left;
    margin-top: var(--space-md);
  }

  .box-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-slate);
    margin-bottom: var(--space-xs);
    font-weight: 600;
  }

  .user-story-box p {
    font-size: 0.9rem !important;
    margin: 0 !important;
  }

  .user-story-box em {
    font-style: italic;
    color: var(--color-terracotta);
  }

  .user-story-box .example {
    font-family: var(--font-mono);
    font-size: 0.8rem !important;
    background: rgba(255, 255, 255, 0.7);
    padding: var(--space-xs) var(--space-sm);
    border-radius: 4px;
    margin-top: var(--space-sm) !important;
  }

  .user-story-box .validation {
    margin-top: var(--space-sm) !important;
    font-size: 0.85rem !important;
    color: var(--color-slate) !important;
  }

  .example-box {
    background: rgba(96, 125, 139, 0.08);
    border-left: 3px solid var(--color-slate);
    padding: var(--space-md);
    border-radius: 0 8px 8px 0;
    text-align: left;
    margin-top: var(--space-md);
  }

  .example-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-slate);
    margin-bottom: var(--space-xs);
    font-weight: 600;
  }

  .example-text {
    font-family: var(--font-mono);
    font-size: 0.8rem !important;
    color: var(--color-black) !important;
    margin: 0 !important;
    line-height: 1.6;
  }

  .exploration-visual {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    margin: 0;
    max-width: 100%;
  }

  .exploration-visual img {
    max-width: min(500px, 85vw);
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 767px) {
    .exploration-visual img {
      max-width: 95vw;
    }

    .example-text {
      font-size: 0.75rem !important;
    }
  }
</style>
