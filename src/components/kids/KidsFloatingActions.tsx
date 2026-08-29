import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { CLINIC_CONTACT } from '../../data/kidsDentalData';

interface KidsFloatingActionsProps {
  onOpenBooking: () => void;
}

export const KidsFloatingActions: React.FC<KidsFloatingActionsProps> = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
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
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none select-none">
      
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="pointer-events-auto p-2.5 rounded-full bg-white text-slate-700 shadow-lg border border-slate-200 transition-all hover:bg-slate-50 active:scale-95 text-xs flex items-center justify-center cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${CLINIC_CONTACT.mobileLine}`}
        aria-label={`Call Pediatric Helpline ${CLINIC_CONTACT.phone}`}
        className="pointer-events-auto group relative flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 p-3 sm:px-4 sm:py-2.5 rounded-full shadow-lg border border-slate-200 transition-all hover:scale-105 active:scale-95 cursor-pointer font-bold"
      >
        <div className="w-4 h-4 flex items-center justify-center">
          <Phone className="w-3.5 h-3.5 text-teal-600" />
        </div>
        
        {/* Desktop Label */}
        <span className="hidden sm:inline-block text-xs font-semibold text-slate-700 whitespace-nowrap">
          Call: {CLINIC_CONTACT.phone}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={CLINIC_CONTACT.whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Dr. Maya Nair Clinic Concierge on WhatsApp"
        className="pointer-events-auto group relative flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white p-3 sm:px-4 sm:py-2.5 rounded-full shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer font-bold"
      >
        {/* Active Pulse Dot */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300 border border-white"></span>
        </span>

        <div className="w-4 h-4 flex items-center justify-center">
          <MessageCircle className="w-4 h-4 text-white" />
        </div>

        {/* Desktop Label */}
        <span className="hidden sm:inline-block text-xs font-bold text-white whitespace-nowrap">
          WhatsApp Doctor
        </span>
      </a>

    </div>
  );
};
