import { CalendarDays } from "lucide-react";
import { Card, CardBody, Carousel } from "@atlas/design-system";
import { Section } from "../Section";

const CAROUSEL_SLIDES = [1, 2, 3, 4, 5] as const;

export function CarouselSection() {
  return (
    <Section id="carousel" title="Carousel">
      <Carousel slidesPerView={2} loop ariaLabel="Demo carousel">
        {CAROUSEL_SLIDES.map((n) => (
          <Card key={n} shadow="sm">
            <CardBody className="flex h-32 items-center justify-center">
              <div className="flex flex-col items-center gap-1">
                <CalendarDays className="size-5 text-muted-foreground" />
                <p className="text-sm font-medium">Slide {n}</p>
              </div>
            </CardBody>
          </Card>
        ))}
      </Carousel>
    </Section>
  );
}
