interface DecorativeCornersProps {
  corners?: "all" | "top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
  opacity?: number;
  className?: string;
}

/**
 * DecorativeCorners - Add subtle corner bracket decorations to sections
 *
 * A utility component that adds corner bracket SVG decorations to frame content.
 * Uses absolute positioning to place 11x11px corner brackets at specified corners.
 *
 * @param corners - Which corners to show (default: "all")
 * @param opacity - Opacity percentage 0-100 (default: 20)
 * @param className - Additional CSS classes
 */
export function DecorativeCorners({
  corners = "all",
  opacity = 20,
  className = "",
}: DecorativeCornersProps) {
  const showTopLeft = corners === "all" || corners === "top" || corners === "left" || corners === "top-left";
  const showTopRight = corners === "all" || corners === "top" || corners === "right" || corners === "top-right";
  const showBottomLeft = corners === "all" || corners === "bottom" || corners === "left" || corners === "bottom-left";
  const showBottomRight = corners === "all" || corners === "bottom" || corners === "right" || corners === "bottom-right";

  return (
    <>
      {showTopLeft && (
        <img
          src="/left-upper.svg"
          alt=""
          aria-hidden="true"
          className={`absolute top-0 left-0 w-[11px] h-[11px] pointer-events-none ${className}`}
          style={{ opacity: opacity / 100 }}
        />
      )}
      {showTopRight && (
        <img
          src="/right-upper.svg"
          alt=""
          aria-hidden="true"
          className={`absolute top-0 right-0 w-[11px] h-[11px] pointer-events-none ${className}`}
          style={{ opacity: opacity / 100 }}
        />
      )}
      {showBottomLeft && (
        <img
          src="/left-bottom.svg"
          alt=""
          aria-hidden="true"
          className={`absolute bottom-0 left-0 w-[11px] h-[11px] pointer-events-none ${className}`}
          style={{ opacity: opacity / 100 }}
        />
      )}
      {showBottomRight && (
        <img
          src="/right-bottom.svg"
          alt=""
          aria-hidden="true"
          className={`absolute bottom-0 right-0 w-[11px] h-[11px] pointer-events-none ${className}`}
          style={{ opacity: opacity / 100 }}
        />
      )}
    </>
  );
}
