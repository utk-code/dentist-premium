import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Shield, Calendar, Clock, Sparkles, User, Heart, AlertCircle, Phone, Lock, Smile, Check, ArrowRight, ArrowLeft } from 'lucide-react';
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
  const [serviceReason, setServiceReason] = useState(initialReason || 'Comprehensive First Visit & Airway Audit');
  const [sensoryNotes, setSensoryNotes] = useState('');
  const [comfortAddons, setComfortAddons] = useState<string[]>(['Barnaby Therapy Canine Bedside', 'Ceiling Cartoon Streaming']);
  const [preferredDay, setPreferredDay] = useState('Morning Private Suite');

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
    }, 800);
  };

  const handleReset = () => {
    setStep(1);
    setConfirmedCode('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      
      <div 
        className="relative bg-white rounded-2xl sm:rounded-3xl border border-sky-100 shadow-2xl w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-sky-600 via-teal-600 to-sky-700 text-white p-5 sm:p-7 flex items-center justify-between shrink-0 shadow-xs">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-sky-100 font-bold">
                Private Pediatric Suite Intake
              </span>
              <span className="text-sky-300">•</span>
              <span className="text-[11px] sm:text-xs text-sky-100">Indiranagar Bengaluru</span>
            </div>
            <h3 className="font-outfit text-lg sm:text-2xl font-bold text-white mt-0.5 sm:mt-1 flex items-center gap-2">
              {step === 3 ? (
                <>
                  <span>Private Suite Confirmed!</span>
                  <Sparkles className="w-5 h-5 text-amber-300 fill-amber-300" />
                </>
              ) : (
                'Schedule Your Child’s Visit'
              )}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1">
          
          {step === 1 && (
            <div className="space-y-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-semibold">
                  <span>Step 1 of 2: Child Profile & Comfort Preferences</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  To ensure a relaxed, fear-free visit, our clinical team reviews your child’s preferences beforehand.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Child's First Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Child's Age Stage
                  </label>
                  <select
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-all"
                  >
                    <option value="0-2">Stage I: Infant / Toddler (0 – 24 Months)</option>
                    <option value="3-5">Stage II: Early Childhood (2 – 5 Years)</option>
                    <option value="6-11">Stage III: School Age (6 – 11 Years)</option>
                    <option value="12-18">Stage IV: Teen (12 – 18 Years)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Primary Reason for Visit
                </label>
                <input
                  type="text"
                  value={serviceReason}
                  onChange={(e) => setServiceReason(e.target.value)}
                  placeholder="e.g. First Checkup, Painless Cleaning, or No-Drill Cavity Fill"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-all"
                />
              </div>

              {/* Comfort Addons Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-800">
                  Select Free Comfort & Sensory Accommodations
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Barnaby Therapy Canine Bedside',
                    'Ceiling Cartoon Streaming (Chhota Bheem / Bluey)',
                    'Dimmed Relaxing Operatory Lighting',
                    'Parent Lap-to-Lap Seating',
                    'Organic Botanical Polish Flavor Pick',
                    'Pediatric Noise-Cancelling Headphones'
                  ].map((addon) => {
                    const isChecked = comfortAddons.includes(addon);
                    return (
                      <button
                        type="button"
                        key={addon}
                        onClick={() => toggleComfortAddon(addon)}
                        className={`text-left px-3.5 py-2.5 rounded-xl border text-xs font-medium transition-all flex items-center gap-2.5 ${
                          isChecked
                            ? 'bg-sky-50 text-sky-900 border-sky-400 font-semibold'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-md flex items-center justify-center text-xs shrink-0 ${
                          isChecked ? 'bg-sky-600 text-white' : 'border border-slate-300'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 text-white stroke-[3]" />}
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
                  className="w-full bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  <span>Continue to Parent Contact & Schedule</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold">
                  <span>Step 2 of 2: Parent Contact & Preferred Timing</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  Our clinical concierge coordinates with you to finalize your private operatory appointment.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Mobile Phone (WhatsApp & SMS Confirmation)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98450 12890"
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="parent@domain.com"
                  value={parentEmail}
                  onChange={(e) => setParentEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Preferred Time Window
                  </label>
                  <select
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                  >
                    <option value="Morning Private Suite">Morning Private Suite (09:00 – 12:30)</option>
                    <option value="Afternoon Private Suite">Afternoon Private Suite (14:00 – 17:30)</option>
                    <option value="Evening Private Suite">Evening Private Suite (17:30 – 20:00)</option>
                    <option value="Saturday Concierge Suite">Saturday Concierge (09:00 – 19:00)</option>
                    <option value="Sunday Urgent Slot">Sunday Emergency / Urgent Slot</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Sensory Notes or Past Fears
                  </label>
                  <input
                    type="text"
                    value={sensoryNotes}
                    onChange={(e) => setSensoryNotes(e.target.value)}
                    placeholder="e.g. Sensitive to sounds or first dental visit"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="p-3.5 bg-sky-50/70 rounded-xl border border-sky-100 flex items-start gap-2.5 text-xs text-sky-900">
                <Lock className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>
                  Encrypted submission. Your child’s information is private and reviewed solely by Dr. Maya Nair and clinical pediatric staff.
                </span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-3.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Securing Suite...</span>
                  ) : (
                    <span>Confirm Private Reservation</span>
                  )}
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 border border-teal-200 mx-auto flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                  Reservation Code: {confirmedCode}
                </span>
                <h3 className="font-outfit text-2xl sm:text-3xl text-slate-900 font-extrabold">
                  Thank you, {parentName || 'Parent'}!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  We have reserved your preliminary private suite request for <strong className="text-slate-900 font-bold">{childName || 'your child'}</strong>. Our pediatric concierge will call or message on WhatsApp within two business hours to finalize the exact appointment slot.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-md mx-auto text-left space-y-2 text-xs">
                <div className="flex justify-between border-b pb-1.5 border-slate-200">
                  <span className="text-slate-500 font-medium">Service Focus:</span>
                  <span className="font-bold text-slate-900">{serviceReason}</span>
                </div>
                <div className="flex justify-between border-b pb-1.5 border-slate-200">
                  <span className="text-slate-500 font-medium">Comfort Add-ons:</span>
                  <span className="font-bold text-teal-700">{comfortAddons.join(', ') || 'Standard Suite'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Location:</span>
                  <span className="font-bold text-slate-900">{CLINIC_CONTACT.address}, Indiranagar, Bengaluru</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-xs transition-all"
                >
                  Return to Little Orbit
                </button>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};


