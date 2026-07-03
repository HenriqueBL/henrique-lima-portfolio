import type { Project } from "@/types";
import { siteConfig } from "@/data/config";

/* ------------------------------------------------------------------ *
 *  PROJETOS
 *  Estudos de caso construídos com desenvolvimento assistido por IA.
 *  Substitua repoUrl/liveUrl pelos links reais quando publicar.
 * ------------------------------------------------------------------ */

const repo = (slug: string) => `${siteConfig.socials.github}/${slug}`;

export const projects: Project[] = [
  {
    slug: "finflow",
    title: "FinFlow",
    tagline: "Sistema de Controle Financeiro Pessoal",
    category: "Full Stack",
    year: "2025",
    featured: true,
    description:
      "Plataforma para organizar receitas, despesas e metas com relatórios visuais e categorização inteligente.",
    longDescription:
      "O FinFlow nasceu para responder uma pergunta simples: para onde meu dinheiro está indo? A aplicação centraliza lançamentos, agrupa gastos por categoria e transforma dados brutos em gráficos que revelam padrões de consumo. O foco foi entregar uma experiência limpa, com feedback imediato a cada ação e uma base de código pronta para crescer.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "REST API", "Chart.js"],
    features: [
      "Dashboard com saldo, entradas e saídas em tempo real",
      "Categorização de transações com metas mensais por categoria",
      "Gráficos de evolução do saldo e distribuição de despesas",
      "Filtros por período, categoria e tipo de lançamento",
      "Exportação de relatórios e modo escuro nativo",
    ],
    architecture: [
      "Frontend em Next.js (App Router) com componentes reutilizáveis e tipados",
      "Camada de API REST separando regras de negócio da interface",
      "Estado de UI local + cache de dados para respostas instantâneas",
      "Validação de formulários no cliente e no servidor",
    ],
    challenges: [
      "Modelar categorias e metas de forma flexível sem complicar a UX",
      "Manter os gráficos performáticos com muitos lançamentos",
      "Garantir consistência entre o saldo exibido e o histórico de transações",
    ],
    learnings: [
      "Estruturar um projeto full stack do zero com pastas escaláveis",
      "Usar prompts bem definidos para gerar e refatorar componentes com IA",
      "Transformar requisitos vagos em uma especificação técnica clara",
    ],
    metrics: [
      { label: "Cobertura de UI", value: "Responsiva" },
      { label: "Categorias", value: "Ilimitadas" },
      { label: "Relatórios", value: "5 tipos" },
    ],
    repoUrl: repo("finflow"),
    liveUrl: "#",
    accent: { from: "#34d399", to: "#22d3ee" },
  },
  {
    slug: "stockwise",
    title: "StockWise",
    tagline: "Sistema de Gestão de Estoque",
    category: "Full Stack",
    year: "2025",
    featured: true,
    description:
      "Controle de produtos, entradas e saídas com alertas de estoque baixo e histórico de movimentações.",
    longDescription:
      "O StockWise digitaliza o controle de estoque de pequenos negócios, substituindo planilhas frágeis por um sistema confiável. Cada movimentação é registrada com data, responsável e motivo, e o painel destaca automaticamente os itens que precisam de reposição. A prioridade foi criar regras de negócio robustas em torno de uma interface direta.",
    tech: ["Java", "Spring Boot", "React", "TypeScript", "MySQL", "REST API"],
    features: [
      "Cadastro de produtos com SKU, categoria, preço e estoque mínimo",
      "Registro de entradas e saídas com trilha de auditoria",
      "Alertas automáticos de estoque baixo e itens em falta",
      "Busca e filtros por categoria, fornecedor e status",
      "Relatório de giro e valor total imobilizado em estoque",
    ],
    architecture: [
      "Backend em Java/Spring Boot expondo uma API REST versionada",
      "Persistência em MySQL com relacionamentos normalizados",
      "Frontend React consumindo a API com camada de serviços tipada",
      "Separação clara entre entidades, DTOs e regras de negócio",
    ],
    challenges: [
      "Garantir integridade do estoque em movimentações concorrentes",
      "Modelar o histórico de forma que permita auditoria completa",
      "Conectar backend Java e frontend React mantendo contratos claros",
    ],
    learnings: [
      "Aplicar POO e boas práticas de camadas em um projeto Java real",
      "Projetar uma API REST consistente e documentada",
      "Coordenar dois stacks (Java + React) num fluxo de trabalho com IA",
    ],
    metrics: [
      { label: "Entidades", value: "8+" },
      { label: "Endpoints", value: "20+" },
      { label: "Alertas", value: "Automáticos" },
    ],
    repoUrl: repo("stockwise"),
    liveUrl: "#",
    accent: { from: "#fbbf24", to: "#fb923c" },
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    tagline: "Aplicativo de Lista de Tarefas",
    category: "Web App",
    year: "2025",
    featured: true,
    description:
      "Gerenciador de tarefas com quadros, prioridades, prazos e organização por arrastar e soltar.",
    longDescription:
      "O TaskFlow é um gerenciador de produtividade focado em foco e clareza. Ele combina listas, prioridades e prazos numa interface fluida, com arrastar e soltar e microinterações que tornam a organização prazerosa. O objetivo foi provar que um app aparentemente simples pode ter uma execução de UI/UX impecável.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "LocalStorage"],
    features: [
      "Quadros e listas com reorganização por arrastar e soltar",
      "Prioridades, etiquetas e datas de vencimento",
      "Filtros por status, prioridade e busca instantânea",
      "Persistência local com sincronização de estado",
      "Animações suaves e atalhos de teclado",
    ],
    architecture: [
      "Aplicação Next.js com componentes desacoplados e hooks customizados",
      "Gerenciamento de estado previsível e tipado",
      "Persistência em LocalStorage com camada de abstração",
      "Animações declarativas com Framer Motion respeitando reduced-motion",
    ],
    challenges: [
      "Implementar drag-and-drop acessível e performático",
      "Manter o estado consistente entre múltiplas listas",
      "Equilibrar animações ricas com performance e acessibilidade",
    ],
    learnings: [
      "Criar hooks reutilizáveis e componentes verdadeiramente isolados",
      "Aprofundar em animação de interface com Framer Motion",
      "Iterar rapidamente na UX usando IA para prototipar variações",
    ],
    metrics: [
      { label: "Interações", value: "Drag & Drop" },
      { label: "Persistência", value: "Offline" },
      { label: "A11y", value: "Teclado" },
    ],
    repoUrl: repo("taskflow"),
    liveUrl: "#",
    accent: { from: "#a78bfa", to: "#6366f1" },
  },
  {
    slug: "adminpulse",
    title: "AdminPulse",
    tagline: "Dashboard Administrativo",
    category: "Dashboard",
    year: "2025",
    featured: false,
    description:
      "Painel administrativo com métricas, tabelas dinâmicas, gráficos e gestão de usuários.",
    longDescription:
      "O AdminPulse é um painel administrativo completo, do tipo que serve de base para qualquer produto SaaS. Ele reúne KPIs, gráficos, tabelas com ordenação e paginação, e uma área de gestão de usuários com papéis e permissões. O desafio foi construir componentes genéricos o bastante para serem reaproveitados em qualquer contexto.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Chart.js", "REST API"],
    features: [
      "Visão geral com KPIs e comparativos por período",
      "Tabelas com ordenação, filtros, busca e paginação",
      "Gráficos de linha, barra e área responsivos",
      "Gestão de usuários com papéis e permissões",
      "Layout adaptável com navegação lateral colapsável",
    ],
    architecture: [
      "Design system interno com componentes de UI reutilizáveis",
      "Padrão de composição para tabelas e cartões de métrica",
      "Consumo de API REST com estados de carregamento e erro tratados",
      "Tema claro/escuro controlado por contexto",
    ],
    challenges: [
      "Criar uma tabela genérica, tipada e reutilizável",
      "Organizar um design system consistente desde o início",
      "Manter a performance com muitos dados e gráficos simultâneos",
    ],
    learnings: [
      "Pensar em componentização e reuso em escala de produto",
      "Padronizar tokens de design (cores, espaçamentos, tipografia)",
      "Documentar decisões para acelerar a colaboração com IA",
    ],
    metrics: [
      { label: "Componentes", value: "30+" },
      { label: "Widgets", value: "12" },
      { label: "Temas", value: "Claro/Escuro" },
    ],
    repoUrl: repo("adminpulse"),
    liveUrl: "#",
    accent: { from: "#60a5fa", to: "#4f46e5" },
  },
  {
    slug: "agendafy",
    title: "Agendafy",
    tagline: "Sistema de Agendamento",
    category: "Full Stack",
    year: "2025",
    featured: false,
    description:
      "Plataforma de agendamento de horários com calendário, confirmações e gestão de serviços.",
    longDescription:
      "O Agendafy resolve o agendamento de serviços de ponta a ponta: o cliente escolhe serviço e horário disponível, o sistema evita conflitos e o profissional gerencia sua agenda num calendário claro. Trabalhei bastante nas regras de disponibilidade e na prevenção de sobreposição de horários.",
    tech: ["Java", "Spring Boot", "Next.js", "React", "TypeScript", "MySQL"],
    features: [
      "Calendário com horários disponíveis em tempo real",
      "Cadastro de serviços com duração e preço",
      "Prevenção automática de conflitos de horário",
      "Confirmações e lembretes de agendamento",
      "Painel do profissional com visão diária e semanal",
    ],
    architecture: [
      "API REST em Spring Boot com regras de disponibilidade no backend",
      "Modelagem de serviços, profissionais e agendamentos em MySQL",
      "Frontend Next.js com calendário interativo",
      "Validações de horário no servidor para garantir integridade",
    ],
    challenges: [
      "Calcular slots disponíveis considerando duração e intervalos",
      "Evitar agendamentos simultâneos no mesmo horário",
      "Traduzir uma regra de negócio complexa em código legível",
    ],
    learnings: [
      "Modelar domínios com regras temporais no backend",
      "Projetar APIs pensando em concorrência e integridade",
      "Dividir um problema grande em prompts e etapas verificáveis",
    ],
    metrics: [
      { label: "Conflitos", value: "Zero" },
      { label: "Visões", value: "Dia/Semana" },
      { label: "Serviços", value: "Ilimitados" },
    ],
    repoUrl: repo("agendafy"),
    liveUrl: "#",
    accent: { from: "#f472b6", to: "#a855f7" },
  },
  {
    slug: "bibliotech",
    title: "BiblioTech",
    tagline: "Sistema de Controle de Biblioteca",
    category: "Full Stack",
    year: "2025",
    featured: false,
    description:
      "Gestão de acervo, empréstimos e devoluções com controle de disponibilidade e multas.",
    longDescription:
      "O BiblioTech informatiza uma biblioteca: cadastro de livros e membros, empréstimos com prazo, devoluções e cálculo automático de multas por atraso. É um projeto que exercita bem POO e modelagem de dados, com um domínio rico em regras e estados.",
    tech: ["Java", "Spring Boot", "React", "TypeScript", "MySQL", "REST API"],
    features: [
      "Catálogo de livros com disponibilidade e categorias",
      "Cadastro de membros e histórico de empréstimos",
      "Empréstimos com prazo e devolução com baixa automática",
      "Cálculo de multas por atraso e bloqueio de inadimplentes",
      "Relatórios de livros mais emprestados e acervo total",
    ],
    architecture: [
      "Backend Java/Spring Boot com entidades bem definidas (Livro, Membro, Empréstimo)",
      "Banco MySQL com relacionamentos e restrições de integridade",
      "Frontend React tipado consumindo a API REST",
      "Regras de multa e disponibilidade centralizadas no domínio",
    ],
    challenges: [
      "Modelar estados de um empréstimo (ativo, devolvido, atrasado)",
      "Calcular multas de forma justa e transparente",
      "Garantir que um livro indisponível não seja emprestado",
    ],
    learnings: [
      "Aplicar princípios de POO a um domínio com muitas regras",
      "Estruturar relacionamentos e restrições no banco de dados",
      "Refinar continuamente o código com revisão assistida por IA",
    ],
    metrics: [
      { label: "Entidades", value: "6" },
      { label: "Estados", value: "3" },
      { label: "Multas", value: "Automáticas" },
    ],
    repoUrl: repo("bibliotech"),
    liveUrl: "#",
    accent: { from: "#38bdf8", to: "#818cf8" },
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
