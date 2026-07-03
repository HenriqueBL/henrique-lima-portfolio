import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { projects } from "@/data/projects";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { ContactCTA } from "@/components/sections/contact-cta";

export const metadata: Metadata = pageMetadata({
  title: "Projetos",
  description:
    "Estudos de caso full stack de Henrique Lima — sistemas financeiros, de estoque, agendamento e mais, construídos com desenvolvimento assistido por IA.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfólio"
        title="Projetos"
        description="Uma seleção de aplicações que construí para praticar e demonstrar o que sei fazer. Cada projeto tem arquitetura, funcionalidades, desafios e aprendizados documentados."
      />
      <Section>
        <ProjectsGrid projects={projects} />
      </Section>
      <ContactCTA />
    </>
  );
}
