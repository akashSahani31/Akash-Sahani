import { useState, useEffect } from 'react';
import { CosmicBackground } from './components/CosmicBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { HackathonSection } from './components/HackathonSection';
import { CertificationsSection } from './components/CertificationsSection';
import { EducationSection } from './components/EducationSection';
import { RadarSection } from './components/RadarSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SlopeSenseModal } from './components/SlopeSenseModal';
import { CertificateModal } from './components/CertificateModal';
import { InternshipModal } from './components/InternshipModal';
import { UniHustelModal } from './components/UniHustelModal';
import { CertificationData } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCert, setSelectedCert] = useState<CertificationData | null>(null);
  const [isSlopeSenseModalOpen, setIsSlopeSenseModalOpen] = useState(false);
  const [isInternshipModalOpen, setIsInternshipModalOpen] = useState(false);
  const [isUniHustelModalOpen, setIsUniHustelModalOpen] = useState(false);

  // Smooth scroll to section
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'skills',
      'projects',
      'hackathon',
      'certificates',
      'education',
      'radar',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05070e] text-[#e1e2ed] font-sans overflow-x-hidden selection:bg-[#8083ff] selection:text-[#07006c]">
      {/* Dynamic Cosmic Background Canvas */}
      <CosmicBackground />

      {/* Fixed Capsule Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenInternshipModal={() => setIsInternshipModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative pt-24 sm:pt-28 flex flex-col gap-6 sm:gap-10">
        <HeroSection onNavigate={handleNavigate} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection
          onOpenSlopeSenseModal={() => setIsSlopeSenseModalOpen(true)}
          onOpenUniHustelModal={() => setIsUniHustelModalOpen(true)}
        />
        <HackathonSection />
        <CertificationsSection onSelectCert={(cert) => setSelectedCert(cert)} />
        <EducationSection />
        <RadarSection />
        <ContactSection />
      </main>

      {/* Portfolio Footer */}
      <Footer onScrollToTop={handleScrollToTop} />

      {/* Interactive Feature Modals */}
      <SlopeSenseModal
        isOpen={isSlopeSenseModalOpen}
        onClose={() => setIsSlopeSenseModalOpen(false)}
      />
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
      <InternshipModal
        isOpen={isInternshipModalOpen}
        onClose={() => setIsInternshipModalOpen(false)}
        onNavigateToContact={() => handleNavigate('contact')}
      />
      <UniHustelModal
        isOpen={isUniHustelModalOpen}
        onClose={() => setIsUniHustelModalOpen(false)}
      />
    </div>
  );
}
