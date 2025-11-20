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
 * ChallengeSection - Two-column layout with title and body content
 */
export function ChallengeSection({
  title,
  content,
  ctaText,
  onCtaClick,
  maxWidth = 1112,
}: ChallengeSectionProps) {
  return (
    <Section number="02">
      <div className="mx-auto" style={{ maxWidth: `${maxWidth}px` }}>
        <div className="grid md:grid-cols-[40%_1fr] gap-8 md:gap-12 px-4 md:px-10 py-12 md:py-20">
          {/* Left: Section Title */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              {title}
            </h2>
          </div>

          {/* Right: Body Content */}
          <div className="space-y-4 md:space-y-6">
            {content.map((paragraph, idx) => (
              <p
                key={`para-${idx}`}
                className={`text-base md:text-lg leading-relaxed ${
                  idx === content.length - 1
                    ? "text-muted-foreground/90 italic border-l-2 border-primary/50 pl-4 md:pl-6"
                    : "text-muted-foreground/80"
                }`}
              >
                {paragraph}
              </p>
            ))}

            {ctaText && (
              <div className="pt-4 md:pt-6">
                <Button variant="outline" onClick={onCtaClick} className="min-h-[44px]">
                  {ctaText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
