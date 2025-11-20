import { Section } from "@/components/layout/Section";
import { ExpandableQuestions } from "./ExpandableQuestions";

interface Question {
  question: string;
  answer: string;
}

interface PreparationSectionProps {
  number: string;
  title: string;
  intro: string[];
  questionsTitle: string;
  questions: Question[];
  maxWidth?: number;
}

/**
 * PreparationSection - Incident readiness with expandable Q&A
 */
export function PreparationSection({
  number,
  title,
  intro,
  questionsTitle,
  questions,
  maxWidth = 1112,
}: PreparationSectionProps) {
  return (
    <Section number={number}>
      <div className="mx-auto px-4 md:px-10 py-12 md:py-20" style={{ maxWidth: `${maxWidth}px` }}>
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12">
          {number}: {title}
        </h2>

        {/* Introduction */}
        <div className="max-w-4xl mb-12 md:mb-16 space-y-4 md:space-y-6">
          {intro.map((paragraph, idx) => (
            <p key={idx} className="text-base md:text-lg text-muted-foreground/80 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Questions Title */}
        <h3 className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-foreground">
          {questionsTitle}
        </h3>

        {/* Expandable Questions */}
        <div className="max-w-4xl">
          <ExpandableQuestions questions={questions} />
        </div>
      </div>
    </Section>
  );
}
