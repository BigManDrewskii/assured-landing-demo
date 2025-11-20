import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/Section";
import UnicornAnimation from "@/components/UnicornAnimation";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  onCtaClick?: () => void;
  animationPath?: string;
  maxWidth?: number;
}

/**
 * HeroSection - Main hero/landing section with headline and CTA
 *
 * The primary landing section featuring:
 * - Large headline text
 * - Subheadline
 * - Primary CTA button with purple glow
 * - Animated background (Unicorn Studio)
 *
 * @param headline - Main headline text (supports \n for line breaks)
 * @param subheadline - Secondary headline below main headline
 * @param ctaText - Text for the primary CTA button
 * @param onCtaClick - Click handler for CTA button
 * @param animationPath - Path to Unicorn Studio animation JSON
 * @param maxWidth - Maximum width in pixels (default: 1112)
 */
export function HeroSection({
  headline,
  subheadline,
  ctaText,
  onCtaClick,
  animationPath,
  maxWidth = 1112,
}: HeroSectionProps) {
  // Convert \n in headline to <br> tags
  const headlineParts = headline.split("\n");

  return (
    <Section number="01" className="overflow-hidden bg-background">
      <div
        className="mx-auto px-4 md:px-8 pt-40 pb-16 md:pt-52 md:pb-32 relative overflow-hidden"
        style={{ maxWidth: `${maxWidth}px` }}
      >
        {/* Hero Background Animation */}
        {animationPath && (
          <div className="absolute inset-0 pointer-events-none z-0">
            <UnicornAnimation
              jsonFilePath={animationPath}
              className="w-full h-full"
            />
          </div>
        )}

        {/* Content */}
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.05] text-foreground">
            {headlineParts.map((part, idx) => (
              <span key={`headline-${idx}`}>
                {part}
                {idx < headlineParts.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className="text-lg md:text-2xl lg:text-3xl text-foreground/95 mb-8 md:mb-12 max-w-3xl mx-auto font-normal leading-relaxed">
            {subheadline}
          </p>

          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground font-medium px-6 md:px-8 h-11 md:h-12 btn-enhanced shadow-purple-glow text-sm md:text-base"
              onClick={onCtaClick}
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
