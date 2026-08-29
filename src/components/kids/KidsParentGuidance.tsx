import React from 'react';
import { ShieldCheck, CheckCircle2, FileText, ChevronRight, MessageSquare, Calendar, CreditCard, Sparkles, HeartHandshake, PhoneCall } from 'lucide-react';
import { CLINIC_CONTACT } from '../../data/kidsDentalData';

interface KidsParentGuidanceProps {
  onOpenBooking: (topic?: string) => void;
}

export const KidsParentGuidance: React.FC<KidsParentGuidanceProps> = ({ onOpenBooking }) => {
  return (
    <section id="guidance" className="py-16 sm:py-24 bg-gradient-to-b from-white via-sky-50/30 to-white border-b border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-200/80 mb-3">
              <HeartHandshake className="w-3.5 h-3.5 text-teal-600" />
              <span>Parent Reassurance & Insurance OPD</span>
            </div>
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-extrabold tracking-tight">
              Honest clinical guidance with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-600">total transparency</span>.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-sm leading-relaxed">
            We believe pediatric dentistry should be gentle, warm, and stress-free for both parents and children. Every treatment plan is discussed unhurriedly before starting.
          </p>
        </div>

        {/* 3 Pillars of Parent Trust */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white rounded-3xl border border-sky-100 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-sky-300 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-outfit text-lg sm:text-xl font-bold text-slate-900">
              No Over-Treatment, Ever
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We prioritize biological tooth preservation. If a baby tooth cavity can be arrested painlessly with Silver Diamine (SDF) or remineralized without drilling, we always choose the gentlest option.
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-sky-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Evidence-Based Minimally Invasive Care</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-teal-100 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-teal-300 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-100">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-outfit text-lg sm:text-xl font-bold text-slate-900">
              Zero-Surprise Clear Billing
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every procedure is explained in advance with itemized breakdowns. No hidden consumables, unexpected add-ons, or surprise billing at the front desk.
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-teal-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Itemized GST Bills & Reports Provided</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-amber-100 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-amber-300 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="font-outfit text-lg sm:text-xl font-bold text-slate-900">
              OPD Insurance & UPI Friendly
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We provide all clinical documentation and diagnosis certificates needed for corporate dental OPD claims, plus support UPI (GPay/PhonePe) and 0% No-Cost EMI options.
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-amber-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Cashless OPD Reimbursement Support</span>
            </div>
          </div>

        </div>

        {/* Reassurance & Direct Concierge Action Card */}
        <div className="bg-gradient-to-r from-sky-900 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-sky-800/60 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>OPD Insurance Documentation & Support</span>
            </div>
            <h3 className="font-outfit text-xl sm:text-2xl font-bold leading-snug">
              Instant documentation for Star Health, MediBuddy, HDFC ERGO & Corporate OPD.
            </h3>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed font-normal">
              Have questions about your child’s dental care, OPD insurance coverage, or wish to talk through an unhurried visit with our specialist team? We are always here to help.
            </p>
            
            {/* Payment & Insurance Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] font-semibold text-teal-200">
              <span className="bg-teal-950/80 px-2.5 py-1 rounded-lg border border-teal-800/60">GPay & PhonePe UPI</span>
              <span className="bg-teal-950/80 px-2.5 py-1 rounded-lg border border-teal-800/60">Bajaj Finserv 0% EMI</span>
              <span className="bg-teal-950/80 px-2.5 py-1 rounded-lg border border-teal-800/60">Star Health OPD</span>
              <span className="bg-teal-950/80 px-2.5 py-1 rounded-lg border border-teal-800/60">MediBuddy Cashless</span>
              <span className="bg-teal-950/80 px-2.5 py-1 rounded-lg border border-teal-800/60">HDFC ERGO & ICICI Lombard</span>
            </div>
          </div>

          {/* Perfectly Aligned Symmetrical Action Column */}
          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-center">
            <button
              onClick={() => onOpenBooking('Comprehensive Pediatric First Visit')}
              className="w-full sm:w-auto bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4 text-amber-200" />
              <span>Schedule Child's Visit</span>
            </button>
            <a
              href={CLINIC_CONTACT.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>WhatsApp Parent Concierge</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
