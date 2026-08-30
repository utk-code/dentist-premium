import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, CheckCircle2, Calendar, Clock, Lock, Check, ArrowRight, ArrowLeft, Heart, ShieldCheck, Sparkles, Smile } from 'lucide-react';
import { CLINIC_CONTACT } from '../../data/kidsDentalData';

interface KidsBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialReason?: string;
}

const AGE_OPTIONS = ['0 – 2 years', '3 – 5 years', '6 – 10 years', '11 – 14 years', '15 – 18 years'];
const COMFORT_OPTIONS = ['Barnaby Therapy Dog Bedside', '4K Ceiling Netflix Cartoons', 'Noise-Cancelling Headphones', 'Lap-to-Lap Parent Seating', 'Dim Circadian Lighting'];
const DAY_OPTIONS = ['Morning Suite (09:00 – 12:30)', 'Afternoon Suite (01:00 – 05:00)', 'Evening Suite (05:30 – 08:00)', 'Sunday Specialist (09:30 – 12:00)'];

export const KidsBookingModal: React.FC<KidsBookingModalProps> = ({
  isOpen,
  onClose,
  initialReason = ''
}) => {
  const [step, setStep] = useState<number>(1);
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('3 – 5 years');
  const [parentName, setParentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [serviceReason, setServiceReason] = useState(initialReason || 'First Dental Checkup & Airway Evaluation');
  const [sensoryNotes, setSensoryNotes] = useState('');
  const [comfortAddons, setComfortAddons] = useState<string[]>(['Barnaby Therapy Dog Bedside', '4K Ceiling Netflix Cartoons']);
  const [preferredDay, setPreferredDay] = useState('Morning Suite (09:00 – 12:30)');
  const [formError, setFormError] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (initialReason) setServiceReason(initialReason);
  }, [initialReason]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [isOpen]);

  // Save + restore focus
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      // Focus first input after mount
      requestAnimationFrame(() => {
        const firstInput = modalRef.current?.querySelector('input') as HTMLElement | null;
        firstInput?.focus();
      });
      return () => { previousFocusRef.current?.focus(); };
    }
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  // Focus trap
  const trapFocus = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }, []);

  if (!isOpen) return null;

  const toggleAddon = (item: string) => {
    setComfortAddons(prev => prev.includes(item) ? prev.filter(a => a !== item) : [...prev, item]);
  };

  const buildWhatsAppUrl = () => {
    const msg = [
      `Hello Little Orbit! I'd like to schedule a visit for my child.`,
      ``,
      `Child: ${childName} (${childAge})`,
      `Parent: ${parentName}`,
      `Phone: ${parentPhone}`,
      `Service: ${serviceReason}`,
      `Comfort: ${comfortAddons.join(', ') || 'None'}`,
      `Preferred time: ${preferredDay}`,
      sensoryNotes ? `Notes: ${sensoryNotes}` : '',
    ].filter(Boolean).join('\n');
    return `https://wa.me/919880012345?text=${encodeURIComponent(msg)}`;
  };

  const validateStep1 = () => {
    if (!childName.trim() || !parentName.trim() || !parentPhone.trim()) {
      setFormError('Please fill in your child\'s name, your name, and phone number.');
      return false;
    }
    if (parentPhone.replace(/\D/g, '').length < 10) {
      setFormError('Please enter a valid phone number with at least 10 digits.');
      return false;
    }
    setFormError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep1()) return;
    setStep(3);
    // Open WhatsApp after a short delay so the user sees confirmation first
    setTimeout(() => { window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer'); }, 400);
  };

  const handleClose = () => { setStep(1); onClose(); };

  const headingId = 'booking-modal-title';

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={headingId}
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        className="relative bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={trapFocus}
      >
        {/* Header */}
        <div className="bg-teal-600 text-white p-5 sm:p-6 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider text-teal-100 font-bold">Private Pediatric Suite Intake</span>
              <span className="text-teal-300">•</span>
              <span className="text-[11px] uppercase tracking-wider text-teal-100">Indiranagar, Bengaluru</span>
            </div>
            <h3 id={headingId} className="text-xl sm:text-2xl font-bold text-white mt-1">
              {step === 3 ? 'You\'re All Set!' : 'Schedule Your Child\'s Gentle Visit'}
            </h3>
          </div>
          <button onClick={handleClose} aria-label="Close booking modal" className="p-2 rounded-xl hover:bg-teal-700 transition-colors shrink-0 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Trust Ribbon */}
        {step < 3 && (
          <div className="bg-teal-50 border-b border-teal-100 px-5 py-2.5 flex items-center gap-4 text-[11px] text-teal-800 font-medium shrink-0">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-teal-600" />AIIMS Faculty-Led</span>
            <span className="text-teal-300">•</span>
            <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-teal-600" />Zero Restraint & Needle-Free</span>
            <span className="text-teal-300">•</span>
            <span className="flex items-center gap-1.5"><Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />Barnaby Dog</span>
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto flex-grow p-5 sm:p-6 space-y-5">

          {/* Step 1 – Intake */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label htmlFor="child-name" className="block text-xs font-bold text-slate-700 mb-1">Child's Full Name</label>
                <input id="child-name" type="text" value={childName} onChange={e => setChildName(e.target.value)} placeholder="e.g. Arjun, Myra"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-teal-600 transition-colors" />
              </div>
              <div>
                <label htmlFor="child-age" className="block text-xs font-bold text-slate-700 mb-1">Age</label>
                <select id="child-age" value={childAge} onChange={e => setChildAge(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-teal-600 transition-colors">
                  {AGE_OPTIONS.map(a => <option key={a}>{a}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="parent-name" className="block text-xs font-bold text-slate-700 mb-1">Parent / Guardian Name</label>
                <input id="parent-name" type="text" value={parentName} onChange={e => setParentName(e.target.value)} placeholder="e.g. Priya"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-teal-600 transition-colors" />
              </div>
              <div>
                <label htmlFor="parent-phone" className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Number</label>
                <input id="parent-phone" type="tel" value={parentPhone} onChange={e => setParentPhone(e.target.value)} placeholder="e.g. 98800 12345"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-teal-600 transition-colors" />
              </div>
              {formError && <p className="text-xs text-red-600 font-medium bg-red-50 px-3 py-2 rounded-xl">{formError}</p>}
              <button type="button" onClick={() => { if (validateStep1()) setStep(2); }}
                className="w-full py-3 rounded-2xl bg-teal-600 text-white text-sm font-bold hover:bg-teal-700 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2">
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Step 2 – Suite & Comfort */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label htmlFor="visit-reason" className="block text-xs font-bold text-slate-700 mb-1">Reason for Visit</label>
                <input id="visit-reason" type="text" value={serviceReason} onChange={e => setServiceReason(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-teal-600 transition-colors" />
              </div>

              <div>
                <span className="block text-xs font-bold text-slate-700 mb-2">Comfort Add-Ons</span>
                <div className="space-y-2">
                  {COMFORT_OPTIONS.map(opt => (
                    <label key={opt} className={`flex items-center gap-3 p-2.5 rounded-xl border text-sm cursor-pointer transition-all ${comfortAddons.includes(opt) ? 'border-teal-400 bg-teal-50' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
                      <span className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${comfortAddons.includes(opt) ? 'bg-teal-600 border-teal-600' : 'border-slate-300'}`}>
                        {comfortAddons.includes(opt) && <Check className="w-2.5 h-2.5 text-white" />}
                      </span>
                      <span className="text-slate-700">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="sensory-notes" className="block text-xs font-bold text-slate-700 mb-1">Sensory or Anxiety Notes (optional)</label>
                <textarea id="sensory-notes" value={sensoryNotes} onChange={e => setSensoryNotes(e.target.value)} rows={2} placeholder="Any allergies, triggers, or special needs..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-teal-600 transition-colors resize-none" />
              </div>

              <div>
                <label htmlFor="preferred-day" className="block text-xs font-bold text-slate-700 mb-1">Preferred Suite Time</label>
                <select id="preferred-day" value={preferredDay} onChange={e => setPreferredDay(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-teal-600 transition-colors">
                  {DAY_OPTIONS.map(d => <option key={d}>{d}</option>)}
                </select>
              </div>

              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)}
                  className="flex-1 py-3 rounded-2xl bg-slate-100 text-slate-700 text-sm font-bold hover:bg-slate-200 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button type="submit"
                  className="flex-[2] py-3 rounded-2xl bg-teal-600 text-white text-sm font-bold hover:bg-teal-700 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2">
                  Send on WhatsApp <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3 – Confirmed */}
          {step === 3 && (
            <div className="space-y-5 text-center py-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9 text-teal-600" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900">Opening WhatsApp now…</p>
                <p className="text-sm text-slate-500 mt-1">Review your details and tap <strong>Send</strong> in WhatsApp to finish booking. Our team replies within 30 minutes during clinic hours.</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4 text-left text-xs text-slate-600 space-y-1.5 border border-slate-200">
                <p><strong className="text-slate-800">Child:</strong> {childName}, {childAge}</p>
                <p><strong className="text-slate-800">Parent:</strong> {parentName}</p>
                <p><strong className="text-slate-800">Service:</strong> {serviceReason}</p>
                <p><strong className="text-slate-800">Comfort:</strong> {comfortAddons.join(', ') || 'None'}</p>
                <p><strong className="text-slate-800">Preferred time:</strong> {preferredDay}</p>
              </div>
              <button type="button" onClick={handleClose}
                className="w-full py-3 rounded-2xl bg-teal-600 text-white text-sm font-bold hover:bg-teal-700 transition-all active:scale-[0.98] cursor-pointer">
                Done
              </button>
            </div>
          )}
        </form>

        {/* Footer */}
        {step < 3 && (
          <div className="bg-slate-50 border-t border-slate-200 px-5 py-3 text-center text-[11px] text-slate-400 shrink-0">
            <span className="flex items-center justify-center gap-1.5"><Clock className="w-3 h-3" /> Usually replies within 30 minutes</span>
          </div>
        )}
      </div>
    </div>
  );
};
