"use client";

import { useState } from "react";
import { Download, Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { resume, resumeContact } from "@/data/resume";
import type { Locale } from "@/types";
import { cn } from "@/lib/utils";
import { buttonStyles } from "@/components/ui/button";

export function ResumeDocument() {
  const [locale, setLocale] = useState<Locale>("pt");
  const data = resume[locale];
  const L = data.labels;
  const t = (pt: string, en: string) => (locale === "pt" ? pt : en);
  const fileBase = locale === "pt" ? "Curriculo-Henrique-Lima" : "Resume-Henrique-Lima";

  return (
    <div>
      {/* Controles (não impressos) */}
      <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex rounded-full border border-border bg-card/50 p-1">
          {(["pt", "en"] as Locale[]).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLocale(l)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                locale === l
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {l === "pt" ? "Português" : "English"}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <a href={`/cv/${fileBase}.pdf`} download className={buttonStyles({ variant: "primary" })}>
            <Download className="h-4 w-4" />
            {t("Baixar PDF", "Download PDF")}
          </a>
          <a href={`/cv/${fileBase}.docx`} download className={buttonStyles({ variant: "outline" })}>
            <Download className="h-4 w-4" />
            {t("Baixar Word", "Download Word")}
          </a>
        </div>
      </div>

      {/* Documento */}
      <article className="print-container mx-auto max-w-4xl rounded-2xl border border-border bg-card/40 p-8 sm:p-12">
        {/* Cabeçalho */}
        <header className="border-b border-border pb-6 print-break-avoid">
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {resumeContact.name}
          </h1>
          <p className="mt-1.5 font-display text-lg text-accent">{L.role}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("Objetivo", "Objective")}: {L.objective}
          </p>

          <ul className="resume-contact mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <li className="inline-flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-accent" /> {resumeContact.email}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-accent" /> {resumeContact.phone}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-accent" /> {resumeContact.location}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Github className="h-4 w-4 text-accent" /> {resumeContact.github.replace("https://", "")}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Linkedin className="h-4 w-4 text-accent" />{" "}
              {resumeContact.linkedin.replace("https://", "")}
            </li>
          </ul>
        </header>

        <div className="resume-columns mt-8 grid gap-8 md:grid-cols-3">
          {/* Coluna principal */}
          <div className="space-y-8 md:col-span-2">
            <ResumeSection title={L.summary}>
              <p className="text-sm leading-relaxed text-muted-foreground">{data.summary}</p>
              <ul className="mt-3 space-y-1.5">
                {data.strengths.map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {s}
                  </li>
                ))}
              </ul>
            </ResumeSection>

            <ResumeSection title={L.education}>
              <div className="space-y-4">
                {data.education.map((e) => (
                  <div key={e.title} className="print-break-avoid">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-medium text-foreground">{e.title}</h4>
                      <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
                    </div>
                    <p className="text-sm text-accent">{e.institution}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{e.detail}</p>
                  </div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title={L.projects}>
              <div className="space-y-3">
                {data.projects.map((p) => (
                  <div key={p.name} className="print-break-avoid">
                    <h4 className="font-medium text-foreground">{p.name}</h4>
                    <p className="text-sm text-muted-foreground">{p.description}</p>
                    <p className="font-mono text-xs text-accent">{p.tech}</p>
                  </div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title={L.courses}>
              {data.courses.map((c) => (
                <div key={c.title} className="print-break-avoid">
                  <h4 className="font-medium text-foreground">
                    {c.title} <span className="text-muted-foreground">· {c.provider}</span>
                  </h4>
                  <p className="text-sm text-muted-foreground">{c.detail}</p>
                </div>
              ))}
            </ResumeSection>
          </div>

          {/* Coluna lateral */}
          <aside className="space-y-8">
            <ResumeSection title={L.hardSkills}>
              <div className="space-y-3">
                {data.hardSkills.map((group) => (
                  <div key={group.group} className="print-break-avoid">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                      {group.group}
                    </h4>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="resume-chip rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title={L.languages}>
              <ul className="space-y-2">
                {data.languages.map((lang) => (
                  <li key={lang.name} className="flex items-center justify-between text-sm">
                    <span className="inline-flex items-center gap-1.5 text-foreground/90">
                      <Globe className="h-3.5 w-3.5 text-accent" />
                      {lang.name}
                    </span>
                    <span className="text-muted-foreground">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </ResumeSection>

            <ResumeSection title={L.softSkills}>
              <div className="flex flex-wrap gap-1.5">
                {data.softSkills.map((s) => (
                  <span
                    key={s}
                    className="resume-chip rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title={L.differentials}>
              <ul className="space-y-1.5">
                {data.differentials.map((d) => (
                  <li key={d} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-accent">✓</span>
                    {d}
                  </li>
                ))}
              </ul>
            </ResumeSection>
          </aside>
        </div>
      </article>
    </div>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="print-break-avoid">
      <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-accent">
        {title}
      </h3>
      {children}
    </section>
  );
}
