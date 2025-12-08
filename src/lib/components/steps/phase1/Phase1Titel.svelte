<script>
  import { fade, fly } from 'svelte/transition';
  import DeepDiveTrigger from '../../elements/DeepDiveTrigger.svelte';
  import GlossaryTerm from '../../GlossaryTerm.svelte';
  import correspexplorerImg from '../../../../assets/images/correspexplorer.png';
  import lucinaImg from '../../../../assets/images/lucina.png';
</script>

<div class="phase1-titel" in:fade={{ duration: 400 }}>
  <header class="scene-header" in:fly={{ y: -20, duration: 500 }}>
    <span class="phase-number">Phase 1</span>
    <h2>Preparation</h2>
    <p class="subtitle">Materialsammlung</p>
  </header>

  <div class="content" in:fade={{ delay: 200, duration: 400 }}>
    <p>
      In der Preparation-Phase werden <strong>alle relevanten Rohmaterialien zusammengetragen</strong>,
      bevor technische Entscheidungen getroffen werden. Diese Sammlung umfasst Forschungsdaten in
      verschiedenen Formaten, Dokumentation zu Standards und Datenmodellen, erste Forschungsfragen
      und implizites Domänenwissen aus Expertengesprächen.
    </p>

    <p>
      Die Materialsammlung zwingt zur präzisen Artikulation der Projektziele, bevor ein LLM-Dialog
      beginnt. Das verhindert die unkritische Übernahme technischer Lösungen, die am tatsächlichen
      Forschungsbedarf vorbeigehen.
    </p>

    <div class="examples-grid">
      <div class="example-block">
        <h4>Beispiel <GlossaryTerm id="correspexplorer">CorrespExplorer</GlossaryTerm></h4>
        <img src={correspexplorerImg} alt="CorrespExplorer Interface" class="example-image" />
        <p>
          Im CorrespExplorer-Projekt wurden <GlossaryTerm id="cmif">CMIF-XML</GlossaryTerm>-Dateien aus <GlossaryTerm id="correspsearch">correspSearch</GlossaryTerm>,
          die TEI-Correspondence-SIG-Dokumentation, Editionsrichtlinien der beteiligten Projekte und
          Notizen aus Gesprächen mit Briefeditor:innen gesammelt. Die Daten lagen bereits strukturiert vor.
        </p>
        <p class="example-links">
          <a href="https://github.com/DHCraft/CorrespExplorer" target="_blank" rel="noopener" class="link-repo">Repo</a>
        </p>
      </div>

      <div class="example-block">
        <h4>Beispiel Lucina Edition</h4>
        <img src={lucinaImg} alt="Lucina Edition Interface" class="example-image" />
        <p>
          Im Lucina-Projekt war die Ausgangslage anders. Das Material bestand aus Word-Dokumenten und
          PDFs einer neulateinischen Handschrift (Madrid BN Mss. 6028, 1474). Dazu kamen wissenschaftliche
          Papers als Kontextwissen und Gespräche mit der Domänenexpertin. Aus diesen unstrukturierten
          Quellen entstand über fünf Promptotyping-Iterationen eine TEI P5-konforme digitale Edition
          mit 128 Gedichten.
        </p>
        <p class="example-links">
          <a href="https://chpollin.github.io/diged-neolat/edition-5/web/" target="_blank" rel="noopener" class="link-demo">Demo</a>
          <a href="https://github.com/chpollin/diged-neolat" target="_blank" rel="noopener" class="link-repo">Repo</a>
        </p>
      </div>
    </div>
  </div>

  <div class="deep-dive-row" in:fade={{ delay: 400, duration: 400 }}>
    <DeepDiveTrigger
      label="Context Engineering"
      deepDiveId="context-engineering"
    />
  </div>
</div>

<style>
  .phase1-titel {
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

  .content {
    max-width: 900px;
    line-height: 1.7;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .examples-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-md);
    margin-top: var(--space-lg);
  }

  @media (max-width: 768px) {
    .examples-grid {
      grid-template-columns: 1fr;
    }
  }

  .content p {
    font-size: clamp(0.9rem, 1.6vw, 1rem);
    color: var(--color-black);
    margin: 0;
    text-align: left;
  }

  .content p + p {
    margin-top: var(--space-md);
  }

  .content strong {
    color: var(--color-terracotta);
    font-weight: 600;
  }

  .example-block {
    background: var(--color-cream);
    padding: var(--space-md);
    border-radius: 8px;
    border-left: 3px solid var(--color-terracotta);
    display: flex;
    flex-direction: column;
  }

  .example-block h4 {
    margin: 0 0 var(--space-sm) 0;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-terracotta);
  }

  .example-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: top;
    border-radius: 6px;
    margin: var(--space-sm) 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .example-links {
    display: flex;
    gap: var(--space-sm);
    margin-top: auto;
    padding-top: var(--space-sm);
  }

  .example-links a {
    display: inline-flex;
    align-items: center;
    gap: 0.3em;
    padding: 0.3em 0.7em;
    font-size: 0.8rem;
    font-family: var(--font-mono);
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.2s;
  }

  .link-demo {
    background: var(--color-terracotta);
    color: white;
  }

  .link-demo:hover {
    background: #a84a35;
  }

  .link-repo {
    background: var(--color-slate);
    color: white;
  }

  .link-repo:hover {
    background: #4a5568;
  }
</style>
