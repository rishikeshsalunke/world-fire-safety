import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/Button";

const services = [
  {
    title: "Fire Extinguisher Supply & Refilling",
    description:
      "Supply of new fire extinguishers and professional refilling services to ensure readiness and safety compliance.",
    image: "/services/extinguisher.jpg",
  },
  {
    title: "Fire Hydrant System Installation",
    description:
      "Complete fire hydrant system design, installation, and maintenance for industrial and commercial premises.",
    image: "/services/hydrant.jpg",
  },
  {
    title: "Fire Alarm System",
    description:
      "Installation and maintenance of advanced fire alarm systems for early detection and protection.",
    image: "/services/alarm.jpg",
  },
  {
    title: "Fire NOC & Form B",
    description:
      "Assistance with Fire NOC, Form B documentation, and safety compliance approvals.",
    image: "/services/noc.jpg",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-primary uppercase text-xs md:text-sm">
            Our Services
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 md:mb-6">
            Fire Safety Solutions You Can Trust
          </h2>

          <p className="text-sm md:text-base text-foreground/80">
            Professional fire protection services for homes, offices, and industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">

          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl md:rounded-2xl border border-border shadow-sm hover:-translate-y-1 transition-all"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 md:h-56 object-cover"
              />

              {/* Content */}
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">

                <h3 className="text-base md:text-xl font-semibold text-foreground">
                  {service.title}
                </h3>

                <p className="text-xs md:text-sm text-foreground/70 leading-relaxed">
                  {service.description}
                </p>

                <Button
                  size="sm"
                  className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Enquire Now <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
                </Button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
