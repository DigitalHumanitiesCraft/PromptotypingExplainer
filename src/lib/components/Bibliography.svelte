<script>
  import { getAllBibEntries } from '../data/bibliography.js';

  const entries = getAllBibEntries();
</script>

<section class="bibliography" id="bibliographie">
  <header class="bib-header">
    <h2>Bibliographie</h2>
    <p class="bib-intro">Alle in dieser Dokumentation verwendeten Quellen.</p>
  </header>

  <div class="bib-list">
    {#each entries as entry}
      <div class="bib-entry" id="bibliographie-{entry.id}">
        <p class="citation">
          {#if entry.authors}
            <span class="authors">{entry.authors}</span>
            {#if entry.year}
              <span class="year">({entry.year}).</span>
            {/if}
          {/if}
          <span class="title">{entry.title}.</span>
          <span class="source">{entry.source}.</span>
          {#if entry.url}
            <a href={entry.url} target="_blank" rel="noopener noreferrer" class="url">
              {entry.url}
            </a>
          {/if}
        </p>
      </div>
    {/each}
  </div>
</section>

<style>
  .bibliography {
    min-height: 100vh;
    padding: var(--space-xl) var(--space-lg);
    max-width: 800px;
    margin: 0 auto;
  }

  .bib-header {
    margin-bottom: var(--space-xl);
    text-align: center;
  }

  .bib-header h2 {
    font-size: 2rem;
    color: var(--color-slate);
    margin-bottom: var(--space-sm);
  }

  .bib-intro {
    color: var(--color-slate);
    opacity: 0.8;
    font-size: 1rem;
  }

  .bib-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }

  .bib-entry {
    padding: var(--space-md);
    background: rgba(255, 255, 255, 0.7);
    border-radius: 8px;
    border-left: 3px solid var(--color-terracotta);
    scroll-margin-top: 80px;
    transition: background 0.2s ease, border-color 0.2s ease;
  }

  .bib-entry:target {
    background: rgba(191, 91, 62, 0.1);
    border-left-color: var(--color-terracotta);
  }

  .citation {
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;
  }

  .authors {
    font-weight: 500;
  }

  .year {
    margin-left: 0.25em;
  }

  .title {
    font-style: italic;
    margin-left: 0.25em;
  }

  .source {
    margin-left: 0.25em;
    color: var(--color-slate);
  }

  .url {
    display: block;
    margin-top: var(--space-xs);
    font-size: 0.8rem;
    color: var(--color-terracotta);
    word-break: break-all;
    text-decoration: none;
  }

  .url:hover {
    text-decoration: underline;
  }

  @media (max-width: 767px) {
    .bibliography {
      padding: var(--space-lg) var(--space-md);
    }

    .bib-header h2 {
      font-size: 1.5rem;
    }
  }
</style>
