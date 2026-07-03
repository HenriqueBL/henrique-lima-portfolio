import { Hero } from "@/components/sections/hero";
import { TechBand } from "@/components/sections/tech-band";
import { AboutPreview } from "@/components/sections/about-preview";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { AIWorkflow } from "@/components/sections/ai-workflow";
import { SkillsPreview } from "@/components/sections/skills-preview";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechBand />
      <AboutPreview />
      <FeaturedProjects />
      <AIWorkflow />
      <SkillsPreview />
      <ContactCTA />
    </>
  );
}
