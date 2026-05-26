import type { Meta, StoryObj } from "@storybook/react";
import { BrandSwatch } from "./BrandSwatch";

const meta: Meta<typeof BrandSwatch> = {
  title: "Brand/BrandSwatch",
  component: BrandSwatch,
  tags: ["autodocs"],
  args: { name: "Lavender 500", value: "#A3B5ED", role: "Primary CTA", utility: "bg-lavender-500" },
};
export default meta;

type Story = StoryObj<typeof BrandSwatch>;

export const Default: Story = {};
export const Dark: Story = {
  args: { name: "Earth 900", value: "#0C2120", role: "Foreground", utility: "text-earth-900" },
};
export const WithDescription: Story = {
  args: {
    name: "Emerald 500",
    value: "#00685D",
    role: "Success",
    utility: "bg-emerald-500",
    description: "Used on confirmations and positive states.",
  },
};
