import React, { useState } from 'react';
import { Calendar, Menu, X, MessageCircle, Star, ShieldCheck, Heart } from 'lucide-react';
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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 w-full max-w-full transition-all">
      {/* Top Reassurance Bar */}
      <div className="bg-teal-50/80 border-b border-teal-100/60 px-4 py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-teal-900 font-medium">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>AIIMS & Manipal Pediatric Faculty</span>
            </span>
            <span className="text-teal-300">•</span>
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>100% Fear-Free & Needle-Free Protocols</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-amber-600 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>5.0 (520+ Bengaluru Parents)</span>
            </div>
            <span className="text-teal-300">•</span>
            <span className="text-slate-600">100 Feet Rd, Indiranagar</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-2 sm:gap-4 w-full">
        
        {/* Brand Crest & Title */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none min-w-0 shrink"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-teal-600 text-white flex items-center justify-center font-bold text-sm sm:text-lg shadow-md shadow-teal-600/20 group-hover:bg-teal-700 transition-colors shrink-0">
            <span>LO</span>
          </div>
          <div className="min-w-0">
            <div className="text-base sm:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-1.5 sm:gap-2 leading-none">
              <span className="truncate">Little Orbit</span>
              <span className="text-[10px] font-semibold tracking-wider text-teal-700 uppercase px-2 py-0.5 bg-teal-50 border border-teal-200 rounded-full hidden sm:inline-block">
                Pediatric Dental
              </span>
            </div>
            <p className="text-[11px] text-teal-700 font-medium sm:hidden mt-0.5 leading-none">
              Pediatric Clinic
            </p>
            <p className="text-xs text-slate-500 font-normal mt-1 truncate hidden sm:block">
              Gentle, Fear-Free Dental Care for Kids & Teens
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button 
            onClick={() => handleNavClick('why-us')} 
            className="hover:text-teal-600 transition-colors py-1 cursor-pointer"
          >
            Why Little Orbit
          </button>
          <button 
            onClick={() => handleNavClick('age-journey')} 
            className="hover:text-teal-600 transition-colors py-1 cursor-pointer"
          >
            Age Milestones
          </button>
          <button 
            onClick={() => handleNavClick('services')} 
            className="hover:text-teal-600 transition-colors py-1 cursor-pointer"
          >
            Gentle Treatments
          </button>
          <button 
            onClick={() => handleNavClick('sensory')} 
            className="hover:text-teal-600 transition-colors py-1 cursor-pointer"
          >
            Sensory Suites & Dog
          </button>
          <button 
            onClick={() => handleNavClick('team')} 
            className="hover:text-teal-600 transition-colors py-1 cursor-pointer"
          >
            Doctors
          </button>
          <button 
            onClick={() => handleNavClick('guidance')} 
            className="hover:text-teal-600 transition-colors py-1 cursor-pointer"
          >
            Pricing & OPD
          </button>
          <button 
            onClick={() => handleNavClick('faq')} 
            className="hover:text-teal-600 transition-colors py-1 cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* CTA Actions */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <a
            href={CLINIC_CONTACT.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-200 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-teal-600/20 active:scale-95 transition-all cursor-pointer shrink-0 whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="hidden sm:inline">Book Visit (₹750)</span>
            <span className="inline sm:hidden">Book (₹750)</span>
          </button>

          {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          className="lg:hidden p-2.5 rounded-xl hover:bg-slate-100 transition-colors text-slate-700 cursor-pointer"
        >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-5 space-y-4 animate-in fade-in duration-200 shadow-xl">
          <div className="grid grid-cols-1 divide-y divide-slate-100 text-sm font-medium text-slate-700">
            <button 
              onClick={() => handleNavClick('why-us')} 
              className="py-3 text-left hover:text-teal-600"
            >
              Why Little Orbit (Needle-Free & Gentle)
            </button>
            <button 
              onClick={() => handleNavClick('age-journey')} 
              className="py-3 text-left hover:text-teal-600"
            >
              Age Developmental Milestones (0–18 yrs)
            </button>
            <button 
              onClick={() => handleNavClick('services')} 
              className="py-3 text-left hover:text-teal-600"
            >
              No-Drill & Warm-Mist Treatments
            </button>
            <button 
              onClick={() => handleNavClick('sensory')} 
              className="py-3 text-left hover:text-teal-600"
            >
              Sensory Suites & Barnaby the Therapy Dog
            </button>
            <button 
              onClick={() => handleNavClick('team')} 
              className="py-3 text-left hover:text-teal-600"
            >
              Specialist Doctors (AIIMS Faculty)
            </button>
            <button 
              onClick={() => handleNavClick('guidance')} 
              className="py-3 text-left hover:text-teal-600"
            >
              Transparent Pricing & Insurance
            </button>
            <button 
              onClick={() => handleNavClick('faq')} 
              className="py-3 text-left hover:text-teal-600"
            >
              Parent Inquiries & FAQ
            </button>
          </div>

          <div className="pt-2 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-xl text-sm text-center flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Child's First Visit (₹750)</span>
            </button>
            <a
              href={CLINIC_CONTACT.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-emerald-50 text-emerald-800 border border-emerald-200 py-3 rounded-xl text-sm font-semibold text-center flex items-center justify-center gap-2 hover:bg-emerald-100"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Parent Concierge</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
