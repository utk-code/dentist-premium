import React, { useState } from 'react';
import { Tv, Heart, Wind, Baby, Shield, Sparkles, Check, ChevronRight, Volume2, Sun, Clock, UserCheck } from 'lucide-react';

interface KidsSuiteExperienceProps {
  onOpenBooking: (mode: string) => void;
}

interface SuiteAmbiance {
  id: string;
  title: string;
  tagline: string;
  category: string;
  themeColor: string;
  badge: string;
  soundscape: string;
  lighting: string;
  parentSeat: string;
  image: string;
  highlights: string[];
  childExperience: string;
}

const SUITE_MODES: SuiteAmbiance[] = [
  {
    id: 'cinema',
    title: 'Ceiling Cartoon Cinema Suite',
    tagline: 'Immersive visual distraction with wireless soft headphones.',
    category: 'Visual Entertainment',
    themeColor: 'from-sky-500/10 to-indigo-500/10 border-sky-200',
    badge: 'Ages 2 – 12 Favorite',
    soundscape: '4K Ceiling Screen • Disney+, Bluey or Peppa Pig',
    lighting: 'Soft indirect dimmable warm ambient light',
    parentSeat: 'High-comfort armchair directly beside child',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Zero medical equipment in child’s direct line of sight',
      'Ultra-soft wireless noise-canceling headphones',
      'Child controls favorite show selection from tablet',
      'Clinically proven to reduce procedure anxiety by 92%'
    ],
    childExperience: 'Children lay back comfortably watching their favorite cartoons while our team gently works underneath.'
  },
  {
    id: 'therapy-dog',
    title: 'Barnaby Dog Cuddle Suite',
    tagline: 'Gentle deep-pressure therapy with our certified Golden Retriever.',
    category: 'Sensory Reassurance',
    themeColor: 'from-amber-500/10 to-orange-500/10 border-amber-200',
    badge: 'Anxious & First-Timer Special',
    soundscape: 'Calm acoustic white noise & soothing instrumental piano',
    lighting: 'Warm 2700K golden amber restorative lighting',
    parentSeat: 'Reclining parent lounge adjacent to Barnaby',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Certified, hypoallergenic-groomed Golden Retriever',
      'Gentle resting companionship across child’s lap',
      'Proven heart-rate reduction and oxytocin release',
      'Transformative comfort for highly anxious children'
    ],
    childExperience: 'Barnaby rests his head gently on the child’s lap, providing comforting warmth and instant companionship.'
  },
  {
    id: 'swiss-spa',
    title: 'Swiss Airflow® Warm-Mist Suite',
    tagline: 'Vibration-free 37°C purified water mist — zero scraping tools.',
    category: 'Biomimetic Technology',
    themeColor: 'from-teal-500/10 to-emerald-500/10 border-teal-200',
    badge: '100% Needle & Scraper Free',
    soundscape: 'Gentle ultrasonic whisper & serene nature chimes',
    lighting: 'Crisp daylight balanced glare-free illumination',
    parentSeat: 'Observation chaise with HD treatment stream',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Purified 37°C body-temperature water kinetic mist',
      'Natural sweet erythritol powder with prebiotic xylitol',
      'Zero metal curette scraping or cold air sensitivity',
      'Fruit flavor bar: Alphonso Mango, Strawberry & Vanilla'
    ],
    childExperience: 'Feels just like a warm tickling mist of fruit-flavored water washing away all sugar bugs in minutes.'
  },
  {
    id: 'infant-lap',
    title: 'Mother & Infant Lap Suite',
    tagline: 'Unhurried knee-to-knee examination with private nursing nook.',
    category: 'Infant & Toddler',
    themeColor: 'from-rose-500/10 to-pink-500/10 border-rose-200',
    badge: 'Ages 0 – 24 Months',
    soundscape: 'Maternal womb ambient white noise & lullabies',
    lighting: 'Diffused twilight glow to protect newborn eyes',
    parentSeat: 'Mother’s comfortable ergonomic nursing rocker',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Baby remains safely nestled in mother’s or father’s lap',
      'Gentle check for tongue ties, latch ease, and first teeth',
      'Private air-conditioned lactation & nursing sanctuary',
      'Zero separation throughout the entire consultation'
    ],
    childExperience: 'Baby rests securely looking up at parents with zero unfamiliar clinical restraint.'
  }
];

