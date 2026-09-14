import { useState, useEffect } from 'react';
import { ArrowUp, Orbit, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onScrollToTop: () => void;
}

export function Footer({ onScrollToTop }: FooterProps) {
  const [bengaluruTime, setBengaluruTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setBengaluruTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative z-10 w-full border-t border-[#8083ff]/20 bg-[#0b0e16]/90 backdrop-blur-2xl py-10 px-4 sm:px-6 lg:px-12 mt-12">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <Orbit className="w-4 h-4 text-[#4cd7f6]" />
            <span className="font-display font-bold text-sm tracking-wider uppercase text-[#e1e2ed]">
              Akash Sahani
            </span>
          </div>
          <p className="font-sans text-xs text-[#908fa0]">
            B.Tech Artificial Intelligence &amp; Data Science • REVA University, Bengaluru
          </p>
        </div>

        {/* Center Rigor Statement */}
        <div className="flex flex-col items-center text-center gap-1">
          <span className="font-mono text-[10px] sm:text-[11px] text-[#4cd7f6] uppercase tracking-widest font-semibold">
            Designed for Computational Rigor &amp; Structural Harmony
          </span>
          <p className="font-sans text-xs text-[#908fa0]">
            © 2025–2026 Akash Sahani. Open-source engineered.
          </p>
        </div>

        {/* Right: Bengaluru Real-Time Clock & Scroll to top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1d1f27] border border-[#464554]/40 font-mono text-xs text-[#c0c1ff]">
            <Terminal className="w-3.5 h-3.5 text-[#4cd7f6]" />
            <span>BLR {bengaluruTime || '15:42:09'} IST</span>
          </div>

          <button
            onClick={onScrollToTop}
            aria-label="Scroll to top of portfolio"
            className="p-2.5 rounded-full bg-[#1d1f27] border border-[#8083ff]/30 text-[#e1e2ed] hover:text-[#4cd7f6] hover:border-[#4cd7f6]/60 transition-all cursor-pointer shadow-sm hover:scale-105"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
