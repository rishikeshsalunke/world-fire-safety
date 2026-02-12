import { Users, Lightbulb, Rocket, Code2 } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Trusted Provider",
    description:
      "WORLD FIRE SAFETY SYSTEM is a leading provider of fire safety products and solutions, trusted by businesses and homes.",
  },
  {
    icon: Rocket,
    title: "Comprehensive Services",
    description:
      "We offer installation, refilling, maintenance, and supply of fire extinguishers, hydrant systems, alarms, and more.",
  },
  {
    icon: Lightbulb,
    title: "Expert Team",
    description:
      "Our team of skilled professionals ensures high-quality solutions tailored to your safety needs.",
  },
  {
    icon: Code2,
    title: "Innovation & Safety",
    description:
      "We continuously introduce innovative fire safety products, ensuring protection, compliance, and peace of mind.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Us
              </span>
            </div>

            <h2 className="text-4xl md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100 text-primary">
              WORLD FIRE SAFETY SYSTEM
              <span className="font-serif italic font-normal text-secondary">
                {" "}
                Fire Safety Experts for Your Business & Home
              </span>
            </h2>

            <div className="space-y-4 text-sm text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                WORLD FIRE SAFETY SYSTEM is a leading provider of design, supply, installation, testing, and commissioning of fire & safety systems. We manufacture and supply fire extinguisher spare parts and offer complete fire safety solutions.
              </p>
              <p>
                Our services include fire extinguisher refilling, installation and maintenance of fire hydrant systems, fire alarms, obtaining Fire NOCs, and Form B compliance. With a team of skilled professionals, we ensure top-quality, reliable solutions for every client.
              </p>
              <p>
                Committed to integrity, excellence, and continuous improvement, we provide innovative products and services that protect lives, property, and the environment.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 shadow-sm border border-border animate-fade-in animation-delay-300">
              <p className="text-sm font-medium italic text-foreground">
                "Our mission is to ensure a safer world through innovation, education, and excellence in fire protection and safety solutions."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-xs md:text-sm text-foreground/70">
                  {item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
