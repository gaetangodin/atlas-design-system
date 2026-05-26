import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";
import { Card, CardBody } from "../Card";

const meta: Meta<typeof Carousel> = {
  title: "Media/Carousel",
  component: Carousel,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 600 }}>
      <Carousel slidesPerView={2} ariaLabel="Featured referrals">
        {[1, 2, 3, 4, 5].map((i) => (
          <Card key={i}>
            <CardBody>
              <div style={{ fontWeight: 500 }}>Slide {i}</div>
              <div style={{ fontSize: 13, color: "var(--muted-foreground)" }}>Carousel item</div>
            </CardBody>
          </Card>
        ))}
      </Carousel>
    </div>
  ),
};

export const Looped: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <Carousel loop dots={false}>
        {[1, 2, 3].map((i) => (
          <div key={i} style={{ padding: 32, background: "var(--muted)", borderRadius: 12, textAlign: "center" }}>
            Slide {i}
          </div>
        ))}
      </Carousel>
    </div>
  ),
};
