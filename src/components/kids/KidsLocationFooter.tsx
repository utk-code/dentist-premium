import React from 'react';
import { CLINIC_CONTACT } from '../../data/kidsDentalData';
import { MapPin, Phone, Mail, Clock, Car, Shield, Sparkles, ArrowUpRight, Heart, Smile, MessageSquare } from 'lucide-react';

interface KidsLocationFooterProps {
  onOpenBooking: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const KidsLocationFooter: React.FC<KidsLocationFooterProps> = ({ onOpenBooking, onNavigateSection }) => {
  return (
    <footer id="location" className="bg-slate-950 text-slate-300 pt-16 sm:pt-20 pb-24 sm:pb-16 border-t border-slate-800 relative">
      
      {/* Top Location & Atelier Card Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12 sm:mb-16">
        <div className="bg-slate-900 border border-slate-800/80 rounded-3xl p-5 sm:p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center shadow-xl">
          
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950/80 text-sky-300 text-xs font-semibold border border-sky-800/50">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Indiranagar Bengaluru Center</span>
            </div>

            <h3 className="font-outfit text-xl sm:text-3xl text-white font-extrabold leading-snug">
              Visit our peaceful pediatric dental sanctuary on 100 Feet Road.
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
              Featuring private sensory suites, dedicated stroller parking, comfortable parent lounge chairs, and reserved complimentary valet parking.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">{CLINIC_CONTACT.address}</p>
                  <p className="text-slate-400 text-xs">{CLINIC_CONTACT.city}</p>
                  <p className="text-slate-500 text-xs mt-0.5">Landmark: {CLINIC_CONTACT.landmark}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Car className="w-4 h-4 text-teal-400 shrink-0" />
                <p className="text-slate-400 text-xs">{CLINIC_CONTACT.parking}</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${CLINIC_CONTACT.phone}`} className="text-white hover:text-sky-300 transition-colors font-semibold">
                  {CLINIC_CONTACT.phone}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenBooking}
                className="bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all text-center"
              >
                Reserve Child’s Visit
              </button>
              <a
                href={CLINIC_CONTACT.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-5 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-center"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>WhatsApp Appointment</span>
              </a>
            </div>
          </div>

          {/* Hours & Emergency Trauma Card */}
          <div className="lg:col-span-6 bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            
            {/* Standard Clinic Hours Header */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Clinic & Concierge Hours</span>
                </span>
                <span className="text-[11px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800/80 px-2.5 py-0.5 rounded-full">
                  Appointments Open
                </span>
              </div>

              {/* Standard Clinic Timings Table */}
              <div className="divide-y divide-slate-800/60 text-xs sm:text-sm pt-1">
                {CLINIC_CONTACT.hours.map((h, i) => (
                  <div key={i} className="flex items-center justify-between py-2.5">
                    <span className="text-slate-300 font-medium">{h.days}</span>
                    <span className="text-sky-300 font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Pediatric Trauma Unit */}
            <div className="pt-5 border-t border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shrink-0" />
                  <span className="text-xs font-bold text-rose-300 uppercase tracking-wider">
                    Emergency Dental Trauma
                  </span>
                </div>
                <span className="text-[10px] font-bold text-rose-400 bg-rose-950/80 border border-rose-800/70 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  24/7 Doctor Support
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {CLINIC_CONTACT.emergencyHelpline.note}
              </p>

              <a
                href={`tel:${CLINIC_CONTACT.emergencyHelpline.phone}`}
                className="flex items-center justify-between px-4 py-3 rounded-2xl bg-rose-950/50 hover:bg-rose-900/60 border border-rose-800/60 text-rose-200 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-rose-900/80 text-rose-300 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-rose-300/80 font-medium">Direct On-Call Line</div>
                    <div className="text-sm font-bold text-white tracking-wide font-outfit">{CLINIC_CONTACT.emergencyHelpline.phone}</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-rose-300 bg-rose-900/70 px-3 py-1.5 rounded-xl border border-rose-700/60 group-hover:bg-rose-800 group-hover:text-white transition-colors">
                  Tap to Call
                </span>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 border-t border-slate-800/80 pt-10 sm:pt-12 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-xs sm:text-sm">
        
        {/* Col 1 */}
        <div className="space-y-3">
          <p className="uppercase tracking-wider text-sky-400 font-bold text-xs">
            Developmental Stages
          </p>
          <ul className="space-y-2 text-slate-400 text-xs">
            <li><button onClick={() => onNavigateSection('age-journey')} className="hover:text-white transition-colors">Stage I: Infant Airway (0–24m)</button></li>
            <li><button onClick={() => onNavigateSection('age-journey')} className="hover:text-white transition-colors">Stage II: Early Childhood (2–5y)</button></li>
            <li><button onClick={() => onNavigateSection('age-journey')} className="hover:text-white transition-colors">Stage III: Mixed Dentition (6–11y)</button></li>
            <li><button onClick={() => onNavigateSection('age-journey')} className="hover:text-white transition-colors">Stage IV: Teen Orthopedics (12–18y)</button></li>
          </ul>
        </div>

        {/* Col 2 */}
        <div className="space-y-3">
          <p className="uppercase tracking-wider text-teal-400 font-bold text-xs">
            Gentle Treatments
          </p>
          <ul className="space-y-2 text-slate-400 text-xs">
            <li><button onClick={() => onNavigateSection('services')} className="hover:text-white transition-colors">Swiss Airflow® Cleaning</button></li>
            <li><button onClick={() => onNavigateSection('services')} className="hover:text-white transition-colors">Silver Diamine (SDF) No-Drill</button></li>
            <li><button onClick={() => onNavigateSection('services')} className="hover:text-white transition-colors">Infant CO2 Laser Frenectomy</button></li>
            <li><button onClick={() => onNavigateSection('services')} className="hover:text-white transition-colors">Gentle Airway Expansion</button></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="space-y-3">
          <p className="uppercase tracking-wider text-amber-400 font-bold text-xs">
            Sensory Comfort
          </p>
          <ul className="space-y-2 text-slate-400 text-xs">
            <li><button onClick={() => onNavigateSection('sensory')} className="hover:text-white transition-colors">Private Soundproof Suites</button></li>
            <li><button onClick={() => onNavigateSection('sensory')} className="hover:text-white transition-colors">Barnaby Bedside Therapy Dog</button></li>
            <li><button onClick={() => onNavigateSection('sensory')} className="hover:text-white transition-colors">Ceiling Cartoon Screens</button></li>
            <li><button onClick={() => onNavigateSection('sensory')} className="hover:text-white transition-colors">Parent Bedside Seating</button></li>
          </ul>
        </div>

        {/* Col 4 */}
        <div className="space-y-3">
          <p className="uppercase tracking-wider text-slate-300 font-bold text-xs">
            Faculty & Accreditations
          </p>
          <ul className="space-y-2 text-slate-400 text-xs">
            <li><button onClick={() => onNavigateSection('team')} className="hover:text-white transition-colors">Dr. Maya Nair (AIIMS Gold Medalist)</button></li>
            <li><button onClick={() => onNavigateSection('guidance')} className="hover:text-white transition-colors">OPD Insurance Concierge</button></li>
            <li><span className="text-slate-500">ISPPD Fellow Accredited</span></li>
            <li><span className="text-slate-500">ISO Medical Autoclave Sterilization</span></li>
          </ul>
        </div>

      </div>

      {/* Bottom Sub-Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 sm:pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="text-center sm:text-left">
          © {new Date().getFullYear()} Little Orbit Pediatric Dental Institute. Indiranagar, Bengaluru. All rights reserved.
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-semibold text-slate-400">
          <span>ISPPD FELLOW</span>
          <span>•</span>
          <span>SWISS AIRFLOW</span>
          <span>•</span>
          <span>PALS CERTIFIED</span>
        </div>
      </div>

    </footer>
  );
};


