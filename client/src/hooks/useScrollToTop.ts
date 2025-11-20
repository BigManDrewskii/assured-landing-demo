import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Custom hook that scrolls the window to the top whenever the route changes.
 * Uses wouter's useLocation to detect route changes.
 */
export function useScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top smoothly when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);
}
