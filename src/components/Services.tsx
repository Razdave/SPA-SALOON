import React, { useState } from 'react';
import { Clock, Check, Sparkles, ArrowRight } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/salonData';

interface ServicesProps {
  onBookService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'manicures', label: 'Manicures' },
    { id: 'overlays', label: 'BIAB & Extensions' },
    { id: 'pedicures', label: 'Pedicures' },
    { id: 'nail-art', label: 'Editorial Art' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-24 border-t border-[#E8E1D5]/70">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] text-[#917242] uppercase block mb-2">
          MENU & PRICING
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#171412] tracking-tight">
          Curated Treatment Services
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-neutral-600 tracking-wide leading-relaxed">
          Transparent pricing with no surprise add-ons. Every service includes detailed cuticle alignment and nail plate restoration.
        </p>

        {/* Filter Bar (Interactive segmented button controls adhering to constitution) */}
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 mt-8 bg-[#EFE9DF] rounded-full border border-[#DFD8CC]">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 text-[11px] font-semibold tracking-wider uppercase rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#201C19] text-[#FAF8F5] shadow-xs'
                    : 'text-neutral-700 hover:text-black hover:bg-[#E4DDCE]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className={`flex flex-col justify-between p-7 sm:p-8 rounded-[2rem] border transition-all duration-300 relative ${
              service.popular
                ? 'bg-[#FAF8F4] border-[#917242]/40 shadow-sm ring-1 ring-[#917242]/20'
                : 'bg-[#FAF7F2] border-[#E3DDD1] hover:border-neutral-400'
            }`}
          >
            <div>
              {/* Badge & Category */}
              <div className="flex items-center justify-between mb-3 text-[10px] font-bold tracking-[0.2em] uppercase">
                <span className="text-neutral-500">{service.category}</span>
                {service.popular && (
                  <span className="text-[#917242] bg-[#EFE8DA] px-2.5 py-0.5 rounded-full font-semibold">
                    Client Favorite
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <h3 className="font-serif-luxury text-2xl font-normal text-[#171412] leading-snug">
                {service.name}
              </h3>
              <p className="text-xs text-[#8C6D3F] font-medium tracking-wide mt-1">
                {service.tagline}
              </p>

              {/* Price & Duration */}
              <div className="flex items-baseline gap-3 my-4 py-3 border-y border-[#ECE5D8]">
                <span className="text-2xl font-light text-neutral-900 tracking-tight">
                  {service.price}
                </span>
                <span className="text-xs text-neutral-500 font-medium tracking-wider flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {service.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-neutral-600 leading-relaxed mb-5">
                {service.description}
              </p>

              {/* What's included checklist */}
              <div className="space-y-2 mb-6">
                <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-700 block">
                  Included in ritual:
                </span>
                {service.includes.map((inc, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] text-neutral-600">
                    <Check className="w-3.5 h-3.5 text-[#917242] shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book CTA Button */}
            <button
              onClick={() => onBookService(service.id)}
              className="w-full bg-[#201C19] hover:bg-black text-[#FAF8F5] text-xs font-semibold tracking-[0.18em] uppercase py-3.5 rounded-full transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-[0.98]"
            >
              <span>BOOK THIS TREATMENT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Custom Consultation Notice */}
      <div className="mt-12 p-6 sm:p-8 bg-[#F3EFE7] rounded-3xl border border-[#DFD8CC] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1C1916]">
            Unsure which service suits your natural nails?
          </h4>
          <p className="text-xs text-neutral-600 mt-1">
            Complimentary 10-minute nail health diagnostic consultation with any appointment.
          </p>
        </div>
        <button
          onClick={() => onBookService('precision-signature-mani')}
          className="border border-[#201C19] text-[#201C19] hover:bg-[#201C19] hover:text-white px-6 py-2.5 rounded-full text-xs font-semibold tracking-[0.16em] uppercase transition-all whitespace-nowrap cursor-pointer"
        >
          SCHEDULE CONSULTATION
        </button>
      </div>

    </section>
  );
};
