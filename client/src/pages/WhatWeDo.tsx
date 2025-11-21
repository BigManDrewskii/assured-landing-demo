import { Helmet } from "react-helmet-async";
import { GridContainer } from "@/components/layout/GridContainer";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/01-HeroSection";
import { IntelligenceSection } from "@/components/sections/08-IntelligenceSection";
import { CTASection } from "@/components/sections/10-CTASection";
import { ChallengeSection } from "@/components/sections/what-we-do/ChallengeSection";
import { ServicesGridSection } from "@/components/sections/what-we-do/ServicesGridSection";
import { DifferentSection } from "@/components/sections/what-we-do/DifferentSection";
import { FAQSection } from "@/components/sections/what-we-do/FAQSection";
import {
  MENU_SECTIONS,
  CONTACT_INFO,
  FOOTER_LINKS,
  COMPANY_INFO,
  SOCIAL_LINKS,
  CERTIFICATIONS,
  WHAT_WE_DO_PAGE_HERO,
  WHAT_WE_DO_PAGE_CHALLENGE,
  WHAT_WE_DO_PAGE_SERVICES,
  WHAT_WE_DO_PAGE_DIFFERENT,
  WHAT_WE_DO_PAGE_FAQ,
  INTELLIGENCE_CONTENT,
  ARTICLES,
  FINAL_CTA_CONTENT,
} from "@/constants/content";

export default function WhatWeDo() {
  return (
    <GridContainer>
      <Helmet>
        <title>What We Do | Cyber Insurance Services | Assured</title>
        <meta name="description" content="Challenging traditional cyber insurance. Expert risk assessment, tailored policy solutions, ongoing risk management, and consultancy-led cyber protection services." />
        <link rel="canonical" href="https://assured.co.uk/what-we-do" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Assured" />
        <meta property="og:title" content="What We Do | Cyber Insurance Services | Assured" />
        <meta property="og:description" content="Challenging traditional cyber insurance. Expert risk assessment, tailored policy solutions, and ongoing risk management." />
        <meta property="og:image" content="/assured-og.png" />
        <meta property="og:locale" content="en_GB" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What We Do | Cyber Insurance Services | Assured" />
        <meta name="twitter:description" content="Challenging traditional cyber insurance. Expert risk assessment, tailored solutions, and ongoing risk management." />
        <meta name="twitter:image" content="/assured-og.png" />
      </Helmet>

      <Navigation sections={MENU_SECTIONS} />

      {/* 01. Hero Section */}
      <HeroSection
        headline={WHAT_WE_DO_PAGE_HERO.headline}
        subheadline={WHAT_WE_DO_PAGE_HERO.subheadline}
        ctaText="Get Started"
        animationPath="/assured-what-we-do-bg-animation.json"
      />

      {/* 02. Challenging the Status Quo */}
      <ChallengeSection
        title={WHAT_WE_DO_PAGE_CHALLENGE.title}
        content={WHAT_WE_DO_PAGE_CHALLENGE.content}
        ctaText={WHAT_WE_DO_PAGE_CHALLENGE.ctaText}
        onCtaClick={() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* 03. What You Can Expect From Us */}
      <ServicesGridSection
        title={WHAT_WE_DO_PAGE_SERVICES.title}
        services={WHAT_WE_DO_PAGE_SERVICES.services}
      />

      {/* 04. Different, But Not Just For The Sake Of It */}
      <DifferentSection
        title={WHAT_WE_DO_PAGE_DIFFERENT.title}
        content={WHAT_WE_DO_PAGE_DIFFERENT.content}
        quote={WHAT_WE_DO_PAGE_DIFFERENT.quote}
        attribution={WHAT_WE_DO_PAGE_DIFFERENT.attribution}
      />

      {/* 05. FAQ Section */}
      <FAQSection
        title={WHAT_WE_DO_PAGE_FAQ.title}
        items={WHAT_WE_DO_PAGE_FAQ.items}
        ctaText={WHAT_WE_DO_PAGE_FAQ.ctaText}
        ctaLink={WHAT_WE_DO_PAGE_FAQ.ctaLink}
      />

      {/* 06. Intelligence Section */}
      <IntelligenceSection
        title={INTELLIGENCE_CONTENT.title}
        subtitle={INTELLIGENCE_CONTENT.subtitle}
        articles={ARTICLES}
        ctaText={INTELLIGENCE_CONTENT.ctaText}
        animationPath={INTELLIGENCE_CONTENT.animationPath}
      />

      {/* 07. Final CTA */}
      <CTASection
        title="Ready to experience specialist cyber insurance?"
        subtitle="Let's discuss how we can protect your organisation with expertise that goes beyond traditional broking."
        primaryButton={{ text: "Get Started" }}
        secondaryButton={{ text: "See our work" }}
      />

      <Footer
        contactInfo={CONTACT_INFO}
        links={FOOTER_LINKS}
        companyInfo={COMPANY_INFO}
        socialLinks={SOCIAL_LINKS}
        certifications={CERTIFICATIONS}
      />
    </GridContainer>
  );
}
