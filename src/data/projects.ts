import type { Project } from "@/types";
import { siteConfig } from "@/data/config";

/* ------------------------------------------------------------------ *
 *  PROJETOS (reais)
 *  Repositórios públicos em github.com/HenriqueBL, descritos com base
 *  no que de fato está implementado em cada um.
 * ------------------------------------------------------------------ */

const repo = (name: string) => `${siteConfig.socials.github}/${name}`;

export const projects: Project[] = [
  {
    slug: "todo-api",
    title: "Todo API",
    tagline: "API REST de tarefas com Spring Boot",
    category: "Back-end",
    year: "2026",
    featured: true,
    description:
      "API REST para gerenciamento de tarefas com CRUD completo, validação, tratamento global de erros e testes automatizados.",
    longDescription:
      "A Todo API é um back-end de gerenciamento de tarefas construído para praticar boas práticas com Spring Boot. Expõe endpoints REST para criar, listar, atualizar e remover tarefas, com filtro por status de conclusão, validação dos dados de entrada via DTOs e respostas de erro padronizadas por um handler global de exceções. A persistência usa um banco H2 em memória e a lógica é coberta por testes com JUnit 5 e Mockito.",
    tech: [
      "Java 17",
      "Spring Boot",
      "Spring Data JPA",
      "Bean Validation",
      "H2 Database",
      "Lombok",
      "JUnit 5",
      "Mockito",
      "Maven",
    ],
    features: [
      "CRUD completo de tarefas via endpoints REST em /api/tasks",
      "Filtro de tarefas por status de conclusão",
      "Validação dos dados de entrada com Bean Validation nos DTOs",
      "Tratamento global de exceções com respostas de erro padronizadas",
      "Testes de unidade com JUnit 5 e Mockito",
    ],
    architecture: [
      "Arquitetura em camadas: Controller, Service (com implementação) e Repository",
      "Entidades JPA separadas dos DTOs de request/response",
      "Persistência com Spring Data JPA sobre banco H2 em memória",
      "Handler global de exceções centralizando o formato de erro",
    ],
    challenges: [
      "Padronizar as respostas de erro da API com um handler global",
      "Separar entidade e DTOs para não expor o modelo interno",
      "Isolar a camada de serviço nos testes usando mocks",
    ],
    learnings: [
      "Estruturar uma API REST em camadas com Spring Boot",
      "Aplicar validação e tratamento de erros de forma centralizada",
      "Testar serviços com JUnit 5 e Mockito",
    ],
    metrics: [
      { label: "Endpoints", value: "5" },
      { label: "Banco", value: "H2 (memória)" },
      { label: "Testes", value: "JUnit 5" },
    ],
    repoUrl: repo("todo-api"),
    liveUrl: "#",
    accent: { from: "#34d399", to: "#22d3ee" },
  },
  {
    slug: "realtime-api-watcher",
    title: "Realtime API Watcher",
    tagline: "Monitor de API em tempo real com auto-ação",
    category: "Automação",
    year: "2026",
    featured: true,
    description:
      "Monitora um endpoint REST em tempo real e dispara uma ação automática assim que um novo item aparece — em vez de atualizar a página na mão.",
    longDescription:
      "O Realtime API Watcher observa um endpoint REST e reage sozinho em milissegundos quando surge um novo item. Autentica via JWT (com renovação automática antes de expirar), faz polling de baixa latência com uma sessão HTTP compartilhada e pool de conexões, e para cada item dispara um worker em thread própria que executa a ação até obter sucesso — sem bloquear o loop principal. Em falhas de rede, aplica backoff exponencial. Toda a configuração vem de variáveis de ambiente, sem credenciais no código.",
    tech: ["Python 3.11", "requests", "Threading", "JWT", "APIs REST", "Automação", "Web Scraping"],
    features: [
      "Autenticação JWT com token em cache e renovação automática",
      "Polling de baixa latência com requests.Session + pool de conexões",
      "Um worker concorrente por item, tentando a ação até obter sucesso",
      "Backoff exponencial em falhas de rede",
      "Configuração 100% por ambiente (.env), sem credenciais no código",
    ],
    architecture: [
      "Classe Watcher encapsula login, polling e ação",
      "TokenStore controla a validade e a expiração do JWT",
      "requests.Session com HTTPAdapter (pool de 20 conexões)",
      "Threads daemon por item com estado de sucesso compartilhado",
    ],
    challenges: [
      "Nunca cair em 401 no meio do loop (renovação antecipada do token)",
      "Coordenar o polling e múltiplos workers sobre a mesma sessão",
      "Ser resiliente à instabilidade de rede sem travar o loop",
    ],
    learnings: [
      "Integração e engenharia reversa de APIs REST",
      "Concorrência com threads e estado compartilhado em Python",
      "Resiliência: timeouts, retry e backoff exponencial",
    ],
    metrics: [
      { label: "Latência", value: "Sub-segundo" },
      { label: "Auth", value: "JWT auto" },
      { label: "Concorrência", value: "N workers" },
    ],
    repoUrl: repo("realtime-api-watcher"),
    liveUrl: "#",
    accent: { from: "#f97316", to: "#ef4444" },
  },
  {
    slug: "portfolio",
    title: "Portfólio Pessoal",
    tagline: "Este site — Next.js, TypeScript e Tailwind",
    category: "Front-end",
    year: "2026",
    featured: true,
    description:
      "O portfólio que você está navegando: site em Next.js com renderização estática, dark mode, currículo bilíngue e SEO completo.",
    longDescription:
      "Este é o portfólio que você está navegando agora. Construído com Next.js 14 (App Router), TypeScript e Tailwind CSS, com animações em Framer Motion e alternância de tema claro/escuro. As páginas são geradas estaticamente (SSG), o conteúdo fica centralizado em arquivos de dados tipados, e o SEO inclui JSON-LD, Open Graph, sitemap e robots. Foi desenvolvido com apoio intensivo de IA (Claude Code), do planejamento da arquitetura ao deploy contínuo na Vercel.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    features: [
      "Páginas estáticas (SSG) rápidas e otimizadas",
      "Tema claro/escuro com next-themes",
      "Currículo bilíngue (PT/EN) com impressão em PDF",
      "SEO completo: JSON-LD, Open Graph, sitemap e robots",
      "Deploy contínuo na Vercel a cada push no GitHub",
    ],
    architecture: [
      "Next.js App Router com componentes tipados e reutilizáveis",
      "Conteúdo centralizado em arquivos de dados (src/data) tipados",
      "Animações declarativas com Framer Motion respeitando reduced-motion",
      "CI/CD via integração GitHub → Vercel",
    ],
    challenges: [
      "Gerar a imagem Open Graph de forma compatível com Windows",
      "Manter o conteúdo editável e tipado em um único lugar",
      "Equilibrar animações ricas com performance e acessibilidade",
    ],
    learnings: [
      "Estruturar um projeto Next.js com App Router e SSG",
      "Trabalhar com design system e tokens no Tailwind",
      "Conduzir arquitetura e refatoração com desenvolvimento assistido por IA",
    ],
    metrics: [
      { label: "Rotas", value: "18" },
      { label: "Idiomas", value: "PT / EN" },
      { label: "Deploy", value: "Vercel" },
    ],
    repoUrl: repo("henrique-lima-portfolio"),
    liveUrl: siteConfig.url,
    accent: { from: "#a78bfa", to: "#6366f1" },
  },
  {
    slug: "sistema-biblioteca",
    title: "Sistema de Biblioteca",
    tagline: "Gestão de acervo e empréstimos em Java (POO)",
    category: "CLI",
    year: "2026",
    featured: false,
    description:
      "Aplicação de console em Java para gerenciar acervo, usuários e empréstimos, aplicando herança, polimorfismo e coleções.",
    longDescription:
      "O Sistema de Biblioteca é uma aplicação de console feita em Java para exercitar orientação a objetos na prática. Um tipo abstrato Item define o comportamento comum, especializado em Livro, Revista e DVD (herança e polimorfismo). Serviços dedicados cuidam do acervo e dos empréstimos, com exceções próprias para regras como item indisponível, e a busca é feita com a API de Streams. O projeto já inicia com dados de teste (7 itens e 3 usuários) para facilitar a demonstração.",
    tech: [
      "Java",
      "POO",
      "Herança / Polimorfismo",
      "Coleções",
      "Streams",
      "Exceções",
      "Maven",
    ],
    features: [
      "Acervo com três tipos de item (Livro, Revista, DVD) via herança",
      "Cadastro e gerenciamento de usuários",
      "Registro de empréstimos com exceções próprias de negócio",
      "Busca no acervo usando a API de Streams",
      "Dados de teste pré-carregados (7 itens, 3 usuários)",
    ],
    architecture: [
      "Classe abstrata Item como base, especializada em Livro, Revista e DVD",
      "Camada de serviço (BibliotecaService, EmprestimoService) com as regras de negócio",
      "Interação por menu de console (classe Menu) e ponto de entrada Main",
      "Armazenamento em memória com HashMap e ArrayList",
    ],
    challenges: [
      "Modelar a hierarquia de itens sem duplicar comportamento",
      "Tratar regras de empréstimo com exceções específicas",
      "Separar as regras de negócio da interface de console",
    ],
    learnings: [
      "Aplicar herança e polimorfismo em um domínio real",
      "Usar Streams para filtrar e buscar coleções",
      "Organizar serviços separados da camada de apresentação",
    ],
    metrics: [
      { label: "Tipos de item", value: "3" },
      { label: "Paradigma", value: "POO" },
      { label: "Interface", value: "Console" },
    ],
    repoUrl: repo("sistema-biblioteca"),
    liveUrl: "#",
    accent: { from: "#38bdf8", to: "#818cf8" },
  },
  {
    slug: "investment-calculator",
    title: "Calculadora de Investimentos",
    tagline: "Juros compostos com aportes mensais em Java",
    category: "CLI",
    year: "2026",
    featured: false,
    description:
      "Calculadora de console que projeta juros compostos com aportes mensais, usando BigDecimal para precisão financeira.",
    longDescription:
      "A Calculadora de Investimentos é uma aplicação de console em Java 17 que projeta o crescimento de um investimento com juros compostos e aportes mensais. Todo o cálculo usa BigDecimal para evitar erros de arredondamento de ponto flutuante, entregando precisão financeira. A saída detalha o saldo mês a mês, e a entrada passa por validação com mensagens claras. O código é organizado em camadas (model, service, validator e view), sem dependências externas.",
    tech: [
      "Java 17",
      "BigDecimal",
      "Arquitetura em camadas",
      "Validação de entrada",
    ],
    features: [
      "Cálculo de juros compostos com aportes mensais",
      "Detalhamento do saldo mês a mês",
      "Precisão financeira com BigDecimal, sem erros de ponto flutuante",
      "Validação de entrada com mensagens descritivas",
    ],
    architecture: [
      "Separação em camadas: model, service, validator e view",
      "CalculatorService concentra a lógica de cálculo",
      "ConsoleView cuida da entrada e saída no terminal",
      "Sem dependências externas — apenas Java 17",
    ],
    challenges: [
      "Garantir precisão financeira evitando double/float",
      "Manter a lógica de cálculo isolada da interface de console",
      "Validar as entradas do usuário de forma robusta",
    ],
    learnings: [
      "Usar BigDecimal para cálculos financeiros corretos",
      "Aplicar arquitetura em camadas em um projeto pequeno",
      "Separar validação, regra de negócio e apresentação",
    ],
    metrics: [
      { label: "Precisão", value: "BigDecimal" },
      { label: "Camadas", value: "4" },
      { label: "Dependências", value: "0" },
    ],
    repoUrl: repo("investment-calculator"),
    liveUrl: "#",
    accent: { from: "#fbbf24", to: "#fb923c" },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectNeighbors(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0];
  return { prev, next };
}
