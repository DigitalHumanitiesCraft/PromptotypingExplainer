import { writable, derived } from 'svelte/store';

// Globaler Scroll-Progress (0-1 über gesamte Seite)
export const globalProgress = writable(0);

// Aktuelle Phase (0-4: Intro, Phase1, Phase2, Phase3, Phase4)
export const currentPhase = writable(0);

// Phase-Grenzen in vh (aus knowledge.md → TEIL 3)
export const phaseBoundaries = [
  { id: 'intro', start: 0, end: 100 },
  { id: 'phase1', start: 100, end: 200 },
  { id: 'phase2', start: 200, end: 320 },
  { id: 'phase3', start: 320, end: 440 },
  { id: 'phase4', start: 440, end: 600 },
];

// Gesamte Scroll-Länge in vh
export const totalScrollLength = 600;

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
