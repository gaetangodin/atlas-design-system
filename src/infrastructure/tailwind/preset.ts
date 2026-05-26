/**
 * Atlas Tailwind preset (full).
 *
 * Includes the Xeekrs-branded HeroUI plugin. Use this preset for **new**
 * apps that want Atlas to provide both tokens AND HeroUI's themed
 * primitive layer.
 *
 * ⚠️  Apps that already register `heroui({...})` (like the existing
 * `Xeekrsmainapp/tailwind.config.ts`) MUST use `atlasPresetTokensOnly`
 * instead — registering HeroUI twice silently breaks the first config.
 */

import type { Config } from "tailwindcss";
import { atlasPresetTokensOnly } from "./preset-tokens-only";
import { xeekrsPlugin } from "../heroui/xeekrs-theme";

const mergedPlugins = [...((atlasPresetTokensOnly.plugins as unknown[]) ?? []), xeekrsPlugin];

export const atlasPreset: Partial<Config> = {
  ...atlasPresetTokensOnly,
  plugins: mergedPlugins as Config["plugins"],
};
