import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function FeaturedProjects() {
  return (
    <Section id="projetos">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Projetos em destaque"
          title="Aplicações construídas do conceito ao deploy"
          description="Estudos de caso full stack desenvolvidos com colaboração de IA — cada um com arquitetura, desafios e aprendizados documentados."
        />
        <Reveal delay={0.1}>
          <ButtonLink href="/projects" variant="outline" className="no-print">
            Ver todos
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <ProjectCard project={project} className="h-full" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
