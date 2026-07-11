import { ArrowRight, Globe2, GraduationCap, Languages } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";

const highlights = [
  {
    icon: GraduationCap,
    title: "Estudante de ADS",
    text: "4º período, com base sólida e estudo constante além da grade.",
  },
  {
    icon: Languages,
    title: "Inglês fluente",
    text: "Comunicação técnica em inglês, do código à documentação.",
  },
  {
    icon: Globe2,
    title: "Experiência nos EUA",
    text: "Semestre de High School pelo Programa Ganhe o Mundo.",
  },
];

export function AboutPreview() {
  return (
    <Section id="sobre" className="border-t border-border">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Quem sou"
            title="Um estudante que trata IA como parceira de engenharia"
            description="Construo software real combinando fundamentos de programação com desenvolvimento assistido por IA. Meu objetivo é claro: um estágio onde eu possa aprender com um time e contribuir de verdade."
          />
          <Reveal delay={0.15}>
            <ButtonLink href="/about" variant="outline" className="mt-8">
              Minha história
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>
        </div>

        <div className="grid gap-4">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <Reveal key={h.title} delay={i * 0.1}>
                <Card interactive className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{h.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
