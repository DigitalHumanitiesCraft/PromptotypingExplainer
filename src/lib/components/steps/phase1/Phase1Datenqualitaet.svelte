<script>
  import { fade, fly } from 'svelte/transition';
  import GlossaryTerm from '../../GlossaryTerm.svelte';
</script>

<div class="phase1-datenqualitaet" in:fade={{ duration: 400 }}>
  <header class="scene-header" in:fly={{ y: -20, duration: 500 }}>
    <span class="phase-number">Phase 1</span>
    <h2>Nicht alle Daten sind gleich</h2>
  </header>

  <div class="content" in:fade={{ delay: 200, duration: 400 }}>
    <p class="lead">
      Promptotyping funktioniert am besten mit Daten, die <strong>drei Eigenschaften</strong> haben.
    </p>

    <div class="criteria-grid">
      <div class="criterion">
        <h3>Struktur</h3>
        <p>
          Das LLM muss die Datenstruktur erkennen können. <strong>XML, JSON und CSV</strong> sind
          ideal, weil ihre Hierarchien und Felder explizit sind. Freitext-PDFs, Scans oder
          Word-Dokumente erfordern einen zusätzlichen Aufbereitungsschritt, bevor die eigentliche
          Prototypentwicklung beginnen kann.
        </p>
      </div>

      <div class="criterion">
        <h3>Dokumentation</h3>
        <p>
          Ohne Schema-Beschreibung oder README rät das LLM. Dokumentierte Standards wie
          <GlossaryTerm id="tei">TEI</GlossaryTerm>, <GlossaryTerm id="cmif">CMIF</GlossaryTerm>
          oder LIDO liefern nicht nur Struktur, sondern auch <strong>Semantik</strong>. Das LLM
          versteht dann nicht nur <em>dass</em> ein Feld existiert, sondern <em>was</em> es bedeutet.
          Undokumentierte Datenbanken oder proprietäre Formate erzeugen Halluzinationen.
        </p>
      </div>

      <div class="criterion">
        <h3>Zugänglichkeit</h3>
        <p>
          Die Daten müssen tatsächlich vorliegen, nicht nur theoretisch existieren. Ein Archiv,
          das erst digitalisiert werden muss, ein Server ohne API-Zugang, eine Datenbank hinter
          institutionellen Hürden. Diese Probleme müssen in Phase 1 erkannt werden, nicht erst
          wenn der Prototype scheitert.
        </p>
      </div>
    </div>

    <div class="implications">
      <p>
        Wenn die Ausgangsdaten diese Kriterien nicht erfüllen, verschiebt sich die Arbeit.
        Statt Interface-Entwicklung wird <strong>Datenaufbereitung zum Hauptproblem</strong>.
        Das kann sinnvoll sein. Im Lucina-Projekt entstanden aus Word-Dokumenten und PDFs
        über fünf Iterationen TEI-konforme Forschungsdaten. Aber diese Entscheidung muss
        <em>bewusst</em> getroffen werden, nicht zufällig.
      </p>

      <p class="fair-note">
        <GlossaryTerm id="fair">FAIR</GlossaryTerm>-konforme Daten (Wilkinson et al., 2016)
        erfüllen diese Kriterien typischerweise bereits. Wer mit FAIR-Daten startet, spart
        Zeit in Phase 1.
      </p>
    </div>
  </div>
</div>

<style>
  .phase1-datenqualitaet {
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

  .content {
    max-width: 900px;
    line-height: 1.7;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .lead {
    font-size: clamp(1rem, 1.8vw, 1.1rem);
    color: var(--color-black);
    margin: 0 0 var(--space-lg) 0;
    text-align: center;
  }

  .criteria-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-md);
    margin-bottom: var(--space-lg);
  }

  @media (max-width: 768px) {
    .criteria-grid {
      grid-template-columns: 1fr;
    }
  }

  .criterion {
    background: var(--color-cream);
    padding: var(--space-md);
    border-radius: 8px;
    border-top: 3px solid var(--color-terracotta);
  }

  .criterion h3 {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-terracotta);
    margin: 0 0 var(--space-sm) 0;
  }

  .criterion p {
    font-size: 0.9rem;
    color: var(--color-black);
    margin: 0;
    text-align: left;
    line-height: 1.6;
  }

  .implications {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: var(--space-md);
  }

  .implications p {
    font-size: clamp(0.9rem, 1.6vw, 1rem);
    color: var(--color-black);
    margin: 0;
    text-align: left;
  }

  .implications p + p {
    margin-top: var(--space-md);
  }

  .fair-note {
    background: rgba(96, 125, 139, 0.08);
    padding: var(--space-sm) var(--space-md);
    border-radius: 6px;
    border-left: 3px solid var(--color-slate);
  }

  .content strong {
    color: var(--color-terracotta);
    font-weight: 600;
  }

  .content em {
    font-style: italic;
  }
</style>
