import { GridContainer } from "@/components/layout/GridContainer";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { FilterBar } from "@/components/intelligence/FilterBar";
import { CategorySection } from "@/components/intelligence/CategorySection";
import { NewsletterModal } from "@/components/intelligence/NewsletterModal";
import { useArticleFilter } from "@/hooks/useArticleFilter";
import { useState } from "react";
import {
  MENU_SECTIONS,
  CONTACT_INFO,
  FOOTER_LINKS,
  COMPANY_INFO,
  SOCIAL_LINKS,
  CERTIFICATIONS,
  INTELLIGENCE_PAGE_HERO,
  INTELLIGENCE_PAGE_NEWSLETTER,
  ALL_ARTICLES,
} from "@/constants/content";

export default function Intelligence() {
  const [showNewsletter, setShowNewsletter] = useState(false);

  const {
    filters,
    filteredArticles,
    featuredArticles,
    trendingArticles,
    setCategory,
    setSearchQuery,
    clearFilters,
    hasActiveFilters,
    getArticlesByCategory,
  } = useArticleFilter(ALL_ARTICLES);

  const hasFilters = filters.category !== "all" || filters.searchQuery !== "";

  return (
    <GridContainer>
      <Navigation sections={MENU_SECTIONS} />

      {/* Hero Section - 2 Column Layout */}
      <Section>
        <div className="mx-auto px-10 pt-32 pb-24" style={{ maxWidth: "1112px" }}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Title & Subtitle */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {INTELLIGENCE_PAGE_HERO.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed">
                {INTELLIGENCE_PAGE_HERO.subtitle}
              </p>
            </div>

            {/* Right: Featured Gallery - Top 3 Articles */}
            <div className="space-y-4">
              {featuredArticles.slice(0, 3).map((article) => (
                <a
                  key={article.id}
                  href={article.link}
                  className="group flex gap-4 p-4 border border-border hover:border-primary/50 transition-all hover:bg-primary/5"
                >
                  {/* Article Image */}
                  {article.imageUrl && (
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden bg-muted/20">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Article Info */}
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-muted-foreground/60 mb-2">
                      {article.date}
                    </div>
                    <h3 className="text-base font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Filter Bar (Sticky) */}
      <FilterBar
        activeCategory={filters.category}
        onCategoryChange={setCategory}
        searchQuery={filters.searchQuery}
        onSearchChange={setSearchQuery}
        hasActiveFilters={hasActiveFilters}
        onClearFilters={clearFilters}
        onSubscribeClick={() => setShowNewsletter(true)}
      />

      {/* Filtered Results OR Category Sections */}
      {hasFilters ? (
        <Section>
          <div className="mx-auto px-8 py-12" style={{ maxWidth: "1112px" }}>
            <p className="text-sm text-muted-foreground/70 mb-8">
              Found {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""}
            </p>
            <div className="grid md:grid-cols-3 gap-px bg-border">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} {...article} className="bg-background" />
              ))}
            </div>
            {filteredArticles.length === 0 && (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground/70 mb-4">
                  No articles found matching your criteria.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-primary hover:underline font-medium"
                >
                  Clear filters and show all articles
                </button>
              </div>
            )}
          </div>
        </Section>
      ) : (
        <>
          {/* Trending Section */}
          {trendingArticles.length > 0 && (
            <Section>
              <div className="mx-auto" style={{ maxWidth: "1112px" }}>
                <div className="px-8 py-12 border-b border-border flex items-center justify-between">
                  <h2 className="text-3xl md:text-4xl font-bold">Trending</h2>
                  <span className="text-sm text-muted-foreground/70">Thirsty for more?</span>
                </div>
                <div className="grid md:grid-cols-3">
                  {trendingArticles.slice(0, 3).map((article, index) => (
                    <ArticleCard
                      key={article.id}
                      {...article}
                      className={index < 2 ? "border-r border-border" : ""}
                    />
                  ))}
                </div>
              </div>
            </Section>
          )}

          {/* Category Sections */}
          <CategorySection
            title="Assured Reacts"
            tagline="Assured hot takes"
            articles={getArticlesByCategory("assured-reacts")}
            ctaText="Assured hot takes"
          />

          <CategorySection
            title="Features"
            tagline="Feature library"
            articles={getArticlesByCategory("features")}
            ctaText="Feature library"
          />

          <CategorySection
            title="Weekly Cyber Briefing"
            tagline="What's hitting the news?"
            articles={getArticlesByCategory("weekly-briefing")}
            ctaText="What's hitting the news?"
          />

          <CategorySection
            title="Interviews"
            tagline="More inspiring stories"
            articles={getArticlesByCategory("interviews")}
            ctaText="More inspiring stories"
          />

          <CategorySection
            title="Blogs & Opinions"
            tagline="More expert opinions"
            articles={getArticlesByCategory("blogs-opinions")}
            ctaText="More expert opinions"
          />

          <CategorySection
            title="Podcasts"
            tagline="Listen up; there's more"
            articles={getArticlesByCategory("podcasts")}
            ctaText="Listen up; there's more"
          />
        </>
      )}

      {/* Newsletter Signup CTA */}
      <Section>
        <div className="mx-auto px-8 py-20 text-center" style={{ maxWidth: "800px" }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {INTELLIGENCE_PAGE_NEWSLETTER.title}
          </h2>
          <p className="text-lg text-muted-foreground/80 mb-8">
            {INTELLIGENCE_PAGE_NEWSLETTER.subtitle}
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShowNewsletter(true);
            }}
            className="flex gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 bg-transparent border border-border focus:border-primary focus:outline-none transition-colors"
            />
            <Button type="submit" size="lg">
              {INTELLIGENCE_PAGE_NEWSLETTER.submitText}
            </Button>
          </form>
          <p className="text-xs text-muted-foreground/60 mt-4">
            {INTELLIGENCE_PAGE_NEWSLETTER.privacyNote}
          </p>
        </div>
      </Section>

      <Footer
        contactInfo={CONTACT_INFO}
        links={FOOTER_LINKS}
        companyInfo={COMPANY_INFO}
        socialLinks={SOCIAL_LINKS}
        certifications={CERTIFICATIONS}
      />

      {/* Newsletter Modal */}
      <NewsletterModal
        isOpen={showNewsletter}
        onClose={() => setShowNewsletter(false)}
        title={INTELLIGENCE_PAGE_NEWSLETTER.title}
        subtitle={INTELLIGENCE_PAGE_NEWSLETTER.subtitle}
        privacyNote={INTELLIGENCE_PAGE_NEWSLETTER.privacyNote}
        submitText={INTELLIGENCE_PAGE_NEWSLETTER.submitText}
      />
    </GridContainer>
  );
}
