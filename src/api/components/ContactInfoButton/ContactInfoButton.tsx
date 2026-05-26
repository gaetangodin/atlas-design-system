/**
 * ContactInfoButton — popover-triggering button used in recruitment
 * cards to reveal a person/company's contact details on demand.
 *
 * Wraps Atlas's `Popover` + a labeled trigger pill. The popover content
 * is whatever the app needs (`emails`, `phones`, `LinkedIn link`, etc.)
 * — passed in via `children` (rendered inside `PopoverContent`).
 *
 * Two variants by audience:
 *   - `candidate` — used on candidate profile cards (purple chrome).
 *   - `company`   — used on employer profile cards (lavender chrome).
 */

import { forwardRef, type ReactNode } from "react";
import { ChevronDown, Building2, User as UserIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { cnHero } from "../../../shared/cn-hero";

export type ContactInfoAudience = "candidate" | "company";

export interface ContactInfoButtonProps {
  audience: ContactInfoAudience;
  label?: string;
  children: ReactNode;
  className?: string;
  testId?: string;
  id?: string;
}

const TRIGGER_BY_AUDIENCE: Record<ContactInfoAudience, string> = {
  candidate:
    "inline-flex items-center gap-1.5 rounded-full border border-lavender-300/60 bg-lavender-50 px-3 py-1.5 text-xs font-semibold text-lavender-800 transition-colors hover:bg-lavender-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  company:
    "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
};

export const ContactInfoButton = forwardRef<HTMLDivElement, ContactInfoButtonProps>(
  function ContactInfoButton(
    { audience, label, children, className, testId, id },
    ref,
  ) {
    const resolvedLabel =
      label ?? (audience === "candidate" ? "Contact" : "Company contact");
    const Icon = audience === "candidate" ? UserIcon : Building2;
    return (
      <div ref={ref} id={id} data-testid={testId} className={cnHero(className)}>
        <Popover placement="bottom-end">
          <PopoverTrigger>
            <button type="button" className={TRIGGER_BY_AUDIENCE[audience]}>
              <Icon className="size-3.5 shrink-0" aria-hidden />
              {resolvedLabel}
              <ChevronDown className="size-3.5 shrink-0 opacity-70" aria-hidden />
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="min-w-[16rem] max-w-sm space-y-2 p-3 text-sm">
              {children}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
);

ContactInfoButton.displayName = "ContactInfoButton";
