'use client';
import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HashtagScroller from './components/HashtagScroller';
import GallerySection from './components/GallerySection';
import VirtualEventsSection from './components/VirtualEventsSection';
import CountdownSection from "./components/CountdownSection";
import ContactSection from './components/ContactSection';
import FutureSection from './components/FutureSection';
import TestimonialsSection from './components/TestimonialsSection';
import SpeakersSection from './components/SpeakersSection';
import FAQSection from './components/FAQSection';
import PromoSection from './components/PromoSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Safety timeout - if preloader doesn't finish in 6 seconds, force finish
    const safetyTimeout = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(safetyTimeout);
  }, []);

  const handlePreloaderFinish = () => {
    setLoading(false);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {loading ? (
        <Preloader onFinish={handlePreloaderFinish} />
      ) : (
        <main>
          <HeroSection />
          <HashtagScroller />
          <CountdownSection />
          <AboutSection />
          <VirtualEventsSection />
          <GallerySection />
          <SpeakersSection />
          <FutureSection />
          <TestimonialsSection />
          <ContactSection />
          <FAQSection />
          <PromoSection />
          <Footer />
        </main>
      )}
    </div>
  );
};

export default App;