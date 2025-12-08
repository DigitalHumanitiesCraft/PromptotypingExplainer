<script>
  import { fade, fly, scale } from 'svelte/transition';
</script>

<div class="phase3-dokumente">
  <h3 in:fade={{ duration: 400 }}>Die Vault-Dokumente</h3>

  <div class="intro-text" in:fade={{ delay: 150, duration: 400 }}>
    <p>
      Der Vault besteht aus strukturierten Markdown-Dokumenten, die das Wissen LLM-optimiert
      aufbereiten. Die drei Kerndokumente bilden den Ausgangspunkt, können aber je nach Domäne
      erweitert werden (SCHEMA.md, VALIDATION.md, API-NOTES.md etc.). Das Prinzip der
      <strong>Context Compression</strong> gilt für alle: maximale Information bei minimaler Token-Anzahl.
    </p>
  </div>

  <div class="documents-grid">
    <div class="document" in:fly={{ y: 30, duration: 500, delay: 300 }}>
      <div class="doc-icon data">
        <span class="doc-ext">.md</span>
      </div>
      <div class="doc-content">
        <h4>DATA.md</h4>
        <p class="doc-question">Was haben wir?</p>
        <ul class="doc-details">
          <li>Schema und Felddefinitionen</li>
          <li>Datentypen und Kardinalitäten</li>
          <li>Beziehungen und referentielle Integrität</li>
          <li>Qualitätsprobleme und Limitationen</li>
        </ul>
      </div>
    </div>

    <div class="document" in:fly={{ y: 30, duration: 500, delay: 450 }}>
      <div class="doc-icon requirements">
        <span class="doc-ext">.md</span>
      </div>
      <div class="doc-content">
        <h4>REQUIREMENTS.md</h4>
        <p class="doc-question">Was wollen wir?</p>
        <ul class="doc-details">
          <li>User Stories als testbare Sätze</li>
          <li>MoSCoW-Priorisierung (MUSS/SOLL/KANN)</li>
          <li>Interface-Spezifikationen</li>
          <li>Akzeptanzkriterien</li>
        </ul>
      </div>
    </div>

    <div class="document" in:fly={{ y: 30, duration: 500, delay: 600 }}>
      <div class="doc-icon context">
        <span class="doc-ext">.md</span>
      </div>
      <div class="doc-content">
        <h4>CONTEXT.md</h4>
        <p class="doc-question">Was wissen wir?</p>
        <ul class="doc-details">
          <li>Forschungsmethodologie und -fragen</li>
          <li>Domänenkonzepte und Terminologie</li>
          <li>Historischer/kultureller Kontext</li>
          <li>Interpretationsrichtlinien</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="testable-box" in:fade={{ delay: 750, duration: 400 }}>
    <h4>Testbare Formulierung</h4>
    <div class="example-row">
      <div class="example correct">
        <span class="label">Korrekt</span>
        <p>"Das System muss Korrespondenzen nach Datum filterbar darstellen."</p>
      </div>
      <div class="example incorrect">
        <span class="label">Falsch</span>
        <p>"Das System soll benutzerfreundlich sein."</p>
        <span class="reason">Zu vage, nicht testbar</span>
      </div>
    </div>
  </div>
</div>

<style>
  .phase3-dokumente {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
    text-align: center;
  }

  h3 {
    color: var(--color-black);
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    margin: 0;
  }

  .intro-text {
    max-width: 750px;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .intro-text p {
    font-size: clamp(0.9rem, 1.6vw, 1rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: left;
    margin: 0;
  }

  .intro-text strong {
    color: var(--color-terracotta);
  }

  .documents-grid {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    width: 100%;
    max-width: 550px;
  }

  .document {
    display: flex;
    align-items: flex-start;
    gap: var(--space-md);
    padding: var(--space-md);
    background: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    text-align: left;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .document:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  .doc-icon {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .doc-icon.data {
    background: linear-gradient(135deg, #607d8b 0%, #455a64 100%);
  }

  .doc-icon.requirements {
    background: linear-gradient(135deg, #bf5b3e 0%, #8b4513 100%);
  }

  .doc-icon.context {
    background: linear-gradient(135deg, #78909c 0%, #546e7a 100%);
  }

  .doc-ext {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: white;
    font-weight: 600;
  }

  .doc-content {
    flex: 1;
  }

  .doc-content h4 {
    font-family: var(--font-mono);
    font-size: 0.95rem;
    color: var(--color-black);
    margin: 0;
  }

  .doc-question {
    font-size: 0.8rem;
    color: var(--color-terracotta);
    font-style: italic;
    margin: 2px 0 var(--space-xs) 0;
  }

  .doc-details {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 0.8rem;
    color: var(--color-slate);
    line-height: 1.5;
  }

  .doc-details li {
    padding-left: var(--space-sm);
    position: relative;
  }

  .doc-details li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--color-slate);
  }

  .testable-box {
    max-width: 600px;
    width: 100%;
    background: rgba(191, 91, 62, 0.06);
    padding: var(--space-md) var(--space-lg);
    border-radius: 8px;
    border-left: 3px solid var(--color-terracotta);
    text-align: left;
  }

  .testable-box h4 {
    font-size: 0.85rem;
    color: var(--color-terracotta);
    margin: 0 0 var(--space-sm) 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .example-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-sm);
  }

  .example {
    padding: var(--space-sm);
    border-radius: 6px;
  }

  .example.correct {
    background: rgba(76, 175, 80, 0.1);
  }

  .example.incorrect {
    background: rgba(244, 67, 54, 0.1);
  }

  .example .label {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    display: block;
    margin-bottom: 4px;
  }

  .example.correct .label {
    color: #4caf50;
  }

  .example.incorrect .label {
    color: #f44336;
  }

  .example p {
    font-size: 0.8rem;
    color: var(--color-black);
    margin: 0;
    line-height: 1.4;
  }

  .example .reason {
    font-size: 0.7rem;
    color: #f44336;
    display: block;
    margin-top: 4px;
    font-style: italic;
  }

  @media (max-width: 767px) {
    .documents-grid {
      max-width: 100%;
    }

    .document {
      padding: var(--space-sm);
    }

    .doc-icon {
      width: 40px;
      height: 40px;
    }

    .example-row {
      grid-template-columns: 1fr;
    }
  }
</style>
