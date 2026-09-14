import { X, Sparkles, Users, Database, BookOpen, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface UniHustelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UniHustelModal({ isOpen, onClose }: UniHustelModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#11131b] border border-[#8083ff]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(99,102,241,0.25)]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#1d1f27] border border-[#464554] text-[#c7c4d7] hover:text-[#e1e2ed] hover:border-[#8083ff] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-[#464554]/30 pb-5">
          <div className="p-3 rounded-2xl bg-[#8083ff]/15 text-[#c0c1ff] border border-[#8083ff]/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="font-mono text-xs text-[#c0c1ff] tracking-wider uppercase font-semibold">
              WEB ARCHITECTURE &amp; CAMPUS NETWORK
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#e1e2ed]">
              UniHustel — Academic Collaboration Platform
            </h3>
          </div>
        </div>

        {/* Body Content */}
        <div className="py-6 flex flex-col gap-5 text-sm">
          <p className="font-sans text-sm text-[#c7c4d7] leading-relaxed">
            UniHustel is an interconnected student hub built to overcome fragmentation in university
            project staffing. It pairs engineers, designers, and domain specialists for hackathons and
            academic capstones while serving as a verified repository for technical study notes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="p-3.5 rounded-xl bg-[#1d1f27] border border-[#464554]/30 flex flex-col gap-1">
              <Users className="w-5 h-5 text-[#4cd7f6] mb-1" />
              <span className="font-display font-bold text-sm text-[#e1e2ed]">Team Formation</span>
              <p className="font-sans text-xs text-[#908fa0]">
                Filter by technical stack, hackathon interests, and verified project experience.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#1d1f27] border border-[#464554]/30 flex flex-col gap-1">
              <BookOpen className="w-5 h-5 text-[#c0c1ff] mb-1" />
              <span className="font-display font-bold text-sm text-[#e1e2ed]">
                Peer Notes Hub
              </span>
              <p className="font-sans text-xs text-[#908fa0]">
                Upvoted course study guides, algorithm cheat-sheets, and lab manual annotations.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#1d1f27] border border-[#464554]/30 flex flex-col gap-1">
              <Database className="w-5 h-5 text-[#ddb7ff] mb-1" />
              <span className="font-display font-bold text-sm text-[#e1e2ed]">
                Relational State
              </span>
              <p className="font-sans text-xs text-[#908fa0]">
                Normalized SQL schema enforcing member roles, application status, and indexing.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#1d1f27]/80 border border-[#8083ff]/20">
            <span className="font-mono text-xs text-[#908fa0] uppercase block mb-1">
              Technical Stack Implemented
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#4cd7f6] font-mono text-xs">
                React Frontend
              </span>
              <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#c0c1ff] font-mono text-xs">
                RESTful Node Engine
              </span>
              <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#ddb7ff] font-mono text-xs">
                PostgreSQL Relational DB
              </span>
              <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#e1e2ed] font-mono text-xs">
                JWT Auth
              </span>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-[#464554]/30 flex items-center justify-between">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-[#4cd7f6] hover:underline"
          >
            <span>Explore on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#272a32] text-[#e1e2ed] hover:bg-[#32343d] font-display text-xs font-semibold cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
