import { Section } from "@/components/layout/Section";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import type { StatItem } from "@/types";

interface StatisticsSectionProps {
  title: string;
  subtitle: string;
  stats: StatItem[];
  maxWidth?: number;
}

interface AnimatedNumberProps {
  value: string | number;
}

function AnimatedNumber({ value }: AnimatedNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 25,
    stiffness: 100,
  });

  // Parse number from value (handles "99%", "$1M", "1,000", etc.)
  const parseNumber = (val: string | number): { num: number; prefix: string; suffix: string } => {
    if (typeof val === "number") return { num: val, prefix: "", suffix: "" };

    const str = String(val);
    const match = str.match(/^([^0-9]*)([0-9,.]+)([^0-9]*)$/);

    if (match) {
      const [, prefix, numStr, suffix] = match;
      const num = parseFloat(numStr.replace(/,/g, ""));
      return { num, prefix, suffix };
    }

    return { num: 0, prefix: "", suffix: str };
  };

  const { num, prefix, suffix } = parseNumber(value);

  useEffect(() => {
    if (isInView) {
      motionValue.set(num);
    }
  }, [isInView, num, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const span = ref.current.querySelector("span");
        if (span) {
          span.textContent = Math.floor(latest).toLocaleString();
        }
      }
    });

    return unsubscribe;
  }, [springValue]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight mb-4 md:mb-6">
      {prefix}
      <span>0</span>
      {suffix}
    </div>
  );
}

/**
 * StatisticsSection - Clean statistics display section
 *
 * Simple statistics section with:
 * - Title and subtitle header
 * - Clean list of statistics
 * - Minimal styling with subtle highlighting
 *
 * @param title - Main section title
 * @param subtitle - Supporting subtitle text
 * @param stats - Array of statistics to display
 * @param maxWidth - Maximum width in pixels (default: 1112)
 */
export function StatisticsSection({
  title,
  subtitle,
  stats,
  maxWidth = 1112,
}: StatisticsSectionProps) {
  return (
    <Section number="06" showPatterns="both">
      <div className="mx-auto" style={{ maxWidth: `${maxWidth}px` }}>
        {/* Header */}
        <div className="text-center px-4 md:px-8 py-12 md:py-16 border-b border-border">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight">
            {title}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3">
          {stats.map((stat, idx) => (
            <div
              key={`stat-${idx}`}
              className={`p-6 md:p-10 py-12 md:py-16 ${
                idx < stats.length - 1 ? "md:border-r border-b md:border-b-0 border-border" : ""
              } ${stat.highlighted ? "bg-primary/5" : ""}`}
            >
              {/* Animated Number */}
              <AnimatedNumber value={stat.value} />

              {/* Label */}
              <div
                className="text-lg md:text-xl mb-3 md:mb-4 font-medium text-muted-foreground/80 tracking-wide"
                style={{ fontFamily: '"Stack Sans Notch", sans-serif' }}
              >
                {stat.label}
              </div>

              {/* Description */}
              <p className="leading-relaxed text-sm md:text-base text-muted-foreground/80">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
