import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import type { MenuSection } from "@/types";

interface NavigationProps {
  sections: MenuSection[];
  logoSrc?: string;
  logoAlt?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  maxWidth?: number;
}

/**
 * Navigation - Floating navigation bar with logo, dropdown menu, and CTA
 *
 * A fixed-position navigation bar following the design system with:
 * - Centered layout within max-width container
 * - Logo and hamburger menu button
 * - Dropdown menu that appears below navbar
 * - Glass-morphism effect with backdrop blur
 * - Purple glow on CTA button
 * - Sharp edges and #373737 borders
 *
 * @param sections - Array of menu sections with grouped links
 * @param logoSrc - Path to logo image (default: /assured-logo-white-new.svg)
 * @param logoAlt - Alt text for logo (default: Assured)
 * @param ctaText - Text for CTA button (default: Get Started)
 * @param onCtaClick - Click handler for CTA button
 * @param maxWidth - Maximum width in pixels (default: 1112)
 */
export function Navigation({
  sections,
  logoSrc = "/assured-logo-white-new.svg",
  logoAlt = "Assured",
  ctaText = "Get Started",
  onCtaClick,
  maxWidth = 1112,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-6"
      style={{ maxWidth: `${maxWidth}px` }}
    >
      <div
        className="bg-card/80 nav-blur border border-border px-6 py-4 flex justify-between items-center shadow-lg"
      >
        {/* Logo with subtle hover animation */}
        <Link href="/">
          <img
            src={logoSrc}
            alt={logoAlt}
            className="h-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:opacity-80"
          />
        </Link>

        <div className="flex items-center gap-4">
          {/* Hamburger Menu */}
          <button
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 w-6 h-6 justify-center items-center hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`w-full h-0.5 bg-foreground transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-foreground transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-foreground transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* CTA Button */}
          <Button
            size="sm"
            className="bg-primary text-primary-foreground font-medium btn-enhanced shadow-purple-glow"
            onClick={onCtaClick}
          >
            {ctaText}
          </Button>
        </div>
      </div>

      {/* Mega Menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-2 bg-card border border-border shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="grid grid-cols-3 gap-0">
            {sections.map((section, sectionIndex) => (
              <div
                key={section.title}
                className={`p-6 ${sectionIndex < sections.length - 1 ? "border-r border-border" : ""}`}
              >
                {/* Section Header */}
                <h3 className="text-[10px] font-notch uppercase tracking-widest text-muted-foreground/60 mb-4">
                  {section.title}
                </h3>

                {/* Section Items */}
                <nav className="flex flex-col gap-3">
                  {section.items.map((link) => {
                    const isActive = link.href === location ||
                      (link.href !== "/" && location.startsWith(link.href));
                    const isHashLink = link.href.startsWith("#");
                    const isExternal = link.external;

                    const cardClassName = `group relative block p-4 transition-all duration-200 border border-border hover:border-primary/50 hover:bg-primary/5 ${
                      isActive ? "border-primary/50 bg-primary/5" : ""
                    }`;

                    const content = (
                      <>
                        <div className="text-sm font-notch uppercase tracking-wide text-foreground group-hover:text-primary transition-colors">
                          {link.label}
                        </div>
                        {link.description && (
                          <div className="text-xs text-muted-foreground/70 mt-1.5 leading-relaxed">
                            {link.description}
                          </div>
                        )}
                      </>
                    );

                    if (isExternal) {
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          className={cardClassName}
                          onClick={() => setIsOpen(false)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {content}
                        </a>
                      );
                    }

                    if (isHashLink) {
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          className={cardClassName}
                          onClick={() => setIsOpen(false)}
                        >
                          {content}
                        </a>
                      );
                    }

                    return (
                      <Link key={link.href} href={link.href}>
                        <a className={cardClassName} onClick={() => setIsOpen(false)}>
                          {content}
                        </a>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
