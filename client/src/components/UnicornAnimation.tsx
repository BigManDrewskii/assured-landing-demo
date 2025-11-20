import UnicornScene from "unicornstudio-react";

type ValidFPS = 15 | 24 | 30 | 60 | 120;

interface UnicornAnimationProps {
  projectId?: string;
  jsonFilePath?: string;
  width?: number;
  height?: number;
  className?: string;
  scale?: number;
  dpi?: number;
  fps?: ValidFPS;
}

/**
 * Wrapper component for Unicorn Studio animations
 *
 * Usage Option 1 - Hosted Project:
 * 1. Create your animation at https://www.unicorn.studio/
 * 2. Export > Embed > Copy the project ID
 * 3. Use this component with your project ID
 *
 * Example:
 * <UnicornAnimation
 *   projectId="your-project-id-here"
 *   width={800}
 *   height={600}
 *   className="absolute inset-0"
 * />
 *
 * Usage Option 2 - JSON Export:
 * 1. Create your animation at https://www.unicorn.studio/
 * 2. Export > Code (JSON)
 * 3. Save the JSON file in the public directory
 * 4. Use this component with the JSON file path
 *
 * Example:
 * <UnicornAnimation
 *   jsonFilePath="/your-animation.json"
 *   className="absolute inset-0 pointer-events-none"
 * />
 */
export default function UnicornAnimation({
  projectId,
  jsonFilePath,
  width,
  height,
  className = "",
  scale,
  dpi,
  fps
}: UnicornAnimationProps) {
  return (
    <div className={className}>
      <UnicornScene
        projectId={projectId}
        jsonFilePath={jsonFilePath}
        width={width}
        height={height}
        scale={scale}
        dpi={dpi}
        fps={fps}
      />
    </div>
  );
}
