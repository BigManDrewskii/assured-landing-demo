import { useState } from "react";
import UnicornAnimation from "@/components/UnicornAnimation";
import { Link } from "wouter";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import type { FooterLinks, ContactInfo, CompanyInfo, SocialLinks, CertificationBadge } from "@/types";

interface FooterProps {
  contactInfo: ContactInfo;
  links: FooterLinks;
  companyInfo: CompanyInfo;
  socialLinks?: SocialLinks;
  certifications?: CertificationBadge[];
  logoSrc?: string;
  logoAlt?: string;
  animationPath?: string;
  maxWidth?: number;
}

/**
 * Footer - Site footer with links, contact info, and company details
 *
 * A comprehensive footer component following the design system with:
 * - 4-column grid layout (logo/contact, resources, company, legal/social)
 * - Animated background (Unicorn Studio)
 * - Company registration details
 * - Sharp edges and #373737 borders
 *
 * @param contactInfo - Contact information (phone, email)
 * @param links - Footer navigation links grouped by category
 * @param companyInfo - Company description and registration details
 * @param logoSrc - Path to logo image (default: /assured-logo-white-new.svg)
 * @param logoAlt - Alt text for logo (default: Assured)
 * @param animationPath - Path to Unicorn Studio animation JSON
 * @param maxWidth - Maximum width in pixels (default: 1112)
 */
