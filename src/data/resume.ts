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
      "Estudante de Análise e Desenvolvimento de Sistemas (4º período) em busca de estágio em desenvolvimento de software. Trabalho com Java e Python — incluindo automação de processos e extração de dados com Selenium, Playwright e requests — além de aplicações web com React, integração via APIs REST e banco de dados SQL. Uso desenvolvimento assistido por IA para entregar com qualidade e velocidade. Inglês fluente, com semestre de High School nos Estados Unidos; perfil autodidata, proativo e movido por curiosidade.",
    strengths: [
      "Automação de processos e extração de dados com Python (Selenium, Playwright, requests)",
      "Aplicações web e APIs REST com Java, Spring Boot e React",
      "Banco de dados SQL e testes automatizados (JUnit)",
      "Colaboração produtiva com IA (Claude Code, Prompt Engineering)",
      "Inglês fluente, perfil proativo e aprendizado rápido",
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
      { group: "Linguagens", items: ["Java", "Python", "TypeScript", "JavaScript", "HTML", "CSS", "SQL"] },
      {
        group: "Automação & Extração de Dados",
        items: ["Selenium", "Playwright", "PyAutoGUI", "Requests", "Web Scraping", "Automação de Processos"],
      },
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
      "Automação e extração de dados com Python",
      "Facilidade para aprender novas tecnologias",
      "Interesse em Inteligência Artificial",
      "Boa comunicação",
      "Perfil autodidata",
    ],
    projects: [
      {
        name: "Todo API — Gerenciador de Tarefas",
        description: "API REST com CRUD, validação, tratamento global de erros e testes.",
        tech: "Java 17, Spring Boot, JPA, H2, JUnit",
      },
      {
        name: "Realtime API Watcher",
        description: "Monitor de API em tempo real que dispara ações automáticas; JWT, concorrência e backoff.",
        tech: "Python, requests, Threading, APIs REST",
      },
      {
        name: "Portfólio Pessoal",
        description: "Este site: Next.js com SSG, dark mode, currículo bilíngue e SEO completo.",
        tech: "Next.js, TypeScript, Tailwind CSS",
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
      "Systems Analysis and Development student (4th semester) seeking a software development internship. I work with Java and Python — including process automation and data extraction with Selenium, Playwright and requests — plus web applications with React, integration through REST APIs and SQL databases. I use AI-assisted development to ship with quality and speed. Fluent in English, with a High School semester in the United States; self-taught, proactive and driven by curiosity.",
    strengths: [
      "Process automation and data extraction with Python (Selenium, Playwright, requests)",
      "Web applications and REST APIs with Java, Spring Boot and React",
      "SQL databases and automated testing (JUnit)",
      "Productive collaboration with AI (Claude Code, Prompt Engineering)",
      "Fluent English, proactive mindset and fast learning",
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
      { group: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript", "HTML", "CSS", "SQL"] },
      {
        group: "Automation & Data Extraction",
        items: ["Selenium", "Playwright", "PyAutoGUI", "Requests", "Web Scraping", "Process Automation"],
      },
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
      "Automation and data extraction with Python",
      "Fast to learn new technologies",
      "Interest in Artificial Intelligence",
      "Strong communication",
      "Self-taught mindset",
    ],
    projects: [
      {
        name: "Todo API — Task Manager",
        description: "REST API with CRUD, validation, global error handling and tests.",
        tech: "Java 17, Spring Boot, JPA, H2, JUnit",
      },
      {
        name: "Realtime API Watcher",
        description: "Real-time API monitor that fires automatic actions; JWT, concurrency and backoff.",
        tech: "Python, requests, Threading, REST APIs",
      },
      {
        name: "Personal Portfolio",
        description: "This site: Next.js with SSG, dark mode, bilingual résumé and full SEO.",
        tech: "Next.js, TypeScript, Tailwind CSS",
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
