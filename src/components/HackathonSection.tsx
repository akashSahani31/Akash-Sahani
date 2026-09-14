import { ShieldCheck, Flame, Users, CheckCircle, Award } from 'lucide-react';

export function HackathonSection() {
  return (
    <section id="hackathon" className="relative z-10 w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1280px] mx-auto">
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-[#272a32]/90 via-[#1d1f27]/80 to-[#0b0e16] border border-[#4cd7f6]/35 backdrop-blur-2xl shadow-[0_0_40px_rgba(76,215,246,0.15)] flex flex-col lg:flex-row items-center gap-10 lg:gap-12 relative overflow-hidden">
          {/* Ambient Background Watermark Award Glyph */}
          <div className="absolute -bottom-10 -right-10 opacity-5 select-none pointer-events-none">
            <Award className="w-64 h-64 text-[#4cd7f6]" />
          </div>

          {/* Left Side: Hackathon Honor & Metrics */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4cd7f6]/15 border border-[#4cd7f6]/40 text-[#4cd7f6] font-mono text-xs uppercase tracking-wider w-fit font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>National Innovation Selection</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#e1e2ed]">
              Smart India Hackathon • Slopesense
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#c7c4d7] leading-relaxed">
              Selected for high-stakes problem statements in the Smart India Hackathon. Under intense
              36-hour continuous sprint conditions, led team architecture for real-time telemetry
              ingestion, predictive landslide classification, and civil defense alerting.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0b0e16]/70 border border-[#464554]/40 flex flex-col shadow-inner">
                <span className="font-display text-2xl sm:text-3xl font-bold text-[#4cd7f6] leading-none">
                  36h
                </span>
                <span className="font-mono text-[10px] text-[#908fa0] uppercase mt-1">
                  Continuous Sprint
                </span>
              </div>
              <div className="p-4 rounded-xl bg-[#0b0e16]/70 border border-[#464554]/40 flex flex-col shadow-inner">
                <span className="font-display text-2xl sm:text-3xl font-bold text-[#c0c1ff] leading-none">
                  89%
                </span>
                <span className="font-mono text-[10px] text-[#908fa0] uppercase mt-1">
                  Telemetry Precision
                </span>
              </div>
              <div className="p-4 rounded-xl bg-[#0b0e16]/70 border border-[#464554]/40 flex flex-col col-span-2 sm:col-span-1 shadow-inner">
                <span className="font-display text-2xl sm:text-3xl font-bold text-[#ddb7ff] leading-none">
                  State
                </span>
                <span className="font-mono text-[10px] text-[#908fa0] uppercase mt-1">
                  Authority Focus
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Real-World Disaster Impact Breakdown */}
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            <div className="p-5 rounded-2xl bg-[#1d1f27]/70 border border-[#464554]/30 flex items-start gap-4 hover:border-[#4cd7f6]/50 transition-colors">
              <div className="p-2.5 rounded-xl bg-[#4cd7f6]/15 text-[#4cd7f6] shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-display text-sm sm:text-base font-bold text-[#e1e2ed]">
                  Real-Time Sensor Anomaly Processing
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#c7c4d7] mt-1 leading-relaxed">
                  Developed streaming filters to separate rain gauge noise from genuine catastrophic
                  saturation thresholds.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#1d1f27]/70 border border-[#464554]/30 flex items-start gap-4 hover:border-[#8083ff]/50 transition-colors">
              <div className="p-2.5 rounded-xl bg-[#8083ff]/15 text-[#c0c1ff] shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-display text-sm sm:text-base font-bold text-[#e1e2ed]">
                  Collaborative Team Synthesis
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#c7c4d7] mt-1 leading-relaxed">
                  Bridged hardware telemetry inputs with frontend geospatial UI components,
                  maintaining rapid iteration velocity.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#1d1f27]/70 border border-[#464554]/30 flex items-start gap-4 hover:border-[#ddb7ff]/50 transition-colors">
              <div className="p-2.5 rounded-xl bg-[#ddb7ff]/15 text-[#ddb7ff] shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-display text-sm sm:text-base font-bold text-[#e1e2ed]">
                  Jury &amp; Ministry Evaluation
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#c7c4d7] mt-1 leading-relaxed">
                  Defended model latency, false-positive mitigation, and deployment feasibility
                  before enterprise &amp; institutional evaluation panels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
