import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MessageCircle, MapPin, ChevronDown } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Story', href: '#story' },
    { label: 'Experience', href: '#experience' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Visit Us', href: '#location' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-xs border-b border-[#EBE3D5]'
          : 'bg-[#FDFBF7]/85 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo / Text */}
          <a
            href="#home"
            id="nav-brand-logo"
            className="group flex flex-col items-start focus:outline-hidden"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#23201D] group-hover:text-[#BC6143] transition-colors">
                COLORADO
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#BC6143] px-2 py-0.5 bg-[#BC6143]/10 rounded-sm">
                KITCHEN
              </span>
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#71695F] font-medium pl-0.5">
              E-11/4 • Islamabad
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#4A433B] hover:text-[#BC6143] transition-colors tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#BC6143] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Phone Call Button with Dropdown */}
            <div className="relative">
              <button
                id="nav-call-btn"
                onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#23201D] hover:bg-[#BC6143] text-[#FDFBF7] text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer"
                aria-expanded={phoneDropdownOpen}
                aria-label="Call restaurant numbers"
              >
                <Phone className="w-3.5 h-3.5 text-[#FDFBF7]" />
                <span>Call Now</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${phoneDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {phoneDropdownOpen && (
                <div
                  id="phone-dropdown-menu"
                  className="absolute right-0 mt-2 w-64 bg-[#FDFBF7] rounded-xl shadow-lg border border-[#EBE3D5] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-[#8C8275] uppercase tracking-wider border-b border-[#F0EAE1]">
                    Direct Restaurant Lines
                  </div>
                  {RESTAURANT_INFO.phones.map((phone) => (
                    <a
                      key={phone.value}
                      href={`tel:${phone.value}`}
                      onClick={() => setPhoneDropdownOpen(false)}
                      className="flex items-center justify-between px-3 py-2.5 text-xs hover:bg-[#F7F3EB] transition-colors group"
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-[#23201D] group-hover:text-[#BC6143]">
                          {phone.display}
                        </span>
                        <span className="text-[10px] text-[#8C8275]">{phone.label}</span>
                      </div>
                      <Phone className="w-3.5 h-3.5 text-[#BC6143] opacity-60 group-hover:opacity-100" />
                    </a>
                  ))}
                  <div className="border-t border-[#F0EAE1] mt-1 pt-1">
                    <a
                      href={RESTAURANT_INFO.whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-xs text-[#2E7D32] hover:bg-[#E8F5E9] transition-colors font-medium"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#2E7D32]" />
                      <span>WhatsApp Direct: {RESTAURANT_INFO.whatsapp.number}</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* WhatsApp Quick Icon */}
            <a
              id="nav-whatsapp-btn"
              href={RESTAURANT_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-[#D5CCC0] text-[#2E7D32] hover:bg-[#E8F5E9] hover:border-[#2E7D32]/30 transition-colors"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${RESTAURANT_INFO.phones[0].value}`}
              className="p-2 rounded-full bg-[#23201D] text-[#FDFBF7] hover:bg-[#BC6143] transition-colors"
              aria-label="Call Colorado Kitchen"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#23201D] hover:bg-[#F3ECE0] transition-colors focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="sm:hidden bg-[#FDFBF7] border-b border-[#EBE3D5] shadow-lg animate-in slide-in-from-top duration-200"
        >
          <div className="px-5 pt-3 pb-6 space-y-3">
            <div className="flex flex-col space-y-1 pb-3 border-b border-[#F0EAE1]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-[#23201D] hover:bg-[#F7F3EB] hover:text-[#BC6143] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Contact Shortcuts */}
            <div className="pt-2 space-y-2">
              <div className="text-xs font-semibold text-[#8C8275] uppercase tracking-wider px-3">
                Quick Contact
              </div>
              <a
                href={`tel:${RESTAURANT_INFO.phones[0].value}`}
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#F7F3EB] text-[#23201D] text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-[#BC6143]" />
                <span>Call Landline: {RESTAURANT_INFO.phones[0].display}</span>
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.phones[1].value}`}
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#F7F3EB] text-[#23201D] text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-[#BC6143]" />
                <span>Call Mobile: {RESTAURANT_INFO.phones[1].display}</span>
              </a>
              <a
                href={RESTAURANT_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#E8F5E9] text-[#1B5E20] text-sm font-medium"
              >
                <MessageCircle className="w-4 h-4 text-[#2E7D32]" />
                <span>WhatsApp: {RESTAURANT_INFO.whatsapp.number}</span>
              </a>
              <a
                href={RESTAURANT_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#F7F3EB] text-[#23201D] text-sm font-medium"
              >
                <MapPin className="w-4 h-4 text-[#BC6143]" />
                <span>Fatima Arcade, E-11/4 Islamabad</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
