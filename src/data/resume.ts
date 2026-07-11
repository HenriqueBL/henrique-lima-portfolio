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
      "Estudante de Análise e Desenvolvimento de Sistemas (4º período), proativo e movido por tecnologia. Tenho experiência prática no desenvolvimento de aplicações web, bancos de dados SQL e integração via APIs REST com Java e Python, além de automação de processos e extração de dados (web scraping) com Selenium, Playwright e requests. Base sólida em lógica de programação e POO, com foco em entregar código de qualidade usando desenvolvimento assistido por IA (Claude Code). Inglês fluente (intercâmbio nos EUA), aprendizado rápido e comunicação clara.",
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
        institution: "Estácio · Graduação em andamento (4º período)",
        period: "Jan 2025 — Atual",
        detail: "Foco: Estrutura de Dados, POO, Banco de Dados SQL e Engenharia de Software.",
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
      { group: "Linguagens", items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS", "C# (base transferível)"] },
      {
        group: "Automação & Extração de Dados",
        items: ["Selenium", "Playwright", "PyAutoGUI", "Requests", "Web Scraping", "Automação de Processos"],
      },
      { group: "Backend & Banco de Dados", items: ["APIs REST", "Spring Boot", "Banco de Dados SQL", "JUnit"] },
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
      objective: "Estágio em Desenvolvimento de Software / Engenharia de Software",
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
      "Systems Analysis and Development student (4th semester), proactive and driven by technology. I have hands-on experience developing web applications, SQL databases and REST API integrations with Java and Python, plus process automation and data extraction (web scraping) with Selenium, Playwright and requests. Strong foundation in programming logic and OOP, focused on shipping quality code with AI-assisted development (Claude Code). Fluent English (exchange in the USA), fast learner with clear communication.",
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
        institution: "Estácio · In progress (4th semester)",
        period: "Jan 2025 — Present",
        detail: "Focus: Data Structures, OOP, SQL Databases and Software Engineering.",
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
      { group: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS", "C# (transferable base)"] },
      {
        group: "Automation & Data Extraction",
        items: ["Selenium", "Playwright", "PyAutoGUI", "Requests", "Web Scraping", "Process Automation"],
      },
      { group: "Backend & Databases", items: ["REST APIs", "Spring Boot", "SQL Databases", "JUnit"] },
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
      objective: "Software Development / Software Engineering Internship",
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
