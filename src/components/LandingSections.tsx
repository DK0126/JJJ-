import React from 'react';
import {
  Building2,
  Home,
  ShieldCheck,
  ArrowUpRight,
  PhoneCall,
  Check,
} from 'lucide-react';
import { CalculatedQuote } from '../utils/quoteCalculator';
import { TestimonialsCarousel } from './TestimonialsCarousel';
import { CorporateClientsMarquee } from './CorporateClientsMarquee';

interface LandingSectionsProps {
  recentQuotes: CalculatedQuote[];
  onTriggerQuote: () => void;
}

interface ServiceItem {
  number: string;
  id: string;
  title: string;
  corridor: string;
  turnaround: string;
  summary: string;
  highlights: string[];
  rateHint: string;
  spanWide?: boolean;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01.',
    id: 'corporate',
    title: 'Corporate Office & IT Park Relocations',
    corridor: 'OMR · Guindy · Guduvancheri · Siruseri',
    turnaround: 'Overnight Weekend Cutover (< 4 Hours Downtime)',
    summary:
      'End-to-end dismantling, anti-static bubble wrapping for dual-monitor workstations, color-coded floor tagging, and reassembly at your new facility before Monday morning login.',
    highlights: [
      'Anti-static ESD packaging for workstations & VoIP hardware',
      'Dedicated floor-by-floor crate numbering & asset manifest',
      '19ft & 22ft weather-sealed container trucks with hydraulic ramps',
    ],
    rateHint: 'Starting at ₹14,500',
    spanWide: true,
  },
  {
    number: '02.',
    id: 'residential',
    title: 'Premium Household & Villa Shifting',
    corridor: 'Anna Nagar · Tambaram · Guduvancheri · Adyar',
    turnaround: 'Same-Day Door-to-Door Execution',
    summary:
      '3-layer corrugated & foam sheet protection for modular furniture, double-door refrigerators, glass dining tables, and fragile kitchenware.',
    highlights: [
      'Carpentry crew included for bed & wardrobe dismantling',
      'Dedicated wardrobe cartons & moisture-resistant sealing',
    ],
    rateHint: 'Starting at ₹5,500',
  },
  {
    number: '03.',
    id: 'server',
    title: 'Server Rack & Precision Lab Transit',
    corridor: 'Sriperumbudur · Oragadam · Mahindra World City',
    turnaround: 'Zero-Vibration Air-Ride Fleet',
    summary:
      'Specialized shock-absorbent pallet crating and climate-shielded transport for 42U server racks, medical diagnostic rigs, and CNC calibration tools.',
    highlights: [
      'Shock-watch impact sensors on every high-value crate',
      'Comprehensive transit insurance coverage up to ₹50 Lakhs',
    ],
    rateHint: 'Starting at ₹18,500',
  },
  {
    number: '04.',
    id: 'storage',
    title: 'Short & Long-Term Palletized Warehousing',
    corridor: 'Guduvancheri GST Road Hub (42,000 sq.ft.)',
    turnaround: '24/7 CCTV & Fire-Suppressed Facility',
    summary:
      'Flexible interim storage during office renovations or phased corporate handovers with barcoded inventory retrieval on 4-hour notice.',
    highlights: [
      'Pest-controlled, elevated concrete dock bays on GST Road',
      'Weekly inventory audit reports & on-demand partial dispatch',
    ],
    rateHint: 'Starting at ₹3,200 / month',
    spanWide: true,
  },
];

interface CaseStudyItem {
  id: string;
  category: 'corporate' | 'residential' | 'fleet';
  categoryLabel: string;
  title: string;
  route: string;
  metricPrimary: string;
  metricSecondary: string;
  description: string;
  clientAttribution: string;
}

