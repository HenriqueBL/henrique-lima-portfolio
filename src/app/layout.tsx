import type { Metadata, Viewport } from "next";
import "./globals.css";
import { inter, spaceGrotesk, jetbrainsMono } from "@/lib/fonts";
import { baseMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Background } from "@/components/layout/background";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-dvh font-sans",
          inter.variable,
          spaceGrotesk.variable,
          jetbrainsMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-foreground"
          >
            Pular para o conteúdo
          </a>
          <Background />
          <Navbar />
          <main id="main" className="relative pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <JsonLd />
      </body>
    </html>
  );
}
