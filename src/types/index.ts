import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
  handle?: string;
}

export type ProjectCategory =
  | "Web App"
  | "Dashboard"
  | "Mobile-first"
  | "Full Stack"
  | "Back-end"
  | "Front-end"
  | "CLI";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  year: string;
  description: string;
  longDescription: string;
  featured: boolean;
  tech: string[];
  features: string[];
  architecture: string[];
  challenges: string[];
  learnings: string[];
  metrics: { label: string; value: string }[];
  repoUrl: string;
  liveUrl: string;
  /** Cor base (Tailwind gradient stops) usada no mockup e nos acentos. */
  accent: {
    from: string;
    to: string;
  };
}

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: { name: string; level?: number }[];
}

export interface Differentiator {
  label: string;
  icon: LucideIcon;
}

export interface TimelineItem {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
}

export type Locale = "pt" | "en";
