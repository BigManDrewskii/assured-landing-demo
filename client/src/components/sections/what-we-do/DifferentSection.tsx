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
    <Section number="04">
      <div className="mx-auto" style={{ maxWidth: `${maxWidth}px` }}>
        {/* Header */}
        <div className="text-center px-8 py-16 border-b border-border">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2">
          {/* Left: Body Content */}
          <div className="px-10 py-16 border-r border-border space-y-6">
            {content.map((paragraph, idx) => (
              <p
                key={`para-${idx}`}
                className="text-lg text-muted-foreground/80 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right: Founder Quote */}
          <div className="px-10 py-16 flex items-center">
            <div>
              <div className="border-l-4 border-primary pl-6 py-4">
                <blockquote className="text-2xl md:text-3xl font-semibold text-foreground leading-tight mb-6">
                  "{quote}"
                </blockquote>
                <cite className="text-base text-muted-foreground/70 not-italic">
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
