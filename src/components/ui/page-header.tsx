import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-radial-fade" />
      <Container className="relative py-16 sm:py-20">
        <Reveal>
          {eyebrow && (
            <span className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
              <span className="h-px w-6 bg-accent/60" aria-hidden />
              {eyebrow}
            </span>
          )}
          <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </Container>
    </header>
  );
}
