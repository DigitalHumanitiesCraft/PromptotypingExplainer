<script>
  import { fade, fly, scale } from 'svelte/transition';
</script>

<div class="phase2-fragen">
  <h3 in:fade={{ duration: 400 }}>Fragen emergieren</h3>
  <p class="description" in:fade={{ delay: 150, duration: 400 }}>
    Die Exploration offenbart Möglichkeiten: Was lässt sich mit diesen Daten zeigen?
  </p>

  <div class="sketches-container">
    <div class="sketch" in:fly={{ x: -30, duration: 500, delay: 300 }}>
      <div class="sketch-label">Timeline?</div>
      <div class="sketch-box timeline">
        <div class="sketch-line"></div>
        <div class="sketch-dot"></div>
        <div class="sketch-dot"></div>
        <div class="sketch-dot"></div>
      </div>
    </div>

    <div class="question-mark" in:scale={{ duration: 400, delay: 500 }}>?</div>

    <div class="sketch" in:fly={{ x: 30, duration: 500, delay: 400 }}>
      <div class="sketch-label">Karte?</div>
      <div class="sketch-box map">
        <div class="sketch-pin"></div>
        <div class="sketch-pin"></div>
        <div class="sketch-pin"></div>
      </div>
    </div>
  </div>

  <div class="more-questions" in:fade={{ delay: 700, duration: 400 }}>
    <span class="question">Netzwerk?</span>
    <span class="question">Statistik?</span>
    <span class="question">Suche?</span>
  </div>

  <p class="conclusion" in:fade={{ delay: 900, duration: 400 }}>
    Diese Erkenntnisse leiten die <strong>Destillation</strong> in Phase 3
  </p>
</div>

<style>
  .phase2-fragen {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
    text-align: center;
  }

  h3 {
    color: var(--color-black);
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    margin: 0;
  }

  .description {
    color: var(--color-slate);
    font-size: clamp(0.9rem, 1.6vw, 1.05rem);
    max-width: 500px;
    margin: 0;
  }

  .sketches-container {
    display: flex;
    align-items: center;
    gap: var(--space-xl);
  }

  .sketch {
    text-align: center;
  }

  .sketch-label {
    font-size: 0.85rem;
    color: var(--color-slate);
    margin-bottom: var(--space-sm);
    font-weight: 500;
  }

  .sketch-box {
    width: 100px;
    height: 70px;
    border: 2px dashed var(--color-slate);
    border-radius: 8px;
    opacity: 0.7;
    position: relative;
    background: rgba(255, 255, 255, 0.5);
    transition: opacity 0.2s ease, border-color 0.2s ease;
  }

  .sketch:hover .sketch-box {
    opacity: 1;
    border-color: var(--color-terracotta);
  }

  .sketch-box.timeline {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 var(--space-md);
  }

  .sketch-line {
    position: absolute;
    top: 50%;
    left: 15%;
    right: 15%;
    height: 2px;
    background: var(--color-slate);
  }

  .sketch-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--color-terracotta);
    position: relative;
    z-index: 1;
  }

  .sketch-box.map {
    position: relative;
    background: linear-gradient(135deg, rgba(96, 125, 139, 0.1) 0%, rgba(96, 125, 139, 0.05) 100%);
  }

  .sketch-pin {
    position: absolute;
    width: 8px;
    height: 8px;
    background: var(--color-terracotta);
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .sketch-pin:nth-child(1) { top: 25%; left: 30%; }
  .sketch-pin:nth-child(2) { top: 55%; left: 60%; }
  .sketch-pin:nth-child(3) { top: 40%; left: 75%; }

  .question-mark {
    font-size: 3rem;
    color: var(--color-terracotta);
    font-weight: 700;
    line-height: 1;
  }

  .more-questions {
    display: flex;
    gap: var(--space-md);
    flex-wrap: wrap;
    justify-content: center;
  }

  .question {
    font-size: 0.9rem;
    color: var(--color-slate);
    padding: var(--space-xs) var(--space-sm);
    border: 1px dashed var(--color-slate);
    border-radius: 4px;
    opacity: 0.6;
  }

  .conclusion {
    color: var(--color-slate);
    font-size: clamp(0.95rem, 1.8vw, 1.1rem);
    margin: 0;
  }

  .conclusion strong {
    color: var(--color-terracotta);
  }

  @media (max-width: 767px) {
    .sketches-container {
      gap: var(--space-lg);
    }

    .sketch-box {
      width: 80px;
      height: 55px;
    }

    .question-mark {
      font-size: 2.5rem;
    }
  }
</style>
