import { useState, FormEvent } from 'react';
import {
  Mail,
  MapPin,
  School,
  Linkedin,
  Github,
  BarChart3,
  Send,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vector: 'Technical Collaboration',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          vector: 'Technical Collaboration',
          message: '',
        });
      }, 7000);
    }, 600);
  };

  return (
    <section id="contact" className="relative z-10 w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Direct Channels & Links (Col 5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-[#4cd7f6] font-mono text-xs uppercase tracking-widest font-semibold">
            <Mail className="w-4 h-4" />
            <span>Initiate Transmission</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e1e2ed] tracking-tight">
            Let’s Build Something Meaningful.
          </h2>

          <p className="font-sans text-base text-[#c7c4d7] leading-relaxed">
            Open to 2026 enterprise engineering internships, collaborative machine learning research
            initiatives, and open-source contributions.
          </p>

          {/* Direct Contact Badges */}
          <div className="flex flex-col gap-3.5 pt-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-4 rounded-xl bg-[#1d1f27]/75 border border-[#8083ff]/20 hover:border-[#4cd7f6]/50 transition-all flex items-center gap-3.5 text-[#e1e2ed] hover:text-[#4cd7f6] group shadow-sm"
            >
              <div className="p-2 rounded-lg bg-[#4cd7f6]/10 text-[#4cd7f6] group-hover:bg-[#4cd7f6]/20">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[#908fa0] uppercase">Direct Email</span>
                <span className="font-mono text-xs sm:text-sm font-semibold">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </a>

            <div className="p-4 rounded-xl bg-[#1d1f27]/75 border border-[#8083ff]/20 flex items-center gap-3.5 text-[#e1e2ed] shadow-sm">
              <div className="p-2 rounded-lg bg-[#8083ff]/10 text-[#c0c1ff]">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[#908fa0] uppercase">Location</span>
                <span className="font-mono text-xs sm:text-sm font-semibold">
                  Bengaluru, Karnataka, India
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#1d1f27]/75 border border-[#8083ff]/20 flex items-center gap-3.5 text-[#e1e2ed] shadow-sm">
              <div className="p-2 rounded-lg bg-[#ddb7ff]/10 text-[#ddb7ff]">
                <School className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[#908fa0] uppercase">Affiliation</span>
                <span className="font-mono text-xs sm:text-sm font-semibold">
                  REVA University Campus
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="pt-4 flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-[#1d1f27]/80 border border-[#464554]/40 text-[#c7c4d7] hover:text-[#4cd7f6] hover:border-[#4cd7f6]/60 transition-all cursor-pointer shadow-sm"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-[#1d1f27]/80 border border-[#464554]/40 text-[#c7c4d7] hover:text-[#c0c1ff] hover:border-[#8083ff]/60 transition-all cursor-pointer shadow-sm"
              title="GitHub Repositories"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.kaggle}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-[#1d1f27]/80 border border-[#464554]/40 text-[#c7c4d7] hover:text-[#ddb7ff] hover:border-[#ddb7ff]/60 transition-all cursor-pointer shadow-sm"
              title="Kaggle Notebooks & Competitions"
            >
              <BarChart3 className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column: Transmission Form (Col 7) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#1d1f27]/80 border border-[#8083ff]/30 backdrop-blur-xl shadow-2xl flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-[#464554]/30 pb-4">
              <span className="font-display text-base font-bold text-[#e1e2ed]">
                Direct Transmission Payload
              </span>
              <span className="font-mono text-[11px] text-[#4cd7f6]">P2P ENCRYPTED SIGNAL</span>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#0b0e16]/80 border border-[#4cd7f6]/50 flex flex-col items-center text-center gap-3 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-[#4cd7f6]/20 flex items-center justify-center text-[#4cd7f6]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#e1e2ed]">
                  Signal Transmitted Successfully
                </h3>
                <p className="font-sans text-sm text-[#c7c4d7] max-w-md">
                  Thank you, <strong className="text-[#4cd7f6]">{formData.name}</strong>. Your
                  inquiry regarding{' '}
                  <span className="text-[#c0c1ff]">{formData.vector}</span> has been logged. Akash
                  will respond to your inbox promptly.
                </p>
                <span className="font-mono text-xs text-[#908fa0] mt-2">
                  DISPATCHED: {new Date().toLocaleTimeString()}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs text-[#c7c4d7]">Name / Identifier</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-[#272a32]/60 border border-[#464554]/50 focus:border-[#4cd7f6] focus:outline-none text-[#e1e2ed] text-sm transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs text-[#c7c4d7]">Transmission Return</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-[#272a32]/60 border border-[#464554]/50 focus:border-[#4cd7f6] focus:outline-none text-[#e1e2ed] text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Inquiry Vector Selection */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-[#c7c4d7]">Inquiry Vector</label>
                  <select
                    value={formData.vector}
                    onChange={(e) => setFormData({ ...formData, vector: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-[#272a32]/80 border border-[#464554]/50 focus:border-[#4cd7f6] focus:outline-none text-[#e1e2ed] text-sm transition-all cursor-pointer"
                  >
                    <option value="Technical Collaboration">Technical Collaboration</option>
                    <option value="2026 Internship Opportunity">
                      2026 Internship Opportunity
                    </option>
                    <option value="Research & Publications">Research &amp; Publications</option>
                    <option value="General Dialogue">General Dialogue</option>
                  </select>
                </div>

                {/* Message Payload */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-[#c7c4d7]">Message Payload</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide context regarding problem domain, project specs, or internship scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-[#272a32]/60 border border-[#464554]/50 focus:border-[#4cd7f6] focus:outline-none text-[#e1e2ed] text-sm transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#8083ff] to-[#03b5d3] text-[#07006c] font-display font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(99,102,241,0.35)] hover:shadow-[0_0_35px_rgba(76,215,246,0.6)] hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Dispatching Packet...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
