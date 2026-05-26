/**
 * PlaygroundShell — chrome + nav for the gallery.
 *
 * Pure presentational component: receives `navItems` + `version` + children
 * and renders the sticky sidebar / mobile menu / page header / footer.
 *
 * The hash-sync and intersection-observer scroll-spy live here because
 * they're pure UI behavior tied to the rendered DOM. The page hook owns
 * domain state; this owns scroll-spy state only.
 */

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { Badge, Button } from "@atlas/design-system";
import type { PlaygroundNavItem } from "../types/playground.types";

interface NavLinksProps {
  items: PlaygroundNavItem[];
  activeId: string;
  onPick?: () => void;
  className?: string;
}

function NavLinks({ items, activeId, onPick, className }: NavLinksProps) {
  return (
    <ul className={className}>
      {items.map(({ id, label }) => {
        const active = activeId === id;
        return (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={onPick}
              className={[
                "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              ].join(" ")}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

interface PlaygroundShellProps {
  navItems: PlaygroundNavItem[];
  version?: string;
  children: ReactNode;
}

export function PlaygroundShell({
  navItems,
  version = "v0.1.0",
  children,
}: PlaygroundShellProps) {
  const [activeId, setActiveId] = useState(navItems[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);

  const syncFromHash = useCallback(() => {
    const raw = window.location.hash.replace(/^#/, "");
    if (raw && navItems.some((n) => n.id === raw)) {
      setActiveId(raw);
    }
  }, [navItems]);

  useEffect(() => {
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [syncFromHash]);

  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const first = visible[0];
        if (first?.target.id) {
          setActiveId(first.target.id);
        }
      },
      { root: null, rootMargin: "-72px 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5, 1] },
    );

    for (const el of elements) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, [navItems]);

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="sticky top-0 hidden h-screen w-56 shrink-0 flex-col border-r border-border bg-card/50 lg:flex">
        <div className="border-b border-border p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Atlas
          </p>
          <p className="mt-1 text-lg font-semibold tracking-tight">Playground</p>
          <div className="mt-3">
            <Badge variant="flat" color="primary">
              {version}
            </Badge>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto p-3" aria-label="Gallery sections">
          <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            Components
          </p>
          <NavLinks items={navItems} activeId={activeId} className="space-y-0.5" />
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-40 flex items-center justify-between gap-3 border-b border-border bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Atlas playground
            </p>
            <p className="truncate text-base font-semibold tracking-tight">
              Component gallery
            </p>
          </div>
          <Button
            size="sm"
            variant="flat"
            isIconOnly
            aria-expanded={mobileOpen}
            aria-controls="playground-mobile-panel"
            aria-label={mobileOpen ? "Close section menu" : "Open section menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </header>

        {mobileOpen ? (
          <div
            id="playground-mobile-panel"
            className="border-b border-border bg-card px-4 py-3 lg:hidden"
          >
            <nav aria-label="Gallery sections">
              <NavLinks
                items={navItems}
                activeId={activeId}
                className="space-y-0.5"
                onPick={() => setMobileOpen(false)}
              />
            </nav>
          </div>
        ) : null}

        <div className="sticky top-0 z-30 hidden border-b border-border bg-background/90 px-6 py-2 backdrop-blur lg:block lg:px-8">
          <div className="mx-auto flex max-w-4xl items-end justify-between gap-4">
            <div>
              <h1 className="text-xl font-semibold tracking-tight">
                Component gallery
              </h1>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Live preview of Atlas primitives — hot-reloads from the package source.
              </p>
            </div>
            <Badge variant="flat" color="primary" className="shrink-0">
              {version}
            </Badge>
          </div>
        </div>

        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-4xl">{children}</div>
        </main>

        <footer className="border-t border-border px-6 py-6 text-center text-xs text-muted-foreground lg:px-8">
          Edit{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-[11px]">
            features/playground/components/sections/*
          </code>{" "}
          to extend the gallery.
        </footer>
      </div>
    </div>
  );
}
