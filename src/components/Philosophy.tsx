import React from 'react';
import { Sparkles, ShieldCheck, Feather, Clock } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Precision Dry Technique',
      desc: 'We perform Russian and European dry cuticle alignment without abrasive soaking, ensuring structural stability and uncompromised lacquer adhesion.'
    },
    {
      num: '02',
      title: 'Non-Toxic & 10-Free',
      desc: 'Curated vegan formulas free from formaldehyde, toluene, DBP, and harsh resins to nourish the natural keratin plate over months of wear.'
    },
    {
      num: '03',
      title: 'Apex Architectural Balance',
      desc: 'Each set is built with calculated stress-point architecture that mimics the natural C-curve of your nails, preventing breakage and bending.'
    },
    {
      num: '04',
      title: 'Hospital-Grade Autoclaving',
      desc: 'Every stainless steel implement undergoes medical autoclave heat sterilization in sealed pouches opened exclusively before your eyes.'
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-24 border-t border-[#E8E1D5]/70">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
        <div>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] text-[#917242] uppercase block mb-2">
            THE PHILOSOPHY
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#171412] tracking-tight">
            Elevating Nail Care to an Art Form
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm text-neutral-600 leading-relaxed tracking-wide">
          At Nue Studio, we abandon rapid assembly-line appointments. Every guest receives dedicated one-on-one craftsmanship designed to cultivate long-term natural nail strength.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {pillars.map((p) => (
          <div 
            key={p.num} 
            className="p-6 sm:p-7 bg-[#FAF7F2] rounded-3xl border border-[#E5DFD3] hover:border-[#201C19]/30 transition-all duration-300 group shadow-xs hover:shadow-sm"
          >
            <span className="font-serif-luxury text-3xl font-light text-[#917242] block mb-3">
              {p.num}
            </span>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-[#1B1815] mb-2.5">
              {p.title}
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
