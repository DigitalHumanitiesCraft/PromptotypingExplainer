/**
 * Case Studies für Promptotyping
 * Jedes Projekt zeigt, wie strukturierte Forschungsdaten
 * durch Promptotyping zu funktionalen Tools werden.
 */

export const caseStudies = [
  {
    id: 'correspexplorer',
    name: 'CorrespExplorer',
    type: 'Exploration',
    abstract: 'Explorationstool für Briefkorrespondenzen, basierend auf dem CMIF-Metadatenstandard. Netzwerk-, Zeit- und Kartenvisualisierung.',
    link: 'https://dhcraft.org/CorrespExplorer',
    github: 'https://github.com/DigitalHumanitiesCraft/CorrespExplorer',
    dataFormat: 'CMIF/XML',
    thumbnail: 'case-studies/correspexplorer.png'
  },
  {
    id: 'lucina',
    name: 'Lucina Edition',
    type: 'Edition',
    abstract: 'Digitale Edition neulateinischer Gedichte (Madrid BN Mss. 6028, 1474). TEI P5-konforme Text-Bild-Synchronisation mit prosopographischer Datenbank und metrischer Analyse.',
    link: 'https://chpollin.github.io/diged-neolat/edition-5/web/',
    github: 'https://github.com/chpollin/diged-neolat',
    dataFormat: 'TEI/XML',
    thumbnail: 'case-studies/lucina.png'
  },
  {
    id: 'kriminalmuseum',
    name: 'Kriminalmuseum',
    type: 'Sammlung',
    abstract: 'Digitales Archiv der kriminalistischen Sammlung des Hans Gross Kriminalmuseums. Duale Interface-Paradigmen mit Canvas-basierter 2D-Visualisierung.',
    link: 'https://chpollin.github.io/km/collection-explorer.html',
    github: 'https://github.com/chpollin/km',
    dataFormat: 'TEI + LIDO/XML',
    thumbnail: 'case-studies/kriminalmuseum.png'
  },
  {
    id: 'cvma-glasmalerei',
    name: 'CVMA Glasmalerei',
    type: 'Annotation',
    abstract: 'Annotations-Tool für mittelalterliche Glasmalerei aus dem CVMA. Integration mit dem NFDI4Culture Knowledge Graph via SPARQL.',
    link: 'https://chpollin.github.io/stained-glass-metadata-annotation-tool/docs/version-2/',
    github: 'https://github.com/chpollin/stained-glass-metadata-annotation-tool',
    dataFormat: 'JSON-LD/SPARQL',
    thumbnail: 'case-studies/cvma.png'
  },
  {
    id: 'aldersbach',
    name: 'Aldersbach',
    type: 'Exploration',
    abstract: 'Dashboard für historische Finanztransaktionen der Zisterzienserabtei Aldersbach (1557). Multi-Währungssystem mit Bookkeeping-Ontologie.',
    link: 'https://chpollin.github.io/depcha-aldersbach',
    github: 'https://github.com/chpollin/depcha-aldersbach',
    dataFormat: 'RDF/XML + Ontologie',
    thumbnail: 'case-studies/aldersbach.png'
  },
  {
    id: 'szd-annotation',
    name: 'SZD Annotation',
    type: 'Annotation',
    abstract: 'Timeline-basiertes Annotationstool für die digitale Nachlassrekonstruktion Stefan Zweig Digital. Integration mit dem GAMS.',
    link: 'https://dhcraft.org/excellence/promptotyping/szd-annotation-timeline/',
    github: 'https://github.com/DigitalHumanitiesCraft/excellence/tree/main/promptotyping/szd-annotation-timeline',
    dataFormat: 'XML/GAMS',
    thumbnail: 'case-studies/szd.png'
  }
];

export default caseStudies;
