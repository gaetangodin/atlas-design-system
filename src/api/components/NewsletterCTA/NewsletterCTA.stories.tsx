import type { Meta, StoryObj } from "@storybook/react";
import { NewsletterCTA } from "./NewsletterCTA";

const meta: Meta<typeof NewsletterCTA> = {
  title: "Patterns/NewsletterCTA",
  component: NewsletterCTA,
  tags: ["autodocs"],
  args: {
    title: "Get monthly updates",
    body: "Product news, hiring stories, and the occasional team interview.",
    onSubmit: (email) => console.log(email),
  },
};
export default meta;

type Story = StoryObj<typeof NewsletterCTA>;
export const Default: Story = {};
export const WithConsent: Story = {
  args: {
    consent: <>By subscribing you agree to our <a href="#">privacy policy</a>.</>,
  },
};
