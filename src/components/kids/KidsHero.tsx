import React from 'react';
import { ShieldCheck, CheckCircle2, ChevronRight, MessageCircle, Calendar, Sparkles, Heart, Award, Wind, Stethoscope } from 'lucide-react';
import { CLINIC_CONTACT } from '../../data/kidsDentalData';

interface KidsHeroProps {
  onOpenBooking: (initialReason?: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const KidsHero: React.FC<KidsHeroProps> = ({ onOpenBooking, onNavigateSection }) => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-sky-50/60 via-white to-slate-50/50 text-slate-900 pt-8 pb-14 sm:pt-14 sm:pb-20 overflow-hidden border-b border-slate-100 w-full max-w-full">
      
      {/* Soft Ambient Background Aura */}
      <div className="absolute top-0 right-0 w-80 sm:w-[540px] h-80 sm:h-[540px] bg-sky-200/25 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-[480px] h-72 sm:h-[480px] bg-teal-200/20 rounded-full blur-3xl pointer-events-none -ml-16 -mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full">
        
        {/* Main Grid: Headline & Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typography & Intent Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Single Refined Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 text-sky-900 text-xs font-semibold border border-sky-200/70">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Bengaluru's Pediatric Dental & Airway Sanctuary (Ages 0–18)</span>
            </div>

            {/* Clear, High-Contrast Headline */}
            <h1 className="font-outfit text-3xl sm:text-5xl lg:text-[54px] text-slate-950 tracking-tight font-extrabold leading-[1.12]">
              Where little smiles feel <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600">safe, loved</span> and excited to visit.
            </h1>

            {/* Readable, Uncrowded Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              We have eliminated dental fear for children. Experience Swiss warm-water micro-mist cleaning, zero-drill cavity arrest (SDF), private sensory suites with ceiling cartoon screens, and cuddles from Barnaby, our certified therapy dog.
            </p>

            {/* Symmetrical CTA Button Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => onOpenBooking('Comprehensive First Pediatric Visit & Airway Screening')}
                className="bg-gradient-to-r from-sky-600 via-teal-600 to-sky-700 hover:from-sky-700 hover:to-teal-700 text-white px-7 py-3.5 rounded-2xl font-outfit font-semibold text-sm transition-all shadow-md shadow-sky-500/20 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4 text-sky-100" />
                <span>Book Child's First Visit</span>
                <ChevronRight className="w-4 h-4 text-sky-200 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href={CLINIC_CONTACT.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-6 py-3.5 rounded-2xl font-semibold text-sm border border-emerald-200/80 transition-all flex items-center justify-center gap-2 shadow-2xs w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Assurances - Clean Linear Formatting */}
            <div className="pt-2 border-t border-slate-200/70 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-[13px] text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Zero Separation (Parents Stay)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Therapy Canine Barnaby</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>AIIMS & Manipal Pedodontists</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Visual & Single Reassurance Badge */}
          <div className="lg:col-span-5 relative w-full">
            
            {/* Main Editorial Image */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl shadow-slate-900/10 bg-white w-full">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200"
                alt="Pediatric dentist examining smiling child in modern sunlit operatory"
                className="w-full h-[360px] sm:h-[460px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />

              {/* In-Image Suite Indicator */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-100 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                <p className="text-xs font-semibold text-slate-800">
                  Safari Suite 01 • Soundproof & Fear-Free
                </p>
              </div>

              {/* Bottom Reassurance Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-100 text-slate-800 shadow-md">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-900">
                      The Little Orbit Promise
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full">
                    100% Fear-Free Standard
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2.5 text-center">
                  <div className="bg-sky-50/80 p-2 rounded-xl">
                    <div className="font-outfit font-extrabold text-base sm:text-lg text-sky-800">0</div>
                    <div className="text-[10px] text-slate-600 font-medium">Needles for SDF</div>
                  </div>
                  <div className="bg-teal-50/80 p-2 rounded-xl">
                    <div className="font-outfit font-extrabold text-base sm:text-lg text-teal-800">100%</div>
                    <div className="text-[10px] text-slate-600 font-medium">Parent Beside</div>
                  </div>
                  <div className="bg-amber-50/80 p-2 rounded-xl">
                    <div className="font-outfit font-extrabold text-base sm:text-lg text-amber-800">15 min</div>
                    <div className="text-[10px] text-slate-600 font-medium">Swiss Airflow</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Barnaby Floating Tag */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white p-3 rounded-2xl border border-slate-100 shadow-lg items-center gap-3 z-20 max-w-[260px]">
              <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4 fill-amber-200" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-slate-900 block">Meet Barnaby</span>
                <span className="text-[11px] text-slate-500">Certified Bedside Therapy Dog</span>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Core Pillars Strip - Clear Horizontal Hierarchy */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-2xs hover:border-sky-200 transition-colors">
            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 block">Standard 01</span>
            <h3 className="text-sm font-bold text-slate-900 mt-1">Biomimetic Enamel Care</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Preserving primary milk teeth without aggressive drilling or needles using Swiss remineralization.</p>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-2xs hover:border-teal-200 transition-colors">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 block">Standard 02</span>
            <h3 className="text-sm font-bold text-slate-900 mt-1">Airway & Jaw Growth</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Early interceptive screening for mouth breathing, tongue ties, speech articulation, and dental arches.</p>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-2xs hover:border-amber-200 transition-colors">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block">Standard 03</span>
            <h3 className="text-sm font-bold text-slate-900 mt-1">Sensory Comfort First</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Private soundproof suites, ceiling cartoon displays, wireless noise-canceling headphones & therapy canine.</p>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-2xs hover:border-indigo-200 transition-colors">
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block">Standard 04</span>
            <h3 className="text-sm font-bold text-slate-900 mt-1">Unhurried Care</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Dedicated 45-minute slots with unhurried guidance for both parents and child using Tell-Show-Do methods.</p>
          </div>
        </div>

      </div>
    </section>
  );
};


