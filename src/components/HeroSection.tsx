import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [glitchActive, setGlitchActive] = useState(false);

  // Memoized glitch characters to prevent recreation
  const glitchChars = useMemo(() => ['#002', 'A9C3', '%404', 'X1F7', '&B2E', '9Z4K'], []);

  // Optimized glitch text function with useCallback
  const getGlitchText = useCallback((originalText: string) => {
    if (!glitchActive) return originalText;
    
    return originalText
      .split('')
      .map(char => {
        if (char === ' ' || char === '•') return char;
        return Math.random() < 0.3 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char;
      })
      .join('');
  }, [glitchActive, glitchChars]);

  // Optimized glitch effect with cleanup
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const triggerGlitch = () => {
      setGlitchActive(true);
      timeoutId = setTimeout(() => setGlitchActive(false), 500);
    };

    // Initial delay
    const initialDelay = Math.random() * 10000 + 15000;
    timeoutId = setTimeout(triggerGlitch, initialDelay);

    // Set up interval for recurring glitches
    intervalId = setInterval(() => {
      const randomDelay = Math.random() * 10000 + 15000;
      setTimeout(triggerGlitch, randomDelay);
    }, 25000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section id="hero-section" className="relative h-screen bg-gradient-to-br from-orange-500 via-pink-600 to-purple-700 overflow-hidden snap-start">
      {/* Spider-Verse inspired background texture */}
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3Ccircle cx=%2213%22 cy=%2213%22 r=%221%22/%3E%3Ccircle cx=%2223%22 cy=%2223%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          {/* Logo with clean entrance animation */}
          <motion.div
            className="mb-8"
            initial={{ x: '100vw', rotate: 360, scale: 2 }}
            animate={{ x: 0, rotate: 0, scale: 1 }}
            transition={{ 
              duration: 1.5, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
          >
            <motion.img 
              src="/src/assets/Skateopia Logo.png" 
              alt="Skateopia" 
              className="w-80 md:w-96 h-auto mx-auto drop-shadow-2xl will-change-transform"
              style={{
                filter: 'none', // Clean logo, no effects
              }}
              whileHover={{
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 }
              }}
              loading="eager"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-white text-xl md:text-3xl font-bold transform -rotate-1 mb-8 font-mono will-change-transform"
            style={{ textShadow: '2px 2px 0px #000' }}
          >
            {/* Fixed glitch animation - no layout breaking */}
            <motion.span
              className={`inline-block ${glitchActive ? 'glitch-active' : ''}`}
              animate={glitchActive ? {
                color: ['#ffffff', '#10b981', '#3b82f6', '#8b5cf6', '#ffffff'],
                // Removed scale to prevent layout breaking
                skewX: [0, 1, -1, 0], // Reduced skew
              } : {
                color: ['#ffffff', '#10b981', '#ffffff'],
              }}
              transition={glitchActive ? {
                duration: 0.5,
                ease: "easeInOut"
              } : {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                // Ensure text stays within bounds
                display: 'inline-block',
                maxWidth: '100%',
                overflow: 'hidden',
              }}
            >
              {getGlitchText("RAW • STREET • MARKETPLACE")}
            </motion.span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="text-white text-sm md:text-lg font-mono tracking-wide transform rotate-1 will-change-transform"
            animate={{
              color: ['#ffffff', '#fb923c', '#ec4899', '#8b5cf6', '#ffffff']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            SCROLL TO ENTER THE CHAOS
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced Spider-Verse style glitch effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-2 bg-gradient-to-r from-orange-400 to-pink-500"
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0],
            x: [0, 20, -20, 0]
          }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            repeatDelay: 3
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-24 h-2 bg-gradient-to-r from-purple-400 to-blue-500"
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0],
            y: [0, -10, 10, 0]
          }}
          transition={{
            duration: 0.15,
            repeat: Infinity,
            repeatDelay: 5
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-16 h-2 bg-gradient-to-r from-orange-500 to-pink-400"
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0],
            rotate: [0, 45, -45, 0]
          }}
          transition={{
            duration: 0.12,
            repeat: Infinity,
            repeatDelay: 7
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;