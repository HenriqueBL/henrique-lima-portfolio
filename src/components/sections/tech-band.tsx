import { techMarquee } from "@/data/skills";
import { Marquee } from "@/components/ui/marquee";

export function TechBand() {
  return (
    <div className="border-y border-border py-8">
      <Marquee items={techMarquee} />
    </div>
  );
}
