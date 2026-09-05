import React, { useState } from 'react';
import { Search, Phone, MessageCircle, Sparkles, Filter } from 'lucide-react';
import { MENU_CATEGORIES, SAMPLE_MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuCategory } from '../types';

interface MenuSectionProps {
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  activeCategory: externalCategory,
  onCategoryChange,
}) => {
  const [internalCategory, setInternalCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentCategory = externalCategory !== undefined ? externalCategory : internalCategory;

  const handleSelectCategory = (catId: string) => {
    if (onCategoryChange) {
      onCategoryChange(catId);
    } else {
      setInternalCategory(catId);
    }
  };

  const filteredItems = SAMPLE_MENU_ITEMS.filter((item) => {
    const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="menu"
      aria-label="Colorado Kitchen Menu"
      className="py-16 sm:py-24 bg-[#FDFBF7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Clarification Notice */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#BC6143]">
            SAVOR THE FLAVORS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#23201D]">
            Kitchen Menu Preview
          </h2>
          <p className="text-[#665D53] text-sm sm:text-base leading-relaxed">
            A curated sample of dishes and culinary categories prepared at Colorado Kitchen. 
            Call us directly or message on WhatsApp to inquire about today’s fresh specials and availability.
          </p>

          {/* Transparent Notice / Sample Note */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F7F3EB] border border-[#E5DCce] text-[11px] text-[#7A7165]">
            <Sparkles className="w-3.5 h-3.5 text-[#C98838]" />
            <span>Sample menu entries — easily customizable by the restaurant owner</span>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-10">
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#8C8275] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes, ingredients or specials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#F7F3EB] border border-[#E2D8C9] text-sm text-[#23201D] placeholder-[#8C8275] focus:outline-hidden focus:border-[#BC6143] focus:ring-1 focus:ring-[#BC6143] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C8275] hover:text-[#23201D]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-2">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = currentCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#23201D] text-[#FDFBF7] shadow-xs'
                      : 'bg-[#F7F3EB] text-[#554C42] hover:bg-[#EFE9DE] border border-[#E5DCce]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Menu Items Grid — Scannable, Readable, Premium */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#F7F3EB] rounded-2xl border border-[#E8DFD3] max-w-lg mx-auto">
            <Filter className="w-8 h-8 text-[#8C8275] mx-auto mb-2 opacity-50" />
            <p className="font-serif text-lg text-[#23201D]">No dishes found</p>
            <p className="text-xs text-[#665D53] mt-1">Try searching for a different item or select another category.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                handleSelectCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-[#23201D] text-white text-xs rounded-full font-medium"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-[#F7F3EB] border border-[#EAE2D5] hover:border-[#D5C7B5] hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-lg font-bold text-[#23201D] leading-snug">
                      {item.name}
                    </h3>
                    {item.badge && (
                      <span className="shrink-0 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#BC6143]/10 text-[#BC6143] border border-[#BC6143]/20">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#5C5348] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-[#E5DCce] flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#857B6E] uppercase tracking-wider">
                    {item.category}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/${RESTAURANT_INFO.whatsapp.cleanNumber}?text=Hi%20Colorado%20Kitchen,%20I%20would%20like%20to%20inquire%20about%20the%20${encodeURIComponent(item.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2E7D32] hover:text-[#1B5E20] transition-colors"
                      title="Inquire on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Order / Inquire Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#EFE9DE] border border-[#DDD3C2] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl font-bold text-[#23201D]">
              Looking for Today’s Fresh Chef Specials?
            </h4>
            <p className="text-xs sm:text-sm text-[#665D53]">
              Connect directly with Colorado Kitchen at Fatima Arcade for real-time menu recommendations and takeaway orders.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${RESTAURANT_INFO.phones[0].value}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#23201D] text-[#FDFBF7] text-xs font-semibold uppercase tracking-wider hover:bg-[#BC6143] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {RESTAURANT_INFO.phones[0].display}</span>
            </a>
            <a
              href={RESTAURANT_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2E7D32] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1B5E20] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
