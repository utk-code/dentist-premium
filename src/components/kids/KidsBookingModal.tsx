import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, Clock, Lock, Check, ArrowRight, ArrowLeft, Heart, ShieldCheck, Sparkles, Smile } from 'lucide-react';
import { CLINIC_CONTACT } from '../../data/kidsDentalData';

interface KidsBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialReason?: string;
}

export const KidsBookingModal: React.FC<KidsBookingModalProps> = ({
  isOpen,
  onClose,
  initialReason = ''
}) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmedCode, setConfirmedCode] = useState<string>('');

  // Form State
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('3-5');
  const [parentName, setParentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [serviceReason, setServiceReason] = useState(initialReason || 'First Dental Checkup & Airway Evaluation');
  const [sensoryNotes, setSensoryNotes] = useState('');
  const [comfortAddons, setComfortAddons] = useState<string[]>(['Barnaby Therapy Dog Bedside', '4K Ceiling Netflix Cartoons']);
  const [preferredDay, setPreferredDay] = useState('Morning Suite (09:00 – 12:30)');

  useEffect(() => {
    if (initialReason) {
      setServiceReason(initialReason);
    }
  }, [initialReason]);

  if (!isOpen) return null;

  const toggleComfortAddon = (item: string) => {
    if (comfortAddons.includes(item)) {
      setComfortAddons(comfortAddons.filter(a => a !== item));
    } else {
      setComfortAddons([...comfortAddons, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const randomId = 'LO-BLR-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmedCode(randomId);
      setStep(3);
    }, 500);
  };

  const handleReset = () => {
    setStep(1);
    setConfirmedCode('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      
      <div 
        className="relative bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-teal-600 text-white p-5 sm:p-6 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider text-teal-100 font-bold">
                Private Pediatric Suite Intake
              </span>
              <span className="text-teal-300">•</span>
              <span className="text-[11px] uppercase tracking-wider text-teal-100">
                Indiranagar, Bengaluru
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {step === 3 ? (
                'Reservation Confirmed!'
              ) : (
                'Schedule Your Child’s Gentle Visit'
              )}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto flex-1 text-slate-800">
          
          {step === 1 && (
            <div className="space-y-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-100">
                  <span>Step 1 of 2: Child Profile & Comfort Preferences</span>
                </div>
                <p className="text-xs text-slate-500 font-normal leading-relaxed pt-1">
                  To ensure a fear-free, relaxed visit, our doctors prepare personalized sensory accommodations before you arrive.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Child's First Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-teal-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Child's Age Stage
                  </label>
                  <select
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-teal-600 transition-colors"
                  >
                    <option value="0-2">Stage I: Infant / Toddler (0 – 24 Months)</option>
                    <option value="3-5">Stage II: Early Childhood (2 – 5 Years)</option>
                    <option value="6-11">Stage III: Mixed Dentition (6 – 11 Years)</option>
                    <option value="12-18">Stage IV: Adolescent / Teen (12 – 18 Years)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Primary Focus for Visit
                </label>
                <input
                  type="text"
                  value={serviceReason}
                  onChange={(e) => setServiceReason(e.target.value)}
                  placeholder="e.g. First Checkup, Painless Cleaning, or No-Drill Cavity Fill"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-teal-600 transition-colors"
                />
              </div>

              {/* Comfort Addons Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700">
                  Complimentary Comfort Accommodations:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Barnaby Therapy Dog Bedside',
                    '4K Ceiling Netflix Cartoons',
                    'Soft Circadian Lighting',
                    'Parent Lap Seating',
                    'Strawberry Polish Flavor',
                    'Noise-Canceling Headphones'
                  ].map((addon) => {
                    const isChecked = comfortAddons.includes(addon);
                    return (
                      <button
                        type="button"
                        key={addon}
                        onClick={() => toggleComfortAddon(addon)}
                        className={`text-left p-2.5 rounded-xl border text-xs transition-all flex items-center gap-2 cursor-pointer ${
                          isChecked
                            ? 'bg-teal-50 text-teal-900 border-teal-500 font-semibold shadow-xs'
                            : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span className={`w-4 h-4 rounded flex items-center justify-center text-xs shrink-0 ${
                          isChecked ? 'bg-teal-600 text-white' : 'border border-slate-300'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </span>
                        <span>{addon}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm py-3.5 rounded-xl shadow-md shadow-teal-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Continue to Parent Contact</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-100">
                  <span>Step 2 of 2: Parent Contact & Preferred Window</span>
                </div>
                <p className="text-xs text-slate-500 font-normal leading-relaxed pt-1">
                  Our clinical concierge will coordinate directly to confirm your unhurried slot.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Phone (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98450 12890"
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-teal-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="parent@domain.com"
                  value={parentEmail}
                  onChange={(e) => setParentEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-teal-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Time Window
                  </label>
                  <select
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-teal-600"
                  >
                    <option value="Morning Private Suite">Morning Suite (09:00 – 12:30)</option>
                    <option value="Afternoon Private Suite">Afternoon Suite (14:00 – 17:30)</option>
                    <option value="Evening Private Suite">Evening Suite (17:30 – 20:00)</option>
                    <option value="Saturday Concierge Suite">Saturday Concierge (09:00 – 19:00)</option>
                    <option value="Sunday Urgent Slot">Sunday Urgent Slot (10:00 – 14:00)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Past Fears or Sensory Notes
                  </label>
                  <input
                    type="text"
                    value={sensoryNotes}
                    onChange={(e) => setSensoryNotes(e.target.value)}
                    placeholder="e.g. Scared of bright light or first visit"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-teal-600"
                  />
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
                <Lock className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  Confidential medical intake. Information reviewed exclusively by Dr. Maya Nair and certified pediatric faculty.
                </span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-md shadow-teal-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  {isSubmitting ? (
                    <span>Confirming...</span>
                  ) : (
                    <span>Confirm Visit Reservation (₹750)</span>
                  )}
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 border border-teal-200 mx-auto flex items-center justify-center shadow-md">
                <CheckCircle2 className="w-8 h-8 text-teal-600" />
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  Reservation Code: {confirmedCode}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 pt-2">
                  Thank you, {parentName || 'Parent'}!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  We have received your private suite request for <strong className="text-slate-900">{childName || 'your child'}</strong>. Our pediatric concierge will contact you via WhatsApp within 2 hours to confirm your exact time slot.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-md mx-auto text-left space-y-2 text-xs">
                <div className="flex justify-between border-b pb-2 border-slate-200">
                  <span className="text-slate-500">Visit Focus:</span>
                  <span className="font-bold text-slate-900">{serviceReason}</span>
                </div>
                <div className="flex justify-between border-b pb-2 border-slate-200">
                  <span className="text-slate-500">Comfort Add-ons:</span>
                  <span className="font-bold text-teal-700">{comfortAddons.join(', ') || 'Standard Suite'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-bold text-slate-900">{CLINIC_CONTACT.address}, Indiranagar</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-8 py-3.5 rounded-xl shadow-md transition-all cursor-pointer active:scale-95"
                >
                  Return to Home
                </button>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