const GALLERY_CASES: CaseStudyItem[] = [
  {
    id: 'case-1',
    category: 'corporate',
    categoryLabel: 'IT & Corporate',
    title: '180-Seat FinTech Operations Center Cutover',
    route: 'Tidel Park (OMR) to Mahindra World City, Near Guduvancheri',
    metricPrimary: '3.5 Hours Total IT Downtime',
    metricSecondary: '420 Crates · 0 Damaged Assets',
    description:
      'Executed across a single Saturday night window using 4 closed 19ft JJJ container trucks and a 24-member uniformed crew.',
    clientAttribution: 'Raghavan S., VP of Workplace Operations, FinAxis Technologies Chennai',
  },
  {
    id: 'case-2',
    category: 'fleet',
    categoryLabel: 'Heavy Fleet',
    title: 'Precision Electronics Lab & Cleanroom Relocation',
    route: 'Guindy Industrial Estate to Oragadam SIPCOT via Guduvancheri',
    metricPrimary: '100% Calibration Integrity',
    metricSecondary: '18 Shock-Isolated Racks Moved',
    description:
      'Deployed hydraulic tail-lift containers and custom VCI anti-corrosion wrapping for sensitive optical testing benches.',
    clientAttribution: 'Meenakshi Sundaram, Plant Head, AeroSense Systems Pvt. Ltd.',
  },
  {
    id: 'case-3',
    category: 'residential',
    categoryLabel: 'Residential',
    title: '4 BHK Independent Villa Full-Service Relocation',
    route: 'Anna Nagar East to Nandivaram, Guduvancheri',
    metricPrimary: '6.5 Hours Door-to-Door',
    metricSecondary: '145 Cartons · Full Unpacking',
    description:
      'Included teakwood furniture crating, split AC uninstallation, chandelier boxing, and full kitchen setup on the same evening.',
    clientAttribution: 'Dr. Karthikeyan V., Senior Consultant, Apollo Hospitals Chennai',
  },
];

