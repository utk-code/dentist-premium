import React, { useState } from 'react';
import { ArrowRight, Check, RotateCcw, Calendar } from 'lucide-react';

interface KidsCarePlanQuizProps {
  onOpenBooking: (customPlan: string) => void;
}

export const KidsCarePlanQuiz: React.FC<KidsCarePlanQuizProps> = ({ onOpenBooking }) => {
  const [step, setStep] = useState<number>(1);
  const [selectedAge, setSelectedAge] = useState<string>('toddler');
  const [selectedConcern, setSelectedConcern] = useState<string>('first-visit');
  const [selectedComfort, setSelectedComfort] = useState<string>('cartoons');

  const handleReset = () => {
    setStep(1);
    setSelectedAge('toddler');
    setSelectedConcern('first-visit');
    setSelectedComfort('cartoons');
  };

  const getPlanDetails = () => {
    let title = "Bespoke First Pediatric Smile Visit";
    let lead = "Dr. Maya Nair, MDS (AIIMS Gold Medalist)";
    let suite = "Ceiling Projection Cinema Suite";
    let duration = "45 Minutes (Unhurried)";
    let cost = "₹750 Initial Visit";
    let highlights = [
      "Painless examination with zero metal scraping",
      "Tell-Show-Do playful acclimatization",
      "Parent seated directly alongside child",
      "Commemorative milestone bravery coin & care kit"
    ];

    if (selectedAge === 'infant') {
      title = "Mother & Infant First Tooth & Lip-Tie Assessment";
      lead = "Dr. Maya Nair, MDS (Pediatric Surgery)";
      suite = "Private Mother & Infant Lap Suite";
      duration = "40 Minutes";
      cost = "₹750 Initial Visit";
      highlights = [
        "Gentle lap-to-lap examination with zero restraint",
        "Tongue & lip tie mobility audit for easy latching",
        "Natural remineralizing protective varnish",
        "Private lactation sanctuary access"
      ];
    } else if (selectedConcern === 'cavity') {
      title = "No-Drill Biomimetic Cavity Arrest Protocol";
      lead = "Dr. Maya Nair & Clinical Team";
      suite = "Swiss Airflow® Warm-Mist Suite";
      duration = "45 Minutes";
      cost = "₹750 Initial Visit";
      highlights = [
        "60-Second Silver Diamine Fluoride (SDF) mineral arrest",
        "Zero needle injections and zero rotary drilling",
        "Natural organic polishing paste",
        "Child returns to normal diet immediately"
      ];
    } else if (selectedConcern === 'habits' || selectedAge === 'school') {
      title = "Interceptive Airway & Facial Growth Assessment";
      lead = "Dr. Leo Mathew, MDS (Growth & Airway)";
      suite = "Safari 3D Digital Suite";
      duration = "45 Minutes";
      cost = "₹750 Initial Visit";
      highlights = [
        "Zero-radiation optical scanning & 3D jaw growth mapping",
        "Thumb sucking & mouth breathing correction guidance",
        "Natural palate guidance to prevent future extractions",
        "Custom sports tooth protection evaluation"
      ];
    } else if (selectedAge === 'teen') {
      title = "Adolescent Aesthetic & Clear Aligner Preview";
      lead = "Dr. Leo Mathew, MDS";
      suite = "Acoustic Quiet Suite";
      duration = "45 Minutes";
      cost = "₹750 Initial Visit";
      highlights = [
        "3D outcome smile preview simulation",
        "Gentle micro-stain botanical polish",
        "Discreet clear orthodontic options",
        "Respectful teenager-centered consultation"
      ];
    }

    if (selectedComfort === 'dog') {
      suite = "Barnaby Therapy Dog Suite";
    }

    return { title, lead, suite, duration, cost, highlights };
  };

  const plan = getPlanDetails();

  return (
    <section id="plan-quiz" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E5E0D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F0E6] text-[#7C6641] text-[11px] font-mono-fine uppercase tracking-[0.22em] border border-[#E0D8C8]">
            <span>Interactive Care Advisor</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-[52px] text-[#0A111E] font-normal tracking-tight leading-[1.12]">
            Discover your child’s <span className="italic text-[#967844]">bespoke care pathway.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-light max-w-md mx-auto font-sans-clean leading-relaxed">
            Answer 3 quick questions to receive a tailored itinerary, designated specialist, and transparent suite reservation details.
          </p>
        </div>

        {/* Card Container */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-[#E5E0D6] p-6 sm:p-10 shadow-xs">
          
          {/* Progress Tracker */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E5E0D6]">
            <div className="flex items-center gap-2 text-xs font-mono-fine uppercase tracking-wider text-slate-500">
              <span className="w-6 h-6 rounded-full bg-[#0A111E] text-[#D4B270] flex items-center justify-center font-bold text-[10px]">
                {step}
              </span>
              <span>Step {step} of 3</span>
            </div>

            <div className="flex items-center gap-1.5">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1 rounded-full transition-all ${
                    step === s ? 'w-8 bg-[#967844]' : step > s ? 'w-4 bg-[#0A111E]' : 'w-4 bg-[#E5E0D6]'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* STEP 1: AGE */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-editorial text-2xl text-[#0A111E] font-normal">
                  How old is your child?
                </h3>
                <p className="text-xs text-slate-500 font-light mt-1">
                  We customize the sensory pace and clinical protocols according to developmental milestones.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  { id: 'infant', label: 'Infant & Baby', sub: '0 – 24 Months', desc: 'First tooth, latch comfort, gentle tongue-tie check' },
                  { id: 'toddler', label: 'Toddler & Preschool', sub: '2 – 5 Years', desc: 'Zero-fear checkup, warm air polish, behavioral acclimation' },
                  { id: 'school', label: 'School-Age Child', sub: '6 – 11 Years', desc: 'No-drill cavity arrest, natural jaw growth, enamel sealants' },
                  { id: 'teen', label: 'Adolescent & Teen', sub: '12 – 18 Years', desc: 'Clear aligners, gentle aesthetic polish, sports mouthguards' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedAge(item.id)}
                    className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                      selectedAge === item.id
                        ? 'bg-[#FAF8F5] border-[#967844] shadow-xs'
                        : 'bg-white border-[#E5E0D6] hover:border-[#C4A468]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-editorial text-lg text-[#0A111E]">{item.label}</span>
                      <span className="text-[10px] font-mono-fine tracking-wider text-[#967844] bg-[#F4F0E6] px-2 py-0.5 rounded-full border border-[#E0D8C8]">{item.sub}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-light mt-2">{item.desc}</p>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="bg-[#0A111E] hover:bg-[#1A2638] text-[#F5F2EB] text-xs font-mono-fine uppercase tracking-[0.18em] px-6 py-3.5 rounded-full transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4B270]" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: CONCERN */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-editorial text-2xl text-[#0A111E] font-normal">
                  What is your primary focus for this visit?
                </h3>
                <p className="text-xs text-slate-500 font-light mt-1">
                  We prepare the appropriate clinician and bespoke sensory amenities in advance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  { id: 'first-visit', label: 'First Friendly Checkup', desc: 'Unhurried acclimation, zero scary instruments, joyful foundation' },
                  { id: 'cavity', label: 'Cavity or Sensitive Tooth', desc: 'No-drill Silver Diamine (SDF) mineral repair without needles' },
                  { id: 'habits', label: 'Growth, Breathing & Habits', desc: 'Airway growth, mouth breathing review, and gentle arch guidance' },
                  { id: 'cleaning', label: 'Warm Air Cleaning & Polish', desc: 'Swiss Airflow® spa cleaning with delicious organic fruit flavors' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedConcern(item.id)}
                    className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                      selectedConcern === item.id
                        ? 'bg-[#FAF8F5] border-[#967844] shadow-xs'
                        : 'bg-white border-[#E5E0D6] hover:border-[#C4A468]'
                    }`}
                  >
                    <span className="font-editorial text-lg text-[#0A111E] block">{item.label}</span>
                    <p className="text-xs text-slate-500 font-light mt-1.5">{item.desc}</p>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-mono-fine uppercase tracking-wider text-slate-500 hover:text-slate-900 cursor-pointer"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="bg-[#0A111E] hover:bg-[#1A2638] text-[#F5F2EB] text-xs font-mono-fine uppercase tracking-[0.18em] px-6 py-3.5 rounded-full transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4B270]" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: COMFORT */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-editorial text-2xl text-[#0A111E] font-normal">
                  Which sensory comfort would your child appreciate most?
                </h3>
                <p className="text-xs text-slate-500 font-light mt-1">
                  We will arrange this in your private suite prior to your scheduled arrival.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {[
                  { id: 'cartoons', label: 'Ceiling Cinema Screen', desc: 'Disney or favorite stories with gentle wireless audio' },
                  { id: 'dog', label: 'Barnaby Therapy Dog', desc: 'Gentle Golden Retriever lap presence for natural calm' },
                  { id: 'quiet', label: 'Acoustic Quiet Suite', desc: 'Soft diffused lighting, unhurried pace, zero loud sounds' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedComfort(item.id)}
                    className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                      selectedComfort === item.id
                        ? 'bg-[#FAF8F5] border-[#967844] shadow-xs'
                        : 'bg-white border-[#E5E0D6] hover:border-[#C4A468]'
                    }`}
                  >
                    <span className="font-editorial text-lg text-[#0A111E] block">{item.label}</span>
                    <p className="text-xs text-slate-500 font-light mt-1.5">{item.desc}</p>
                  </button>
                ))}
              </div>

              {/* RESULT ITINERARY BOX */}
              <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#0A111E] text-[#F5F2EB] border border-[#1A2638] space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-mono-fine uppercase tracking-[0.25em] text-[#D4B270] block">
                      Recommended Care Pathway
                    </span>
                    <h4 className="font-editorial text-2xl sm:text-3xl text-[#F5F2EB] font-normal mt-1">
                      {plan.title}
                    </h4>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-lg font-mono-fine text-[#D4B270] block">
                      {plan.cost}
                    </span>
                    <span className="text-[10px] font-mono-fine uppercase tracking-wider text-slate-400">All-Inclusive Initial Visit</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300 font-light">
                  <div>
                    <span className="text-slate-400 text-[10px] font-mono-fine uppercase tracking-wider block">Specialist</span>
                    <span className="text-white text-sm font-editorial">{plan.lead}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] font-mono-fine uppercase tracking-wider block">Dedicated Suite</span>
                    <span className="text-white text-sm font-editorial">{plan.suite}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  {plan.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 font-light">
                      <div className="w-4 h-4 rounded-full bg-[#1A2638] text-[#D4B270] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#D4B270]" strokeWidth={1.5} />
                      </div>
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => onOpenBooking(`${plan.title} (${plan.suite})`)}
                    className="w-full sm:w-auto bg-[#F5F2EB] hover:bg-[#D4B270] text-[#0A111E] text-xs font-mono-fine uppercase tracking-[0.2em] px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Reserve This Pathway ({plan.cost})</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0A111E]" strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={handleReset}
                    className="text-xs font-mono-fine uppercase tracking-wider text-slate-400 hover:text-white flex items-center gap-1.5 py-2 px-3 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" strokeWidth={1.5} />
                    <span>Reset Quiz</span>
                  </button>
                </div>
              </div>

              <div className="pt-2 flex justify-start">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs font-mono-fine uppercase tracking-wider text-slate-500 hover:text-slate-900 cursor-pointer"
                >
                  Back
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
