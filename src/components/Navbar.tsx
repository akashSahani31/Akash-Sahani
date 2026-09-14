import { useState, useEffect } from 'react';
import { Menu, X, Orbit, User, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenInternshipModal?: () => void;
}

export function Navbar({ activeSection, onNavigate, onOpenInternshipModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'hackathon', label: 'Hackathon' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-2 sm:py-3 px-4 sm:px-6 lg:px-12 pointer-events-none">
      <div className="max-w-[1280px] mx-auto pointer-events-auto">
        <div
          className={`h-16 px-4 md:px-6 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#0d111c]/90 shadow-[0_8px_32px_rgba(0,0,0,0.7)] border border-[#8083ff]/30'
              : 'bg-[#0d111c]/75 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border border-[#8083ff]/20'
          } backdrop-blur-xl flex items-center justify-between gap-3`}
        >
          {/* Logo & Brand Identity */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-[#1d1f27]/80 border border-[#8083ff]/30 group-hover:border-[#4cd7f6]/60 transition-colors">
              <Orbit className="w-[18px] h-[18px] text-[#4cd7f6] animate-spin-slow" />
              <span className="absolute inset-0 rounded-full bg-[#4cd7f6]/10 blur-sm"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm tracking-wider uppercase text-[#e1e2ed] font-bold group-hover:text-white transition-colors">
                Akash Sahani
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] text-[#4cd7f6] tracking-widest uppercase mt-0.5">
                AI &amp; DS • REVA
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-[13px] transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#c0c1ff] font-bold relative after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-[#4cd7f6] after:rounded-full'
                      : 'text-[#c7c4d7] hover:text-[#e1e2ed] font-normal'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Internships Pill */}
            <button
              onClick={onOpenInternshipModal}
              className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#4cd7f6]/10 border border-[#4cd7f6]/30 hover:border-[#4cd7f6]/60 hover:bg-[#4cd7f6]/15 transition-colors cursor-pointer"
              title="Click to view Akash's 2026 availability & target roles"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4cd7f6]"></span>
              </span>
              <span className="font-mono text-[11px] sm:text-[12px] text-[#4cd7f6] tracking-wider uppercase font-medium">
                Internships 2026
              </span>
            </button>

            {/* Get In Touch CTA */}
            <button
              onClick={() => handleLinkClick('contact')}
              className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-[#8083ff] to-[#03b5d3] text-[#07006c] text-[13px] shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_28px_rgba(76,215,246,0.6)] hover:scale-[1.03] transition-all font-semibold cursor-pointer"
            >
              Get in Touch
            </button>

            {/* User Profile Emblem */}
            <div
              className="w-8 h-8 rounded-full bg-[#8083ff] text-[#07006c] flex items-center justify-center shrink-0 shadow-sm"
              title="Akash Sahani Verified Student Profile"
            >
              <User className="w-[18px] h-[18px]" />
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-[#1d1f27] border border-[#464554] text-[#e1e2ed] hover:text-[#4cd7f6] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-3xl bg-[#0d111c]/95 border border-[#8083ff]/30 backdrop-blur-2xl shadow-2xl flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left px-4 py-2.5 rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#8083ff]/15 text-[#c0c1ff] font-bold border border-[#8083ff]/30'
                      : 'text-[#c7c4d7] hover:text-[#e1e2ed] hover:bg-[#1d1f27]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-2 border-t border-[#464554]/40 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenInternshipModal) onOpenInternshipModal();
                }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#4cd7f6]/10 border border-[#4cd7f6]/30 text-[#4cd7f6] font-mono text-xs font-semibold"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Internships 2026 Availability
              </button>
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#8083ff] to-[#03b5d3] text-[#07006c] text-sm font-semibold text-center"
              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
