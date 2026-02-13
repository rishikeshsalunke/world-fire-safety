import { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {

    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-11464426889/w-ynCOP4nY4ZEImL1doq'
      });
    }
  }, []);

  return (
    <div>
      <h1>Thank You!</h1>
      <p>Your form has been submitted successfully.</p>
    </div>
  );
}
