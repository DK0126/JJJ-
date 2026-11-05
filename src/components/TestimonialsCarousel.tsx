import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from 'lucide-react';

export interface TestimonialItem {
  id: string;
  customerName: string;
  role: string;
  organization: string;
  category: 'corporate' | 'residential' | 'industrial';
  categoryLabel: string;
  route: string;
  moveDate: string;
  rating: number;
  outcomeHeadline: string;
  reviewText: string;
  verifiedMetric: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'rev-1',
    customerName: 'AravindSubramanian K.',
    role: 'Director of Facilities & IT Infrastructure',
    organization: 'Zoho Vendor Partner Hub, Estancia IT Park',
    category: 'corporate',
    categoryLabel: 'Corporate IT Relocation',
    route: 'Guindy to GST Road, Guduvancheri',
    moveDate: 'October 2026',
    rating: 5,
    outcomeHeadline: '120 dual-monitor workstations moved overnight with zero Monday downtime',
    reviewText:
      'Before hiring JJJ Packers and Movers, we were worried about losing two full billing days shifting our engineering floor. Their 18-member uniformed crew arrived Friday at 7 PM, packed every monitor and server rack in anti-static crates, and had all 120 desks reassembled in Guduvancheri by Sunday Afternoon.',
    verifiedMetric: '0 Damaged Monitors · 3.5 Hr IT Cutover',
  },
  {
    id: 'rev-2',
    customerName: 'Priya Dharshini & Vignesh R.',
    role: 'Homeowners',
    organization: 'SRM Greenwoods Enclave, Guduvancheri',
    category: 'residential',
    categoryLabel: '3 BHK Villa Shifting',
    route: 'Anna Nagar West to Nandivaram, Guduvancheri',
    moveDate: 'September 2026',
    rating: 5,
    outcomeHeadline: 'Fragile Pooja mandapam, glass dining table, and 2 ACs shifted without a scratch',
    reviewText:
      'Moving a full 3 BHK across 38 km of Chennai traffic felt overwhelming until JJJ took over. They used 5-layer corrugated foam sheets for our Burma teak furniture, unmounted both split ACs cleanly, and unpacked every kitchen carton the same evening at the exact price quoted.',
    verifiedMetric: '118 Cartons · Same-Day Unpacking',
  },
  {
    id: 'rev-3',
    customerName: 'Senthil Nathan M.',
    role: 'VP of Supply Chain & Plant Operations',
    organization: 'Kaveri Precision Components Pvt. Ltd.',
    category: 'industrial',
    categoryLabel: 'Industrial & Lab Transit',
    route: 'Ambattur Industrial Estate to Oragadam via Guduvancheri',
    moveDate: 'October 2026',
    rating: 5,
    outcomeHeadline: 'Optical CMM testing benches delivered with 100% factory calibration intact',
    reviewText:
      'Standard transporters refused to guarantee vibration thresholds for our CNC inspection rigs. JJJ deployed their 22ft air-ride closed container with hydraulic tail-lifts and VCI moisture barriers. Every machine passed post-move laser calibration on the first test.',
    verifiedMetric: '₹45L Insured Cargo · Zero Vibration Drift',
  },
  {
    id: 'rev-4',
    customerName: 'Deepak Chakravarthy',
    role: 'Head of People & Workplace',
    organization: 'CloudScale Analytics India',
    category: 'corporate',
    categoryLabel: 'Corporate Office Move',
    route: 'OMR Sholinganallur to Tambaram MEPZ Corridor',
    moveDate: 'August 2026',
    rating: 5,
    outcomeHeadline: 'Phased 2-floor office consolidation completed 5 hours ahead of schedule',
    reviewText:
      'Every blue JJJ rolling crate was color-coded by department and desk number. Employees simply walked into the new facility on Monday morning and found their docking stations, chairs, and personal lockers waiting at their assigned bays.',
    verifiedMetric: '85 Workstations · 100% On-Schedule',
  },
  {
    id: 'rev-5',
    customerName: 'Lakshmi Narayanan S.',
    role: 'Retired Chief Engineer',
    organization: 'Southern Railway Officers Colony, Tambaram',
    category: 'residential',
    categoryLabel: 'Household & Storage',
    route: 'Velachery to Guduvancheri GST Road',
    moveDate: 'July 2026',
    rating: 5,
    outcomeHeadline: '45 days of safe palletized storage during home renovation followed by smooth delivery',
    reviewText:
      'When our new house in Guduvancheri had flooring delays, JJJ stored our entire household inventory in their CCTV-monitored GST Road warehouse for six weeks. Everything was delivered dust-free and reassembled with complete courtesy and transparent billing.',
    verifiedMetric: '45-Day Storage · Zero Moisture Damage',
  },
];

