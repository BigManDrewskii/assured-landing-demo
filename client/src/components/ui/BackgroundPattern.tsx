interface BackgroundPatternProps {
  pattern: "grid" | "pattern-1" | "pattern-2";
  side: "left" | "right" | "both";
  opacity?: number;
  className?: string;
}

/**
 * BackgroundPattern - Add subtle grid/pattern decorations to section sides
 *
 * A utility component that adds pattern SVG decorations to the left/right sides of sections.
 * Uses absolute positioning to place 408x204px pattern images at section edges.
 *
 * Patterns:
 * - grid: Clean rectangular grid with sharp edges (technical aesthetic)
 * - pattern-1: Modular grid with rounded top-left corner
 * - pattern-2: Modular grid with rounded top-right corner
 *
 * @param pattern - Which pattern SVG to use
 * @param side - Which side(s) to place pattern ("left" | "right" | "both")
 * @param opacity - Opacity percentage 0-100 (default: 5)
 * @param className - Additional CSS classes
 */
export function BackgroundPattern({
  pattern,
  side,
  opacity = 5,
  className = "",
}: BackgroundPatternProps) {
  const showLeft = side === "left" || side === "both";
  const showRight = side === "right" || side === "both";

  const patternSrc = `/${pattern}.svg`;

  return (
    <>
      {showLeft && (
        <img
          src={patternSrc}
          alt=""
          aria-hidden="true"
          className={`absolute top-1/2 -translate-y-1/2 left-0 w-[408px] h-[204px] pointer-events-none ${className}`}
          style={{ opacity: opacity / 100 }}
        />
      )}
      {showRight && (
        <img
          src={patternSrc}
          alt=""
          aria-hidden="true"
          className={`absolute top-1/2 -translate-y-1/2 right-0 w-[408px] h-[204px] pointer-events-none ${className}`}
          style={{ opacity: opacity / 100 }}
        />
      )}
    </>
  );
}
