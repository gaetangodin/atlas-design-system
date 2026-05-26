"use client";

import type { ReactNode } from "react";
import { AtlasProvider } from "@atlas/design-system";

/**
 * Client boundary for app-wide context.
 *
 * `AtlasProvider` wraps HeroUI's provider, which relies on React context
 * and browser APIs — so it has to run in a client component. The root
 * layout (a server component) renders this around `children`.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <AtlasProvider>{children}</AtlasProvider>;
}
