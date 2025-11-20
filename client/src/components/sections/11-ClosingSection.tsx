import { Section } from "@/components/layout/Section";
import UnicornAnimation from "@/components/UnicornAnimation";

interface ClosingSectionProps {
  text?: string;
  animationPath?: string;
  maxWidth?: number;
}

/**
 * ClosingSection - Final branding section with animated logo background
 *
 * Features:
 * - Animated Assured logo background
 * - Optional closing text
 * - Minimal, clean presentation
 *
 * @param text - Optional closing text
 * @param animationPath - Path to Unicorn Studio animation JSON
 * @param maxWidth - Maximum width in pixels (default: 1112)
 */
export function ClosingSection({
  text,
  animationPath,
  maxWidth = 1112,
}: ClosingSectionProps) {
  return (
    <Section number="10" className="overflow-hidden" noBorderBottom>
      <div
        className="mx-auto px-8 py-36 relative overflow-hidden"
        style={{ maxWidth: `${maxWidth}px` }}
      >
        {/* Background Animation */}
        {animationPath && (
          <div className="absolute inset-0 pointer-events-none z-0">
            <UnicornAnimation jsonFilePath={animationPath} className="w-full h-full" />
          </div>
        )}

        {/* Content */}
        {text && (
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <p className="text-lg text-muted-foreground/70 leading-relaxed">
              {text}
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
