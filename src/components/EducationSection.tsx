import { Landmark, Terminal, FlaskConical, Sparkles } from 'lucide-react';

export function EducationSection() {
  const coursework = [
    'Machine Learning',
    'Deep Learning Foundations',
    'Design & Analysis of Algorithms',
    'Database Management Systems',
    'Probability & Statistics for AI',
  ];

  return (
    <section id="education" className="relative z-10 w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Academic Credentials (Col 7) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-[#4cd7f6] font-mono text-xs uppercase tracking-widest font-semibold">
            <Landmark className="w-4 h-4" />
            <span>Academic Foundation</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e1e2ed] tracking-tight">
            REVA University • School of Computing
          </h2>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#1d1f27]/80 border border-[#8083ff]/30 backdrop-blur-xl flex flex-col gap-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#e1e2ed]">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#4cd7f6] font-medium mt-0.5">
                  Artificial Intelligence &amp; Data Science (2022 – 2026)
                </p>
              </div>
              <span className="px-3.5 py-1 rounded-full bg-[#4cd7f6]/15 text-[#4cd7f6] font-mono text-xs w-fit border border-[#4cd7f6]/30">
                Bengaluru, India
              </span>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#c7c4d7] leading-relaxed">
              Comprehensive curriculum pairing rigorous mathematical foundations — linear algebra,
              multivariable calculus, and probability theory — with applied computer science,
              distributed algorithms, and deep neural architectures.
            </p>

            {/* Core Academic Coursework Tags */}
            <div className="flex flex-col gap-3 pt-2">
              <span className="font-mono text-xs text-[#908fa0] uppercase tracking-wider">
                Key Rigorous Coursework:
              </span>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 rounded-lg bg-[#272a32] text-[#e1e2ed] font-mono text-xs border border-[#464554]/40"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Institutional Highlights & Activities (Col 5) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="p-5 rounded-2xl bg-[#1d1f27]/70 border border-[#464554]/30 flex items-start gap-4 hover:border-[#8083ff]/50 transition-colors">
            <div className="p-2.5 rounded-xl bg-[#8083ff]/15 text-[#c0c1ff] shrink-0">
              <Terminal className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <h4 className="font-display text-sm sm:text-base font-bold text-[#e1e2ed]">
                Tech Clubs &amp; Developer Forums
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#c7c4d7] mt-1 leading-relaxed">
                Active participant in campus hackathons, open-source coding circles, and peer-led AI
                technical workshops.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#1d1f27]/70 border border-[#464554]/30 flex items-start gap-4 hover:border-[#4cd7f6]/50 transition-colors">
            <div className="p-2.5 rounded-xl bg-[#4cd7f6]/15 text-[#4cd7f6] shrink-0">
              <FlaskConical className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <h4 className="font-display text-sm sm:text-base font-bold text-[#e1e2ed]">
                Applied Laboratory Research
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#c7c4d7] mt-1 leading-relaxed">
                Conducting experimental model benchmarking, dataset sanitization, and comparative
                algorithm latency evaluations.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#1d1f27]/70 border border-[#464554]/30 flex items-start gap-4 hover:border-[#ddb7ff]/50 transition-colors">
            <div className="p-2.5 rounded-xl bg-[#ddb7ff]/15 text-[#ddb7ff] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <h4 className="font-display text-sm sm:text-base font-bold text-[#e1e2ed]">
                Multidisciplinary Expression
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#c7c4d7] mt-1 leading-relaxed">
                Bridging engineering disciplines with vocal arts and collaborative team communications
                during competitive sprints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
