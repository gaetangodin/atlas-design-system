/**
 * Port: how the application/api layers ask for an icon by name.
 *
 * Implementations live in infrastructure/ — e.g. LucideIconRegistry.
 * api/ depends on the port type, never on a specific icon library.
 */

import type { ReactNode } from "react";

export interface IconRegistryPort {
  /** Render an icon by canonical name. Returns null if not registered. */
  render(name: string, props?: { size?: number; className?: string }): ReactNode | null;
  /** Whether a given name is known to this registry. */
  has(name: string): boolean;
  /** All registered icon names — useful for tooling and Storybook. */
  list(): readonly string[];
}
