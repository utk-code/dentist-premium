import React, { useState } from 'react';
import { SENSORY_AMENITIES, KidAmenity } from '../../data/kidsDentalData';
import { Shield, Sparkles, Heart, Tv, UserCheck, Award, CheckCircle2, ChevronRight, Compass, Smile } from 'lucide-react';

interface KidsSensoryAmenitiesProps {
  onOpenBooking: (amenityTitle: string) => void;
}

export const KidsSensoryAmenities: React.FC<KidsSensoryAmenitiesProps> = ({ onOpenBooking }) => {
  const [activeAmenityId, setActiveAmenityId] = useState<string>(SENSORY_AMENITIES[0].id);

  const activeAmenity: KidAmenity = SENSORY_AMENITIES.find(a => a.id === activeAmenityId) || SENSORY_AMENITIES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-4 h-4 text-sky-600" />;
      case 'Tv': return <Tv className="w-4 h-4 text-indigo-600" />;
      case 'Heart': return <Heart className="w-4 h-4 text-rose-500" />;
      case 'UserCheck': return <UserCheck className="w-4 h-4 text-teal-600" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-amber-500" />;
      case 'Award': return <Award className="w-4 h-4 text-teal-600" />;
      default: return <Smile className="w-4 h-4 text-sky-600" />;
    }
  };

  return (
    <section id="sensory" className="py-16 sm:py-24 bg-gradient-to-b from-white via-sky-50/40 to-white border-b border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200/80 mb-3">
              <Compass className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sensory Comfort & Neurodiversity Friendly</span>
            </div>
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-extrabold tracking-tight">
              A peaceful environment designed to <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-600">eliminate fear</span> from the moment you arrive.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-sm leading-relaxed">
            Crafted alongside child development specialists, Little Orbit eliminates scary noises, harsh glare, and sensory overwhelm.
          </p>
        </div>

        {/* 2-Column Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Amenity List */}
          <div className="lg:col-span-5 space-y-3">
            {SENSORY_AMENITIES.map((amenity) => {
              const isActive = amenity.id === activeAmenityId;
              return (
                <button
                  key={amenity.id}
                  onClick={() => setActiveAmenityId(amenity.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 flex items-start gap-4 ${
                    isActive
                      ? 'bg-white text-slate-900 border-sky-500 shadow-md shadow-sky-100 ring-2 ring-sky-100'
                      : 'bg-white/85 text-slate-700 border-slate-200 hover:border-sky-300 hover:bg-sky-50/40 shadow-2xs'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-sky-50 border border-sky-100">
                    {getIcon(amenity.iconName)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-bold uppercase tracking-wider ${
                        isActive ? 'text-sky-600' : 'text-slate-500'
                      }`}>
                        {amenity.badge}
                      </span>
                    </div>
                    <div className="font-outfit font-bold text-sm tracking-tight mt-0.5 leading-snug text-slate-900">
                      {amenity.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: In-Depth Spotlight Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-sky-100 shadow-md shadow-sky-900/5 overflow-hidden flex flex-col justify-between">
            
            <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-100">
              <img
                src={activeAmenity.image}
                alt={activeAmenity.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-slate-800 border border-sky-100 shadow-xs">
                {activeAmenity.badge}
              </div>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <p className="text-xs uppercase font-bold tracking-wider text-amber-300">
                  {activeAmenity.architectureSubtitle}
                </p>
                <h3 className="font-outfit text-xl sm:text-2xl font-bold leading-snug mt-0.5">
                  {activeAmenity.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
              
              <div className="space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {activeAmenity.description}
                </p>

                <div className="p-4 bg-teal-50/80 rounded-2xl border border-teal-100/90 space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    <span>How This Helps Your Child</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">
                    {activeAmenity.clinicalImpact}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  onClick={() => onOpenBooking(`Sensory Amenity: ${activeAmenity.name}`)}
                  className="bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-sm shadow-sky-200 flex items-center justify-center gap-2"
                >
                  <span>Request For Child's Visit</span>
                  <ChevronRight className="w-4 h-4 text-amber-200" />
                </button>
                <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1.5 rounded-full text-center sm:text-right flex items-center justify-center sm:justify-end gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Complimentary For All Patients</span>
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

