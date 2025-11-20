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
}

/**
 * CategorySection - Reusable section for displaying articles by category
 */
export function CategorySection({
  title,
  tagline,
  articles,
  ctaText,
  onCtaClick,
  maxWidth = 1112,
}: CategorySectionProps) {
  if (articles.length === 0) return null;

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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {articles.slice(0, 3).map((article, index) => (
            <ArticleCard
              key={article.id}
              {...article}
              className={index < 2 ? "md:border-r border-border" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
