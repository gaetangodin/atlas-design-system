import {
  Avatar,
  AvatarGroup,
  Code,
  Divider,
  Image,
  Kbd,
  ScrollShadow,
  Snippet,
  StatusAvatar,
  User,
} from "@atlas/design-system";
import { Section } from "../Section";
import { Row } from "../Row";

const SCROLL_LINE_COUNT = 12;

export function DisplaySection() {
  return (
    <Section id="display" title="Display">
      <Row label="Avatar">
        <Avatar size="sm" name="GA" />
        <Avatar size="md" name="MB" />
        <Avatar size="lg" name="XK" color="primary" />
        <Avatar src="https://i.pravatar.cc/150?u=atlas" />
        <AvatarGroup max={3}>
          <Avatar src="https://i.pravatar.cc/150?u=a" />
          <Avatar src="https://i.pravatar.cc/150?u=b" />
          <Avatar src="https://i.pravatar.cc/150?u=c" />
          <Avatar src="https://i.pravatar.cc/150?u=d" />
          <Avatar src="https://i.pravatar.cc/150?u=e" />
        </AvatarGroup>
      </Row>
      <Divider className="my-2" />
      <Row label="Status">
        <StatusAvatar name="AL" status="online" />
        <StatusAvatar name="MR" status="busy" />
        <StatusAvatar name="SP" status="away" />
        <StatusAvatar name="JK" status="offline" />
      </Row>
      <Divider className="my-2" />
      <Row label="User">
        <User
          name="Avery Lin"
          description="avery@marbleu.co"
          avatarProps={{ src: "https://i.pravatar.cc/150?u=avery" }}
        />
      </Row>
      <Divider className="my-2" />
      <Row label="Image">
        <Image
          src="https://images.unsplash.com/photo-1503264116251-35a269479413?w=400&q=80"
          alt="Demo"
          width={200}
          height={120}
          radius="md"
        />
      </Row>
      <Divider className="my-2" />
      <Row label="Code">
        <Code>const atlas = "design-system"</Code>
        <Kbd keys={["command"]}>K</Kbd>
        <Snippet codeString="npm install @atlas/design-system">
          npm install @atlas/design-system
        </Snippet>
      </Row>
      <Divider className="my-2" />
      <Row label="Scroll shadow">
        <ScrollShadow className="h-32 w-full max-w-md rounded-md border border-border p-3">
          <div className="space-y-2 text-sm">
            {Array.from({ length: SCROLL_LINE_COUNT }, (_, i) => (
              <p key={i} className="text-muted-foreground">
                Line {i + 1} — atlas component playground row content with shadowed
                edges on overflow.
              </p>
            ))}
          </div>
        </ScrollShadow>
      </Row>
    </Section>
  );
}
