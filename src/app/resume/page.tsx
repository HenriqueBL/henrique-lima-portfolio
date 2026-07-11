import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { ResumeDocument } from "@/components/sections/resume-document";

export const metadata: Metadata = pageMetadata({
  title: "Currículo",
  description:
    "Currículo de Henrique Lima em português e inglês. Formação, competências, projetos e diferenciais para vagas de estágio em desenvolvimento.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <>
      <div className="no-print">
        <PageHeader
          eyebrow="Currículo"
          title="Meu currículo"
          description="Disponível em português e inglês. Baixe em PDF ou Word — arquivos otimizados para ATS (coluna única, fonte padrão e texto selecionável)."
        />
      </div>
      <Section className="pt-10">
        <ResumeDocument />
      </Section>
    </>
  );
}