export function Footer({
  contactInfo,
  links,
  companyInfo,
  socialLinks,
  certifications,
  logoSrc = "/assured-logo-white-new.svg",
  logoAlt = "Assured",
  animationPath,
  maxWidth = 1112,
}: FooterProps) {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    resources: false,
    company: false,
    legal: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <footer className="bg-black border-t border-border relative overflow-visible">
      {/* Decorative Grid Patterns - Tiled on Footer Edges */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="max-w-[1112px] mx-auto h-full relative">
          {/* Left Tiled Pinstripe Pattern */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[100vw] -translate-x-full opacity-100"
            style={{
              backgroundImage: "url(/pinstriped_suit.webp)",
              backgroundRepeat: "repeat",
              backgroundSize: "auto",
              backgroundPosition: "center top",
            }}
          />

          {/* Right Tiled Pinstripe Pattern */}
          <div
            className="absolute right-0 top-0 bottom-0 w-[100vw] translate-x-full opacity-100"
            style={{
              backgroundImage: "url(/pinstriped_suit.webp)",
              backgroundRepeat: "repeat",
              backgroundSize: "auto",
              backgroundPosition: "center top",
            }}
          />
        </div>
      </div>

      <div
        className="mx-auto relative overflow-hidden"
        style={{ maxWidth: `${maxWidth}px` }}
      >
        {/* Footer Background Animation */}
        {animationPath && (
          <div className="absolute inset-0 pointer-events-none z-0">
            <UnicornAnimation
              jsonFilePath={animationPath}
              className="w-full h-full"
            />
          </div>
        )}

        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 relative z-10">
          {/* Logo and Contact - Always visible */}
          <div className="p-6 md:p-8 py-8 md:py-12 md:border-r border-b md:border-b-0 border-border">
            {/* Framed Logo */}
            <Link href="/">
              <img
                src="/assured-official-logo-pack/assured-logo-white/black.svg"
                alt={logoAlt}
                className="h-8 md:h-10 mb-6 md:mb-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:opacity-80"
              />
            </Link>
            <div className="space-y-4">
              <div>
                <div className="text-xs text-muted-foreground/50 mb-1 uppercase tracking-wider">
                  Phone
                </div>
                <a
                  href={contactInfo.phoneHref}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div>
                <div className="text-xs text-muted-foreground/50 mb-1 uppercase tracking-wider">
                  Email
                </div>
                <a
                  href={contactInfo.emailHref}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Resources - Collapsible on mobile */}
          <div className="md:border-r border-b md:border-b-0 border-border">
            {/* Mobile: Collapsible */}
            <div className="md:hidden">
              <Collapsible open={openSections.resources} onOpenChange={() => toggleSection("resources")}>
                <CollapsibleTrigger className="w-full p-6 py-4 flex items-center justify-between hover:bg-primary/5 transition-colors" aria-label="Toggle resources section">
                  <h4 className="font-bold text-xs uppercase tracking-wider">Resources</h4>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openSections.resources ? "rotate-180" : ""}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1">
                  <ul className="space-y-3 text-sm text-muted-foreground/70 px-6 pb-6">
                    {links.resources.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="hover:text-primary transition-colors block py-1"
                          {...(link.external && {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          })}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </div>
            {/* Desktop: Normal display */}
            <div className="hidden md:block p-8 py-12">
              <h4 className="font-bold mb-6 text-xs uppercase tracking-wider">Resources</h4>
              <ul className="space-y-3 text-sm text-muted-foreground/70">
                {links.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-primary transition-colors"
                      {...(link.external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company - Collapsible on mobile */}
          <div className="md:border-r border-b md:border-b-0 border-border">
            {/* Mobile: Collapsible */}
            <div className="md:hidden">
              <Collapsible open={openSections.company} onOpenChange={() => toggleSection("company")}>
                <CollapsibleTrigger className="w-full p-6 py-4 flex items-center justify-between hover:bg-primary/5 transition-colors" aria-label="Toggle company section">
                  <h4 className="font-bold text-xs uppercase tracking-wider">Company</h4>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openSections.company ? "rotate-180" : ""}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1">
                  <ul className="space-y-3 text-sm text-muted-foreground/70 px-6 pb-6">
                    {links.company.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="hover:text-primary transition-colors block py-1"
                          {...(link.external && {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          })}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </div>
            {/* Desktop: Normal display */}
            <div className="hidden md:block p-8 py-12">
              <h4 className="font-bold mb-6 text-xs uppercase tracking-wider">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground/70">
                {links.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-primary transition-colors"
                      {...(link.external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal & Social - Collapsible on mobile */}
          <div className="border-b md:border-b-0 border-border">
            {/* Mobile: Collapsible */}
            <div className="md:hidden">
              <Collapsible open={openSections.legal} onOpenChange={() => toggleSection("legal")}>
                <CollapsibleTrigger className="w-full p-6 py-4 flex items-center justify-between hover:bg-primary/5 transition-colors" aria-label="Toggle legal and social section">
                  <h4 className="font-bold text-xs uppercase tracking-wider">Legal & Social</h4>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openSections.legal ? "rotate-180" : ""}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1">
                  <ul className="space-y-3 text-sm text-muted-foreground/70 px-6 pb-6">
                    {links.legal.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="hover:text-primary transition-colors block py-1"
                          {...(link.external && {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          })}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </div>
            {/* Desktop: Normal display */}
            <div className="hidden md:block p-8 py-12">
              <h4 className="font-bold mb-6 text-xs uppercase tracking-wider">
                Legal & Social
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground/70">
                {links.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-primary transition-colors"
                      {...(link.external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Company Info & Certifications */}
        <div className="border-t border-border p-6 md:p-8 py-8 md:py-10 relative z-10">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* Company Info */}
            <div className="space-y-3 text-xs text-muted-foreground/60 leading-relaxed">
              <p>{companyInfo.description}</p>
              <p>{companyInfo.registrationDetails}</p>
              {companyInfo.fcaNumber && (
                <p className="font-medium text-muted-foreground/70">{companyInfo.fcaNumber}</p>
              )}
              <p className="pt-2">{companyInfo.copyright}</p>
            </div>

            {/* Certifications */}
            {certifications && certifications.length > 0 && (
              <div className="flex flex-wrap gap-4 md:gap-6 items-center justify-start md:justify-end">
                {certifications.map((cert, index) => (
                  <img
                    key={index}
                    src={cert.src}
                    alt={cert.alt}
                    style={{ height: cert.height ? `${cert.height}px` : 'auto' }}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
