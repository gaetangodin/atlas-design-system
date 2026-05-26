/**
 * ProfileCard — person summary card. Avatar + name + role + body +
 * actions. Wraps `Card` for consistent shell.
 */
import { forwardRef, type ReactNode, type Ref } from "react";
import { Card, CardBody } from "../Card";
import { Avatar } from "../Avatar";
import { cnHero } from "../../../shared/cn-hero";

export interface ProfileCardProps {
  name: ReactNode;
  role?: ReactNode;
  bio?: ReactNode;
  avatarUrl?: string;
  initials?: string;
  meta?: ReactNode;
  actions?: ReactNode;
  /** Layout: stacked (avatar above) or row (avatar left). */
  orientation?: "stacked" | "row";
  className?: string;
}

export const ProfileCard = forwardRef<HTMLDivElement, ProfileCardProps>(function ProfileCard(
  { name, role, bio, avatarUrl, initials, meta, actions, orientation = "stacked", className },
  ref,
) {
  const isRow = orientation === "row";
  return (
    <Card ref={ref as Ref<HTMLDivElement>} className={cnHero(className)}>
      <CardBody>
        <div className={cnHero("flex gap-4", isRow ? "flex-row items-start" : "flex-col items-center text-center")}>
          <Avatar src={avatarUrl} name={initials} size="lg" />
          <div className={cnHero("flex-1 min-w-0", !isRow && "w-full")}>
            <div className="text-base font-medium text-foreground">{name}</div>
            {role ? <div className="text-sm text-muted-foreground mt-0.5">{role}</div> : null}
            {bio ? <div className="text-sm text-foreground mt-2">{bio}</div> : null}
            {meta ? <div className="text-xs text-muted-foreground mt-2">{meta}</div> : null}
            {actions ? (
              <div className={cnHero("mt-3 flex gap-2", !isRow && "justify-center")}>{actions}</div>
            ) : null}
          </div>
        </div>
      </CardBody>
    </Card>
  );
});
ProfileCard.displayName = "ProfileCard";
