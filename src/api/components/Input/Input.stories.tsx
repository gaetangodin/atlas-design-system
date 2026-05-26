import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"],
  args: { label: "Email", placeholder: "you@xeekrs.com" },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const WithDescription: Story = {
  args: { description: "We'll never share your address." },
};
export const Invalid: Story = {
  args: { isInvalid: true, errorMessage: "That email is already registered." },
};
export const Disabled: Story = { args: { isDisabled: true } };
export const Required: Story = { args: { isRequired: true } };
export const Password: Story = { args: { label: "Password", type: "password" } };
