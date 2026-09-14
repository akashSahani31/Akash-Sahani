import { Fingerprint, Brain, Terminal, Mic2, Milestone as MilestoneIcon } from 'lucide-react';
import { MILESTONES } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 max-w-3xl">
          <div className="flex items-center gap-2 text-[#4cd7f6] font-mono text-xs uppercase tracking-widest font-semibold">
            <Fingerprint className="w-4 h-4" />
            <span>Trajectory &amp; Philosophy</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e1e2ed] tracking-tight">
            Engineering the Intersection of Data &amp; Decision Systems.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#c7c4d7] leading-relaxed">
            Hi, I’m Akash Sahani — a B.Tech Artificial Intelligence &amp; Data Science student at REVA
            University. I transform ambiguous computational challenges into functional software
            architectures, fusing algorithmic precision with intuitive user interfaces.
          </p>
        </div>

        {/* Bento Grid: Facets & Personal Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Core Engineering Card (Wide, 2 cols) */}
          <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-[#1d1f27]/75 border border-[#8083ff]/25 backdrop-blur-xl flex flex-col justify-between group hover:border-[#8083ff]/60 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#8083ff]/15 border border-[#8083ff]/30 text-[#c0c1ff]">
                  <Brain className="w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] text-[#908fa0] uppercase tracking-wider">
                  Foundational Anchor
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#e1e2ed]">
                Data-Driven Analytical Instinct
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#c7c4d7] leading-relaxed">
                Grounded in machine learning fundamentals, exploratory data analysis, and
                mathematical logic. I treat every dataset as a physical terrain that reveals
                underlying behavioral signals when modeled correctly.
              </p>
            </div>
            <div className="pt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md bg-[#272a32] text-[#e1e2ed] font-mono text-[11px] border border-[#464554]/40">
                Predictive Modeling
              </span>
              <span className="px-3 py-1 rounded-md bg-[#272a32] text-[#e1e2ed] font-mono text-[11px] border border-[#464554]/40">
                Statistical Validation
              </span>
              <span className="px-3 py-1 rounded-md bg-[#272a32] text-[#e1e2ed] font-mono text-[11px] border border-[#464554]/40">
                Model Optimization
              </span>
            </div>
          </div>

          {/* Card 2: Full-Stack & Systems */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#1d1f27]/75 border border-[#8083ff]/25 backdrop-blur-xl flex flex-col justify-between group hover:border-[#4cd7f6]/60 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(76,215,246,0.15)]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#4cd7f6]/15 border border-[#4cd7f6]/30 text-[#4cd7f6]">
                  <Terminal className="w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] text-[#908fa0] uppercase">Execution</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#e1e2ed]">
                System Synthesis
              </h3>
              <p className="font-sans text-sm text-[#c7c4d7] leading-relaxed">
                Comfortable moving from low-level C memory management and SQL query plans to reactive
                user interfaces and cloud pipelines.
              </p>
            </div>
            <span className="pt-6 font-mono text-[11px] text-[#4cd7f6] font-medium tracking-wide uppercase">
              C • Python • SQL • Web
            </span>
          </div>

          {/* Card 3: Human Dimensions: Music & Creative Vocal Arts */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#1d1f27]/75 border border-[#8083ff]/25 backdrop-blur-xl flex flex-col justify-between group hover:border-[#ddb7ff]/60 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(221,183,255,0.15)]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#ddb7ff]/15 border border-[#ddb7ff]/30 text-[#ddb7ff]">
                  <Mic2 className="w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] text-[#908fa0] uppercase">
                  Creative Rhythm
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#e1e2ed]">
                Vocal Art &amp; Prototyping
              </h3>
              <p className="font-sans text-sm text-[#c7c4d7] leading-relaxed">
                Passionate vocalist and musical thinker. The discipline of acoustic harmony directly
                sharpens my instinct for software architecture and structural balance.
              </p>
            </div>
            <span className="pt-6 font-mono text-[11px] text-[#ddb7ff] font-medium tracking-wide uppercase">
              Creative Resonance
            </span>
          </div>
        </div>

        {/* Chronological Trajectory Timeline */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#191b23]/80 border border-[#8083ff]/20 backdrop-blur-2xl">
          <div className="flex items-center gap-2 mb-6">
            <MilestoneIcon className="w-5 h-5 text-[#c0c1ff]" />
            <h3 className="font-display text-lg sm:text-xl font-semibold text-[#e1e2ed]">
              Academic &amp; Research Milestones
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 relative">
            {MILESTONES.map((milestone, idx) => {
              const isActive = milestone.status === 'active';
              return (
                <div
                  key={idx}
                  className={`flex flex-col gap-2 p-4 rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#8083ff]/15 border border-[#8083ff]/70 shadow-[0_0_24px_rgba(99,102,241,0.25)]'
                      : 'bg-[#1d1f27]/50 border border-[#464554]/30 hover:border-[#8083ff]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[11px] font-bold ${
                        isActive ? 'text-[#c0c1ff]' : 'text-[#4cd7f6]'
                      }`}
                    >
                      {milestone.phase}
                    </span>
                    {isActive && (
                      <span className="inline-block w-2 h-2 rounded-full bg-[#8083ff] animate-pulse"></span>
                    )}
                  </div>
                  <h4 className="font-display text-sm font-bold text-[#e1e2ed]">{milestone.title}</h4>
                  <p className="font-sans text-xs text-[#c7c4d7] leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
