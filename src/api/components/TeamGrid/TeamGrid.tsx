/**
 * TeamGrid — grid of team-member cards (avatar + name + role + socials).
 */
import { forwardRef, type ReactNode, type Ref } from "react";
import { Avatar } from "../Avatar";
import { cnHero } from "../../../shared/cn-hero";

export interface TeamMember {
  id: string;
  name: ReactNode;
  role?: ReactNode;
  avatarUrl?: string;
  initials?: string;
  socials?: ReactNode;
}

export interface TeamGridProps {
  members: TeamMember[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const colsClass = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

export const TeamGrid = forwardRef<HTMLDivElement, TeamGridProps>(function TeamGrid(
  { members, columns = 4, className },
  ref,
) {
  return (
    <div ref={ref as Ref<HTMLDivElement>} className={cnHero("grid grid-cols-1 gap-x-6 gap-y-10", colsClass[columns], className)}>
      {members.map((m) => (
        <div key={m.id} className="flex flex-col items-center text-center">
          <Avatar src={m.avatarUrl} name={m.initials} size="lg" />
          <div className="mt-3 text-base font-medium text-foreground">{m.name}</div>
          {m.role ? <div className="text-sm text-muted-foreground mt-0.5">{m.role}</div> : null}
          {m.socials ? <div className="mt-2 flex gap-2 items-center">{m.socials}</div> : null}
        </div>
      ))}
    </div>
  );
});
TeamGrid.displayName = "TeamGrid";
