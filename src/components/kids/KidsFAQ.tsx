import React, { useState } from 'react';
import { FAQ_ITEMS, CLINIC_CONTACT } from '../../data/kidsDentalData';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight, ShieldCheck, Phone } from 'lucide-react';

interface KidsFAQProps {
  onOpenBooking: () => void;
}

export const KidsFAQ: React.FC<KidsFAQProps> = ({ onOpenBooking }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FBFBF9] border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-200/70">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            <span>Frequently Asked Questions by Parents</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Everything you need to know about your child’s visit
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Have a specific concern about fear, procedures, or insurance? Find direct answers from our pediatric faculty below.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base pr-2">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-teal-50 text-teal-700 rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    {faq.clinicalNote && (
                      <div className="mt-3 p-3 rounded-xl bg-teal-50/80 border border-teal-100 text-teal-900 text-xs font-medium flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                        <span><strong>Clinical Note:</strong> {faq.clinicalNote}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Have a unique clinical question?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Chat directly with Dr. Maya Nair’s team on WhatsApp for advice.</p>
          </div>

          <a
            href={CLINIC_CONTACT.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us Now</span>
          </a>
        </div>

      </div>
    </section>
  );
};
