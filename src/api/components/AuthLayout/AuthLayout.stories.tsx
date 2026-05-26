import type { Meta, StoryObj } from "@storybook/react";
import { AuthLayout } from "./AuthLayout";
import { Form } from "../Form";
import { Input } from "../Input";
import { Button } from "../Button";
import { Link } from "../Link";

const meta: Meta<typeof AuthLayout> = {
  title: "Patterns/AuthLayout",
  component: AuthLayout,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof AuthLayout>;

export const SignIn: Story = {
  args: {
    brand: <strong>Xeekrs</strong>,
    title: "Welcome back",
    description: "Sign in to your Xeekrs account.",
    footer: <>New here? <Link href="#">Create an account</Link></>,
    children: (
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input label="Email" type="email" name="email" isRequired />
        <Input label="Password" type="password" name="password" isRequired />
        <Button type="submit" color="primary" fullWidth>Sign in</Button>
      </Form>
    ),
  },
};
