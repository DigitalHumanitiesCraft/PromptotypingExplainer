/**
 * Case Studies für Promptotyping
 * Jedes Projekt zeigt, wie strukturierte Forschungsdaten
 * durch Promptotyping zu funktionalen Tools werden.
 */

// Import case study thumbnails
import correspexplorerImg from '../../assets/images/correspexplorer.png';
import lucinaImg from '../../assets/images/lucina.png';
import kmImg from '../../assets/images/km.png';
import cvmaImg from '../../assets/images/cvma.png';
import aldersbachImg from '../../assets/images/aldersbach.png';
import szdImg from '../../assets/images/szd.png';

// Chronologisch sortiert nach Entstehungsdatum
export const caseStudies = [
  {
    id: 'szd-annotation',
    name: 'SZD Annotation',
    type: 'Annotation',
    date: 'Okt 2024',
    hasBlog: true,
    abstract: 'Timeline-basiertes Annotationstool für die digitale Nachlassrekonstruktion Stefan Zweig Digital. Der Ursprung der Promptotyping-Methodik.',
    link: 'https://dhcraft.org/excellence/promptotyping/szd-annotation-timeline/',
    github: 'https://github.com/DigitalHumanitiesCraft/excellence/tree/main/promptotyping/szd-annotation-timeline',
    dataFormat: 'XML/GAMS',
    thumbnail: szdImg
  },
  {
    id: 'cvma-glasmalerei',
    name: 'CVMA Glasmalerei',
    type: 'Annotation',
    date: 'Jul 2025',
    abstract: 'Annotations-Tool für mittelalterliche Glasmalerei aus dem CVMA. Integration mit dem NFDI4Culture Knowledge Graph via SPARQL.',
    link: 'https://chpollin.github.io/stained-glass-metadata-annotation-tool/docs/version-2/',
    github: 'https://github.com/chpollin/stained-glass-metadata-annotation-tool',
    dataFormat: 'JSON-LD/SPARQL',
    thumbnail: cvmaImg
  },
  {
    id: 'kriminalmuseum',
    name: 'Kriminalmuseum',
    type: 'Sammlung',
    date: 'Jul 2025',
    abstract: 'Digitales Archiv der kriminalistischen Sammlung des Hans Gross Kriminalmuseums. Duale Interface-Paradigmen mit Canvas-basierter 2D-Visualisierung.',
    link: 'https://chpollin.github.io/km/index.html',
    github: 'https://github.com/chpollin/km',
    dataFormat: 'TEI + LIDO/XML',
    thumbnail: kmImg
  },
  {
    id: 'lucina',
    name: 'Lucina Edition',
    type: 'Edition',
    date: 'Aug 2025',
    abstract: 'Digitale Edition neulateinischer Gedichte (Madrid BN Mss. 6028, 1474). TEI P5-konforme Text-Bild-Synchronisation mit prosopographischer Datenbank und metrischer Analyse.',
    link: 'https://chpollin.github.io/diged-neolat/edition-5/web/',
    github: 'https://github.com/chpollin/diged-neolat',
    dataFormat: 'TEI/XML',
    thumbnail: lucinaImg
  },
  {
    id: 'aldersbach',
    name: 'Aldersbach',
    type: 'Exploration',
    date: 'Aug 2025',
    abstract: 'Dashboard für historische Finanztransaktionen der Zisterzienserabtei Aldersbach (1557). Multi-Währungssystem mit Bookkeeping-Ontologie.',
    link: 'https://chpollin.github.io/depcha-aldersbach',
    github: 'https://github.com/chpollin/depcha-aldersbach',
    dataFormat: 'RDF/XML + Ontologie',
    thumbnail: aldersbachImg
  },
  {
    id: 'correspexplorer',
    name: 'CorrespExplorer',
    type: 'Exploration',
    date: 'Dez 2025',
    abstract: 'Explorationstool für Briefkorrespondenzen, basierend auf dem CMIF-Metadatenstandard. Netzwerk-, Zeit- und Kartenvisualisierung.',
    link: 'https://dhcraft.org/CorrespExplorer',
    github: 'https://github.com/DigitalHumanitiesCraft/CorrespExplorer',
    dataFormat: 'CMIF/XML',
    thumbnail: correspexplorerImg
  }
];

export default caseStudies;
