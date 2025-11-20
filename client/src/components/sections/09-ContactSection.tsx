import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/ui/ContactForm";
import UnicornAnimation from "@/components/UnicornAnimation";
import type { ContactInfo, ContactFormData } from "@/types";

interface ContactSectionProps {
  title: string;
  subtitle: string;
  contactInfo: ContactInfo;
  onSubmit: (data: ContactFormData) => void | Promise<void>;
  isLoading?: boolean;
  animationPath?: string;
  maxWidth?: number;
}

/**
 * ContactSection - Clean contact form and information section
 *
 * Minimal design with:
 * - 2-column grid layout
 * - Left: Title, subtitle, contact details with animated background
 * - Right: Contact form
 * - Clean borders matching site aesthetic
 *
 * @param title - Main section title
 * @param subtitle - Supporting subtitle text
 * @param contactInfo - Phone and email contact information
 * @param onSubmit - Form submission handler
 * @param isLoading - If true, disables form during submission
 * @param animationPath - Path to Unicorn Studio animation JSON for background
 * @param maxWidth - Maximum width in pixels (default: 1112)
 */
export function ContactSection({
  title,
  subtitle,
  contactInfo,
  onSubmit,
  isLoading = false,
  animationPath,
  maxWidth = 1112,
}: ContactSectionProps) {
  return (
    <Section number="08" showPatterns="both">
      <div className="mx-auto" style={{ maxWidth: `${maxWidth}px` }}>
        <div className="grid md:grid-cols-2">
          {/* Left Column - Contact Info with Animation Background */}
          <div className="px-10 py-12 border-r border-border relative overflow-hidden">
            {/* Background Animation */}
            {animationPath && (
              <div className="absolute inset-0 pointer-events-none z-0">
                <UnicornAnimation jsonFilePath={animationPath} className="w-full h-full" />
              </div>
            )}

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{title}</h2>
              <p className="text-base text-muted-foreground/70 mb-12 leading-relaxed max-w-sm">
                {subtitle}
              </p>
              <div className="space-y-6">
                <div>
                  <div
                    className="text-xs text-muted-foreground/60 mb-1.5 uppercase tracking-wider"
                    style={{ fontFamily: '"Stack Sans Notch", sans-serif' }}
                  >
                    Phone
                  </div>
                  <a
                    href={contactInfo.phoneHref}
                    className="text-lg hover:text-primary transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div>
                  <div
                    className="text-xs text-muted-foreground/60 mb-1.5 uppercase tracking-wider"
                    style={{ fontFamily: '"Stack Sans Notch", sans-serif' }}
                  >
                    Email
                  </div>
                  <a
                    href={contactInfo.emailHref}
                    className="text-lg hover:text-primary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="px-10 py-12">
            <ContactForm onSubmit={onSubmit} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </Section>
  );
}
