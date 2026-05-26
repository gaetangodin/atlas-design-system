import type { Meta, StoryObj } from "@storybook/react";
import { Code, Kbd, Snippet } from "./Code";

const meta: Meta = { title: "Display/Code, Kbd, Snippet" };
export default meta;

type Story = StoryObj;

export const Inline: Story = {
  render: () => <p>Run <Code>pnpm install</Code> to install dependencies.</p>,
};
export const Keyboard: Story = {
  render: () => <span>Press <Kbd keys={["command"]}>K</Kbd> to open search.</span>,
};
export const Block: Story = {
  render: () => <Snippet>pnpm install @atlas/design-system</Snippet>,
};