export const KidsSuiteExperience: React.FC<KidsSuiteExperienceProps> = ({ onOpenBooking }) => {
  const [activeMode, setActiveMode] = useState<string>('cinema');
  const currentSuite = SUITE_MODES.find(s => s.id === activeMode) || SUITE_MODES[0];

  return (
    <section id="sensory" className="py-16 sm:py-24 bg-[#FAF9F5] border-b border-[#EBE7DF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header - Editorial Style */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0ECE1] text-[#7A6032] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#E3DCB] font-mono-tech">
            <Sparkles className="w-3.5 h-3.5 text-[#B89358]" />
            <span>Acoustic & Sensory Architecture</span>
          </div>
          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-normal tracking-tight leading-[1.15]">
            Every private suite is engineered around <span className="italic text-[#8C6D37]">calm, unhurried comfort.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
            We have replaced the cold, noisy atmosphere of traditional dentistry with private soundproof suites tailored to your child’s emotional and sensory needs.
          </p>
        </div>

        {/* Interactive Mode Switcher Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-8">
          {SUITE_MODES.map((mode) => {
            const isSelected = activeMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all relative border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0F1D36] text-white border-[#0F1D36] shadow-lg shadow-slate-900/10'
                    : 'bg-white text-slate-800 border-[#E8E4DA] hover:border-[#C5A880] hover:bg-[#FCFBF8]'
                }`}
              >
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1.5 ${
                    isSelected ? 'text-[#D4AF37]' : 'text-slate-500'
                  }`}>
                    {mode.category}
                  </span>
                  <h4 className={`text-sm sm:text-base font-outfit font-bold leading-tight ${
                    isSelected ? 'text-white' : 'text-slate-900'
                  }`}>
                    {mode.title}
                  </h4>
                </div>

                <div className="mt-3 flex items-center justify-between pt-2 border-t border-current/10 text-xs">
                  <span className={`text-[11px] font-medium ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {mode.badge}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Suite Detailed Presentation Card */}
        <div className="bg-white rounded-3xl border border-[#E8E4DA] p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image with Floating Reassurance Overlays */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#FAF9F5] shadow-md bg-slate-100">
              <img
                src={currentSuite.image}
                alt={currentSuite.title}
                className="w-full h-[320px] sm:h-[400px] object-cover transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono-tech uppercase tracking-widest text-[#D4AF37] block font-bold">
                  {currentSuite.badge}
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-light italic">
                  "{currentSuite.childExperience}"
                </p>
              </div>
            </div>

            {/* Quick Environment Specs Pill Row */}
            <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
              <div className="bg-[#FAF9F5] p-3 rounded-xl border border-[#EBE7DF] flex items-center gap-2 text-slate-700">
                <Volume2 className="w-4 h-4 text-[#8C6D37] shrink-0" />
                <span className="truncate">{currentSuite.soundscape}</span>
              </div>
              <div className="bg-[#FAF9F5] p-3 rounded-xl border border-[#EBE7DF] flex items-center gap-2 text-slate-700">
                <Sun className="w-4 h-4 text-[#8C6D37] shrink-0" />
                <span className="truncate">{currentSuite.lighting}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Specific Innovations */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] text-[#7A6032] text-xs font-semibold mb-2">
                <span>{currentSuite.category}</span>
              </div>
              <h3 className="font-fraunces text-2xl sm:text-3xl text-slate-950 font-normal leading-snug">
                {currentSuite.title}
              </h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                {currentSuite.tagline}
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="space-y-3 pt-1">
              {currentSuite.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-[#F0ECE1] text-[#7A6032] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#8C6D37]" />
                  </div>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Parent Zero-Separation Callout */}
            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#EBE7DF] flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E3DCB] flex items-center justify-center text-[#8C6D37] shrink-0 shadow-2xs">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Parent Comfort Chair Included
                </h5>
                <p className="text-xs text-slate-500 mt-0.5">
                  {currentSuite.parentSeat}. You remain alongside your child for hand-holding and smiles.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenBooking(currentSuite.title)}
                className="w-full sm:w-auto bg-[#0F1D36] hover:bg-[#1A2E54] text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <span>Reserve {currentSuite.title}</span>
                <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
              </button>
              <span className="text-xs text-slate-500">
                • 100% Zero-Separation Policy
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
