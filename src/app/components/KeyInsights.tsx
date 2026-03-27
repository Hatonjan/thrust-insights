import {
  TrendingUp,
  Recycle,
  Satellite,
  ArrowUpRight,
  DollarSign,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { projectData } from "../data/projectData";

interface DataType {
  project_metadata: {
    name: string;
    version: string;
    last_updated: string;
  };
  summary_stats: {
    total_launches: number;
    overall_success_rate: string;
    boosters_recovered: number;
    total_payload_mass_kg: number;
  };
  market_comparison: Array<{
    provider: string;
    cost_per_kg: number;
    reusability: boolean;
  }>;
  milestones: Array<{
    year: number;
    event: string;
  }>;
}

export function KeyInsights() {
  const data: DataType = projectData;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lastOpenTime, setLastOpenTime] = useState<number>(0);
  
  const handleSetSelectedImage = (imagePath: string) => {
    setSelectedImage(imagePath);
    setLastOpenTime(Date.now());
  };

  const costSavings =
    data.market_comparison[1].cost_per_kg -
    data.market_comparison[0].cost_per_kg;
  const costReduction = (
    (costSavings / data.market_comparison[1].cost_per_kg) *
    100
  ).toFixed(1);

  return (
    <section id="insights" className="py-24 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-6">
            Key Insights
          </h2>

          <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto">
            Powered by {data.project_metadata.name} v
            {data.project_metadata.version} — Last updated{" "}
            {data.project_metadata.last_updated}
          </p>
        </div>

        {/* Main Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Insight 1: Payload Evolution */}
          <div className="bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-sm overflow-hidden group hover:border-[#FF5C00]/50 transition-all">
            <div 
              className="overflow-hidden p-2 cursor-pointer"
              onClick={() => handleSetSelectedImage("/src/assets/img/payload-evolution.png")}
            >
              <img
                src="/src/assets/img/payload-evolution.png"
                alt="Satellite"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF5C00]/10 rounded-full mb-4">
                <Satellite className="w-4 h-4 text-[#FF5C00]" />
                <span className="text-[#FF5C00] text-sm font-semibold">
                  {(
                    data.summary_stats.total_payload_mass_kg /
                    1000000
                  ).toFixed(1)}
                  M kg
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-3">
                Payload Evolution
              </h3>
              <p className="text-[#94A3B8] mb-4">
                Tracking the surge in Starlink deployments vs.
                commercial satellite launches.
              </p>
              <p className="text-[#94A3B8] text-sm">
                The shift from traditional satellite missions to
                high-frequency Starlink constellation deployment
                demonstrates the new economics of space access.
              </p>
            </div>
          </div>

          {/* Insight 2: Reusability Dividend */}
          <div className="bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-sm overflow-hidden group hover:border-[#00A3FF]/50 transition-all">
            <div 
              className="overflow-hidden p-2 cursor-pointer"
              onClick={() => handleSetSelectedImage("/src/assets/img/spacex-cost-per-kg.png")}
            >
              <img
                src="/src/assets/img/spacex-cost-per-kg.png"
                alt="Booster Landing"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00A3FF]/10 rounded-full mb-4">
                <DollarSign className="w-4 h-4 text-[#00A3FF]" />
                <span className="text-[#00A3FF] text-sm font-semibold">
                  -{costReduction}%
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-3">
                The Reusability Dividend
              </h3>
              <p className="text-[#94A3B8] mb-4">
                Visualizing the plummeting costs as
                flight-proven boosters become the industry
                standard.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">
                    Falcon 9 (Reusable):
                  </span>
                  <span className="text-[#00A3FF] font-semibold">
                    ${data.market_comparison[0].cost_per_kg}/kg
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">
                    Traditional Expendable:
                  </span>
                  <span className="text-[#FF5C00] font-semibold">
                    ${data.market_comparison[1].cost_per_kg}/kg
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Insight 3: Reliability */}
          <div className="bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-sm overflow-hidden group hover:border-[#10B981]/50 transition-all">
            <div 
              className="overflow-hidden p-2 cursor-pointer"
              onClick={() => handleSetSelectedImage("/src/assets/img/success-rate.png")}
            >
              <img
                src="/src/assets/img/success-rate.png"
                alt="Falcon 9 Launch"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#10B981]/10 rounded-full mb-4">
                <TrendingUp className="w-4 h-4 text-[#10B981]" />
                <span className="text-[#10B981] text-sm font-semibold">
                  {data.summary_stats.overall_success_rate}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-3">
                Reliability at Scale
              </h3>
              <p className="text-[#94A3B8] mb-4">
                Mapping the transition from experimental phases
                to the current{" "}
                {data.summary_stats.overall_success_rate}{" "}
                success rate.
              </p>
              <p className="text-[#94A3B8] text-sm">
                From early test flights to consistent
                operational cadence, Falcon-9 has demonstrated
                unprecedented reliability in commercial
                spaceflight.
              </p>
            </div>
          </div>
          
        </div>

        {/* Milestones Timeline */}
        <div className="bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-sm p-8">
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-8 text-center">
            Historic Milestones
          </h3>
          <div className="grid auto-rows-fr md:grid-cols-4 gap-5 h-full relative">
            {data.milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col items-center justify-start gap-4 relative">
                
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#00A3FF]/10 flex items-center justify-center">
                    <span className="text-[#00A3FF] font-bold">
                      {milestone.year}
                    </span>
                  </div>
                </div>

                {index < data.milestones.length - 1 && (
                  <div className="absolute top-8 -right-31.5 w-58 h-0.25 bg-[#00A3FF]/20"></div>
                )}
                
                <div className="text-center">
                  <h4 className="text-[#F8FAFC] font-semibold mb-2">
                    {milestone.event}
                  </h4>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && selectedImage.length > 0 && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 pointer-events-auto"
          onClick={(e) => {
            // Only close if clicking directly on backdrop (not the modal content)
            // AND more than 50ms have passed since opening (prevents same click from opening and closing)
            if (e.currentTarget === e.target && Date.now() - lastOpenTime > 50) {
              setSelectedImage(null);
            }
          }}
          role="presentation"
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-[#1A1F2B] rounded-sm overflow-hidden pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation();
            }}
            role="dialog"
            aria-modal="true"
          >
            <img
              src={selectedImage}
              alt="Expanded view"
              className="w-full h-full object-contain"
              onError={() => setSelectedImage(null)}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-0 right-0 bg-[#FF5C00] hover:bg-[#FF5C00]/80 text-white p-2 rounded-sm transition-colors z-10"
              aria-label="Close image viewer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}