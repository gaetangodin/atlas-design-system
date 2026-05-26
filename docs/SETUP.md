# Local setup

The sandbox couldn't install deps or stage commits, so the steps
below run on your machine. They're stable / reproducible.

## 1. Install deps

```bash
cd ~/Documents/GitHub/atlas-design-system
pnpm install     # or: npm install --legacy-peer-deps
```

`pnpm` is recommended because Atlas's optional peer deps
(`vaul`, `sonner`, `recharts`, `embla-carousel-react`) get cleaner
hoisting under it. They're optional — if you don't import the
matching components they aren't needed.

## 2. Typecheck

```bash
pnpm typecheck
```

**Expected first-run friction**: HeroUI's prop type names sometimes
drift between minor versions (`itemClasses` slot keys, `classNames`
slot keys). If `pnpm typecheck` flags any of the following — they're
non-functional misalignments, not real bugs — fix locally:

- `Accordion.itemClasses.trigger` — HeroUI may name it differently in
  your installed version. Compare against
  `Xeekrsmainapp/src/components/heroui-branded/` (those are known to
  compile against `@heroui/react@^2.7`).
- `Calendar.cellButton` — same caveat.
- `Pagination` slot keys — same.

## 3. Build

```bash
pnpm build
```

Outputs to `dist/`. Consumers import from `@atlas/design-system`.

## 4. Stage and commit

```bash
git add -A
git status                # sanity check
git commit -m "feat: atlas v0.1 — 86 components, layered architecture, xeekrs theme"
git push origin main
```

## 5. Wire into Xeekrs

In `Xeekrsmainapp` (separate repo):

1. Add Atlas as a workspace path or `file:` dependency. See
   [`docs/migration/XEEKRS_UI_SHIM.md`](./migration/XEEKRS_UI_SHIM.md).
2. Update `Xeekrsmainapp/tailwind.config.ts` to include
   `atlasPresetTokensOnly`. See [`docs/INTEROP.md`](./INTEROP.md).
3. New feature folders (e.g. `features/referrals/ui/`) import from
   `@atlas/design-system`.

## Optional peer deps — when to install

| Component(s) you use            | Install                       |
| ------------------------------- | ----------------------------- |
| `BottomSheet`                   | `pnpm add vaul`               |
| `Toaster`, `toast()`            | `pnpm add sonner`             |
| `BarChart`/`LineChart`/etc.     | `pnpm add recharts`           |
| `Carousel`                      | `pnpm add embla-carousel-react` |

Skip if you don't import the matching component.

## Smoke test snippet

Drop this into any page to verify the tree renders:

```tsx
import {
  AtlasProvider,
  Button, Card, CardBody,
  Badge, StatCard, Stack,
} from "@atlas/design-system";

export default function Smoke() {
  return (
    <AtlasProvider>
      <Stack gap={4} className="p-6 max-w-md">
        <Card>
          <CardBody>
            <Stack gap={3}>
              <Badge variant="flat" color="primary">Match 92%</Badge>
              <div className="text-base font-medium">Maya Rodriguez</div>
              <div className="text-sm text-muted-foreground">Senior Designer · Vancouver</div>
              <Button variant="solid" color="primary">View profile</Button>
            </Stack>
          </CardBody>
        </Card>
        <StatCard label="Active" value="128" delta="+12%" deltaTone="positive" />
      </Stack>
    </AtlasProvider>
  );
}
```

If it renders without runtime errors and styles look like the Atlas
preview, you're good.
