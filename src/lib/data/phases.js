// Phasen-Daten aus knowledge.md → TEIL 1 → Die vier Phasen

export const phases = [
  {
    id: 'intro',
    title: 'Promptotyping',
    subtitle: 'Vom Wissen zum Werkzeug',
    question: 'Wie wird aus Forschungsdaten ein funktionales Interface?',
  },
  {
    id: 'phase1',
    number: 1,
    title: 'Vorbereitung',
    subtitle: 'Materialsammlung',
    description: 'Sammlung aller relevanten Materialien.',
    artifacts: [
      { type: 'xml', label: 'TEI/XML' },
      { type: 'pdf', label: 'Spezifikation' },
      { type: 'csv', label: 'Rohdaten' },
      { type: 'notes', label: 'Notizen' },
    ],
  },
  {
    id: 'phase2',
    number: 2,
    title: 'Exploration',
    subtitle: 'Datenanalyse',
    description: 'Freies Experimentieren mit dem Rohmaterial. Keine formalen Artefakte – die Erkenntnisse fließen in Phase 3.',
  },
  {
    id: 'phase3',
    number: 3,
    title: 'Destillation',
    subtitle: 'Wissenskomprimierung',
    description: 'Überführung in kompakte Markdown-Dokumente.',
    documents: [
      { name: 'data.md', purpose: 'Struktur und Semantik der Forschungsdaten' },
      { name: 'user-story.md', purpose: 'Anforderungen aus Forschungsperspektive' },
      { name: 'context.md', purpose: 'Relevantes Domänenwissen' },
    ],
    closingText: 'Destilliertes Wissen. Bereit für das LLM.',
  },
  {
    id: 'phase4',
    number: 4,
    title: 'Iterative Implementation',
    subtitle: 'Iterative Entwicklung',
    description: 'Der eigentliche Promptotyping-Dialog beginnt.',
    closingText: 'Vom Wissen zum Werkzeug.',
  },
];
