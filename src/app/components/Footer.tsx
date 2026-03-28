import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";
import { useEffect } from "react";



export function Footer() {
  useEffect(() => {
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear().toString();
    }
  }, []);

  return (
    <footer className="bg-[#1A1F2B] border-t border-[#94A3B8]/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Brand */}
          <div>
            <div className="flex flex-col items-center gap-2 mb-4">
              <figure>
                <img className="logo" src="/assets/img/logo.png" alt="The logo of the website" />
              </figure>
              <span className="text-xl font-semibold text-[#F8FAFC]">Thrust Insights</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#F8FAFC] mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-[#94A3B8] hover:text-[#00A3FF] transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-[#94A3B8] hover:text-[#00A3FF] transition-colors text-sm">
                About
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#F8FAFC] mb-4">Connect</h4>
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/Hatonjan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#00A3FF] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/jonathan-sc0tt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#00A3FF] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:jonathan@mjscott.dev"
                className="text-[#94A3B8] hover:text-[#00A3FF] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-[#94A3B8]/20">
          <p className="text-[#94A3B8] text-sm text-center">
            © <span id="year"></span> Thrust Insights Analytics. All rights reserved.
          </p>
          <p className="text-[#94A3B8] text-sm text-center mt-5">
            This project is an <b>independent analysis</b> based on publicly available telemetry. Statistics are for portfolio purposes and may differ from official SpaceX records. <b>Not affiliated with SpaceX.</b>
          </p>
        </div>
      </div>
    </footer>
  );
}
