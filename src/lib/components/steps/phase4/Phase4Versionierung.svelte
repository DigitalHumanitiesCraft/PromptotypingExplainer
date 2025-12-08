<script>
  import { fade, fly } from 'svelte/transition';
</script>

<div class="phase4-versionierung">
  <div class="header-group" in:fade={{ duration: 400 }}>
    <span class="label">Versionierung</span>
    <h3>Validierte Projektstände</h3>
  </div>

  <div class="content-grid">
    <div class="text-card" in:fly={{ x: -30, duration: 500, delay: 200 }}>
      <p>
        Im Promptotyping-Prozess definiert jeder Git-Commit einen methodischen
        <strong>Savepoint</strong>. Ein solcher Punkt markiert einen durch
        Fachexpertise validierten Status Quo ("Baseline").
      </p>
      <p>
        Die Versionierung ermöglicht risikofreie Iterationen: Führt ein Prompt
        zu halluzinierten oder fehlerhaften Ergebnissen, erlaubt der Savepoint
        ein sofortiges Zurücksetzen auf den letzten validen Stand.
      </p>
      <p>
        Die Commit-Historie fungiert somit als technischer Beleg des methodischen
        Fortschritts.
      </p>
    </div>

    <div class="commit-example" in:fly={{ x: 30, duration: 500, delay: 300 }}>
      <div class="commit-card">
        <div class="commit-header">
          <span class="commit-icon">
            <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
              <path d="M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"/>
            </svg>
          </span>
          <span class="commit-label">Commit Message</span>
        </div>

        <div class="commit-title">
          <span class="commit-type">feat:</span> Implement visualization based on updated DATA.md
        </div>

        <div class="commit-body">
          <p>Reflects new entity relationship defined in session 3.</p>
          <p>Validated against Requirement US-04.</p>
        </div>

        <div class="commit-meta">
          <span class="commit-hash">#a3f7b2c</span>
          <span class="commit-date">2024-12-07</span>
        </div>
      </div>

      <div class="savepoint-diagram">
        <div class="timeline">
          <div class="timeline-point validated">
            <span class="point"></span>
            <span class="label">Baseline</span>
          </div>
          <div class="timeline-line"></div>
          <div class="timeline-point current">
            <span class="point"></span>
            <span class="label">Iteration</span>
          </div>
          <div class="timeline-line dashed"></div>
          <div class="timeline-point future">
            <span class="point"></span>
            <span class="label">Nächster Savepoint</span>
          </div>
        </div>
        <div class="rollback-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 14l-4-4 4-4"/>
            <path d="M5 10h11a4 4 0 1 1 0 8h-1"/>
          </svg>
          <span>Rollback bei Fehlern</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .phase4-versionierung {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
  }

  .header-group {
    text-align: center;
  }

  .label {
    display: block;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-terracotta);
    margin-bottom: var(--space-xs);
  }

  h3 {
    color: var(--color-black);
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    margin: 0;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: var(--space-xl);
    width: 100%;
    max-width: 1100px;
    align-items: start;
  }

  .text-card {
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .text-card p {
    font-size: clamp(0.9rem, 1.6vw, 1rem);
    color: var(--color-black);
    line-height: 1.7;
    margin: 0 0 var(--space-md) 0;
    text-align: left;
  }

  .text-card p:last-child {
    margin-bottom: 0;
  }

  .text-card strong {
    color: var(--color-terracotta);
  }

  .commit-example {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
  }

  .commit-card {
    background: #1e1e1e;
    border-radius: 8px;
    padding: var(--space-md);
    font-family: var(--font-mono);
  }

  .commit-header {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: var(--space-sm);
    padding-bottom: var(--space-sm);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .commit-icon {
    color: var(--color-terracotta);
  }

  .commit-label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: rgba(255, 255, 255, 0.5);
  }

  .commit-title {
    font-size: 0.95rem;
    color: white;
    margin-bottom: var(--space-sm);
  }

  .commit-type {
    color: var(--color-terracotta);
  }

  .commit-body {
    padding: var(--space-sm) 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .commit-body p {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    margin: 0 0 4px 0;
    line-height: 1.5;
  }

  .commit-meta {
    display: flex;
    justify-content: space-between;
    margin-top: var(--space-sm);
    padding-top: var(--space-sm);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .commit-hash {
    font-size: 0.75rem;
    color: var(--color-terracotta);
  }

  .commit-date {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.5);
  }

  .savepoint-diagram {
    background: white;
    border-radius: 8px;
    padding: var(--space-md);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .timeline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-sm) 0;
  }

  .timeline-point {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
  }

  .timeline-point .point {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid var(--color-slate);
    background: white;
  }

  .timeline-point.validated .point {
    background: var(--color-slate);
  }

  .timeline-point.current .point {
    border-color: var(--color-terracotta);
    background: var(--color-terracotta);
  }

  .timeline-point.future .point {
    border-style: dashed;
    border-color: rgba(96, 125, 139, 0.5);
  }

  .timeline-point .label {
    font-size: 0.7rem;
    color: var(--color-slate);
    text-transform: none;
    letter-spacing: normal;
  }

  .timeline-line {
    flex: 1;
    height: 2px;
    background: var(--color-slate);
    margin: 0 var(--space-xs);
  }

  .timeline-line.dashed {
    background: none;
    border-top: 2px dashed rgba(96, 125, 139, 0.5);
  }

  .rollback-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-xs);
    margin-top: var(--space-sm);
    padding-top: var(--space-sm);
    border-top: 1px solid rgba(96, 125, 139, 0.1);
  }

  .rollback-arrow svg {
    width: 20px;
    height: 20px;
    color: var(--color-terracotta);
  }

  .rollback-arrow span {
    font-size: 0.75rem;
    color: var(--color-slate);
  }

  @media (max-width: 900px) {
    .content-grid {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }
  }
</style>
