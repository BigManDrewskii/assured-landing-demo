import { ReactNode } from "react";

interface GridContainerProps {
  children: ReactNode;
  showVerticalLines?: boolean;
  maxWidth?: number;
  className?: string;
}

/**
 * GridContainer - Main container component with optional vertical grid lines
 *
 * Provides the standardized 1112px max-width container with optional vertical
 * grid lines at the container edges, following the project's design system.
 *
 * @param children - Content to render inside the container
 * @param showVerticalLines - Whether to display vertical grid lines (default: true)
 * @param maxWidth - Maximum width in pixels (default: 1112)
 * @param className - Additional CSS classes to apply
 */
export function GridContainer({
  children,
  showVerticalLines = true,
  maxWidth = 1112,
  className = "",
}: GridContainerProps) {
  return (
    <div className={`min-h-screen bg-background text-foreground relative ${className}`}>
      {/* Vertical Grid Lines */}
      {showVerticalLines && (
        <div className="fixed inset-0 pointer-events-none z-[100]">
          <div
            className="h-full relative mx-auto"
            style={{ maxWidth: `${maxWidth}px` }}
          >
            <div
              className="absolute left-0 top-0 bottom-0 w-px bg-border"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-px bg-border"
            />
          </div>
        </div>
      )}

      {/* Content */}
      {children}
    </div>
  );
}
