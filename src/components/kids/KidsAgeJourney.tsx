import React, { useState } from 'react';
import { AGE_MILESTONES } from '../../data/kidsDentalData';
import { Baby, ArrowRight, CheckCircle2, Heart } from 'lucide-react';

interface KidsAgeJourneyProps {
  onOpenBooking: (stageReason?: string) => void;
}

export const KidsAgeJourney: React.FC<KidsAgeJourneyProps> = ({ onOpenBooking }) => {
  const [selectedStageId, setSelectedStageId] = useState<string>(AGE_MILESTONES[0].id);

  const currentStage = AGE_MILESTONES.find(s => s.id === selectedStageId) || AGE_MILESTONES[0];

  return (
    <section id="age-journey" className="py-16 sm:py-24 bg-[#FBFBF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-200/70">
            <Baby className="w-3.5 h-3.5 text-teal-600" />
            <span>Developmental Milestones (0 – 18 Years)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Tailored dental care for every stage of your child’s growth
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            A child's oral health needs evolve rapidly from the first baby tooth to adolescent jaw development. Select your child's age group below.
          </p>
        </div>

        {/* 4 Age Tabs with Visual Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {AGE_MILESTONES.map((stage) => {
            const isSelected = stage.id === selectedStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStageId(stage.id)}
                className={`text-left p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between overflow-hidden relative group ${
                  isSelected
                    ? 'bg-white border-teal-600 shadow-md ring-2 ring-teal-600/20'
                    : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={stage.imageUrl}
                    alt={stage.title}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover shrink-0 border border-slate-200"
                  />
                  <div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md inline-block ${
                      isSelected ? 'bg-teal-100 text-teal-800' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {stage.range}
                    </span>
                    <div className={`font-bold text-xs sm:text-sm mt-1 leading-snug ${
                      isSelected ? 'text-slate-900' : 'text-slate-700'
                    }`}>
                      {stage.title}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                  {currentStage.range} • Stage {currentStage.id.replace('stage-', '')}
                </span>
                <span className="text-xs text-slate-400 font-medium hidden sm:inline">Recommended by AAPD & ISPPD</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                {currentStage.title}: {currentStage.headline}
              </h3>

              <p className="text-sm text-slate-600 font-normal leading-relaxed mt-2">
                {currentStage.description}
              </p>
            </div>

            {/* Focus Clinical Interventions */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Key Pediatric Focus Areas for this Stage:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentStage.protocols.map((protocol, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-xs">{protocol.name}</h5>
                      <p className="text-[11px] text-slate-500 leading-snug mt-0.5">{protocol.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking CTA for this stage */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenBooking(`Stage: ${currentStage.title} (${currentStage.range})`)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md shadow-teal-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Book Stage {currentStage.id.replace('stage-', '')} Visit (₹750)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="text-xs text-slate-500">
                Unhurried 45-minute private suite slot with parent present.
              </div>
            </div>

          </div>

          {/* Right Sensory Guidance & Photography Card */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Real Photograph of Child/Family at this developmental stage */}
            <div className="relative rounded-2xl overflow-hidden h-52 sm:h-60 border border-slate-200 shadow-sm bg-slate-100">
              <img
                src={currentStage.imageUrl}
                alt={currentStage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-600/90 text-white">
                  {currentStage.range}
                </span>
                <p className="text-xs font-semibold text-white mt-1">
                  {currentStage.title} Care Protocol
                </p>
              </div>
            </div>

            {/* Parent Tip Box */}
            <div className="bg-gradient-to-br from-teal-50/70 to-amber-50/70 p-5 rounded-2xl border border-teal-100 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold shrink-0 shadow-xs">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">Parent Guidance</h4>
                  <p className="text-[11px] text-slate-500">Dr. Maya Nair (AIIMS Gold Medalist)</p>
                </div>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed font-normal bg-white/80 p-3 rounded-xl border border-teal-200/50">
                "{currentStage.milestones[0]} This developmental window is critical for proper jaw arches and stress-free dental habits."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
