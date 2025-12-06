<script>
  export let type = 'human'; // human, llm, error
  export let text = '';
  export let pattern = '';

  const config = {
    human: {
      bgColor: 'var(--color-terracotta)',
      textColor: 'var(--color-white)',
      align: 'flex-end',
    },
    llm: {
      bgColor: 'var(--color-slate)',
      textColor: 'var(--color-white)',
      align: 'flex-start',
    },
    error: {
      bgColor: 'var(--color-error)',
      textColor: 'var(--color-white)',
      align: 'center',
    },
  };

  $: style = config[type] || config.human;
</script>

<div
  class="chat-bubble"
  class:human={type === 'human'}
  class:llm={type === 'llm'}
  class:error={type === 'error'}
  style="align-self: {style.align};"
>
  {#if pattern}
    <span class="pattern-label">{pattern}</span>
  {/if}
  <div
    class="bubble"
    style="background-color: {style.bgColor}; color: {style.textColor};"
  >
    {#if type === 'error'}
      <span class="error-icon">✕</span>
    {/if}
    <p>{text}</p>
  </div>
</div>

<style>
  .chat-bubble {
    display: flex;
    flex-direction: column;
    max-width: 85%;
    gap: 4px;
  }

  .pattern-label {
    font-size: 0.65rem;
    color: var(--color-slate);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0 var(--space-sm);
  }

  .human .pattern-label {
    text-align: right;
  }

  .bubble {
    padding: var(--space-sm) var(--space-md);
    border-radius: 12px;
    font-size: 0.8rem;
    line-height: 1.4;
  }

  .human .bubble {
    border-bottom-right-radius: 4px;
  }

  .llm .bubble {
    border-bottom-left-radius: 4px;
  }

  .error .bubble {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    font-family: var(--font-mono);
    font-size: 0.7rem;
  }

  .error-icon {
    font-weight: bold;
    font-size: 1rem;
  }

  p {
    margin: 0;
  }
</style>
