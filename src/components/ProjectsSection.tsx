import { useState } from 'react';
import {
  Layers,
  Satellite,
  Droplets,
  AlertTriangle,
  Activity,
  Megaphone,
  ExternalLink,
  Code2,
  ArrowRight,
  Sparkles,
  Play,
  RotateCw,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProjectsSectionProps {
  onOpenSlopeSenseModal: () => void;
  onOpenUniHustelModal: () => void;
}

export function ProjectsSection({
  onOpenSlopeSenseModal,
  onOpenUniHustelModal,
}: ProjectsSectionProps) {
  // Interactive state for 2D graphics preview
  const [vectorRotation, setVectorRotation] = useState(0);
  const [polygonScale, setPolygonScale] = useState(1);

  const rotateVector = () => {
    setVectorRotation((prev) => (prev + 45) % 360);
  };

  const toggleScale = () => {
    setPolygonScale((prev) => (prev === 1 ? 1.25 : 1));
  };

  return (
    <section id="projects" className="relative z-10 w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 max-w-3xl">
          <div className="flex items-center gap-2 text-[#4cd7f6] font-mono text-xs uppercase tracking-widest font-semibold">
            <Layers className="w-4 h-4" />
            <span>Engineered Prototypes</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e1e2ed] tracking-tight">
            Featured Engineering Deployments.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#c7c4d7] leading-relaxed">
            Architectural solutions built to address high-stakes real-world challenges through
            machine learning, low-level computation, and intuitive user workflows.
          </p>
        </div>

        {/* =================================================================== */}
        {/* GRAND FLAGSHIP CARD: SLOPESENSE                                     */}
        {/* =================================================================== */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#1d1f27]/80 border border-[#8083ff]/35 backdrop-blur-2xl shadow-[0_0_50px_rgba(99,102,241,0.2)] flex flex-col gap-8 relative overflow-hidden">
          {/* Top Subtle Ambient Glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#4cd7f6]/15 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3.5 py-1 rounded-full bg-[#4cd7f6]/15 border border-[#4cd7f6]/40 text-[#4cd7f6] font-mono text-[11px] sm:text-xs tracking-wider uppercase font-semibold">
                FLAGSHIP INNOVATION • DISASTER AI
              </span>
              <span className="px-3.5 py-1 rounded-full bg-[#ddb7ff]/15 border border-[#ddb7ff]/40 text-[#ddb7ff] font-mono text-[11px] sm:text-xs tracking-wider uppercase">
                SMART INDIA HACKATHON
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#908fa0]">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#4cd7f6] animate-pulse"></span>
              <span>STATUS: ACTIVE RESEARCH PROTOTYPE</span>
            </div>
          </div>

          {/* Project Title & Subtitle */}
          <div className="flex flex-col gap-2">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#e1e2ed]">
              SlopeSense — AI-Based Early Warning &amp; Landslide Risk Monitoring
            </h3>
            <p className="font-sans text-base sm:text-lg text-[#4cd7f6] font-medium">
              Predictive telemetry &amp; geospatial risk mapping engineered for the Himalayan
              Corridor &amp; North-East India.
            </p>
          </div>

          {/* Visual Preview: Dedicated Monitor Viewport mimicking the Inspiration Image */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-[#8083ff]/30 shadow-[0_12px_45px_rgba(0,0,0,0.85)] bg-[#0b0e16] group">
            <img
              src={PERSONAL_INFO.slopesenseImage}
              alt="SlopeSense AI-Based Landslide Monitoring Dashboard"
              className="w-full h-auto object-cover max-h-[560px] group-hover:scale-[1.01] transition-transform duration-700"
            />
            {/* Mission Control Telemetry Overlay Strip */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#05070e] via-[#05070e]/85 to-transparent p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <Satellite className="w-4 h-4 text-[#4cd7f6]" />
                  <span className="font-mono text-xs text-[#e1e2ed]">RADAR TELEMETRY: ACTIVE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-[#c0c1ff]" />
                  <span className="font-mono text-xs text-[#e1e2ed]">SOIL SATURATION: 76.4%</span>
                </div>
              </div>
              <span className="font-mono text-xs text-[#ffb4ab] bg-[#93000a]/50 px-3 py-1 rounded border border-[#ffb4ab]/40 font-semibold shadow-sm">
                PREDICTIVE WINDOW: 48 HOURS PRIOR
              </span>
            </div>
          </div>

          {/* Comprehensive Impact & Architecture Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
            {/* The Problem */}
            <div className="flex flex-col gap-2.5 p-5 rounded-2xl bg-[#272a32]/45 border border-[#464554]/40">
              <div className="flex items-center gap-2 text-[#ffb4ab]">
                <AlertTriangle className="w-5 h-5 text-[#ffb4ab]" />
                <h4 className="font-display text-base font-bold text-[#e1e2ed]">
                  The Critical Problem
                </h4>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#c7c4d7] leading-relaxed">
                Sudden catastrophic slope collapses across Himalayan transit corridors cause
                regular loss of civilian lives, isolate remote mountain towns, and paralyze national
                logistics during monsoon surges.
              </p>
            </div>

            {/* The Engineering Solution */}
            <div className="flex flex-col gap-2.5 p-5 rounded-2xl bg-[#272a32]/45 border border-[#464554]/40">
              <div className="flex items-center gap-2 text-[#4cd7f6]">
                <Activity className="w-5 h-5 text-[#4cd7f6]" />
                <h4 className="font-display text-base font-bold text-[#e1e2ed]">
                  Multi-Sensor Telemetry
                </h4>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#c7c4d7] leading-relaxed">
                Combines satellite precipitation forecasts, radar ground displacement, and
                hydrological slope models to forecast structural ground failure with 89%+ predictive
                accuracy.
              </p>
            </div>

            {/* The Operational Impact */}
            <div className="flex flex-col gap-2.5 p-5 rounded-2xl bg-[#272a32]/45 border border-[#464554]/40">
              <div className="flex items-center gap-2 text-[#c0c1ff]">
                <Megaphone className="w-5 h-5 text-[#c0c1ff]" />
                <h4 className="font-display text-base font-bold text-[#e1e2ed]">
                  Disaster Authority Alerting
                </h4>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#c7c4d7] leading-relaxed">
                Dispatches automated early warning protocols via regional SMS beacons, localized
                sirens, and centralized civil defense dashboards to evacuate vulnerable settlements
                ahead of failure.
              </p>
            </div>
          </div>

          {/* Bottom Row: Tech Stack & Action Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#464554]/40">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-[#908fa0] uppercase mr-1">Core Stack:</span>
              <span className="px-2.5 py-1 rounded bg-[#32343d] text-[#4cd7f6] font-mono text-xs">
                Python
              </span>
              <span className="px-2.5 py-1 rounded bg-[#32343d] text-[#4cd7f6] font-mono text-xs">
                Scikit-learn
              </span>
              <span className="px-2.5 py-1 rounded bg-[#32343d] text-[#4cd7f6] font-mono text-xs">
                Geospatial GIS
              </span>
              <span className="px-2.5 py-1 rounded bg-[#32343d] text-[#4cd7f6] font-mono text-xs">
                OpenCV
              </span>
              <span className="px-2.5 py-1 rounded bg-[#32343d] text-[#4cd7f6] font-mono text-xs">
                FastAPI
              </span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={onOpenSlopeSenseModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4cd7f6]/10 hover:bg-[#4cd7f6]/20 border border-[#4cd7f6]/40 text-[#4cd7f6] font-display text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-sm"
              >
                <span>Request System Whitepaper</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* SECONDARY PROJECTS GRID: 2D GRAPHICS EDITOR & UNIHUSTEL             */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 2: 2D Graphics Editor & Vector Engine */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#1d1f27]/75 border border-[#8083ff]/25 backdrop-blur-xl flex flex-col justify-between group hover:border-[#8083ff]/60 transition-all shadow-lg">
            <div className="flex flex-col gap-6">
              {/* Visual Graphic Editor Canvas Mockup */}
              <div className="w-full h-56 rounded-xl bg-[#0b0e16] border border-[#464554]/40 p-3.5 flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#464554]/30 pb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffb4ab]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ddb7ff]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6]"></span>
                    <span className="font-mono text-xs text-[#908fa0] ml-2">
                      canvas_render_engine.c
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#4cd7f6] font-semibold">
                    60 FPS • VSYNC
                  </span>
                </div>

                {/* Geometric Canvas Visualization */}
                <div className="flex items-center justify-center my-auto relative">
                  <svg
                    className="w-56 h-28 text-[#c0c1ff] transition-transform duration-500"
                    style={{ transform: `rotate(${vectorRotation}deg) scale(${polygonScale})` }}
                    fill="none"
                    viewBox="0 0 200 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Wireframe Polygons & Bounding Boxes */}
                    <polygon
                      points="30,20 90,15 70,75 20,60"
                      stroke="#4cd7f6"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      fill="rgba(76, 215, 246, 0.12)"
                    />
                    <circle
                      cx="140"
                      cy="50"
                      r="32"
                      stroke="#c0c1ff"
                      strokeWidth="1.5"
                      fill="rgba(192, 193, 255, 0.1)"
                    />
                    {/* Vector Bezier Curve */}
                    <path
                      d="M20,80 Q80,10 170,80"
                      stroke="#ddb7ff"
                      strokeWidth="2"
                      fill="none"
                    />
                    {/* Selection handles */}
                    <rect x="28" y="18" width="5" height="5" fill="#ffffff" />
                    <rect x="88" y="13" width="5" height="5" fill="#ffffff" />
                    <rect x="68" y="73" width="5" height="5" fill="#ffffff" />
                    <rect x="18" y="58" width="5" height="5" fill="#ffffff" />
                  </svg>

                  {/* Micro Interaction Controls */}
                  <div className="absolute top-0 right-0 flex gap-1.5">
                    <button
                      onClick={rotateVector}
                      title="Rotate Vector Transformation"
                      className="p-1 rounded bg-[#272a32] text-[#4cd7f6] hover:bg-[#32343d] border border-[#464554] cursor-pointer"
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={toggleScale}
                      title="Toggle Scale Transformation"
                      className="p-1 rounded bg-[#272a32] text-[#ddb7ff] hover:bg-[#32343d] border border-[#464554] cursor-pointer text-[10px] font-mono px-1.5"
                    >
                      {polygonScale}x
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-[#908fa0]">
                  <span>POLYGONS: 1,420</span>
                  <span>RASTER PIPELINE: ACTIVE</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#e1e2ed]">
                    2D Graphics Editor &amp; Vector Engine
                  </h3>
                  <span className="font-mono text-xs text-[#4cd7f6] uppercase">
                    Systems Project
                  </span>
                </div>
                <p className="font-sans text-sm sm:text-base text-[#c7c4d7] leading-relaxed">
                  An interactive vector manipulation environment built to explore low-level graphics
                  algorithms, Bresenham line rasterization, 2D matrix transformations (affine
                  rotation, scaling), polygon clipping, and real-time canvas event dispatchers.
                </p>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#464554]/30 mt-6">
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#e1e2ed] font-mono text-xs">
                  C / C++
                </span>
                <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#e1e2ed] font-mono text-xs">
                  JavaScript Canvas
                </span>
                <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#e1e2ed] font-mono text-xs">
                  Linear Algebra
                </span>
              </div>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#4cd7f6] hover:text-[#c0c1ff] transition-colors"
              >
                <span>View Source</span>
                <Code2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: UniHustel */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#1d1f27]/75 border border-[#8083ff]/25 backdrop-blur-xl flex flex-col justify-between group hover:border-[#4cd7f6]/60 transition-all shadow-lg">
            <div className="flex flex-col gap-6">
              {/* Visual Web Application UI Mockup */}
              <div className="w-full h-56 rounded-xl bg-[#0b0e16] border border-[#464554]/40 p-3.5 flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#464554]/30 pb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#4cd7f6]" />
                    <span className="font-display text-sm font-bold text-[#e1e2ed]">
                      UniHustel Platform
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#4cd7f6]/15 text-[#4cd7f6] font-mono text-[10px] font-semibold">
                    STUDENT NETWORK
                  </span>
                </div>

                {/* Mini Dashboard Grid UI */}
                <div className="grid grid-cols-3 gap-2.5 my-auto">
                  <div className="p-2.5 rounded-lg bg-[#1d1f27]/90 border border-[#464554]/30 flex flex-col">
                    <span className="text-[10px] font-mono text-[#908fa0]">Projects</span>
                    <span className="font-display text-base font-bold text-[#e1e2ed]">
                      48 Active
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#1d1f27]/90 border border-[#464554]/30 flex flex-col">
                    <span className="text-[10px] font-mono text-[#908fa0]">Teammates</span>
                    <span className="font-display text-base font-bold text-[#4cd7f6]">320+</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#1d1f27]/90 border border-[#464554]/30 flex flex-col">
                    <span className="text-[10px] font-mono text-[#908fa0]">Resources</span>
                    <span className="font-display text-base font-bold text-[#ddb7ff]">1.2k</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-[#908fa0]">
                  <span>STATUS: BETA DEPLOYMENT</span>
                  <span>REVA CAMPUS REPOSITORY</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#e1e2ed]">
                    UniHustel — Academic Collaboration Network
                  </h3>
                  <span className="font-mono text-xs text-[#c0c1ff] uppercase">
                    Web Architecture
                  </span>
                </div>
                <p className="font-sans text-sm sm:text-base text-[#c7c4d7] leading-relaxed">
                  A purpose-built digital ecosystem designed to streamline peer-to-peer university
                  collaboration, technical project team discovery, study resource repositories, and
                  hackathon co-founder matching.
                </p>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#464554]/30 mt-6">
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#e1e2ed] font-mono text-xs">
                  Full-Stack Web
                </span>
                <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#e1e2ed] font-mono text-xs">
                  SQL Database
                </span>
                <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#e1e2ed] font-mono text-xs">
                  REST Architecture
                </span>
              </div>
              <button
                onClick={onOpenUniHustelModal}
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#4cd7f6] hover:text-[#c0c1ff] transition-colors cursor-pointer"
              >
                <span>Platform Info</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
