import React, { useState } from 'react';
import { ShieldCheck, Star, Sparkles, Heart, ArrowRight, Calendar, MessageCircle, Smile, Award, CheckCircle2 } from 'lucide-react';
import { CLINIC_CONTACT, DOCTORS } from '../../data/kidsDentalData';

interface KidsHeroProps {
  onOpenBooking: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const KidsHero: React.FC<KidsHeroProps> = ({ onOpenBooking, onNavigateSection }) => {
  const [activeTab, setActiveTab] = useState<'painless' | 'suites' | 'faculty'>('painless');

  return (
    <section id="hero" className="relative bg-gradient-to-b from-teal-50/60 via-[#FBFBF9] to-[#FBFBF9] pt-8 sm:pt-14 pb-14 sm:pb-20 overflow-hidden border-b border-slate-200/60">
      
      {/* Decorative Warm Ambient Glows (Lightweight CSS) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-teal-100/40 via-amber-100/30 to-blue-100/40 blur-3xl pointer-events-none -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-teal-200/80 shadow-sm text-teal-800 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Bengaluru’s #1 Fear-Free Pediatric Dental Clinic</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>5.0 / 5.0 Rating (520+ Indiranagar Families)</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Reassuring Headlines & Parent Peace-of-Mind */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Gentle, pain-free dental visits your child will <span className="text-teal-600 underline decoration-teal-300 decoration-wavy decoration-2">actually look forward to</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              No scary drills, no harsh needles. Bengaluru’s gentlest care — <strong className="text-slate-800 font-semibold">AIIMS faculty</strong>, warm-mist tech, 4K cartoons, and <strong className="text-slate-800 font-semibold">Barnaby the therapy dog</strong>.
            </p>

            {/* Quick 3-Point Guarantee for Anxious Parents */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-left">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Zero-Drill Cavity Fill</h4>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">Stops decay in 60 seconds with mineral silver mist.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Parents Beside Child</h4>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">Private family suite. Hold your child's hand throughout.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Therapy Dog & Cartoons</h4>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">Barnaby snuggles bedside while kids watch Netflix.</p>
                </div>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-lg shadow-teal-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Child’s Visit (₹750)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={CLINIC_CONTACT.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Ask a Doctor on WhatsApp</span>
              </a>
            </div>

            {/* Micro Reassurance Footer with verified family social proof */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 pt-2 font-medium">
              <div className="flex items-center -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Parent patient"
                  referrerPolicy="no-referrer"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-xs"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Parent patient"
                  referrerPolicy="no-referrer"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-xs"
                />
                <img
                  src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Child patient"
                  referrerPolicy="no-referrer"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-xs"
                />
              </div>
              <span className="text-slate-700 font-semibold">520+ happy families this year</span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-600">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Zero Wait Guarantee</span>
              </span>
              <span>•</span>
              <span className="text-slate-600">
                Opp. 100 Ft Rd, Indiranagar
              </span>
            </div>

          </div>

          {/* Right Column: High Quality Photography Card & Interactive Clinic Experience */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden space-y-4 relative">
              
              {/* Main Photo Banner with Doctor & Child */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80"
                  alt="Pediatric dentist with smiling child in modern clinic"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-teal-600/90 backdrop-blur-md text-[11px] font-bold text-white tracking-wide">
                      Private Family Suites
                    </span>
                    <span className="text-xs font-medium text-slate-200">
                      Zero Separation Policy
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-300 text-xs font-bold bg-slate-900/60 backdrop-blur-md px-2 py-1 rounded-md">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>5.0</span>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 sm:px-6 sm:pb-6 space-y-4">
                
                {/* Tab Selector for Quick Visual Exploration */}
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100/80 rounded-xl text-xs font-semibold text-slate-600">
                  <button
                    onClick={() => setActiveTab('painless')}
                    className={`py-2 rounded-lg transition-all cursor-pointer ${
                      activeTab === 'painless'
                        ? 'bg-white text-teal-800 shadow-sm'
                        : 'hover:text-slate-900'
                    }`}
                  >
                    Needle-Free
                  </button>
                  <button
                    onClick={() => setActiveTab('suites')}
                    className={`py-2 rounded-lg transition-all cursor-pointer ${
                      activeTab === 'suites'
                        ? 'bg-white text-teal-800 shadow-sm'
                        : 'hover:text-slate-900'
                    }`}
                  >
                    Sensory Suite
                  </button>
                  <button
                    onClick={() => setActiveTab('faculty')}
                    className={`py-2 rounded-lg transition-all cursor-pointer ${
                      activeTab === 'faculty'
                        ? 'bg-white text-teal-800 shadow-sm'
                        : 'hover:text-slate-900'
                    }`}
                  >
                    AIIMS Doctors
                  </button>
                </div>

                {/* Tab Content 1: Needle-Free & Painless */}
                {activeTab === 'painless' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="p-3.5 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 flex items-start gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=240&h=240&q=80"
                        alt="Swiss warm mist cleaning"
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 rounded-xl object-cover shrink-0 border border-teal-200"
                      />
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-teal-900 font-bold text-xs">
                          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                          <span>Swiss 37°C Warm Water Mist</span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-snug">
                          Replaces cold scraping and loud tools with soothing body-temp micro-mist infused with sweet erythritol.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="font-bold text-slate-800 text-[11px]">SDF 60-Sec Fill</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">No drilling or numbing shots needed.</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="font-bold text-slate-800 text-[11px]">Laser Soft-Tissue</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Instant infant tongue-tie in 90 sec.</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab Content 2: Sensory Suite & Barnaby */}
                {activeTab === 'suites' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 flex items-start gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=240&h=240&q=80"
                        alt="Barnaby the therapy dog"
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 rounded-xl object-cover shrink-0 border border-amber-200"
                      />
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-amber-900 font-bold text-xs">
                          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                          <span>Barnaby • Therapy Dog</span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-snug">
                          Gentle Golden Retriever rests bedside, lowering cortisol and turning anxiety into happy smiles.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="font-bold text-slate-800 text-[11px]">Ceiling 4K Cinema</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Bluey, Peppa Pig & Marvel shows.</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="font-bold text-slate-800 text-[11px]">Circadian Light</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">No blinding white glare.</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab Content 3: Faculty */}
                {activeTab === 'faculty' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-start gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=240&h=240&q=80"
                        alt="Dr. Maya Nair"
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 rounded-xl object-cover shrink-0 border border-blue-200"
                      />
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-blue-900 font-bold text-xs">
                          <Award className="w-3.5 h-3.5 text-blue-600" />
                          <span>AIIMS & Manipal Faculty</span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-snug">
                          Led by Dr. Maya Nair (MDS AIIMS Gold Medalist) and Dr. Leo Mathew (MDS Manipal, PALS certified).
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="font-bold text-slate-800 text-[11px]">Dr. Maya Nair</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Gold Medalist • Airway Growth</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="font-bold text-slate-800 text-[11px]">Dr. Leo Mathew</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Laser Fellow • Trauma Care</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Consultation Pricing Banner */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-500 font-normal">First Visit Consultation:</span>
                    <div className="text-sm font-bold text-slate-900">₹750 <span className="text-[11px] font-normal text-slate-500">(45 Min + Airway Audit)</span></div>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs shadow-sm transition-colors cursor-pointer"
                  >
                    Reserve Suite
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
