import { Section } from "@/components/layout/Section";
import type { PillarItem } from "@/types";

interface IntroSectionProps {
  logoSrc: string;
  logoAlt: string;
  description: string;
  pillars: [PillarItem, PillarItem, PillarItem];
  maxWidth?: number;
}

/**
 * IntroSection - Combined intro text and three pillars section
 *
 * Features:
 * - Top section: Centered description text
 * - Bottom section: Three-column cards with pillars
 * - Border separator between sections
 * - Edge patterns on both sides
 *
 * @param logoSrc - Path to logo icon image (not used)
 * @param logoAlt - Alt text for logo
 * @param description - Main description text
 * @param pillars - Array of exactly 3 pillar items to display
 * @param maxWidth - Maximum width in pixels (default: 1112)
 */
export function IntroSection({
  logoSrc,
  logoAlt,
  description,
  pillars,
  maxWidth = 1112,
}: IntroSectionProps) {
  return (
    <Section showPatterns="both">
      <div className="mx-auto" style={{ maxWidth: `${maxWidth}px` }}>
        {/* Top: Description Text */}
        <div className="px-4 md:px-10 py-12 md:py-20 border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground/90 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Bottom: Three Pillars Grid */}
        <div
          className="relative overflow-hidden"
          style={{
            backgroundImage: "url(/squared_metal.png)",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
        >
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
      </div>
    </Section>
  );
}
