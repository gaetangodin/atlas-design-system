import { useMemo } from "react";
import { Timeline } from "@atlas/design-system";
import { Section } from "../Section";
import { mockWorkspaceTimeline } from "../../mocks/playground.mocks";
import { renderTimelineIcon } from "../../utils/playground.utils";

export function TimelineSection() {
  // Mocks store icon keys (pure data); we resolve them to JSX here.
  const events = useMemo(
    () =>
      mockWorkspaceTimeline.map((e) => ({
        id: e.id,
        title: e.title,
        description: e.description,
        meta: e.meta,
        tone: e.tone,
        icon: renderTimelineIcon(e.iconKey),
      })),
    [],
  );

  return (
    <Section id="timeline" title="Timeline">
      <Timeline events={events} />
    </Section>
  );
}
