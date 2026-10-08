import React, { useState } from 'react';
import { 
  X, 
  Menu, 
  Sparkles, 
  ChevronRight,
  ArrowUp
} from 'lucide-react';
import manicureHeroImg from './assets/images/manicure_nail_file_editorial_1791448441199.jpg';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Journal } from './components/Journal';
import { Contact } from './components/Contact';
import { BookingModal } from './components/BookingModal';
import { ArticleModal } from './components/ArticleModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [readingArticleId, setReadingArticleId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('HOME');
  const [imageError, setImageError] = useState(false);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const scrollToSection = (id: string, name: string) => {
    setActiveNav(name);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen paper-wash-bg watercolor-edge-texture flex flex-col justify-between relative selection:bg-[#E2D5BE] selection:text-[#181614] overflow-x-hidden">
      
      {/* Delicate organic artistic stroke on the background */}
      <svg 
        className="absolute top-0 right-0 pointer-events-none w-56 h-56 opacity-40 hidden md:block" 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M170 0C170 65 140 120 70 145C30 159 0 160 0 160" 
          stroke="#4A4036" 
          strokeWidth="0.8" 
          strokeDasharray="4 4"
        />
        <path 
          d="M195 20C190 85 160 140 90 165" 
          stroke="#8A7356" 
          strokeWidth="0.5"
        />
      </svg>

      {/* ---------------- 1. NAVBAR / HEADER ---------------- */}
      <header className="sticky top-0 z-30 w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-6 sm:pt-8 pb-4 bg-[#F8F6F2]/90 backdrop-blur-md border-b border-[#E8E1D5]/40 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo: "Nue Studio" in high-end luxury serif font with warm bronze hue */}
          <div className="flex-1 flex items-center">
            <a 
              href="#home"
              onClick={(e) => { 
                e.preventDefault(); 
                scrollToSection('home', 'HOME'); 
              }}
              className="group inline-block cursor-pointer"
            >
              <span className="font-serif-luxury text-2xl sm:text-3xl lg:text-[2.2rem] font-medium tracking-tight text-[#917242] transition-colors duration-200 group-hover:text-[#785D33] select-none">
                Nue Studio
              </span>
            </a>
          </div>

          {/* Navigation Links: Centered / Right-aligned */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-10 pr-6 lg:pr-10">
            {[
              { name: 'HOME', id: 'home' },
              { name: 'SERVICES', id: 'services' },
              { name: 'GALLERY', id: 'gallery' },
              { name: 'BLOG', id: 'blog' },
              { name: 'CONTACT', id: 'contact' },
            ].map((link) => {
              const isActive = activeNav === link.name;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id, link.name)}
                  className={`text-[11px] lg:text-xs font-medium tracking-[0.22em] transition-all duration-200 uppercase relative py-1 cursor-pointer ${
                    isActive 
                      ? 'text-[#1A1816] font-semibold' 
                      : 'text-[#4A423D] hover:text-[#1A1816]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#1A1816] transform scale-x-100 transition-transform" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA Button: Dark pill-shaped "BOOK NOW" */}
          <div className="relative flex items-center">
            {/* Whimsical curved line above button matching reference design */}
            <svg
              className="absolute -top-7 right-8 w-14 h-9 pointer-events-none hidden sm:block overflow-visible"
              viewBox="0 0 60 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M52 -10 C 45 10, 30 24, 18 36"
                stroke="#2B2622"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>

            <button
              onClick={() => handleOpenBooking()}
              className="hidden sm:inline-flex items-center justify-center bg-[#201C19] hover:bg-[#110F0E] text-[#FAF8F5] text-[11px] lg:text-xs font-semibold tracking-[0.16em] uppercase px-7 lg:px-8 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow cursor-pointer active:scale-[0.98] whitespace-nowrap"
            >
              BOOK NOW
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#201C19] hover:text-black focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 px-6 bg-[#F4F1EB] rounded-2xl border border-[#E3DDD1] shadow-lg animate-in fade-in duration-200">
            <div className="flex flex-col space-y-4">
              {[
                { name: 'HOME', id: 'home' },
                { name: 'SERVICES', id: 'services' },
                { name: 'GALLERY', id: 'gallery' },
                { name: 'BLOG', id: 'blog' },
                { name: 'CONTACT', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id, item.name)}
                  className="text-left text-xs font-semibold tracking-[0.2em] text-[#201C19] py-2 border-b border-[#EAE3D6] uppercase cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenBooking();
                }}
                className="mt-2 w-full bg-[#201C19] text-[#FAF8F5] text-xs font-semibold tracking-[0.18em] uppercase py-3 rounded-full text-center cursor-pointer"
              >
                BOOK NOW
              </button>
            </div>
          </div>
        )}
      </header>


      {/* ---------------- 2. HERO CONTENT SECTION ---------------- */}
      <main id="home" className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-8 sm:pt-14 md:pt-18 pb-14 z-10">
        
        {/* Sub-heading / Tag: Nail icon centered next to tiny label reading "GO-TO NAILS" */}
        <div className="flex items-center justify-center gap-2 mb-3.5 sm:mb-4">
          <div className="w-4 h-4 sm:w-[18px] sm:h-[18px] flex items-center justify-center text-[#201C19]">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.1" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-full h-full -rotate-12 transform"
            >
              <path d="M14.5 4l5 5L7 21.5 2 16.5 14.5 4z" />
              <path d="M12 6.5l2.5 2.5" />
              <path d="M7 11.5l2.5 2.5" />
              <path d="M19 2l3 3" />
            </svg>
          </div>

          <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.28em] text-[#24201D] uppercase select-none">
            GO-TO NAILS
          </span>
        </div>

        {/* Main Heading: Bold, large uppercase headline reading "ABOUT US" */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light md:font-normal tracking-[0.06em] text-[#141210] uppercase text-center leading-[1.05] sm:leading-none select-none max-w-4xl">
          ABOUT US
        </h1>

        {/* Paragraph Text: Centered statement */}
        <p className="mt-5 sm:mt-6 md:mt-7 max-w-[34rem] text-center text-[10.5px] sm:text-xs md:text-[12.5px] font-medium tracking-[0.16em] leading-[1.75] text-[#34302C] uppercase px-4 sm:px-2">
          I SPECIALIZE IN PRECISION MANICURES
          <br className="hidden sm:inline" /> AND PEDICURES, DELIVERING
          <br className="hidden sm:inline" /> BEAUTIFUL, LONG-LASTING RESULTS
          <br className="hidden sm:inline" /> WITH ATTENTION TO DETAIL.
        </p>

        {/* Action Button: Centered, dark, pill-shaped "BOOK NOW" matching navbar button */}
        <div className="mt-7 sm:mt-8 md:mt-9">
          <button
            onClick={() => handleOpenBooking()}
            className="group relative inline-flex items-center justify-center bg-[#201C19] hover:bg-[#0F0D0C] text-[#FAF8F5] text-xs font-semibold tracking-[0.18em] uppercase px-8 sm:px-9 py-3 sm:py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] cursor-pointer"
          >
            <span>BOOK NOW</span>
          </button>
        </div>

        {/* ---------------- 3. FEATURED IMAGE SHOWCASE ---------------- */}
        {/* Large, centered container with large rounded corners and visible dark border/frame wrapping around it */}
        <div className="w-full max-w-3xl sm:max-w-3xl md:max-w-4xl lg:max-w-[56rem] mt-10 sm:mt-12 md:mt-14 px-2 sm:px-4">
          <div className="relative group rounded-[2.25rem] sm:rounded-[2.75rem] md:rounded-[3.25rem] p-1 sm:p-1.5 md:p-2 bg-[#F6F3EC] border-[1.5px] sm:border-2 border-[#1E1B18] shadow-sm overflow-hidden transition-transform duration-300">
            
            {/* Image Wrapper */}
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2rem] sm:rounded-[2.4rem] md:rounded-[2.9rem] bg-[#E9D7C4]">
              {!imageError ? (
                <img
                  src={manicureHeroImg}
                  alt="Professional manicure precision nail filing with high-end buffer on nude almond nails"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#EEDDCF] to-[#DFC1A8] p-8 text-center text-[#2A2420]">
                  <Sparkles className="w-10 h-10 text-[#8C6B46] mb-3 opacity-80" />
                  <span className="font-serif-luxury text-2xl font-medium tracking-wide">
                    Precision Editorial Manicures
                  </span>
                  <p className="text-xs uppercase tracking-[0.2em] mt-2 opacity-75">
                    Nue Studio Aesthetic
                  </p>
                </div>
              )}

              {/* Inner delicate depth overlay */}
              <div className="absolute inset-0 pointer-events-none rounded-[2rem] sm:rounded-[2.4rem] md:rounded-[2.9rem] ring-1 ring-black/5 shadow-inner" />
            </div>

          </div>
        </div>

      </main>


      {/* ---------------- 4. PHILOSOPHY & CRAFTSMANSHIP STANDARDS ---------------- */}
      <Philosophy />


      {/* ---------------- 5. DETAILED SERVICES & TRANSPARENT PRICING ---------------- */}
      <Services onBookService={handleOpenBooking} />


      {/* ---------------- 6. VISUAL PHOTO GALLERY ---------------- */}
      <Gallery />


      {/* ---------------- 7. CLIENT TESTIMONIALS & PRAISE ---------------- */}
      <Testimonials />


      {/* ---------------- 8. EDITORIAL JOURNAL & ARTICLES ---------------- */}
      <Journal onOpenArticle={(id) => setReadingArticleId(id)} />


      {/* ---------------- 9. CONTACT & STUDIO LOCATION ---------------- */}
      <Contact onOpenBooking={() => handleOpenBooking()} />


      {/* ---------------- 10. REFINED EDITORIAL FOOTER ---------------- */}
      <footer className="w-full px-6 sm:px-10 lg:px-20 py-10 border-t border-[#E5DFD3]/80 bg-[#F4F1EA]/80 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div>
            <span className="font-serif-luxury text-2xl text-[#917242] font-medium block">
              Nue Studio
            </span>
            <span className="text-[11px] text-[#5A534B] tracking-[0.16em] uppercase block mt-1">
              Precision Manicures & Restorative Foot Care · Beverly Hills
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#4E473F] font-medium tracking-wider uppercase">
            <button 
              onClick={() => scrollToSection('home', 'HOME')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services', 'SERVICES')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery', 'GALLERY')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('blog', 'BLOG')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Journal
            </button>
            <button 
              onClick={() => scrollToSection('contact', 'CONTACT')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs text-neutral-500">
            <span>© 2026 NUE STUDIO</span>
            <span>·</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 rounded-full border border-neutral-300 hover:border-black text-neutral-700 hover:text-black transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </footer>


      {/* ---------------- 11. INTERACTIVE MODALS ---------------- */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedServiceId={selectedServiceId}
      />

      <ArticleModal
        articleId={readingArticleId}
        onClose={() => setReadingArticleId(null)}
      />

    </div>
  );
}
