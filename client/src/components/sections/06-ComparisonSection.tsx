import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import UnicornAnimation from "@/components/UnicornAnimation";

interface ContentBlock {
  label: string;
  text: string;
}

interface ComparisonSectionProps {
  title: string;
  pullQuote: string;
  blocks: ContentBlock[];
  ctaText?: string;
  onCtaClick?: () => void;
  animationPath?: string;
  maxWidth?: number;
}

/**
 * ComparisonSection - Structured specialist positioning section
 *
 * Displays content with hierarchy and rhythm:
 * - Bold headline
 * - Pull quote callout
 * - Labeled content blocks
 * - CTA button
 *
 * @param title - Main section title
 * @param pullQuote - Featured pull quote text
 * @param blocks - Array of labeled content blocks
 * @param ctaText - Optional CTA button text
 * @param onCtaClick - Optional CTA button click handler
 * @param maxWidth - Maximum width in pixels (default: 1112)
 */
export function ComparisonSection({
  title,
  pullQuote,
  blocks,
  ctaText,
  onCtaClick,
  animationPath,
  maxWidth = 1112,
}: ComparisonSectionProps) {
  return (
    <Section number="05" className="overflow-hidden">
      <div
        className="mx-auto px-6 md:px-10 py-16 md:py-20 relative overflow-hidden min-h-[600px] md:min-h-[700px]"
        style={{ maxWidth: `${maxWidth}px` }}
      >
        {/* Comparison Background Animation */}
        {animationPath && (
          <div className="absolute inset-0 -inset-x-6 md:inset-x-0 pointer-events-none z-0 opacity-80">
            <UnicornAnimation jsonFilePath={animationPath} className="w-full h-full" />
          </div>
        )}

        {/* Content - Centered on mobile, left-aligned on desktop */}
        <div className="max-w-2xl relative z-10 mx-auto md:mx-0">
          {/* Headline */}
          <div className="mb-8 md:mb-8 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {title}
            </h2>
          </div>

          {/* Pull Quote */}
          <div className="mb-10 md:mb-12">
            <div className="border-l-4 border-primary pl-6 md:pl-6 py-3 md:py-2">
              <p className="text-lg md:text-2xl lg:text-3xl font-semibold text-foreground leading-tight">
                {pullQuote}
              </p>
            </div>
          </div>

          {/* Content Blocks */}
          <div className="space-y-10 md:space-y-10 mb-10 md:mb-12">
            {blocks.map((block, idx) => (
              <div key={`block-${idx}`}>
                <div
                  className="text-xs md:text-xs uppercase tracking-widest text-primary mb-3 md:mb-3 font-medium"
                  style={{ fontFamily: '"Stack Sans Notch", sans-serif' }}
                >
                  {block.label}
                </div>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground/85">
                  {block.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          {ctaText && (
            <div className="text-center md:text-left">
              <Button variant="outline" onClick={onCtaClick} className="text-sm md:text-base min-h-[44px] px-6">
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
