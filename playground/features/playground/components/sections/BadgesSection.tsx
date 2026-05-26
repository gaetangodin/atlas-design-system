import { Bell, Inbox } from "lucide-react";
import {
  Badge,
  Button,
  Divider,
  NotificationBadge,
} from "@atlas/design-system";
import { Section } from "../Section";
import { Row } from "../Row";
import { INTENT_COLORS } from "../../constants/playground.constants";

export function BadgesSection() {
  return (
    <Section id="badges" title="Badges">
      <Row label="Solid">
        {INTENT_COLORS.map((c) => (
          <Badge key={c} color={c}>{c}</Badge>
        ))}
      </Row>
      <Divider className="my-2" />
      <Row label="Flat">
        {INTENT_COLORS.map((c) => (
          <Badge key={c} color={c} variant="flat">{c}</Badge>
        ))}
      </Row>
      <Divider className="my-2" />
      <Row label="Bordered">
        {INTENT_COLORS.map((c) => (
          <Badge key={c} color={c} variant="bordered">{c}</Badge>
        ))}
      </Row>
      <Divider className="my-2" />
      <Row label="Dot">
        {INTENT_COLORS.map((c) => (
          <Badge key={c} color={c} variant="dot">{c}</Badge>
        ))}
      </Row>
      <Divider className="my-2" />
      <Row label="Notification">
        <NotificationBadge content="5" color="danger">
          <Button isIconOnly variant="flat" aria-label="Inbox">
            <Inbox className="size-4" />
          </Button>
        </NotificationBadge>
        <NotificationBadge content="" color="danger" shape="circle">
          <Button isIconOnly variant="flat" aria-label="Alerts">
            <Bell className="size-4" />
          </Button>
        </NotificationBadge>
      </Row>
    </Section>
  );
}
