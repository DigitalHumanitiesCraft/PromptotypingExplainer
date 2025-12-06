import { writable, derived } from 'svelte/store';

// Globaler Scroll-Progress (0-1 über gesamte Seite)
export const globalProgress = writable(0);

// Aktuelle Phase (0-5: Intro, Phase1, Phase2, Phase3, Phase4, Outro)
export const currentPhase = writable(0);

// Phase-Grenzen in vh (aus knowledge.md → TEIL 3 + Outro)
// Mit steps für URL-basierte Navigation
// Jeder Step sollte ~50-60vh haben für ein volles Scroll-Wheel pro Step
export const phaseBoundaries = [
  { id: 'intro', start: 0, end: 300, label: 'Promptotyping', steps: ['definition', 'system142', 'herausforderung', 'methodik', 'phasen'] },      // 5 steps × 60vh = 300vh
  { id: 'phase1', start: 300, end: 600, label: 'Vorbereitung', steps: ['titel', 'text', 'sammeln', 'zusammenfuehren', 'workspace'] },            // 5 steps × 60vh = 300vh
  { id: 'phase2', start: 600, end: 840, label: 'Exploration', steps: ['data', 'dialog', 'exploration', 'entitaeten'] },                          // 4 steps × 60vh = 240vh
  { id: 'phase3', start: 840, end: 1080, label: 'Destillation', steps: ['requirements', 'layout', 'partikel', 'dokumente'] },                    // 4 steps × 60vh = 240vh
  { id: 'phase4', start: 1080, end: 1380, label: 'Implementation', steps: ['implementation', 'expert', 'dialog', 'browser', 'loops'] },          // 5 steps × 60vh = 300vh
  { id: 'outro', start: 1380, end: 1620, label: 'Praxis', steps: ['konklusion', 'screenshot', 'cases', 'imperative'] },                          // 4 steps × 60vh = 240vh
];

// Gesamte Scroll-Länge in vh
export const totalScrollLength = 1620;

// Derived: Progress innerhalb der aktuellen Phase (0-1)
export const phaseProgress = derived(
  [globalProgress, currentPhase],
  ([$global, $phase]) => {
    const boundary = phaseBoundaries[$phase];
    if (!boundary) return 0;

    const phaseStart = boundary.start / totalScrollLength;
    const phaseEnd = boundary.end / totalScrollLength;
    const phaseLength = phaseEnd - phaseStart;

    if (phaseLength === 0) return 0;

    const progress = ($global - phaseStart) / phaseLength;
    return Math.max(0, Math.min(1, progress));
  }
);

// Reduced Motion Preference
export const prefersReducedMotion = writable(false);

// Initialize reduced motion check (call in onMount)
export function initReducedMotion() {
  if (typeof window !== 'undefined') {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.set(query.matches);

    query.addEventListener('change', (e) => {
      prefersReducedMotion.set(e.matches);
    });
  }
}

/**
 * Parse URL hash and scroll to the correct position
 * Supports: #intro, #phase1, #phase1-workspace, #phase2-dialog, etc.
 * Call this after ScrollTrigger is initialized
 */
export function scrollToHash() {
  if (typeof window === 'undefined') return;

  const hash = window.location.hash.slice(1); // Remove #
  if (!hash) return;

  // Parse hash: "phase1" or "phase1-workspace"
  const parts = hash.split('-');
  const phaseId = parts[0];
  const stepId = parts.slice(1).join('-'); // Handle multi-part step names

  // Find phase
  const phaseIndex = phaseBoundaries.findIndex(p => p.id === phaseId);
  if (phaseIndex === -1) return;

  const phase = phaseBoundaries[phaseIndex];

  // Calculate base scroll position for phase start
  const phaseStartVh = phase.start;
  const phaseHeightVh = phase.end - phase.start;

  let targetProgress = 0; // Progress within phase (0-1)

  if (stepId && phase.steps) {
    const stepIndex = phase.steps.indexOf(stepId);
    if (stepIndex !== -1) {
      // Calculate progress for this step
      targetProgress = (stepIndex + 0.5) / phase.steps.length;
    }
  }

  // Convert to scroll position using ScrollTrigger if available
  // @ts-ignore
  const ScrollTrigger = window.ScrollTrigger;
  if (ScrollTrigger) {
    const triggers = ScrollTrigger.getAll();
    const phaseTrigger = triggers.find(t => t.trigger?.id === phaseId);

    if (phaseTrigger) {
      const targetScroll = phaseTrigger.start + (phaseTrigger.end - phaseTrigger.start) * targetProgress;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      return;
    }
  }

  // Fallback: use vh calculation
  const targetVh = phaseStartVh + (phaseHeightVh * targetProgress);
  const targetPx = (targetVh / 100) * window.innerHeight;
  window.scrollTo({ top: targetPx, behavior: 'smooth' });
}

/**
 * Update URL hash based on current phase and step
 * Call this from Phase.svelte on progress update
 */
let lastLoggedStep = '';

export function updateHash(phaseIndex, stepProgress) {
  if (typeof window === 'undefined') return;

  const phase = phaseBoundaries[phaseIndex];
  if (!phase) return;

  let newHash = phase.id;
  let stepIndex = 0;
  let stepId = '';

  if (phase.steps && phase.steps.length > 0) {
    stepIndex = Math.floor(stepProgress * phase.steps.length);
    const clampedIndex = Math.min(stepIndex, phase.steps.length - 1);
    stepId = phase.steps[clampedIndex];
    if (stepId) {
      newHash = `${phase.id}-${stepId}`;
    }
  }

  // Log step changes
  if (newHash !== lastLoggedStep) {
    console.log(`📍 ${phase.label} [${stepIndex + 1}/${phase.steps?.length || 1}] → ${stepId || 'start'} | progress: ${(stepProgress * 100).toFixed(0)}%`);
    lastLoggedStep = newHash;
  }

  // Only update if different (avoid history spam)
  if (window.location.hash !== `#${newHash}`) {
    history.replaceState(null, '', `#${newHash}`);
  }
}
