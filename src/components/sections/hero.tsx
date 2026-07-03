"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Sparkles } from "lucide-react";
import { siteConfig, quickStats } from "@/data/config";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { ProfilePhoto } from "@/components/ui/profile-photo";
import { SocialLinks } from "@/components/ui/social-links";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const floatingChips = ["Java", "TypeScript", "React", "Claude Code"];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-radial-fade" />
      <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:py-28">
        {/* Coluna de texto */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Disponível para estágio
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-[4.25rem]"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-display text-xl font-medium text-muted-foreground sm:text-2xl"
          >
            {siteConfig.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-3 inline-flex flex-wrap items-center gap-2 font-mono text-sm text-accent"
          >
            <Sparkles className="h-4 w-4" />
            {siteConfig.headline} • {siteConfig.subtitle}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-balance sm:text-lg"
          >
            {siteConfig.shortBio}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="/resume" size="lg">
              <Download className="h-4 w-4" />
              Download CV
            </ButtonLink>
            <ButtonLink href={siteConfig.socials.github} variant="outline" size="lg" external>
              <Github className="h-4 w-4" />
              GitHub
            </ButtonLink>
            <ButtonLink href={siteConfig.socials.linkedin} variant="ghost" size="lg" external>
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </ButtonLink>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-4">
            <SocialLinks />
          </motion.div>

          {/* Stats */}
          <motion.dl
            variants={item}
            className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-4"
          >
            {quickStats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs text-muted-foreground">{stat.label}</dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-gradient">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Coluna da foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <ProfilePhoto src="/images/henrique.jpg" />

          {/* Chips flutuantes */}
          {floatingChips.map((chip, i) => {
            const positions = [
              "-left-4 top-8",
              "-right-3 top-1/3",
              "-left-6 bottom-1/3",
              "-right-5 bottom-10",
            ];
            return (
              <motion.span
                key={chip}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.5 }}
                className={`absolute ${positions[i]} hidden rounded-full border border-white/10 bg-card/80 px-3 py-1.5 font-mono text-xs text-foreground shadow-card backdrop-blur-md sm:block`}
              >
                {chip}
              </motion.span>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
