import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { FoodExperience } from './components/FoodExperience';
import { SignatureEditorial } from './components/SignatureEditorial';
import { MenuSection } from './components/MenuSection';
import { AtmosphereSection } from './components/AtmosphereSection';
import { GallerySection } from './components/GallerySection';
import { SocialSection } from './components/SocialSection';
import { LocationSection } from './components/LocationSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleSelectCategoryFromExperience = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Smooth scroll to menu section
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#23201D] flex flex-col selection:bg-[#EAE1D3] selection:text-[#1F1C18]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section - Photorealistic, unblocked dominant food image, no giant card */}
        <Hero />

        {/* 2. Brand Intro - "Made Fresh. Served Warm." Asymmetric editorial layout */}
        <BrandIntro />

        {/* 3. Food Experience - 4 categories from kitchen to table */}
        <FoodExperience onSelectCategory={handleSelectCategoryFromExperience} />

        {/* 4. Signature Food Visual - Split-screen editorial ("THE COLORADO KITCHEN TABLE") */}
        <SignatureEditorial />

        {/* 5. Menu Section - Interactive preview with categories & search */}
        <MenuSection
          activeCategory={selectedCategory}
          onCategoryChange={(cat) => setSelectedCategory(cat)}
        />

        {/* 6. Atmosphere / Experience - Magazine-style asymmetrical layout */}
        <AtmosphereSection />

        {/* 7. Gallery - Curated photo gallery with interactive lightbox */}
        <GallerySection />

        {/* 8. Social Presence - Compact Facebook community badge (457 followers) */}
        <SocialSection />

        {/* 9. Location Section - "Visit Us" with exact Fatima Arcade address & directions */}
        <LocationSection />

        {/* 10. Final High-Conversion CTA - "COME HUNGRY. LEAVE HAPPY." */}
        <CallToAction />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Quick Action Bar (Call, WhatsApp, Menu, Directions) */}
      <MobileQuickBar />
    </div>
  );
}
