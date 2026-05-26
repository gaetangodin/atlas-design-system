# Component: Code

## Description
Inline code, keyboard hints, and copyable code blocks. Three components
in one file because they share the monospace typography and muted
surface — but they're conceptually distinct.

## Exports

- `Code` — inline `<code>` (`rounded-sm bg-muted px-1.5 py-0.5 text-xs`)
- `Kbd` — single keyboard key (`<kbd>`-styled)
- `Snippet` — multi-line code block with a copy button

## Import

```tsx
import { Code, Kbd, Snippet } from "@atlas/design-system";
```

## Code props

Inherits HeroUI `CodeProps`. Most-used: `color`, `size`, `children`.

## Kbd props

| Prop  | Type                          | Description |
| ----- | ----------------------------- | ----------- |
| `keys`| `string[]`                    | Special key glyphs (`["command", "shift"]`). |
| `children` | `ReactNode`              | The visible label (e.g. `"K"`). |

## Snippet props

| Prop         | Type                          | Default       | Description |
| ------------ | ----------------------------- | ------------- | ----------- |
| `codeString` | `string`                      | derived from children | What gets copied. |
| `hideCopyButton` | `boolean`                 | `false`       | |
| `symbol`     | `string`                      | `"$"`         | Prefix (e.g. `>`, `$`, none). |
| `variant`    | `"flat" \| "bordered" \| "shadow"` | `"flat"`  | |

## Examples

```tsx
Run <Code>pnpm install</Code> to install dependencies.

<span>Press <Kbd keys={["command"]}>K</Kbd> to open search.</span>

<Snippet>pnpm install @atlas/design-system</Snippet>

<Snippet hideCopyButton symbol="">
{`import { Button } from "@atlas/design-system";

<Button>Click me</Button>`}
</Snippet>
```
