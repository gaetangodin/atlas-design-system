import type { Config } from "tailwindcss";
import { atlasPreset } from "../src/infrastructure/tailwind/preset";

// The full preset registers HeroUI's plugin AND the Atlas tokens, so the
// playground inherits the Xeekrs theme out of the box.
const config: Config = {
  presets: [atlasPreset as Partial<Config>],
  content: [
    "./app/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
    "../src/**/*.{ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
};

export default config;
