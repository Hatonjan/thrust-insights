import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1720214661177-2c975f7824b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZXglMjBmYWxjb24lMjByb2NrZXQlMjBsYXVuY2h8ZW58MXx8fHwxNzc0MTIxODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Falcon-9 Launch"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14]/80 via-[#0B0E14]/90 to-[#0B0E14]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-[#F8FAFC] mb-6 leading-tight">
          Beyond the Smoke: Decoding the Economics of the New Space Race
        </h1>
        <p className="text-xl md:text-2xl text-[#94A3B8] mb-12 max-w-3xl mx-auto">
          An analytical deep-dive into SpaceX launch telemetry to identify the inflection point of orbital cost-efficiency.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("problem")}
            className="px-8 py-4 bg-[#FF5C00] text-[#F8FAFC] rounded-lg hover:bg-[#FF5C00]/90 transition-all transform hover:scale-105"
          >
            Explore the Challenge
          </button>
          <button
            onClick={() => scrollToSection("insights")}
            className="px-8 py-4 bg-transparent border-2 border-[#00A3FF] text-[#00A3FF] rounded-lg hover:bg-[#00A3FF]/10 transition-all"
          >
            Jump to Insights
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
