import React from 'react';
import { Building2, ArrowUpRight } from 'lucide-react';

export interface CorporateClient {
  id: string;
  name: string;
  logoUrl: string;
  campusLocation: string;
  relocationStats: string;
}

export const CORPORATE_CLIENTS: CorporateClient[] = [
  {
    id: 'zoho-1',
    name: 'Zoho Corporation',
    logoUrl: '/assets/aistudio/Zoho_879ea6f5.jpg',
    campusLocation: 'Estancia IT Park · Guduvancheri',
    relocationStats: '450+ IT Workstations & Server Racks Relocated',
  },
  {
    id: 'mahindra-1',
    name: 'Mahindra World City',
    logoUrl: '/assets/aistudio/Mahindra_world_city_2064d34f.png',
    campusLocation: 'GST Road Corridor · Chengalpattu',
    relocationStats: '38 Corporate & Industrial Plant Moves',
  },
  {
    id: 'mepz-1',
    name: 'MEPZ Special Economic Zone',
    logoUrl: '/assets/aistudio/MEPZ_cfd12865.jpg',
    campusLocation: 'GST Main Road · Tambaram, Chennai',
    relocationStats: '60+ SEZ Export Units & Cleanroom Shifts',
  },
  {
    id: 'zoho-2',
    name: 'Zoho Corporation',
    logoUrl: '/assets/aistudio/Zoho_879ea6f5.jpg',
    campusLocation: 'Estancia IT Park · Guduvancheri',
    relocationStats: 'Overnight Zero-Downtime Desk Cutovers',
  },
  {
    id: 'mahindra-2',
    name: 'Mahindra World City',
    logoUrl: '/assets/aistudio/Mahindra_world_city_2064d34f.png',
    campusLocation: 'Auto & IT SEZ Sector · GST Road',
    relocationStats: 'Dedicated 19ft & 22ft Closed Fleet Partner',
  },
  {
    id: 'mepz-2',
    name: 'MEPZ Special Economic Zone',
    logoUrl: '/assets/aistudio/MEPZ_cfd12865.jpg',
    campusLocation: 'Tambaram SEZ Hub · Chennai',
    relocationStats: 'ISO 9001:2015 Certified Logistics Vendor',
  },
];

interface CorporateClientsMarqueeProps {
  onTriggerQuote: () => void;
}

export const CorporateClientsMarquee: React.FC<CorporateClientsMarqueeProps> = ({
  onTriggerQuote,
}) => {
  const renderCard = (client: CorporateClient, duplicateKey: string) => {
    const isPaddedLogo = client.id.startsWith('mepz') || client.id.startsWith('mahindra');
    return (
      <button
        key={`${client.id}-${duplicateKey}`}
        type="button"
        onClick={onTriggerQuote}
        aria-label={`${client.name} — ${client.campusLocation}. Click to request a corporate relocation quote`}
        className="group relative flex items-center gap-4 bg-[#0B172E]/95 hover:bg-[#102040] border border-slate-800 hover:border-orange-500/70 rounded-lg px-5 py-4 shadow-lg hover:shadow-orange-600/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-left shrink-0 w-[380px] sm:w-[430px] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
      >
        {/* Crisp White Logo Frame */}
        <div className="w-24 h-16 sm:w-28 sm:h-16 rounded-md bg-white px-2 py-1 flex items-center justify-center shadow-sm shrink-0 overflow-hidden border border-slate-200/80 transition-transform duration-300 group-hover:scale-105">
          <img
            src={client.logoUrl}
            alt={`${client.name} official logo`}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-contain transition-transform duration-300 ${
              isPaddedLogo ? 'scale-135 group-hover:scale-145' : 'scale-110 group-hover:scale-115'
            }`}
          />
        </div>

        {/* Company Name & Relocation Details */}
        <div className="min-w-0 flex-1 space-y-1">
          <div className="flex items-center justify-between gap-2">
            <span className="text-base sm:text-lg font-extrabold text-white group-hover:text-orange-400 transition-colors whitespace-nowrap">
              {client.name}
            </span>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </div>
          <div className="text-xs font-semibold text-orange-400 truncate">
            {client.campusLocation}
          </div>
          <div className="text-[11px] text-slate-300 truncate">
            {client.relocationStats}
          </div>
        </div>
      </button>
    );
  };

  return (
    <section
      id="corporate-clients"
      aria-label="Trusted Corporate Clients and IT Parks"
      className="relative py-10 bg-[#060E1E] border-b border-slate-800/90 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-500">
          <Building2 className="w-4 h-4 text-orange-500 shrink-0" />
          <span>Preferred Corporate Relocation Partner</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-300 font-medium normal-case tracking-normal">
            Trusted by Premier IT Parks &amp; SEZ Hubs Across Chennai &amp; Guduvancheri
          </span>
        </div>

        <span className="text-xs text-slate-400 tabular-nums">
          100% On-Schedule Corporate Fleet Execution
        </span>
      </div>

      {/* Continuous Left-to-Right Scrolling Marquee Container */}
      <div className="relative w-full overflow-hidden py-1">
        {/* Left & Right Soft Edge Gradient Masks */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-[#060E1E] to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-[#060E1E] to-transparent"
        />

        {/* Dual Seamless Track Running Continuously Left-to-Right */}
        <div className="animate-marquee-ltr" data-testid="corporate-clients-marquee-track">
          <div className="flex items-center gap-5 pr-5">
            {CORPORATE_CLIENTS.map((client) => renderCard(client, 'track-a'))}
          </div>
          <div className="flex items-center gap-5 pr-5" aria-hidden="true">
            {CORPORATE_CLIENTS.map((client) => renderCard(client, 'track-b'))}
          </div>
        </div>
      </div>
    </section>
  );
};
