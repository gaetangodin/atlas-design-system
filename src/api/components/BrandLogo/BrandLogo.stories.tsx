import type { Meta, StoryObj } from "@storybook/react";
import { BrandLogo } from "./BrandLogo";

const meta: Meta<typeof BrandLogo> = {
  title: "Brand/BrandLogo",
  component: BrandLogo,
  tags: ["autodocs"],
  args: { variant: "xeekrs", height: 32 },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "xeekrs", "xeekrsWhite", "xeekrsTagline", "xeekrsTaglineWhite",
        "xeekrsTaglineStacked", "xeekrsTaglineStackedWhite",
        "xeekrsSocial", "employnext",
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof BrandLogo>;

export const Default: Story = {};
export const Tagline: Story = { args: { variant: "xeekrsTagline" } };
export const Stacked: Story = { args: { variant: "xeekrsTaglineStacked" } };
export const Social: Story = { args: { variant: "xeekrsSocial", height: 80 } };
export const WhiteOnDark: Story = {
  args: { variant: "xeekrsWhite" },
  decorators: [(Story) => <div style={{ background: "#0C2120", padding: 24 }}><Story /></div>],
};
