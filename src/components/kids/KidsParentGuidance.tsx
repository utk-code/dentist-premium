import React from 'react';
import { PRICING_PACKAGES, FAQ_ITEMS } from '../../data/kidsDentalData';
import { ShieldCheck, Receipt, CreditCard, HelpCircle, Check, ArrowRight, HeartHandshake, Phone } from 'lucide-react';

interface KidsParentGuidanceProps {
  onOpenBooking: (packageTitle?: string) => void;
}

export const KidsParentGuidance: React.FC<KidsParentGuidanceProps> = ({ onOpenBooking }) => {
  return (
    <section id="guidance" className="py-16 sm:py-24 bg-[#FBFBF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-200/70">
            <Receipt className="w-3.5 h-3.5 text-teal-600" />
            <span>Parent Financial Transparency & OPD Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Clear, upfront pricing with zero surprises
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-6 sm:p-7 transition-all flex flex-col justify-between ${
                pkg.recommended
                  ? 'bg-white border-2 border-teal-600 shadow-xl relative'
                  : 'bg-white border border-slate-200 shadow-sm hover:border-slate-300'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                  Most Popular for New Patients
                </div>
              )}

              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                    {pkg.idealFor}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Stage 01–04</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mt-3">{pkg.name}</h3>
                
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-slate-900">{pkg.price}</span>
                  <span className="text-xs text-slate-500 font-normal">/ all inclusive</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mt-3">
                  {pkg.description}
                </p>

                {/* Inclusions */}
                <div className="space-y-2 pt-5 border-t border-slate-100 mt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 block">
                    What's Included:
                  </span>
                  {pkg.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenBooking(`Package: ${pkg.name} (${pkg.price})`)}
                  className={`w-full py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.recommended
                      ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-md shadow-teal-600/20'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <span>Select {pkg.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Insurance & Zero Over-Treatment Guarantee Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Insurance Desk */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">OPD Dental Insurance Desk</h4>
                <p className="text-xs text-slate-500">Same-day claims paperwork and assistance</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Most comprehensive health insurances with OPD dental riders (e.g. Star Health, MediBuddy, ICICI Lombard, Care Health, HDFC ERGO) cover pediatric checkups, trauma, and restorations.
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              {['Star Health OPD', 'MediBuddy', 'HDFC ERGO', 'ICICI Lombard', 'Care Insurance', '0% EMI on Bajaj/Cards'].map((ins, i) => (
                <span key={i} className="px-2.5 py-1 bg-slate-50 text-slate-700 rounded-lg border border-slate-200 font-medium">
                  {ins}
                </span>
              ))}
            </div>
          </div>

          {/* Zero Over-Treatment Guarantee */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Zero Over-Treatment Guarantee</h4>
                <p className="text-xs text-slate-500">Clinical honesty is our founding pledge</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              We never recommend unnecessary crowns, drillings, or extractions on primary teeth that can heal naturally with SDF or remineralization. Parents always see photographic intra-oral scans on our screens before any step is taken.
            </p>

            <div className="p-3 bg-teal-50 rounded-xl border border-teal-100 text-xs text-teal-900 font-medium flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Full HD Intraoral Photos & Digital X-Rays shared on WhatsApp</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
