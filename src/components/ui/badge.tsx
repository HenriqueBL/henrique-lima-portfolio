import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "outline";
}

const styles = {
  default: "bg-muted text-muted-foreground border border-border",
  accent: "bg-accent/10 text-accent border border-accent/20",
  outline: "border border-border text-foreground/80",
};

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
