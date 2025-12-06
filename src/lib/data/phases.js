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
    metaphor: 'Mise en place',
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
    metaphor: 'Kartierung',
    description: 'Untersuchung der Datenstrukturen.',
    entities: [
      { type: 'person', label: 'Person' },
      { type: 'place', label: 'Ort' },
      { type: 'time', label: 'Zeit' },
      { type: 'relation', label: 'Relation' },
    ],
  },
  {
    id: 'phase3',
    number: 3,
    title: 'Destillation',
    metaphor: 'Reduktion',
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
    metaphor: 'Ping-Pong',
    description: 'Der eigentliche Promptotyping-Dialog beginnt.',
    closingText: 'Vom Wissen zum Werkzeug.',
  },
];
