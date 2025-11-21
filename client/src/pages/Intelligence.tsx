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
import { useState, useEffect } from "react";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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

  // Auto-rotate carousel through featured articles
  useEffect(() => {
    if (isHovered || featuredArticles.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.min(3, featuredArticles.length));
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [isHovered, featuredArticles.length]);

  const currentFeatured = featuredArticles[currentSlide];

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

      {/* Hero Section - Carousel with Standard Container Treatment */}
      <Section className="overflow-hidden bg-background">
        <div
          className="mx-auto px-4 md:px-8 pt-40 pb-16 md:pt-52 md:pb-32 relative overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center"
          style={{ maxWidth: "1112px" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background Images - Cycling (Contained within 1112px container) */}
          {featuredArticles.slice(0, 3).map((article, index) => (
            <div
              key={article.id}
              className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none z-0 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Content - Featured Article as Hero */}
          <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
            {currentFeatured && (
              <>
                {/* Featured Badge & Date */}
                <div className="flex items-center justify-center gap-4 mb-8 md:mb-10">
                  <span className="font-notch text-xs md:text-sm uppercase tracking-wider text-primary">
                    Featured Article
                  </span>
                  <span className="text-sm md:text-base text-white/70">
                    {currentFeatured.date}
                  </span>
                </div>

                {/* Featured Article Title - THE HERO */}
                <a href={currentFeatured.link} className="group block">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 md:mb-10 leading-[1.1] group-hover:text-primary transition-colors">
                    {currentFeatured.title}
                  </h1>

                  {/* Excerpt */}
                  {currentFeatured.excerpt && (
                    <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-10 md:mb-12 max-w-4xl mx-auto">
                      {currentFeatured.excerpt}
                    </p>
                  )}

                  {/* CTA */}
                  <span className="inline-flex items-center gap-2 text-base md:text-lg text-primary hover:underline font-medium">
                    Read Full Article →
                  </span>
                </a>

                {/* Navigation Dots */}
                <div className="flex items-center justify-center gap-3 mt-16 md:mt-20">
                  {featuredArticles.slice(0, 3).map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-primary w-8"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
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
          {/* Category Sections - Alternating Layouts and Patterns */}

          {/* Assured Reacts - 3 Column */}
          <Section showPatterns="both">
            <CategorySection
              title="Assured Reacts"
              tagline="Assured hot takes"
              articles={getArticlesByCategory("assured-reacts")}
              ctaText="Assured hot takes"
              variant="3-col"
            />
          </Section>

          {/* Features - 2 Column Larger Cards */}
          <Section>
            <CategorySection
              title="Features"
              tagline="Feature library"
              articles={getArticlesByCategory("features")}
              ctaText="Feature library"
              variant="2-col"
            />
          </Section>

          {/* Weekly Cyber Briefing - 3 Column */}
          <Section showPatterns="both">
            <CategorySection
              title="Weekly Cyber Briefing"
              tagline="What's hitting the news?"
              articles={getArticlesByCategory("weekly-briefing")}
              ctaText="What's hitting the news?"
              variant="3-col"
            />
          </Section>

          {/* Interviews - 2 Column Larger Cards */}
          <Section>
            <CategorySection
              title="Interviews"
              tagline="More inspiring stories"
              articles={getArticlesByCategory("interviews")}
              ctaText="More inspiring stories"
              variant="2-col"
            />
          </Section>

          {/* Blogs & Opinions - 3 Column */}
          <Section showPatterns="both">
            <CategorySection
              title="Blogs & Opinions"
              tagline="More expert opinions"
              articles={getArticlesByCategory("blogs-opinions")}
              ctaText="More expert opinions"
              variant="3-col"
            />
          </Section>

          {/* Podcasts - 2 Column Larger Cards */}
          <Section>
            <CategorySection
              title="Podcasts"
              tagline="Listen up; there's more"
              articles={getArticlesByCategory("podcasts")}
              ctaText="Listen up; there's more"
              variant="2-col"
            />
          </Section>
        </>
      )}

      {/* Newsletter Signup CTA */}
      <Section>
        <div className="mx-auto px-4 md:px-10 py-12 md:py-20" style={{ maxWidth: "1112px" }}>
          {/* Framed Pattern Container */}
          <div className="relative border border-border overflow-hidden">
            {/* Background Pattern - Contained within frame */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: "url(/squared_metal.png)",
                backgroundSize: "200px 200px",
                backgroundRepeat: "repeat"
              }}
            />

            {/* Content */}
            <div className="relative z-10 px-6 md:px-8 py-12 md:py-16 text-center max-w-3xl mx-auto">
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
          </div>
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
