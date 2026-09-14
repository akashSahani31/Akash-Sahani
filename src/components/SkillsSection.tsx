import { useState } from 'react';
import {
  Code,
  Brain,
  Globe,
  FlaskConical,
  Share2,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { SKILL_CLUSTERS } from '../data/portfolioData';

export function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    level: string;
    detail: string;
    cluster: string;
  } | null>(null);

  const getClusterIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Code className="w-5 h-5 text-[#c0c1ff]" />;
      case 'data_ai':
        return <Brain className="w-5 h-5 text-[#4cd7f6]" />;
      case 'web_systems':
        return <Globe className="w-5 h-5 text-[#ddb7ff]" />;
      case 'tooling':
        return <FlaskConical className="w-5 h-5 text-[#c0c1ff]" />;
      default:
        return <Code className="w-5 h-5 text-[#c0c1ff]" />;
    }
  };

  return (
    <section id="skills" className="relative z-10 w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Title & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col items-start gap-3 max-w-2xl">
            <div className="flex items-center gap-2 text-[#4cd7f6] font-mono text-xs uppercase tracking-widest font-semibold">
              <Share2 className="w-4 h-4" />
              <span>Computational Architecture</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e1e2ed] tracking-tight">
              Interactive Skill Constellation.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#c7c4d7]">
              Technical proficiencies interconnected as a unified computational fabric — from
              low-level algorithmic logic to applied intelligence.
            </p>
          </div>

          {/* Metric Counter Badge */}
          <div className="flex items-center gap-6 p-4 rounded-2xl bg-[#1d1f27]/70 border border-[#8083ff]/30 backdrop-blur-md self-start md:self-auto">
            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#4cd7f6] leading-none">
                16+
              </span>
              <span className="font-mono text-[10px] text-[#908fa0] uppercase mt-1">
                Core Competencies
              </span>
            </div>
            <div className="h-8 w-px bg-[#464554]/40"></div>
            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#c0c1ff] leading-none">
                100%
              </span>
              <span className="font-mono text-[10px] text-[#908fa0] uppercase mt-1">
                Hands-On Verified
              </span>
            </div>
          </div>
        </div>

        {/* Constellation Cluster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CLUSTERS.map((cluster) => {
            return (
              <div
                key={cluster.id}
                className="p-6 rounded-2xl bg-[#1d1f27]/75 border border-[#8083ff]/20 backdrop-blur-xl flex flex-col gap-5 hover:border-[#8083ff]/60 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] group"
              >
                {/* Cluster Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#464554]/30">
                  <div className="flex items-center gap-2">
                    {getClusterIcon(cluster.id)}
                    <h3 className="font-display text-base font-bold text-[#e1e2ed]">
                      {cluster.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#c0c1ff] tracking-wider">
                    {cluster.layer}
                  </span>
                </div>

                {/* Skill Items */}
                <div className="flex flex-col gap-3">
                  {cluster.skills.map((skill) => {
                    const isSelected = selectedSkill?.name === skill.name;
                    return (
                      <div
                        key={skill.name}
                        onClick={() =>
                          setSelectedSkill({
                            name: skill.name,
                            level: skill.level,
                            detail: skill.detail,
                            cluster: cluster.title,
                          })
                        }
                        className={`p-3 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#8083ff]/20 border-[#4cd7f6] shadow-[0_0_15px_rgba(76,215,246,0.25)]'
                            : 'bg-[#272a32]/40 hover:bg-[#272a32]/80 border-[#464554]/25 hover:border-[#8083ff]/40'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-display text-xs sm:text-sm font-semibold text-[#e1e2ed]">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[10px] text-[#4cd7f6] font-medium">
                            {skill.level}
                          </span>
                        </div>
                        <p className="font-sans text-[11px] sm:text-xs text-[#c7c4d7]">
                          {skill.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Skill Quick Inspector Alert */}
        {selectedSkill && (
          <div className="p-4 rounded-2xl bg-[#1d1f27]/90 border border-[#4cd7f6]/40 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#4cd7f6]/15 text-[#4cd7f6]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-base font-bold text-[#e1e2ed]">
                    {selectedSkill.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#4cd7f6]/15 text-[#4cd7f6] font-mono text-[10px] font-semibold">
                    {selectedSkill.level}
                  </span>
                  <span className="font-mono text-xs text-[#908fa0]">
                    • {selectedSkill.cluster}
                  </span>
                </div>
                <p className="text-xs text-[#c7c4d7] mt-0.5">{selectedSkill.detail}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedSkill(null)}
              className="text-xs text-[#908fa0] hover:text-[#e1e2ed] underline self-end sm:self-auto cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
