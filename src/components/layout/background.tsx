/** Fundo ambiente: grade sutil + auroras suaves. Puramente decorativo. */
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Grade */}
      <div className="absolute inset-0 bg-grid-faint bg-[length:56px_56px] opacity-[0.35] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000,transparent_75%)]" />
      {/* Aurora superior */}
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] animate-aurora" />
      {/* Aurora lateral */}
      <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-accent-soft/15 blur-[120px] animate-aurora [animation-delay:-6s]" />
    </div>
  );
}
