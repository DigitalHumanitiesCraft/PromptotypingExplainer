/**
 * Progress Animation Utilities
 * Hilfsfunktionen für Scroll-basierte Animationen
 * Extrahiert aus wiederholten Berechnungen in allen Scene-Komponenten
 */

/**
 * Berechnet Opacity basierend auf Progress innerhalb eines Bereichs
 * @param {number} progress - Aktueller Scroll-Progress (0-1)
 * @param {number} start - Start des Bereichs (0-1)
 * @param {number} end - Ende des Bereichs (0-1)
 * @returns {number} Opacity-Wert (0-1)
 *
 * @example
 * // Opacity von 0→1 zwischen 15% und 30% Progress
 * $: textOpacity = fadeIn(progress, 0.15, 0.30);
 */
export function fadeIn(progress, start, end) {
  if (progress <= start) return 0;
  if (progress >= end) return 1;
  return (progress - start) / (end - start);
}

/**
 * Berechnet Opacity für Fade-Out-Animation
 * @param {number} progress - Aktueller Scroll-Progress (0-1)
 * @param {number} start - Start des Fade-Outs (0-1)
 * @param {number} end - Ende des Fade-Outs (0-1)
 * @param {number} minOpacity - Minimale Opacity (Standard: 0)
 * @returns {number} Opacity-Wert (minOpacity-1)
 */
export function fadeOut(progress, start, end, minOpacity = 0) {
  if (progress <= start) return 1;
  if (progress >= end) return minOpacity;
  return 1 - ((progress - start) / (end - start)) * (1 - minOpacity);
}

/**
 * Interpoliert einen Wert zwischen zwei Endpunkten
 * @param {number} progress - Aktueller Scroll-Progress (0-1)
 * @param {number} start - Start des Bereichs
 * @param {number} end - Ende des Bereichs
 * @param {number} fromValue - Startwert
 * @param {number} toValue - Endwert
 * @returns {number} Interpolierter Wert
 *
 * @example
 * // Y-Translation von 20px → 0px zwischen 60% und 80%
 * $: translateY = lerp(progress, 0.6, 0.8, 20, 0);
 */
export function lerp(progress, start, end, fromValue, toValue) {
  const t = fadeIn(progress, start, end);
  return fromValue + (toValue - fromValue) * t;
}

/**
 * Prüft ob Progress in einem Bereich liegt
 * @param {number} progress - Aktueller Scroll-Progress (0-1)
 * @param {number} start - Start des Bereichs
 * @param {number} end - Ende des Bereichs
 * @returns {boolean}
 */
export function inRange(progress, start, end) {
  return progress >= start && progress < end;
}

/**
 * Berechnet sichtbare Elemente basierend auf Progress
 * @param {number} progress - Aktueller Scroll-Progress (0-1)
 * @param {number} start - Start der Animation
 * @param {number} duration - Dauer für alle Elemente
 * @param {number} totalItems - Anzahl der Elemente
 * @returns {number} Anzahl sichtbarer Elemente
 *
 * @example
 * // Zeige Chat-Nachrichten nacheinander
 * $: visibleMessages = countVisible(progress, 0.35, 0.50, messages.length);
 */
export function countVisible(progress, start, duration, totalItems) {
  if (progress <= start) return 0;
  const normalizedProgress = Math.min(1, (progress - start) / duration);
  return Math.floor(normalizedProgress * totalItems + 1);
}

/**
 * Erzeugt eine Easing-Funktion für natürlichere Animationen
 * @param {number} t - Normalisierter Progress (0-1)
 * @param {'easeOut' | 'easeIn' | 'easeInOut'} type - Easing-Typ
 * @returns {number} Ge-eastes Value (0-1)
 */
export function ease(t, type = 'easeOut') {
  switch (type) {
    case 'easeIn':
      return t * t;
    case 'easeOut':
      return 1 - (1 - t) * (1 - t);
    case 'easeInOut':
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    default:
      return t;
  }
}
