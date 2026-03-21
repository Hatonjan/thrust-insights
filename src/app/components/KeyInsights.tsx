import {
  TrendingUp,
  Recycle,
  Satellite,
  ArrowUpRight,
  DollarSign,
} from "lucide-react";
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
    impact: string;
  }>;
}

export function KeyInsights() {
  const data: DataType = projectData;

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
          <div className="inline-block px-4 py-2 bg-[#1A1F2B] border border-[#10B981]/30 rounded-full mb-6">
            <span className="text-[#10B981] text-sm font-semibold">
              DATA-DRIVEN INSIGHTS
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-6">
            Key Insights
          </h2>

          <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto">
            Powered by {data.project_metadata.name} v
            {data.project_metadata.version} — Last updated{" "}
            {data.project_metadata.last_updated}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-[#1A1F2B] to-[#0B0E14] p-6 rounded-lg border border-[#FF5C00]/30">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-5 h-5 text-[#FF5C00]" />
              <ArrowUpRight className="w-4 h-4 text-[#10B981]" />
            </div>
            <div className="text-3xl font-bold text-[#F8FAFC] mb-1">
              {data.summary_stats.total_launches}
            </div>
            <div className="text-[#94A3B8] text-sm">
              Total Launches
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1A1F2B] to-[#0B0E14] p-6 rounded-lg border border-[#10B981]/30">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-5 h-5 text-[#10B981]" />
              <ArrowUpRight className="w-4 h-4 text-[#10B981]" />
            </div>
            <div className="text-3xl font-bold text-[#F8FAFC] mb-1">
              {data.summary_stats.overall_success_rate}
            </div>
            <div className="text-[#94A3B8] text-sm">
              Success Rate
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1A1F2B] to-[#0B0E14] p-6 rounded-lg border border-[#00A3FF]/30">
            <div className="flex items-center justify-between mb-2">
              <Recycle className="w-5 h-5 text-[#00A3FF]" />
              <ArrowUpRight className="w-4 h-4 text-[#10B981]" />
            </div>
            <div className="text-3xl font-bold text-[#F8FAFC] mb-1">
              {data.summary_stats.boosters_recovered}
            </div>
            <div className="text-[#94A3B8] text-sm">
              Boosters Recovered
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1A1F2B] to-[#0B0E14] p-6 rounded-lg border border-[#FF5C00]/30">
            <div className="flex items-center justify-between mb-2">
              <Satellite className="w-5 h-5 text-[#FF5C00]" />
              <ArrowUpRight className="w-4 h-4 text-[#10B981]" />
            </div>
            <div className="text-3xl font-bold text-[#F8FAFC] mb-1">
              {(
                data.summary_stats.total_payload_mass_kg / 1000
              ).toFixed(0)}
              t
            </div>
            <div className="text-[#94A3B8] text-sm">
              Payload Mass
            </div>
          </div>
        </div>

        {/* Main Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Insight 1: Reliability */}
          <div className="bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-lg overflow-hidden group hover:border-[#10B981]/50 transition-all">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1720214661177-2c975f7824b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZXglMjBmYWxjb24lMjByb2NrZXQlMjBsYXVuY2h8ZW58MXx8fHwxNzc0MTIxODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Falcon 9 Launch"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2B] to-transparent"></div>
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

          {/* Insight 2: Reusability Dividend */}
          <div className="bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-lg overflow-hidden group hover:border-[#00A3FF]/50 transition-all">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1712107652880-a07803fa4cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBib29zdGVyJTIwbGFuZGluZ3xlbnwxfHx8fDE3NzQxMjE4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Booster Landing"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2B] to-transparent"></div>
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

          {/* Insight 3: Payload Evolution */}
          <div className="bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-lg overflow-hidden group hover:border-[#FF5C00]/50 transition-all">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1770370419338-f9a813302baa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHNhdGVsbGl0ZSUyMG9yYml0JTIwZWFydGh8ZW58MXx8fHwxNzc0MTIxODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Satellite"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2B] to-transparent"></div>
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
        </div>

        {/* Milestones Timeline */}
        <div className="bg-[#1A1F2B] border border-[#94A3B8]/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-8 text-center">
            Historic Milestones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF5C00] to-[#00A3FF] flex items-center justify-center">
                    <span className="text-[#F8FAFC] font-bold">
                      {milestone.year}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-[#F8FAFC] font-semibold mb-2">
                    {milestone.event}
                  </h4>
                  <p className="text-[#94A3B8] text-sm">
                    {milestone.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}