<script>
  import PageLayout from './PageLayout.svelte';
  import { getAllBibEntries } from '../../data/bibliography.js';

  const entries = getAllBibEntries();
</script>

<PageLayout currentPage="bibliographie" pageTitle="Bibliographie">
  <header class="bib-header">
    <h1>Bibliographie</h1>
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
</PageLayout>

<style>
  .bib-header {
    text-align: center;
    margin-bottom: var(--space-xl);
  }

  .bib-header h1 {
    font-size: 2rem;
    color: var(--color-terracotta);
    margin-bottom: var(--space-sm);
    padding-bottom: var(--space-sm);
    border-bottom: 2px solid var(--color-terracotta);
  }

  .bib-intro {
    color: var(--color-slate);
    font-size: 1rem;
  }

  .bib-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }

  .bib-entry {
    padding: var(--space-md);
    background: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    border-left: 3px solid var(--color-terracotta);
    scroll-margin-top: 80px;
    transition: background 0.2s ease;
  }

  .bib-entry:target {
    background: rgba(191, 91, 62, 0.1);
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
    .bib-header h1 {
      font-size: 1.5rem;
    }
  }
</style>
