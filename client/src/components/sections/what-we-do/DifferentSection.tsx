import { Section } from "@/components/layout/Section";

interface DifferentSectionProps {
  title: string;
  content: string[];
  quote: string;
  attribution: string;
  maxWidth?: number;
}

/**
 * DifferentSection - Two-column layout with content and founder quote
 */
export function DifferentSection({
  title,
  content,
  quote,
  attribution,
  maxWidth = 1112,
}: DifferentSectionProps) {
  return (
    <Section number="04" showPatterns="both">
      <div className="mx-auto" style={{ maxWidth: `${maxWidth}px` }}>
        {/* Header */}
        <div className="text-center px-4 md:px-8 py-12 md:py-16 border-b border-border">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-notch font-bold leading-tight">
            {title}
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Body Content */}
          <div className="px-4 md:px-10 py-12 md:py-16 border-b md:border-b-0 md:border-r border-border space-y-4 md:space-y-6">
            {content.map((paragraph, idx) => (
              <p
                key={`para-${idx}`}
                className="text-base md:text-lg text-muted-foreground/80 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right: Founder Quote */}
          <div className="px-4 md:px-10 py-12 md:py-16 flex items-center">
            <div>
              <div className="border-l-4 border-primary pl-4 md:pl-6 py-4">
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground leading-tight mb-4 md:mb-6">
                  "{quote}"
                </blockquote>
                <cite className="text-sm md:text-base text-muted-foreground/70 not-italic">
                  — {attribution}
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
