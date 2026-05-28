# Atlas Design System — Agent Instructions

## Cursor Cloud specific instructions

### Overview

Atlas is a pure-frontend React component library (118+ components) built on HeroUI + Tailwind CSS with a layered architecture. No backends, databases, Docker, or external services are needed.

### Node & Package Manager

- **Node 20** is required (pinned in `.nvmrc`).
- **pnpm 10.29.3** is declared in `package.json` `"packageManager"` field. Corepack provisions it.
- The Cloud Agent VM ships a `/exec-daemon/node` shim (Node 22) that shadows nvm. You must prepend the nvm Node 20 path to `$PATH`:
  ```
  export PATH="$HOME/.nvm/versions/node/v20.20.2/bin:$PATH"
  ```
  Run this before every pnpm/node command, or add it to your shell rc.

### Key commands

See `package.json` `"scripts"` for the full list. The essentials:

| Task | Command |
|------|---------|
| Install deps | `pnpm install` |
| Type-check | `pnpm typecheck` |
| Lint | `pnpm lint` |
| Tests | `pnpm test` |
| Build (library) | `pnpm build` |
| Storybook (dev) | `pnpm storybook` (port 6006) |
| Watch mode | `pnpm dev` |

### Known issues on `main`

- **`pnpm lint`** has ~30 pre-existing errors (unused imports, hooks-in-render in stories, `{}` type). These are not regressions from your changes — check your diff only.
- **`pnpm build`** may fail with TS2742 declaration-emit errors on `BottomSheet` (`vaul`/`@radix-ui/react-dialog` type portability). `pnpm typecheck` passes; the issue is specific to `tsconfig.build.json` with `declaration: true` under pnpm 10's strict hoisting. The CI workflow (`.github/workflows/ci.yml`) uses pnpm 9, which has different hoisting behavior.
- **Color parse warnings** (`error Unable to parse color from string: var(--background, ...)`) appear in test output and Storybook startup — these are non-fatal HeroUI theme-processing messages when CSS custom properties are used as color values. Ignore them.

### esbuild build scripts

pnpm 10 blocks postinstall scripts by default. After `pnpm install`, Vitest/Vite still resolve esbuild correctly through pnpm's internal module paths, so tests and Storybook work without manual rebuilds.

### Playground (optional)

The `playground/` directory is a separate Next.js app with its own `package-lock.json` (uses npm, not pnpm). Install separately if needed: `cd playground && npm install --legacy-peer-deps && npm run dev`.
