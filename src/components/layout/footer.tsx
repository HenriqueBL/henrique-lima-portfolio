import Link from "next/link";
import { siteConfig, navLinks } from "@/data/config";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { SocialLinks } from "@/components/ui/social-links";

export function Footer() {
  const year = 2025;

  return (
    <footer className="relative border-t border-border">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.shortBio}
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold text-foreground">Navegação</span>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold text-foreground">Contato</span>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-foreground">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                  className="transition-colors hover:text-foreground"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Construído com Next.js, Tailwind CSS
            <span className="text-accent">e desenvolvimento assistido por IA</span>.
          </p>
        </div>
      </Container>
    </footer>
  );
}
