<script>
  import { marked } from 'marked';

  const readmeContent = `# Über diese Dokumentation

Diese interaktive Dokumentation erklärt **Promptotyping** – eine Methodik zur Entwicklung von LLM-gestützten Werkzeugen in den Digital Humanities.

## Was Sie hier lernen

> **Promptotyping** ist das Mapping von semantisch reichhaltigen Forschungsdaten und explizitem Forschungskontext auf funktionale Interfaces durch iterative Mensch-LLM-Kollaboration.

Diese Dokumentation führt Sie durch:

1. **Die Grundidee** – Warum klassisches Prompt Engineering für Forschungskontexte nicht ausreicht
2. **Die vier Phasen** – Von der Materialsammlung bis zum funktionierenden Werkzeug
3. **Das Knowledge Vault** – Wie strukturiertes Domänenwissen LLMs effektiver macht
4. **Praktische Beispiele** – Konkrete Anwendungen aus der DH-Praxis

## Für wen ist das?

- **Digital Humanists**, die LLMs für ihre Forschung nutzen wollen
- **Entwickler:innen**, die domänenspezifische KI-Werkzeuge bauen
- **Methodiker:innen**, die sich für Human-AI-Collaboration interessieren

## Die vier Phasen

| Phase | Fokus | Ergebnis |
|-------|-------|----------|
| **Vorbereitung** | Materialsammlung | Rohdaten, Quellen, Kontext |
| **Exploration** | Datenanalyse | Strukturverständnis, Entitäten |
| **Destillation** | Wissenskomprimierung | Knowledge Vault |
| **Implementation** | Iterative Entwicklung | Funktionales Werkzeug |

## Kontext

Promptotyping entstand aus der Praxis der digitalen Briefedition und wurde für geisteswissenschaftliche Forschungskontexte entwickelt, in denen:

- Daten **semantisch reich** und kontextabhängig sind
- **Domänenexpertise** entscheidend für die Interpretation ist
- Werkzeuge **scholar-centered** statt technologiezentriert sein sollten

## Weiterführend

- [Glossar](#glossar) – Zentrale Begriffe aus AI und Prompt Engineering
- [Bibliographie](#bibliographie) – Alle verwendeten Quellen`;

  // Configure marked
  marked.setOptions({
    breaks: true,
    gfm: true
  });

  const htmlContent = marked(readmeContent);
</script>

<section class="about-page" id="about">
  <div class="about-content">
    {@html htmlContent}
  </div>
</section>

<style>
  .about-page {
    min-height: 100vh;
    padding: var(--space-xl) var(--space-lg);
    max-width: 800px;
    margin: 0 auto;
  }

  .about-content {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 12px;
    padding: var(--space-xl);
  }

  /* Markdown styling */
  .about-content :global(h1) {
    font-size: 2rem;
    color: var(--color-terracotta);
    margin-bottom: var(--space-md);
    padding-bottom: var(--space-sm);
    border-bottom: 2px solid var(--color-terracotta);
  }

  .about-content :global(h2) {
    font-size: 1.3rem;
    color: var(--color-slate);
    margin-top: var(--space-lg);
    margin-bottom: var(--space-sm);
  }

  .about-content :global(p) {
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--color-black);
    margin-bottom: var(--space-md);
  }

  .about-content :global(blockquote) {
    border-left: 3px solid var(--color-terracotta);
    padding-left: var(--space-md);
    margin: var(--space-md) 0;
    font-style: italic;
    color: var(--color-slate);
    background: rgba(191, 91, 62, 0.05);
    padding: var(--space-md);
    border-radius: 0 8px 8px 0;
  }

  .about-content :global(ul),
  .about-content :global(ol) {
    margin: var(--space-sm) 0 var(--space-md) var(--space-md);
    padding-left: var(--space-md);
  }

  .about-content :global(li) {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: var(--space-xs);
  }

  .about-content :global(strong) {
    color: var(--color-black);
    font-weight: 600;
  }

  .about-content :global(a) {
    color: var(--color-terracotta);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease;
  }

  .about-content :global(a:hover) {
    border-bottom-color: var(--color-terracotta);
  }

  .about-content :global(code) {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85em;
    background: rgba(96, 125, 139, 0.1);
    padding: 2px 6px;
    border-radius: 4px;
  }

  .about-content :global(table) {
    width: 100%;
    border-collapse: collapse;
    margin: var(--space-md) 0;
    font-size: 0.9rem;
  }

  .about-content :global(th),
  .about-content :global(td) {
    padding: var(--space-sm);
    text-align: left;
    border-bottom: 1px solid rgba(96, 125, 139, 0.2);
  }

  .about-content :global(th) {
    background: rgba(96, 125, 139, 0.1);
    font-weight: 600;
    color: var(--color-slate);
  }

  .about-content :global(tr:hover) {
    background: rgba(191, 91, 62, 0.05);
  }

  @media (max-width: 767px) {
    .about-page {
      padding: var(--space-lg) var(--space-md);
    }

    .about-content {
      padding: var(--space-md);
    }

    .about-content :global(h1) {
      font-size: 1.5rem;
    }

    .about-content :global(h2) {
      font-size: 1.1rem;
    }
  }
</style>
