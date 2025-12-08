<script>
  import { fade, fly } from 'svelte/transition';
  import CodePreview from '../../elements/CodePreview.svelte';
</script>

<div class="phase4-journal">
  <div class="header-group" in:fade={{ duration: 400 }}>
    <span class="label">Prozessdokumentation</span>
    <h3>Reflection-on-Action</h3>
  </div>

  <div class="content-grid">
    <div class="text-card" in:fly={{ x: -30, duration: 500, delay: 200 }}>
      <p>
        Das Journal dient der systematischen Dokumentation des Entwicklungsprozesses.
        Es hält Entscheidungen, verworfene Ansätze und methodische Korrekturen fest,
        die im finalen Code nicht mehr explizit sichtbar sind.
      </p>
      <p>
        Diese Form der <em>Reflection-on-Action</em> (nach Schön) gewährleistet die
        wissenschaftliche Nachvollziehbarkeit. Sie transformiert den flüchtigen Dialog
        mit dem LLM in eine dauerhafte, prüfbare Aufzeichnung.
      </p>
      <p class="meta-note">
        Das rechts dargestellte Dokument ist das unveränderte Arbeitstagebuch dieses
        Projekts und zeigt den realen Verlauf der Implementierung.
      </p>
    </div>

    <figure class="journal-preview" in:fly={{ x: 30, duration: 500, delay: 300 }}>
      <CodePreview
        filename="JOURNAL.md"
        content={`# Arbeitsjournal

## 2024-12-06 – Session 1: Projektstart

### Ziel
Grundstruktur der Scrollytelling-Website.

### Entscheidungen
- Framework: Svelte 5 (Compiler-Approach)
- Build: Vite für schnelles HMR
- Styling: Vanilla CSS + Custom Properties

### Verworfene Ansätze
- React: Zu viel Boilerplate
- Tailwind: Overhead für diesen Use Case

### Offene Fragen
- Wie granular sollen Steps sein?

---

## 2024-12-07 – Session 2: Step-System

### Umgesetzt
- IntersectionObserver für Step-Trigger
- Svelte Stores für globalen State
- URL Hash Navigation

### Erkenntnisse
- threshold: 0.5 besser als 0.3
- scroll-snap-type: proximity`}
      />
      <figcaption>
        <a href="https://github.com/DHCraft/PromptotypingExplainer/blob/main/knowledge/journal.md"
           target="_blank"
           rel="noopener noreferrer">
          → Vollständiges Journal auf GitHub
        </a>
      </figcaption>
    </figure>
  </div>
</div>

<style>
  .phase4-journal {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
  }

  .header-group {
    text-align: center;
  }

  .label {
    display: block;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-terracotta);
    margin-bottom: var(--space-xs);
  }

  h3 {
    color: var(--color-black);
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    margin: 0;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: var(--space-xl);
    width: 100%;
    max-width: 1100px;
    align-items: start;
  }

  .text-card {
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .text-card p {
    font-size: clamp(0.9rem, 1.6vw, 1rem);
    color: var(--color-black);
    line-height: 1.7;
    margin: 0 0 var(--space-md) 0;
    text-align: left;
  }

  .text-card p:last-child {
    margin-bottom: 0;
  }

  .text-card em {
    color: var(--color-terracotta);
    font-style: italic;
  }

  .meta-note {
    font-size: 0.9em !important;
    color: var(--color-slate) !important;
    padding-top: var(--space-sm);
    border-top: 1px solid rgba(96, 125, 139, 0.2);
  }

  .journal-preview {
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .journal-preview figcaption {
    text-align: center;
  }

  .journal-preview figcaption a {
    font-size: 0.85rem;
    color: var(--color-terracotta);
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  .journal-preview figcaption a:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  @media (max-width: 900px) {
    .content-grid {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }
  }
</style>
