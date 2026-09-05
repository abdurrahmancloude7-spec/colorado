import React from 'react';
import { ArrowRight, MapPin, Sparkles, Phone } from 'lucide-react';
import { RESTAURANT_INFO, IMAGES } from '../data/restaurantData';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      aria-label="Colorado Kitchen Introduction"
      className="relative pt-24 sm:pt-28 pb-14 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-[#FDFBF7]"
    >
      {/* Decorative Subtle Background Texture / Accents (Non-intrusive) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-12 w-96 h-96 rounded-full bg-[#EFE9DE]/50 blur-3xl" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-[#BC6143]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Modern Kitchen Layout — Clean, Open, No Giant Box/Card Blocking the Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Text & Content Column (No box, direct elegant typography over spacious canvas) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DE] text-[#4A433B] text-xs font-semibold tracking-wide border border-[#DFD6C7]">
              <MapPin className="w-3.5 h-3.5 text-[#BC6143]" />
              <span>Fatima Arcade, Street 45, E-11/4 Islamabad</span>
            </div>

            {/* Restaurant Brand & Hero Heading */}
            <div className="space-y-3">
              <span className="block text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#BC6143]">
                COLORADO KITCHEN
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#23201D] leading-[1.12] tracking-tight">
                Good Food.
                <span className="italic block text-[#23201D] font-light mt-1">
                  Warm Moments.
                </span>
              </h1>
            </div>

            {/* Short Supporting Sentence */}
            <p className="text-base sm:text-lg text-[#5A5249] leading-relaxed max-w-xl font-normal">
              Freshly prepared comfort food and casual premium dining in E-11/4, Islamabad. 
              Honest cooking, quality ingredients, and a welcoming table crafted for sharing with family and friends.
            </p>

            {/* Primary and Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                id="hero-primary-cta"
                href="#menu"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#23201D] text-[#FDFBF7] hover:bg-[#BC6143] text-sm font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow-md group"
              >
                <span>Explore the Menu</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#FDFBF7]" />
              </a>

              <a
                id="hero-secondary-cta"
                href="#location"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#EFE9DE] hover:bg-[#E5DCce] text-[#23201D] text-sm font-semibold tracking-wide border border-[#D8CFC0] transition-colors duration-200"
              >
                <MapPin className="w-4 h-4 text-[#BC6143]" />
                <span>Visit Us</span>
              </a>

              <a
                id="hero-call-shortcut"
                href={`tel:${RESTAURANT_INFO.phones[0].value}`}
                className="sm:hidden inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#23201D] text-sm font-semibold border border-[#DFD6C7]"
              >
                <Phone className="w-4 h-4 text-[#BC6143]" />
                <span>Call {RESTAURANT_INFO.phones[0].display}</span>
              </a>
            </div>

            {/* Key Micro Highlights */}
            <div className="pt-4 border-t border-[#EAE2D5] grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <span className="block font-serif text-lg sm:text-xl font-bold text-[#23201D]">
                  Fresh
                </span>
                <span className="text-xs text-[#7A7165] font-medium">Prepared to order</span>
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-xl font-bold text-[#23201D]">
                  Casual
                </span>
                <span className="text-xs text-[#7A7165] font-medium">Premium dining</span>
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-xl font-bold text-[#23201D]">
                  E-11/4
                </span>
                <span className="text-xs text-[#7A7165] font-medium">Islamabad, PK</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Column — Sharp, Photorealistic, Dominant Restaurant Food Image */}
          {/* Note: Kept visually dominant and pure — NO giant white/cream/glass poster placed over it! */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(35,32,29,0.12)] border border-[#E3DACB] bg-[#EFE9DE]">
              <img
                src={IMAGES.hero}
                alt="Signature freshly prepared culinary dish at Colorado Kitchen on a rustic ceramic dining table"
                className="w-full h-[360px] sm:h-[460px] lg:h-[540px] object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="eager"
                fetchPriority="high"
              />

              {/* Minimalist, elegant corner detail chip (NOT a giant card) */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#23201D]/80 backdrop-blur-md text-[#FDFBF7] px-4 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between sm:justify-start gap-3 border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C98838] animate-pulse" />
                  <span className="font-semibold text-white">The Modern Kitchen Experience</span>
                </div>
                <span className="text-white/70 text-[11px] hidden sm:inline">• Fatima Arcade, E-11/4</span>
              </div>
            </div>

            {/* Subtle floating badge positioned gently outside the image frame */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#FDFBF7] border border-[#DFD6C7] shadow-md rounded-2xl p-3 items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#BC6143]/10 text-[#BC6143] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="pr-2">
                <div className="text-xs font-bold text-[#23201D]">100% Fresh Daily</div>
                <div className="text-[11px] text-[#7A7165]">Crafted with passion</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
