/**
 * Deterministic id generator for a11y associations (label/input).
 * Increments per call; safe under React 18 concurrent rendering when
 * combined with React's `useId`.
 */

let counter = 0;

export function nextId(prefix = "atlas"): string {
  counter += 1;
  return `${prefix}-${counter}`;
}
