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
        className="mx-auto px-10 py-20 relative overflow-hidden"
        style={{ maxWidth: `${maxWidth}px` }}
      >
        {/* Background Animation */}
        {animationPath && (
          <div className="absolute inset-0 pointer-events-none z-0">
            <UnicornAnimation jsonFilePath={animationPath} className="w-full h-full" />
          </div>
        )}

        {/* Content - Left-aligned to show animation on right */}
        <div className="max-w-2xl relative z-10">
          {/* Headline */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {title}
            </h2>
          </div>

          {/* Pull Quote */}
          <div className="mb-12">
            <div className="border-l-4 border-primary pl-6 py-2">
              <p className="text-2xl md:text-3xl font-semibold text-foreground leading-tight">
                {pullQuote}
              </p>
            </div>
          </div>

          {/* Content Blocks */}
          <div className="space-y-10 mb-12">
            {blocks.map((block, idx) => (
              <div key={`block-${idx}`}>
                <div
                  className="text-xs uppercase tracking-widest text-primary mb-3 font-medium"
                  style={{ fontFamily: '"Stack Sans Notch", sans-serif' }}
                >
                  {block.label}
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground/85">
                  {block.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          {ctaText && (
            <div>
              <Button variant="outline" onClick={onCtaClick}>
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
