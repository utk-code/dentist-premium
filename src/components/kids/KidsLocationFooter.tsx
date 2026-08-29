import React from 'react';
import { CLINIC_CONTACT } from '../../data/kidsDentalData';
import { MapPin, Phone, Clock, Car, MessageSquare, ArrowRight, ShieldCheck, Heart, AlertCircle } from 'lucide-react';

interface KidsLocationFooterProps {
  onOpenBooking: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const KidsLocationFooter: React.FC<KidsLocationFooterProps> = ({ onOpenBooking, onNavigateSection }) => {
  return (
    <footer id="location" className="bg-slate-900 text-slate-300 pt-16 pb-20 sm:pb-16 border-t border-slate-800">
      
      {/* Top Location & Timings Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-10 border border-slate-700 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Clinic Info */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 text-teal-300 text-xs font-semibold border border-teal-800/60">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>Flagship Clinic • 100 Feet Road, Indiranagar</span>
            </div>

            <h3 className="text-2xl sm:text-3xl text-white font-extrabold leading-snug">
              Visit our child-friendly clinic in Indiranagar
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Equipped with private soundproof family suites, circadian lighting, dedicated pram lounges, and complimentary valet parking.
            </p>

            <div className="space-y-3 pt-1 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold">{CLINIC_CONTACT.address}</p>
                  <p className="text-slate-400 text-xs">{CLINIC_CONTACT.city}</p>
                  <p className="text-slate-400 text-xs mt-0.5">Landmark: {CLINIC_CONTACT.landmark}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Car className="w-4 h-4 text-amber-400 shrink-0" />
                <p className="text-slate-300 text-xs">{CLINIC_CONTACT.parking}</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${CLINIC_CONTACT.phone}`} className="text-white hover:text-teal-300 transition-colors font-semibold">
                  {CLINIC_CONTACT.phone}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenBooking}
                className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs px-7 py-3.5 rounded-xl shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Book Child’s Suite (₹750)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={CLINIC_CONTACT.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-700/80 hover:bg-slate-700 text-white border border-slate-600 text-xs font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Hours & Emergency Helpline */}
          <div className="lg:col-span-5 bg-slate-900/90 p-6 rounded-2xl border border-slate-700/80 space-y-6">
            
            {/* Standard Timings */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-teal-300 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-400" />
                  <span>Clinic Timings</span>
                </span>
                <span className="text-[11px] font-semibold text-teal-400 bg-teal-950/80 px-2 py-0.5 rounded-full border border-teal-800/60">
                  Unhurried Slots
                </span>
              </div>

              <div className="divide-y divide-slate-800 text-xs pt-1">
                {CLINIC_CONTACT.hours.map((h, i) => (
                  <div key={i} className="flex items-center justify-between py-2.5">
                    <span className="text-slate-300">{h.days}</span>
                    <span className="text-white font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 24/7 Trauma Helpline */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse shrink-0" />
                  <span className="text-xs font-bold text-rose-300">
                    24/7 Pediatric Dental Trauma
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-rose-300 bg-rose-950/80 border border-rose-800/60 px-2 py-0.5 rounded-full">
                  On-Call Emergency
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                {CLINIC_CONTACT.emergencyHelpline.note}
              </p>

              <a
                href={`tel:${CLINIC_CONTACT.emergencyHelpline.phone}`}
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-rose-950/40 hover:bg-rose-950/70 border border-rose-800/50 text-rose-200 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-rose-400" />
                  <span className="text-xs font-bold text-white">{CLINIC_CONTACT.emergencyHelpline.phone}</span>
                </div>
                <span className="text-xs font-semibold text-rose-300">Call Now</span>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800 pt-10 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
        
        {/* Col 1 */}
        <div className="space-y-3">
          <p className="font-bold text-white text-xs uppercase tracking-wider">
            Age Developmental Milestones
          </p>
          <ul className="space-y-2 text-slate-400">
            <li><button onClick={() => onNavigateSection('age-journey')} className="hover:text-white transition-colors cursor-pointer">Stage I: Infant Airway (0–24m)</button></li>
            <li><button onClick={() => onNavigateSection('age-journey')} className="hover:text-white transition-colors cursor-pointer">Stage II: Early Childhood (2–5y)</button></li>
            <li><button onClick={() => onNavigateSection('age-journey')} className="hover:text-white transition-colors cursor-pointer">Stage III: Mixed Dentition (6–11y)</button></li>
            <li><button onClick={() => onNavigateSection('age-journey')} className="hover:text-white transition-colors cursor-pointer">Stage IV: Teen Orthopedics (12–18y)</button></li>
          </ul>
        </div>

        {/* Col 2 */}
        <div className="space-y-3">
          <p className="font-bold text-white text-xs uppercase tracking-wider">
            Gentle & Laser Care
          </p>
          <ul className="space-y-2 text-slate-400">
            <li><button onClick={() => onNavigateSection('services')} className="hover:text-white transition-colors cursor-pointer">Swiss 37°C Warm Water Mist</button></li>
            <li><button onClick={() => onNavigateSection('services')} className="hover:text-white transition-colors cursor-pointer">Silver Diamine 60-Sec Cavity Stop</button></li>
            <li><button onClick={() => onNavigateSection('services')} className="hover:text-white transition-colors cursor-pointer">Gentle Infant Laser Tongue-Tie</button></li>
            <li><button onClick={() => onNavigateSection('services')} className="hover:text-white transition-colors cursor-pointer">Airway Expansion & Myobrace</button></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="space-y-3">
          <p className="font-bold text-white text-xs uppercase tracking-wider">
            Sensory Amenities
          </p>
          <ul className="space-y-2 text-slate-400">
            <li><button onClick={() => onNavigateSection('sensory')} className="hover:text-white transition-colors cursor-pointer">Barnaby Bedside Therapy Dog</button></li>
            <li><button onClick={() => onNavigateSection('sensory')} className="hover:text-white transition-colors cursor-pointer">Ceiling 4K Starlight Netflix</button></li>
            <li><button onClick={() => onNavigateSection('sensory')} className="hover:text-white transition-colors cursor-pointer">Private Soundproof Family Suites</button></li>
            <li><button onClick={() => onNavigateSection('sensory')} className="hover:text-white transition-colors cursor-pointer">Ergonomic Parent Armchairs</button></li>
          </ul>
        </div>

        {/* Col 4 */}
        <div className="space-y-3">
          <p className="font-bold text-white text-xs uppercase tracking-wider">
            Specialist Doctors
          </p>
          <ul className="space-y-2 text-slate-400">
            <li><button onClick={() => onNavigateSection('team')} className="hover:text-white transition-colors cursor-pointer">Dr. Maya Nair (AIIMS Gold Medalist)</button></li>
            <li><button onClick={() => onNavigateSection('team')} className="hover:text-white transition-colors cursor-pointer">Dr. Leo Mathew (Manipal MDS)</button></li>
            <li><button onClick={() => onNavigateSection('guidance')} className="hover:text-white transition-colors cursor-pointer">OPD Insurance Reimbursement</button></li>
            <li><span className="text-slate-500">PALS & ISPPD Certified</span></li>
          </ul>
        </div>

      </div>

      {/* Bottom Sub-Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div>
          © {new Date().getFullYear()} Little Orbit Pediatric Dental Atelier. 100 Feet Rd, Indiranagar, Bengaluru.
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span>AIIMS & MANIPAL FACULTY</span>
          <span>•</span>
          <span>FEAR-FREE PEDIATRIC SUITES</span>
          <span>•</span>
          <span>VALET PARKING</span>
        </div>
      </div>

    </footer>
  );
};
