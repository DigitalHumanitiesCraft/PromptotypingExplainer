import { writable } from 'svelte/store';
import { deepDives } from '../data/deep-dives.js';

// Store für den aktuell geöffneten Deep Dive
export const currentDeepDive = writable(null);
export const isDeepDiveOpen = writable(false);

/**
 * Öffnet ein Deep Dive Panel
 * @param {string} id - Die ID des Deep Dives (z.B. 'scholar-centered-design')
 */
export function openDeepDive(id) {
  const dive = deepDives[id];
  if (dive) {
    currentDeepDive.set(dive);
    isDeepDiveOpen.set(true);
    // Scroll verhindern während Panel offen
    document.body.style.overflow = 'hidden';
  } else {
    console.warn(`Deep Dive not found: ${id}`);
  }
}

/**
 * Schließt das Deep Dive Panel
 */
export function closeDeepDive() {
  isDeepDiveOpen.set(false);
  // Nach Animation aufräumen
  setTimeout(() => {
    currentDeepDive.set(null);
  }, 300);
  // Scroll wiederherstellen
  document.body.style.overflow = '';
}
