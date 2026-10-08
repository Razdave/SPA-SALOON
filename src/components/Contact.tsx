import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Sparkles, Check } from 'lucide-react';

interface ContactProps {
  onOpenBooking: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenBooking }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-24 border-t border-[#E8E1D5]/70">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        
        {/* Left Column: Studio Details & Hours */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] text-[#917242] uppercase block mb-2">
              LOCATION & HOURS
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#171412] tracking-tight">
              Visit Our Private Beverly Hills Suite
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-600 tracking-wide leading-relaxed max-w-lg">
              Tucked quietly on North Canon Drive, our studio offers an intimate haven designed for sensory calm and dedicated nail attention.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            
            {/* Address */}
            <div className="p-6 bg-[#FAF8F5] rounded-3xl border border-[#E3DDD1]">
              <div className="w-8 h-8 rounded-full bg-[#EFE9DF] text-[#917242] flex items-center justify-center mb-4">
                <MapPin className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-1">
                Studio Address
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                428 N Canon Dr, Suite 302<br />
                Beverly Hills, CA 90210
              </p>
              <span className="text-[11px] text-[#917242] font-medium block mt-2">
                Valet & 2-Hour Free Parking Available
              </span>
            </div>

            {/* Hours */}
            <div className="p-6 bg-[#FAF8F5] rounded-3xl border border-[#E3DDD1]">
              <div className="w-8 h-8 rounded-full bg-[#EFE9DF] text-[#917242] flex items-center justify-center mb-4">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-1">
                Studio Hours
              </h4>
              <div className="text-xs text-neutral-600 space-y-1">
                <div className="flex justify-between">
                  <span>Tuesday – Friday</span>
                  <span className="font-medium text-neutral-900">9:30 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-neutral-900">10:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday – Monday</span>
                  <span className="text-neutral-400">By Special Request</span>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Direct */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-neutral-700">
            <a href="tel:+13105550182" className="flex items-center gap-2 hover:text-black transition-colors font-medium">
              <Phone className="w-4 h-4 text-[#917242]" />
              <span>(310) 555-0182</span>
            </a>
            <a href="mailto:concierge@nuestudio.com" className="flex items-center gap-2 hover:text-black transition-colors font-medium">
              <Mail className="w-4 h-4 text-[#917242]" />
              <span>concierge@nuestudio.com</span>
            </a>
            <span className="text-neutral-400">·</span>
            <span className="text-neutral-600">@nuestudio.nails</span>
          </div>
        </div>

        {/* Right Column: Appointment Card & VIP Concierge */}
        <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 bg-[#201C19] text-[#FAF8F5] rounded-[2.5rem] shadow-xl">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#D6BE97]" />
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#D6BE97] uppercase">
                PRIVATE APPOINTMENTS
              </span>
            </div>

            <h3 className="font-serif-luxury text-3xl font-light leading-snug mb-4">
              Secure Your Session in Advance
            </h3>

            <p className="text-xs text-neutral-300 leading-relaxed mb-6 font-light">
              Due to our meticulous time allocation for each guest, appointments fill 2 to 3 weeks in advance. We maintain a strict single-guest private policy.
            </p>

            <button
              onClick={onOpenBooking}
              className="w-full bg-[#FAF8F5] hover:bg-white text-[#201C19] text-xs font-semibold tracking-[0.2em] uppercase py-4 rounded-full transition-all shadow-md cursor-pointer active:scale-[0.98]"
            >
              BOOK PRIVATE APPOINTMENT
            </button>
          </div>

          {/* Newsletter Box */}
          <div className="mt-8 pt-8 border-t border-neutral-800">
            <span className="text-[10.5px] uppercase tracking-wider font-semibold text-neutral-300 block mb-2">
              Priority Cancelled Slot Notification
            </span>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2.5 text-xs text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#D6BE97]"
              />
              <button
                type="submit"
                className="bg-[#D6BE97] hover:bg-[#E5D0AD] text-[#201C19] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors shrink-0"
              >
                {subscribed ? <Check className="w-4 h-4 text-black" /> : 'JOIN'}
              </button>
            </form>
            {subscribed && (
              <p className="text-[11px] text-[#D6BE97] mt-2">
                Thank you. You will receive priority notices for newly opened slots.
              </p>
            )}
          </div>

        </div>

      </div>

    </section>
  );
};
