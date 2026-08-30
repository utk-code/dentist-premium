import React from 'react';
import { PARENT_TESTIMONIALS } from '../../data/kidsDentalData';
import { Star, CheckCircle2, ShieldCheck } from 'lucide-react';

export const KidsReviews: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 text-xs font-semibold border border-amber-200/80">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>5.0 Star Rating (520+ Bengaluru Parents)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            What parents say about us
          </h2>
        </div>

        {/* Testimonials Grid with Real Parent Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PARENT_TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50/70 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-teal-400 hover:shadow-md transition-all"
            >
              <div>
                {/* Rating & Date */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mt-4">
                  "{review.quote}"
                </p>

                {/* Specific Highlight Tag */}
                <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-50 text-teal-800 text-[11px] font-semibold border border-teal-100">
                  <CheckCircle2 className="w-3 h-3 text-teal-600 shrink-0" />
                  <span>{review.treatment}</span>
                </div>
              </div>

              {/* Reviewer Details with Real Parent/Family Photograph */}
              <div className="pt-4 mt-6 border-t border-slate-200/80 flex items-center gap-3">
                <img
                  src={review.imageUrl}
                  alt={review.parentName}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border-2 border-teal-200 shrink-0 shadow-xs"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{review.parentName}</h4>
                  <p className="text-slate-500 text-[11px] leading-tight">{review.parentRole}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Google Reviews Trust Bar */}
        <div className="mt-12 p-5 bg-[#FBFBF9] rounded-2xl border border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-bold text-teal-700 shadow-sm">
              G
            </div>
            <div>
              <span className="font-bold text-slate-900">4.98 / 5.0 Average Rating on Google Reviews</span>
              <p className="text-slate-500 text-[11px]">Based on verified visits in Indiranagar, Bengaluru</p>
            </div>
          </div>

          <div className="flex items-center gap-2 font-semibold text-teal-700">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>100% Real, Verified Patient Stories</span>
          </div>
        </div>

      </div>
    </section>
  );
};
