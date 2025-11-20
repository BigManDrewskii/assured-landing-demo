import { Section } from "@/components/layout/Section";
import UnicornAnimation from "@/components/UnicornAnimation";
import type { PillarItem } from "@/types";

interface ThreePillarsProps {
  pillars: [PillarItem, PillarItem, PillarItem];
  animationPath?: string;
  maxWidth?: number;
}

/**
 * ThreePillars - Three-column services/pillars section
 *
 * Displays three key service pillars in a grid layout with:
 * - Equal-width columns with right borders
 * - Background pattern SVGs at low opacity
 * - Centered titles and descriptions
 * - Sharp edges following design system
 *
 * @param pillars - Array of exactly 3 pillar items to display
 * @param maxWidth - Maximum width in pixels (default: 1112)
 */
export function ThreePillars({ pillars, animationPath, maxWidth = 1112 }: ThreePillarsProps) {
  return (
    <Section number="02" className="overflow-hidden">
      <div
        className="mx-auto relative overflow-hidden"
        style={{
          maxWidth: `${maxWidth}px`,
          backgroundImage: "url(/squared_metal.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        {/* Content */}
        <div className="grid md:grid-cols-3 relative z-10">
          {pillars.map((pillar, idx) => (
            <div
              key={`pillar-${idx}`}
              className={`text-center p-6 md:p-8 py-12 md:py-16 ${
                idx < pillars.length - 1 ? "md:border-r border-b md:border-b-0 border-border" : ""
              }`}
            >
              <h3
                className="text-xs md:text-sm uppercase tracking-widest font-medium mb-4 md:mb-6 text-primary"
                style={{ fontFamily: '"Stack Sans Notch", sans-serif' }}
              >
                {pillar.title}
              </h3>
              <p className="text-muted-foreground/85 leading-relaxed text-lg md:text-xl">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
