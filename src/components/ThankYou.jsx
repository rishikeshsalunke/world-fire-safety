import { useEffect } from "react";
import { Flame } from "lucide-react";

export default function ThankYou() {
  useEffect(() => {
    setTimeout(() => {
      if (window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-11464426889/0DR3CJmSn_kbEImL1doq",
        });
      }
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">

      {/* Logo */}
      <a href="/" className="flex items-center gap-3 mb-6 font-bold text-xl">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Flame className="text-orange-500 w-6 h-6" />
        </div>

        <span>
          WORLD <span className="text-secondary">FIRE</span>
          <span className="block text-xs tracking-widest text-muted-foreground">
            SAFETY SYSTEM
          </span>
        </span>
      </a>

      {/* Message */}
      <h1 className="text-2xl md:text-3xl font-semibold mb-2">
        Thank You!
      </h1>

      <p className="text-muted-foreground max-w-md mb-6">
        Your enquiry has been sent successfully. Our team will contact you shortly.
      </p>

      {/* Back Home Button */}
      <a
        href="/"
        className="px-6 py-3 rounded-lg bg-primary text-white hover:opacity-90 transition"
      >
        Back to Home
      </a>

    </div>
  );
}
