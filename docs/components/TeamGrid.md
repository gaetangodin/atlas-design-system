# Component: TeamGrid

## Description
Grid of team-member tiles — avatar + name + role + optional socials.
For longer profiles, drop in [`ProfileCard`](./ProfileCard.md).

## Exports

- `TeamGrid`

## Import

```tsx
import { TeamGrid } from "@atlas/design-system";
```

## Props

| Prop      | Type                          | Default | Description |
| --------- | ----------------------------- | ------- | ----------- |
| `members` | `TeamMember[]`                | —       | |
| `columns` | `2 \| 3 \| 4`               | `4`     | |

### `TeamMember`

| Field       | Type        | Description |
| ----------- | ----------- | ----------- |
| `id`        | `string`    | Stable key. |
| `name`      | `ReactNode` | |
| `role`      | `ReactNode` | |
| `avatarUrl` | `string`    | |
| `initials`  | `string`    | Fallback. |
| `socials`   | `ReactNode` | Row of icon links (LinkedIn, X, etc.). |

## Examples

```tsx
<TeamGrid
  columns={4}
  members={[
    { id: "1", name: "Maya R.", role: "Senior Designer", initials: "MR" },
    { id: "2", name: "Jin K.",  role: "Engineering Lead", initials: "JK" },
    { id: "3", name: "Ana T.",  role: "Recruiter",        initials: "AT" },
    { id: "4", name: "Sam P.",  role: "Customer Success", initials: "SP" },
  ]}
/>
```
