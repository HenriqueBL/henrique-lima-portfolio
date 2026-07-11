import { Github, Linkedin, Mail, Phone } from "lucide-react";
import type { NavLink, SocialLink } from "@/types";

/* ------------------------------------------------------------------ *
 *  CONFIGURAÇÃO CENTRAL DO SITE
 *  Edite este arquivo para atualizar nome, contatos e links.
 *  Os campos marcados com  // TODO  são placeholders — troque pelos seus.
 * ------------------------------------------------------------------ */

export const siteConfig = {
  name: "Henrique Lima",
  role: "Análise e Desenvolvimento de Sistemas",
  headline: "AI-Assisted Developer",
  subtitle: "Java • Python • TypeScript • React",
  shortBio:
    "Estudante de Análise e Desenvolvimento de Sistemas em busca de estágio. Construo software real colaborando com IA — do conceito ao deploy.",
  location: "Brasil",
  email: "henriquebl2000@gmail.com",
  phone: "+55 (81) 98367-3405",
  // URL pública do site (usada em SEO, sitemap e Open Graph).
  url: "https://henrique-lima-portfolio.vercel.app",

  socials: {
    github: "https://github.com/HenriqueBL",
    linkedin: "https://www.linkedin.com/in/henriquebdl/",
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/about" },
  { label: "Projetos", href: "/projects" },
  { label: "Currículo", href: "/resume" },
  { label: "Contato", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: siteConfig.socials.github,
    icon: Github,
    handle: "@HenriqueBL",
  },
  {
    label: "LinkedIn",
    href: siteConfig.socials.linkedin,
    icon: Linkedin,
    handle: "Henrique Lima",
  },
  {
    label: "E-mail",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    handle: siteConfig.email,
  },
  {
    label: "Telefone",
    href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`,
    icon: Phone,
    handle: siteConfig.phone,
  },
];

/** Métricas rápidas exibidas no hero / sobre. */
export const quickStats = [
  { value: "2025", label: "Início do curso" },
  { value: "4º", label: "Período atual" },
  { value: "4", label: "Projetos no GitHub" },
  { value: "EN", label: "Inglês fluente" },
];
