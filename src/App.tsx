/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from 'react';
import { Navbar, NavSectionId } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LandingSections } from './components/LandingSections';
import { ToastNotification } from './components/ToastNotification';
import { CalculatedQuote, SubmittedEnquiry } from './utils/quoteCalculator';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSectionId>('home');
  const [recentQuotes, setRecentQuotes] = useState<CalculatedQuote[]>([]);
  const [activeToastEnquiry, setActiveToastEnquiry] = useState<SubmittedEnquiry | null>(null);
  const [formHighlighted, setFormHighlighted] = useState(false);

  const fromInputRef = useRef<HTMLInputElement | null>(null);

  const handleTriggerQuote = () => {
    setActiveSection('home');
    const cardEl = document.getElementById('quote-form-card');
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setFormHighlighted(true);
    setTimeout(() => {
      fromInputRef.current?.focus();
    }, 150);
    setTimeout(() => {
      setFormHighlighted(false);
    }, 1800);
  };

  const handleQuoteGenerated = (quote: CalculatedQuote) => {
    setRecentQuotes((prev) => [quote, ...prev.filter((q) => q.referenceId !== quote.referenceId)]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased selection:bg-orange-600 selection:text-white">
      <Navbar
        activeSection={activeSection}
        onNavigate={setActiveSection}
        onTriggerQuote={handleTriggerQuote}
      />

      <ToastNotification
        enquiry={activeToastEnquiry}
        onClose={() => setActiveToastEnquiry(null)}
      />

      <main>
        <HeroSection
          fromInputRef={fromInputRef}
          onTriggerQuote={handleTriggerQuote}
          onQuoteGenerated={handleQuoteGenerated}
          onEnquirySubmitted={setActiveToastEnquiry}
          formHighlighted={formHighlighted}
        />

        <LandingSections
          recentQuotes={recentQuotes}
          onTriggerQuote={handleTriggerQuote}
        />
      </main>
    </div>
  );
}
