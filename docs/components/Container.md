# Component: Container

## Description
Semantic max-width wrapper for page-level content. Sets the row centered
and adds responsive horizontal padding (`px-4 sm:px-6 lg:px-8`).

## Exports

- `Container`

## Import

```tsx
import { Container } from "@atlas/design-system";
```

## Props

| Prop     | Type                                                           | Default | Description |
| -------- | -------------------------------------------------------------- | ------- | ----------- |
| `size`   | `"sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "full"`        | `"lg"`  | Max-width (Tailwind screen breakpoints). |
| `padded` | `boolean`                                                      | `true`  | Apply responsive horizontal padding. |

## Examples

```tsx
<Container>
  <Hero headline="…" body="…" />
  <FeatureGrid items={…} />
</Container>

// Narrow column for reading content
<Container size="md">
  <article>…</article>
</Container>

// Edge-to-edge dashboard
<Container size="full" padded={false}>
  <DashboardShell …>…</DashboardShell>
</Container>
```