export const TestimonialsCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'corporate' | 'residential' | 'industrial'>('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredTestimonials =
    selectedCategory === 'all'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((item) => item.category === selectedCategory);

  const updateScrollState = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 8);

    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 24
      : 400;
    const nextIdx = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(filteredTestimonials.length - 1, Math.max(0, nextIdx)));
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    }
    setActiveIndex(0);
    const timer = setTimeout(updateScrollState, 150);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const handleScrollByCard = (direction: 'prev' | 'next') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const step = firstCard ? firstCard.offsetWidth + 24 : 420;
    el.scrollBy({
      left: direction === 'next' ? step : -step,
      behavior: 'smooth',
    });
  };

  const handleScrollToIndex = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const step = firstCard ? firstCard.offsetWidth + 24 : 420;
    el.scrollTo({
      left: index * step,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20 lg:py-24 bg-slate-950 border-b border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header + Filter & Carousel Arrow Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-500">
              <span>Customer Reviews &amp; Social Proof</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-300 tabular-nums">4.9 / 5.0 Average Across 1,420+ Verified Moves</span>
            </div>
            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Trusted by IT Leaders &amp; Families Across Chennai &amp; Guduvancheri
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-4">
            {/* Category Filter Buttons */}
            <div
              role="group"
              aria-label="Filter customer testimonials"
              className="flex flex-wrap items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg"
            >
              {(
                [
                  { id: 'all', label: 'All Reviews' },
                  { id: 'corporate', label: 'Corporate & IT' },
                  { id: 'residential', label: 'Residential' },
                  { id: 'industrial', label: 'Industrial' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    selectedCategory === tab.id
                      ? 'bg-orange-600 text-white shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Carousel Prev / Next Navigation Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => handleScrollByCard('prev')}
                disabled={!canScrollLeft}
                aria-label="Scroll to previous testimonial"
                className="w-10 h-10 rounded-md bg-slate-900 hover:bg-orange-600 disabled:opacity-40 disabled:hover:bg-slate-900 text-white border border-slate-700 hover:border-orange-500 flex items-center justify-center transition-colors cursor-pointer disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => handleScrollByCard('next')}
                disabled={!canScrollRight}
                aria-label="Scroll to next testimonial"
                className="w-10 h-10 rounded-md bg-slate-900 hover:bg-orange-600 disabled:opacity-40 disabled:hover:bg-slate-900 text-white border border-slate-700 hover:border-orange-500 flex items-center justify-center transition-colors cursor-pointer disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Carousel Track */}
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollState}
          role="region"
          aria-label="Customer Testimonials Carousel"
          tabIndex={0}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 -mx-1 px-1 focus:outline-none"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#EA580C #0F172A' }}
        >
          {filteredTestimonials.map((item) => (
            <article
              key={item.id}
              className="snap-start shrink-0 w-[88vw] sm:w-[420px] lg:w-[440px] rounded-lg bg-[#0A152B] border border-slate-800 hover:border-orange-500/60 transition-colors p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-xl"
            >
              <div className="space-y-4">
                {/* Top Row: Star Rating + Unboxed Metadata */}
                <div className="flex items-center justify-between gap-2">
                  <div
                    className="flex items-center gap-1 text-orange-500"
                    aria-label={`${item.rating} out of 5 stars`}
                  >
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="text-orange-400 font-semibold">{item.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.moveDate}</span>
                  </div>
                </div>

                {/* Concrete Outcome Headline */}
                <h3 className="text-lg font-bold text-white leading-snug">
                  “{item.outcomeHeadline}”
                </h3>

                {/* Detailed Customer Review */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.reviewText}
                </p>
              </div>

              {/* Footer: Verified Outcome Metric + Customer Attribution */}
              <div className="pt-4 border-t border-slate-800/90 space-y-3">
                <div className="flex items-center justify-between gap-2 text-xs text-slate-300">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.verifiedMetric}</span>
                  </span>
                  <span className="text-slate-400 truncate">{item.route}</span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-bold text-white">{item.customerName}</div>
                    <div className="text-xs text-slate-400">
                      {item.role} · {item.organization}
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-orange-500/30 shrink-0" aria-hidden="true" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Pagination Progress & Direct Slide Controls */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2" role="tablist" aria-label="Select testimonial slide">
            {filteredTestimonials.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={activeIndex === idx}
                aria-label={`View review ${idx + 1} by ${item.customerName}`}
                onClick={() => handleScrollToIndex(idx)}
                className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                  activeIndex === idx
                    ? 'w-8 bg-orange-500'
                    : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          <p className="text-xs text-slate-400 tabular-nums">
            Showing {filteredTestimonials.length} verified Chennai &amp; Guduvancheri reviews · Swipe or use arrows to browse
          </p>
        </div>
      </div>
    </section>
  );
};
