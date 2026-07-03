import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig, socialLinks } from "@/data/config";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = pageMetadata({
  title: "Contato",
  description:
    "Entre em contato com Henrique Lima para oportunidades de estágio em desenvolvimento de software. E-mail, telefone, GitHub e LinkedIn.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Vamos conversar"
        description="Estou aberto a oportunidades de estágio e sempre disponível para uma boa conversa sobre tecnologia. Escolha o canal que preferir."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          {/* Formulário */}
          <Reveal>
            <Card className="p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold">Envie uma mensagem</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Preencha os campos abaixo — o botão abre seu app de e-mail já com tudo preenchido.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Card>
          </Reveal>

          {/* Canais diretos */}
          <div className="space-y-4">
            <Reveal>
              <h2 className="font-display text-xl font-semibold">Canais diretos</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Prefere o caminho rápido? Fale comigo por aqui.
              </p>
            </Reveal>

            {socialLinks.map((link, i) => {
              const Icon = link.icon;
              const isExternal = link.href.startsWith("http");
              return (
                <Reveal key={link.label} delay={i * 0.06}>
                  <a
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card/40 p-4 transition-all hover:-translate-y-0.5 hover:border-accent/40"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium">{link.label}</span>
                      <span className="block truncate text-sm text-muted-foreground">
                        {link.handle}
                      </span>
                    </span>
                  </a>
                </Reveal>
              );
            })}

            <Reveal delay={0.3}>
              <Card className="bg-accent/5">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Localização:</span>{" "}
                  {siteConfig.location} · Aberto a oportunidades remotas e presenciais.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
