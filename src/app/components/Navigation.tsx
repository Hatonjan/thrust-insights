import { Link, useNavigate, useLocation } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSectionClick = (sectionId: string) => {
    setMobileMenuOpen(false); // Close mobile menu
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Small delay to ensure page renders before scrolling
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      // Already on home page, scroll directly
      scrollToSection(sectionId);
    }
  }; 

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1F2B]/95 backdrop-blur-sm border-b border-[#94A3B8]/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleSectionClick("hero")} className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0 mr-auto">
            <figure>
              <img 
              className="logo" 
              src="/src/assets/img/logo.png" 
              alt="The logo of the website" />
            </figure>
            <span className="text-xl font-semibold text-[#F8FAFC]">Thrust Insights</span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleSectionClick("hero")}
              className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors font-semibold"
            >
              Home
            </button>
            <button
              onClick={() => handleSectionClick("problem")}
              className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
            >
              The Problem
            </button>
            <button
              onClick={() => handleSectionClick("solution")}
              className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
            >
              The Solution
            </button>
            <button
              onClick={() => handleSectionClick("insights")}
              className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
            >
              Key Insights
            </button>
            <Link
              to="/dashboard"
              className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/about"
              className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
            >
              About
            </Link>
          </div>

          <div className="flex items-center gap-2 md:gap-4 ml-auto flex-shrink-0">
            {/* Github repo Button */}
            <a
              href="https://github.com/Hatonjan"
              target="_blank"
              className="hidden sm:flex px-6 py-2 bg-transparent border-2 border-[#00A3FF] text-[#F8FAFC] rounded-lg hover:bg-[#00A3FF]/90 transition-colors flex-shrink-0">
              <figure>
                <img className="repo-icon" src="/src/assets/img/github-repo.png" alt="The icon of the Github repositories" />
              </figure>
              Analysis Repo
            </a>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#F8FAFC] hover:bg-[#94A3B8]/20 rounded-lg transition-colors flex-shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#94A3B8]/20 pt-4">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleSectionClick("hero")}
                className="text-left px-4 py-2 text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#94A3B8]/10 rounded-lg transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleSectionClick("problem")}
                className="text-left px-4 py-2 text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#94A3B8]/10 rounded-lg transition-colors"
              >
                The Problem
              </button>
              <button
                onClick={() => handleSectionClick("solution")}
                className="text-left px-4 py-2 text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#94A3B8]/10 rounded-lg transition-colors"
              >
                The Solution
              </button>
              <button
                onClick={() => handleSectionClick("insights")}
                className="text-left px-4 py-2 text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#94A3B8]/10 rounded-lg transition-colors"
              >
                Key Insights
              </button>
              <Link
                to="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left px-4 py-2 text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#94A3B8]/10 rounded-lg transition-colors block"
              >
                Dashboard
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left px-4 py-2 text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#94A3B8]/10 rounded-lg transition-colors block"
              >
                About
              </Link>
              <a
                href="https://github.com/Hatonjan"
                target="_blank"
                className="flex sm:hidden px-4 py-2 text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#94A3B8]/10 rounded-lg transition-colors"
              >
                <figure>
                  <img className="repo-icon" src="/src/assets/img/github-repo.png" alt="The icon of the Github repositories" />
                </figure>
                Analysis Repo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
