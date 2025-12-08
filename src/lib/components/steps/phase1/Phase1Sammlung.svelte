<script>
  import { fade } from 'svelte/transition';
</script>

<div class="phase1-sammlung">
  <h3 in:fade={{ duration: 400 }}>Materialsammlung abgeschlossen</h3>

  <div class="explanation-block" in:fade={{ delay: 150, duration: 400 }}>
    <p>
      Mit dem Abschluss der Materialsammlung ist die Basis für alle weiteren Phasen gelegt.
      Die gesammelten Materialien werden in dieser Phase <strong>noch nicht strukturiert oder destilliert</strong> –
      das geschieht erst in Phase 3 (Destillation). Hier geht es um Vollständigkeit.
    </p>
    <p>
      Fehlende Materialien führen später zu Lücken im Vault und damit zu unpräzisen LLM-Outputs.
      Bevor die explorative Analyse beginnt, sollten alle relevanten Datenquellen, Dokumentationen
      und Kontextinformationen vorliegen. Der Grundsatz: Lieber zu viel sammeln als zu wenig –
      Irrelevantes kann später ausgeschlossen werden.
    </p>
  </div>

  <div class="quality-criteria" in:fade={{ delay: 300, duration: 400 }}>
    <h4>Bereitschaftskriterien für Phase 2</h4>
    <ul>
      <li><strong>Datenquellen:</strong> Alle verfügbaren Forschungsdaten identifiziert und zugänglich</li>
      <li><strong>Dokumentation:</strong> Standards, Schemata und Richtlinien gesammelt</li>
      <li><strong>Kontextwissen:</strong> Expertengespräche geführt, Notizen erstellt</li>
      <li><strong>Forschungsfragen:</strong> Erste Fragestellungen formuliert (können sich noch ändern)</li>
    </ul>
  </div>
</div>

<style>
  .phase1-sammlung {
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

  .explanation-block {
    max-width: 700px;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .explanation-block p {
    font-size: clamp(0.9rem, 1.6vw, 1rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: left;
    margin: 0;
  }

  .explanation-block p + p {
    margin-top: var(--space-md);
  }

  .explanation-block strong {
    color: var(--color-terracotta);
  }

  .quality-criteria {
    max-width: 600px;
    background: rgba(191, 91, 62, 0.06);
    padding: var(--space-md) var(--space-lg);
    border-radius: 8px;
    border-left: 3px solid var(--color-terracotta);
    text-align: left;
  }

  .quality-criteria h4 {
    font-size: 0.85rem;
    color: var(--color-terracotta);
    margin: 0 0 var(--space-sm) 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .quality-criteria ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  .quality-criteria li {
    font-size: 0.85rem;
    color: var(--color-black);
    line-height: 1.5;
    padding-left: var(--space-sm);
    border-left: 2px solid transparent;
  }

  .quality-criteria li strong {
    color: var(--color-slate);
  }

  </style>
