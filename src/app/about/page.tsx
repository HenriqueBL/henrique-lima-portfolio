import type { Metadata } from "next";
import { CheckCircle2, Languages, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/config";
import { story, values, journey } from "@/data/about";
import { differentiators } from "@/data/skills";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { ProfilePhoto } from "@/components/ui/profile-photo";
import { Timeline } from "@/components/ui/timeline";
import { Reveal } from "@/components/motion/reveal";
import { AIWorkflow } from "@/components/sections/ai-workflow";
import { ContactCTA } from "@/components/sections/contact-cta";

export const metadata: Metadata = pageMetadata({
  title: "Sobre",
  description:
    "Conheça a trajetória de Henrique Lima: estudante de ADS, inglês fluente, experiência internacional e desenvolvimento assistido por IA.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre mim"
        title="Da curiosidade ao código — com IA como aliada"
        description="Estudante de Análise e Desenvolvimento de Sistemas em busca do primeiro estágio, unindo fundamentos técnicos, inglês fluente e uma forma moderna de desenvolver."
      />

      {/* História + foto */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProfilePhoto src="/images/henrique.jpg" className="mx-auto max-w-xs lg:max-w-sm" />
            <Card className="mt-8">
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Languages className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-muted-foreground">
                    <span className="font-medium text-foreground">Idiomas:</span> Português (nativo),
                    Inglês (fluente)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-muted-foreground">
                    <span className="font-medium text-foreground">Local:</span>{" "}
                    {siteConfig.location}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-muted-foreground">
                    <span className="font-medium text-foreground">Objetivo:</span> Estágio em
                    Desenvolvimento de Software
                  </span>
                </li>
              </ul>
            </Card>
          </div>

          <div>
            <SectionHeading title="Minha história" eyebrow="Trajetória" />
            <div className="mt-6 space-y-5">
              {story.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="text-base leading-relaxed text-muted-foreground">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Valores / destaques */}
      <Section className="border-t border-border">
        <SectionHeading
          align="center"
          eyebrow="O que me define"
          title="Princípios que guiam meu trabalho"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={i * 0.06}>
                <Card interactive className="h-full">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Timeline */}
      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-[0.6fr_1fr]">
          <SectionHeading
            eyebrow="Linha do tempo"
            title="Uma jornada em construção"
            description="Cada etapa somou uma peça: idioma, fundamentos, prática e um jeito próprio de desenvolver."
          />
          <Container className="px-0">
            <Timeline items={journey} />
          </Container>
        </div>
      </Section>

      {/* Como desenvolvo (IA) */}
      <AIWorkflow />

      {/* Diferenciais */}
      <Section className="border-t border-border">
        <SectionHeading
          align="center"
          eyebrow="Diferenciais"
          title="O que me torna um candidato promissor"
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
          {differentiators.map((d, i) => {
            const Icon = d.icon;
            return (
              <Reveal key={d.label} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card/40 px-4 py-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">{d.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
