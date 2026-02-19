import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { Products } from "@/sections/Products";
import { Spares } from "@/sections/Spares";
import { Vision } from "@/sections/Vision";
import { Contact } from "@/sections/Contact";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import ThankYou from "@/components/ThankYou"; // import your ThankYou component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen overflow-x-hidden">
              <Navbar />
              <main>
                <Hero />
                <About />
                <Services />
                <Products />
                <Spares />
                <Vision />
                <Contact />
              </main>
              <Footer />
            </div>
          }
        />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
