import { Skeleton } from "@atlas/design-system";

/**
 * Mirrors the real layout of PlaygroundPage with grey placeholder boxes:
 * sidebar rail on the left, hero strip + a few section cards on the right.
 * Required companion to any page-level component that calls a hook.
 */
export function PlaygroundPageSkeleton() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar rail */}
      <aside className="hidden w-56 shrink-0 border-r border-border p-5 lg:block">
        <Skeleton className="mb-3 h-3 w-12 rounded" />
        <Skeleton className="mb-2 h-6 w-32 rounded" />
        <Skeleton className="mb-6 h-5 w-16 rounded-full" />
        <div className="space-y-1.5">
          {Array.from({ length: 10 }, (_, i) => (
            <Skeleton key={i} className="h-8 w-full rounded-lg" />
          ))}
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto w-full max-w-4xl">
          {/* Hero strip */}
          <div className="mb-8 hidden lg:block">
            <Skeleton className="mb-2 h-6 w-56 rounded" />
            <Skeleton className="h-4 w-72 rounded" />
          </div>

          {/* Section cards */}
          <div className="space-y-12">
            {Array.from({ length: 3 }, (_, i) => (
              <section key={i} className="space-y-4">
                <Skeleton className="h-7 w-40 rounded" />
                <Skeleton className="h-4 w-64 rounded" />
                <div className="rounded-lg border border-border bg-card p-6">
                  <Skeleton className="mb-3 h-9 w-full rounded-md" />
                  <Skeleton className="mb-3 h-9 w-5/6 rounded-md" />
                  <Skeleton className="h-9 w-2/3 rounded-md" />
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
