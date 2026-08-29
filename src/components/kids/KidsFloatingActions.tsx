import React, { useState } from 'react';
import { Phone, MessageCircle, ArrowUp, Sparkles, X } from 'lucide-react';
import { CLINIC_CONTACT } from '../../data/kidsDentalData';

interface KidsFloatingActionsProps {
  onOpenBooking: () => void;
}

export const KidsFloatingActions: React.FC<KidsFloatingActionsProps> = ({ onOpenBooking }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for back-to-top option
  React.useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none select-none">
      
      {/* Optional Scroll To Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="pointer-events-auto p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-md border border-slate-200 transition-all hover:scale-110 active:scale-95 text-xs flex items-center justify-center backdrop-blur-xs"
        >
          <ArrowUp className="w-4 h-4 text-slate-600" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${CLINIC_CONTACT.mobileLine}`}
        aria-label={`Call Pediatric Helpline ${CLINIC_CONTACT.phone}`}
        className="pointer-events-auto group relative flex items-center gap-2.5 bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-lg shadow-sky-900/30 transition-all hover:scale-105 active:scale-95 border border-sky-400/40"
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <Phone className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
        </div>
        
        {/* Desktop Expandable Label */}
        <span className="hidden sm:inline-block text-xs font-bold font-outfit tracking-wide whitespace-nowrap">
          Call Doctor: {CLINIC_CONTACT.phone}
        </span>

        {/* Mobile Mini Tooltip on Active/Hover */}
        <span className="sr-only sm:not-sr-only sm:hidden">
          Call Helpline
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={CLINIC_CONTACT.whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Dr. Maya Nair Clinic Concierge on WhatsApp"
        className="pointer-events-auto group relative flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-xl shadow-emerald-950/30 transition-all hover:scale-105 active:scale-95 border border-emerald-300/50"
      >
        {/* Live Active Pulse Dot */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-white"></span>
        </span>

        <div className="w-5 h-5 flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-white fill-white/20 group-hover:scale-110 transition-transform" />
        </div>

        {/* Desktop Expandable Label */}
        <span className="hidden sm:inline-block text-xs font-bold font-outfit tracking-wide whitespace-nowrap">
          WhatsApp Doctor
        </span>

        <span className="sr-only sm:not-sr-only sm:hidden">
          WhatsApp
        </span>
      </a>

    </div>
  );
};
