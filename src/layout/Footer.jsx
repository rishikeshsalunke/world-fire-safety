import { Phone, Mail, MapPin, Heart, Flame } from "lucide-react";

const services = [
  "Fire Extinguisher (New & Refilling)",
  "Fire Hydrant Installation",
  "Fire Hydrant Maintenance",
  "Fire Alarm System",
  "Fire NOC",
  "Form B",
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-16 md:pt-24 pb-8 md:pb-10 border-t border-primary/20 overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-72 h-72 md:w-150 md:h-75 bg-primary/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="grid gap-12 md:gap-16 lg:grid-cols-3">

          {/* Brand */}
          <div className="space-y-4 text-center lg:text-left">

            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Flame className="text-orange-400 w-5 h-5 md:w-6 md:h-6" />
              <h2 className="text-lg md:text-2xl font-bold">
                WORLD FIRE <span className="text-primary">SAFETY SYSTEM</span>
              </h2>
            </div>

            <p className="text-muted-foreground  text-xs md:text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
              Complete fire protection solutions including extinguisher supply,
              refilling, hydrant systems, alarms and Fire NOC assistance.
              Serving Ulhasnagar & nearby regions.
            </p>

          </div>

          {/* Services */}
          <div className="text-center lg:text-left">
            <h3 className="font-semibold mb-4 text-base md:text-lg">
              Our Services
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-1 gap-y-3 gap-5 text-xs md:text-sm text-muted-foreground">
              {services.map((item, i) => (
                <li key={i} className="hover:text-primary transition">
                  → {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-center lg:text-left">

            <h3 className="font-semibold text-base md:text-lg">
              Contact Details
            </h3>

            <div className="flex gap-3 items-start justify-center lg:justify-start">
              <MapPin className="w-4 h-4 text-primary mt-1" />
              <span className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                10 Chawl Area, Ramji Ambedkar Nagar,<br />
                Near Block A-298, Ulhasnagar,<br />
                Maharashtra 421004
              </span>
            </div>

            <a href="mailto:worldfire26@gmail.com" className="flex gap-3 items-center justify-center lg:justify-start">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-xs md:text-sm">
                worldfire26@gmail.com
              </span>
            </a>

            <a href="tel:+918796290451" className="flex gap-3 items-center justify-center lg:justify-start">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-xs md:text-sm">
                +91 8796290451
              </span>
            </a>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 md:mt-16 pt-4 md:pt-6 border-t border-border flex flex-col items-center gap-3 text-[10px] md:text-sm text-muted-foreground">

          <span className="text-center">
            © {year} WORLD FIRE SAFETY SYSTEM. All rights reserved.
          </span>

          <span className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 md:w-4 md:h-4 text-red-500" /> for a safer world
          </span>

        </div>

      </div>
    </footer>
  );
};
