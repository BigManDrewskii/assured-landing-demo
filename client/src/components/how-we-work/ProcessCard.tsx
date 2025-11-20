import { Network, Eye, Target } from "lucide-react";

interface ProcessCardProps {
  icon: "network" | "eye" | "target";
  title: string;
  description: string;
}

const ICONS = {
  network: Network,
  eye: Eye,
  target: Target,
};

/**
 * ProcessCard - Individual process step card with icon
 */
export function ProcessCard({ icon, title, description }: ProcessCardProps) {
  const Icon = ICONS[icon];

  return (
    <div className="p-6 md:p-8 bg-primary text-primary-foreground group hover:shadow-lg transition-all duration-200 md:hover:-translate-y-1">
      {/* Icon */}
      <div className="mb-4 md:mb-6">
        <Icon className="w-10 h-10 md:w-12 md:h-12 opacity-90 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{title}</h3>

      {/* Description */}
      <p className="text-sm md:text-base leading-relaxed opacity-90">{description}</p>
    </div>
  );
}
