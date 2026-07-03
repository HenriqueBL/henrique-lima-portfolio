"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer } from "./variants";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Distância vertical inicial da animação. */
  y?: number;
  as?: "div" | "section" | "li" | "article" | "span";
}

/**
 * Anima o conteúdo com fade-up quando entra na viewport.
 * Usado para revelar seções e cards ao rolar a página.
 */
export function Reveal({ children, className, delay = 0, y = 20, as = "div" }: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
}

/** Container que escalona a entrada dos filhos (use com StaggerItem). */
export function Stagger({ children, className }: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: StaggerProps) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
