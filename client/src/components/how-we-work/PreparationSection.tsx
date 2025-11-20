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
      <div className="mx-auto px-10 py-20" style={{ maxWidth: `${maxWidth}px` }}>
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          {number}: {title}
        </h2>

        {/* Introduction */}
        <div className="max-w-4xl mb-16 space-y-6">
          {intro.map((paragraph, idx) => (
            <p key={idx} className="text-lg text-muted-foreground/80 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Questions Title */}
        <h3 className="text-xl font-semibold mb-8 text-foreground">
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
