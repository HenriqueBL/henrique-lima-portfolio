import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

/** Logo minimalista: monograma "HL" em um losango com gradiente de marca. */
export function Logo({ className, showText = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#818cf8" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="9"
          stroke="url(#logo-grad)"
          strokeWidth="1.5"
        />
        <path
          d="M10 9v14M10 16h5.5M15.5 9v14"
          stroke="url(#logo-grad)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19 9v14h4"
          stroke="url(#logo-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showText && (
        <span className="font-display text-base font-semibold tracking-tight">
          Henrique<span className="text-accent">.</span>
        </span>
      )}
    </span>
  );
}
