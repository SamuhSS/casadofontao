'use client';

import HeroSection from '@/components/sections/HeroSection';
import TransitionSection from '@/components/sections/TransitionSection';
import AboutSection from '@/components/sections/AboutSection';
import AmenitiesSection from '@/components/sections/AmenitiesSection';
import LocationSection from '@/components/sections/LocationSection';
import Footer from '@/components/sections/Footer';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <TransitionSection />
      <AboutSection />
      <AmenitiesSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
