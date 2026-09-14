import { X, Calendar, MapPin, CheckCircle2, Mail, Sparkles, Building2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface InternshipModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export function InternshipModal({
  isOpen,
  onClose,
  onNavigateToContact,
}: InternshipModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#11131b] border border-[#4cd7f6]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(76,215,246,0.25)]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#1d1f27] border border-[#464554] text-[#c7c4d7] hover:text-[#e1e2ed] hover:border-[#4cd7f6] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-[#464554]/30 pb-5">
          <div className="p-3 rounded-2xl bg-[#4cd7f6]/15 text-[#4cd7f6] border border-[#4cd7f6]/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="font-mono text-xs text-[#4cd7f6] tracking-wider uppercase font-semibold">
              Candidate Availability
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#e1e2ed]">
              2026 Engineering Internships
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="py-6 flex flex-col gap-5 text-sm">
          <div className="p-4 rounded-xl bg-[#1d1f27]/80 border border-[#8083ff]/30 flex flex-col gap-2">
            <span className="font-mono text-xs text-[#908fa0] uppercase">Target Roles</span>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#4cd7f6] font-mono text-xs">
                Machine Learning Engineer
              </span>
              <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#c0c1ff] font-mono text-xs">
                Data Science Intern
              </span>
              <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#ddb7ff] font-mono text-xs">
                AI Systems Engineer
              </span>
              <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#e1e2ed] font-mono text-xs">
                Computer Vision Intern
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-[#1d1f27] border border-[#464554]/30">
              <span className="font-mono text-[10px] text-[#908fa0] uppercase flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#4cd7f6]" />
                Availability Period
              </span>
              <p className="font-display text-xs sm:text-sm font-semibold text-[#e1e2ed] mt-1">
                Summer 2025 &amp; Spring 2026
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#1d1f27] border border-[#464554]/30">
              <span className="font-mono text-[10px] text-[#908fa0] uppercase flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#ddb7ff]" />
                Location Preference
              </span>
              <p className="font-display text-xs sm:text-sm font-semibold text-[#e1e2ed] mt-1">
                Bengaluru / Hybrid / Remote
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-[#908fa0] uppercase">
              Immediate Value Contribution
            </span>
            <ul className="space-y-1.5 text-xs text-[#c7c4d7]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4cd7f6] shrink-0" />
                <span>Production ML pipelines with Scikit-learn, Pandas, and Python</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4cd7f6] shrink-0" />
                <span>Low-level system efficiency (C algorithms, SQL query optimization)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4cd7f6] shrink-0" />
                <span>36-hour sprint tested (Smart India Hackathon national contender)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Action button */}
        <div className="pt-4 border-t border-[#464554]/30 flex items-center justify-between gap-3">
          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=2026%20Internship%20Inquiry%20-%20Akash%20Sahani`}
            className="px-4 py-2 rounded-xl bg-[#272a32] text-[#e1e2ed] hover:text-[#4cd7f6] font-display text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Email Directly</span>
          </a>
          <button
            onClick={() => {
              onClose();
              onNavigateToContact();
            }}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#8083ff] to-[#03b5d3] text-[#07006c] font-display font-semibold text-xs cursor-pointer hover:scale-105 transition-transform"
          >
            Dispatch Transmission
          </button>
        </div>
      </div>
    </div>
  );
}
