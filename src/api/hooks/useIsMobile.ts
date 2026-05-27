/**
 * `useIsMobile` — responds true when the viewport is narrower than
 * the mobile breakpoint (default 768px). SSR-safe: returns false on
 * the server and reconciles after mount.
 *
 * Direct port of `Xeekrsmainapp/src/components/ui/use-mobile.ts`.
 */

import { useEffect, useState } from "react";

export const MOBILE_BREAKPOINT = 768;

export function useIsMobile(breakpoint = MOBILE_BREAKPOINT): boolean {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(window.innerWidth < breakpoint);
    mql.addEventListener("change", update);
    update();
    return () => mql.removeEventListener("change", update);
  }, [breakpoint]);
  return isMobile;
}
