import React, { useState } from 'react';
import { KID_SERVICES, KidService } from '../../data/kidsDentalData';
import { Sparkles, Check, ArrowRight, ShieldCheck, Waves, Info, Heart } from 'lucide-react';

interface KidsServicesProps {
  onOpenBooking: (serviceName: string) => void;
}

export const KidsServices: React.FC<KidsServicesProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Preventative Biomimetics', 'Minimally Invasive Dentistry', 'Specialized Infant Surgery', 'Facial Growth & Airway'];

  const filteredServices = selectedCategory === 'All'
    ? KID_SERVICES
    : KID_SERVICES.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-white via-teal-50/25 to-white border-b border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-semibold border border-sky-200/80 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Gentle Clinical Disciplines</span>
            </div>
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-extrabold tracking-tight">
              Biomimetic, painless & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-600">laser-guided</span> pediatric care.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-sm leading-relaxed">
            By shifting from mechanical scraping and aggressive drilling to warm-water mists, Silver Diamine Fluoride, and CO2 lasers, we preserve your child's natural tooth structure.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white shadow-sm shadow-sky-200'
                  : 'bg-white text-slate-700 hover:bg-sky-50 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-sky-100 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />
                
                {/* Age Scope Tag */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-slate-800 text-[11px] font-bold px-3 py-1 rounded-full border border-sky-100 shadow-xs">
                  {service.ageScope}
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 block">
                    {service.category}
                  </span>
                  <h3 className="font-outfit text-lg font-bold text-white leading-snug mt-0.5">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {service.clinicalSummary}
                  </p>

                  <div className="p-3.5 bg-teal-50/70 rounded-2xl border border-teal-100/90">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5 mb-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                      <span>The Little Orbit Advantage</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-snug font-medium">
                      {service.biomimeticAdvantage}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    {service.protocols.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="text-xs font-bold text-sky-700 hover:text-sky-800 transition-colors flex items-center gap-1.5 group-hover:translate-x-0.5"
                  >
                    <span>Book For Child</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-600 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Fear-Free
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

