import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Question {
  question: string;
  answer: string;
}

interface ExpandableQuestionsProps {
  questions: Question[];
}

function QuestionItem({ question, answer }: Question) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 md:py-6 flex items-start justify-between gap-4 group min-h-[44px]"
      >
        <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex-1">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-200 flex-shrink-0 mt-1 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-4 md:pb-6" : "max-h-0"
        }`}
      >
        <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed pr-6 md:pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
}

/**
 * ExpandableQuestions - Collapsible question list for Preparation section
 */
export function ExpandableQuestions({ questions }: ExpandableQuestionsProps) {
  return (
    <div className="space-y-0">
      {questions.map((q, idx) => (
        <QuestionItem key={idx} question={q.question} answer={q.answer} />
      ))}
    </div>
  );
}
