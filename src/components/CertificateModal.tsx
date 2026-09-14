import { X, Award, CheckCircle2, ShieldCheck, Calendar, ExternalLink } from 'lucide-react';
import { CertificationData } from '../types';

interface CertificateModalProps {
  cert: CertificationData | null;
  onClose: () => void;
}

export function CertificateModal({ cert, onClose }: CertificateModalProps) {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#11131b] border border-[#8083ff]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(99,102,241,0.25)]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#1d1f27] border border-[#464554] text-[#c7c4d7] hover:text-[#e1e2ed] hover:border-[#8083ff] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Card Header */}
        <div className="flex items-center gap-3 border-b border-[#464554]/30 pb-5">
          <div className="p-3 rounded-2xl bg-[#8083ff]/15 text-[#4cd7f6] border border-[#8083ff]/30">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="font-mono text-xs text-[#4cd7f6] tracking-wider uppercase font-semibold">
              {cert.issuer}
            </span>
            <h3 className="font-display text-xl font-bold text-[#e1e2ed]">{cert.title}</h3>
          </div>
        </div>

        {/* Body Content */}
        <div className="py-6 flex flex-col gap-4">
          <div>
            <span className="font-mono text-xs text-[#908fa0] uppercase">Focus Specialization</span>
            <p className="font-display text-sm font-semibold text-[#c0c1ff]">{cert.subtitle}</p>
          </div>

          <div>
            <span className="font-mono text-xs text-[#908fa0] uppercase">Curriculum Synopsis</span>
            <p className="font-sans text-xs sm:text-sm text-[#c7c4d7] mt-1 leading-relaxed">
              {cert.description}
            </p>
          </div>

          <div>
            <span className="font-mono text-xs text-[#908fa0] uppercase">Verified Competencies</span>
            <div className="flex flex-wrap gap-2 mt-1.5">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md bg-[#272a32] text-[#4cd7f6] font-mono text-xs border border-[#464554]/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-3 rounded-xl bg-[#1d1f27] border border-[#464554]/30">
              <span className="font-mono text-[10px] text-[#908fa0] uppercase">Credential ID</span>
              <p className="font-mono text-xs font-semibold text-[#e1e2ed] mt-0.5">
                {cert.credentialId}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-[#1d1f27] border border-[#464554]/30">
              <span className="font-mono text-[10px] text-[#908fa0] uppercase">Issue Date</span>
              <p className="font-mono text-xs font-semibold text-[#e1e2ed] mt-0.5">{cert.date}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#464554]/30 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-[#4cd7f6] font-mono">
            <ShieldCheck className="w-4 h-4" />
            <span>Cryptographically Verified</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#272a32] text-[#e1e2ed] hover:bg-[#32343d] font-display text-xs font-semibold cursor-pointer transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
