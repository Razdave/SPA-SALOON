import React from 'react';
import { TESTIMONIALS_DATA } from '../data/salonData';
import { Star, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-24 border-t border-[#E8E1D5]/70">
      
      <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] text-[#917242] uppercase block mb-2">
          CLIENT VOICES
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#171412] tracking-tight">
          Praise for the Craft
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-neutral-600 tracking-wide leading-relaxed">
          Real reflections from clients who entrust their natural nail health and aesthetic expression to our studio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {TESTIMONIALS_DATA.map((t, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-7 sm:p-8 rounded-[2rem] bg-[#FAF8F5] border border-[#E3DDD1] shadow-xs relative hover:border-[#917242]/40 transition-colors"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-5 text-[#917242]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#917242]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-[13px] text-neutral-700 leading-relaxed font-normal mb-6">
                “{t.quote}”
              </p>
            </div>

            {/* Author Attribution */}
            <div className="pt-4 border-t border-[#ECE5D8]">
              <span className="text-sm font-semibold text-neutral-900 block font-serif-luxury">
                {t.author}
              </span>
              <span className="text-[10.5px] uppercase tracking-wider text-neutral-500 block mt-0.5">
                {t.role}
              </span>
              <div className="mt-2 flex items-center justify-between text-[10px] text-[#917242] font-medium tracking-wide">
                <span>{t.treatment}</span>
                <span className="text-neutral-400">·</span>
                <span className="text-neutral-500">{t.frequency}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
