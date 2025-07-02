import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import ShopSection from './components/ShopSection';
import AboutSection from './components/AboutSection';
import StickyHeader from './components/StickyHeader';
import MagneticCursor from './components/MagneticCursor';
import OptimizedFloatingElements from './components/OptimizedFloatingElements';
import Footer from './components/Footer';
import { useScrollProgress } from './hooks/useScrollProgress';

function App() {
  const { scrollY, windowHeight } = useScrollProgress();
  
  // Calculate header visibility based on scroll
  const heroThreshold = windowHeight * 0.3;
  const showHeader = scrollY > heroThreshold;

  // Calculate footer visibility - show when reaching about section
  const aboutThreshold = windowHeight * 2; // Approximately when about section starts
  const showFooter = scrollY > aboutThreshold;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToShop = () => {
    const shopSection = document.getElementById('shop-section');
    shopSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <StickyHeader 
        show={showHeader} 
        onLogoClick={scrollToTop}
        onShopClick={scrollToShop}
        onAboutClick={scrollToAbout}
      />
      
      <MagneticCursor />
      <OptimizedFloatingElements />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <ShopSection />
        <AboutSection />
      </motion.div>

      <Footer show={showFooter} />
    </div>
  );
}

export default App;