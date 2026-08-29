import React from 'react';
import { DOCTORS } from '../../data/kidsDentalData';
import { GraduationCap, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface KidsDoctorTeamProps {
  onOpenBooking: (doctorName?: string) => void;
}

export const KidsDoctorTeam: React.FC<KidsDoctorTeamProps> = ({ onOpenBooking }) => {
  return (
    <section id="team" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-200/70">
            <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
            <span>Specialist Faculty & Hospital Fellows</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Meet the pediatric specialists trusted by Bengaluru families
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Our doctors have dedicated their entire careers exclusively to children's oral health, airway development, and behavioral psychology.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md hover:border-teal-500 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-5">
                
                {/* Doctor Top Profile with Real Photographic Portrait */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4 border-b border-slate-200">
                  <img
                    src={doc.imageUrl}
                    alt={doc.name}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border-2 border-teal-200 shadow-sm shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{doc.name}</h3>
                    <p className="text-xs font-semibold text-teal-700 mt-0.5">{doc.role}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{doc.education}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[10px] font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded-md">
                        {doc.experienceYears}+ Years Clinical Practice
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {doc.bio}
                </p>

                {/* Doctor Highlights */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Clinical Specialties & Experience:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {doc.specialties.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-xl border border-slate-100 shadow-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accreditation Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-[11px] font-semibold text-slate-700 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    PALS Certified (Pediatric Life Support)
                  </span>
                  <span className="text-[11px] font-semibold text-slate-700 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    ISPPD Specialist Fellow
                  </span>
                </div>

              </div>

              {/* Consultation Booking Button */}
              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  <span>Consultation: </span>
                  <span className="font-bold text-slate-900">₹750</span>
                </div>

                <button
                  onClick={() => onOpenBooking(`Consultation with ${doc.name}`)}
                  className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md shadow-teal-600/20 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <span>Book with {doc.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-teal-800 font-bold text-xs">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>Dedicated Pediatric Nursing & Care Team</span>
          </div>
          <p className="text-xs text-slate-600">
            Every appointment is supported by child-certified pediatric dental assistants trained in behavioral guidance, gentle comfort holding, and positive reinforcement psychology.
          </p>
        </div>

      </div>
    </section>
  );
};
