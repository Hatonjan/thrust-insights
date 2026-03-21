import { AlertCircle, Database, TrendingUp } from "lucide-react";

export function Problem() {
  return (
    <section id="problem" className="py-24 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5C00]/20 to-[#00A3FF]/20 blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1657344956545-8f49e1b1f661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMG1pc3Npb24lMjBjb250cm9sJTIwZGF0YXxlbnwxfHx8fDE3NzQxMjE4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Data Analysis"
              className="relative rounded-lg shadow-2xl border border-[#94A3B8]/20"
            />
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-[#1A1F2B] border border-[#FF5C00]/30 rounded-full mb-6">
              <span className="text-[#FF5C00] text-sm font-semibold">THE DATA GAP</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-6">
              The Problem
            </h2>
            
            <p className="text-lg text-[#94A3B8] mb-8 leading-relaxed">
              Space is no longer a government monopoly; it is a data-driven frontier. However, raw launch telemetry is often fragmented and opaque. Investors and stakeholders lack a unified lens to see the true correlation between booster reusability, payload mass, and mission success.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-[#1A1F2B]/50 border border-[#94A3B8]/10 rounded-lg">
                <div className="p-2 bg-[#FF5C00]/10 rounded-lg">
                  <Database className="w-5 h-5 text-[#FF5C00]" />
                </div>
                <div>
                  <h4 className="text-[#F8FAFC] mb-1">Fragmented Data Sources</h4>
                  <p className="text-[#94A3B8] text-sm">Launch telemetry scattered across multiple platforms</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#1A1F2B]/50 border border-[#94A3B8]/10 rounded-lg">
                <div className="p-2 bg-[#00A3FF]/10 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-[#00A3FF]" />
                </div>
                <div>
                  <h4 className="text-[#F8FAFC] mb-1">Opaque Correlations</h4>
                  <p className="text-[#94A3B8] text-sm">Missing connections between reusability and cost-efficiency</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#1A1F2B]/50 border border-[#94A3B8]/10 rounded-lg">
                <div className="p-2 bg-[#10B981]/10 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-[#10B981]" />
                </div>
                <div>
                  <h4 className="text-[#F8FAFC] mb-1">Stakeholder Visibility Gap</h4>
                  <p className="text-[#94A3B8] text-sm">Investors need actionable insights, not raw numbers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
