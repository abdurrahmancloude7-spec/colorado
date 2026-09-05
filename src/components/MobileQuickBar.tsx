import React from 'react';
import { Phone, MessageCircle, MapPin, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const MobileQuickBar: React.FC = () => {
  return (
    <aside
      id="mobile-quick-actions"
      aria-label="Quick contact and actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-t border-[#E8DFD3] shadow-[0_-4px_16px_rgba(0,0,0,0.06)] md:hidden py-2 px-3 safe-area-bottom"
    >
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {/* Call Button */}
        <a
          id="mobile-action-call"
          href={`tel:${RESTAURANT_INFO.phones[0].value}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-[#23201D] hover:bg-[#F3ECE0] active:scale-95 transition-all text-center"
        >
          <div className="w-8 h-8 rounded-full bg-[#23201D] text-[#FDFBF7] flex items-center justify-center mb-1">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold tracking-tight">Call Us</span>
        </a>

        {/* WhatsApp Button */}
        <a
          id="mobile-action-whatsapp"
          href={RESTAURANT_INFO.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-[#1B5E20] hover:bg-[#E8F5E9] active:scale-95 transition-all text-center"
        >
          <div className="w-8 h-8 rounded-full bg-[#2E7D32] text-white flex items-center justify-center mb-1">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* Menu Jump Button */}
        <a
          id="mobile-action-menu"
          href="#menu"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-[#4A433B] hover:bg-[#F3ECE0] active:scale-95 transition-all text-center"
        >
          <div className="w-8 h-8 rounded-full bg-[#EFE9DE] text-[#BC6143] flex items-center justify-center mb-1 border border-[#D5CCC0]">
            <Utensils className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold tracking-tight">Menu</span>
        </a>

        {/* Location / Directions Button */}
        <a
          id="mobile-action-directions"
          href={RESTAURANT_INFO.location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-[#4A433B] hover:bg-[#F3ECE0] active:scale-95 transition-all text-center"
        >
          <div className="w-8 h-8 rounded-full bg-[#EFE9DE] text-[#4A433B] flex items-center justify-center mb-1 border border-[#D5CCC0]">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold tracking-tight">Directions</span>
        </a>
      </div>
    </aside>
  );
};
