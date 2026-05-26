import type { Preview } from "@storybook/react";
import type { ReactNode } from "react";
import { AtlasProvider } from "../src/api";
import "./preview.css";

/**
 * Every story renders inside AtlasProvider so HeroUI context + the
 * Xeekrs theme are available. `preview.css` carries the token
 * `:root` block (mirrors what consumers get from styles.css) plus the
 * Tailwind layers — see the file header.
 */
const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: {
      default: "app",
      values: [
        { name: "app", value: "#f9f9f4" },
        { name: "card", value: "#ffffff" },
        { name: "dark", value: "#122120" },
      ],
    },
    a11y: { test: "todo" },
  },
  decorators: [
    (Story): ReactNode => (
      <AtlasProvider>
        <div style={{ padding: 24 }}>
          <Story />
        </div>
      </AtlasProvider>
    ),
  ],
};

export default preview;
