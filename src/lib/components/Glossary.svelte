<script>
  import { glossary } from '../data/glossary.js';
  import { getBibEntry } from '../data/bibliography.js';

  // Convert glossary object to sorted array
  const entries = Object.entries(glossary)
    .map(([id, entry]) => ({ id, ...entry }))
    .sort((a, b) => a.term.localeCompare(b.term, 'de'));

  // Group by first letter
  const grouped = entries.reduce((acc, entry) => {
    const letter = entry.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(entry);
    return acc;
  }, {});

  const letters = Object.keys(grouped).sort();

  // Tag colors
  const tagColors = {
    'prompting': '#3B82F6',
    'ai-engineering': '#8B5CF6',
    'fundamentals': '#607D8B',
    'architecture': '#059669',
    'safety': '#DC2626',
    'training': '#D97706',
    'agents': '#EC4899',
    'evaluation': '#6366F1',
    'methodology': '#14B8A6',
    'theory': '#8B5CF6'
  };
</script>

<section class="glossary-page" id="glossar">
  <header class="glossary-header">
    <h2>Glossar</h2>
    <p class="glossary-intro">Zentrale Begriffe aus dem Bereich AI, LLMs und Prompt Engineering.</p>
  </header>

  <!-- Letter navigation -->
  <nav class="letter-nav">
    {#each letters as letter}
      <a href="#glossar-{letter}" class="letter-link">{letter}</a>
    {/each}
  </nav>

  <div class="glossary-content">
    {#each letters as letter}
      <div class="letter-section" id="glossar-{letter}">
        <h3 class="letter-heading">{letter}</h3>

        <div class="terms-list">
          {#each grouped[letter] as entry}
            <div class="term-entry" id="glossar-{entry.id}">
              <div class="term-header">
                <h4 class="term-name">{entry.term}</h4>
                {#if entry.en && entry.en !== entry.term}
                  <span class="term-en">({entry.en})</span>
                {/if}
              </div>

              <p class="term-definition">{entry.definition}</p>

              <div class="term-meta">
                <div class="term-tags">
                  {#each entry.tags as tag}
                    <span class="tag" style="background-color: {tagColors[tag] || '#607D8B'}">
                      {tag}
                    </span>
                  {/each}
                </div>
                {#if entry.source}
                  {@const bibEntry = getBibEntry(entry.source)}
                  <a
                    href="#bibliographie-{bibEntry?.id || ''}"
                    class="term-source"
                  >
                    {entry.source}
                  </a>
                {/if}
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .glossary-page {
    min-height: 100dvh;
    padding: var(--space-xl) var(--space-lg);
    max-width: 900px;
    margin: 0 auto;
  }

  .glossary-header {
    margin-bottom: var(--space-lg);
    text-align: center;
  }

  .glossary-header h2 {
    font-size: 2rem;
    color: var(--color-slate);
    margin-bottom: var(--space-sm);
  }

  .glossary-intro {
    color: var(--color-slate);
    opacity: 0.8;
    font-size: 1rem;
  }

  /* Letter navigation */
  .letter-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-xs);
    margin-bottom: var(--space-xl);
    padding: var(--space-md);
    background: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
  }

  .letter-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-slate);
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .letter-link:hover {
    background: var(--color-terracotta);
    color: white;
  }

  /* Letter sections */
  .letter-section {
    margin-bottom: var(--space-xl);
    scroll-margin-top: 80px;
  }

  .letter-heading {
    font-size: 1.5rem;
    color: var(--color-terracotta);
    border-bottom: 2px solid var(--color-terracotta);
    padding-bottom: var(--space-xs);
    margin-bottom: var(--space-md);
  }

  .terms-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }

  .term-entry {
    padding: var(--space-md);
    background: rgba(255, 255, 255, 0.7);
    border-radius: 8px;
    border-left: 3px solid var(--color-slate);
    scroll-margin-top: 80px;
    transition: all 0.2s ease;
  }

  .term-entry:target {
    border-left-color: var(--color-terracotta);
    background: rgba(191, 91, 62, 0.05);
  }

  .term-header {
    display: flex;
    align-items: baseline;
    gap: var(--space-sm);
    margin-bottom: var(--space-xs);
  }

  .term-name {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-black);
    margin: 0;
  }

  .term-en {
    font-size: 0.85rem;
    color: var(--color-slate);
    font-style: italic;
  }

  .term-definition {
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--color-black);
    margin: 0 0 var(--space-sm) 0;
  }

  .term-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--space-sm);
  }

  .term-tags {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }

  .tag {
    font-size: 0.6rem;
    padding: 2px 6px;
    border-radius: 4px;
    color: white;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .term-source {
    font-size: 0.75rem;
    color: var(--color-slate);
    font-style: italic;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .term-source:hover {
    color: var(--color-terracotta);
    text-decoration: underline;
  }

  @media (max-width: 767px) {
    .glossary-page {
      padding: var(--space-lg) var(--space-md);
    }

    .glossary-header h2 {
      font-size: 1.5rem;
    }

    .letter-link {
      width: 28px;
      height: 28px;
      font-size: 0.8rem;
    }

    .term-meta {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
