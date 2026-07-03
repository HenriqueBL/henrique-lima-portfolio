import { siteConfig } from "@/data/config";
import { skillGroups } from "@/data/skills";

/**
 * Dados estruturados (Schema.org) para Person + WebSite.
 * Ajuda buscadores a entenderem quem é o Henrique e o que o site representa.
 */
export function JsonLd() {
  const allSkills = skillGroups.flatMap((g) => g.skills.map((s) => s.name));

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: "Estudante de Análise e Desenvolvimento de Sistemas",
    description: siteConfig.shortBio,
    knowsLanguage: ["Portuguese", "English"],
    knowsAbout: allSkills,
    sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
    seeks: {
      "@type": "Demand",
      name: "Estágio em Desenvolvimento de Software",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} · Portfolio`,
    url: siteConfig.url,
    inLanguage: "pt-BR",
    author: { "@type": "Person", name: siteConfig.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
