import React from 'react';
import { Award, ShieldCheck, BookOpen, GraduationCap, CheckCircle2, Heart, Sparkles, Star } from 'lucide-react';

interface KidsDoctorTeamProps {
  onOpenBooking: (doctorName: string) => void;
}

export const KidsDoctorTeam: React.FC<KidsDoctorTeamProps> = ({ onOpenBooking }) => {
  return (
    <section id="team" className="py-16 sm:py-24 bg-gradient-to-b from-white via-teal-50/20 to-white border-b border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-200/80 mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
              <span>MDS Pediatric Specialist Faculty</span>
            </div>
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-extrabold tracking-tight">
              Compassionate doctors dedicated to your child's <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-600">health and comfort</span>.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-sm leading-relaxed">
            Every child is cared for exclusively by Master of Dental Surgery (MDS) pediatric specialists with AIIMS & Manipal honors and ISPPD fellowships.
          </p>
        </div>

        {/* Faculty Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Dr. Maya Nair Card */}
          <div className="bg-white rounded-3xl border border-sky-100 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=900"
                  alt="Dr. Maya Nair, BDS, MDS (AIIMS New Delhi)"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-white/95 text-sky-800 text-xs font-bold px-3 py-1 rounded-full border border-sky-100 shadow-xs">
                  Chief Pediatric Specialist
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="font-outfit text-xl font-bold">Dr. Maya Nair</h3>
                  <p className="text-xs text-sky-200">BDS, MDS (Pedodontics, AIIMS New Delhi) • Gold Medalist</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Gold Medalist in Pedodontics & Preventive Dentistry from AIIMS New Delhi. Over 14 years of specialized clinical experience in painless caries arrest, infant CO2 laser frenectomy, and fear-free behavioral guidance.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Fellow, Indian Society of Pedodontics & Preventive Dentistry (ISPPD)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <Award className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Member, Indian Dental Association (IDA) & IAPD</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <BookOpen className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Pioneer in Biomimetic No-Drill Pediatric Protocols</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onOpenBooking('Consultation with Dr. Maya Nair (MDS Pedodontics)')}
                className="w-full bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl shadow-xs transition-all"
              >
                Book With Dr. Maya Nair
              </button>
            </div>
          </div>

          {/* Dr. Leo Mathew Card */}
          <div className="bg-white rounded-3xl border border-sky-100 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=900"
                  alt="Dr. Leo Mathew, BDS, MDS"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-white/95 text-teal-800 text-xs font-bold px-3 py-1 rounded-full border border-teal-100 shadow-xs">
                  Director of Airway & Conscious Sedation
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="font-outfit text-xl font-bold">Dr. Leo Mathew</h3>
                  <p className="text-xs text-teal-200">BDS (Manipal), MDS • PALS Certified</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  MDS in Pediatric Dentistry & Maxillofacial growth from Manipal Academy. Specializes in conscious inhalation sedation (Nitrous Oxide 'Laughing Gas') for highly anxious children, orthopedic expanders, and sleep airway restoration.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Pediatric Advanced Life Support (PALS) Certified Instructor</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <Award className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Member, World Federation of Orthodontists (WFO)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <BookOpen className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Director of Pediatric Emergency & Inhalation Care</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onOpenBooking('Consultation with Dr. Leo Mathew (Conscious Sedation / Airway)')}
                className="w-full bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl shadow-xs transition-all"
              >
                Book With Dr. Leo Mathew
              </button>
            </div>
          </div>

          {/* Therapy Canine Barnaby Card */}
          <div className="bg-white rounded-3xl border border-sky-100 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=900"
                  alt="Barnaby, Certified Pediatric Comfort Specialist"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-amber-50 text-amber-800 text-xs font-bold px-3 py-1 rounded-full border border-amber-200 shadow-xs flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-300" />
                  <span>Certified Comfort Therapy Dog</span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="font-outfit text-xl font-bold">Barnaby & Comfort Team</h3>
                  <p className="text-xs text-amber-200">Gentle Deep Pressure & Cuddles</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Barnaby is our certified hypoallergenic-groomed Golden Retriever, trained to rest gently beside anxious children during checkups and cleanings to immediately reduce tension, lower cortisol, and bring joyful smiles.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <Heart className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Certified Pediatric Canine Good Citizen (CGC)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Hypoallergenic Medical Grooming & Disinfection</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Available Free of Charge for Any Child's Visit</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onOpenBooking('Request Barnaby Therapy Canine Accompaniment')}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl shadow-xs transition-all"
              >
                Request Barnaby Bedside
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


