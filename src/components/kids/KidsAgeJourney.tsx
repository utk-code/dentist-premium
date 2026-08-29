import React, { useState } from 'react';
import { AGE_TRACKS, AgeTrack } from '../../data/kidsDentalData';
import { Calendar, CheckCircle2, ChevronRight, Sparkles, BookOpen, Clock, Shield, Baby, Smile, GraduationCap, Sparkle, Heart } from 'lucide-react';

interface KidsAgeJourneyProps {
  onOpenBooking: (stageTitle: string) => void;
}

export const KidsAgeJourney: React.FC<KidsAgeJourneyProps> = ({ onOpenBooking }) => {
  const [selectedTrackId, setSelectedTrackId] = useState<string>('infant');

  const activeTrack: AgeTrack = AGE_TRACKS.find(t => t.id === selectedTrackId) || AGE_TRACKS[0];

  const renderStageIcon = (id: string, isSelected: boolean) => {
    switch (id) {
      case 'infant':
        return <Baby className={`w-4 h-4 ${isSelected ? 'text-sky-600' : 'text-slate-500'}`} />;
      case 'toddler':
        return <Smile className={`w-4 h-4 ${isSelected ? 'text-teal-600' : 'text-slate-500'}`} />;
      case 'school':
        return <GraduationCap className={`w-4 h-4 ${isSelected ? 'text-indigo-600' : 'text-slate-500'}`} />;
      case 'adolescent':
        return <Sparkles className={`w-4 h-4 ${isSelected ? 'text-amber-600' : 'text-slate-500'}`} />;
      default:
        return <Heart className={`w-4 h-4 ${isSelected ? 'text-sky-600' : 'text-slate-500'}`} />;
    }
  };

  return (
    <section id="age-journey" className="py-16 sm:py-24 bg-gradient-to-b from-white via-sky-50/50 to-white border-b border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-200/80 mb-3">
              <Shield className="w-3.5 h-3.5 text-teal-600" />
              <span>Personalized Age Milestones</span>
            </div>
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-extrabold tracking-tight">
              Gentle care tailored from <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-600">first tooth</span> to confident teen smiles.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-sm leading-relaxed">
            Every child’s mouth changes rapidly. We provide customized care protocols designed specifically for their emotional comfort and developmental stage.
          </p>
        </div>

        {/* Tab Navigation Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 mb-8">
          {AGE_TRACKS.map((track) => {
            const isSelected = track.id === selectedTrackId;
            return (
              <button
                key={track.id}
                onClick={() => setSelectedTrackId(track.id)}
                className={`text-left p-3.5 sm:p-5 rounded-2xl border-2 transition-all duration-200 relative ${
                  isSelected
                    ? 'bg-white text-slate-900 border-sky-500 shadow-md shadow-sky-100 ring-2 ring-sky-100'
                    : 'bg-white/80 text-slate-700 border-slate-200/90 hover:border-sky-300 hover:bg-sky-50/30 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-2">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
                      {renderStageIcon(track.id, isSelected)}
                    </div>
                    <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider ${
                      isSelected ? 'text-sky-600' : 'text-slate-500'
                    }`}>
                      {track.code}
                    </span>
                  </div>
                  <span className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                    isSelected ? 'bg-sky-100 text-sky-800' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {track.ageRange}
                  </span>
                </div>
                <div className="font-outfit font-bold text-xs sm:text-sm tracking-tight leading-snug text-slate-900">
                  {track.stageName}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="bg-white rounded-3xl border border-sky-100 shadow-lg shadow-sky-900/5 overflow-hidden p-5 sm:p-10 lg:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider rounded-lg">
                  {activeTrack.code} • {activeTrack.ageRange}
                </span>
              </div>

              <h3 className="font-outfit text-2xl sm:text-3xl text-slate-900 font-extrabold leading-tight">
                {activeTrack.stageName}
              </h3>

              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-800">
                  Developmental Focus
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {activeTrack.developmentalFocus}
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  What We Focus On During Your Visit:
                </div>
                <div className="space-y-2.5">
                  {activeTrack.examinationProtocols.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onOpenBooking(`Milestone Consultation: ${activeTrack.stageName} (${activeTrack.ageRange})`)}
                  className="bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-sm shadow-sky-200 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-200" />
                  <span>Book {activeTrack.stageName} Visit</span>
                </button>
                <div className="text-xs text-slate-500 flex items-center justify-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-teal-600" />
                  <span>Unhurried 45-Minute Visit</span>
                </div>
              </div>

            </div>

            {/* Right Doctor Clinical Advisory Box */}
            <div className="lg:col-span-5 space-y-5">
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-900 to-teal-950 text-white shadow-md space-y-4">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-amber-300" />
                  Pediatric Specialist Insight
                </div>
                <blockquote className="font-fraunces text-base sm:text-lg text-sky-50 italic leading-relaxed">
                  "{activeTrack.pediatricianNote}"
                </blockquote>
                <div className="pt-2 border-t border-sky-800/80 text-xs text-sky-200 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-sky-700 flex items-center justify-center font-bold text-white text-xs">
                    MN
                  </div>
                  <div>
                    <p className="font-bold text-white">Dr. Maya Nair, BDS, MDS (AIIMS New Delhi)</p>
                    <p className="text-[11px] text-sky-300">Gold Medalist • Fellow ISPPD • Chief Pedodontist</p>
                  </div>
                </div>
              </div>

              {/* Gentle Promise Summary */}
              <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-100 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-900 flex items-center gap-1.5">
                  <Smile className="w-4 h-4 text-teal-700" />
                  <span>Our Promise For This Age Group</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {activeTrack.clinicalScope}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


