import { Home } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <span className="font-display text-8xl font-bold text-gradient sm:text-9xl">404</span>
      <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        Página não encontrada
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        O link que você seguiu pode estar quebrado ou a página foi movida.
      </p>
      <ButtonLink href="/" size="lg" className="mt-8">
        <Home className="h-4 w-4" />
        Voltar ao início
      </ButtonLink>
    </Container>
  );
}
