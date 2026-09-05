import React from 'react';
import { Utensils, Users, Flame } from 'lucide-react';

export const BrandIntro: React.FC = () => {
  return (
    <section
      id="story"
      aria-label="About Colorado Kitchen"
      className="py-16 sm:py-24 bg-[#F7F3EB] border-y border-[#EAE2D5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Creative Editorial Intro Header — Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading & Subtext */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#BC6143]">
              OUR CULINARY PROMISE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#23201D] leading-tight">
              Made Fresh.
              <span className="block italic text-[#BC6143]">Served Warm.</span>
            </h2>
            <div className="w-16 h-1 bg-[#BC6143] rounded-full mt-2" />
          </div>

          {/* Right Column: Authentic, Moderate Copy (No giant paragraph) */}
          <div className="lg:col-span-7 space-y-4 text-[#524B45]">
            <p className="text-lg sm:text-xl font-medium text-[#23201D] leading-relaxed">
              At Colorado Kitchen, we believe the best meals come from honest ingredients, mindful seasoning, and genuine kitchen passion.
            </p>
            <p className="text-base leading-relaxed text-[#5A5249]">
              Located at Fatima Arcade in E-11/4 Islamabad, our kitchen brings modern dining comfort to life. 
              We focus on food that feels familiar yet refined—whether you are dropping in for a quick lunch, 
              sharing a hearty dinner, or gathering around the table with people who matter most.
            </p>
          </div>
        </div>

        {/* 3 Modern Pillars in an Asymmetric Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-10 border-t border-[#E2D8C9]">
          
          <div className="space-y-3 p-5 rounded-2xl bg-[#FDFBF7] border border-[#E8DFD3] shadow-xs hover:border-[#BC6143]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#EFE9DE] text-[#BC6143] flex items-center justify-center">
              <Utensils className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#23201D]">
              Quality Preparation
            </h3>
            <p className="text-sm text-[#665D53] leading-relaxed">
              Every dish is cooked fresh to order with carefully selected ingredients, balanced spices, and respect for wholesome flavor.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-[#FDFBF7] border border-[#E8DFD3] shadow-xs hover:border-[#BC6143]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#EFE9DE] text-[#BC6143] flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#23201D]">
              Modern Kitchen Energy
            </h3>
            <p className="text-sm text-[#665D53] leading-relaxed">
              Inspired by contemporary dining culture: approachable, vibrant, and focused on delivering satisfying comfort with flair.
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-[#FDFBF7] border border-[#E8DFD3] shadow-xs hover:border-[#BC6143]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#EFE9DE] text-[#BC6143] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#23201D]">
              Warm Hospitality
            </h3>
            <p className="text-sm text-[#665D53] leading-relaxed">
              A comfortable setting in E-11/4 where friends, families, and solo diners always receive attentive, welcoming service.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
