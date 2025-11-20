import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Intelligence Hub | Cyber Security Insights & Analysis | Assured</title>
        <meta name="description" content="Expert insights on cyber threats, industry trends, and risk management. Features, weekly briefings, interviews, and expert opinions from cyber insurance specialists." />
        <link rel="canonical" href="https://assured.co.uk/intelligence" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Assured" />
        <meta property="og:title" content="Intelligence Hub | Cyber Security Insights | Assured" />
        <meta property="og:description" content="Expert insights on cyber threats, industry trends, and risk management from cyber insurance specialists." />
        <meta property="og:image" content="/assured-og.png" />
        <meta property="og:locale" content="en_GB" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Intelligence Hub | Cyber Security Insights | Assured" />
        <meta name="twitter:description" content="Expert insights on cyber threats, industry trends, and risk management from cyber insurance specialists." />
        <meta name="twitter:image" content="/assured-og.png" />
      </Helmet>

      <Navigation sections={MENU_SECTIONS} />

      {/* Hero Section - 2 Column Layout */}
      <Section>
        <div className="mx-auto px-4 md:px-10 pt-40 pb-16 md:pt-52 md:pb-24" style={{ maxWidth: "1112px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Title & Subtitle */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                {INTELLIGENCE_PAGE_HERO.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground/80 leading-relaxed">
                {INTELLIGENCE_PAGE_HERO.subtitle}
              </p>
            </div>

            {/* Right: Featured Articles - Elegant Layout */}
            <div className="space-y-6">
              {/* Primary Featured Article - Large Hero Treatment */}
              {featuredArticles[0] && (
                <a
                  href={featuredArticles[0].link}
                  className="group block border border-border hover:border-primary/50 transition-all overflow-hidden"
                >
                  {/* Featured Image */}
                  <div className="aspect-video overflow-hidden bg-muted/20 border-b border-border">
                    <img
                      src={featuredArticles[0].imageUrl}
                      alt={featuredArticles[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Featured Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-notch text-xs uppercase tracking-wider text-primary">
                        Featured
                      </span>
                      <span className="text-sm text-muted-foreground/60">
                        {featuredArticles[0].date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {featuredArticles[0].title}
                    </h3>
                  </div>
                </a>
              )}

              {/* Secondary Featured Articles - Smaller Cards */}
              <div className="grid grid-cols-2 gap-4">
                {featuredArticles.slice(1, 3).map((article) => (
                  <a
                    key={article.id}
                    href={article.link}
                    className="group block border border-border hover:border-primary/50 transition-all overflow-hidden"
                  >
                    {/* Article Image */}
                    <div className="aspect-video overflow-hidden bg-muted/20 border-b border-border">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Article Content */}
                    <div className="p-4">
                      <div className="text-xs text-muted-foreground/60 mb-2">
                        {article.date}
                      </div>
                      <h4 className="text-sm font-semibold line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                        {article.title}
                      </h4>
                    </div>
                  </a>
                ))}
              </div>
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
          <div className="mx-auto px-4 md:px-8 py-8 md:py-12" style={{ maxWidth: "1112px" }}>
            <p className="text-sm text-muted-foreground/70 mb-6 md:mb-8">
              Found {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} {...article} className="bg-background" />
              ))}
            </div>
            {filteredArticles.length === 0 && (
              <div className="text-center py-12 md:py-20">
                <p className="text-base md:text-lg text-muted-foreground/70 mb-4">
                  No articles found matching your criteria.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-primary hover:underline font-medium min-h-[44px] inline-flex items-center"
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
                <div className="px-4 md:px-8 py-8 md:py-12 border-b border-border flex items-center justify-between">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Trending</h2>
                  <span className="text-xs md:text-sm text-muted-foreground/70 hidden sm:inline">Thirsty for more?</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {trendingArticles.slice(0, 3).map((article, index) => (
                    <ArticleCard
                      key={article.id}
                      {...article}
                      className={index < 2 ? "md:border-r border-border" : ""}
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
        <div className="mx-auto px-4 md:px-8 py-12 md:py-20 text-center" style={{ maxWidth: "800px" }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            {INTELLIGENCE_PAGE_NEWSLETTER.title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground/80 mb-6 md:mb-8">
            {INTELLIGENCE_PAGE_NEWSLETTER.subtitle}
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShowNewsletter(true);
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 bg-transparent border border-border focus:border-primary focus:outline-none transition-colors min-h-[44px]"
            />
            <Button type="submit" size="lg" className="w-full sm:w-auto min-h-[44px]">
              {INTELLIGENCE_PAGE_NEWSLETTER.submitText}
            </Button>
          </form>
          <p className="text-xs text-muted-foreground/60 mt-3 md:mt-4">
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
