import { Section } from "@/components/layout/Section";
import { ProcessCard } from "./ProcessCard";

interface ProcessStep {
  icon: "network" | "eye" | "target";
  title: string;
  description: string;
}

interface PolicySectionProps {
  number: string;
  title: string;
  problem: string;
  context: string;
  processTitle: string;
  steps: ProcessStep[];
  maxWidth?: number;
}

/**
 * PolicySection - Policy curation process with 3-step cards
 */
export function PolicySection({
  number,
  title,
  problem,
  context,
  processTitle,
  steps,
  maxWidth = 1112,
}: PolicySectionProps) {
  return (
    <Section number={number}>
      <div className="mx-auto px-4 md:px-10 py-12 md:py-20" style={{ maxWidth: `${maxWidth}px` }}>
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12">
          {number}: {title}
        </h2>

        {/* Problem & Context */}
        <div className="max-w-4xl mb-12 md:mb-16 space-y-4 md:space-y-6">
          <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed">
            {problem}
          </p>
          <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed">
            {context}
          </p>
        </div>

        {/* Process Title */}
        <h3 className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-foreground">
          {processTitle}
        </h3>

        {/* Three Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-px bg-transparent md:bg-border">
          {steps.map((step, idx) => (
            <ProcessCard
              key={idx}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
