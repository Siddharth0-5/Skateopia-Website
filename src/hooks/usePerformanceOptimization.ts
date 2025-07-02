import { useEffect } from 'react';

export const usePerformanceOptimization = () => {
  useEffect(() => {
    // Enable GPU acceleration for better performance
    const enableGPUAcceleration = () => {
      const elements = document.querySelectorAll('[class*="will-change-transform"]');
      elements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.transform = 'translateZ(0)';
        htmlElement.style.backfaceVisibility = 'hidden';
        htmlElement.style.perspective = '1000px';
      });
    };

    // Optimize scroll performance with throttling
    const optimizeScrolling = () => {
      let ticking = false;
      
      const updateScrollElements = () => {
        // Batch DOM updates
        requestAnimationFrame(() => {
          ticking = false;
        });
      };

      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollElements);
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };

    // Preload critical images with error handling
    const preloadImages = () => {
      const criticalImages = [
        '/src/assets/Skateopia Logo.png',
        '/src/assets/10.png',
        '/src/assets/13.png',
        '/src/assets/2.png',
        '/src/assets/9.png',
        '/src/assets/5.png'
      ];

      criticalImages.forEach((src) => {
        const img = new Image();
        img.onload = () => {
          // Image loaded successfully
        };
        img.onerror = () => {
          // Handle image load error silently
          console.warn(`Failed to preload image: ${src}`);
        };
        img.src = src;
      });
    };

    // Debounce resize events
    const optimizeResize = () => {
      let resizeTimeout: NodeJS.Timeout;
      
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          // Handle resize logic here if needed
        }, 150);
      };

      window.addEventListener('resize', handleResize, { passive: true });
      
      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeout);
      };
    };

    // Initialize optimizations
    enableGPUAcceleration();
    const cleanupScroll = optimizeScrolling();
    const cleanupResize = optimizeResize();
    preloadImages();

    // Cleanup function
    return () => {
      if (cleanupScroll) cleanupScroll();
      if (cleanupResize) cleanupResize();
    };
  }, []);
};