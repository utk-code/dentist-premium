import React from 'react';
import { SENSORY_AMENITIES } from '../../data/kidsDentalData';
import { Heart, Tv, ShieldCheck, Sun, Coffee, Sparkles } from 'lucide-react';

interface KidsSensoryAmenitiesProps {
  onOpenBooking: (amenityNote?: string) => void;
}

export const KidsSensoryAmenities: React.FC<KidsSensoryAmenitiesProps> = ({ onOpenBooking }) => {
  return (
    <section id="sensory" className="py-16 sm:py-24 bg-[#FBFBF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 text-xs font-semibold border border-amber-200/80">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Child Sensory Sanctuary & Private Suites</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Designed to calm senses and replace anxiety with joyful wonder
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            From our golden retriever therapy dog to ceiling cinema screens and parent armchairs, every square inch of our clinic is engineered for total peace of mind.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Barnaby Therapy Dog Card - Highlight with Real Photo */}
          <div className="lg:col-span-2 bg-gradient-to-br from-amber-50/90 via-white to-amber-100/40 rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-md flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-amber-200/70">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=200&h=200&q=80"
                    alt="Barnaby the certified therapy dog"
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-amber-300 shadow-sm shrink-0"
                  />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                      Child Favorite Companion
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1">
                      Meet Barnaby • Certified Pediatric Therapy Dog
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-800 bg-white px-3 py-1 rounded-full border border-amber-200 shadow-sm self-start sm:self-auto">
                  Hypoallergenic & Gentle
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 mt-5 items-center">
                <div className="sm:col-span-7">
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    Barnaby is our gentle Golden Retriever certified in animal-assisted pediatric support. He is trained to rest softly beside children on the treatment chair, offering comforting weight and warm companionship that naturally reduces cortisol and calms anxious thoughts.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 text-xs">
                    <div className="p-3 bg-white rounded-xl border border-amber-200 shadow-xs">
                      <span className="font-bold text-slate-900 block">Bedside Chin Rest</span>
                      <span className="text-slate-500 text-[11px] mt-0.5 block">Deep-pressure tactile calm.</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-amber-200 shadow-xs">
                      <span className="font-bold text-slate-900 block">100% Hypoallergenic</span>
                      <span className="text-slate-500 text-[11px] mt-0.5 block">Vetted medical grooming.</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-amber-200 shadow-xs">
                      <span className="font-bold text-slate-900 block">Zero Extra Fee</span>
                      <span className="text-slate-500 text-[11px] mt-0.5 block">Available on parent request.</span>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-sm border border-amber-200 bg-slate-100 h-44 sm:h-full min-h-[160px]">
                    <img
                      src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80"
                      alt="Barnaby therapy dog with children"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-amber-200/70 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-amber-900 font-semibold">
                Available during all morning and afternoon private suite visits.
              </span>
              <button
                onClick={() => onOpenBooking('Request Barnaby Therapy Dog Companion')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm transition-colors cursor-pointer text-center"
              >
                Request Barnaby for Visit
              </button>
            </div>
          </div>

          {/* Ceiling 4K Cinema */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="relative h-40 w-full overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80"
                alt="Modern pediatric dental suite ceiling screen"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-white/90 backdrop-blur-sm text-blue-600 flex items-center justify-center font-bold shadow-xs">
                <Tv className="w-4 h-4" />
              </div>
              <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-sm text-[11px] font-bold text-white">
                4K Cinema
              </div>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Ceiling 4K Cinema & Cartoons
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Ultra-high-definition ceiling displays positioned directly overhead. Children select their favorite shows on Netflix, Disney+, or YouTube Kids before care begins.
                </p>

                <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600">
                  <span className="font-semibold text-slate-800 block">Headphones Included:</span>
                  Child-sized wireless headphones block out any clinical equipment sounds.
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                Bluey • Peppa Pig • Paw Patrol • Marvel
              </div>
            </div>
          </div>

          {/* Private Soundproof Suites */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="relative h-40 w-full overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
                alt="Private pediatric suite interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-white/90 backdrop-blur-sm text-teal-600 flex items-center justify-center font-bold shadow-xs">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-sm text-[11px] font-bold text-white">
                Zero Separation
              </div>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Private Soundproof Suites
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  No open shared clinic bays with crying children in adjacent chairs. Each family has their own private, acoustically isolated suite for complete calm.
                </p>

                <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600">
                  <span className="font-semibold text-slate-800 block">Dedicated Team:</span>
                  100% focused attention from a pediatric specialist and trained assistant.
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                Acoustic wall paneling • Clean air HEPA filtration
              </div>
            </div>
          </div>

          {/* Circadian Soft Lighting */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="relative h-40 w-full overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80"
                alt="Warm daylight in pediatric clinic"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-white/90 backdrop-blur-sm text-amber-600 flex items-center justify-center font-bold shadow-xs">
                <Sun className="w-4 h-4" />
              </div>
              <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-sm text-[11px] font-bold text-white">
                Soft 2700K Light
              </div>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Circadian Soft Lighting
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  We eliminated blinding white examination spotlights that hurt young eyes. Our ambient diffused fixtures simulate gentle morning daylight.
                </p>

                <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600">
                  <span className="font-semibold text-slate-800 block">Tinted Sunglasses:</span>
                  Fun UV-protective eyewear provided for every child during checkup.
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                Soft warm light • Zero eye strain or harsh shadows
              </div>
            </div>
          </div>

          {/* Ergonomic Parent Armchairs */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="relative h-40 w-full overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80"
                alt="Comfortable parent seating in clinic"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-white/90 backdrop-blur-sm text-emerald-600 flex items-center justify-center font-bold shadow-xs">
                <Coffee className="w-4 h-4" />
              </div>
              <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-sm text-[11px] font-bold text-white">
                Parent Armchairs
              </div>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Parent Armchairs & Lounge
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Parents are never separated. Sit comfortably right beside your child, hold their hand, or hold toddlers in your lap for gentle lap-to-lap checks.
                </p>

                <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600">
                  <span className="font-semibold text-slate-800 block">Parent Hospitality:</span>
                  Artisanal roast coffee, tea, and high-speed fiber in family lounge.
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                Zero Separation Policy • Indiranagar Atelier
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
