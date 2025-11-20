import { GridContainer } from "@/components/layout/GridContainer";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { HeroSection } from "@/components/sections/01-HeroSection";
import { IntelligenceSection } from "@/components/sections/08-IntelligenceSection";
import { PolicySection } from "@/components/how-we-work/PolicySection";
import { PreparationSection } from "@/components/how-we-work/PreparationSection";
import { ProgressionSection } from "@/components/how-we-work/ProgressionSection";
import { Button } from "@/components/ui/button";
import {
  MENU_SECTIONS,
  CONTACT_INFO,
  FOOTER_LINKS,
  COMPANY_INFO,
  SOCIAL_LINKS,
  CERTIFICATIONS,
  HOW_WE_WORK_PAGE_HERO,
  HOW_WE_WORK_PAGE_INTRO,
  HOW_WE_WORK_POLICY,
  HOW_WE_WORK_PREPARATION,
  HOW_WE_WORK_PROGRESSION,
  HOW_WE_WORK_FOUNDER_QUOTE,
  INTELLIGENCE_CONTENT,
  ARTICLES,
} from "@/constants/content";

export default function HowWeWork() {
  return (
    <GridContainer>
      <Navigation sections={MENU_SECTIONS} />

      {/* 01. Hero Section */}
      <Section>
        <div className="mx-auto px-10 pt-36 pb-24 text-center" style={{ maxWidth: "1112px" }}>
          <div
            className="text-xs text-primary uppercase tracking-widest mb-8"
            style={{ fontFamily: '"Stack Sans Notch", sans-serif' }}
          >
            {HOW_WE_WORK_PAGE_HERO.label}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            {HOW_WE_WORK_PAGE_HERO.headline}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {HOW_WE_WORK_PAGE_HERO.subheadline}
          </p>
        </div>
      </Section>

      {/* 02. Introduction - Three Pillars */}
      <Section>
        <div className="mx-auto px-10 py-16" style={{ maxWidth: "1112px" }}>
          <p className="text-lg md:text-xl text-muted-foreground/85 leading-relaxed max-w-4xl mx-auto text-center">
            {HOW_WE_WORK_PAGE_INTRO.content.split("policy, preparation and progression").map((part, idx, arr) => (
              <span key={idx}>
                {part}
                {idx < arr.length - 1 && (
                  <strong className="font-bold text-foreground">
                    policy, preparation and progression
                  </strong>
                )}
              </span>
            ))}
          </p>
        </div>
      </Section>

      {/* 03. Policy Section */}
      <PolicySection
        number={HOW_WE_WORK_POLICY.number}
        title={HOW_WE_WORK_POLICY.title}
        problem={HOW_WE_WORK_POLICY.problem}
        context={HOW_WE_WORK_POLICY.context}
        processTitle={HOW_WE_WORK_POLICY.processTitle}
        steps={HOW_WE_WORK_POLICY.steps}
      />

      {/* 04. Preparation Section */}
      <PreparationSection
        number={HOW_WE_WORK_PREPARATION.number}
        title={HOW_WE_WORK_PREPARATION.title}
        intro={HOW_WE_WORK_PREPARATION.intro}
        questionsTitle={HOW_WE_WORK_PREPARATION.questionsTitle}
        questions={HOW_WE_WORK_PREPARATION.questions}
      />

      {/* 05. Progression Section */}
      <ProgressionSection
        number={HOW_WE_WORK_PROGRESSION.number}
        title={HOW_WE_WORK_PROGRESSION.title}
        intro={HOW_WE_WORK_PROGRESSION.intro}
        subsections={HOW_WE_WORK_PROGRESSION.subsections}
      />

      {/* 06. Founder Quote / CTA */}
      <Section>
        <div className="mx-auto px-10 py-24 text-center" style={{ maxWidth: "1112px" }}>
          <div className="max-w-3xl mx-auto">
            {/* Quote */}
            <div className="border-l-4 border-primary pl-8 py-6 mb-12 text-left">
              <blockquote className="text-2xl md:text-3xl font-semibold text-foreground leading-tight mb-6">
                "{HOW_WE_WORK_FOUNDER_QUOTE.quote}"
              </blockquote>
              <cite className="text-base text-muted-foreground/70 not-italic">
                — {HOW_WE_WORK_FOUNDER_QUOTE.attribution}
              </cite>
            </div>

            {/* CTAs */}
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="shadow-purple-glow">
                {HOW_WE_WORK_FOUNDER_QUOTE.ctaText}
              </Button>
              <Button size="lg" variant="outline">
                {HOW_WE_WORK_FOUNDER_QUOTE.secondaryCtaText}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* 07. Intelligence Section */}
      <IntelligenceSection
        title={INTELLIGENCE_CONTENT.title}
        subtitle={INTELLIGENCE_CONTENT.subtitle}
        articles={ARTICLES}
        ctaText="View more intelligence"
        animationPath={INTELLIGENCE_CONTENT.animationPath}
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
