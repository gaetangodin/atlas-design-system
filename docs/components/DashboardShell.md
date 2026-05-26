# Component: DashboardShell

## Description
Three-region app-layout chrome: sidebar + sticky topbar + main + optional
right rail. Atlas only manages the chrome — pass any sidebar / topbar /
rail node you like. Pair with [`Sidebar`](./Sidebar.md) for the default
nav rail.

## Exports

- `DashboardShell`

## Import

```tsx
import { DashboardShell, Sidebar } from "@atlas/design-system";
```

## Props

| Prop        | Type        | Default | Description |
| ----------- | ----------- | ------- | ----------- |
| `sidebar`   | `ReactNode` | —       | **Required.** Left rail. |
| `topbar`    | `ReactNode` | —       | Sticky `<header>` (h-14, blurred bg). |
| `children`  | `ReactNode` | —       | Main content (auto-scrolling). |
| `rightRail` | `ReactNode` | —       | Optional `<aside>` on `xl+` screens. |

## Examples

```tsx
<DashboardShell
  sidebar={<Sidebar brand={<Brand />} items={nav} activeId="referrals" onSelect={go} />}
  topbar={
    <div className="flex w-full items-center gap-3">
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Referrals</BreadcrumbItem>
      </Breadcrumbs>
      <div className="ml-auto" />
      <NotificationBadge content="4">
        <Button isIconOnly aria-label="Inbox"><Inbox /></Button>
      </NotificationBadge>
      <Avatar name="Maya" size="sm" />
    </div>
  }
  rightRail={<ActivityFeed />}
>
  <Container>
    <Stack gap={6}>
      <h1 className="text-2xl font-semibold">Referrals</h1>
      <SortableTable rows={referrals} rowKey="id" columns={cols} />
    </Stack>
  </Container>
</DashboardShell>
```
