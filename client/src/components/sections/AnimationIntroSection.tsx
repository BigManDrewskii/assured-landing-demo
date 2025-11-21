import { Section } from "@/components/layout/Section";
import UnicornAnimation from "@/components/UnicornAnimation";

interface AnimationIntroSectionProps {
  animationPath: string;
  minHeight?: string;
  maxWidth?: number;
}

/**
 * AnimationIntroSection - Full-screen animation display section
 */
export function AnimationIntroSection({
  animationPath,
  minHeight = "min-h-[500px] md:min-h-[700px]",
  maxWidth = 1112,
}: AnimationIntroSectionProps) {
  return (
    <Section>
      <div className="mx-auto" style={{ maxWidth: `${maxWidth}px` }}>
        <div className={`relative ${minHeight}`}>
          <UnicornAnimation
            jsonFilePath={animationPath}
            className="absolute inset-0 w-full h-full opacity-100"
          />
        </div>
      </div>
    </Section>
  );
}
