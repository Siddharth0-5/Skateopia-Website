import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import ShopSection from './components/ShopSection';
import AboutSection from './components/AboutSection';
import StickyHeader from './components/StickyHeader';
import FloatingElements from './components/FloatingElements';
import CustomCursor from './components/CustomCursor';
import { useScrollProgress } from './hooks/useScrollProgress';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';

function App() {
  const { scrollY, windowHeight } = useScrollProgress();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Performance optimization hook
  usePerformanceOptimization();
  
  // Calculate header visibility based on scroll with memoization
  const heroThreshold = useMemo(() => windowHeight * 0.3, [windowHeight]);
  const showHeader = scrollY > heroThreshold;

  const scrollToTop = useCallback(() => {
    document.getElementById('hero-section')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToShop = useCallback(() => {
    document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToAbout = useCallback(() => {
    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div ref={containerRef} className="relative scroll-smooth">
      <StickyHeader 
        show={showHeader} 
        onLogoClick={scrollToTop}
        onShopClick={scrollToShop}
        onAboutClick={scrollToAbout}
      />
      
      <FloatingElements containerRef={containerRef} />
      <CustomCursor />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="will-change-transform"
      >
        <HeroSection />
        <ShopSection />
        <AboutSection />
      </motion.div>
    </div>
  );
}

export default App;