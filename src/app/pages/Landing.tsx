import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { Problem } from "../components/Problem";
import { Solution } from "../components/Solution";
import { KeyInsights } from "../components/KeyInsights";
import { Footer } from "../components/Footer";

export function Landing() {
  return (
    <div className="min-h-screen bg-[#0B0E14]">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <KeyInsights />
      <Footer />
    </div>
  );
}
