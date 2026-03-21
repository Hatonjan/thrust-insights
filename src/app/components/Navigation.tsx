import { Link } from "react-router";
import { Rocket } from "lucide-react";

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1F2B]/95 backdrop-blur-sm border-b border-[#94A3B8]/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Rocket className="w-6 h-6 text-[#FF5C00]" />
            <span className="text-xl font-semibold text-[#F8FAFC]">Thrust Insights</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("problem")}
              className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
            >
              The Problem
            </button>
            <button
              onClick={() => scrollToSection("solution")}
              className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
            >
              The Solution
            </button>
            <button
              onClick={() => scrollToSection("insights")}
              className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
            >
              Key Insights
            </button>
            <Link
              to="/about"
              className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
            >
              About
            </Link>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection("insights")}
            className="hidden md:block px-6 py-2 bg-[#FF5C00] text-[#F8FAFC] rounded-lg hover:bg-[#FF5C00]/90 transition-colors"
          >
            View Insights
          </button>
        </div>
      </div>
    </nav>
  );
}
