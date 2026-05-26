import { Heart, Plus } from "lucide-react";
import { Button, ButtonGroup, Divider, Link } from "@atlas/design-system";
import { Section } from "../Section";
import { Row } from "../Row";
import { INTENT_COLORS } from "../../constants/playground.constants";

export function ButtonsSection() {
  return (
    <Section
      id="buttons"
      title="Buttons"
      description="Pill by default. Use radius='lg' for toolbar split-buttons."
    >
      <Row label="Solid">
        {INTENT_COLORS.map((c) => (
          <Button key={c} color={c} variant="solid">
            {c}
          </Button>
        ))}
      </Row>
      <Divider className="my-2" />
      <Row label="Bordered">
        {INTENT_COLORS.map((c) => (
          <Button key={c} color={c} variant="bordered">
            {c}
          </Button>
        ))}
      </Row>
      <Divider className="my-2" />
      <Row label="Flat">
        {INTENT_COLORS.map((c) => (
          <Button key={c} color={c} variant="flat">
            {c}
          </Button>
        ))}
      </Row>
      <Divider className="my-2" />
      <Row label="Light">
        {INTENT_COLORS.map((c) => (
          <Button key={c} color={c} variant="light">
            {c}
          </Button>
        ))}
      </Row>
      <Divider className="my-2" />
      <Row label="Sizes">
        <Button size="sm" color="primary">Small</Button>
        <Button size="md" color="primary">Medium</Button>
        <Button size="lg" color="primary">Large</Button>
      </Row>
      <Divider className="my-2" />
      <Row label="States">
        <Button color="primary" startContent={<Plus />}>With icon</Button>
        <Button color="primary" isLoading>Loading</Button>
        <Button color="primary" isDisabled>Disabled</Button>
        <Button color="primary" isIconOnly aria-label="favorite">
          <Heart />
        </Button>
      </Row>
      <Divider className="my-2" />
      <Row label="Group">
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup variant="bordered" color="primary">
          <Button>Day</Button>
          <Button>Week</Button>
          <Button>Month</Button>
        </ButtonGroup>
      </Row>
      <Divider className="my-2" />
      <Row label="Link">
        <Link href="#buttons">Inline link</Link>
        <Link href="https://heroui.com" isExternal showAnchorIcon>External</Link>
      </Row>
    </Section>
  );
}
