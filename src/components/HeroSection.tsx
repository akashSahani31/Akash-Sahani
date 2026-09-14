import { ArrowRight, Mail, School } from 'lucide-react';
import { PERSONAL_INFO, SPECIALIZATIONS } from '../data/portfolioData';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative z-10 w-full min-h-[90vh] flex items-center justify-center py-12 md:py-20 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Vision & Identity (Col 7) */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5 sm:gap-6">
          {/* Live Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d1f27]/80 border border-[#8083ff]/30 backdrop-blur-xl shadow-[0_0_24px_rgba(99,102,241,0.2)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4cd7f6]"></span>
            </span>
            <span className="font-mono text-[11px] sm:text-[12px] tracking-wider uppercase text-[#4cd7f6] font-semibold">
              B.Tech AI &amp; Data Science • REVA University 2026
            </span>
          </div>

          {/* Monumental Hero Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[68px] font-bold tracking-tight text-[#e1e2ed] leading-[1.1]">
            Building Ideas.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e1e2ed] via-[#c0c1ff] to-[#4cd7f6]">
              Engineering Intelligence.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg text-[#c7c4d7] max-w-2xl leading-relaxed">
            Passionate about building predictive systems, high-throughput geospatial analytics, and
            meaningful human-centered digital experiences rooted in deep mathematical rigor.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('projects')}
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#8083ff] to-[#03b5d3] text-[#07006c] font-display text-sm sm:text-base font-semibold shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(76,215,246,0.6)] hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1d1f27]/70 hover:bg-[#272a32] border border-[#8083ff]/30 hover:border-[#4cd7f6]/60 text-[#e1e2ed] font-display text-sm sm:text-base font-medium backdrop-blur-md transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#4cd7f6]" />
              <span>Let’s Connect</span>
            </button>
          </div>

          {/* Specialization Meta Badges */}
          <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-[#464554]/40 w-full mt-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#908fa0]">
              Specializations:
            </span>
            <div className="flex flex-wrap gap-2">
              {SPECIALIZATIONS.map((spec) => (
                <span
                  key={spec.label}
                  className={`px-3 py-1 rounded-md bg-[#272a32]/70 border border-[#464554]/50 font-mono text-[11px] ${spec.color} transition-colors hover:border-[#4cd7f6]/50`}
                >
                  {spec.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Cosmic Portrait & Celestial Orbit Ring (Col 5) */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
            {/* Outer Pulsing Orbit Ring */}
            <div className="absolute inset-0 rounded-full border border-[#8083ff]/25 animate-spin-slow pointer-events-none">
              <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#4cd7f6] shadow-[0_0_14px_#4cd7f6]"></span>
              <span className="absolute -bottom-1.5 left-1/3 w-2.5 h-2.5 rounded-full bg-[#ddb7ff] shadow-[0_0_10px_#ddb7ff]"></span>
            </div>

            {/* Secondary Counter-Rotating Dash Ring */}
            <div className="absolute inset-4 rounded-full border border-dashed border-[#4cd7f6]/25 animate-spin-slow-reverse pointer-events-none"></div>

            {/* Diffuse Celestial Nebula Backglow */}
            <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-[#8083ff]/35 via-[#4cd7f6]/20 to-[#ddb7ff]/25 blur-3xl opacity-75"></div>

            {/* Main Portrait Container */}
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full p-1.5 bg-gradient-to-b from-[#8083ff]/50 via-[#32343d]/30 to-[#4cd7f6]/50 shadow-[0_0_55px_rgba(99,102,241,0.3)] overflow-hidden">
              <img
                src={PERSONAL_INFO.profileImage}
                alt="Akash Sahani - B.Tech AI & Data Science Engineer at REVA University"
                className="w-full h-full object-cover rounded-full filter contrast-[1.05] brightness-[1.02]"
                style={{ objectPosition: 'center 20%' }}
                loading="eager"
              />
              {/* Vignette Edge Gradient Overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#05070e]/80 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Micro Floating Orbit Metric Badge */}
            <div className="absolute -bottom-2 right-2 sm:right-6 px-3.5 py-2 rounded-xl bg-[#272a32]/95 border border-[#8083ff]/35 backdrop-blur-xl shadow-2xl flex items-center gap-2.5 z-20">
              <School className="w-5 h-5 text-[#4cd7f6]" />
              <div className="flex flex-col">
                <span className="font-display text-xs sm:text-sm font-semibold text-[#e1e2ed] leading-none">
                  REVA Univ.
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] text-[#c7c4d7]">
                  Class of 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
