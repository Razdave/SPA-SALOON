import React from 'react';
import { X, Sparkles, Clock, Calendar } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/salonData';

interface ArticleModalProps {
  articleId: string | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ articleId, onClose }) => {
  if (!articleId) return null;
  const article = JOURNAL_ARTICLES.find((a) => a.id === articleId);
  if (!article) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs transition-opacity"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-[2rem] p-6 sm:p-10 border border-[#201C19] shadow-2xl max-h-[90vh] overflow-y-auto text-[#1F1C19]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-neutral-500 hover:text-black hover:bg-neutral-200/60 transition-colors"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#917242] mb-3">
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
          <span>·</span>
          <span>Nue Studio Journal</span>
        </div>

        <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#181614] font-medium leading-tight mb-6">
          {article.title}
        </h2>

        <div className="prose text-xs sm:text-sm text-neutral-700 leading-relaxed space-y-4 whitespace-pre-line border-t border-[#E5DFD3] pt-6 font-normal">
          {article.content}
        </div>

        <div className="mt-8 pt-6 border-t border-[#E5DFD3] flex items-center justify-between text-xs text-neutral-500">
          <span className="font-serif-luxury text-[#917242] text-lg">Nue Studio Editorial</span>
          <button
            onClick={onClose}
            className="text-xs uppercase font-semibold tracking-wider text-black hover:underline"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};
