import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/ui/ArticleCard";
import type { ArticleItem } from "@/types";

interface CategorySectionProps {
  title: string;
  tagline: string;
  articles: ArticleItem[];
  ctaText: string;
  onCtaClick?: () => void;
  maxWidth?: number;
  variant?: "3-col" | "2-col";
}

/**
 * CategorySection - Reusable section for displaying articles by category
 * Supports two layout variants:
 * - 3-col: Shows 3 articles in 3 columns (compact)
 * - 2-col: Shows 4 articles in 2 columns (larger cards)
 */
export function CategorySection({
  title,
  tagline,
  articles,
  ctaText,
  onCtaClick,
  maxWidth = 1112,
  variant = "3-col",
}: CategorySectionProps) {
  if (articles.length === 0) return null;

  const is3Col = variant === "3-col";
  const articleCount = is3Col ? 3 : 4;
  const gridCols = is3Col ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <div className="border-b border-border">
      <div className="mx-auto" style={{ maxWidth: `${maxWidth}px` }}>
        {/* Header */}
        <div className="px-4 md:px-8 py-8 md:py-12 border-b border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">{title}</h2>
            <p className="text-xs md:text-sm text-muted-foreground/70">{tagline}</p>
          </div>
          <Button variant="outline" onClick={onCtaClick} className="hidden sm:inline-flex min-h-[44px]">
            {ctaText}
          </Button>
        </div>

        {/* Articles Grid - Responsive Layout */}
        <div className={`grid grid-cols-1 ${gridCols}`}>
          {articles.slice(0, articleCount).map((article, index) => (
            <ArticleCard
              key={article.id}
              {...article}
              className={
                is3Col
                  ? index < 2 ? "md:border-r border-border" : ""
                  : index % 2 === 0 ? "md:border-r border-border" : ""
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
