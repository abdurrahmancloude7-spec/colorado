import React from 'react';
import { IMAGES } from '../data/restaurantData';
import { Sparkles, Utensils, Heart } from 'lucide-react';

export const SignatureEditorial: React.FC = () => {
  return (
    <section
      id="signature-table"
      aria-label="The Colorado Kitchen Table"
      className="py-16 sm:py-24 bg-[#F7F3EB] border-y border-[#EAE2D5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split-Screen Editorial Layout — Pure Editorial Space, Not a Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Visual Side — High-Quality Professional Food & Dining Table Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#E0D6C6] bg-[#EAE2D5]">
              <img
                src={IMAGES.signatureTable}
                alt="The Colorado Kitchen Table - warm dining spread with savory culinary plates"
                className="w-full h-[400px] sm:h-[500px] object-cover object-center transition-transform duration-700 hover:scale-103"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 right-5 text-white text-xs font-medium">
                <span className="font-serif italic text-sm">Every table tells a story.</span> E-11/4 Islamabad
              </div>
            </div>

            {/* Subtle floating detail note */}
            <div className="hidden sm:block absolute -bottom-5 -right-5 bg-[#FDFBF7] border border-[#DDD3C2] p-4 rounded-2xl shadow-md max-w-xs">
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#23201D] mb-1">
                <Sparkles className="w-4 h-4 text-[#BC6143]" />
                <span>Crafted on Order</span>
              </div>
              <p className="text-[11px] text-[#6A6156] leading-relaxed">
                We take pride in cooking every plate fresh when you request it.
              </p>
            </div>
          </div>

          {/* Editorial Content Side — Pure typography, elegant spacing & hierarchy */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#BC6143]">
                KITCHEN PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#23201D] tracking-tight leading-tight">
                THE COLORADO
                <span className="block font-light italic text-[#BC6143]">KITCHEN TABLE</span>
              </h2>
            </div>

            <p className="font-serif text-xl sm:text-2xl text-[#38332C] italic leading-snug border-l-2 border-[#BC6143] pl-4">
              “Simple ingredients, satisfying flavors and food made to be enjoyed.”
            </p>

            <p className="text-base text-[#5A5249] leading-relaxed">
              We started Colorado Kitchen with one straightforward mission: to provide an inviting culinary space in Islamabad where the food is always hearty, the flavors are memorable, and guests feel genuinely cared for.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#EFE9DE] text-[#BC6143] mt-0.5">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#23201D]">Uncompromising Freshness</h4>
                  <p className="text-xs text-[#6B6256]">From hand-cut fries to freshly seared cuts, our culinary crew works with ingredients at their peak.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#EFE9DE] text-[#BC6143] mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#23201D]">A Welcoming Neighborhood Table</h4>
                  <p className="text-xs text-[#6B6256]">Conveniently situated at Fatima Arcade in Sector E-11/4, designed for casual gatherings and relaxed meals.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#23201D] text-[#FDFBF7] text-xs font-semibold tracking-wider uppercase hover:bg-[#BC6143] transition-colors"
              >
                <span>View Kitchen Menu</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
