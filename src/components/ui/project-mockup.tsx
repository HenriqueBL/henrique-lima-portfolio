import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectMockupProps {
  project: Pick<Project, "title" | "category" | "accent">;
  className?: string;
}

/**
 * "Screenshot" abstrato e responsivo de um projeto, renderizado em SVG/CSS.
 * Simula a interface de um app (browser chrome + dashboard) usando a cor de
 * destaque do projeto — sem depender de arquivos de imagem externos.
 */
export function ProjectMockup({ project, className }: ProjectMockupProps) {
  const { from, to } = project.accent;
  const gradientId = `grad-${project.title.replace(/\s+/g, "")}`;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/10 bg-[#0b0c10] shadow-2xl",
        className
      )}
    >
      {/* Brilho de fundo com a cor do projeto */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 70% 0%, ${from}33, transparent 70%)`,
        }}
      />

      {/* Browser chrome */}
      <div className="relative flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-3 hidden flex-1 items-center rounded-md bg-white/[0.06] px-3 py-1 text-[10px] text-white/40 sm:flex">
          {project.title.toLowerCase()}.app
        </div>
      </div>

      {/* App body */}
      <div className="relative flex gap-3 p-4">
        {/* Sidebar */}
        <div className="hidden w-1/5 flex-col gap-2 sm:flex">
          <div
            className="mb-2 h-6 w-6 rounded-md"
            style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
          />
          {[0.9, 0.6, 0.7, 0.5].map((w, i) => (
            <div
              key={i}
              className="h-2.5 rounded-full bg-white/[0.08]"
              style={{ width: `${w * 100}%` }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 space-y-3">
          {/* Top row: label + tag */}
          <div className="flex items-center justify-between">
            <div className="h-3 w-24 rounded-full bg-white/15" />
            <div
              className="h-5 w-16 rounded-full"
              style={{ background: `linear-gradient(135deg, ${from}, ${to})`, opacity: 0.85 }}
            />
          </div>

          {/* Stat tiles */}
          <div className="grid grid-cols-3 gap-2">
            {[from, to, from].map((c, i) => (
              <div key={i} className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-2">
                <div className="mb-2 h-1.5 w-8 rounded-full bg-white/20" />
                <div className="h-3 w-10 rounded-full" style={{ backgroundColor: `${c}cc` }} />
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-3">
            <svg viewBox="0 0 300 90" className="h-auto w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={from} stopOpacity="0.55" />
                  <stop offset="100%" stopColor={from} stopOpacity="0" />
                </linearGradient>
                <linearGradient id={`${gradientId}-line`} x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor={from} />
                  <stop offset="100%" stopColor={to} />
                </linearGradient>
              </defs>
              <path
                d="M0,70 C40,60 55,35 90,40 C125,45 140,20 180,25 C215,30 240,12 300,18 L300,90 L0,90 Z"
                fill={`url(#${gradientId})`}
              />
              <path
                d="M0,70 C40,60 55,35 90,40 C125,45 140,20 180,25 C215,30 240,12 300,18"
                fill="none"
                stroke={`url(#${gradientId}-line)`}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            {/* Bars */}
            <div className="mt-3 flex items-end gap-1.5">
              {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.45, 0.65].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h * 28 + 6}px`,
                    background: `linear-gradient(to top, ${from}55, ${to})`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* List rows */}
          <div className="space-y-1.5">
            {[0.8, 0.55, 0.65].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: i % 2 === 0 ? from : to }}
                />
                <div className="h-2 rounded-full bg-white/[0.08]" style={{ width: `${w * 100}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
