import { Helmet } from "react-helmet-async";
import { GridContainer } from "@/components/layout/GridContainer";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import {
  MENU_SECTIONS,
  CONTACT_INFO,
  FOOTER_LINKS,
  COMPANY_INFO,
  SOCIAL_LINKS,
  CERTIFICATIONS,
  FOOTER_ANIMATION_PATH,
  ABOUT_PAGE_HERO,
  ABOUT_PAGE_INTRO,
  ABOUT_PAGE_COLLABORATION,
  ABOUT_PAGE_CLIENT_PRIVACY,
  ABOUT_PAGE_INTELLIGENCE_PLATFORM,
  ABOUT_PAGE_TEAM,
  ABOUT_PAGE_CONTACT_CTA,
} from "@/constants/content";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <GridContainer>
      <Helmet>
        <title>About Assured | UK's First Exclusive Cyber Insurance Broker</title>
        <meta name="description" content="Meet the team behind Assured. We're the UK's first exclusive cyber insurance broker, dedicated to matching clients with the right policies and delivering value beyond just insurance." />
        <link rel="canonical" href="https://assured.co.uk/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Assured" />
        <meta property="og:title" content="About Assured | UK's First Exclusive Cyber Insurance Broker" />
        <meta property="og:description" content="Meet the team behind Assured. We're the UK's first exclusive cyber insurance broker dedicated to cyber risk." />
        <meta property="og:image" content="/assured-og.png" />
        <meta property="og:locale" content="en_GB" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Assured | UK's First Exclusive Cyber Insurance Broker" />
        <meta name="twitter:description" content="Meet the team behind Assured. We're the UK's first exclusive cyber insurance broker dedicated to cyber risk." />
        <meta name="twitter:image" content="/assured-og.png" />
      </Helmet>

      <Navigation sections={MENU_SECTIONS} />

      {/* 01. Hero Section */}
      <Section>
        <div className="mx-auto px-4 md:px-10 pt-40 pb-16 md:pt-52 md:pb-24 text-center" style={{ maxWidth: "1112px" }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {ABOUT_PAGE_HERO.headline}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground/80 leading-relaxed max-w-4xl mx-auto">
            {ABOUT_PAGE_HERO.subheadline}
          </p>
        </div>
      </Section>

      {/* 02. Introduction Section - Two Column 55/45 */}
      <Section number="02">
        <div className="mx-auto px-4 md:px-10 py-16 md:py-24" style={{ maxWidth: "1112px" }}>
          <div className="grid grid-cols-1 md:grid-cols-[55%_1fr] gap-10 md:gap-16">
            {/* Left: Main Content */}
            <div className="space-y-8">
              {ABOUT_PAGE_INTRO.mainContent.map((paragraph, idx) => (
                <p key={`intro-${idx}`} className="text-base md:text-lg lg:text-xl text-muted-foreground/85 leading-[1.8]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Right: Pull Quote */}
            <div className="flex items-center justify-center">
              <div className="border-l-4 md:border-l-8 border-primary pl-6 md:pl-8 py-6 md:py-8">
                <p className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground leading-tight">
                  {ABOUT_PAGE_INTRO.pullQuote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 03. Collaboration Philosophy Section */}
      <Section number="03">
        <div className="mx-auto px-4 md:px-10 py-16 md:py-24" style={{ maxWidth: "1112px" }}>
          <div className="border-l-4 md:border-l-8 border-primary pl-6 md:pl-12 py-6 md:py-10 max-w-5xl">
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed">
              {ABOUT_PAGE_COLLABORATION.content}
            </p>
          </div>
        </div>
      </Section>

      {/* 04. Client Privacy Section */}
      <Section number="04">
        <div className="mx-auto px-4 md:px-10 py-12 md:py-20 text-center" style={{ maxWidth: "1112px" }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 leading-tight">
            {ABOUT_PAGE_CLIENT_PRIVACY.headline}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground/85 leading-relaxed max-w-4xl mx-auto">
            {ABOUT_PAGE_CLIENT_PRIVACY.content}
          </p>
        </div>
      </Section>

      {/* 05. Intelligence Platform Section - Single Column Centered */}
      <Section number="05">
        <div className="mx-auto px-4 md:px-10 py-16 md:py-24" style={{ maxWidth: "1112px" }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 leading-tight">
              {ABOUT_PAGE_INTELLIGENCE_PLATFORM.headline}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground/85 leading-relaxed mb-10 md:mb-12">
              {ABOUT_PAGE_INTELLIGENCE_PLATFORM.content}
            </p>
            <Button
              onClick={() => setLocation(ABOUT_PAGE_INTELLIGENCE_PLATFORM.ctaLink)}
              size="lg"
              className="bg-primary text-primary-foreground font-medium px-8 h-12 min-h-[44px]"
            >
              {ABOUT_PAGE_INTELLIGENCE_PLATFORM.ctaText}
            </Button>
          </div>
        </div>
      </Section>

      {/* 06. Team Section - Three Column Grid */}
      <Section number="06">
        <div className="mx-auto px-4 md:px-10 py-12 md:py-20" style={{ maxWidth: "1112px" }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center leading-tight">
            {ABOUT_PAGE_TEAM.headline}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ABOUT_PAGE_TEAM.members.map((member) => (
              <div key={member.name} className="border border-border group hover:border-primary/30 transition-all">
                {/* Profile Photo */}
                <div className="aspect-square overflow-hidden bg-muted/20 border-b border-border">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Member Info */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-sm font-notch uppercase tracking-wider text-primary mb-6">
                    {member.role}
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground/85 leading-[1.8]">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 07. Contact CTA Section - Two Column 50/50 */}
      <Section number="07">
        <div className="mx-auto px-4 md:px-10 py-16 md:py-24" style={{ maxWidth: "1112px" }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center leading-tight">
            {ABOUT_PAGE_CONTACT_CTA.headline}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-10 md:mb-12">
            {/* Left Column */}
            <div className="border-b md:border-b-0 md:border-r border-border pb-8 md:pb-0 md:pr-8">
              <p className="text-base md:text-lg text-muted-foreground/85 leading-relaxed">
                {ABOUT_PAGE_CONTACT_CTA.leftContent}
              </p>
            </div>

            {/* Right Column */}
            <div className="md:pl-4">
              <p className="text-base md:text-lg text-muted-foreground/85 leading-relaxed">
                {ABOUT_PAGE_CONTACT_CTA.rightContent}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              onClick={() => setLocation("/#contact")}
              size="lg"
              className="bg-primary text-primary-foreground font-medium px-8 h-12"
            >
              {ABOUT_PAGE_CONTACT_CTA.ctaText}
            </Button>
          </div>
        </div>
      </Section>

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
