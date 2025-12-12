<script>
  import GlossaryTerm from '../../GlossaryTerm.svelte';
  import DeepDiveTrigger from '../../elements/DeepDiveTrigger.svelte';
</script>

<div class="intro-vibecoding">
  <h2>Frontier-LLMs und Vibe Coding</h2>

  <div class="text-card">
    <p>
      <GlossaryTerm id="frontier-model">Frontier-LLMs</GlossaryTerm> haben ihre Fähigkeiten in Coding und <GlossaryTerm id="tool-use">Tool Use</GlossaryTerm> deutlich verbessert. Modelle wie Claude Opus 4.5, GPT-5.1-Codex und Gemini 3 Pro erreichen auf Benchmarks
      wie SWE-bench Verified (Jimenez et al., 2024), τ2-bench und Terminal-bench 2.0 (Laude Institute, 2025)
      hohe Werte für autonome Code-Generierung und Werkzeugnutzung. Mollick (2025) beschreibt diese Entwicklung
      pointiert: Vor drei Jahren beeindruckte es, dass eine Maschine ein Gedicht über Otter schreiben konnte.
      Heute diskutiert er statistische Methodik mit einem Agenten, der seine eigene Forschungsumgebung gebaut hat.
      Diese Benchmarks messen jedoch isolierte, wohldefinierte Aufgaben.
    </p>

    <p>
      Andrej Karpathy prägte den Begriff <GlossaryTerm id="vibe-coding">"Vibe Coding"</GlossaryTerm> (Karpathy, 2025).
      Das Phänomen beschreibt Code-Generierung durch natürlichsprachliche Anweisungen, bei der Entwickler den Output
      akzeptieren, ohne den generierten Code vollständig zu prüfen. Für Prototypen und Experimente kann das produktiv
      sein. Ohne Struktur führt es jedoch zu technischen Schulden und Abhängigkeit statt Verständnis.
    </p>

    <!-- Tweet-style quote -->
    <a href="https://x.com/karpathy/status/1886192184808149383" target="_blank" rel="noopener noreferrer" class="tweet-card">
      <div class="tweet-header">
        <div class="tweet-avatar">AK</div>
        <div class="tweet-author">
          <span class="tweet-name">Andrej Karpathy</span>
          <span class="tweet-handle">@karpathy</span>
        </div>
        <svg class="tweet-logo" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </div>
      <p class="tweet-text">
        There's a new kind of coding I call <strong>"vibe coding"</strong>, where you <mark>fully give in to the vibes</mark>,
        embrace exponentials, and <mark>forget that the code even exists</mark>. It's possible because the LLMs (e.g. Cursor
        Composer w Sonnet) are getting too good. Also I just talk to Composer with SuperWhisper so I barely even
        touch the keyboard. I ask for the dumbest things like "decrease the padding on the sidebar by half" because
        I'm too lazy to find it. <mark>I "Accept All" always, I don't read the diffs anymore.</mark> When I get error messages
        I just copy paste them in with no comment, usually that fixes it. <mark>The code grows beyond my usual comprehension</mark>,
        I'd have to really read through it for a while. Sometimes the LLMs can't fix a bug so I just <mark>work around it
        or ask for random changes until it goes away</mark>. It's not too bad for throwaway weekend projects, but still
        quite amusing. I'm building a project or webapp, but <mark>it's not really coding</mark> - I just see stuff, say stuff,
        run stuff, and copy paste stuff, and it mostly works.
      </p>
      <div class="tweet-footer">
        <span class="tweet-date">6:51 AM · Feb 2, 2025</span>
      </div>
    </a>

    <div class="deep-dive-triggers">
      <DeepDiveTrigger
        label="Vibe Coding Kritik"
        deepDiveId="vibe-coding-critique"
      />
    </div>
  </div>
</div>

<style>
  .intro-vibecoding {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
  }

  h2 {
    margin: 0;
    font-size: clamp(1.5rem, 4vw, 2rem);
    color: var(--color-terracotta);
    text-align: center;
  }

  /* Tweet Card Styles */
  .tweet-card {
    display: block;
    margin: var(--space-lg) 0 var(--space-md);
    padding: var(--space-md);
    background: #f7f9fa;
    border: 1px solid #e1e8ed;
    border-radius: 16px;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
  }

  .tweet-card:hover {
    background: #eff3f4;
    border-color: #cfd9de;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  }

  .tweet-header {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: var(--space-sm);
  }

  .tweet-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--color-slate), var(--color-terracotta));
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.9rem;
    flex-shrink: 0;
  }

  .tweet-author {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .tweet-name {
    font-weight: 700;
    font-size: 0.95rem;
    color: #0f1419;
  }

  .tweet-handle {
    font-size: 0.85rem;
    color: #536471;
  }

  .tweet-logo {
    width: 20px;
    height: 20px;
    fill: #0f1419;
    flex-shrink: 0;
  }

  .tweet-text {
    font-size: 0.9rem !important;
    line-height: 1.5 !important;
    color: #0f1419 !important;
    margin: 0 !important;
  }

  .tweet-text strong {
    color: var(--color-terracotta) !important;
  }

  .tweet-text mark {
    background: linear-gradient(120deg, rgba(255, 235, 59, 0.35) 0%, rgba(255, 193, 7, 0.35) 100%);
    padding: 0.05em 0.2em;
    border-radius: 3px;
    color: inherit;
  }

  .tweet-footer {
    margin-top: var(--space-sm);
    padding-top: var(--space-sm);
    border-top: 1px solid #e1e8ed;
  }

  .tweet-date {
    font-size: 0.8rem;
    color: #536471;
  }
</style>
