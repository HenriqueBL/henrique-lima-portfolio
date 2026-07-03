import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  /** Sem container interno (para seções full-bleed). */
  bare?: boolean;
}

export function Section({ children, id, className, containerClassName, bare }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      {bare ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
