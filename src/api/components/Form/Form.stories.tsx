import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "./Form";
import { Input } from "../Input";
import { Button } from "../Button";

const meta: Meta<typeof Form> = {
  title: "Forms/Form",
  component: Form,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Form>;

export const SignIn: Story = {
  render: () => (
    <Form onSubmit={(e) => { e.preventDefault(); console.log("submit"); }} style={{ maxWidth: 360 }}>
      <Input label="Email" type="email" name="email" isRequired />
      <Input label="Password" type="password" name="password" isRequired />
      <Button type="submit" color="primary" fullWidth>Sign in</Button>
    </Form>
  ),
};
