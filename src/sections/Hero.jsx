import { Button } from "@/components/Button";
import {
  ArrowRight,
  Instagram,
  Download,
  Youtube,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";



export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      Bg
      <div className="absolute inset-0">
        {/* <img
          // src="/fire-safety-hero.jpg"
          alt="Fire Safety"
          className="w-full h-full object-cover opacity-80"
        /> */}
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />

      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#fffff",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20
                }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 pt-32 md:pt-45 pb-16 md:pb-20 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-1 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 pr-4">


            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight animate-fade-in animation-delay-100">
                Ensuring <span className="text-primary">Fire Safety</span>
                <br />
                experiences with
                <br />
                For Your <span className="font-serif italic font-normal text-foreground">Business & Home</span>
              </h1>
              <p className="text-xs md:text-base text-muted-foreground max-w-md animate-fade-in animation-delay-200">
                WORLD FIRE SAFETY SYSTEM provides top-notch fire safety equipment, training, and solutions to protect lives and property. Trust us for your safety needs.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-2 md:gap-4 animate-fade-in animation-delay-300">

              <Button
                size="sm"
                className="md:size-lg text-xs md:text-base px-4 md:px-6 py-2 md:py-3"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Us <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Button>

              <a href="/WFSS-Brochure.pdf" download>
                <AnimatedBorderButton className="text-[10px] sm:text-xs md:text-base px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3">
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />

                  {/* Mobile text */}
                  <span className="sm:hidden text-sm">Brochure</span>

                  {/* Desktop text */}
                  <span className="hidden sm:inline">Download Brochure</span>
                </AnimatedBorderButton>
              </a>

            </div>


            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className=" md:block text-sm text-muted-foreground">Follow us:</span>
              {[
                { icon: Instagram, href: "https://www.instagram.com/w_f_s_s?utm_source=qr&igsh=bXpxcGI0ajhhMmV6" },
                { icon: Youtube, href: "#" },
                // { icon: Twitter, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-secondary-foreground transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>

          </div>
          {/* Right Column - */}
          <div className="relative -mt-60 md:-mt-5 lg:mt-0 animate-fade-in animation-delay-300">
            {/* Profile video */}
            <div className="relative w-full max-w-xs md:max-w-sm ml-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl a  nimate-pulse"
              />
              <div className="relative glass rounded-3xl p-1 glow-border">
                {/* <video
                  src="/fire-safety-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-3/4 md:aspect-4/5 object-cover rounded-2xl"
                /> */}

                <img
                  src="/fire-safety-hero.jpg"
                  alt="Fire Safety Demo"
                  className="w-full aspect-3/4 md:aspect-4/5 object-cover rounded-2xl"
                />




                {/* Floating Badge */}
                <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 glass rounded-lg md:rounded-xl px-3 py-2 md:px-4 md:py-3 animate-float">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs md:text-sm text-foreground font-medium">
                      Trusted Provider
                    </span>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};