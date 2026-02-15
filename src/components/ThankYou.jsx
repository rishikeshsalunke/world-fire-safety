import { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    setTimeout(() => {
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-11464426889/0DR3CJmSn_kbEImL1doq'
        });
        console.log("Google Ads conversion fired");
      } else {
        console.log("gtag not found");
      }
    }, 1000); // wait 1 second
  }, []);

  return (
    <div>
      <h1>Thank You!</h1>
      <p>Your form has been submitted successfully.</p>
    </div>
  );
}
