import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/Button";

const products = [
  {
    name: "ABC Powder Fire Extinguisher",
    description:
      "Multipurpose extinguisher ideal for Class A, B & C fires. Suitable for homes, offices & factories.",
    image: "/products/extinguisher.jpg",
    category: "Extinguishers",
    size: "1kg – 9kg",
  },
  {
    name: "CO₂ Fire Extinguisher",
    description:
      "Perfect for electrical fires and server rooms. Leaves no residue after discharge.",
    image: "/products/co2.jpg",
    category: "Extinguishers",
    size: "2kg – 25kg",
  },
  {
    name: "Fire Hydrant System",
    description:
      "Complete hydrant installation with pumps, hose reels, landing valves & piping network.",
    image: "/products/hydrant.jpg",
    category: "Hydrant System",
    size: "Custom Setup",
  },
  {
    name: "Fire Alarm System",
    description:
      "Addressable & conventional alarm panels with smoke detectors and manual call points.",
    image: "/products/alarm.jpg",
    category: "Alarm System",
    size: "Panel Based",
  },
  {
    name: "Kitchen Suppression System",
    description:
      "Automatic fire suppression for commercial kitchens with hood & duct protection.",
    image: "/products/kitchen.jpg",
    category: "Suppression",
    size: "Auto System",
  },
  {
    name: "Safety Accessories",
    description:
      "Fire buckets, emergency lights, exit signs, safety cones & personal protective equipment.",
    image: "/products/image.png",
    category: "Accessories",
    size: "Multiple",
  },
];


export const Products = () => {
  return (
    <section id="products" className="py-20 md:py-32 relative overflow-hidden">

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-primary uppercase text-xs md:text-sm font-medium tracking-wider">
            Our Products
          </span>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 md:mb-6">
            Reliable Fire Safety Products
          </h2>

          <p className="text-xs md:text-base text-foreground/80">
            High quality fire protection equipment designed to keep your people and property safe.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">

          {products.map((product, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl md:rounded-2xl border
               border-border shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300">


              {/* Category */}
              <span className="absolute top-2 md:top-4 left-2 md:left-4 z-10 px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs rounded-full bg-primary/10 text-primary">
                {product.category}
              </span>

              {/* Image */}
              < div className="relative h-40 md:h-64 overflow-hidden" >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain bg-white p-2 md:p-4 rounded-t-xl md:rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-3 md:p-6 flex flex-col h-full">

                <h3 className="text-sm md:text-lg font-semibold text-foreground group-hover:text-primary transition">
                  {product.name}
                </h3>

                <p className="text-[10px] md:text-sm text-foreground/70 leading-relaxed mt-2">
                  {product.description}
                </p>

                <span className="text-[10px] md:text-xs text-primary block mt-2">
                  Available: {product.size}
                </span>

                {/* Push button to bottom
                <Button
                  size="sm"
                  className="w-full text-[10px] md:text-sm py-1.5 md:py-2 mt-auto"
                  onClick={() => window.open("https://wa.me/91XXXXXXXXXX")}

                >
                  Get Quote
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" />
                </Button> */}

              </div>

            </div>
          ))}

        </div>
      </div >
    </section >
  );
};
