import React from 'react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const CallToAction: React.FC = () => {
  return (
    <section
      id="contact"
      aria-label="Contact Colorado Kitchen"
      className="py-16 sm:py-24 bg-[#EFE9DE] border-t border-[#DFD5C4] relative overflow-hidden"
    >
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#BC6143]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#C98838]/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Sub-label */}
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#BC6143] inline-block mb-3">
          A TABLE IS WAITING FOR YOU
        </span>

        {/* High-Impact Main Heading */}
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#23201D] tracking-tight leading-[1.1] mb-5">
          COME HUNGRY.
          <span className="block italic text-[#BC6143]">LEAVE HAPPY.</span>
        </h2>

        {/* Short Supporting Text */}
        <p className="text-base sm:text-lg text-[#554C42] max-w-xl mx-auto leading-relaxed mb-8">
          Whether you are planning lunch with colleagues or an evening dinner with loved ones, 
          Colorado Kitchen welcomes you to fresh flavors and honest hospitality.
        </p>

        {/* Action Buttons: Call & WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-10">
          
          {/* WhatsApp Primary CTA */}
          <a
            id="cta-whatsapp-btn"
            href={RESTAURANT_INFO.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm hover:shadow-md active:scale-98"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>

          {/* Call Landline CTA */}
          <a
            id="cta-call-landline"
            href={`tel:${RESTAURANT_INFO.phones[0].value}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#23201D] hover:bg-[#BC6143] text-[#FDFBF7] text-xs font-bold tracking-wider uppercase transition-all shadow-sm hover:shadow-md active:scale-98"
          >
            <Phone className="w-4 h-4 text-[#FDFBF7]" />
            <span>Call: {RESTAURANT_INFO.phones[0].display}</span>
          </a>

        </div>

        {/* Secondary Direct Call Link for Mobile */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 text-xs text-[#6B6154] bg-[#FDFBF7] px-5 py-2.5 rounded-full border border-[#DDD3C2]">
          <span>Direct Mobile:</span>
          <a
            href={`tel:${RESTAURANT_INFO.phones[1].value}`}
            className="font-bold text-[#23201D] hover:text-[#BC6143] underline decoration-[#BC6143]"
          >
            {RESTAURANT_INFO.phones[1].display}
          </a>
          <span className="hidden sm:inline text-[#DDD3C2]">•</span>
          <span className="hidden sm:inline">Fatima Arcade, Street 45, E-11/4 Islamabad</span>
        </div>

      </div>
    </section>
  );
};
