<script>
  import { fade, fly } from 'svelte/transition';
</script>

<div class="phase2-struktur" in:fade={{ duration: 400 }}>
  <header class="scene-header" in:fly={{ y: -20, duration: 500 }}>
    <span class="phase-number">Phase 2</span>
    <h2>Exploration</h2>
    <p class="subtitle">Datenstruktur verstehen</p>
  </header>

  <div class="content-block" in:fade={{ delay: 200, duration: 400 }}>
    <p class="lead">
      Die Rohdaten aus Phase 1 sind oft <strong>zu groß für das Context Window</strong>.
      Das LLM generiert Analyse-Scripts, um Strukturen zu explorieren.
    </p>

    <div class="example-box">
      <div class="example-label">Beispiel</div>
      <p class="example-text">
        "Schreibe ein Python-Script, das die Struktur dieser XML-Datei analysiert
        und mir die wichtigsten Elemente und Attribute auflistet."
      </p>
    </div>
  </div>

  <div class="xml-preview" in:fly={{ y: 30, duration: 500, delay: 400 }}>
    <div class="xml-document">
      <div class="xml-header">&lt;TEI&gt;</div>
      <div class="xml-content">
        <div class="xml-line">
          <span class="tag">&lt;correspDesc&gt;</span>
        </div>
        <div class="xml-line indent">
          <span class="tag">&lt;persName</span>
          <span class="attr">ref</span>=<span class="value highlight">"#person1"</span><span class="tag">&gt;</span>
        </div>
        <div class="xml-line indent">
          <span class="tag">&lt;placeName</span>
          <span class="attr">ref</span>=<span class="value">"#place1"</span><span class="tag">&gt;</span>
        </div>
        <div class="xml-line indent">
          <span class="tag">&lt;date</span>
          <span class="attr">when</span>=<span class="value">"1800-01-01"</span><span class="tag">/&gt;</span>
        </div>
        <div class="xml-line">
          <span class="tag">&lt;/correspDesc&gt;</span>
        </div>
      </div>
      <div class="xml-footer">&lt;/TEI&gt;</div>
    </div>
    <div class="xml-caption">Schema und Struktur werden sichtbar</div>
  </div>
</div>

<style>
  .phase2-struktur {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xl);
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
    max-width: 600px;
  }

  .lead {
    font-size: clamp(0.95rem, 1.8vw, 1.1rem);
    color: var(--color-slate);
    line-height: 1.6;
    margin: 0 0 var(--space-lg) 0;
  }

  .lead strong {
    color: var(--color-terracotta);
  }

  .example-box {
    background: rgba(96, 125, 139, 0.08);
    border-left: 3px solid var(--color-slate);
    padding: var(--space-md);
    border-radius: 0 8px 8px 0;
    text-align: left;
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
    font-size: 0.85rem;
    color: var(--color-black);
    margin: 0;
    line-height: 1.5;
  }

  .xml-preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
  }

  .xml-document {
    background: var(--color-white);
    border: 2px solid var(--color-slate);
    border-radius: 6px;
    padding: var(--space-md) var(--space-lg);
    font-family: var(--font-mono);
    font-size: 0.8rem;
    text-align: left;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .xml-header, .xml-footer {
    color: var(--color-slate);
  }

  .xml-content {
    margin: var(--space-sm) 0;
    padding-left: var(--space-sm);
    border-left: 2px solid var(--color-terracotta);
  }

  .xml-line {
    line-height: 1.8;
  }

  .xml-line.indent {
    padding-left: var(--space-md);
  }

  .tag { color: var(--color-slate); }
  .attr { color: var(--color-terracotta); }
  .value { color: var(--color-success); }
  .value.highlight {
    background: rgba(191, 91, 62, 0.2);
    padding: 0 2px;
    border-radius: 2px;
  }

  .xml-caption {
    font-size: 0.85rem;
    color: var(--color-slate);
    font-style: italic;
  }

  @media (max-width: 767px) {
    .xml-document {
      font-size: 0.7rem;
      padding: var(--space-sm) var(--space-md);
    }
  }
</style>
