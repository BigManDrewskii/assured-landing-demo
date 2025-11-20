import { Section } from "@/components/layout/Section";

interface IntroSectionProps {
  logoSrc: string;
  logoAlt: string;
  description: string;
  maxWidth?: number;
}

/**
 * IntroSection - Logo icon and tagline section
 *
 * Two-column layout with:
 * - Left column: Logo icon
 * - Right column: Description text
 * - Clean, minimal presentation
 *
 * @param logoSrc - Path to logo icon image (not used, hardcoded to assured-icon-white-new.svg)
 * @param logoAlt - Alt text for logo
 * @param description - Tagline/description text
 * @param maxWidth - Maximum width in pixels (default: 1112)
 */
export function IntroSection({
  logoSrc,
  logoAlt,
  description,
  maxWidth = 1112,
}: IntroSectionProps) {
  return (
    <Section showPatterns="both">
      <div className="mx-auto px-4 md:px-10 py-12 md:py-20" style={{ maxWidth: `${maxWidth}px` }}>
        <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center max-w-4xl mx-auto">
          {/* Left: Logo Icon */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/assured-icon-white-new.svg"
              alt={logoAlt}
              className="h-24 w-24 md:h-32 md:w-32 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            />
          </div>

          {/* Right: Description */}
          <div className="text-center md:text-left">
            <p
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground/90 leading-relaxed tracking-wide transition-colors duration-300 hover:text-primary cursor-default"
              style={{ fontFamily: '"Stack Sans Notch", sans-serif' }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
