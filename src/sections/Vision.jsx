import { Target, Eye } from "lucide-react";

export const Vision = () => {
  return (
    <section id="vision" className="py-20 md:py-32 relative overflow-hidden">

      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-secondary-foreground uppercase text-xs md:text-sm">
            Our Purpose
          </span>

          <h2 className="text-2xl md:text-4xl font-bold mt-3 mb-4">
            Vision & Mission
          </h2>

          <p className="text-muted-foreground text-xs md:text-base">
            Dedicated to protecting lives and property through reliable fire safety solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {/* Vision */}
          <div className="glass rounded-2xl p-6 md:p-10 text-center hover:-translate-y-1 transition">

            <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-primary" />
            </div>

            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Our Vision
            </h3>

            <p className="text-[11px] md:text-sm text-muted-foreground leading-relaxed">
              To become a trusted leader in fire safety services by creating safer
              environments for homes, businesses, and industries through quality
              products and dependable support.
            </p>

          </div>

          {/* Mission */}
          <div className="glass rounded-2xl p-6 md:p-10 text-center hover:-translate-y-1 transition">

            <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>

            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Our Mission
            </h3>

            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              To provide professional fire protection services including extinguishers,
              hydrant systems, alarms, and Fire NOC assistance while delivering fast
              response, honest guidance, and complete customer satisfaction.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
