import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

interface ChallengeSectionProps {
  title: string;
  content: string[];
  ctaText?: string;
  onCtaClick?: () => void;
  maxWidth?: number;
}

/**
 * ChallengeSection - Centered, stacked layout with title and body content
 */
export function ChallengeSection({
  title,
  content,
  ctaText,
  onCtaClick,
  maxWidth = 1112,
}: ChallengeSectionProps) {
  return (
    <Section number="03" showPatterns="both">
      <div className="mx-auto" style={{ maxWidth: `${maxWidth}px` }}>
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 md:px-10 py-12 md:py-20">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center mb-8 md:mb-12">
            {title}
          </h2>

          {/* Body Content */}
          <div className="w-full max-w-3xl mx-auto space-y-4 md:space-y-6">
            {content.map((paragraph, idx) => (
              <p
                key={`para-${idx}`}
                className={`text-base md:text-lg leading-relaxed text-center ${
                  idx === content.length - 1
                    ? "text-muted-foreground/90 italic mt-6 md:mt-8"
                    : "text-muted-foreground/80"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA Button */}
          {ctaText && (
            <div className="mt-8 md:mt-12">
              <Button variant="outline" onClick={onCtaClick} className="min-h-[44px]">
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
