import type { Meta, StoryObj } from "@storybook/react";
import { ErrorState } from "./ErrorState";
import { Button } from "../Button";

const meta: Meta<typeof ErrorState> = {
  title: "Display/ErrorState",
  component: ErrorState,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ErrorState>;

export const ServerError: Story = {
  args: {
    code: "500",
    title: "Something went sideways",
    description: "We couldn't load your referrals. Try again in a moment.",
    primaryAction: <Button color="primary">Retry</Button>,
    secondaryAction: <Button variant="bordered">Back to home</Button>,
  },
};

export const NotFound: Story = {
  args: {
    code: "404",
    title: "Page not found",
    description: "We couldn't find what you were looking for.",
    primaryAction: <Button color="primary">Go home</Button>,
  },
};
