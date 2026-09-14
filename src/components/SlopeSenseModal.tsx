import { useState } from 'react';
import {
  X,
  Satellite,
  Droplets,
  AlertTriangle,
  Activity,
  CheckCircle2,
  FileText,
  Radio,
  Download,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface SlopeSenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SlopeSenseModal({ isOpen, onClose }: SlopeSenseModalProps) {
  const [rainfallMm, setRainfallMm] = useState<number>(145);
  const [soilSaturation, setSoilSaturation] = useState<number>(78);
  const [slopeDeg, setSlopeDeg] = useState<number>(38);
  const [groundVelocityMm, setGroundVelocityMm] = useState<number>(14.2);

  if (!isOpen) return null;

  // Real-time calculated risk index (0 to 100)
  const riskIndex = Math.min(
    100,
    Math.round(
      (rainfallMm / 200) * 35 +
        (soilSaturation / 100) * 35 +
        (slopeDeg / 60) * 15 +
        (groundVelocityMm / 20) * 15
    )
  );

  const getRiskStatus = () => {
    if (riskIndex >= 75)
      return {
        label: 'RED ALERT: IMMEDIATE EVACUATION',
        color: 'text-[#ffb4ab]',
        bg: 'bg-[#93000a]/30 border-[#ffb4ab]/40',
      };
    if (riskIndex >= 50)
      return {
        label: 'ORANGE ADVISORY: MONSOON SURGE',
        color: 'text-[#ddb7ff]',
        bg: 'bg-[#8083ff]/20 border-[#ddb7ff]/40',
      };
    return {
      label: 'GREEN: NORMAL BASELINE',
      color: 'text-[#4cd7f6]',
      bg: 'bg-[#4cd7f6]/15 border-[#4cd7f6]/40',
    };
  };

  const status = getRiskStatus();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#11131b] border border-[#8083ff]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(99,102,241,0.3)] my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#1d1f27] border border-[#464554] text-[#c7c4d7] hover:text-[#e1e2ed] hover:border-[#8083ff] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col gap-2 border-b border-[#464554]/40 pb-6 pr-10">
          <div className="flex items-center gap-2">
            <span className="px-3 py-0.5 rounded-full bg-[#4cd7f6]/15 text-[#4cd7f6] font-mono text-[11px] font-semibold">
              SMART INDIA HACKATHON
            </span>
            <span className="font-mono text-xs text-[#908fa0]">WHITEPAPER &amp; TELEMETRY LAB</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#e1e2ed]">
            SlopeSense: Predictive Geospatial Telemetry &amp; Early Warning System
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#c7c4d7]">
            Architected by Akash Sahani &amp; team for the Himalayan Corridor &amp; North-East
            Regional Civil Defense.
          </p>
        </div>

        {/* Interactive Simulation Sandbox */}
        <div className="py-6 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg font-bold text-[#e1e2ed] flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#4cd7f6]" />
              <span>Real-Time Sensor Telemetry Simulator</span>
            </h3>
            <span className="font-mono text-xs text-[#908fa0]">LIVE KERNEL: ACTIVE</span>
          </div>

          {/* Sliders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#1d1f27] border border-[#464554]/30 flex flex-col gap-2">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-[#c7c4d7]">24h Rainfall Accumulation:</span>
                <span className="text-[#4cd7f6] font-bold">{rainfallMm} mm</span>
              </div>
              <input
                type="range"
                min="0"
                max="250"
                value={rainfallMm}
                onChange={(e) => setRainfallMm(Number(e.target.value))}
                className="w-full accent-[#4cd7f6] cursor-pointer"
              />
            </div>

            <div className="p-4 rounded-xl bg-[#1d1f27] border border-[#464554]/30 flex flex-col gap-2">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-[#c7c4d7]">Volumetric Soil Saturation:</span>
                <span className="text-[#c0c1ff] font-bold">{soilSaturation}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={soilSaturation}
                onChange={(e) => setSoilSaturation(Number(e.target.value))}
                className="w-full accent-[#8083ff] cursor-pointer"
              />
            </div>

            <div className="p-4 rounded-xl bg-[#1d1f27] border border-[#464554]/30 flex flex-col gap-2">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-[#c7c4d7]">Terrain Slope Incline:</span>
                <span className="text-[#ddb7ff] font-bold">{slopeDeg}°</span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                value={slopeDeg}
                onChange={(e) => setSlopeDeg(Number(e.target.value))}
                className="w-full accent-[#ddb7ff] cursor-pointer"
              />
            </div>

            <div className="p-4 rounded-xl bg-[#1d1f27] border border-[#464554]/30 flex flex-col gap-2">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-[#c7c4d7]">InSAR Ground Displacement:</span>
                <span className="text-[#ffb4ab] font-bold">{groundVelocityMm} mm/day</span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                step="0.5"
                value={groundVelocityMm}
                onChange={(e) => setGroundVelocityMm(Number(e.target.value))}
                className="w-full accent-[#ffb4ab] cursor-pointer"
              />
            </div>
          </div>

          {/* Simulator Output Result */}
          <div className={`p-5 rounded-2xl border ${status.bg} flex items-center justify-between flex-wrap gap-4`}>
            <div className="flex items-center gap-3">
              <AlertTriangle className={`w-6 h-6 ${status.color}`} />
              <div>
                <span className="font-mono text-[10px] uppercase text-[#908fa0]">
                  Calculated Hazard Index:
                </span>
                <h4 className={`font-display text-xl sm:text-2xl font-bold ${status.color}`}>
                  {riskIndex}% — {status.label}
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#e1e2ed]">
                Est. Lead Time: <strong>{riskIndex > 65 ? '18-24 Hours' : '48+ Hours'}</strong>
              </span>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans text-[#c7c4d7] pt-2">
            <div className="p-3.5 rounded-xl bg-[#1d1f27]/50 border border-[#464554]/30">
              <strong className="text-[#e1e2ed] block mb-1">1. Hydrological Pore Pressure</strong>
              Models subterranean water accumulation that destabilizes granular shear resistance.
            </div>
            <div className="p-3.5 rounded-xl bg-[#1d1f27]/50 border border-[#464554]/30">
              <strong className="text-[#e1e2ed] block mb-1">2. Sentinel-1 SAR Integration</strong>
              Computes line-of-sight interferometric ground shift down to millimeter sensitivity.
            </div>
            <div className="p-3.5 rounded-xl bg-[#1d1f27]/50 border border-[#464554]/30">
              <strong className="text-[#e1e2ed] block mb-1">3. Automated Emergency Broadcast</strong>
              Alerts National Disaster Management Authority (NDMA) nodes and local patrol towers.
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="border-t border-[#464554]/40 pt-6 flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-xs text-[#908fa0]">
            STATUS: PREPARED FOR FIELD SENSING DEPLOYMENT
          </span>
          <button
            onClick={() => {
              alert('The SlopeSense technical specification summary has been initiated.');
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#8083ff] to-[#03b5d3] text-[#07006c] font-display font-semibold text-xs sm:text-sm cursor-pointer hover:scale-[1.02] transition-transform"
          >
            <Download className="w-4 h-4" />
            <span>Download Executive Briefing (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
