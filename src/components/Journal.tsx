import React from 'react';
import { JOURNAL_ARTICLES } from '../data/salonData';
import { ArrowUpRight, BookOpen } from 'lucide-react';

interface JournalProps {
  onOpenArticle: (articleId: string) => void;
}

export const Journal: React.FC<JournalProps> = ({ onOpenArticle }) => {
  return (
    <section id="blog" className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-24 border-t border-[#E8E1D5]/70">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
        <div>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] text-[#917242] uppercase block mb-2">
            THE EDITORIAL JOURNAL
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#171412] tracking-tight">
            Notes on Nail Health & Design
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm text-neutral-600 leading-relaxed tracking-wide">
          Educational insights from our master manicurists on biomechanics, pigment curation, and restorative care.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {JOURNAL_ARTICLES.map((article) => (
          <article
            key={article.id}
            onClick={() => onOpenArticle(article.id)}
            className="group flex flex-col justify-between p-7 sm:p-8 rounded-[2rem] bg-[#FAF8F5] border border-[#E3DDD1] hover:border-[#201C19]/40 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between text-[10px] font-bold tracking-[0.2em] text-[#917242] uppercase mb-4">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>

              <h3 className="font-serif-luxury text-2xl font-normal text-[#171412] group-hover:text-[#917242] transition-colors leading-snug mb-3">
                {article.title}
              </h3>

              <p className="text-xs text-neutral-600 leading-relaxed">
                {article.snippet}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#ECE5D8] flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-neutral-800 group-hover:text-black">
              <span>READ ESSAY</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </article>
        ))}
      </div>

    </section>
  );
};
