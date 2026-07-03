import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
}

/** Faixa horizontal em loop infinito (CSS puro) com máscara nas bordas. */
export function Marquee({ items, className }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className={cn("mask-fade-x relative flex overflow-hidden", className)}>
      <div className="flex shrink-0 animate-marquee items-center gap-3 pr-3 motion-reduce:animate-none">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
