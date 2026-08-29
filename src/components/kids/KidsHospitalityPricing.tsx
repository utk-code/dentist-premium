import React from 'react';
import { Coffee, Car, Clock, Check, ArrowRight, FileText } from 'lucide-react';

interface KidsHospitalityPricingProps {
  onOpenBooking: (tierName: string) => void;
}

export const KidsHospitalityPricing: React.FC<KidsHospitalityPricingProps> = ({ onOpenBooking }) => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white border-b border-[#E5E0D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F0E6] text-[#7C6641] text-[11px] font-mono-fine uppercase tracking-[0.22em] border border-[#E0D8C8]">
            <span>Hospitality & Transparent Care</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-[52px] text-[#0A111E] font-normal tracking-tight leading-[1.12]">
            Exemplary pedodontics with <span className="italic text-[#967844]">effortless hospitality</span> and zero hidden fees.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light font-sans-clean">
            From private valet arrival on 100 Feet Road to unhurried consultations in private suites, every detail is designed for comfort, clarity, and peace of mind.
          </p>
        </div>

        {/* 4 Boutique Hospitality Pillars Bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          
          <div className="bg-[#FAF8F5] p-6 rounded-3xl border border-[#E5E0D6] space-y-3">
            <div className="w-10 h-10 rounded-full bg-white border border-[#E5E0D6] flex items-center justify-center text-[#967844] shadow-2xs">
              <Car className="w-4 h-4" strokeWidth={1.5} />
            </div>
            <h4 className="font-editorial text-xl text-[#0A111E]">
              Private Valet Arrival
            </h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed font-sans-clean">
              Pull up to our dedicated porch. Our hospitality team handles parking and stroller assistance immediately.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-3xl border border-[#E5E0D6] space-y-3">
            <div className="w-10 h-10 rounded-full bg-white border border-[#E5E0D6] flex items-center justify-center text-[#967844] shadow-2xs">
              <Coffee className="w-4 h-4" strokeWidth={1.5} />
            </div>
            <h4 className="font-editorial text-xl text-[#0A111E]">
              Artisanal Parent Lounge
            </h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed font-sans-clean">
              Enjoy fresh pour-over coffee, ceremonial matcha, and botanical teas in our quiet reading library.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-3xl border border-[#E5E0D6] space-y-3">
            <div className="w-10 h-10 rounded-full bg-white border border-[#E5E0D6] flex items-center justify-center text-[#967844] shadow-2xs">
              <Clock className="w-4 h-4" strokeWidth={1.5} />
            </div>
            <h4 className="font-editorial text-xl text-[#0A111E]">
              Zero-Wait Guarantee
            </h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed font-sans-clean">
              We never double-book. Your private suite and clinical team are sanitized and ready the minute you step inside.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-3xl border border-[#E5E0D6] space-y-3">
            <div className="w-10 h-10 rounded-full bg-white border border-[#E5E0D6] flex items-center justify-center text-[#967844] shadow-2xs">
              <FileText className="w-4 h-4" strokeWidth={1.5} />
            </div>
            <h4 className="font-editorial text-xl text-[#0A111E]">
              Direct OPD Insurance
            </h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed font-sans-clean">
              Itemized digital invoices and instant claim documentation for Star Health, MediBuddy, HDFC ERGO, and Bajaj.
            </p>
          </div>

        </div>

        {/* Transparent Care Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: First Milestone Visit */}
          <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#E5E0D6] flex flex-col justify-between hover:border-[#C4A468] transition-colors relative">
            <div>
              <span className="text-[10px] font-mono-fine uppercase tracking-[0.2em] text-[#967844] block">
                Foundational Assessment
              </span>
              
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#0A111E] font-normal mt-1">
                First Milestone Visit
              </h3>
              <p className="text-xs text-slate-600 font-light mt-1.5 font-sans-clean">
                Comprehensive unhurried checkup & fear-free introduction for infants and young children.
              </p>

              <div className="mt-6 mb-6 pb-6 border-b border-[#E5E0D6]">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-editorial text-[#0A111E]">₹750</span>
                  <span className="text-xs text-slate-500 font-mono-fine">all-inclusive</span>
                </div>
                <span className="text-[10px] font-mono-fine uppercase tracking-wider text-[#7C6641] bg-[#F4F0E6] px-2.5 py-1 rounded-full inline-block mt-2 border border-[#E0D8C8]">
                  100% Refundable if child feels uneasy
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-700 font-light">
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#F4F0E6] text-[#967844] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#967844]" strokeWidth={1.5} />
                  </div>
                  <span>45-Minute unhurried consultation with MDS Pedodontist</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#F4F0E6] text-[#967844] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#967844]" strokeWidth={1.5} />
                  </div>
                  <span>Tell-Show-Do gentle acclimation & sensory introduction</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#F4F0E6] text-[#967844] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#967844]" strokeWidth={1.5} />
                  </div>
                  <span>Zero-radiation optical diagnostic assessment</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#F4F0E6] text-[#967844] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#967844]" strokeWidth={1.5} />
                  </div>
                  <span>Bespoke nutritional & enamel remineralization roadmap</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#F4F0E6] text-[#967844] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#967844]" strokeWidth={1.5} />
                  </div>
                  <span>Commemorative milestone bravery medal & oral kit</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onOpenBooking('First Milestone Visit (₹750)')}
                className="w-full bg-[#0A111E] hover:bg-[#1A2638] text-[#F5F2EB] text-xs font-mono-fine uppercase tracking-[0.18em] py-3.5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Reserve Milestone Suite</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4B270]" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Card 2: Annual Smile Retainer (Featured) */}
          <div className="bg-[#0A111E] text-[#F5F2EB] rounded-3xl p-6 sm:p-8 border border-[#967844] flex flex-col justify-between relative shadow-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4B270] text-[#0A111E] text-[9px] font-mono-fine uppercase tracking-[0.25em] px-4 py-1 rounded-full shadow-xs">
              Annual Family Membership
            </div>

            <div>
              <span className="text-[10px] font-mono-fine uppercase tracking-[0.25em] text-[#D4B270] block">
                Annual Preventative Retainer
              </span>
              
              <h3 className="font-editorial text-2xl sm:text-3xl text-white font-normal mt-1">
                Complete Preventative Care
              </h3>
              <p className="text-xs text-slate-300 font-light mt-1.5 font-sans-clean">
                Year-round clinical safeguarding to ensure fear-free and cavity-free oral development.
              </p>

              <div className="mt-6 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-editorial text-[#D4B270]">₹3,800</span>
                  <span className="text-xs text-slate-400 font-mono-fine">/ year</span>
                </div>
                <span className="text-[10px] font-mono-fine uppercase tracking-wider text-[#D4B270] bg-[#1A2638] px-2.5 py-1 rounded-full inline-block mt-2 border border-white/10">
                  Comprehensive 40% family savings
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-200 font-light">
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#1A2638] text-[#D4B270] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#D4B270]" strokeWidth={1.5} />
                  </div>
                  <span><strong>2x Swiss Airflow® Warm Mist Cleanings</strong> (Zero metal scraping)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#1A2638] text-[#D4B270] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#D4B270]" strokeWidth={1.5} />
                  </div>
                  <span><strong>2x Remineralizing Bio-Varnish</strong> natural treatments</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#1A2638] text-[#D4B270] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#D4B270]" strokeWidth={1.5} />
                  </div>
                  <span>Unlimited priority specialist consultations & emergency triage</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#1A2638] text-[#D4B270] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#D4B270]" strokeWidth={1.5} />
                  </div>
                  <span>Ceiling cinema projection & Barnaby canine priority</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#1A2638] text-[#D4B270] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#D4B270]" strokeWidth={1.5} />
                  </div>
                  <span>10% Courtesy concession on all restorative sealants & care</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onOpenBooking('Annual Smile Retainer (₹3,800/yr)')}
                className="w-full bg-[#F5F2EB] hover:bg-[#D4B270] text-[#0A111E] text-xs font-mono-fine uppercase tracking-[0.2em] py-3.5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enroll in Annual Retainer</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0A111E]" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Card 3: Interceptive Growth & Airway */}
          <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#E5E0D6] flex flex-col justify-between hover:border-[#C4A468] transition-colors relative">
            <div>
              <span className="text-[10px] font-mono-fine uppercase tracking-[0.2em] text-[#967844] block">
                Specialized Growth Track
              </span>
              
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#0A111E] font-normal mt-1">
                Airway & Natural Alignment
              </h3>
              <p className="text-xs text-slate-600 font-light mt-1.5 font-sans-clean">
                Guiding dental arch development and restful nasal breathing patterns without extractions.
              </p>

              <div className="mt-6 mb-6 pb-6 border-b border-[#E5E0D6]">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-editorial text-[#0A111E]">₹8,500</span>
                  <span className="text-xs text-slate-500 font-mono-fine">custom appliance</span>
                </div>
                <span className="text-[10px] font-mono-fine uppercase tracking-wider text-[#7C6641] bg-[#F4F0E6] px-2.5 py-1 rounded-full inline-block mt-2 border border-[#E0D8C8]">
                  Includes custom 3D oral trainer & follow-ups
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-700 font-light">
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#F4F0E6] text-[#967844] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#967844]" strokeWidth={1.5} />
                  </div>
                  <span>3D Digital intraoral optical scan (zero impression putty)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#F4F0E6] text-[#967844] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#967844]" strokeWidth={1.5} />
                  </div>
                  <span>Custom medical-grade myofunctional oral trainer</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#F4F0E6] text-[#967844] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#967844]" strokeWidth={1.5} />
                  </div>
                  <span>Mouth breathing & speech habit correction coaching</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#F4F0E6] text-[#967844] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#967844]" strokeWidth={1.5} />
                  </div>
                  <span>Monthly jaw development tracking & photographic reviews</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onOpenBooking('Airway & Jaw Alignment Consultation')}
                className="w-full bg-[#0A111E] hover:bg-[#1A2638] text-[#F5F2EB] text-xs font-mono-fine uppercase tracking-[0.18em] py-3.5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Growth Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4B270]" strokeWidth={1.5} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
