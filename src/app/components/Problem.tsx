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
              src="../src/assets/img/problem.png"
              alt="Data Analysis"
              className="relative rounded-lg shadow-2xl border border-[#94A3B8]/20"
            />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-6">
              The Problem
            </h2>
            
            <p className="text-lg text-[#94A3B8] mb-12 leading-relaxed">
              As the world’s first orbital-class reusable rocket, the Falcon 9 allows SpaceX to recover and launch flight-proven hardware, significantly reducing the cost of space access. However, raw launch telemetry remains fragmented and opaque. Investors and stakeholders lack a unified lens to visualize the critical correlations between booster reusability, payload mass, and mission success.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-[#1A1F2B]/50 border border-[#94A3B8]/10 rounded-lg">
                <div className="p-2 bg-[#FF5C00]/10 rounded-lg">
                  <Database className="w-5 h-5 text-[#FF5C00CC]" />
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
