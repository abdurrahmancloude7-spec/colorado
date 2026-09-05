import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'food' | 'craft' | 'ambiance'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  const openLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex((i) => i.id === item.id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const currentLightboxItem = lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      aria-label="Colorado Kitchen Photography Gallery"
      className="py-16 sm:py-24 bg-[#FDFBF7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#BC6143]">
              VISUAL GLIMPSE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#23201D] mt-1.5">
              The Kitchen Gallery
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'food', label: 'Food & Plates' },
              { id: 'craft', label: 'Kitchen Craft' },
              { id: 'ambiance', label: 'Table & Ambiance' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#23201D] text-[#FDFBF7] shadow-xs'
                    : 'bg-[#F7F3EB] text-[#554C42] hover:bg-[#EFE9DE] border border-[#E5DCce]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Responsive Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#EFE9DE] border border-[#E8DFD3] cursor-pointer aspect-4/3 sm:aspect-square shadow-xs hover:shadow-md transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                loading="lazy"
              />
              
              {/* Subtle hover overlay with title */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif text-base font-medium">{item.title}</p>
                    <p className="text-[11px] text-white/80 line-clamp-1">{item.caption}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <div
          id="gallery-lightbox-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevLightbox}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextLightbox}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={currentLightboxItem.imageUrl}
              alt={currentLightboxItem.alt}
              className="max-h-[70vh] w-auto rounded-xl object-contain shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center text-white">
              <h4 className="font-serif text-xl font-medium">{currentLightboxItem.title}</h4>
              <p className="text-xs text-white/70 mt-1 max-w-md">{currentLightboxItem.caption}</p>
              <span className="text-[11px] text-white/40 block mt-2">
                Photo {(lightboxIndex ?? 0) + 1} of {GALLERY_ITEMS.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
