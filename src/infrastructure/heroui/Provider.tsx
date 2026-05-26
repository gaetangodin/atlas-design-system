/**
 * AtlasProvider — wraps the app with HeroUI's provider configured for
 * the Atlas/Preline theme.
 *
 * Lives in infrastructure/ because it's a HeroUI-specific runtime
 * adapter. api/ re-exports it under the public name `AtlasProvider`.
 */

import { HeroUIProvider } from "@heroui/react";
import type { ReactNode } from "react";

export interface AtlasProviderProps {
  children: ReactNode;
  /** Locale used for HeroUI's i18n (date formats, etc.). Defaults to en-US. */
  locale?: string;
  /** Override navigation handler (e.g. for Next.js). */
  navigate?: (path: string) => void;
}

export function AtlasProvider({ children, locale = "en-US", navigate }: AtlasProviderProps) {
  return (
    <HeroUIProvider locale={locale} navigate={navigate}>
      {children}
    </HeroUIProvider>
  );
}
