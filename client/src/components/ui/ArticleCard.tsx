import type { ArticleItem } from "@/types";

interface ArticleCardProps extends ArticleItem {
  onClick?: () => void;
  className?: string;
}

/**
 * ArticleCard - Reusable article/blog card component
 *
 * Displays an article preview with:
 * - Optional image placeholder
 * - Publication date
 * - Article title
 * - "Read more" link with arrow
 * - Hover effects (background and title color change)
 *
 * @param date - Publication date string
 * @param title - Article title
 * @param imageUrl - Optional image URL (shows placeholder if not provided)
 * @param link - Article URL
 * @param onClick - Optional click handler
 * @param className - Additional CSS classes
 */
export function ArticleCard({
  date,
  title,
  imageUrl,
  link,
  onClick,
  className = "",
}: ArticleCardProps) {
  return (
    <a
      href={link}
      onClick={onClick}
      className={`bg-card/30 backdrop-blur-sm group hover:bg-card/50 transition-all overflow-hidden block ${className}`}
    >
      {/* Article Image */}
      <div className="aspect-video bg-muted/20 border-b border-border flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-muted-foreground/30 text-sm">[Article Image]</div>
        )}
      </div>

      {/* Article Content */}
      <div className="p-8">
        <div className="text-sm text-muted-foreground/60 mb-4 font-medium">{date}</div>
        <h3 className="text-xl font-bold mb-4 leading-snug group-hover:text-primary transition-colors">
          {title}
        </h3>
        <span className="text-primary hover:underline font-medium inline-flex items-center gap-2">
          Read more <span>→</span>
        </span>
      </div>
    </a>
  );
}
