import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

interface FeatureItem {
  title: string;
  description: string;
}

interface PartnershipSectionProps {
  headline: string;
  description: string;
  features: readonly [FeatureItem, FeatureItem, FeatureItem];
  highlightText: string;
  ctaText?: string;
  onCtaClick?: () => void;
  maxWidth?: number;
}

/**
 * PartnershipSection - Partnership approach with feature highlights
 *
 * Displays:
 * - Headline
 * - Description
 * - Three feature blocks in grid
 * - Highlighted closing statement
 * - CTA button
 *
 * @param headline - Main section headline
 * @param description - Introduction text
 * @param features - Array of three feature items
 * @param highlightText - Highlighted closing text
 * @param ctaText - Optional CTA button text
 * @param onCtaClick - Optional CTA button click handler
 * @param maxWidth - Maximum width in pixels (default: 1112)
 */
export function PartnershipSection({
  headline,
  description,
  features,
  highlightText,
  ctaText,
  onCtaClick,
  maxWidth = 1112,
}: PartnershipSectionProps) {
  return (
    <Section number="04" showPatterns="both">
      <div className="mx-auto" style={{ maxWidth: `${maxWidth}px` }}>
        {/* Header */}
        <div className="text-center px-4 md:px-8 py-12 md:py-16 border-b border-border">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            {headline}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Three Features Grid */}
        <div
          className="grid md:grid-cols-3"
          style={{
            backgroundImage: "url(/squared_metal.png)",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
        >
          {features.map((feature, idx) => (
            <div
              key={`feature-${idx}`}
              className={`p-6 md:p-10 py-12 md:py-16 text-center ${
                idx < features.length - 1 ? "md:border-r border-b md:border-b-0 border-border" : ""
              }`}
            >
              <h3
                className="text-xs md:text-sm uppercase tracking-widest font-medium mb-4 md:mb-6 text-primary"
                style={{ fontFamily: '"Stack Sans Notch", sans-serif' }}
              >
                {feature.title}
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground/85 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight & CTA */}
        <div className="text-center px-4 md:px-8 py-12 md:py-16 border-t border-border">
          <p
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground/90 leading-relaxed tracking-wide max-w-3xl mx-auto mb-8 md:mb-10 transition-colors duration-300 hover:text-primary cursor-default"
            style={{ fontFamily: '"Stack Sans Notch", sans-serif' }}
          >
            {highlightText}
          </p>
          {ctaText && (
            <Button variant="outline" onClick={onCtaClick} className="text-sm md:text-base">
              {ctaText}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
