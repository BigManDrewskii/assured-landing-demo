import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/ui/ArticleCard";
import UnicornAnimation from "@/components/UnicornAnimation";
import type { ArticleItem } from "@/types";

interface IntelligenceSectionProps {
  title: string;
  subtitle: string;
  articles: ArticleItem[];
  ctaText?: string;
  onViewMore?: () => void;
  animationPath?: string;
  maxWidth?: number;
}

/**
 * IntelligenceSection - Articles/blog grid section
 *
 * Features:
 * - Header with title and subtitle
 * - 3-column grid of article cards
 * - Each article shows image, date, title, and link
 * - Optional CTA button to view more articles
 * - Right borders on first two columns
 *
 * @param title - Main section title
 * @param subtitle - Supporting subtitle text
 * @param articles - Array of articles to display
 * @param ctaText - Optional CTA button text (default: "View more articles")
 * @param onViewMore - Optional click handler for CTA button
 * @param maxWidth - Maximum width in pixels (default: 1112)
 */
export function IntelligenceSection({
  title,
  subtitle,
  articles,
  ctaText = "View more articles",
  onViewMore,
  animationPath,
  maxWidth = 1112,
}: IntelligenceSectionProps) {
  return (
    <Section id="intelligence" number="07" className="overflow-hidden" showPatterns="both">
      <div className="container mx-auto relative overflow-hidden" style={{ maxWidth: `${maxWidth}px` }}>
        {/* Intelligence Section Background Animation */}
        {animationPath && (
          <div className="absolute inset-0 pointer-events-none z-0">
            <UnicornAnimation jsonFilePath={animationPath} className="w-full h-full" />
          </div>
        )}

        <div className="relative z-10">
        {/* Header */}
        <div className="text-center p-4 md:p-8 py-12 md:py-16 border-b border-border">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight">{title}</h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground/80 leading-relaxed">{subtitle}</p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.id}
              {...article}
              className={index < articles.length - 1 ? "md:border-r border-b md:border-b-0 border-border" : ""}
            />
          ))}
        </div>

        {/* CTA */}
        {ctaText && (
          <div className="text-center p-4 md:p-8 py-10 md:py-12 border-t border-border">
            <Button
              variant="outline"
              size="lg"
              className="font-medium px-6 md:px-8 text-sm md:text-base"
              onClick={onViewMore}
            >
              {ctaText}
            </Button>
          </div>
        )}
        </div>
      </div>
    </Section>
  );
}
