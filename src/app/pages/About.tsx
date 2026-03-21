import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Rocket, Target, Users, Lightbulb } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen bg-[#0B0E14]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-[#1A1F2B] border border-[#FF5C00]/30 rounded-full mb-6">
            <span className="text-[#FF5C00] text-sm font-semibold">ABOUT THE PROJECT</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#F8FAFC] mb-6">
            About Thrust Insights
          </h1>
          <p className="text-xl text-[#94A3B8] leading-relaxed">
            A comprehensive data science initiative to decode the economics of reusable spaceflight through the lens of SpaceX's Falcon-9 program.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">Our Mission</h2>
              <p className="text-[#94A3B8] leading-relaxed mb-4">
                Thrust Insights was created to explore a fundamental question: How has reusability transformed the economics of spaceflight?
              </p>
              <p className="text-[#94A3B8] leading-relaxed mb-4">
                By aggregating and analyzing over a decade of launch telemetry, mission outcomes, and cost data, we've created a comprehensive analytical framework that reveals the true impact of the Falcon-9 program.
              </p>
              <p className="text-[#94A3B8] leading-relaxed">
                Our findings provide investors, researchers, and space enthusiasts with unprecedented clarity on the inflection point where reusable rockets became not just viable, but economically transformative.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1720214661177-2c975f7824b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZXglMjBmYWxjb24lMjByb2NrZXQlMjBsYXVuY2h8ZW58MXx8fHwxNzc0MTIxODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Falcon-9 Rocket"
                className="rounded-lg shadow-2xl border border-[#94A3B8]/20"
              />
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-lg p-6 text-center">
              <div className="inline-flex p-3 bg-[#FF5C00]/10 rounded-lg mb-4">
                <Target className="w-6 h-6 text-[#FF5C00]" />
              </div>
              <h3 className="text-[#F8FAFC] font-semibold mb-2">Data-Driven</h3>
              <p className="text-[#94A3B8] text-sm">
                Every conclusion backed by rigorous statistical analysis
              </p>
            </div>

            <div className="bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-lg p-6 text-center">
              <div className="inline-flex p-3 bg-[#00A3FF]/10 rounded-lg mb-4">
                <Lightbulb className="w-6 h-6 text-[#00A3FF]" />
              </div>
              <h3 className="text-[#F8FAFC] font-semibold mb-2">Insightful</h3>
              <p className="text-[#94A3B8] text-sm">
                Transforming raw data into actionable intelligence
              </p>
            </div>

            <div className="bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-lg p-6 text-center">
              <div className="inline-flex p-3 bg-[#10B981]/10 rounded-lg mb-4">
                <Users className="w-6 h-6 text-[#10B981]" />
              </div>
              <h3 className="text-[#F8FAFC] font-semibold mb-2">Accessible</h3>
              <p className="text-[#94A3B8] text-sm">
                Complex analytics presented with clarity
              </p>
            </div>

            <div className="bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-lg p-6 text-center">
              <div className="inline-flex p-3 bg-[#FF5C00]/10 rounded-lg mb-4">
                <Rocket className="w-6 h-6 text-[#FF5C00]" />
              </div>
              <h3 className="text-[#F8FAFC] font-semibold mb-2">Forward-Thinking</h3>
              <p className="text-[#94A3B8] text-sm">
                Predictive models for the future of spaceflight
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#0B0E14] to-[#1A1F2B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#F8FAFC] mb-8 text-center">Methodology</h2>
          
          <div className="space-y-6">
            <div className="bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3">Data Collection</h3>
              <p className="text-[#94A3B8]">
                Aggregated launch data from public SpaceX APIs, NASA databases, and verified third-party sources spanning 2010-2026.
              </p>
            </div>

            <div className="bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3">Statistical Modeling</h3>
              <p className="text-[#94A3B8]">
                Applied Python-based analytics using pandas for data manipulation, NumPy for numerical processing, and scikit-learn for predictive modeling.
              </p>
            </div>

            <div className="bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3">Visualization Framework</h3>
              <p className="text-[#94A3B8]">
                Created interactive dashboards using Plotly to reveal trends in cost-per-kilogram, success rates, and booster recovery efficiency over time.
              </p>
            </div>

            <div className="bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3">Validation</h3>
              <p className="text-[#94A3B8]">
                Cross-referenced findings with industry reports, academic papers, and official SpaceX disclosures to ensure accuracy and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
            Ready to Explore the Data?
          </h2>
          <p className="text-[#94A3B8] mb-8">
            Dive into the insights and discover how reusability is reshaping the space industry.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-4 bg-[#FF5C00] text-[#F8FAFC] rounded-lg hover:bg-[#FF5C00]/90 transition-all transform hover:scale-105"
          >
            View Key Insights
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
