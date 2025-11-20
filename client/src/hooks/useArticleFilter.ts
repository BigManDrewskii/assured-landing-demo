/**
 * Article filtering hook for Intelligence page
 * Provides client-side filtering by category, tags, and search query
 */

import { useMemo, useState } from "react";
import type { ArticleItem } from "@/types";

export type ArticleCategory = "features" | "assured-reacts" | "weekly-briefing" | "interviews" | "blogs-opinions" | "podcasts" | "all";

interface FilterState {
  category: ArticleCategory;
  searchQuery: string;
  selectedTags: string[];
}

export function useArticleFilter(allArticles: ArticleItem[]) {
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    searchQuery: "",
    selectedTags: [],
  });

  // Filter articles based on current filter state
  const filteredArticles = useMemo(() => {
    return allArticles.filter((article) => {
      // Category filter
      if (filters.category !== "all" && article.category !== filters.category) {
        return false;
      }

      // Search query filter (searches title and excerpt)
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesTitle = article.title.toLowerCase().includes(query);
        const matchesExcerpt = article.excerpt?.toLowerCase().includes(query);
        if (!matchesTitle && !matchesExcerpt) {
          return false;
        }
      }

      // Tags filter (article must have at least one selected tag)
      if (filters.selectedTags.length > 0) {
        const articleTags = article.tags || [];
        const hasMatchingTag = filters.selectedTags.some((tag) =>
          articleTags.includes(tag)
        );
        if (!hasMatchingTag) {
          return false;
        }
      }

      return true;
    });
  }, [allArticles, filters]);

  // Get articles by specific category
  const getArticlesByCategory = (category: ArticleCategory) => {
    if (category === "all") return allArticles;
    return allArticles.filter((article) => article.category === category);
  };

  // Get featured articles
  const featuredArticles = allArticles.filter((article) => article.featured);

  // Get trending articles
  const trendingArticles = allArticles.filter((article) => article.trending);

  // Get all unique tags from articles
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    allArticles.forEach((article) => {
      article.tags?.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [allArticles]);

  // Filter actions
  const setCategory = (category: ArticleCategory) => {
    setFilters((prev) => ({ ...prev, category }));
  };

  const setSearchQuery = (query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  };

  const toggleTag = (tag: string) => {
    setFilters((prev) => ({
      ...prev,
      selectedTags: prev.selectedTags.includes(tag)
        ? prev.selectedTags.filter((t) => t !== tag)
        : [...prev.selectedTags, tag],
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: "all",
      searchQuery: "",
      selectedTags: [],
    });
  };

  const hasActiveFilters =
    filters.category !== "all" ||
    filters.searchQuery !== "" ||
    filters.selectedTags.length > 0;

  return {
    filters,
    filteredArticles,
    featuredArticles,
    trendingArticles,
    allTags,
    setCategory,
    setSearchQuery,
    toggleTag,
    clearFilters,
    hasActiveFilters,
    getArticlesByCategory,
  };
}
