import { Bot } from "lucide-react";
import { aiWorkflow } from "@/data/about";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function AIWorkflow() {
  return (
    <Section id="metodo" className="border-t border-border">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 sm:p-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <Bot className="h-4 w-4" />
            Desenvolvimento Assistido por IA
          </span>
          <SectionHeading
            className="mt-6"
            title="Como eu desenvolvo software"
            description="Colaborar com IA é uma habilidade profissional moderna. Eu uso o Claude Code e engenharia de prompt para acelerar a entrega — sem abrir mão de entender e controlar cada decisão técnica."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aiWorkflow.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08}>
                <div className="group relative h-full rounded-2xl border border-border bg-background/40 p-6 transition-colors hover:border-accent/40">
                  <span className="font-display text-4xl font-bold text-muted/80 transition-colors group-hover:text-accent/40">
                    {step.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
