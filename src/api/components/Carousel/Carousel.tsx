/**
 * Carousel — Embla wrapper. Snap scrolling with keyboard support.
 * `embla-carousel-react` is an optional peer dep.
 */
"use client";
import { useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cnHero } from "../../../shared/cn-hero";

export interface CarouselProps {
  children: ReactNode;
  /** Loop back to the first slide after the last. */
  loop?: boolean;
  /** Show prev/next arrow controls. */
  controls?: boolean;
  /** Show pagination dots below. */
  dots?: boolean;
  /** Items per view at small/medium/large breakpoints. */
  slidesPerView?: number;
  className?: string;
  ariaLabel?: string;
}

export function Carousel({
  children,
  loop = false,
  controls = true,
  dots = true,
  slidesPerView,
  className,
  ariaLabel = "Carousel",
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align: "start" });
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setSelected(emblaApi.selectedScrollSnap());
      setCount(emblaApi.scrollSnapList().length);
    };
    update();
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
  }, [emblaApi]);

  const slideStyle = slidesPerView
    ? { flex: `0 0 calc(100% / ${slidesPerView})` }
    : undefined;

  return (
    <div className={cnHero("relative", className)} role="region" aria-roledescription="carousel" aria-label={ariaLabel}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {Array.isArray(children)
            ? children.map((child, idx) => (
                <div key={idx} className="min-w-0 shrink-0 grow-0 pr-3" style={slideStyle}>
                  {child}
                </div>
              ))
            : (
              <div className="min-w-0 shrink-0 grow-0">{children}</div>
            )}
        </div>
      </div>
      {controls ? (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center size-9 rounded-full bg-background/90 backdrop-blur border border-border text-foreground hover:bg-muted disabled:opacity-50"
            disabled={!emblaApi?.canScrollPrev()}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 3L5 8L10 13" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center size-9 rounded-full bg-background/90 backdrop-blur border border-border text-foreground hover:bg-muted disabled:opacity-50"
            disabled={!emblaApi?.canScrollNext()}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 3L11 8L6 13" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      ) : null}
      {dots && count > 1 ? (
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === selected ? "true" : undefined}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cnHero(
                "size-1.5 rounded-full transition-colors",
                i === selected ? "bg-foreground" : "bg-muted hover:bg-foreground/40",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
