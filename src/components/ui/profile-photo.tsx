import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/config";

interface ProfilePhotoProps {
  className?: string;
  /**
   * Caminho da foto. Para usar sua foto: coloque o arquivo em
   * `public/images/henrique.jpg` e passe src="/images/henrique.jpg".
   * Sem src, exibe um placeholder elegante com o monograma.
   */
  src?: string;
}

export function ProfilePhoto({ className, src }: ProfilePhotoProps) {
  const initials = siteConfig.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <div className={cn("relative aspect-square w-full", className)}>
      {/* Halo de gradiente */}
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-400/20 via-accent/10 to-accent-soft/20 blur-2xl" />

      <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-muted to-card">
        {src ? (
          <Image
            src={src}
            alt={`Foto de ${siteConfig.name}`}
            fill
            priority
            sizes="(max-width: 768px) 80vw, 400px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            {/* Padrão de grade sutil */}
            <div className="absolute inset-0 bg-grid-faint bg-[length:24px_24px] opacity-[0.15]" />
            {/* Monograma */}
            <span className="font-display text-7xl font-semibold text-gradient sm:text-8xl">
              {initials}
            </span>
            {/* Nota discreta de placeholder */}
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-border bg-background/60 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">
              sua foto aqui
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
