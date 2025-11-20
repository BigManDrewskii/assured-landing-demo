import { Section } from "@/components/layout/Section";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  items: FAQItem[];
  ctaText?: string;
  ctaLink?: string;
  maxWidth?: number;
}

function FAQItemComponent({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-6 flex items-center justify-between gap-4 group"
      >
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {item.question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-200 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-base text-muted-foreground/80 leading-relaxed pr-8">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

/**
 * FAQSection - Collapsible FAQ section with dropdown answers
 */
export function FAQSection({
  title,
  items,
  ctaText,
  ctaLink,
  maxWidth = 1112,
}: FAQSectionProps) {
  // Split items into two columns
  const midpoint = Math.ceil(items.length / 2);
  const leftColumn = items.slice(0, midpoint);
  const rightColumn = items.slice(midpoint);

  return (
    <Section number="05">
      <div className="mx-auto" style={{ maxWidth: `${maxWidth}px` }}>
        {/* Header */}
        <div className="text-center px-8 py-16 border-b border-border">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h2>
        </div>

        {/* FAQ Grid - 2 columns on desktop */}
        <div className="grid md:grid-cols-2">
          {/* Left Column */}
          <div className="px-10 py-8 border-r border-border">
            {leftColumn.map((item, idx) => (
              <FAQItemComponent key={`faq-left-${idx}`} item={item} index={idx} />
            ))}
          </div>

          {/* Right Column */}
          <div className="px-10 py-8">
            {rightColumn.map((item, idx) => (
              <FAQItemComponent
                key={`faq-right-${idx}`}
                item={item}
                index={idx + midpoint}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        {ctaText && (
          <div className="text-center px-8 py-12 border-t border-border">
            <a
              href={ctaLink}
              className="text-primary hover:underline font-medium inline-flex items-center gap-2"
            >
              {ctaText} <span>→</span>
            </a>
          </div>
        )}
      </div>
    </Section>
  );
}
