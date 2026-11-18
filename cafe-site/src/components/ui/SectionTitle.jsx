import Reveal from "./Reveal";
import { cn } from "../../lib/utils";

export default function SectionTitle({ eyebrow, title, light = false, className }) {
  return (
    <Reveal className={cn("mb-10 text-center md:mb-14", className)}>
      {eyebrow && (
        <p className={cn("mb-2 text-sm font-semibold tracking-widest", light ? "text-caramel" : "text-terracotta")}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn("font-serif text-[clamp(2rem,5vw,3.5rem)] leading-tight", light && "text-cream")}>{title}</h2>
    </Reveal>
  );
}
