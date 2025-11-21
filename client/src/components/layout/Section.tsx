import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { slideUp } from "@/lib/animations";

interface SectionProps {
  id?: string;
  number?: string;
  children: ReactNode;
  className?: string;
  noBorderBottom?: boolean;
  enableAnimation?: boolean;
  showPatterns?: "left" | "right" | "both" | false;
}

/**
 * Section - Standardized section wrapper with section number and borders
 *
 * Provides consistent section styling with:
 * - Optional section numbering (01, 02, 03, etc.) positioned on the left
 * - Bottom border following the design system
 * - Proper positioning and spacing
 * - Optional scroll-triggered animations
 * - Optional decorative patterns on outer edges
 *
 * @param id - HTML id attribute for anchor links
 * @param number - Section number to display (e.g., "01", "02")
 * @param children - Section content
 * @param className - Additional CSS classes to apply to the section
 * @param noBorderBottom - If true, removes the bottom border
 * @param enableAnimation - If true, adds subtle scroll animation (default: true)
 * @param showPatterns - If true, displays decorative grid patterns on outer edges (default: false)
 */
export function Section({
  id,
  number,
  children,
  className = "",
  noBorderBottom = false,
  enableAnimation = true,
  showPatterns = false,
}: SectionProps) {
  const { ref, inView } = useScrollAnimation({ amount: 0.15 });

  return (
    <section
      id={id}
      className={`${!noBorderBottom ? "border-b border-border" : ""} relative overflow-visible ${className}`}
    >
      {/* Decorative Grid Patterns - Tiled on Content Edges */}
      {showPatterns && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="max-w-[1112px] mx-auto h-full relative">
            {/* Left Tiled Pinstripe Pattern */}
            {(showPatterns === "left" || showPatterns === "both") && (
              <div
                className="absolute left-0 top-0 bottom-0 w-[100vw] -translate-x-full opacity-100"
                style={{
                  backgroundImage: "url(/pinstriped_suit.webp)",
                  backgroundRepeat: "repeat",
                  backgroundSize: "auto",
                  backgroundPosition: "center top",
                }}
              />
            )}

            {/* Right Tiled Pinstripe Pattern */}
            {(showPatterns === "right" || showPatterns === "both") && (
              <div
                className="absolute right-0 top-0 bottom-0 w-[100vw] translate-x-full opacity-100"
                style={{
                  backgroundImage: "url(/pinstriped_suit.webp)",
                  backgroundRepeat: "repeat",
                  backgroundSize: "auto",
                  backgroundPosition: "center top",
                }}
              />
            )}
          </div>
        </div>
      )}
      {/* Section Number */}
      {number && (
        <div className="absolute left-0 top-8 max-w-[1112px] mx-auto w-full pointer-events-none z-20">
          <div className="relative">
            <div className="absolute left-0 -translate-x-full pr-4 text-xs text-muted-foreground/50 font-mono">
              {number}
            </div>
          </div>
        </div>
      )}

      {/* Section Content with Animation */}
      {enableAnimation ? (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideUp}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </section>
  );
}
