import React, { useState } from 'react';
import { SERVICES_DATA } from '../../data/kidsDentalData';
import { Sparkles, Check, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

interface KidsServicesProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const KidsServices: React.FC<KidsServicesProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'preventive' | 'restorative' | 'orthopedic'>('all');

  const filteredServices = SERVICES_DATA.filter(service => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'preventive') return service.category.toLowerCase().includes('prevent') || service.category.toLowerCase().includes('comfort');
    if (selectedCategory === 'restorative') return service.category.toLowerCase().includes('restorative') || service.category.toLowerCase().includes('laser') || service.category.toLowerCase().includes('painless');
    if (selectedCategory === 'orthopedic') return service.category.toLowerCase().includes('ortho') || service.category.toLowerCase().includes('airway');
    return true;
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-200/70">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Gentle & Needle-Free Treatments</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Advanced pediatric dentistry, engineered for zero tears
          </h2>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Gentle Services' },
            { id: 'preventive', label: 'Cleanings & Protection' },
            { id: 'restorative', label: 'No-Drill Fillings & Lasers' },
            { id: 'orthopedic', label: 'Airway & Gentle Expansion' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid with Visual Photography Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-teal-400 hover:shadow-xl transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Photo header for service */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-teal-100 shadow-xs">
                      {service.category}
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-xs text-[10px] font-medium text-white flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{service.recoveryTime}</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-1.5 pt-2">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs">
                  <span className="text-slate-400 block text-[10px]">Suitability:</span>
                  <span className="font-semibold text-slate-800 text-[11px]">{service.ageRange}</span>
                </div>

                <button
                  onClick={() => onOpenBooking(`Treatment: ${service.name}`)}
                  className="px-3.5 py-1.5 rounded-xl bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white font-semibold text-xs border border-teal-200 hover:border-teal-600 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Book Visit</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-teal-50 via-white to-amber-50 border border-teal-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Our Conservative Care Promise</h4>
              <p className="text-xs text-slate-600">We never drill when natural remineralization can heal the tooth. Full transparency with parents always.</p>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking('Conservative Care Evaluation')}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition-all whitespace-nowrap cursor-pointer active:scale-95"
          >
            Schedule Consultation (₹750)
          </button>
        </div>

      </div>
    </section>
  );
};
