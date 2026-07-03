import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Github,
  Layers,
  Lightbulb,
  ListChecks,
  Target,
} from "lucide-react";
import { getProject, getProjectNeighbors, projects } from "@/data/projects";
import { siteConfig } from "@/data/config";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { ProjectMockup } from "@/components/ui/project-mockup";
import { Reveal } from "@/components/motion/reveal";
import { ContactCTA } from "@/components/sections/contact-cta";

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.tagline}`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} · ${siteConfig.name}`,
      description: project.description,
      url: `/projects/${project.slug}`,
    },
  };
}

const detailSections = [
  { key: "features", title: "Funcionalidades", icon: ListChecks },
  { key: "architecture", title: "Arquitetura", icon: Layers },
  { key: "challenges", title: "Desafios", icon: Target },
  { key: "learnings", title: "Aprendizados", icon: Lightbulb },
] as const;

export default function ProjectDetailPage({ params }: Params) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const { prev, next } = getProjectNeighbors(project.slug);

  return (
    <>
      {/* Cabeçalho do projeto */}
      <header className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-72 opacity-30"
          style={{
            background: `radial-gradient(ellipse 60% 100% at 50% 0%, ${project.accent.from}55, transparent 70%)`,
          }}
        />
        <Container className="relative py-14 sm:py-16">
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar aos projetos
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Badge variant="accent">{project.category}</Badge>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>

            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-3 font-display text-xl text-muted-foreground">{project.tagline}</p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={project.repoUrl} variant="outline" external>
                <Github className="h-4 w-4" />
                Ver código
              </ButtonLink>
              {project.liveUrl !== "#" && (
                <ButtonLink href={project.liveUrl} external>
                  Ver ao vivo
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonLink>
              )}
            </div>
          </Reveal>
        </Container>
      </header>

      {/* Mockup + métricas */}
      <Section className="pb-0">
        <Reveal>
          <ProjectMockup project={project} className="mx-auto max-w-4xl" />
        </Reveal>
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-3 gap-4">
          {project.metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <Card className="text-center">
                <div className="font-display text-2xl font-semibold text-gradient sm:text-3xl">
                  {m.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{m.label}</div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Visão geral + tecnologias */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight">Sobre o projeto</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {project.longDescription}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Card>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Tecnologias
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-muted/50 px-3 py-1 font-mono text-xs text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Seções detalhadas */}
      <Section className="border-t border-border">
        <div className="grid gap-6 md:grid-cols-2">
          {detailSections.map((section, i) => {
            const Icon = section.icon;
            const items = project[section.key];
            return (
              <Reveal key={section.key} delay={i * 0.06}>
                <Card className="h-full">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Navegação prev/next */}
      {prev && next && (
        <Section className="border-t border-border py-12">
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-accent/40"
            >
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <ArrowLeft className="h-3.5 w-3.5" /> Anterior
              </span>
              <span className="mt-2 font-display text-lg font-semibold transition-colors group-hover:text-accent">
                {prev.title}
              </span>
            </Link>
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card/40 p-6 text-right transition-colors hover:border-accent/40"
            >
              <span className="inline-flex items-center justify-end gap-2 text-xs text-muted-foreground">
                Próximo <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <span className="mt-2 font-display text-lg font-semibold transition-colors group-hover:text-accent">
                {next.title}
              </span>
            </Link>
          </div>
        </Section>
      )}

      <ContactCTA />
    </>
  );
}
