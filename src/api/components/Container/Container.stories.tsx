import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: (args) => (
    <Container {...args}>
      <div style={{ background: "var(--muted)", padding: 16, borderRadius: 8 }}>
        Container at <code>size={"\"lg\""}</code>.
      </div>
    </Container>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {(["sm", "md", "lg", "xl", "2xl"] as const).map((s) => (
        <Container key={s} size={s}>
          <div style={{ background: "var(--muted)", padding: 8, borderRadius: 6, textAlign: "center" }}>
            size={s}
          </div>
        </Container>
      ))}
    </div>
  ),
};
