import {
  Bell,
  Menu as MenuIcon,
  MessageSquare,
  Search,
} from "lucide-react";
import {
  Avatar,
  BrandLogo,
  Button,
  Divider,
  Input,
  MegaSearch,
  MobileTopBar,
  NotificationBadge,
  SiteSwitcherTrigger,
  TopBar,
} from "@atlas/design-system";
import { Section } from "../Section";
import { Row } from "../Row";

export function TopBarSection() {
  return (
    <Section
      id="topbar"
      title="TopBar & shells"
      description="Simplified slot-based shells. Apps pass content into brand/center/right; no app state lives in Atlas."
    >
      <Row label="Desktop">
        <div className="w-full overflow-hidden rounded-lg border border-border">
          <TopBar
            brand={
              <>
                <BrandLogo variant="xeekrs" height={28} />
                <SiteSwitcherTrigger
                  siteName="Marble HQ"
                  initials="MU"
                  onOpen={() => {}}
                />
              </>
            }
            center={
              <Input
                placeholder="Search candidates, postings, courses…"
                startContent={<Search className="size-4 text-muted-foreground" />}
                className="max-w-xl"
              />
            }
            right={
              <>
                <NotificationBadge content="3" color="danger">
                  <Button isIconOnly variant="flat" aria-label="Notifications">
                    <Bell className="size-4" />
                  </Button>
                </NotificationBadge>
                <Button isIconOnly variant="flat" aria-label="Messages">
                  <MessageSquare className="size-4" />
                </Button>
                <Avatar size="sm" name="GA" />
              </>
            }
          />
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="Mobile">
        <div className="w-full max-w-md overflow-hidden rounded-lg border border-border">
          <MobileTopBar
            sticky={false}
            leading={
              <Button isIconOnly variant="light" aria-label="Open menu">
                <MenuIcon className="size-5" />
              </Button>
            }
            brand={
              <p className="truncate text-base font-semibold tracking-tight">
                Recruitment
              </p>
            }
            trailing={
              <>
                <Button isIconOnly variant="light" aria-label="Search">
                  <Search className="size-5" />
                </Button>
                <NotificationBadge content="2" color="danger">
                  <Button isIconOnly variant="light" aria-label="Notifications">
                    <Bell className="size-5" />
                  </Button>
                </NotificationBadge>
              </>
            }
          />
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="MegaSearch">
        <div className="w-full max-w-4xl">
          <MegaSearch
            searchInput={
              <Input
                placeholder="Search the platform"
                startContent={<Search className="size-4 text-muted-foreground" />}
              />
            }
            onClose={() => {}}
            columns={[
              <div key="people">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  People
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="rounded-md p-2 hover:bg-muted/60">Avery Lin</li>
                  <li className="rounded-md p-2 hover:bg-muted/60">Morgan Reyes</li>
                  <li className="rounded-md p-2 hover:bg-muted/60">Sasha Park</li>
                </ul>
              </div>,
              <div key="postings">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Job postings
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="rounded-md p-2 hover:bg-muted/60">Frontend Engineer (Remote)</li>
                  <li className="rounded-md p-2 hover:bg-muted/60">Customer Success Lead</li>
                </ul>
              </div>,
              <div key="courses">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Courses
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="rounded-md p-2 hover:bg-muted/60">Interview prep · Intro</li>
                  <li className="rounded-md p-2 hover:bg-muted/60">Resume writing 101</li>
                </ul>
              </div>,
            ]}
            footer="Press Enter to see all results"
          />
        </div>
      </Row>
    </Section>
  );
}
