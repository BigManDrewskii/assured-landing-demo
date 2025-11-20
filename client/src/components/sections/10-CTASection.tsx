import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import UnicornAnimation from "@/components/UnicornAnimation";

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryButton?: {
    text: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    text: string;
    onClick?: () => void;
  };
  animationPath?: string;
  maxWidth?: number;
}

/**
 * CTASection - Call-to-action section with buttons
 *
 * Features:
 * - Centered layout
 * - Title and subtitle
 * - Primary button with purple glow
 * - Optional secondary outline button
 * - Buttons displayed side by side
 *
 * @param title - Main section title
 * @param subtitle - Supporting subtitle text
 * @param primaryButton - Primary CTA button config (text and onClick)
 * @param secondaryButton - Optional secondary CTA button config
 * @param maxWidth - Maximum width in pixels (default: 1112)
 */
export function CTASection({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  animationPath,
  maxWidth = 1112,
}: CTASectionProps) {
  return (
    <Section number="09" className="overflow-hidden">
      <div
        className="container mx-auto px-4 md:px-8 py-16 md:py-24 lg:py-28 relative overflow-hidden"
        style={{ maxWidth: `${maxWidth}px` }}
      >
        {/* CTA Background Animation */}
        {animationPath && (
          <div className="absolute inset-0 pointer-events-none z-0">
            <UnicornAnimation
              jsonFilePath={animationPath}
              className="w-full h-full"
            />
          </div>
        )}
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight">{title}</h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground/80 mb-8 md:mb-12 leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryButton && (
              <Button
                size="lg"
                className="bg-primary text-primary-foreground font-medium px-6 md:px-8 h-11 md:h-12 btn-enhanced shadow-purple-glow text-sm md:text-base"
                onClick={primaryButton.onClick}
              >
                {primaryButton.text}
              </Button>
            )}

            {secondaryButton && (
              <Button
                size="lg"
                variant="outline"
                className="font-medium px-6 md:px-8 h-11 md:h-12 text-sm md:text-base"
                onClick={secondaryButton.onClick}
              >
                {secondaryButton.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
