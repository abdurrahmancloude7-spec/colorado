import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FOOD_HIGHLIGHTS } from '../data/restaurantData';

interface FoodExperienceProps {
  onSelectCategory?: (categoryId: string) => void;
}

export const FoodExperience: React.FC<FoodExperienceProps> = ({ onSelectCategory }) => {
  return (
    <section
      id="experience"
      aria-label="Food Experience Categories"
      className="py-16 sm:py-24 bg-[#FDFBF7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#BC6143]">
              CULINARY OFFERINGS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#23201D] mt-2">
              From Our Kitchen to Your Table
            </h2>
          </div>
          <p className="text-[#665D53] text-sm sm:text-base max-w-md">
            Thoughtfully grouped categories highlighting the depth of flavors, hearty portions, and fresh ingredients we serve every day.
          </p>
        </div>

        {/* 4 Category Showcase Cards in a Sophisticated Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOOD_HIGHLIGHTS.map((item, index) => (
            <div
              key={item.id}
              className="group flex flex-col rounded-2xl bg-[#F7F3EB] border border-[#E8DFD3] overflow-hidden hover:shadow-md transition-all duration-300 hover:border-[#D5C7B5]"
            >
              {/* Category Image with Hover Zoom */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-[#EAE2D5]">
                <img
                  src={item.imageUrl}
                  alt={`${item.title} category preview at Colorado Kitchen`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#23201D]/75 backdrop-blur-xs text-[#FDFBF7] text-[11px] font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  Category 0{index + 1}
                </div>
              </div>

              {/* Content Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="text-xs font-semibold text-[#BC6143] tracking-wide">
                    {item.tagline}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#23201D] group-hover:text-[#BC6143] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665D53] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <a
                  href="#menu"
                  onClick={() => onSelectCategory && onSelectCategory(item.targetCategory)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#23201D] hover:text-[#BC6143] transition-colors pt-2 group/btn"
                >
                  <span>Explore in Menu</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
