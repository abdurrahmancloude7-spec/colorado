import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.location.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="location"
      aria-label="Colorado Kitchen Location and Directions"
      className="py-16 sm:py-24 bg-[#FDFBF7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#BC6143]">
            FIND OUR KITCHEN
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#23201D]">
            Visit Us in Islamabad
          </h2>
          <p className="text-sm sm:text-base text-[#665D53]">
            We are conveniently located in Sector E-11/4. Step into Fatima Arcade for casual dining, fresh comfort plates, and warm hospitality.
          </p>
        </div>

        {/* Location Information & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Detailed Address & Contact Box (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#F7F3EB] border border-[#E3DACB] shadow-xs space-y-6">
            
            <div className="space-y-6">
              
              {/* Brand & Address Detail */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DE] text-xs font-semibold text-[#BC6143] border border-[#DDD3C2]">
                  <MapPin className="w-3.5 h-3.5 text-[#BC6143]" />
                  <span>Ground Floor Location</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#23201D]">
                  Colorado Kitchen
                </h3>

                <div className="text-base text-[#423C34] leading-relaxed font-normal space-y-1">
                  <p className="font-medium text-[#23201D]">Shop 2, Ground Floor,</p>
                  <p>Fatima Arcade,</p>
                  <p>Street No. 45,</p>
                  <p>E-11/4,</p>
                  <p className="font-semibold text-[#23201D]">Islamabad, Pakistan</p>
                </div>

                {/* Copy Address Button */}
                <button
                  id="copy-address-btn"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#EFE9DE] hover:bg-[#E5DCce] text-[#23201D] text-xs font-medium border border-[#D8CFC0] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2E7D32]" />
                      <span className="text-[#2E7D32] font-semibold">Address Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#7A7165]" />
                      <span>Copy Full Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Phone Numbers */}
              <div className="pt-4 border-t border-[#E5DCce] space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#8C8275]">
                  Phone Numbers
                </div>
                
                <div className="space-y-2">
                  <a
                    href={`tel:${RESTAURANT_INFO.phones[0].value}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#FDFBF7] hover:bg-[#EFE9DE] border border-[#E5DCce] text-[#23201D] text-sm font-semibold transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#EAE2D5] flex items-center justify-center text-[#BC6143]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span>{RESTAURANT_INFO.phones[0].display}</span>
                        <span className="block text-[11px] text-[#8C8275] font-normal">Primary Landline</span>
                      </div>
                    </div>
                    <span className="text-xs text-[#BC6143] group-hover:underline">Call</span>
                  </a>

                  <a
                    href={`tel:${RESTAURANT_INFO.phones[1].value}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#FDFBF7] hover:bg-[#EFE9DE] border border-[#E5DCce] text-[#23201D] text-sm font-semibold transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#EAE2D5] flex items-center justify-center text-[#BC6143]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span>{RESTAURANT_INFO.phones[1].display}</span>
                        <span className="block text-[11px] text-[#8C8275] font-normal">Mobile & WhatsApp</span>
                      </div>
                    </div>
                    <span className="text-xs text-[#BC6143] group-hover:underline">Call</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Action Buttons: Get Directions & WhatsApp */}
            <div className="pt-4 border-t border-[#E5DCce] flex flex-col sm:flex-row gap-3">
              <a
                id="location-get-directions-btn"
                href={RESTAURANT_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#23201D] text-[#FDFBF7] text-xs font-semibold tracking-wider uppercase hover:bg-[#BC6143] transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={RESTAURANT_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#2E7D32] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#1B5E20] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Interactive Map Viewer (7 columns) */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden border border-[#E3DACB] bg-[#EAE2D5] shadow-xs min-h-[380px] sm:min-h-[440px]">
            
            <div className="p-3.5 bg-[#F7F3EB] border-b border-[#E3DACB] flex items-center justify-between text-xs text-[#665D53]">
              <div className="flex items-center gap-2 font-medium">
                <MapPin className="w-4 h-4 text-[#BC6143]" />
                <span className="text-[#23201D] font-semibold">Fatima Arcade Map View</span>
                <span>• Sector E-11/4 Islamabad</span>
              </div>
              <a
                href={RESTAURANT_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BC6143] font-semibold hover:underline flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex-1 w-full relative">
              <iframe
                title="Colorado Kitchen Location Map at Fatima Arcade, E-11/4 Islamabad"
                src={RESTAURANT_INFO.location.embedMapUrl}
                className="w-full h-full min-h-[340px] sm:min-h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
};
