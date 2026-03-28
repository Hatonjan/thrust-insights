import { Code, BarChart3, Eye, ArrowRight } from "lucide-react";

export function Solution() {
  return (
    <section id="solution" className="py-24 bg-gradient-to-b from-[#0B0E14] to-[#1A1F2B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-6">
            The Solution
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-4xl mx-auto leading-relaxed mb-8">
            By applying statistical modeling and interactive visualizations, this project strips away the complexity into a clear, narrative on how reusability is transforming spaceflight economics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_0.125fr_2fr] gap-0 md:gap-4 mb-12  items-center">
            <figure>
              <img 
              src="/assets/img/solutionR.png" 
              alt="A falcon-9 rocket landing" 
              className="relative rounded-sm w-full h-56 md:h-96"
              />
            </figure>
            <h2 className="flex items-center justify-center text-4xl font-bold text-[#FF5C00] rotate-90 md:rotate-0">
              →
            </h2>
            <figure>
              <img 
              src="/assets/img/spacex-valuation.png" 
              alt="A graph showing the decrease in cost per kilogram thanks to the firs stage reusability" 
              className="relative rounded-sm w-full h-56 md:h-96" 
              />
            </figure>
          </div>      
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5C00]/10 to-transparent blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative p-8 bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-sm hover:border-[#FF5C00]/50 transition-all">
              <div className="inline-flex p-3 bg-[#FF5C00]/10 rounded-sm mb-4">
                <Code className="w-6 h-6 text-[#FF5C00]" />
              </div>
              <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3">
                Python-Powered Analytics
              </h3>
              <p className="text-[#94A3B8]">
                Advanced statistical modeling to process years of launch data.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00A3FF]/10 to-transparent blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative p-8 bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-sm hover:border-[#00A3FF]/50 transition-all">
              <div className="inline-flex p-3 bg-[#00A3FF]/10 rounded-sm mb-4">
                <BarChart3 className="w-6 h-6 text-[#00A3FF]" />
              </div>
              <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3">
                Interactive Visualizations
              </h3>
              <p className="text-[#94A3B8]">
                Intuitive visualizations that reveal trends in cost-efficiency and mission success rates.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/10 to-transparent blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative p-8 bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-sm hover:border-[#10B981]/50 transition-all">
              <div className="inline-flex p-3 bg-[#10B981]/10 rounded-sm mb-4">
                <Eye className="w-6 h-6 text-[#10B981]" />
              </div>
              <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3">
                Predictive Narrative
              </h3>
              <p className="text-[#94A3B8]">
                Transform raw telemetry into actionable insights that quantify reusability efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Showcase */}
        <div className="relative mt-16">
          <div className="absolute inset-0 bg-gradient-to-t from-[#FF5C00]/20 via-transparent to-[#00A3FF]/20 blur-3xl"></div>
          <div className="relative">
            <img
              src="/assets/img/launch.png"
              alt="Satellite in Orbit"
              className="w-full h-full rounded-sm shadow-2xl mb-44 md:mb-0 border border-[#94A3B8]/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2B] to-transparent rounded-sm"></div>
            
            {/* Stats Overlay */}
            <div className="absolute top-48 md:top-auto md:bottom-8 left-8 right-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">

                <div className="bg-[#0B0E14]/80 backdrop-blur-sm p-2 md:p-4 rounded-sm border border-[#94A3B8]/20">
                  <div className="text-[#FF5C00] text-3xl font-bold">15+</div>
                  <div className="text-[#94A3B8] text-sm">Years of Data</div>
                </div>
                
                <div className="bg-[#0B0E14]/80 backdrop-blur-sm p-2 md:p-4 rounded-sm border border-[#94A3B8]/20">
                  <div className="text-[#00A3FF] text-3xl font-bold">475</div>
                  <div className="text-[#94A3B8] text-sm">Launches Analyzed</div>
                </div>
                
                <div className="bg-[#0B0E14]/80 backdrop-blur-sm p-2 md:p-4 rounded-sm border border-[#94A3B8]/20">
                  <div className="text-[#10B981] text-3xl font-bold">92.6%</div>
                  <div className="text-[#94A3B8] text-sm">Success Rate</div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
