import React from 'react';
import { MapPin, Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="site-footer"
      className="bg-[#F7F3EB] text-[#23201D] border-t border-[#E5DCce] pt-14 pb-20 md:pb-14 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#E2D8C9]">
          
          {/* Brand & Concept Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#23201D]">
                COLORADO
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#BC6143] px-2 py-0.5 bg-[#BC6143]/10 rounded-sm">
                KITCHEN
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#665D53] leading-relaxed">
              "Good Food. Warm Moments." Fresh comfort cooking and casual premium dining in E-11/4, Islamabad.
            </p>

            {/* Facebook Badge */}
            <div className="pt-1">
              <a
                id="footer-facebook-link"
                href={RESTAURANT_INFO.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#1877F2] hover:underline"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Follow on Facebook ({RESTAURANT_INFO.social.facebook.followers})</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C8275]">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-[#554C42]">
              <li>
                <a href="#home" className="hover:text-[#BC6143] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#BC6143] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#BC6143] transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#BC6143] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#BC6143] transition-colors">
                  Visit Us
                </a>
              </li>
            </ul>
          </div>

          {/* Address Information */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C8275]">
              Location
            </h3>
            <div className="text-xs sm:text-sm text-[#554C42] leading-relaxed space-y-1">
              <p className="font-semibold text-[#23201D]">Colorado Kitchen</p>
              <p>Shop 2, Ground Floor,</p>
              <p>Fatima Arcade,</p>
              <p>Street No. 45,</p>
              <p>E-11/4, Islamabad</p>
            </div>
            <a
              href={RESTAURANT_INFO.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#BC6143] font-semibold hover:underline pt-1"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Direct Phone Lines */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C8275]">
              Contact Lines
            </h3>
            <div className="space-y-2 text-xs sm:text-sm">
              <div>
                <span className="text-[11px] text-[#8C8275] block">Landline:</span>
                <a
                  href={`tel:${RESTAURANT_INFO.phones[0].value}`}
                  className="font-medium text-[#23201D] hover:text-[#BC6143] transition-colors"
                >
                  {RESTAURANT_INFO.phones[0].display}
                </a>
              </div>
              <div>
                <span className="text-[11px] text-[#8C8275] block">Mobile & WhatsApp:</span>
                <a
                  href={`tel:${RESTAURANT_INFO.phones[1].value}`}
                  className="font-medium text-[#23201D] hover:text-[#BC6143] transition-colors"
                >
                  {RESTAURANT_INFO.phones[1].display}
                </a>
              </div>
              <div className="pt-1">
                <a
                  href={RESTAURANT_INFO.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2E7D32] hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C8275]">
          <p>
            © {new Date().getFullYear()} Colorado Kitchen. All rights reserved. Shop 2, Ground Floor, Fatima Arcade, Street No. 45, E-11/4, Islamabad.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#23201D] hover:text-[#BC6143] transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
