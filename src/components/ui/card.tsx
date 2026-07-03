import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Ativa a borda gradiente reativa ao hover. */
  interactive?: boolean;
}

export function Card({ children, className, as: Tag = "div", interactive }: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors duration-300",
        interactive && "card-gradient-border hover:border-transparent",
        className
      )}
    >
      {children}
    </Tag>
  );
}
