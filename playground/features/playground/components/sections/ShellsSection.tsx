import { useMemo } from "react";
import {
  BottomNav,
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Sidebar,
} from "@atlas/design-system";
import { Section } from "../Section";
import {
  mockBottomNavItems,
  mockSidebarItems,
} from "../../mocks/playground.mocks";
import { renderNavIcon } from "../../utils/playground.utils";

interface ShellsSectionProps {
  activeShellNavId: string;
  activeBottomNavId: string;
  onShellNavSelect: (id: string) => void;
  onBottomNavSelect: (id: string) => void;
}

export function ShellsSection({
  activeShellNavId,
  activeBottomNavId,
  onShellNavSelect,
  onBottomNavSelect,
}: ShellsSectionProps) {
  const sidebarItems = useMemo(
    () =>
      mockSidebarItems.map((item) => ({
        id: item.id,
        label: item.label,
        icon: renderNavIcon(item.iconKey, "size-4"),
        ...(item.badge ? { badge: item.badge } : {}),
      })),
    [],
  );

  const bottomNavItems = useMemo(
    () =>
      mockBottomNavItems.map((item) => ({
        id: item.id,
        label: item.label,
        icon: renderNavIcon(item.iconKey, "size-5"),
        ...(item.badge ? { badge: item.badge } : {}),
      })),
    [],
  );

  return (
    <Section id="shells" title="App shells">
      <div className="space-y-6">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Navbar
          </p>
          <div className="overflow-hidden rounded-md border border-border">
            <Navbar maxWidth="full" position="static" isBordered>
              <NavbarBrand>
                <span className="text-sm font-semibold">Atlas</span>
              </NavbarBrand>
              <NavbarContent justify="center">
                <NavbarItem>
                  <Link href="#" size="sm">Docs</Link>
                </NavbarItem>
                <NavbarItem isActive>
                  <Link href="#" size="sm" color="primary">Components</Link>
                </NavbarItem>
                <NavbarItem>
                  <Link href="#" size="sm">Tokens</Link>
                </NavbarItem>
              </NavbarContent>
              <NavbarContent justify="end">
                <Button size="sm" color="primary">Get started</Button>
              </NavbarContent>
            </Navbar>
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Sidebar
          </p>
          <div className="grid grid-cols-[auto_1fr] overflow-hidden rounded-md border border-border bg-background">
            <Sidebar
              items={sidebarItems}
              activeId={activeShellNavId}
              onSelect={onShellNavSelect}
              brand={<span className="text-sm font-semibold">Atlas</span>}
            />
            <div className="p-6 text-sm text-muted-foreground">
              Active section: <span className="text-foreground">{activeShellNavId}</span>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Bottom nav
          </p>
          <div className="relative h-44 overflow-hidden rounded-md border border-border bg-background">
            <div className="p-4 text-sm text-muted-foreground">
              Active tab: <span className="text-foreground">{activeBottomNavId}</span>
            </div>
            <div className="absolute inset-x-0 bottom-0">
              <BottomNav
                items={bottomNavItems}
                activeId={activeBottomNavId}
                onSelect={onBottomNavSelect}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
