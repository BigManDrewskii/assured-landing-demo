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
    <Section number="04">
      <div className="mx-auto" style={{ maxWidth: `${maxWidth}px` }}>
        {/* Header */}
        <div className="text-center px-8 py-16 border-b border-border">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {headline}
          </h2>
          <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Three Features Grid */}
        <div className="grid md:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={`feature-${idx}`}
              className={`p-10 py-16 ${
                idx < features.length - 1 ? "border-r border-border" : ""
              }`}
            >
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-base text-muted-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight & CTA */}
        <div className="text-center px-8 py-16 border-t border-border">
          <p className="text-xl font-medium text-primary/90 leading-relaxed max-w-2xl mx-auto mb-8">
            {highlightText}
          </p>
          {ctaText && (
            <Button variant="outline" onClick={onCtaClick}>
              {ctaText}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
