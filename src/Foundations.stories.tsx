import type { Meta, StoryObj } from "@storybook/react";
import { tokens } from "./domain/tokens/colors";
import { radius } from "./domain/tokens/radius";

const meta: Meta = { title: "Foundations/Tokens" };
export default meta;

type Story = StoryObj;

export const Colors: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
      {Object.entries(tokens).map(([name, t]) => (
        <div key={name}>
          <div
            style={{
              height: 56,
              borderRadius: 8,
              background: `var(${t.var}, ${t.fallback})`,
              border: "0.5px solid rgba(18,33,32,0.1)",
            }}
          />
          <div style={{ fontSize: 12, marginTop: 4 }}>{name}</div>
          <div style={{ fontSize: 11, color: "#78716c", fontFamily: "monospace" }}>{t.fallback}</div>
        </div>
      ))}
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      {Object.entries(radius).map(([name, value]) => (
        <div key={name} style={{ textAlign: "center" }}>
          <div
            style={{
              width: 72,
              height: 72,
              background: "#0c2120",
              borderRadius: value,
            }}
          />
          <div style={{ fontSize: 12, marginTop: 6 }}>{name}</div>
        </div>
      ))}
    </div>
  ),
};
