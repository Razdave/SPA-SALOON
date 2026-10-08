import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Sparkles, Clock, Calendar, ShieldCheck, ChevronRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preselectedServiceId || SERVICES_DATA[0].id
  );
  const [selectedDate, setSelectedDate] = useState('2026-10-15');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedServiceId(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  if (!isOpen) return null;

  const currentService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const timeSlots = [
    '09:30 AM',
    '11:00 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setCurrentStep(1);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs transition-all duration-200"
      onClick={handleResetAndClose}
    >
      <div 
        className="relative w-full max-w-xl bg-[#FAF8F5] rounded-[2rem] p-6 sm:p-9 border border-[#201C19] shadow-2xl max-h-[92vh] overflow-y-auto text-[#1F1C19]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-500 hover:text-black hover:bg-neutral-200/60 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#201C19] text-[#FAF8F5] flex items-center justify-center mb-5 shadow-md">
              <CheckCircle className="w-8 h-8 text-[#FAF8F5]" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#917242] uppercase mb-1">
              Confirmed Reservation
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#1E1B18] font-normal">
              You are Booked
            </h3>
            
            <div className="w-full bg-[#F3EFE7] rounded-2xl p-5 my-6 border border-[#E3DDD1] text-left text-xs space-y-2">
              <div className="flex justify-between items-center border-b border-[#E3DDD1] pb-2">
                <span className="text-neutral-500 uppercase tracking-widest text-[10px]">Treatment</span>
                <span className="font-semibold text-neutral-900">{currentService.name}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E3DDD1] pb-2">
                <span className="text-neutral-500 uppercase tracking-widest text-[10px]">Date & Time</span>
                <span className="font-semibold text-neutral-900">{selectedDate} at {selectedTime}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E3DDD1] pb-2">
                <span className="text-neutral-500 uppercase tracking-widest text-[10px]">Guest</span>
                <span className="font-semibold text-neutral-900">{clientName || 'Valued Guest'}</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-neutral-500 uppercase tracking-widest text-[10px]">Total Due at Salon</span>
                <span className="font-bold text-neutral-900">{currentService.price}</span>
              </div>
            </div>

            <p className="text-xs uppercase tracking-[0.15em] text-neutral-600 max-w-sm mb-6 leading-relaxed">
              A calendar invite and preparation guidelines have been sent to{' '}
              <span className="font-medium text-neutral-900">{clientEmail || 'your email'}</span>.
            </p>

            <button
              onClick={handleResetAndClose}
              className="bg-[#201C19] hover:bg-black text-[#FAF8F5] text-xs font-semibold tracking-[0.18em] uppercase px-8 py-3.5 rounded-full transition-all cursor-pointer shadow-sm"
            >
              RETURN TO STUDIO
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-4 h-4 text-[#917242]" />
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#917242] uppercase">
                  Nue Studio Private Suite
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-wider text-[#141210]">
                Book Your Experience
              </h2>
              <div className="flex items-center gap-2 text-xs text-neutral-500 mt-2">
                <span className={currentStep === 1 ? 'font-semibold text-neutral-900' : 'text-neutral-400'}>
                  1. Treatment & Time
                </span>
                <span>/</span>
                <span className={currentStep === 2 ? 'font-semibold text-neutral-900' : 'text-neutral-400'}>
                  2. Guest Details
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {currentStep === 1 ? (
                <div className="space-y-5">
                  {/* Service Picker */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-[0.18em] uppercase text-neutral-800 mb-2">
                      Select Treatment
                    </label>
                    <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                      {SERVICES_DATA.map((service) => {
                        const isSelected = selectedServiceId === service.id;
                        return (
                          <div
                            key={service.id}
                            onClick={() => setSelectedServiceId(service.id)}
                            className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                              isSelected
                                ? 'border-[#1E1B18] bg-white shadow-sm ring-1 ring-[#1E1B18]'
                                : 'border-[#E5DFD3] bg-[#F7F4EE] hover:border-neutral-400 hover:bg-[#FAF7F2]'
                            }`}
                          >
                            <div className="flex items-center justify-between text-xs font-semibold text-neutral-900">
                              <span className="flex items-center gap-2">
                                {service.name}
                                {service.popular && (
                                  <span className="text-[9px] font-bold tracking-widest text-[#917242] bg-[#EFE8DA] px-2 py-0.5 rounded-full uppercase">
                                    Signature
                                  </span>
                                )}
                              </span>
                              <span className="text-[#917242] font-bold">{service.price}</span>
                            </div>
                            <p className="text-[10.5px] text-neutral-600 mt-1 leading-relaxed">
                              {service.tagline} · <span className="text-neutral-500">{service.duration}</span>
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="block text-[10.5px] font-bold tracking-[0.18em] uppercase text-neutral-800 mb-1.5 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                        Select Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full bg-white border border-[#DDD5C5] rounded-xl px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-black font-medium"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[10.5px] font-bold tracking-[0.18em] uppercase text-neutral-800 mb-1.5 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-neutral-500" />
                        Select Time
                      </label>
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full bg-white border border-[#DDD5C5] rounded-xl px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-black font-medium"
                      >
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Selected service summary pill */}
                  <div className="p-3 bg-[#F2EDE3] rounded-xl flex items-center justify-between text-xs border border-[#E3DBD0]">
                    <span className="text-neutral-600 uppercase tracking-wider text-[10px]">
                      Selected: <strong className="text-neutral-900">{currentService.name}</strong>
                    </span>
                    <span className="font-semibold text-neutral-900">{currentService.price}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="w-full bg-[#201C19] hover:bg-black text-[#FAF8F5] text-xs font-semibold tracking-[0.2em] uppercase py-3.5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.99]"
                  >
                    <span>CONTINUE TO DETAILS</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Guest Info */}
                  <div>
                    <label className="block text-[10.5px] font-bold tracking-[0.18em] uppercase text-neutral-800 mb-1">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Elena Rostova"
                      required
                      className="w-full bg-white border border-[#DDD5C5] rounded-xl px-3 py-2.5 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-black"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10.5px] font-bold tracking-[0.18em] uppercase text-neutral-800 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="elena@studio.com"
                        required
                        className="w-full bg-white border border-[#DDD5C5] rounded-xl px-3 py-2.5 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block text-[10.5px] font-bold tracking-[0.18em] uppercase text-neutral-800 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="(310) 555-0198"
                        required
                        className="w-full bg-white border border-[#DDD5C5] rounded-xl px-3 py-2.5 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10.5px] font-bold tracking-[0.18em] uppercase text-neutral-800 mb-1">
                      Nail Health / Special Requests (Optional)
                    </label>
                    <textarea
                      value={clientNotes}
                      onChange={(e) => setClientNotes(e.target.value)}
                      rows={2}
                      placeholder="Current gel removal needed, sensitive cuticles, specific almond length..."
                      className="w-full bg-white border border-[#DDD5C5] rounded-xl px-3 py-2 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-black resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-[#EFEAE0] rounded-xl text-[11px] text-neutral-600">
                    <ShieldCheck className="w-4 h-4 text-[#917242] shrink-0" />
                    <span>No deposit required today. 24-hour courtesy cancellation policy.</span>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="w-1/3 border border-[#201C19] text-[#201C19] text-xs font-semibold tracking-[0.18em] uppercase py-3 rounded-full hover:bg-neutral-100 transition-all cursor-pointer"
                    >
                      BACK
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 bg-[#201C19] hover:bg-black text-[#FAF8F5] text-xs font-semibold tracking-[0.2em] uppercase py-3.5 rounded-full transition-all cursor-pointer shadow active:scale-[0.99]"
                    >
                      CONFIRM APPOINTMENT
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