export const LandingSections: React.FC<LandingSectionsProps> = ({
  recentQuotes,
  onTriggerQuote,
}) => {
  return (
    <div className="bg-slate-950 text-slate-100">
      {/* Continuous Left-to-Right Corporate Clients Marquee (Directly Below Hero Section) */}
      <CorporateClientsMarquee onTriggerQuote={onTriggerQuote} />

      {/* Live Session Estimates Banner (Appears when user generates quotes in the Hero Card) */}
      {recentQuotes.length > 0 && (
        <section
          aria-label="Recent Instant Quotes"
          className="bg-[#0B1933] border-y border-orange-500/30 py-6"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                  Saved Estimate History ({recentQuotes.length})
                </p>
                <h2 className="text-lg font-bold text-white mt-0.5">
                  Your Recent Chennai &amp; Guduvancheri Relocation Quotes
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {recentQuotes.map((q) => (
                  <div
                    key={q.referenceId}
                    className="bg-slate-950/80 border border-slate-800 rounded-md px-4 py-2.5 text-xs"
                  >
                    <div className="font-bold text-white tabular-nums">
                      {q.referenceId} · <span className="text-orange-400">{q.formattedRange}</span>
                    </div>
                    <div className="text-slate-300 mt-0.5 tabular-nums">
                      {q.fromAddress} → {q.toAddress} ({q.distanceKm} km · {q.shiftingDate})
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION: ABOUT US (#about) */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="scroll-mt-24 py-20 lg:py-24 border-b border-slate-800/80 bg-[#071020]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Mission & Promise */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-500">
                <span>About JJJ Packers and Movers</span>
              </div>

              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
                style={{ textWrap: 'balance' }}
              >
                Redefining Relocation in Chennai &amp; Beyond
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Founded in 2017 and headquartered in Guduvancheri, JJJ Packers and Movers was
                established with a single mission: to take the stress out of shifting. Over the
                years, we have grown from a dedicated local team into one of Chennai’s most trusted
                logistics and relocation experts, delivering seamless moving experiences with
                precision, speed, and utmost care.
              </p>

              {/* The JJJ Promise Box */}
              <div className="p-6 rounded-lg bg-slate-900/90 border border-orange-500/30 space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-md bg-orange-600/15 text-orange-500 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-white tracking-tight">
                    The JJJ Promise
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Whether you are an individual moving to a new apartment or a global enterprise
                  relocating your headquarters, our commitment remains the same. With our modern
                  fleet, highly trained crew, and transparent tracking, we guarantee a secure,
                  on-time, and hassle-free move from the first box packed to the final item
                  delivered.
                </p>
                <p className="pt-1 text-base sm:text-lg font-extrabold text-orange-400 tracking-tight">
                  Your Journey, Safely Delivered.
                </p>
              </div>
            </div>

            {/* Right Column: Trusted by Industry Leaders & Families Alike */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Trusted by Industry Leaders &amp; Families Alike
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  At JJJ Packers and Movers, we believe that no move is too big or too small. We
                  bring the same level of rigorous planning and heavy-duty logistics to every job.
                </p>
              </div>

              <div className="space-y-5">
                <div className="p-6 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-orange-500/40 transition-colors space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-orange-600/15 text-orange-500 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      Corporate &amp; Commercial Expertise
                    </h4>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    We are proud to be the relocation partner of choice for major enterprises. We
                    have successfully managed complex, large-scale commercial shifts for corporate
                    clients in premier IT and business hubs, including{' '}
                    <strong className="text-white">Zoho in Mahindra World City</strong> and major
                    organizations operating within{' '}
                    <strong className="text-white">MEPZ (Madras Export Processing Zone)</strong>. We
                    understand that in business, time is money, which is why our corporate moves are
                    designed for zero friction and minimal operational downtime.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-orange-500/40 transition-colors space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-orange-600/15 text-orange-500 flex items-center justify-center shrink-0">
                      <Home className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Residential Relocations</h4>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Alongside our corporate portfolio, we have helped countless individuals and
                    families transition smoothly into their new homes across Chennai and across the
                    country. From delicate heirlooms to heavy furniture, our trained professionals
                    handle your personal belongings as if they were our own.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: SERVICES (#services) — Asymmetric Bento Grid with Editorial Numbering */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="scroll-mt-24 py-20 lg:py-24 border-b border-slate-800/80 bg-slate-950"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-500">
                <span>Core Capabilities</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">End-to-End Relocation Engineering</span>
              </div>
              <h2
                id="services-heading"
                className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Specialized Relocation Services in Chennai &amp; Guduvancheri
              </h2>
            </div>
            <button
              type="button"
              onClick={onTriggerQuote}
              className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Calculate Custom Estimate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <article
                key={service.id}
                className={`p-6 sm:p-8 rounded-lg bg-[#0A152B] border border-slate-800 hover:border-orange-500/50 transition-colors flex flex-col justify-between gap-6 ${
                  service.spanWide ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                    <span>{service.corridor}</span>
                    <span className="text-orange-400 font-semibold tabular-nums">
                      {service.rateHint}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    <span className="text-orange-500 mr-2 tabular-nums">{service.number}</span>
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {service.summary}
                  </p>

                  <ul className="space-y-2 pt-2">
                    {service.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                      >
                        <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <span className="text-xs text-slate-400">{service.turnaround}</span>
                  <button
                    type="button"
                    onClick={onTriggerQuote}
                    className="text-xs font-bold uppercase tracking-wider text-orange-400 hover:text-orange-300 inline-flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Get Quote</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: GALLERY & VERIFIED RELOCATION CASE STUDIES (#gallery) */}
      <section
        id="gallery"
        aria-labelledby="gallery-heading"
        className="scroll-mt-24 py-20 lg:py-24 bg-[#071020] border-b border-slate-800/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-500">
                <span>Execution Gallery &amp; Proof</span>
              </div>
              <h2
                id="gallery-heading"
                className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
              >
                Verified Corporate &amp; Household Move Benchmarks
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {GALLERY_CASES.map((item) => (
              <article
                key={item.id}
                className="rounded-lg bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  {/* Unboxed Metadata with Separator */}
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="text-orange-400 font-semibold">{item.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.route}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white leading-snug">{item.title}</h3>

                  <div className="py-3 border-y border-slate-800/80 flex items-center justify-between gap-2 text-xs">
                    <span className="font-bold text-white tabular-nums">{item.metricPrimary}</span>
                    <span className="text-slate-400 tabular-nums">{item.metricSecondary}</span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
                </div>

                <blockquote className="pt-2 text-xs text-slate-400 italic">
                  “Zero downtime during our shift.” —{' '}
                  <span className="not-italic font-medium text-slate-300">
                    {item.clientAttribution}
                  </span>
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: CUSTOMER TESTIMONIALS HORIZONTAL SCROLL CAROUSEL (#testimonials) */}
      <TestimonialsCarousel />

      {/* QUIET CORPORATE FOOTER */}
      <footer className="bg-[#050B16] py-12 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-1">
            <div className="text-xl font-extrabold text-white tracking-tight">
              J<span className="text-orange-500">JJ</span> PACKERS AND MOVERS
            </div>
            <p className="text-xs text-slate-400">
              No. 48, GST Main Road, Nandivaram, Guduvancheri, Chennai – 603202 · Guindy Hub: SIDCO
              Industrial Estate, Chennai – 600032
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <a href="#home" className="hover:text-orange-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-orange-400 transition-colors">
              About Us
            </a>
            <a href="#services" className="hover:text-orange-400 transition-colors">
              Services
            </a>
            <a href="#gallery" className="hover:text-orange-400 transition-colors">
              Gallery
            </a>
            <a href="#testimonials" className="hover:text-orange-400 transition-colors">
              Reviews
            </a>
            <a
              href="tel:+917530052757"
              className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-orange-400 transition-colors tabular-nums"
            >
              <PhoneCall className="w-3.5 h-3.5 text-orange-500" />
              <span>+91 7530052757</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
