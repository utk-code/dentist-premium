import React from 'react';
import { PARENT_TESTIMONIALS } from '../../data/kidsDentalData';
import { Star, ShieldCheck, Quote, Building, Sparkles, Heart } from 'lucide-react';

export const KidsReviews: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-sky-50/20 to-white border-b border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-semibold border border-sky-200/80 mb-3">
              <Quote className="w-3.5 h-3.5 text-sky-600" />
              <span>Parent Stories & Reviews</span>
            </div>
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-extrabold tracking-tight">
              Loved by kids, trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-600">physicians & parents</span>.
            </h2>
          </div>
          <div className="md:text-right">
            <div className="flex items-center md:justify-end gap-1 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-700">
              5.0 Star Rating Across 520+ Bengaluru Families
            </p>
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PARENT_TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl border border-sky-100 p-7 sm:p-8 shadow-sm hover:shadow-md hover:border-sky-300 flex flex-col justify-between transition-all duration-300 relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200/60">
                    {review.clinicalContext}
                  </span>
                </div>

                <p className="font-outfit text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  "{review.highlight}"
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {review.quote}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{review.author}</h4>
                  <p className="text-xs text-slate-500 font-normal mt-0.5">{review.profile}</p>
                  <p className="text-xs text-sky-600 font-medium mt-0.5">{review.location}</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shrink-0">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-50" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

