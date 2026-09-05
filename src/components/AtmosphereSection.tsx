import React from 'react';
import { IMAGES } from '../data/restaurantData';
import { Coffee, Users, Sparkles } from 'lucide-react';

export const AtmosphereSection: React.FC = () => {
  return (
    <section
      id="atmosphere"
      aria-label="Colorado Kitchen Atmosphere and Experience"
      className="py-16 sm:py-24 bg-[#F7F3EB] border-y border-[#EAE2D5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Magazine-style Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#BC6143]">
            THE EXPERIENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#23201D] leading-tight">
            A Welcoming Space in E-11/4 Islamabad
          </h2>
          <p className="text-base text-[#61584E] leading-relaxed">
            Colorado Kitchen is designed around the ease of casual premium dining—an atmosphere where the kitchen aromas welcome you in, comfortable tables invite you to stay, and every guest feels valued.
          </p>
        </div>

        {/* Asymmetrical Editorial Composition — 3 High-Quality Images in Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Main Heroic Dining Space Image (7 columns) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-[#DFD5C4] bg-[#EAE2D5]">
              <img
                src={IMAGES.atmosphere.diningSpace}
                alt="Welcoming modern dining atmosphere and table seating at Colorado Kitchen"
                className="w-full h-[380px] sm:h-[480px] object-cover object-center transition-transform duration-700 group-hover:scale-103"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs uppercase tracking-widest font-semibold text-white/80 block">Dining Atmosphere</span>
                <p className="font-serif text-lg sm:text-xl font-medium">Warm natural light, relaxed seating & friendly hospitality</p>
              </div>
            </div>
          </div>

          {/* Asymmetric Stacked Secondary Images (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Top Image: Kitchen Prep & Craft */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#DFD5C4] bg-[#EAE2D5] group">
              <img
                src={IMAGES.atmosphere.kitchenPrep}
                alt="Chef preparing fresh ingredients in Colorado Kitchen"
                className="w-full h-52 sm:h-56 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 bg-[#23201D]/75 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                Fresh Kitchen Prep
              </div>
            </div>

            {/* Bottom Image: Hospitality & Drink Detail */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#DFD5C4] bg-[#EAE2D5] group">
              <img
                src={IMAGES.atmosphere.hospitalityDetail}
                alt="Table service and warm beverage detail at Colorado Kitchen"
                className="w-full h-52 sm:h-56 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 bg-[#23201D]/75 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                Hospitality & Table Care
              </div>
            </div>

          </div>

        </div>

        {/* Atmosphere Feature Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-[#E2D8C9]">
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#FDFBF7] border border-[#E8DFD3]">
            <div className="w-10 h-10 rounded-lg bg-[#EFE9DE] text-[#BC6143] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="font-semibold text-xs text-[#23201D] block">Family & Friends Friendly</span>
              <span className="text-[11px] text-[#71695E]">Spacious tables & warm environment</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#FDFBF7] border border-[#E8DFD3]">
            <div className="w-10 h-10 rounded-lg bg-[#EFE9DE] text-[#BC6143] flex items-center justify-center shrink-0">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <span className="font-semibold text-xs text-[#23201D] block">Casual Premium Vibe</span>
              <span className="text-[11px] text-[#71695E]">Unpretentious dining comfort</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#FDFBF7] border border-[#E8DFD3]">
            <div className="w-10 h-10 rounded-lg bg-[#EFE9DE] text-[#BC6143] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-semibold text-xs text-[#23201D] block">Dine-In & Takeaway</span>
              <span className="text-[11px] text-[#71695E]">Convenient Fatima Arcade access</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
