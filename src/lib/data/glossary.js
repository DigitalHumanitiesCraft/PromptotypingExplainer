// Glossar-Daten aus glossar_de.md extrahiert
// Nur die für Promptotyping relevantesten Begriffe

export const glossary = {
  'context-engineering': {
    term: 'Context Engineering',
    en: 'Context Engineering',
    definition: 'Die systematische Gestaltung und Optimierung des Informationskontexts von LLMs, mit dem Ziel, unter begrenzten Ressourcen die Qualität und Zuverlässigkeit der Modellantworten zu maximieren.',
    tags: ['prompting', 'ai-engineering'],
    source: 'Mei et al. 2025'
  },
  'llm': {
    term: 'Large Language Model (LLM)',
    en: 'Large Language Model',
    definition: 'Ein auf neuronalen Netzen basierendes probabilistisches Modell, das auf riesigen Textmengen trainiert wurde, um statistische Muster der Sprache zu erlernen.',
    tags: ['fundamentals'],
    source: 'Zhao et al. 2023'
  },
  'context-window': {
    term: 'Context Window',
    en: 'Context Window',
    definition: 'Die maximale Anzahl an Token, die ein Modell in einem einzigen Durchgang verarbeiten kann. Es fungiert als das "Arbeitsgedächtnis" des Modells.',
    tags: ['architecture', 'fundamentals'],
    source: 'Vaswani et al. 2017'
  },
  'context-rot': {
    term: 'Context Rot',
    en: 'Context Rot',
    definition: 'Ein Phänomen, bei dem die Leistungsfähigkeit von LLMs mit zunehmender Länge des Eingabekontexts und sinkender Informationsdichte abnimmt. Unstrukturierte Begleittexte wirken als Rauschen, das die Aufmerksamkeit von relevanten Instruktionen ablenkt.',
    tags: ['architecture'],
    source: 'Hong et al. 2025'
  },
  'in-context-learning': {
    term: 'In-Context Learning',
    en: 'In-Context Learning',
    definition: 'Die Fähigkeit von Sprachmodellen, Aufgaben durch Anweisungen oder Beispiele im Prompt zu lösen, ohne dass ein Retraining stattfindet.',
    tags: ['prompting', 'fundamentals'],
    source: 'Brown et al. 2020'
  },
  'prompt-engineering': {
    term: 'Prompt Engineering',
    en: 'Prompt Engineering',
    definition: 'Ein systematisches und iteratives Verfahren zur Entwicklung und Optimierung von Eingabeaufforderungen (Prompts), um Large Language Models effektiv zu steuern.',
    tags: ['prompting'],
    source: 'Schulhoff et al. 2024'
  },
  'chain-of-thought': {
    term: 'Chain of Thought (CoT)',
    en: 'Chain of Thought',
    definition: 'Eine Prompting-Technik, die LLMs dazu veranlasst, komplexe Aufgaben in eine Sequenz intermediärer Denkschritte zu zerlegen, bevor die finale Antwort generiert wird.',
    tags: ['prompting'],
    source: 'Wei et al. 2022'
  },
  'sycophancy': {
    term: 'Sycophancy',
    en: 'Sycophancy',
    definition: 'Die Tendenz von Modellen, Nutzern übermäßig zuzustimmen oder ihnen zu schmeicheln, oft auf Kosten der faktischen Genauigkeit.',
    tags: ['safety'],
    source: 'Malmqvist 2024'
  },
  'halluzinationen': {
    term: 'Halluzinationen',
    en: 'Hallucinations',
    definition: 'Das Generieren von Inhalten, die grammatikalisch plausibel klingen, aber faktisch falsch sind. Der Begriff "Konfabulation" beschreibt das "Lückenfüllen" ohne Realitätsbezug.',
    tags: ['safety', 'fundamentals'],
    source: 'Ji et al. 2023'
  },
  'rag': {
    term: 'Retrieval Augmented Generation (RAG)',
    en: 'RAG',
    definition: 'Ein Ansatz, der generative Sprachmodelle mit einem externen Informationsabrufsystem koppelt, um faktische Genauigkeit zu erhöhen.',
    tags: ['ai-engineering'],
    source: 'Lewis et al. 2020'
  },
  'token': {
    term: 'Token',
    en: 'Token',
    definition: 'Die atomare Einheit der Informationsverarbeitung in einem Sprachmodell - die "Atome" des Systems. Ein Token entspricht etwa 4 Zeichen bzw. 0,75 Wörtern.',
    tags: ['fundamentals', 'architecture'],
    source: 'Karpathy 2024'
  },
  'system-prompt': {
    term: 'System Prompt',
    en: 'System Prompt',
    definition: 'Eine initiale Konfigurationsschicht, die einem LLM vor der Nutzerinteraktion übergeordnete Handlungsanweisungen und Restriktionen vorgibt.',
    tags: ['prompting', 'ai-engineering'],
    source: 'Claude Docs'
  },
  'few-shot': {
    term: 'Zero-Shot / Few-Shot',
    en: 'Zero-Shot & Few-Shot Learning',
    definition: 'Eine Form des In-Context Learning, bei der das Modell durch Anweisungen (Zero-Shot) oder Beispiele (Few-Shot) im Context Window konditioniert wird.',
    tags: ['prompting'],
    source: 'Brown et al. 2020'
  },
  'tool-use': {
    term: 'Tool Use / Function Calling',
    en: 'Tool Use',
    definition: 'Die Fähigkeit eines Modells, zu erkennen, dass eine Anfrage externe Werkzeuge erfordert, und strukturierte Befehle zu generieren.',
    tags: ['agents', 'ai-engineering'],
    source: 'Schick et al. 2023'
  },
  'ai-agent': {
    term: 'AI Agent',
    en: 'AI Agent',
    definition: 'Ein autonomes System, das ein LLM als zentrale Reasoning-Einheit nutzt, um mehrstufige Pläne zu erstellen und externe Werkzeuge zur Ausführung zu verwenden.',
    tags: ['agents'],
    source: 'Sapkota et al. 2025'
  },
  'agentic-ai': {
    term: 'Agentic AI',
    en: 'Agentic AI',
    definition: 'Ein Paradigma, das den Übergang von generativer KI zu Systemen beschreibt, die als aktive Problemlöser fungieren und Aufgaben selbstständig in Teilschritte zerlegen.',
    tags: ['agents'],
    source: 'Sapkota et al. 2025'
  },
  'mcp': {
    term: 'Model Context Protocol (MCP)',
    en: 'Model Context Protocol',
    definition: 'Ein offener Standard, der als universelle Schnittstelle dient, um KI-Assistenten sicher mit externen Datenquellen zu verbinden.',
    tags: ['ai-engineering', 'agents'],
    source: 'Anthropic 2024'
  },
  'alignment': {
    term: 'Alignment',
    en: 'AI Alignment',
    definition: 'Die Ausrichtung von KI-Systemen auf menschliche Intentionen und Werte, konkret operationalisiert durch die Prinzipien "helpful, honest, and harmless" (HHH).',
    tags: ['safety', 'training'],
    source: 'Askell et al. 2021'
  },
  'fine-tuning': {
    term: 'Fine-Tuning',
    en: 'Fine-Tuning',
    definition: 'Der Prozess des Nachtrainierens eines vortrainierten Modells mit einem spezifischen Datensatz, um es auf konkrete Aufgaben zu spezialisieren.',
    tags: ['training'],
    source: 'Claude Docs'
  },
  'embedding': {
    term: 'Embedding',
    en: 'Embedding',
    definition: 'Eine mathematische Repräsentation von Token oder Textabschnitten als Vektoren, in der inhaltlich ähnliche Begriffe geometrisch nah beieinander liegen.',
    tags: ['architecture', 'ai-engineering'],
    source: 'Mikolov et al. 2013'
  },
  'latent-space': {
    term: 'Latent Space',
    en: 'Latent Space',
    definition: 'Der hochdimensionale, abstrakte Vektorraum, in dem ein Modell Informationen repräsentiert. Während wir Text sehen, "denkt" das Modell in Koordinaten innerhalb dieses Raums. Semantisch ähnliche Konzepte liegen räumlich nahe beieinander. Das erklärt, warum Modelle Analogien bilden können: Sie führen Vektorarithmetik mit Bedeutungen durch.',
    tags: ['architecture', 'advanced'],
    source: 'Liu et al. 2023'
  },
  'vibe-check': {
    term: 'Vibe Check',
    en: 'Vibe Check',
    definition: 'Eine qualitative, intuitionsbasierte Evaluationsmethode für LLM-Outputs, bei der menschliche Experten die Plausibilität, den Ton und die Gesamtqualität einer Antwort subjektiv beurteilen – komplementär zu quantitativen Benchmarks.',
    tags: ['evaluation'],
    source: 'Praxisbegriff'
  },
  'system-142': {
    term: 'System 1.42',
    en: 'System 1.42',
    definition: 'Eine heuristische Charakterisierung von LLMs als hybride Systeme zwischen Kahnemans System 1 (intuitiv) und System 2 (analytisch). Sie erzeugen plausible Antworten ohne verlässliche Selbstprüfung – "halluzinierende Reasoner".',
    tags: ['fundamentals', 'theory'],
    source: 'Pollin 2025',
    link: 'https://dhcraft.org/excellence/blog/System1-42/'
  },
  'critical-expert': {
    term: 'Critical Expert in the Loop',
    en: 'Critical Expert in the Loop',
    definition: 'Der Mensch als kritischer Validator im Promptotyping-Prozess, der aktiv Sycophancy und Konfabulationen erkennt und korrigiert. Domänenwissen ist essentiell für die Qualitätssicherung.',
    tags: ['methodology'],
    source: 'Pollin & Steiner 2025'
  },
  'promptotyping-vault': {
    term: 'Promptotyping Vault',
    en: 'Promptotyping Vault',
    definition: 'Ein strukturierter Wissensspeicher aus vernetzten Markdown-Dateien, der das destillierte Domänenwissen für die LLM-Interaktion enthält. Der Vault wächst iterativ und dient als externes Gedächtnis für den Entwicklungsprozess.',
    tags: ['methodology'],
    source: 'Pollin & Steiner 2025'
  },
  'promptotyping-documents': {
    term: 'Promptotyping Documents',
    en: 'Promptotyping Documents',
    definition: 'Die Markdown-Dokumente im Vault. Die drei Kerndokumente DATA.md, REQUIREMENTS.md und CONTEXT.md bilden den Ausgangspunkt. Je nach Domänenkomplexität können beliebige weitere Dokumente ergänzt werden, etwa SCHEMA.md oder JOURNAL.md. Ziel ist maximale Informationsdichte bei minimaler Token-Anzahl, um Context Rot zu vermeiden.',
    tags: ['methodology'],
    source: 'Pollin & Steiner 2025'
  }
};

