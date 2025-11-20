import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import UnicornAnimation from "@/components/UnicornAnimation";

interface WhatWeDoSectionProps {
  label: string;
  headline: string;
  description: string;
  quote: string;
  ctaText?: string;
  onCtaClick?: () => void;
  animationPath?: string;
  maxWidth?: number;
}

/**
 * WhatWeDoSection - "What We Do" section with two-column layout
 *
 * Features:
 * - Left column: Minimal label, headline, description, highlighted quote, and CTA button
 * - Right column: Animated background (Unicorn Studio)
 * - 2-column grid with right border separator
 * - Clean, minimal typography with subtle purple accent
 *
 * @param label - Small uppercase label (e.g., "WHAT WE DO")
 * @param headline - Main headline text (supports \n for line breaks)
 * @param description - Supporting description text
 * @param quote - Highlighted text shown below description in purple
 * @param ctaText - Optional CTA button text
 * @param onCtaClick - Optional CTA button click handler
 * @param animationPath - Path to Unicorn Studio animation JSON
 * @param maxWidth - Maximum width in pixels (default: 1112)
 */
export function WhatWeDoSection({
  label,
  headline,
  description,
  quote,
  ctaText,
  onCtaClick,
  animationPath,
  maxWidth = 1112,
}: WhatWeDoSectionProps) {
  // Convert \n in headline to <br> tags
  const headlineParts = headline.split("\n");

  return (
    <Section number="03" className="overflow-hidden">
      <div className="mx-auto" style={{ maxWidth: `${maxWidth}px` }}>
        <div className="grid md:grid-cols-2">
          {/* Left Column - Content with its own padding */}
          <div className="px-6 md:px-10 py-12 md:py-20 md:border-r border-b md:border-b-0 border-border relative z-10 flex flex-col justify-center">
            <div
              className="text-[10px] md:text-xs text-primary font-medium mb-6 md:mb-8 uppercase tracking-widest"
              style={{ fontFamily: '"Stack Sans Notch", sans-serif' }}
            >
              {label}
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight text-foreground">
              {headlineParts.map((part, idx) => (
                <span key={`headline-${idx}`}>
                  {part}
                  {idx < headlineParts.length - 1 && <br />}
                </span>
              ))}
            </h2>

            <p className="text-sm md:text-base text-muted-foreground/70 leading-relaxed max-w-md mb-6 md:mb-8">
              {description}
            </p>

            {quote && (
              <p className="text-base md:text-lg font-medium text-primary/90 leading-relaxed max-w-md mb-6 md:mb-8">
                {quote}
              </p>
            )}

            {ctaText && (
              <Button
                variant="outline"
                onClick={onCtaClick}
                className="w-fit text-sm md:text-base"
              >
                {ctaText}
              </Button>
            )}
          </div>

          {/* Right Column - Background Animation */}
          <div className="relative overflow-hidden min-h-[300px] md:min-h-[400px] p-0">
            {animationPath && (
              <div className="absolute inset-0 pointer-events-none">
                <UnicornAnimation
                  jsonFilePath={animationPath}
                  className="w-full h-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
