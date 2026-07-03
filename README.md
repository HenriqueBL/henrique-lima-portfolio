<div align="center">

# Henrique Lima — Portfólio

**Análise e Desenvolvimento de Sistemas · AI-Assisted Developer**

Portfólio profissional construído com Next.js, TypeScript e Tailwind CSS, com design minimalista, dark mode, animações suaves e SEO completo.

`Next.js 14` · `React 18` · `TypeScript` · `Tailwind CSS` · `Framer Motion` · `Lucide`

</div>

---

## ✨ Visão geral

Um portfólio de página única e multi-rotas pensado para impressionar recrutadores de tecnologia. Ele apresenta a trajetória do Henrique, seus projetos, um currículo bilíngue (PT/EN) e canais de contato — tudo com uma identidade visual moderna e performance de primeira.

Um diferencial central: o portfólio assume e valoriza o **desenvolvimento assistido por IA** (Claude Code, engenharia de prompt, vibe coding) como uma habilidade profissional moderna.

## 🚀 Funcionalidades

- **5 páginas**: Início, Sobre, Projetos, Currículo e Contato
- **Páginas de detalhe** para cada projeto, com arquitetura, funcionalidades, desafios e aprendizados
- **Dark mode** por padrão, com alternância claro/escuro (sem flash de conteúdo)
- **Currículo bilíngue** (Português/Inglês) com exportação para PDF via impressão do navegador
- **Animações suaves** com Framer Motion, respeitando `prefers-reduced-motion`
- **Design responsivo** (mobile-first) e acessível (foco visível, navegação por teclado, skip link)
- **SEO completo**: metadata, Open Graph, Twitter Cards, Schema.org (JSON-LD), sitemap, robots e manifest
- **Imagem Open Graph dinâmica** gerada em tempo de build
- **Componentização limpa** e arquitetura escalável, com dados centralizados

## 🛠️ Stack

| Camada          | Tecnologia                              |
| --------------- | --------------------------------------- |
| Framework       | Next.js 14 (App Router)                 |
| Linguagem       | TypeScript                              |
| UI              | React 18                                |
| Estilos         | Tailwind CSS 3                          |
| Animações       | Framer Motion                           |
| Ícones          | Lucide React                            |
| Tema            | next-themes                             |
| Fontes          | Inter · Space Grotesk · JetBrains Mono  |

## 🎨 Identidade visual

**Paleta (dark mode)**

| Token         | Uso                         | Cor              |
| ------------- | --------------------------- | ---------------- |
| Background    | Fundo principal             | `#0a0a0b`        |
| Card          | Superfícies / cartões       | `#111214`        |
| Foreground    | Texto principal             | `#ededef`        |
| Muted         | Texto secundário            | `#a1a1aa`        |
| Accent        | Índigo (destaque)           | `#6366f1`        |
| Accent soft   | Violeta (gradiente)         | `#8b5cf6`        |

As cores são definidas como CSS variables em [`src/app/globals.css`](src/app/globals.css) e expostas ao Tailwind em [`tailwind.config.ts`](tailwind.config.ts).

**Tipografia**

- **Space Grotesk** — títulos e números (display)
- **Inter** — corpo de texto
- **JetBrains Mono** — código e detalhes técnicos

## 📁 Estrutura do projeto

