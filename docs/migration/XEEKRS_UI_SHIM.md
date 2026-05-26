# `@xeekrs/ui` shim plan

Per the user constraint — "we'll keep Xeekrs as is, and build new contained
modules moving forward" — this shim is **staged, not applied**. The files
below are ready to copy into `Xeekrsmainapp/packages/xeekrs-ui/` when you
decide to flip the switch.

## What changes

`@xeekrs/ui` becomes a thin re-export of `@atlas/design-system` for new
code, while keeping its existing exports working unchanged. The package
itself stays in the workspace; only its internals change.

After the shim lands:

- `import { Button } from "@xeekrs/ui"` → resolves to Atlas `Button`.
- `import { Button } from "@atlas/design-system"` → also resolves to Atlas `Button`.
- App-specific composites (e.g. `academy-training-offer-cta.tsx`) stay
  in `@xeekrs/ui`, untouched.
- `buttonVariants` (the legacy CVA export) stays available so existing
  callers that destructure variant strings keep compiling.

## Prerequisite — make Atlas resolvable

Pick one:

1. **Workspace path:** copy or git-clone Atlas into
   `Xeekrsmainapp/packages/atlas-design-system/` and add it to
   `Xeekrsmainapp/package.json`'s `workspaces`. Cleanest for monorepo
   habit; survives offline.
2. **Symlink via `file:`:** add to `Xeekrsmainapp/package.json`:
   ```json
   "dependencies": {
     "@atlas/design-system": "file:../../atlas-design-system"
   }
   ```
   Then `pnpm install`. Quickest to try.
3. **Private registry:** publish Atlas (e.g. GH Packages) and add
   `"@atlas/design-system": "^0.1.0"` to deps. Best for team rollout.

## Files to copy (ready to apply)

### `packages/xeekrs-ui/package.json` (replace existing)

```json
{
  "name": "@xeekrs/ui",
  "version": "0.2.0",
  "private": true,
  "type": "module",
  "sideEffects": false,
  "exports": {
    ".": {
      "types": "./src/index.ts",
      "default": "./src/index.ts"
    }
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "lucide-react": "^0.487.0"
  },
  "dependencies": {
    "@atlas/design-system": "*",
    "@radix-ui/react-slot": "^1.1.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0"
  }
}
```

### `packages/xeekrs-ui/src/index.ts` (replace existing)

```ts
/**
 * @xeekrs/ui — transitional shim around @atlas/design-system.
 *
 * New code should import directly from "@atlas/design-system".
 * This package re-exports Atlas under the legacy @xeekrs/ui name
 * during the feature-by-feature migration, then will be deleted.
 */

// Atlas-backed exports (new canonical home)
export { Button } from "@atlas/design-system";
export type { ButtonProps } from "@atlas/design-system";

// Legacy CVA variant strings — kept until callers migrate to
// Atlas's typed prop union.
export { buttonVariants } from "./button-variants-legacy";

// App-specific composites that have NOT moved to Atlas
export { AcademyTrainingOfferCta } from "./academy-training-offer-cta";

// Utilities (unchanged)
export { cn } from "./utils";
```

### `packages/xeekrs-ui/src/button-variants-legacy.ts` (new file)

```ts
/**
 * Legacy CVA variants kept for callers that destructure variant
 * strings (`buttonVariants({ variant: "ghost", size: "lg" })`). New
 * code should pass Atlas's variant prop directly.
 *
 * @deprecated Use Atlas Button props instead.
 */
import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all rounded-full",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline: "border border-border bg-background text-foreground hover:bg-muted",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "bg-transparent hover:bg-muted",
        link: "bg-transparent text-primary underline-offset-4 hover:underline px-0",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        default: "h-9 px-4",
        lg: "h-10 px-6 text-base",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);
```

### `packages/xeekrs-ui/src/button.tsx` (delete)

Existing file becomes dead code — `Button` is now exported from
`index.ts` via Atlas. Delete in the same PR that lands the shim.

### `packages/xeekrs-ui/src/utils.ts` (unchanged)

Keep as-is. It's the basic `cn` helper used across the app; not worth
rerouting through Atlas.

## Verifying the shim works

After applying:

```bash
cd Xeekrsmainapp
pnpm install
pnpm typecheck
pnpm dev
```

Smoke-test:

1. Open any page that uses `<Button>` from `@xeekrs/ui` — visuals
   should be identical.
2. Open any page that uses `<Button>` from `src/components/ui/button.tsx`
   — visuals identical (that file already re-exports from `@xeekrs/ui`).
3. Add a new component that imports from `@atlas/design-system`
   directly — should compile and render.

If anything regresses visually, the most likely cause is that
Xeekrs's `tailwind.config.ts` doesn't yet include the
`atlasPresetTokensOnly` preset. Add it per `docs/INTEROP.md` step 2.

## Rollback

If you need to back out, revert the three changed files. Atlas remains
a separate package — there's no migration data to undo.

## Eventual removal

Once `@xeekrs/ui` has no callers (verified by grepping the codebase):

```bash
# from Xeekrsmainapp root
pnpm remove @xeekrs/ui --filter "*"
rm -rf packages/xeekrs-ui
```

Update root `package.json` `workspaces` to drop the line. That's it.
