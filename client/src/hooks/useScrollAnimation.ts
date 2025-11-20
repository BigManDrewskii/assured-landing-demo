/**
 * Scroll animation hook using Framer Motion's useInView
 * Provides simple interface for triggering animations on scroll
 */

import { useInView } from "framer-motion";
import { useRef } from "react";

interface UseScrollAnimationOptions {
  /**
   * Animation triggers only once (default: true)
   */
  once?: boolean;
  /**
   * Amount of element that must be visible to trigger (default: 0.2 = 20%)
   */
  amount?: number;
  /**
   * Delay before animation starts in seconds (default: 0)
   */
  delay?: number;
}

/**
 * Hook for triggering animations when elements scroll into view
 *
 * @example
 * const { ref, inView } = useScrollAnimation()
 * return <motion.div ref={ref} animate={inView ? "visible" : "hidden"} variants={fadeIn}>
 */
export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { once = true, amount = 0.2 } = options;
  const ref = useRef(null);
  const inView = useInView(ref, {
    once,
    amount,
  });

  return { ref, inView };
}
