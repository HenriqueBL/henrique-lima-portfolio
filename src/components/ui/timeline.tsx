import type { TimelineItem } from "@/types";
import { Reveal } from "@/components/motion/reveal";

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative border-l border-border pl-8">
      {items.map((item, i) => (
        <Reveal as="li" key={`${item.title}-${i}`} delay={i * 0.08} className="relative pb-10 last:pb-0">
          {/* Marcador */}
          <span className="absolute -left-[calc(2rem+1px)] top-1.5 flex h-4 w-4 -translate-x-1/2 items-center justify-center">
            <span className="h-3 w-3 rounded-full border-2 border-accent bg-background" />
          </span>

          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            {item.period}
          </span>
          <h3 className="mt-1.5 font-display text-lg font-semibold">{item.title}</h3>
          <p className="text-sm font-medium text-muted-foreground">{item.subtitle}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          {item.tags && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </Reveal>
      ))}
    </ol>
  );
}
