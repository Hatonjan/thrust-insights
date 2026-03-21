import { Rocket, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-[#1A1F2B] border-t border-[#94A3B8]/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="w-6 h-6 text-[#FF5C00]" />
              <span className="text-xl font-semibold text-[#F8FAFC]">Thrust Insights</span>
            </div>
            <p className="text-[#94A3B8] text-sm">
              Decoding the economics of the new space race through data-driven insights.
            </p>
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
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#00A3FF] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#00A3FF] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
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
            © 2026 Thrust Insights Analytics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
