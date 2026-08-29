import React from 'react';
import { Shield, CheckCircle2, FileText, CreditCard, ChevronRight, HelpCircle, Sparkles, Smile, Star, QrCode, Smartphone, MessageSquare } from 'lucide-react';
import { CLINIC_CONTACT } from '../../data/kidsDentalData';

interface KidsPricingInsuranceProps {
  onOpenBooking: (tierName: string) => void;
}

export const KidsPricingInsurance: React.FC<KidsPricingInsuranceProps> = ({ onOpenBooking }) => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-white via-sky-50/30 to-white border-b border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-semibold border border-sky-200/80 mb-3">
              <CreditCard className="w-3.5 h-3.5 text-sky-600" />
              <span>Transparent INR Pricing & Insurance Help</span>
            </div>
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-extrabold tracking-tight">
              Clear upfront investment with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-600">zero surprise bills</span>.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-sm leading-relaxed">
            We believe parents in India deserve total medical and financial clarity. Standardized pricing, genuine itemized invoices for OPD reimbursement, and flexible payment options.
          </p>
        </div>

        {/* Investment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Tier 1 */}
          <div className="bg-white rounded-3xl border border-sky-100 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-sky-300 transition-all">
            <div className="space-y-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block">
                Comprehensive First Visit
              </span>
              <h3 className="font-outfit text-lg font-bold text-slate-900 leading-snug">
                Pediatric Consultation & Airway Audit
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold font-outfit text-slate-900">₹750</span>
                <span className="text-xs text-slate-500">/ 45m visit</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Complete oral growth audit, digital RVG low-radiation x-ray (if needed), parent counseling, and private suite tour with Barnaby.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>45-Min Dedicated Specialist Slot</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Therapy Dog Cuddle Included</span>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <button
                onClick={() => onOpenBooking('First Pediatric Dental Consultation (₹750)')}
                className="w-full bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl border border-sky-200 transition-all"
              >
                Book This Visit
              </button>
            </div>
          </div>

          {/* Tier 2 (Highlighted) */}
          <div className="bg-white rounded-3xl border-2 border-sky-500 p-6 flex flex-col justify-between shadow-md shadow-sky-100 relative ring-4 ring-sky-50">
            <div className="absolute -top-3 left-6 bg-gradient-to-r from-sky-600 to-teal-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs">
              Most Popular
            </div>
            <div className="space-y-3.5 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block">
                Swiss Guided Biofilm
              </span>
              <h3 className="font-outfit text-lg font-bold text-slate-900 leading-snug">
                Painless Swiss Airflow® Cleaning
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold font-outfit text-slate-900">₹1,499</span>
                <span className="text-xs text-slate-500">/ routine clean</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Zero metal scraping or noisy vibration. Warm 37°C sweet erythritol micro-mist cleans gently with fluoride enamel varnish.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>100% Vibration & Scrape-Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Includes Bio-Fluoride Varnish</span>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <button
                onClick={() => onOpenBooking('Swiss Airflow Prophylaxis & Varnish (₹1,499)')}
                className="w-full bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-xs transition-all"
              >
                Book Airflow Clean
              </button>
            </div>
          </div>

          {/* Tier 3 */}
          <div className="bg-white rounded-3xl border border-sky-100 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-sky-300 transition-all">
            <div className="space-y-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
                No-Drill Treatment
              </span>
              <h3 className="font-outfit text-lg font-bold text-slate-900 leading-snug">
                Silver Diamine (SDF) Cavity Arrest
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold font-outfit text-slate-900">₹1,200</span>
                <span className="text-xs text-slate-500">/ per quadrant</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Eliminates rotary drills and needles. Halts active decay and remineralizes child's tooth nerve in just 60 seconds.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Zero Injections or Numbing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Glass Ionomer Protective Seal</span>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <button
                onClick={() => onOpenBooking('SDF Biological Caries Arrest (₹1,200)')}
                className="w-full bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl border border-sky-200 transition-all"
              >
                Book No-Drill SDF
              </button>
            </div>
          </div>

          {/* Tier 4 */}
          <div className="bg-white rounded-3xl border border-sky-100 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-sky-300 transition-all">
            <div className="space-y-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block">
                Infant Airway & Nursing
              </span>
              <h3 className="font-outfit text-lg font-bold text-slate-900 leading-snug">
                Infant Laser Tongue Tie Release
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold font-outfit text-slate-900">₹7,500</span>
                <span className="text-xs text-slate-500">/ complete release</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Sub-minute gentle CO2 laser frenectomy. Includes private postpartum lactation suite for immediate latching post-procedure.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Zero Stitches or Bleeding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Lactation Consultant Post-Care</span>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <button
                onClick={() => onOpenBooking('Infant CO2 Laser Frenectomy (₹7,500)')}
                className="w-full bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl border border-sky-200 transition-all"
              >
                Book Infant Release
              </button>
            </div>
          </div>

        </div>

        {/* Indian Insurance OPD & Payment Support Strip */}
        <div className="bg-gradient-to-r from-sky-900 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-sky-800/60 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>OPD Insurance Reimbursement & Cashless Paperwork</span>
            </div>
            <h3 className="font-outfit text-xl sm:text-2xl font-bold leading-snug">
              Instant documentation for Star Health, MediBuddy, HDFC ERGO & Corporate OPD.
            </h3>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed font-normal">
              We provide itemized GST invoices, treatment summaries, and clinical diagnostic x-rays for smooth OPD dental insurance reimbursement. We also support all Indian UPI apps (GPay, PhonePe, Paytm), Credit Cards, and 0% No-Cost EMI through Bajaj Finserv.
            </p>
            
            {/* Payment Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] font-semibold text-teal-200">
              <span className="bg-teal-950/80 px-2.5 py-1 rounded-lg border border-teal-800/60">GPay & PhonePe UPI</span>
              <span className="bg-teal-950/80 px-2.5 py-1 rounded-lg border border-teal-800/60">Bajaj Finserv 0% EMI</span>
              <span className="bg-teal-950/80 px-2.5 py-1 rounded-lg border border-teal-800/60">Star Health OPD</span>
              <span className="bg-teal-950/80 px-2.5 py-1 rounded-lg border border-teal-800/60">MediBuddy Cashless</span>
              <span className="bg-teal-950/80 px-2.5 py-1 rounded-lg border border-teal-800/60">HDFC ERGO & ICICI Lombard</span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-center">
            <button
              onClick={() => onOpenBooking('OPD Insurance Assistance & Booking')}
              className="w-full sm:w-auto bg-white hover:bg-sky-50 text-slate-900 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <span>Check Insurance Coverage</span>
              <ChevronRight className="w-4 h-4 text-sky-600" />
            </button>
            <a
              href={CLINIC_CONTACT.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>WhatsApp Us For Fee Inquiries</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
