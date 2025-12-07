import { writable, derived } from 'svelte/store';

// Aktuelle Phase (0-5: Intro, Phase1, Phase2, Phase3, Phase4, Outro)
export const currentPhase = writable(0);

// Aktueller Step innerhalb der Phase
export const currentStep = writable(0);

// Step-Struktur: Definiert alle Steps pro Phase
export const stepStructure = [
  {
    id: 'intro',
    label: 'Promptotyping',
    number: null,
    subtitle: 'Einführung',
    steps: [
      { id: 'definition', label: 'Definition' },
      { id: 'kernprinzip', label: 'Kernprinzip' },
      { id: 'methodik', label: 'Methodik' },
      { id: 'phasen', label: 'Phasen' },
    ]
  },
  {
    id: 'phase1',
    label: 'Preparation',
    number: 1,
    subtitle: 'Materialsammlung',
    steps: [
      { id: 'titel', label: 'Übersicht' },
      { id: 'rohdaten', label: 'Rohdaten' },
      { id: 'sammlung', label: 'Sammlung' },
    ]
  },
  {
    id: 'phase2',
    label: 'Exploration',
    number: 2,
    subtitle: 'Datenanalyse',
    steps: [
      { id: 'struktur', label: 'Struktur' },
      { id: 'entitaeten', label: 'Entitäten' },
      { id: 'fragen', label: 'Fragen' },
    ]
  },
  {
    id: 'phase3',
    label: 'Destillation',
    number: 3,
    subtitle: 'Vault (.md Files)',
    steps: [
      { id: 'titel', label: 'Übersicht' },
      { id: 'dokumente', label: '.md Dokumente' },
      { id: 'vault', label: 'Vault' },
    ]
  },
  {
    id: 'phase4',
    label: 'Implementation',
    number: 4,
    subtitle: 'Prototype + Vault-Update',
    steps: [
      { id: 'titel', label: 'Übersicht' },
      { id: 'iteration', label: 'Iteration' },
      { id: 'vault-update', label: 'Vault-Update' },
    ]
  },
  {
    id: 'outro',
    label: 'Praxis',
    number: null,
    subtitle: 'Case Studies',
    steps: [
      { id: 'beispiele', label: 'Beispiele' },
      { id: 'zusammenfassung', label: 'Zusammenfassung' },
    ]
  },
];

// Gesamtzahl aller Steps
export const totalSteps = stepStructure.reduce((acc, phase) => acc + phase.steps.length, 0);

// Derived: Globaler Step-Index (0 bis totalSteps-1)
export const globalStepIndex = derived(
  [currentPhase, currentStep],
  ([$phase, $step]) => {
    let index = 0;
    for (let i = 0; i < $phase; i++) {
      index += stepStructure[i].steps.length;
    }
    return index + $step;
  }
);

// Derived: Globaler Progress (0-1)
export const globalProgress = derived(
  globalStepIndex,
  ($index) => $index / (totalSteps - 1)
);

// Derived: Progress innerhalb der aktuellen Phase (0-1)
export const phaseProgress = derived(
  [currentPhase, currentStep],
  ([$phase, $step]) => {
    const phase = stepStructure[$phase];
    if (!phase || phase.steps.length <= 1) return 0;
    return $step / (phase.steps.length - 1);
  }
);

// Derived: Aktuelle Phase-Info
export const currentPhaseInfo = derived(
  currentPhase,
  ($phase) => stepStructure[$phase] || stepStructure[0]
);

// Derived: Aktueller Step-Info
export const currentStepInfo = derived(
  [currentPhase, currentStep],
  ([$phase, $step]) => {
    const phase = stepStructure[$phase];
    if (!phase) return null;
    return phase.steps[$step] || phase.steps[0];
  }
);

// Legacy-Kompatibilität: phaseBoundaries für bestehende Komponenten
export const phaseBoundaries = stepStructure.map((phase, index) => ({
  id: phase.id,
  label: phase.label,
  steps: phase.steps.map(s => s.id),
}));

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
 * Scroll to a specific step by element ID
 */
export function scrollToStep(stepId) {
  if (typeof window === 'undefined') return;

  const element = document.getElementById(stepId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Parse URL hash and scroll to the correct step
 * Supports: #intro, #intro-definition, #phase1-workspace, etc.
 */
export function scrollToHash() {
  if (typeof window === 'undefined') return;

  const hash = window.location.hash.slice(1);
  if (!hash) return;

  // Try to find element directly
  const element = document.getElementById(hash);
  if (element) {
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return;
  }

  // Parse hash: "phase1" or "phase1-workspace"
  const parts = hash.split('-');
  const phaseId = parts[0];
  const stepId = parts.slice(1).join('-');

  // Find phase
  const phaseIndex = stepStructure.findIndex(p => p.id === phaseId);
  if (phaseIndex === -1) return;

  const phase = stepStructure[phaseIndex];

  // Build full step ID
  let targetId = phaseId;
  if (stepId) {
    const stepExists = phase.steps.some(s => s.id === stepId);
    if (stepExists) {
      targetId = `${phaseId}-${stepId}`;
    }
  } else {
    // Default to first step of phase
    targetId = `${phaseId}-${phase.steps[0].id}`;
  }

  setTimeout(() => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
}

/**
 * Update URL hash based on current phase and step
 */
let lastHash = '';

export function updateHash(phaseIndex, stepIndex) {
  if (typeof window === 'undefined') return;

  const phase = stepStructure[phaseIndex];
  if (!phase) return;

  const step = phase.steps[stepIndex];
  const newHash = step ? `${phase.id}-${step.id}` : phase.id;

  if (newHash !== lastHash) {
    lastHash = newHash;
    history.replaceState(null, '', `#${newHash}`);
  }
}
