import React, { useState } from 'react';
import { Calendar, Menu, X, Smile, MessageCircle } from 'lucide-react';
import { CLINIC_CONTACT } from '../../data/kidsDentalData';

interface KidsNavbarProps {
  onOpenBooking: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const KidsNavbar: React.FC<KidsNavbarProps> = ({ onOpenBooking, onNavigateSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-2xs">
      
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-3 sm:gap-4 w-full">
        
        {/* Brand Crest & Title */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0 select-none"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-sky-600 to-teal-600 text-white flex items-center justify-center shadow-sm shadow-sky-500/20 group-hover:scale-105 transition-transform shrink-0">
            <Smile className="w-5 h-5 text-white stroke-[2.2]" />
          </div>
          <div>
            <div className="font-outfit font-extrabold text-base sm:text-lg tracking-tight text-slate-950 flex items-center gap-1.5 sm:gap-2 leading-none">
              <span>Little Orbit</span>
              <span className="hidden sm:inline-block text-[10px] font-bold tracking-wider text-teal-800 uppercase bg-teal-50 border border-teal-200/80 px-2 py-0.5 rounded-full">
                Pediatric Dental
              </span>
            </div>
            <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-1">
              Indiranagar • Center for Kids & Airway
            </div>
          </div>
        </div>

        {/* Desktop Centered Links */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-semibold text-slate-600">
          <button 
            onClick={() => handleNavClick('age-journey')} 
            className="hover:text-sky-600 transition-colors py-1 relative group"
          >
            Age Milestones
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full rounded-full" />
          </button>
          <button 
            onClick={() => handleNavClick('services')} 
            className="hover:text-sky-600 transition-colors py-1 relative group"
          >
            Painless Treatments
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full rounded-full" />
          </button>
          <button 
            onClick={() => handleNavClick('sensory')} 
            className="hover:text-sky-600 transition-colors py-1 relative group"
          >
            Sensory Suites
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full rounded-full" />
          </button>
          <button 
            onClick={() => handleNavClick('team')} 
            className="hover:text-sky-600 transition-colors py-1 relative group"
          >
            Specialist Doctors
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full rounded-full" />
          </button>
          <button 
            onClick={() => handleNavClick('guidance')} 
            className="hover:text-sky-600 transition-colors py-1 relative group"
          >
            Parent Guide
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full rounded-full" />
          </button>
          <button 
            onClick={() => handleNavClick('faq')} 
            className="hover:text-sky-600 transition-colors py-1 relative group"
          >
            Parent FAQs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full rounded-full" />
          </button>
        </nav>

        {/* CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <a
            href={CLINIC_CONTACT.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white font-outfit font-semibold text-xs sm:text-sm tracking-wide shadow-sm shadow-sky-300/40 hover:shadow-md active:scale-95 transition-all"
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-100" />
            <span>Book Visit</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 hover:bg-slate-100 shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-sky-100 px-6 py-6 space-y-3 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <button
            onClick={() => handleNavClick('age-journey')}
            className="w-full text-left font-semibold text-xs text-slate-800 uppercase tracking-wider py-2.5 border-b border-slate-100 hover:text-sky-600"
          >
            Age Milestones (0 – 18 Years)
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="w-full text-left font-semibold text-xs text-slate-800 uppercase tracking-wider py-2.5 border-b border-slate-100 hover:text-sky-600"
          >
            Painless Treatments & Laser Care
          </button>
          <button
            onClick={() => handleNavClick('sensory')}
            className="w-full text-left font-semibold text-xs text-slate-800 uppercase tracking-wider py-2.5 border-b border-slate-100 hover:text-sky-600"
          >
            Sensory Comfort Suites & Therapy Dog
          </button>
          <button
            onClick={() => handleNavClick('team')}
            className="w-full text-left font-semibold text-xs text-slate-800 uppercase tracking-wider py-2.5 border-b border-slate-100 hover:text-sky-600"
          >
            MDS Pediatric Specialist Doctors
          </button>
          <button
            onClick={() => handleNavClick('guidance')}
            className="w-full text-left font-semibold text-xs text-slate-800 uppercase tracking-wider py-2.5 border-b border-slate-100 hover:text-sky-600"
          >
            Parent Guide & Insurance OPD
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="w-full text-left font-semibold text-xs text-slate-800 uppercase tracking-wider py-2.5 border-b border-slate-100 hover:text-sky-600"
          >
            Frequently Asked Questions
          </button>
          <button
            onClick={() => handleNavClick('location')}
            className="w-full text-left font-semibold text-xs text-slate-800 uppercase tracking-wider py-2.5 hover:text-sky-600"
          >
            Location, Parking & Timings
          </button>

          <div className="pt-3 space-y-2">
            <a
              href={CLINIC_CONTACT.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest py-3 rounded-xl border border-emerald-200 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp ({CLINIC_CONTACT.whatsapp})</span>
            </a>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-gradient-to-r from-sky-600 to-teal-600 text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-200" />
              <span>Schedule Child’s Visit</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
};

