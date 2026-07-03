import type { Metadata } from "next";
import { siteConfig } from "@/data/config";

const defaultTitle = `${siteConfig.name} — ${siteConfig.headline}`;
const defaultDescription = siteConfig.shortBio;

/** Metadata base compartilhada por todas as páginas. */
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: `%s · ${siteConfig.name}`,
  },
  description: defaultDescription,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: [
    "Henrique Lima",
    "desenvolvedor",
    "estágio",
    "Análise e Desenvolvimento de Sistemas",
    "Java",
    "TypeScript",
    "React",
    "Next.js",
    "AI-Assisted Development",
    "Claude Code",
    "desenvolvedor júnior",
    "portfólio",
  ],
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: `${siteConfig.name} · Portfolio`,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.headline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og.png"],
  },
  manifest: "/manifest.webmanifest",
};

interface PageMetaOptions {
  title: string;
  description: string;
  path?: string;
}

/** Gera metadata por página, herdando os defaults e ajustando o canonical. */
export function pageMetadata({ title, description, path = "/" }: PageMetaOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${siteConfig.name}`,
      description,
      url: path,
    },
    twitter: { title: `${title} · ${siteConfig.name}`, description },
  };
}
