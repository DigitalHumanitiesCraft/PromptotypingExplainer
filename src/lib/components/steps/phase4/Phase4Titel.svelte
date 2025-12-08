<script>
  import { fade, fly } from 'svelte/transition';
</script>

<div class="phase4-titel">
  <header class="scene-header" in:fly={{ y: -20, duration: 500 }}>
    <span class="phase-number">Phase 4</span>
    <h2>Implementation</h2>
    <p class="subtitle">Iterative Entwicklung</p>
  </header>

  <div class="content-block" in:fade={{ delay: 200, duration: 400 }}>
    <p>
      Mit der Übergabe des Vault an das LLM beginnt die <strong>Cyborg-Arbeit</strong>. Im Unterschied
      zur Centaur-Arbeit (klare Aufgabenteilung) bedeutet Cyborg-Arbeit enge kognitive Verschränkung:
      Mensch und Maschine entwickeln in iterativen Dialogschleifen gemeinsam Lösungen. Die Grenze
      zwischen menschlichem und maschinellem Beitrag verschwimmt bewusst.
    </p>

    <p>
      Jede Iteration folgt demselben Muster: Der Vault (oder eine gezielte Auswahl relevanter Dokumente)
      wird dem LLM als Kontext mitgegeben. Das LLM generiert einen Prototype, der Critical Expert
      validiert das Ergebnis, und neues Wissen fließt zurück in den Vault. Dieser Zyklus wiederholt
      sich bis zur gewünschten Qualität.
    </p>

    <div class="cycle-preview" in:fly={{ y: 20, duration: 400, delay: 400 }}>
      <div class="cycle-step">
        <span class="cycle-icon">1</span>
        <span class="cycle-label">Prompt + Vault</span>
      </div>
      <div class="cycle-arrow">→</div>
      <div class="cycle-step">
        <span class="cycle-icon">2</span>
        <span class="cycle-label">LLM generiert</span>
      </div>
      <div class="cycle-arrow">→</div>
      <div class="cycle-step">
        <span class="cycle-icon">3</span>
        <span class="cycle-label">Expert validiert</span>
      </div>
    </div>
  </div>

  <div class="output-box" in:fade={{ delay: 500, duration: 400 }}>
    <h4>Typischer Output</h4>
    <p>
      Single HTML File mit inline CSS/JS, keine externen Dependencies außer CDN-verfügbare Bibliotheken,
      kommentierter Code an kritischen Stellen für spätere Wartung und Anpassung.
    </p>
  </div>
</div>

<style>
  .phase4-titel {
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
  }

  .content-block {
    max-width: 750px;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .content-block p {
    font-size: clamp(0.9rem, 1.6vw, 1rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: justify;
    margin: 0;
  }

  .content-block p + p {
    margin-top: var(--space-md);
  }

  .content-block strong {
    color: var(--color-terracotta);
  }

  .cycle-preview {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-sm);
    flex-wrap: wrap;
    margin-top: var(--space-lg);
  }

  .cycle-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-sm) var(--space-md);
    background: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    min-width: 100px;
  }

  .cycle-icon {
    width: 28px;
    height: 28px;
    background: var(--color-terracotta);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 0.85rem;
  }

  .cycle-label {
    font-size: 0.8rem;
    color: var(--color-slate);
    font-weight: 500;
  }

  .cycle-arrow {
    color: var(--color-slate);
    font-size: 1.2rem;
    opacity: 0.5;
  }

  .output-box {
    max-width: 600px;
    background: rgba(96, 125, 139, 0.06);
    padding: var(--space-md) var(--space-lg);
    border-radius: 8px;
    border-left: 3px solid var(--color-slate);
    text-align: left;
  }

  .output-box h4 {
    font-size: 0.85rem;
    color: var(--color-slate);
    margin: 0 0 var(--space-xs) 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .output-box p {
    font-size: 0.85rem;
    color: var(--color-black);
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 767px) {
    .cycle-preview {
      flex-direction: column;
    }

    .cycle-arrow {
      transform: rotate(90deg);
    }
  }
</style>
