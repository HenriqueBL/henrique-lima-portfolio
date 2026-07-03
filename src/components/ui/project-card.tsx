import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ProjectMockup } from "@/components/ui/project-mockup";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group card-gradient-border relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-transparent",
        className
      )}
    >
      {/* Preview */}
      <div className="relative overflow-hidden p-4 pb-0">
        <div className="transition-transform duration-500 group-hover:scale-[1.02]">
          <ProjectMockup project={project} />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <Badge variant="accent">{project.category}</Badge>
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>

        <h3 className="flex items-center gap-1.5 font-display text-xl font-semibold tracking-tight">
          {project.title}
          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
        </h3>
        <p className="mt-1 text-sm font-medium text-muted-foreground">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5 pt-4">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-md px-2 py-0.5 font-mono text-[11px] text-muted-foreground/60">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
