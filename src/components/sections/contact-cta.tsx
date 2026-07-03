import { ArrowRight, Mail } from "lucide-react";
import { siteConfig } from "@/data/config";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { SocialLinks } from "@/components/ui/social-links";
import { Reveal } from "@/components/motion/reveal";

export function ContactCTA() {
  return (
    <Section>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card/80 to-card/30 px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-70" />
          <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-1.5 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-accent" />
              Aberto a oportunidades de estágio
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
              Vamos construir algo <span className="text-gradient">juntos</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Estou em busca de um estágio em desenvolvimento de software. Se a minha forma de
              trabalhar combina com o seu time, adoraria conversar.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href="/contact" size="lg">
                Entrar em contato
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={`mailto:${siteConfig.email}`} variant="outline" size="lg" external>
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </ButtonLink>
            </div>

            <div className="mt-8 flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
