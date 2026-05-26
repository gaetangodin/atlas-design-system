import {
  Badge,
  Container,
  Divider,
  HStack,
  Spacer,
  Stack,
  VStack,
} from "@atlas/design-system";
import { Section } from "../Section";
import { Row } from "../Row";

export function LayoutSection() {
  return (
    <Section id="layout" title="Layout primitives">
      <Row label="HStack">
        <HStack gap={3} className="w-full">
          <div className="rounded-md bg-muted px-3 py-2 text-sm">A</div>
          <div className="rounded-md bg-muted px-3 py-2 text-sm">B</div>
          <div className="rounded-md bg-muted px-3 py-2 text-sm">C</div>
        </HStack>
      </Row>
      <Divider className="my-2" />
      <Row label="VStack">
        <VStack gap={2} className="w-full">
          <div className="rounded-md bg-muted px-3 py-2 text-sm">Top</div>
          <div className="rounded-md bg-muted px-3 py-2 text-sm">Middle</div>
          <div className="rounded-md bg-muted px-3 py-2 text-sm">Bottom</div>
        </VStack>
      </Row>
      <Divider className="my-2" />
      <Row label="Stack">
        <Stack direction="row" gap={4} align="center" wrap className="w-full">
          <Badge color="primary">flex-row</Badge>
          <Badge color="primary">gap=4</Badge>
          <Badge color="primary">align=center</Badge>
          <Badge color="primary">wrap</Badge>
        </Stack>
      </Row>
      <Divider className="my-2" />
      <Row label="Container">
        <Container size="md" className="w-full rounded-md bg-muted py-4 text-center text-sm">
          Container size="md"
        </Container>
      </Row>
      <Divider className="my-2" />
      <Row label="Spacer">
        <div className="flex w-full items-center rounded-md bg-muted px-3 py-2 text-sm">
          <span>Left</span>
          <Spacer />
          <span>Right</span>
        </div>
      </Row>
      <Divider className="my-2" />
      <Row label="Divider">
        <div className="w-full">
          <p className="text-sm">Above</p>
          <Divider className="my-2" />
          <p className="text-sm">Below</p>
        </div>
      </Row>
    </Section>
  );
}
