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
    <Section id="intelligence" number="07" className="overflow-hidden">
      <div className="container mx-auto relative overflow-hidden" style={{ maxWidth: `${maxWidth}px` }}>
        {/* Background Animation */}
        {animationPath && (
          <div className="absolute inset-0 pointer-events-none z-0">
            <UnicornAnimation jsonFilePath={animationPath} className="w-full h-full" />
          </div>
        )}

        <div className="relative z-10">
        {/* Header */}
        <div className="text-center p-8 py-16 border-b border-border">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">{title}</h2>
          <p className="text-xl text-muted-foreground/80 leading-relaxed">{subtitle}</p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.id}
              {...article}
              className={index < articles.length - 1 ? "border-r border-border" : ""}
            />
          ))}
        </div>

        {/* CTA */}
        {ctaText && (
          <div className="text-center p-8 py-12 border-t border-border">
            <Button
              variant="outline"
              size="lg"
              className="font-medium px-8"
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