```
src/
├── app/                    # Rotas (App Router)
│   ├── layout.tsx          # Layout raiz: fontes, tema, navbar, footer, SEO
│   ├── page.tsx            # Home
│   ├── about/              # Sobre
│   ├── projects/           # Lista + [slug] (detalhe de cada projeto)
│   ├── resume/             # Currículo (PT/EN + impressão)
│   ├── contact/            # Contato
│   ├── icon.svg            # Favicon (monograma)
│   ├── opengraph-image.tsx # Imagem OG dinâmica
│   ├── manifest.ts         # Web App Manifest
│   ├── sitemap.ts          # Sitemap
│   └── robots.ts           # Robots
├── components/
│   ├── layout/             # Navbar, Footer, Tema, Background
│   ├── sections/           # Blocos de página (Hero, Projetos, Currículo...)
│   ├── ui/                 # Primitivos (Button, Card, Badge, Section...)
│   ├── motion/             # Wrappers de animação (Reveal, variants)
│   └── seo/                # JSON-LD (Schema.org)
├── data/                   # CONTEÚDO EDITÁVEL (config, projetos, skills, currículo)
├── lib/                    # Utilitários (fontes, metadata, cn)
└── types/                  # Tipos TypeScript
```

## 🏁 Como rodar

Pré-requisitos: **Node.js 18.17+** (recomendado 20+).

```bash
# 1. Instalar dependências
npm install

# 2. Ambiente de desenvolvimento
npm run dev
# abre em http://localhost:3000

# 3. Build de produção
npm run build
npm start
```

### Scripts

| Comando         | O que faz                          |
| --------------- | ---------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento        |
| `npm run build` | Build otimizado de produção        |
| `npm start`     | Sobe o build de produção           |
| `npm run lint`  | Análise estática com ESLint        |

## ✏️ Como personalizar

Todo o conteúdo fica centralizado em **`src/data/`** — você raramente precisa tocar em componentes.

| O que mudar                    | Onde                          |
| ------------------------------ | ----------------------------- |
| Nome, e-mail, telefone, links  | `src/data/config.ts`          |
| Projetos                       | `src/data/projects.ts`        |
| Skills e diferenciais          | `src/data/skills.ts`          |
| Currículo (PT e EN)            | `src/data/resume.ts`          |
| História e linha do tempo      | `src/data/about.ts`           |

### Trocar a foto de perfil

1. Coloque sua foto em `public/images/henrique.jpg`.
2. Em [`src/components/ui/profile-photo.tsx`](src/components/ui/profile-photo.tsx), passe o `src`, ou edite o Hero/About para usar `<ProfilePhoto src="/images/henrique.jpg" />`.

> Sem foto, o site mostra um placeholder elegante com o monograma — nada quebra.

### Campos de contato

Os campos marcados com `// TODO` em `src/data/config.ts` são placeholders. Atualize e-mail, telefone, GitHub e LinkedIn — todo o site (footer, contato, currículo, SEO) usa esses valores automaticamente.

### Currículo em PDF

A página `/resume` já é o currículo. Clique em **Baixar PDF** (ou `Ctrl/Cmd + P`) e salve como PDF — o layout de impressão já está otimizado. Para anexar PDFs prontos, coloque-os em `public/cv/`.

## 🔍 SEO & Performance

- Metadata e Open Graph configurados em `src/lib/metadata.ts`
- Dados estruturados (Person + WebSite) em `src/components/seo/json-ld.tsx`
- Fontes otimizadas com `next/font` (sem layout shift)
- Imagens no formato AVIF/WebP e animações que respeitam preferências do usuário

> **Antes de publicar:** ajuste `siteConfig.url` em `src/data/config.ts` para o seu domínio — sitemap, canonical e Open Graph dependem disso.

## ☁️ Deploy

A forma mais simples é a **[Vercel](https://vercel.com)** (mesma empresa do Next.js):

1. Suba o projeto para um repositório no GitHub.
2. Importe o repositório na Vercel.
3. Deploy automático — sem configuração adicional.

## 🤖 Sobre o desenvolvimento

Este projeto foi construído com **desenvolvimento assistido por IA** — planejamento de arquitetura, componentização e implementação em colaboração com o Claude Code. Uma demonstração prática de como usar IA como ferramenta de produtividade para entregar software de qualidade.

## 📄 Licença

MIT — sinta-se livre para usar como base para o seu próprio portfólio.

---

<div align="center">
Feito por <strong>Henrique Lima</strong>
</div>
