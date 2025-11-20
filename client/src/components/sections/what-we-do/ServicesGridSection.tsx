import { Section } from "@/components/layout/Section";

interface Service {
  title: string;
  description: string;
}

interface ServicesGridSectionProps {
  title: string;
  services: Service[];
  maxWidth?: number;
}

/**
 * ServicesGridSection - 6-card grid displaying services
 */
export function ServicesGridSection({
  title,
  services,
  maxWidth = 1112,
}: ServicesGridSectionProps) {
  return (
    <Section number="03" showPatterns="both">
      <div className="mx-auto" style={{ maxWidth: `${maxWidth}px` }}>
        {/* Header */}
        <div className="text-center px-8 py-16 border-b border-border">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h2>
        </div>

        {/* Services Grid - 3 columns x 2 rows */}
        <div className="grid md:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={`service-${idx}`}
              className={`p-10 py-16 border-border group hover:bg-primary/5 transition-colors ${
                idx < 3 ? "border-b" : ""
              } ${
                idx % 3 !== 2 ? "border-r" : ""
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-base text-muted-foreground/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
