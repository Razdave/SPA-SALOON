import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/salonData';
import { Sparkles, Maximize2, X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  return (
    <section id="gallery" className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-24 border-t border-[#E8E1D5]/70">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
        <div>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] text-[#917242] uppercase block mb-2">
            VISUAL PORTFOLIO
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#171412] tracking-tight">
            Artistry & Execution
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm text-neutral-600 leading-relaxed tracking-wide">
          An intimate look into our signature dry manicures, BIAB apex reinforcement, chrome glazes, and private studio sanctuary.
        </p>
      </div>

      {/* Editorial Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {GALLERY_ITEMS.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className={`group relative rounded-[2rem] overflow-hidden border border-[#E0D9CD] bg-[#F7F4EE] cursor-pointer shadow-xs hover:shadow-md transition-all duration-300 ${
              index === 4 ? 'sm:col-span-2 lg:col-span-2' : ''
            }`}
          >
            <div className={`relative w-full ${index === 4 ? 'aspect-[16/9]' : 'aspect-[4/3]'} overflow-hidden`}>
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#E8D9C0] uppercase mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif-luxury text-xl font-normal leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-white/80 mt-1 line-clamp-2 font-light">
                  {item.caption}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold tracking-widest text-[#E8D9C0] uppercase">
                  <span>EXPAND VIEW</span>
                  <Maximize2 className="w-3 h-3" />
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#FAF8F5] border-t border-[#E8E2D6] flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-neutral-800 tracking-wide block">
                  {item.title}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500">
                  {item.category}
                </span>
              </div>
              <span className="text-[10px] text-[#917242] font-semibold tracking-widest uppercase">
                STUDIO WORK
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#1A1816] rounded-3xl overflow-hidden shadow-2xl border border-neutral-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[16/10] w-full max-h-[75vh]">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-[#211E1B] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D4BE98] font-bold">
                  {activeItem.category}
                </span>
                <h3 className="font-serif-luxury text-2xl font-normal mt-0.5">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-neutral-300 mt-1">
                  {activeItem.caption}
                </p>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full transition-colors self-start sm:self-center"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
