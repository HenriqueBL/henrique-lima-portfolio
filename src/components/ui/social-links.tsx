import { socialLinks } from "@/data/config";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  /** Mostra apenas GitHub, LinkedIn e E-mail (oculta telefone). */
  compact?: boolean;
}

export function SocialLinks({ className, iconClassName, compact }: SocialLinksProps) {
  const links = compact ? socialLinks.filter((l) => l.label !== "Telefone") : socialLinks;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {links.map((link) => {
        const Icon = link.icon;
        const isExternal = link.href.startsWith("http");
        return (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
          >
            <Icon className={cn("h-[18px] w-[18px]", iconClassName)} />
          </a>
        );
      })}
    </div>
  );
}
