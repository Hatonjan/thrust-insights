import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-shown">
      {/* Background Image with Overlay */}
      <div  className="absolute inset-0 z-0">
        <img
          src="/src/assets/img/hero.png"
          alt="Falcon-9 rocket landing"
          className="w-full h-full object-cover"
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl md:text-7xl font-bold text-[#F8FAFC] mb-6 leading-tight">
          Boosting the Space Race with Data Science
        </h1>
        <p className="text-xl md:text-2xl text-[#94A3B8] mb-12 max-w-3xl mx-auto">
          A deep dive into SpaceX launch telemetry to quantify the cost-efficiency of first-stage booster reusability.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("problem")}
            className="px-8 py-4 bg-[#FF5C00] text-[#F8FAFC] rounded-lg hover:bg-[#FF5C00]/90 transition-all transform hover:scale-105"
          >
            Explore the Challenge
          </button>
        
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("problem")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-[#94A3B8]" />
      </button>
    </section>
  );
}
