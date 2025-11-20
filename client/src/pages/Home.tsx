import { GridContainer } from "@/components/layout/GridContainer";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/01-HeroSection";
import { IntroSection } from "@/components/sections/02-IntroSection";
import { ThreePillars } from "@/components/sections/03-ThreePillars";
import { WhatWeDoSection } from "@/components/sections/04-WhatWeDoSection";
import { PartnershipSection } from "@/components/sections/05-PartnershipSection";
import { ComparisonSection } from "@/components/sections/06-ComparisonSection";
import { StatisticsSection } from "@/components/sections/07-StatisticsSection";
import { IntelligenceSection } from "@/components/sections/08-IntelligenceSection";
import { ContactSection } from "@/components/sections/09-ContactSection";
import { CTASection } from "@/components/sections/10-CTASection";
import { ClosingSection } from "@/components/sections/11-ClosingSection";
import {
  MENU_SECTIONS,
  HERO_CONTENT,
  INTRO_CONTENT,
  THREE_PILLARS,
  THREE_PILLARS_ANIMATION_PATH,
  WHAT_WE_DO_CONTENT,
  PARTNERSHIP_CONTENT,
  COMPARISON_CONTENT,
  STATISTICS_CONTENT,
  STATISTICS,
  INTELLIGENCE_CONTENT,
  ARTICLES,
  CONTACT_CONTENT,
  CONTACT_INFO,
  FINAL_CTA_CONTENT,
  CLOSING_CONTENT,
  FOOTER_LINKS,
  COMPANY_INFO,
  FOOTER_ANIMATION_PATH,
  SOCIAL_LINKS,
  CERTIFICATIONS,
} from "@/constants/content";

export default function Home() {
  return (
    <GridContainer>
      <Navigation sections={MENU_SECTIONS} />

      <HeroSection
        headline={HERO_CONTENT.headline}
        subheadline={HERO_CONTENT.subheadline}
        ctaText={HERO_CONTENT.ctaText}
        animationPath={HERO_CONTENT.animationPath}
      />

      <IntroSection
        logoSrc={INTRO_CONTENT.logoSrc}
        logoAlt={INTRO_CONTENT.logoAlt}
        description={INTRO_CONTENT.description}
      />

      <ThreePillars pillars={THREE_PILLARS} animationPath={THREE_PILLARS_ANIMATION_PATH} />

      <WhatWeDoSection
        label={WHAT_WE_DO_CONTENT.label}
        headline={WHAT_WE_DO_CONTENT.headline}
        description={WHAT_WE_DO_CONTENT.description}
        quote={WHAT_WE_DO_CONTENT.quote}
        ctaText={WHAT_WE_DO_CONTENT.ctaText}
        animationPath={WHAT_WE_DO_CONTENT.animationPath}
      />

      <PartnershipSection
        headline={PARTNERSHIP_CONTENT.headline}
        description={PARTNERSHIP_CONTENT.description}
        features={PARTNERSHIP_CONTENT.features}
        highlightText={PARTNERSHIP_CONTENT.highlightText}
        ctaText={PARTNERSHIP_CONTENT.ctaText}
      />

      <ComparisonSection
        title={COMPARISON_CONTENT.title}
        pullQuote={COMPARISON_CONTENT.pullQuote}
        blocks={COMPARISON_CONTENT.blocks}
        ctaText={COMPARISON_CONTENT.ctaText}
        animationPath={COMPARISON_CONTENT.animationPath}
      />

      <StatisticsSection
        title={STATISTICS_CONTENT.title}
        subtitle={STATISTICS_CONTENT.subtitle}
        stats={STATISTICS}
      />

      <IntelligenceSection
        title={INTELLIGENCE_CONTENT.title}
        subtitle={INTELLIGENCE_CONTENT.subtitle}
        articles={ARTICLES}
        ctaText={INTELLIGENCE_CONTENT.ctaText}
        animationPath={INTELLIGENCE_CONTENT.animationPath}
      />

      <ContactSection
        title={CONTACT_CONTENT.title}
        subtitle={CONTACT_CONTENT.subtitle}
        contactInfo={CONTACT_INFO}
        onSubmit={() => {
          // TODO: Implement form submission
        }}
      />

      <CTASection
        title={FINAL_CTA_CONTENT.title}
        subtitle={FINAL_CTA_CONTENT.subtitle}
        primaryButton={{ text: FINAL_CTA_CONTENT.primaryCta }}
        secondaryButton={{ text: FINAL_CTA_CONTENT.secondaryCta }}
        animationPath={FINAL_CTA_CONTENT.animationPath}
      />

      <Footer
        contactInfo={CONTACT_INFO}
        links={FOOTER_LINKS}
        companyInfo={COMPANY_INFO}
        socialLinks={SOCIAL_LINKS}
        certifications={CERTIFICATIONS}
        animationPath={FOOTER_ANIMATION_PATH}
      />
    </GridContainer>
  );
}
