import { isBrowser } from "./is-browser";

export function prefersReducedMotion() {
  return isBrowser() && window.matchMedia("(prefers-reduced-motion)").matches;
}
