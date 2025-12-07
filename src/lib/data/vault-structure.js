/**
 * Vault-Struktur für die Darstellung des Knowledge-Ordners
 * Dieses Projekt verwendet seinen eigenen Vault als Meta-Beispiel
 */

export const vaultStructure = {
  name: 'knowledge',
  type: 'folder',
  description: 'Der Promptotyping Vault dieses Projekts',
  children: [
    {
      name: 'knowledge.md',
      type: 'file',
      category: 'context',
      description: 'Zentrale Wissensbasis: Definition, Phasen, Visual System',
      purpose: 'CONTEXT + DATA kombiniert',
      highlights: [
        'Definition von Promptotyping',
        'Die vier Phasen im Detail',
        'Co-Intelligence Framework',
        'Visual System & Farbpalette'
      ]
    },
    {
      name: 'requirements.md',
      type: 'file',
      category: 'requirements',
      description: 'Zielgruppen, User Stories, technische Constraints',
      purpose: 'REQUIREMENTS',
      highlights: [
        'Primäre Zielgruppe: Digital Humanists',
        'User Stories für Lernende',
        'Technische Anforderungen',
        'Accessibility-Ziele'
      ]
    },
    {
      name: 'implementation.md',
      type: 'file',
      category: 'implementation',
      description: 'Tech Stack, Komponenten-Architektur',
      purpose: 'IMPLEMENTATION',
      highlights: [
        'Svelte + Vite Stack',
        'Komponenten-Hierarchie',
        'Scroll-basierte Navigation',
        'Deep Dive System'
      ]
    },
    {
      name: 'journal.md',
      type: 'file',
      category: 'journal',
      description: 'Arbeitstagbuch, Entscheidungen, Learnings',
      purpose: 'JOURNAL',
      highlights: [
        'Chronologische Entwicklung',
        'Architekturentscheidungen',
        'Iterationen dokumentiert',
        'Lessons Learned'
      ]
    },
    {
      name: 'WEBSITE-OUTLINE.md',
      type: 'file',
      category: 'context',
      description: 'Scrollytelling-Struktur und Narrative',
      purpose: 'Ergänzung zu CONTEXT',
      highlights: [
        'Step-by-Step Outline',
        'Scroll-Logik',
        'Visuelle Übergänge'
      ]
    },
    {
      name: 'paper/',
      type: 'folder',
      description: 'Akademische Dokumentation der Methodik',
      children: [
        {
          name: '00-index.md',
          type: 'file',
          category: 'paper',
          description: 'Inhaltsverzeichnis des Papers'
        },
        {
          name: '01-introduction.md',
          type: 'file',
          category: 'paper',
          description: 'Einleitung und Motivation'
        },
        {
          name: '02-theoretical-foundation.md',
          type: 'file',
          category: 'paper',
          description: 'Theoretische Grundlagen: LLMs, System 1.42'
        },
        {
          name: '03-methodology.md',
          type: 'file',
          category: 'paper',
          description: 'Die Promptotyping-Methodik im Detail'
        },
        {
          name: '04-scholar-centered-design.md',
          type: 'file',
          category: 'paper',
          description: 'Scholar-Centered Design Prinzipien'
        },
        {
          name: '05-case-studies.md',
          type: 'file',
          category: 'paper',
          description: 'Fallbeispiele aus der Praxis'
        },
        {
          name: '06-critical-reflection.md',
          type: 'file',
          category: 'paper',
          description: 'Kritische Reflexion und Limitationen'
        },
        {
          name: '07-references.md',
          type: 'file',
          category: 'paper',
          description: 'Literaturverzeichnis'
        }
      ]
    }
  ]
};

// Kategorie-Farben und Icons (CSS-basiert, keine Emojis)
export const categoryStyles = {
  context: {
    color: 'var(--color-terracotta)',
    icon: 'ctx',
    label: 'Context'
  },
  requirements: {
    color: 'var(--color-slate)',
    icon: 'req',
    label: 'Requirements'
  },
  implementation: {
    color: '#4CAF50',
    icon: 'imp',
    label: 'Implementation'
  },
  journal: {
    color: '#E65100',
    icon: 'jrn',
    label: 'Journal'
  },
  paper: {
    color: '#9C27B0',
    icon: 'doc',
    label: 'Paper'
  }
};

export default vaultStructure;
