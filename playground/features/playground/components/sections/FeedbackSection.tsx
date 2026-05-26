import { AlertTriangle, Check, CircleAlert, Info } from "lucide-react";
import {
  Alert,
  Button,
  CircularProgress,
  Divider,
  Progress,
  Skeleton,
  Spinner,
} from "@atlas/design-system";
import { Section } from "../Section";
import { Row } from "../Row";

interface FeedbackSectionProps {
  progress: number;
  onProgressDecrement: () => void;
  onProgressIncrement: () => void;
}

export function FeedbackSection({
  progress,
  onProgressDecrement,
  onProgressIncrement,
}: FeedbackSectionProps) {
  return (
    <Section id="feedback" title="Feedback">
      <Row label="Spinner">
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" color="primary" />
      </Row>
      <Divider className="my-2" />
      <Row label="Skeleton">
        <div className="flex w-full max-w-md flex-col gap-2">
          <Skeleton className="h-4 w-3/4 rounded-md" />
          <Skeleton className="h-4 w-1/2 rounded-md" />
          <Skeleton className="h-4 w-5/6 rounded-md" />
        </div>
      </Row>
      <Divider className="my-2" />
      <Row label="Progress">
        <div className="flex w-full max-w-md flex-col gap-3">
          <Progress aria-label="Loading" value={progress} color="primary" />
          <div className="flex items-center gap-3">
            <Button size="sm" variant="flat" onClick={onProgressDecrement}>-10</Button>
            <Button size="sm" variant="flat" onClick={onProgressIncrement}>+10</Button>
            <span className="text-sm text-muted-foreground">{progress}%</span>
          </div>
        </div>
        <CircularProgress value={progress} color="success" aria-label="Loading" />
      </Row>
      <Divider className="my-2" />
      <Row label="Alert">
        <div className="flex w-full flex-col gap-3">
          <Alert
            color="primary"
            title="Heads up"
            description="This is a primary alert."
            icon={<Info />}
          />
          <Alert
            color="success"
            title="All set"
            description="Your changes have been saved."
            icon={<Check />}
          />
          <Alert
            color="warning"
            title="Careful"
            description="This action can't be undone."
            icon={<AlertTriangle />}
          />
          <Alert
            color="danger"
            title="Something broke"
            description="We couldn't complete the request."
            icon={<CircleAlert />}
          />
        </div>
      </Row>
    </Section>
  );
}
