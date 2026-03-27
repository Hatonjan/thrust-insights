import { Link, useNavigate, useLocation } from "react-router";

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSectionClick = (sectionId: string) => {
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
          <button onClick={() => handleSectionClick("hero")} className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
            {/* <Rocket className="w-6 h-6 text-[#FF5C00]" /> */}
            <figure>
              <img className="logo" src="/src/assets/img/logo.png" alt="The logo of the website" />
            </figure>
            <span className="text-xl font-semibold text-[#F8FAFC]">Thrust Insights</span>
            
          </button>

          {/* Navigation Links */}
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

          {/* Github repo link */}
          <a
            href="https://github.com/Hatonjan"
            target="_blank"
            className="flex  px-6 py-2 bg-transparent border-2 border-[#00A3FF] text-[#F8FAFC] rounded-lg hover:bg-[#00A3FF]/90 transition-colors">
            <figure>
              <img className="repo-icon" src="/src/assets/img/github-repo.png" alt="The icon of the Github repositories" />
            </figure>
            Analysis Repo
          </a>
        </div>
      </div>
    </nav>
  );
}
