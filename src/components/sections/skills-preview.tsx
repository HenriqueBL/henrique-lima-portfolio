import { skillGroups } from "@/data/skills";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";

export function SkillsPreview() {
  return (
    <Section id="skills" className="border-t border-border">
      <SectionHeading
        align="center"
        eyebrow="Stack & Competências"
        title="Ferramentas que uso para construir"
        description="Do backend em Java ao frontend em React, passando pela colaboração com IA — um conjunto de habilidades moderno e em constante expansão."
      />

      <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.title} delay={i * 0.06}>
              <Card interactive className="h-full">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-lg border border-border bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
