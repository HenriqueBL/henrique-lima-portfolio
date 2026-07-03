import { siteConfig } from "@/data/config";
import type { Locale } from "@/types";

/* ------------------------------------------------------------------ *
 *  CURRÍCULO BILÍNGUE (PT / EN)
 *  Renderizado na página /resume, com botão de impressão → PDF.
 * ------------------------------------------------------------------ */

interface ResumeSection {
  summary: string;
  strengths: string[];
  education: {
    title: string;
    institution: string;
    period: string;
    detail: string;
  }[];
  courses: { title: string; provider: string; detail: string }[];
  languages: { name: string; level: string }[];
  hardSkills: { group: string; items: string[] }[];
  softSkills: string[];
  differentials: string[];
  projects: { name: string; description: string; tech: string }[];
  labels: Record<string, string>;
}

export type ResumeContent = Record<Locale, ResumeSection>;

export const resume: ResumeContent = {
  pt: {
    summary:
      "Estudante de Análise e Desenvolvimento de Sistemas (4º período) em busca de estágio em desenvolvimento de software. Construo aplicações web full stack com Java, TypeScript e React, usando desenvolvimento assistido por IA para entregar com qualidade e velocidade. Inglês fluente, com semestre de High School nos Estados Unidos. Perfil autodidata, comunicativo e movido por curiosidade.",
    strengths: [
      "Desenvolvimento full stack com foco em código limpo e escalável",
      "Colaboração produtiva com IA (Claude Code, Prompt Engineering)",
      "Inglês fluente e experiência internacional",
      "Aprendizado rápido de novas tecnologias",
    ],
    education: [
      {
        title: "Análise e Desenvolvimento de Sistemas",
        institution: "Graduação em andamento",
        period: "Jan 2025 — Atual",
        detail: "4º período. Foco em programação, POO, banco de dados e desenvolvimento web.",
      },
      {
        title: "High School — Intercâmbio (EUA)",
        institution: "Mt Ida High School (Arkansas) · Programa Ganhe o Mundo (PGM)",
        period: "1 semestre",
        detail: "Imersão acadêmica e cultural nos Estados Unidos; base do inglês fluente.",
      },
    ],
    courses: [
      {
        title: "Curso de Java",
        provider: "Udemy",
        detail: "Fundamentos da linguagem, orientação a objetos e lógica de programação.",
      },
    ],
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Fluente" },
    ],
    hardSkills: [
      { group: "Linguagens", items: ["Java", "TypeScript", "JavaScript", "HTML", "CSS", "SQL"] },
      { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Responsividade", "UI/UX"] },
      {
        group: "IA & Produtividade",
        items: ["Claude Code", "AI-Assisted Development", "Prompt Engineering", "Vibe Coding"],
      },
      { group: "Ferramentas", items: ["Git", "GitHub", "APIs REST", "VS Code"] },
      { group: "Fundamentos", items: ["Lógica de Programação", "POO", "Banco de Dados"] },
    ],
    softSkills: [
      "Comunicação",
      "Organização",
      "Aprendizado rápido",
      "Trabalho em equipe",
      "Resolução de problemas",
      "Pensamento analítico",
      "Curiosidade",
      "Adaptabilidade",
    ],
    differentials: [
      "Inglês Fluente",
      "High School nos EUA (Programa Ganhe o Mundo)",
      "Desenvolvimento utilizando Claude Code",
      "Facilidade para aprender novas tecnologias",
      "Interesse em Inteligência Artificial",
      "Boa comunicação",
      "Perfil autodidata",
    ],
    projects: [
      {
        name: "FinFlow — Controle Financeiro",
        description: "App full stack de finanças pessoais com dashboard e relatórios visuais.",
        tech: "Next.js, TypeScript, Node.js",
      },
      {
        name: "StockWise — Gestão de Estoque",
        description: "Sistema de estoque com alertas e trilha de auditoria.",
        tech: "Java, Spring Boot, React, MySQL",
      },
      {
        name: "Agendafy — Agendamento",
        description: "Plataforma de agendamento com prevenção de conflitos de horário.",
        tech: "Java, Spring Boot, Next.js, MySQL",
      },
    ],
    labels: {
      role: "Análise e Desenvolvimento de Sistemas",
      objective: "Estágio em Desenvolvimento de Software",
      summary: "Resumo Profissional",
      strengths: "Destaques",
      education: "Formação",
      courses: "Cursos",
      languages: "Idiomas",
      hardSkills: "Competências Técnicas",
      softSkills: "Soft Skills",
      differentials: "Diferenciais",
      projects: "Projetos em Destaque",
      contact: "Contato",
    },
  },
  en: {
    summary:
      "Systems Analysis and Development student (4th semester) seeking a software development internship. I build full stack web applications with Java, TypeScript and React, using AI-assisted development to ship with quality and speed. Fluent in English, with a High School semester in the United States. Self-taught, communicative and driven by curiosity.",
    strengths: [
      "Full stack development focused on clean, scalable code",
      "Productive collaboration with AI (Claude Code, Prompt Engineering)",
      "Fluent English and international experience",
      "Fast learner of new technologies",
    ],
    education: [
      {
        title: "Systems Analysis and Development",
        institution: "Bachelor's degree (in progress)",
        period: "Jan 2025 — Present",
        detail: "4th semester. Focus on programming, OOP, databases and web development.",
      },
      {
        title: "High School — Exchange (USA)",
        institution: "Mt Ida High School (Arkansas) · Ganhe o Mundo Program (PGM)",
        period: "1 semester",
        detail: "Academic and cultural immersion in the United States; foundation of fluent English.",
      },
    ],
    courses: [
      {
        title: "Java Course",
        provider: "Udemy",
        detail: "Language fundamentals, object-oriented programming and programming logic.",
      },
    ],
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Fluent" },
    ],
    hardSkills: [
      { group: "Languages", items: ["Java", "TypeScript", "JavaScript", "HTML", "CSS", "SQL"] },
      { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Responsive Design", "UI/UX"] },
      {
        group: "AI & Productivity",
        items: ["Claude Code", "AI-Assisted Development", "Prompt Engineering", "Vibe Coding"],
      },
      { group: "Tools", items: ["Git", "GitHub", "REST APIs", "VS Code"] },
      { group: "Fundamentals", items: ["Programming Logic", "OOP", "Databases"] },
    ],
    softSkills: [
      "Communication",
      "Organization",
      "Fast learning",
      "Teamwork",
      "Problem solving",
      "Analytical thinking",
      "Curiosity",
      "Adaptability",
    ],
    differentials: [
      "Fluent English",
      "High School in the USA (Ganhe o Mundo Program)",
      "Development using Claude Code",
      "Fast to learn new technologies",
      "Interest in Artificial Intelligence",
      "Strong communication",
      "Self-taught mindset",
    ],
    projects: [
      {
        name: "FinFlow — Personal Finance",
        description: "Full stack personal finance app with dashboard and visual reports.",
        tech: "Next.js, TypeScript, Node.js",
      },
      {
        name: "StockWise — Inventory Management",
        description: "Inventory system with low-stock alerts and audit trail.",
        tech: "Java, Spring Boot, React, MySQL",
      },
      {
        name: "Agendafy — Scheduling",
        description: "Scheduling platform with automatic time-conflict prevention.",
        tech: "Java, Spring Boot, Next.js, MySQL",
      },
    ],
    labels: {
      role: "Systems Analysis and Development",
      objective: "Software Development Internship",
      summary: "Professional Summary",
      strengths: "Highlights",
      education: "Education",
      courses: "Courses",
      languages: "Languages",
      hardSkills: "Technical Skills",
      softSkills: "Soft Skills",
      differentials: "Key Differentials",
      projects: "Featured Projects",
      contact: "Contact",
    },
  },
};

export const resumeContact = {
  name: siteConfig.name,
  email: siteConfig.email,
  phone: siteConfig.phone,
  location: siteConfig.location,
  github: siteConfig.socials.github,
  linkedin: siteConfig.socials.linkedin,
};
