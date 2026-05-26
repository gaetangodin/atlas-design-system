# Component: Stack

## Description
Flex layout primitive with token-based gap. `Stack` is column-default;
`HStack` is the row shortcut (centers items by default); `VStack` is
column. Use these to keep spacing on-grid instead of arbitrary
margin/gap classes.

## Exports

- `Stack`
- `HStack` — row, `align="center"` default
- `VStack` — column

## Import

```tsx
import { Stack, HStack, VStack } from "@atlas/design-system";
```

## Props

| Prop        | Type                                                          | Default      | Description |
| ----------- | ------------------------------------------------------------- | ------------ | ----------- |
| `direction` | `"row" \| "column"`                                         | `"column"`   | `Stack` only — `HStack`/`VStack` set this. |
| `gap`       | Tailwind spacing token (`0`, `0.5`, `1`, `2`, …, `16`)        | `3` (12px)   | Spacing between children. |
| `align`     | `"start" \| "center" \| "end" \| "baseline" \| "stretch"` | —            | Cross-axis alignment. |
| `justify`   | `"start" \| "center" \| "end" \| "between" \| "around" \| "evenly"` | — | Main-axis alignment. |
| `wrap`      | `boolean`                                                     | `false`      | Allow children to wrap. |
| `inline`    | `boolean`                                                     | `false`      | `inline-flex` instead of `flex`. |

## Examples

```tsx
<VStack gap={4}>
  <Heading>Title</Heading>
  <p>Body</p>
  <HStack gap={2} justify="end">
    <Button variant="light">Cancel</Button>
    <Button color="primary">Save</Button>
  </HStack>
</VStack>

// Inline list of badges with wrap
<Stack direction="row" gap={2} wrap>
  {skills.map((s) => <Badge key={s}>{s}</Badge>)}
</Stack>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use Stack tokens (`gap={4}`) so spacing stays on the 4px grid. | Use arbitrary `style={{ marginTop: 13 }}` to nudge things. |
| Compose Stack inside Stack for layout hierarchies. | Reach for grid when a flex column would do. |
