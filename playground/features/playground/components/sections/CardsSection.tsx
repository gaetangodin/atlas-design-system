import { Activity } from "lucide-react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  StatCard,
} from "@atlas/design-system";
import { Section } from "../Section";

export function CardsSection() {
  return (
    <Section id="cards" title="Cards & stats">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <p className="text-sm font-semibold">Default card</p>
            <p className="text-xs text-muted-foreground">shadow="sm" · radius="lg"</p>
          </CardHeader>
          <CardBody>
            <p className="text-sm text-muted-foreground">
              Stable surface for grouped content. Border + faint shadow.
            </p>
          </CardBody>
          <CardFooter>
            <Button size="sm" color="primary" variant="flat">Action</Button>
          </CardFooter>
        </Card>

        <Card variant="hover-lift" isPressable>
          <CardHeader>
            <p className="text-sm font-semibold">Hover lift</p>
            <p className="text-xs text-muted-foreground">Flat against page bg</p>
          </CardHeader>
          <CardBody>
            <p className="text-sm text-muted-foreground">
              Snaps to card surface on hover/focus. Use for dashboard tiles.
            </p>
          </CardBody>
        </Card>

        <Card shadow="lg">
          <CardHeader>
            <p className="text-sm font-semibold">Heavy shadow</p>
            <p className="text-xs text-muted-foreground">shadow="lg"</p>
          </CardHeader>
          <CardBody>
            <p className="text-sm text-muted-foreground">
              For floating surfaces or elevated callouts.
            </p>
          </CardBody>
        </Card>
      </div>
      <Divider className="my-6" />
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          label="MRR"
          value="$48,210"
          delta="+12.4%"
          deltaTone="positive"
          caption="vs. last month"
          icon={<Activity className="size-4 text-muted-foreground" />}
        />
        <StatCard
          label="Active users"
          value="1,284"
          delta="+3.1%"
          deltaTone="positive"
          caption="last 7 days"
        />
        <StatCard
          label="Churn"
          value="2.4%"
          delta="-0.6%"
          deltaTone="negative"
          caption="vs. last month"
        />
      </div>
    </Section>
  );
}
