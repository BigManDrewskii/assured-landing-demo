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
        <div className="px-8 py-12 border-b border-border flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
            <p className="text-sm text-muted-foreground/70">{tagline}</p>
          </div>
          <Button variant="outline" onClick={onCtaClick}>
            {ctaText}
          </Button>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3">
          {articles.slice(0, 3).map((article, index) => (
            <ArticleCard
              key={article.id}
              {...article}
              className={index < 2 ? "border-r border-border" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
