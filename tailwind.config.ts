import type { Config } from "tailwindcss";
import { atlasPreset } from "./src/infrastructure/tailwind/preset";

/**
 * Default Tailwind config for consumers of this repo (e.g. running tests,
 * building Storybook). External consumers should `import { atlasPreset }`
 * and add it to their own config's `presets` array.
 */
const config: Config = {
  presets: [atlasPreset],
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
};

export default config;
