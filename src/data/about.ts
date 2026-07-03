import { Rocket, Globe2, Bot, GraduationCap, Puzzle, TrendingUp } from "lucide-react";
import type { TimelineItem } from "@/types";

/* Parágrafos da história profissional (página /about). */
export const story: string[] = [
  "Sou o Henrique, estudante de Análise e Desenvolvimento de Sistemas desde janeiro de 2025, atualmente no 4º período. Minha entrada no mundo da tecnologia veio de uma curiosidade genuína: entender como as coisas funcionam por dentro e transformar ideias em software que resolve problemas reais.",
  "Antes da faculdade, vivi uma experiência que mudou minha forma de ver o mundo: cursei parte do High School nos Estados Unidos — na Mt Ida High School, no Arkansas — pelo Programa Ganhe o Mundo (PGM). Esse semestre me deu fluência em inglês, autonomia e a confiança de me virar em ambientes novos — habilidades que carrego para dentro do código todos os dias.",
  "Aprendi Java pela Udemy e desde então venho construindo projetos full stack de verdade. Meu diferencial está em como eu desenvolvo: trato a IA como uma parceira de engenharia. Com ferramentas como o Claude Code, planejo a arquitetura, escrevo, refatoro e reviso código com rapidez — sem abrir mão de entender cada decisão técnica.",
  "Acredito que saber colaborar com IA é uma habilidade profissional moderna, tão importante quanto dominar uma linguagem. Ela me deixa focar no que importa: pensar no problema, na experiência do usuário e na qualidade da solução. Estou em busca de um estágio onde eu possa aprender com um time, contribuir de verdade e crescer como desenvolvedor.",
];

export const values = [
  {
    icon: GraduationCap,
    title: "Estudante de ADS",
    description:
      "No 4º período, com base sólida em lógica, POO e desenvolvimento web — e sempre estudando além da grade.",
  },
  {
    icon: Globe2,
    title: "Experiência internacional",
    description:
      "Semestre de High School nos EUA pelo Programa Ganhe o Mundo. Inglês fluente e vivência global.",
  },
  {
    icon: Bot,
    title: "Desenvolvimento com IA",
    description:
      "Uso Claude Code e engenharia de prompt como ferramentas de produtividade para entregar software de qualidade.",
  },
  {
    icon: Puzzle,
    title: "Resolução de problemas",
    description:
      "Gosto de quebrar problemas complexos em partes claras e resolver cada uma com método e critério.",
  },
  {
    icon: TrendingUp,
    title: "Aprendizado constante",
    description:
      "Perfil autodidata: aprendo tecnologias novas com rapidez e transformo dúvidas em projetos.",
  },
  {
    icon: Rocket,
    title: "Foco em software",
    description:
      "Meu objetivo é claro: evoluir como desenvolvedor de software e contribuir em times de tecnologia.",
  },
];

export const journey: TimelineItem[] = [
  {
    period: "2025 — Atual",
    title: "Análise e Desenvolvimento de Sistemas",
    subtitle: "Graduação · 4º período",
    description:
      "Aprofundando em programação, orientação a objetos, banco de dados e desenvolvimento web full stack.",
    tags: ["Java", "POO", "Web", "Banco de Dados"],
  },
  {
    period: "2025",
    title: "Projetos com Desenvolvimento Assistido por IA",
    subtitle: "Prática · Portfólio",
    description:
      "Construção de aplicações full stack usando Claude Code, prompt engineering e Git/GitHub no fluxo diário.",
    tags: ["Claude Code", "React", "Next.js", "TypeScript"],
  },
  {
    period: "2024",
    title: "Curso de Java (Udemy)",
    subtitle: "Formação técnica",
    description:
      "Fundamentos da linguagem, lógica de programação e orientação a objetos como base da jornada.",
    tags: ["Java", "Lógica", "POO"],
  },
  {
    period: "Intercâmbio",
    title: "Mt Ida High School — Arkansas, EUA",
    subtitle: "Programa Ganhe o Mundo (PGM)",
    description:
      "Um semestre de imersão acadêmica e cultural nos EUA — a origem do inglês fluente e do perfil adaptável.",
    tags: ["Inglês", "Internacional", "Autonomia"],
  },
];

/* Pilares do "como eu desenvolvo" (seção IA). */
export const aiWorkflow = [
  {
    step: "01",
    title: "Planejo a arquitetura",
    description:
      "Antes de codar, defino a estrutura, as pastas e as responsabilidades de cada parte com clareza.",
  },
  {
    step: "02",
    title: "Descrevo com precisão",
    description:
      "Uso engenharia de prompt para traduzir requisitos em instruções técnicas exatas para a IA.",
  },
  {
    step: "03",
    title: "Construo e refino rápido",
    description:
      "Gero, refatoro e itero com Claude Code, revisando cada trecho e mantendo o controle das decisões.",
  },
  {
    step: "04",
    title: "Reviso e versiono",
    description:
      "Testo o comportamento, garanto boas práticas e versiono tudo com Git e GitHub.",
  },
];
