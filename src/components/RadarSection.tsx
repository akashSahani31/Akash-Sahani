import { Radio, Bot, Cpu, Globe2, Zap } from 'lucide-react';
import { RADAR_ITEMS } from '../data/portfolioData';

export function RadarSection() {
  const getRadarIcon = (iconName: string) => {
    switch (iconName) {
      case 'smart_toy':
        return <Bot className="w-5 h-5 text-[#c0c1ff]" />;
      case 'memory':
        return <Cpu className="w-5 h-5 text-[#4cd7f6]" />;
      case 'public':
        return <Globe2 className="w-5 h-5 text-[#ddb7ff]" />;
      case 'speed':
        return <Zap className="w-5 h-5 text-[#c0c1ff]" />;
      default:
        return <Radio className="w-5 h-5 text-[#4cd7f6]" />;
    }
  };

  return (
    <section id="radar" className="relative z-10 w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 max-w-2xl">
          <div className="flex items-center gap-2 text-[#4cd7f6] font-mono text-xs uppercase tracking-widest font-semibold">
            <Radio className="w-4 h-4 animate-pulse" />
            <span>Horizon Scanning</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e1e2ed] tracking-tight">
            Active R&amp;D Exploration Radar.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#c7c4d7]">
            Current frontiers under study and prototype validation — preparing for the next
            generation of artificial intelligence systems.
          </p>
        </div>

        {/* Radar Exploration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RADAR_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#1d1f27]/75 border border-[#8083ff]/20 backdrop-blur-xl flex flex-col justify-between hover:border-[#8083ff]/60 transition-all group shadow-lg"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#8083ff]/10 border border-[#8083ff]/25">
                    {getRadarIcon(item.icon)}
                  </div>
                  <span className="font-mono text-[11px] text-[#4cd7f6] font-semibold tracking-wider">
                    {item.status}
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-[#e1e2ed] group-hover:text-[#c0c1ff] transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#c7c4d7] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-[#464554]/30 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] animate-ping"></span>
                <span className="font-mono text-[10px] text-[#908fa0] uppercase tracking-wider">
                  Signal Active
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
