import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Database, BarChart3, Eye} from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen bg-[#0B0E14]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#F8FAFC] mb-6">
            About Thrust Insights
          </h1>
          <p className="text-xl text-[#F8FAFC]/80 leading-relaxed">
            A comprehensive analysis of reusable spaceflight through the lens of SpaceX's Falcon-9 program.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            
            <div>
                <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">The Mission</h2>
                <p className="text-[#94A3B8] leading-relaxed mb-4">
                  <strong>Thrust Insights</strong> was created to explore a fundamental question:&nbsp;  
                  <span className="text-[#F8FAFC]/85 font-semibold">
                    <em>How has reusability transformed the economics of spaceflight?</em>
                  </span>
                </p>
                <p className="text-[#94A3B8] leading-relaxed mb-4">
                  By analyzing over ten years of launch telemetry, I’ve developed a framework 
                  that reveals the true impact of the Falcon 9 program.
                </p>
                <p className="text-[#94A3B8] leading-relaxed mb-4">
                  These findings provide clarity on the inflection point where 
                  <strong> reusable rockets became not just viable, but economically transformative.</strong>
                </p>
              </div>

            <div className="relative">
              <img
                src="src/assets/img/launch.png"
                alt="Falcon-9 Rocket"
                className="rounded-sm shadow-2xl border border-[#94A3B8]/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-b from-[#0B0E14] to-[#1A1F2B]">
          <h2 className="text-3xl font-bold text-[#F8FAFC] mb-8 text-center">Methodology</h2>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Data Collection card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF5C00]/10 to-transparent blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative p-8 bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-sm hover:border-[#FF5C00]/50 transition-all h-75">
                <div className="inline-flex p-3 bg-[#FF5C00]/10 rounded-sm mb-4">
                  <Database className="w-6 h-6 text-[#FF5C00]" />
                </div>
                <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3">
                  Data Collection
                </h3>
                <p className="text-[#94A3B8]">
                  Aggregated over 15 years of mission telemetry via <strong>REST APIs</strong> and <strong>BeautifulSoup</strong> web scraping to reconstruct historical records, which were then structured into a <strong>JSON</strong> format for this project.
                </p>
              </div>
            </div>

            {/* Statistical modeling card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00A3FF]/10 to-transparent blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative p-8 bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-sm hover:border-[#00A3FF]/50 transition-all h-75">
                <div className="inline-flex p-3 bg-[#00A3FF]/10 rounded-sm mb-4">
                  <Eye className="w-6 h-6 text-[#00A3FF]" />
                </div>
                <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3">
                  Statistical Modeling
                </h3>
                <p className="text-[#94A3B8]">
                  Utilized <strong>Jupyter Notebooks</strong> and <strong>Pandas</strong> for Exploratory Data Analysis (EDA). Applied <strong>Scikit-learn</strong> to develop predictive models, transforming raw telemetry into clear success probabilities for booster recovery.
                </p>
              </div>
            </div>

            {/* Visualization Framework card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/10 to-transparent blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative p-8 bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-sm hover:border-[#10B981]/50 transition-all h-75">
                <div className="inline-flex p-3 bg-[#10B981]/10 rounded-sm mb-4">
                  <BarChart3 className="w-6 h-6 text-[#10B981]" />
                </div>
                <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3">
                  Visualization Framework
                </h3>
                <p className="text-[#94A3B8]">
                  Developed exploratory visualizations with <strong>Matplotlib</strong> and <strong>Seaborn.</strong> Including analysis of launch site logistics with <strong>Folium.</strong> These insights were then transformed into an interactive dashboard built with <strong>React</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Validation card */}
          <div className="p-6 max-w-6xl mx-auto">
            <p className="text-[#94A3B8]">
              Project metrics were cross-referenced against industry reports, academic papers, and official SpaceX disclosures to ensure the highest degree of reliability.
            </p>
          </div>

      </section>

      {/* Call to Action */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
            Ready to Explore the Data?
          </h2>
          <p className="text-[#94A3B8] mb-8">
            Dive into the interactive dashboard and discover how reusability is reshaping the space industry.
          </p>
          <a
            href="/dashboard"
            className="inline-block px-8 py-4 bg-[#FF5C00] text-[#F8FAFC] rounded-sm hover:bg-[#FF5C00]/90 transition-all transform hover:scale-105"
          >
            Dashboard
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
