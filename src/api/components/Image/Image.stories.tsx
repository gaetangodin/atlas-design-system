import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "./Image";

const meta: Meta<typeof Image> = {
  title: "Display/Image",
  component: Image,
  tags: ["autodocs"],
  args: { src: "https://picsum.photos/seed/atlas/400/225", alt: "Sample image", width: 400, height: 225 },
};
export default meta;

type Story = StoryObj<typeof Image>;
export const Default: Story = {};
export const Round: Story = { args: { src: "https://picsum.photos/seed/atlas-round/120/120", width: 120, height: 120, radius: "full", alt: "Round portrait" } };
export const Zoomed: Story = { args: { isZoomed: true } };