// Mapping von Begriffen zu IDs für einfacheres Matching
export const termToId = {
  'context engineering': 'context-engineering',
  'llm': 'llm',
  'large language model': 'llm',
  'sprachmodell': 'llm',
  'context window': 'context-window',
  'kontextfenster': 'context-window',
  'context rot': 'context-rot',
  'in-context learning': 'in-context-learning',
  'prompt engineering': 'prompt-engineering',
  'chain of thought': 'chain-of-thought',
  'cot': 'chain-of-thought',
  'sycophancy': 'sycophancy',
  'halluzination': 'halluzinationen',
  'halluzinationen': 'halluzinationen',
  'konfabulation': 'halluzinationen',
  'rag': 'rag',
  'retrieval augmented generation': 'rag',
  'token': 'token',
  'tokens': 'token',
  'system prompt': 'system-prompt',
  'system-prompt': 'system-prompt',
  'few-shot': 'few-shot',
  'zero-shot': 'few-shot',
  'tool use': 'tool-use',
  'function calling': 'tool-use',
  'ai agent': 'ai-agent',
  'agent': 'ai-agent',
  'agentic ai': 'agentic-ai',
  'agentic': 'agentic-ai',
  'mcp': 'mcp',
  'model context protocol': 'mcp',
  'alignment': 'alignment',
  'fine-tuning': 'fine-tuning',
  'finetuning': 'fine-tuning',
  'embedding': 'embedding',
  'embeddings': 'embedding',
  'latent space': 'latent-space',
  'latenter raum': 'latent-space',
  'vibe check': 'vibe-check',
  'vibe-check': 'vibe-check',
  'system 1.42': 'system-142',
  'system142': 'system-142',
  'critical expert': 'critical-expert',
  'critical expert in the loop': 'critical-expert',
  'vault': 'promptotyping-vault',
  'promptotyping vault': 'promptotyping-vault',
  'promptotyping documents': 'promptotyping-documents',
  'promptotyping document': 'promptotyping-documents',
  'data.md': 'promptotyping-documents',
  'requirements.md': 'promptotyping-documents',
  'context.md': 'promptotyping-documents'
};
