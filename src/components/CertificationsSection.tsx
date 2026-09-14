import { Award, Lightbulb, LineChart, Binary, BarChart3, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { CertificationData } from '../types';

interface CertificationsSectionProps {
  onSelectCert: (cert: CertificationData) => void;
}

export function CertificationsSection({ onSelectCert }: CertificationsSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'lightbulb':
        return <Lightbulb className="w-5 h-5 text-[#c0c1ff]" />;
      case 'insights':
        return <LineChart className="w-5 h-5 text-[#4cd7f6]" />;
      case 'data_object':
        return <Binary className="w-5 h-5 text-[#ddb7ff]" />;
      case 'analytics':
        return <BarChart3 className="w-5 h-5 text-[#c0c1ff]" />;
      default:
        return <Award className="w-5 h-5 text-[#4cd7f6]" />;
    }
  };

  return (
    <section id="certificates" className="relative z-10 w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 max-w-2xl">
          <div className="flex items-center gap-2 text-[#4cd7f6] font-mono text-xs uppercase tracking-widest font-semibold">
            <Award className="w-4 h-4" />
            <span>Verified Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e1e2ed] tracking-tight">
            Accreditations &amp; Certifications.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#c7c4d7]">
            Industry and academic credentials affirming proficiency in data pipelines, analytics, and
            leadership.
          </p>
        </div>

        {/* Credential Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              onClick={() => onSelectCert(cert)}
              className="p-6 rounded-2xl bg-[#1d1f27]/75 border border-[#8083ff]/20 backdrop-blur-xl flex flex-col justify-between hover:border-[#8083ff]/60 transition-all group shadow-lg cursor-pointer hover:scale-[1.02]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#8083ff]/10 border border-[#8083ff]/25">
                    {getIcon(cert.icon)}
                  </div>
                  <span className="font-mono text-[11px] text-[#4cd7f6] font-medium tracking-wider">
                    {cert.badgeText}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-base font-bold text-[#e1e2ed] group-hover:text-[#c0c1ff] transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="font-mono text-xs text-[#4cd7f6]">{cert.subtitle}</p>
                </div>

                <p className="font-sans text-xs text-[#c7c4d7] leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#464554]/30 flex items-center justify-between font-mono text-[11px] text-[#908fa0] mt-4">
                <span>{cert.issuer}</span>
                <ExternalLink className="w-4 h-4 text-[#c7c4d7] group-hover:text-[#4cd7f6] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
