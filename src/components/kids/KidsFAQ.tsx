import React, { useState } from 'react';
import { PARENT_FAQS, KidFAQ, CLINIC_CONTACT } from '../../data/kidsDentalData';
import { ChevronDown, HelpCircle, Phone, MessageSquare, Shield, Sparkles } from 'lucide-react';

interface KidsFAQProps {
  onOpenBooking: (topic?: string) => void;
}

export const KidsFAQ: React.FC<KidsFAQProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'First Appointments', 'Sensory & Comfort', 'Biological Treatments', 'Concierge & Insurance'];

  const filteredFaqs = selectedCategory === 'All'
    ? PARENT_FAQS
    : PARENT_FAQS.filter(f => f.category === selectedCategory);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gradient-to-b from-white via-sky-50/20 to-white border-b border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-semibold border border-sky-200/80 mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
              <span>Parent Questions Answered</span>
            </div>
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-extrabold tracking-tight">
              Everything you need to know for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-600">happy visit</span>.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-sm leading-relaxed">
            Have questions regarding our biological approach, no-drill fillings, or sensory accommodations? Explore our clinical guidance below.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white shadow-sm ring-2 ring-sky-200'
                  : 'bg-white text-slate-700 hover:bg-sky-50 border border-sky-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* FAQ Accordion List */}
          <div className="lg:col-span-8 space-y-3.5">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-sky-100 overflow-hidden transition-all shadow-xs hover:border-sky-300"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-sky-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200/60 shrink-0">
                        {faq.category}
                      </span>
                      <span className="font-bold text-sm sm:text-base text-slate-900 tracking-tight">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-sky-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 pt-1 sm:px-6 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-sky-50 bg-sky-50/30">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side Concierge Contact Box */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-sky-100 p-6 sm:p-8 shadow-sm space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block">
                Direct Clinical Concierge
              </span>
              <h3 className="font-outfit text-xl font-bold text-slate-900 leading-snug">
                Have a unique sensory or medical question?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Our pediatric clinical concierge works directly with Dr. Maya Nair and Dr. Leo Mathew to answer developmental or airway questions before scheduling.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={CLINIC_CONTACT.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-xs flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Chat On WhatsApp</span>
              </a>

              <a
                href={`tel:${CLINIC_CONTACT.phone}`}
                className="w-full bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl border border-sky-200 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call Concierge: {CLINIC_CONTACT.phone}</span>
              </a>
            </div>

            <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium text-center">
              Available Mon – Sun, 9:00 AM – 8:00 PM IST
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

