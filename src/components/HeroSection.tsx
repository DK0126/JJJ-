import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { LeadFormCard } from './LeadFormCard';
import { CalculatedQuote, SubmittedEnquiry } from '../utils/quoteCalculator';
import heroBgImage from '../assets/images/clean_jjj_hero_bg_1793841469590.jpg';

interface HeroSectionProps {
  fromInputRef: React.RefObject<HTMLInputElement | null>;
  onTriggerQuote: () => void;
  onQuoteGenerated: (quote: CalculatedQuote) => void;
  onEnquirySubmitted?: (enquiry: SubmittedEnquiry) => void;
  formHighlighted: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  fromInputRef,
  onTriggerQuote,
  onQuoteGenerated,
  onEnquirySubmitted,
  formHighlighted,
}) => {
  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative w-full min-h-screen flex items-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-slate-950"
    >
      {/* Full-width, full-height Background Image with fallback container */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
        <img
          src={heroBgImage}
          alt="JJJ Packers and Movers relocation crew loading corporate office equipment into moving truck in Chennai"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center select-none pointer-events-none"
        />

        {/* Subtle Dark Linear-Gradient Overlay (darker on the left and bottom for text readability while keeping the background scene clearly visible) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/45 via-[52%] to-transparent"
        />

        {/* Subtle bottom-to-top linear gradient overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 via-[25%] to-transparent"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT COLUMN: Main Copy & Call to Action */}
          <div className="lg:col-span-7 text-left space-y-6 animate-fade-in-up">
            {/* Subtle Unboxed Regional Service Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-orange-400 uppercase">
              <span>ISO 9001:2015 Certified Logistics</span>
            </div>

            {/* H1 Headline: Large, bold, white, uppercase, tight line-height */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] font-extrabold text-white uppercase leading-[1.06] tracking-tight max-w-2xl"
              style={{ textWrap: 'balance' }}
            >
              TRUSTED RELOCATION SERVICES IN CHENNAI &amp; GUDUVANCHERI
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-xl">
              Specialized Office &amp; Corporate Relocations. Seamless Moving with Minimal
              Downtime.
            </p>

            {/* Action Area: Solid Orange Button + CALL US NOW Block */}
            <div className="pt-2 flex flex-wrap items-center gap-6 sm:gap-8">
              <button
                type="button"
                onClick={onTriggerQuote}
                className="group inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm sm:text-base uppercase tracking-wide px-7 py-4 rounded-md shadow-xl shadow-orange-600/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <div className="flex flex-col justify-center">
                <span className="text-xs font-semibold tracking-[0.14em] text-slate-300 uppercase">
                  CALL US NOW
                </span>
                <a
                  href="tel:+917530052757"
                  className="mt-0.5 inline-flex items-center gap-2 text-xl sm:text-2xl font-extrabold text-white hover:text-orange-400 transition-colors tracking-tight tabular-nums whitespace-nowrap"
                >
                  <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                  <span>+91 7530052757</span>
                </a>
              </div>
            </div>

            {/* Key Operational Metrics (Unboxed Clean Typography) */}
            <div className="pt-4 border-t border-white/15 max-w-md grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white tabular-nums">
                  4,800+
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  Corporate &amp; Home Moves
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white tabular-nums">
                  99.4%
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  Damage-Free Delivery
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Lead Form Card */}
          <div className="lg:col-span-5 lg:mt-16 animate-fade-in-up-delayed">
            <LeadFormCard
              fromInputRef={fromInputRef}
              onQuoteGenerated={onQuoteGenerated}
              onEnquirySubmitted={onEnquirySubmitted}
              highlighted={formHighlighted}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
