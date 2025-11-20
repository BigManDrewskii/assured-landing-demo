import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { useState } from "react";
import type { ArticleCategory } from "@/hooks/useArticleFilter";

interface FilterBarProps {
  activeCategory: ArticleCategory;
  onCategoryChange: (category: ArticleCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  hasActiveFilters: boolean;
  onClearFilters: () => void;
  onSubscribeClick?: () => void;
}

const CATEGORIES: { value: ArticleCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "features", label: "Features" },
  { value: "assured-reacts", label: "Assured Reacts" },
  { value: "weekly-briefing", label: "Weekly Briefing" },
  { value: "interviews", label: "Interviews" },
  { value: "blogs-opinions", label: "Blogs & Opinions" },
  { value: "podcasts", label: "Podcasts" },
];

/**
 * FilterBar - Sticky filter and search bar for Intelligence page
 */
export function FilterBar({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  hasActiveFilters,
  onClearFilters,
  onSubscribeClick,
}: FilterBarProps) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="sticky top-24 z-40 bg-background/95 backdrop-blur-sm border-y border-border">
      <div className="max-w-[1112px] mx-auto px-8 py-4">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onCategoryChange(cat.value)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-150 ${
                activeCategory === cat.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent border border-border hover:border-primary/50 hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Actions Bar */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="flex-1">
            {showSearch ? (
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 bg-transparent border border-border focus:border-primary focus:outline-none transition-colors"
                  autoFocus
                />
                <button
                  onClick={() => {
                    setShowSearch(false);
                    onSearchChange("");
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Button
                variant="outline"
                onClick={() => setShowSearch(true)}
                className="w-full justify-start"
              >
                <Search className="w-4 h-4 mr-2" />
                Search articles...
              </Button>
            )}
          </div>

          {/* Subscribe Button */}
          <Button variant="default" onClick={onSubscribeClick}>
            Subscribe
          </Button>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <Button variant="ghost" onClick={onClearFilters} size="sm">
              Clear filters
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
