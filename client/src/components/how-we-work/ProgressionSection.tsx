import { Section } from "@/components/layout/Section";

interface Subsection {
  title: string;
  content: string;
}

interface ProgressionSectionProps {
  number: string;
  title: string;
  intro: string;
  subsections: Subsection[];
  maxWidth?: number;
}

/**
 * ProgressionSection - Ongoing value delivery with subsections
 */
export function ProgressionSection({
  number,
  title,
  intro,
  subsections,
  maxWidth = 1112,
}: ProgressionSectionProps) {
  return (
    <Section number={number}>
      <div className="mx-auto px-4 md:px-10 py-12 md:py-20" style={{ maxWidth: `${maxWidth}px` }}>
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12">
          {number}: {title}
        </h2>

        {/* Introduction */}
        <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed max-w-4xl mb-12 md:mb-16">
          {intro}
        </p>

        {/* Subsections */}
        <div className="max-w-4xl space-y-8 md:space-y-12">
          {subsections.map((subsection, idx) => (
            <div key={idx}>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-foreground">
                {subsection.title}
              </h3>
              <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed">
                {subsection.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
