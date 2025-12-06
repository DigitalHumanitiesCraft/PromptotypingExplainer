// Echte Prompts aus CorrespExplorer-Entwicklung
// Quelle: knowledge.md → Arbeitsiterationen

export const prompts = [
  {
    id: 1,
    type: 'human',
    text: 'Was müssen wir im HSA-Knowledge-Ordner dokumentieren?',
    pattern: 'Orientierung geben',
  },
  {
    id: 2,
    type: 'llm',
    text: 'Für eine klare Struktur empfehle ich drei Kerndokumente: data.md für die Datenstruktur, user-story.md für die Anforderungen, context.md für das Domänenwissen.',
  },
  {
    id: 3,
    type: 'human',
    text: 'hsa-test.html dient nur zum Testen. Wir wollen die Grundlagen des Herdata-Projekts nutzen, um die vorhandenen Views darzustellen. Außerdem soll es möglich sein, auch andere CMIF.xml-Daten zu importieren. Ist das klar für dich?',
    pattern: 'Verständnis prüfen',
  },
  {
    id: 4,
    type: 'human',
    text: 'Knowledge-HSA hat eine flache Struktur mit mehreren .md-Dateien. Du brauchst keine Unterordner. Wir brauchen immer destillierte, informative .md-Dateien, die auf dem neuesten Stand sind!',
    pattern: 'Qualität einfordern',
  },
  {
    id: 5,
    type: 'error',
    text: 'TypeError: Cannot read property "correspondents" of undefined',
  },
  {
    id: 6,
    type: 'human',
    text: 'Schreib einen Test, der prüft, ob die CMIF-Daten korrekt geladen werden und die Anzahl der correspDesc-Elemente mit der Anzeige übereinstimmt.',
    pattern: 'Validierung durch Tests',
  },
  {
    id: 7,
    type: 'llm',
    text: 'Der Fehler liegt in der XML-Parsing-Logik. Der Namespace-Handler erwartet ein anderes Format. Ich korrigiere das...',
  },
];

// Prompt-Muster für die Legende
export const promptPatterns = [
  'Orientierung geben',
  'Verständnis prüfen',
  'Qualität einfordern',
  'Entscheidungen treffen',
  'Reflexion erzwingen',
  'Validierung durch Tests',
];
