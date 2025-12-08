<script>
  import { fade, fly } from 'svelte/transition';
  import GlossaryTerm from '../../GlossaryTerm.svelte';
</script>

<div class="phase1-datenqualitaet" in:fade={{ duration: 400 }}>
  <header class="scene-header" in:fly={{ y: -20, duration: 500 }}>
    <span class="phase-number">Phase 1</span>
    <h2>Mit den "guten" Forschungsdaten geht es besser</h2>
  </header>

  <div class="content" in:fade={{ delay: 200, duration: 400 }}>
    <p class="lead">
      Promptotyping funktioniert am besten mit Daten, die <strong>zwei Anforderungen</strong> erfüllen.
    </p>

    <div class="criteria-grid">
      <div class="criterion">
        <h3>Syntax & Tokens</h3>
        <p>
          Das LLM muss die Datenstruktur erkennen können. <strong>Tokeneffizienz</strong> ist
          entscheidend. Markdown und JSON sind ideal, XML benötigt durch seine Syntax deutlich
          mehr Tokens. <strong>CSV statt Excel</strong> (Excel ist intern ein großes XML-Dokument),
          <strong>LaTeX statt PDF</strong> (besonders bei Formeln, PDF ist grundsätzlich ein
          schlechtes Format für LLMs). Für den programmatischen Output eignen sich dann XML, RDF,
          CSV oder andere algorithmisch verarbeitbare Formate.
        </p>
      </div>

      <div class="criterion">
        <h3>Semantik & Kontext</h3>
        <p>
          Ohne Schema-Beschreibung oder README rät das LLM. Dokumentierte Standards wie
          <GlossaryTerm id="tei">TEI</GlossaryTerm>, <GlossaryTerm id="cmif">CMIF</GlossaryTerm>
          oder LIDO liefern nicht nur Struktur, sondern auch <strong>Bedeutung</strong>. Das LLM
          versteht dann nicht nur <em>dass</em> ein Feld existiert, sondern <em>was</em> es bedeutet.
          Alternativ kann man sich <strong>Pseudo-Semantik in Markdown</strong> erzeugen lassen,
          etwa eine Ontologie in eigener Notation statt OWL/RDF.
        </p>
      </div>
    </div>

    <div class="implications">
      <p>
        Wenn die Ausgangsdaten diese Kriterien nicht erfüllen, verschiebt sich die Arbeit.
        Statt Interface-Entwicklung wird <strong>Datenaufbereitung und Modellierung zum Hauptproblem</strong>.
        Das kann sinnvoll sein. Im Lucina-Projekt entstanden aus Word-Dokumenten und PDFs
        TEI-konforme Forschungsdaten. Promptotyping eignet sich auch für diese Datenaufbereitung.
      </p>

      <p class="fair-note">
        <GlossaryTerm id="fair">FAIR</GlossaryTerm>-konforme Daten (Wilkinson et al., 2016)
        erfüllen diese Kriterien typischerweise. <em>Findable</em> bedeutet Auffindbarkeit, <em>Accessible</em> bedeutet
        Zugänglichkeit. <em>Interoperable</em> bedeutet dokumentierte Standards. <em>Reusable</em>
        setzt Struktur voraus. Wer mit FAIR-Daten startet, hat die Voraussetzungen für Promptotyping
        bereits erfüllt.
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
    grid-template-columns: repeat(2, 1fr);
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
