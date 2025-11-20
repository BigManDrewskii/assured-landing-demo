/**
 * Animation variants for scroll-triggered animations
 * Using Framer Motion with subtle, fast transitions
 */

import type { Variants } from "framer-motion";

// Smooth easing curve for elegant motion
const EASING = [0.22, 1, 0.36, 1] as const;
const DURATION = 0.5;

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION,
      ease: EASING,
    },
  },
};

export const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION,
      ease: EASING,
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION,
      ease: EASING,
    },
  },
};

// Staggered children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerChild: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: EASING,
    },
  },
};
