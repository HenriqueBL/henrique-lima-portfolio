import {
  Code2,
  Layout,
  Sparkles,
  Wrench,
  Brain,
  Languages,
  Globe,
  Bot,
  Zap,
  MessageSquare,
  Award,
  Compass,
} from "lucide-react";
import type { Differentiator, SkillGroup } from "@/types";

/* Níveis são autoavaliações (0–100) usadas só como indicador visual. */
export const skillGroups: SkillGroup[] = [
  {
    title: "Linguagens",
    icon: Code2,
    skills: [
      { name: "Java", level: 75 },
      { name: "Python", level: 70 },
      { name: "TypeScript", level: 78 },
      { name: "JavaScript", level: 80 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "SQL", level: 65 },
    ],
  },
  {
    title: "Frontend & UI",
    icon: Layout,
    skills: [
      { name: "React", level: 80 },
      { name: "Next.js", level: 78 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Responsividade", level: 88 },
      { name: "UI/UX", level: 80 },
    ],
  },
  {
    title: "Desenvolvimento com IA",
    icon: Sparkles,
    skills: [
      { name: "Claude Code", level: 88 },
      { name: "AI-Assisted Development", level: 85 },
      { name: "Prompt Engineering", level: 82 },
      { name: "Vibe Coding", level: 85 },
      { name: "Desenvolvimento rápido", level: 84 },
    ],
  },
  {
    title: "Ferramentas & Práticas",
    icon: Wrench,
    skills: [
      { name: "Git", level: 78 },
      { name: "GitHub", level: 80 },
      { name: "APIs REST", level: 75 },
      { name: "VS Code", level: 85 },
    ],
  },
  {
    title: "Automação & Extração de Dados",
    icon: Bot,
    skills: [
      { name: "Selenium", level: 72 },
      { name: "Playwright", level: 68 },
      { name: "PyAutoGUI", level: 70 },
      { name: "Requests", level: 72 },
      { name: "Web Scraping", level: 70 },
    ],
  },
  {
    title: "Fundamentos",
    icon: Brain,
    skills: [
      { name: "Lógica de Programação", level: 82 },
      { name: "POO", level: 78 },
      { name: "Estruturas de Dados", level: 68 },
      { name: "Banco de Dados", level: 70 },
    ],
  },
];

export const softSkills = [
  { name: "Comunicação", icon: MessageSquare },
  { name: "Organização", icon: Compass },
  { name: "Aprendizado rápido", icon: Zap },
  { name: "Trabalho em equipe", icon: MessageSquare },
  { name: "Resolução de problemas", icon: Brain },
  { name: "Pensamento analítico", icon: Brain },
  { name: "Curiosidade", icon: Sparkles },
  { name: "Adaptabilidade", icon: Compass },
];

export const differentiators: Differentiator[] = [
  { label: "Inglês fluente", icon: Languages },
  { label: "High School nos EUA (Programa Ganhe o Mundo)", icon: Globe },
  { label: "Desenvolvimento com Claude Code", icon: Bot },
  { label: "Automação e extração de dados com Python", icon: Zap },
  { label: "Facilidade para aprender novas tecnologias", icon: Zap },
  { label: "Interesse em Inteligência Artificial", icon: Sparkles },
  { label: "Boa comunicação", icon: MessageSquare },
  { label: "Perfil autodidata", icon: Award },
];

/** Stack em destaque para o marquee do hero. */
export const techMarquee = [
  "Java",
  "Python",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Claude Code",
  "Prompt Engineering",
  "APIs REST",
  "Selenium",
  "Automação",
  "POO",
];
