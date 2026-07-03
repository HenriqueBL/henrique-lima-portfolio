"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";
import { siteConfig } from "@/data/config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initial: FormState = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Informe seu nome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "E-mail inválido.";
    if (!form.message.trim()) next.message = "Escreva uma mensagem.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(form.subject || `Contato de ${form.name}`);
    const body = encodeURIComponent(
      `Nome: ${form.name}\nE-mail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome" error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="Seu nome"
            className={inputClass(!!errors.name)}
          />
        </Field>
        <Field label="E-mail" error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="voce@email.com"
            className={inputClass(!!errors.email)}
          />
        </Field>
      </div>

      <Field label="Assunto (opcional)">
        <input
          type="text"
          value={form.subject}
          onChange={update("subject")}
          placeholder="Sobre o que você quer falar?"
          className={inputClass(false)}
        />
      </Field>

      <Field label="Mensagem" error={errors.message}>
        <textarea
          value={form.message}
          onChange={update("message")}
          rows={5}
          placeholder="Escreva sua mensagem..."
          className={cn(inputClass(!!errors.message), "resize-none")}
        />
      </Field>

      <div className="flex items-center gap-4">
        <Button type="submit" size="lg" disabled={sent}>
          {sent ? (
            <>
              <Check className="h-4 w-4" />
              Abrindo seu e-mail
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Enviar mensagem
            </>
          )}
        </Button>
        {sent && (
          <p className="text-sm text-muted-foreground">
            Se o cliente de e-mail não abrir, escreva para{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-accent underline">
              {siteConfig.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground/90">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/60",
    hasError ? "border-red-400/60" : "border-border focus:border-accent/60"
  );
}
