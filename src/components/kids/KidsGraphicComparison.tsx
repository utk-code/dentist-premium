import React, { useState } from 'react';
import { Check, X, ShieldAlert, Sparkles, Heart, Clock, ArrowRight, ShieldCheck, Smile } from 'lucide-react';
import { COMPARISON_ITEMS } from '../../data/kidsDentalData';

interface KidsGraphicComparisonProps {
  onOpenBooking: () => void;
}

export const KidsGraphicComparison: React.FC<KidsGraphicComparisonProps> = ({ onOpenBooking }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-200/70">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>The Little Orbit Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why parents choose us over traditional clinics
          </h2>
        </div>

        {/* Comparison Table / Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Old Way (Traditional Clinic) */}
          <div className="lg:col-span-5 bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-100">
                    Conventional Clinics
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 mt-2">
                    Traditional Dental Visits
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-rose-100/70 text-rose-600 flex items-center justify-center font-bold">
                  ✕
                </div>
              </div>

              <div className="space-y-4 pt-5">
                {[
                  {
                    title: 'Drills & High-Pitched Noise',
                    desc: 'Loud dental drills generate friction heat and sensory anxiety that terrifies young children.'
                  },
                  {
                    title: 'Painful Numbing Injections',
                    desc: 'Sharp metal needles into gums for even simple small cavity fills, causing tears and lip-biting afterwards.'
                  },
                  {
                    title: 'Cold Steel Metal Scrapers',
                    desc: 'Sharp instruments and ice-cold water that shock sensitive young enamel.'
                  },
                  {
                    title: 'Parent Separation & Restraints',
                    desc: 'Parents are often asked to wait outside while children are pinned down in chairs.'
                  },
                  {
                    title: 'Over-Treatment & Metal Crowns',
                    desc: 'Aggressive drilling on baby teeth when gentle remineralization would easily suffice.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                    <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      ✕
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{item.title}</h4>
                      <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-3.5 rounded-2xl bg-rose-50 border border-rose-100 text-xs text-rose-900 flex items-center gap-2.5">
              <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Result: Lifelong dental phobia and fear of doctors.</span>
            </div>
          </div>

          {/* Little Orbit Modern Way */}
          <div className="lg:col-span-7 bg-gradient-to-br from-teal-50/90 via-white to-emerald-50/70 rounded-3xl p-6 sm:p-8 border-2 border-teal-500/40 shadow-xl flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Badge */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-teal-100">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3 py-1 rounded-full border border-teal-200">
                    The Little Orbit Standard
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2">
                    Gentle, Fear-Free Pediatric Care
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-bold shadow-md shadow-teal-600/30">
                  ✓
                </div>
              </div>

              <div className="space-y-4 pt-5">
                {[
                  {
                    title: 'Needle-Free & Drill-Free Cavity Arrest',
                    desc: 'Silver Diamine Fluoride (SDF) and bioactive glass mineralize cavities in 60 seconds without drilling.'
                  },
                  {
                    title: 'Swiss 37°C Warm-Water Airflow® Mist',
                    desc: 'Gentle body-temperature mist with sweet erythritol powder washes away plaque with zero scraping sensation.'
                  },
                  {
                    title: 'Zero Separation (Parents in Suite)',
                    desc: 'Sit in plush armchairs or hold your toddler in your lap during the entire appointment.'
                  },
                  {
                    title: 'Barnaby the Therapy Dog & 4K Netflix Cinema',
                    desc: 'Kids watch Bluey or Paw Patrol with noise-canceling headphones while our golden retriever cuddles beside them.'
                  },
                  {
                    title: 'Airway, Speech & Growth Screenings',
                    desc: 'Every checkup includes an airway audit to catch sleep apnea, mouth breathing, and speech ties early.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 text-xs sm:text-sm">
                    <div className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5 font-bold shadow-sm">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Guarantee Banner */}
            <div className="mt-8 pt-4 border-t border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-xs text-teal-900 font-semibold">
                <Smile className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Result: Kids leave smiling with a toy prize & balloon.</span>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md shadow-teal-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shrink-0"
              >
                <span>Book Child's First Visit (₹750)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
