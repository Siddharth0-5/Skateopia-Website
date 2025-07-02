import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

const ShopSection: React.FC = () => {
  const [glitchActive, setGlitchActive] = useState(false);

  // Memoized glitch characters
  const glitchChars = useMemo(() => ['#002', 'A9C3', '%404', 'X1F7', '&B2E', '9Z4K'], []);

  // Optimized glitch text function
  const getGlitchText = useCallback((originalText: string) => {
    if (!glitchActive) return originalText;
    
    return originalText
      .split('')
      .map(char => {
        if (char === ' ' || char === '?') return char;
        return Math.random() < 0.4 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char;
      })
      .join('');
  }, [glitchActive, glitchChars]);

  // Optimized glitch effect
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const triggerGlitch = () => {
      setGlitchActive(true);
      timeoutId = setTimeout(() => setGlitchActive(false), 600);
    };

    // Initial delay
    const initialDelay = Math.random() * 10000 + 20000;
    timeoutId = setTimeout(triggerGlitch, initialDelay);

    // Set up interval
    intervalId = setInterval(() => {
      const randomDelay = Math.random() * 10000 + 20000;
      setTimeout(triggerGlitch, randomDelay);
    }, 30000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section id="shop-section" className="relative h-screen bg-gradient-to-br from-pink-500 via-orange-400 to-purple-500 overflow-hidden snap-start">
      {/* Spider-Verse inspired background pattern */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-pink-500 opacity-70"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M0 0h40v40H0V0zm20 20a20 20 0 1 1 0-40 20 20 0 0 1 0 40z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main heading with fixed glitch effect */}
          <motion.h2 
            className="text-4xl md:text-7xl font-black text-white mb-8 font-mono transform -rotate-1 will-change-transform"
            style={{ 
              textShadow: '4px 4px 0px #000',
              WebkitTextStroke: '2px #000'
            }}
            animate={glitchActive ? {
              color: ['#ffffff', '#10b981', '#3b82f6', '#8b5cf6', '#ffffff'],
              // Removed scale to prevent layout breaking
              skewX: [0, 2, -2, 0], // Reduced skew
            } : {
              color: ['#ffffff', '#fb923c', '#ec4899', '#8b5cf6', '#ffffff'],
            }}
            transition={glitchActive ? {
              duration: 0.6,
              ease: "easeInOut"
            } : {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{
              scale: 1.05,
              rotate: [0, -1, 1, 0],
              transition: { duration: 0.3 }
            }}
          >
            <motion.span
              className="inline-block"
              animate={glitchActive ? {
                x: [0, -1, 1, 0], // Reduced movement
                opacity: [1, 0.9, 1]
              } : {}}
              transition={glitchActive ? {
                duration: 0.1,
                repeat: 6
              } : {}}
              style={{
                // Ensure text stays within bounds
                display: 'inline-block',
                maxWidth: '100%',
                overflow: 'hidden',
              }}
            >
              {getGlitchText("READY TO SHRED?")}
            </motion.span>
          </motion.h2>
          
          <motion.div
            whileHover={{ 
              scale: 1.15,
              rotate: [0, -3, 3, 0],
              boxShadow: '12px 12px 0px #000'
            }}
            whileTap={{ scale: 0.9 }}
            className="inline-block mb-8"
          >
            <a
              href="https://skateopia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-12 py-6 text-2xl md:text-4xl font-black transform rotate-2 hover:rotate-0 transition-all duration-300 border-4 border-black shadow-lg hover:shadow-2xl font-mono tracking-tight will-change-transform"
              style={{ 
                clipPath: 'polygon(0% 0%, 95% 0%, 100% 25%, 100% 100%, 5% 100%, 0% 75%)'
              }}
            >
              SHOP NOW
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white text-lg md:text-xl font-bold transform rotate-1 font-mono will-change-transform"
            style={{ textShadow: '2px 2px 0px #000' }}
          >
            <motion.span
              animate={{
                color: ['#ffffff', '#10b981', '#ffffff']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              → GET YOUR GEAR & REPRESENT ←
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background decorative elements - positioned to avoid text overlap */}
      <motion.div 
        className="absolute top-10 left-10 w-16 h-16 border-4 border-white transform rotate-45 opacity-30 will-change-transform"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 transform -rotate-12 opacity-40 will-change-transform"
        animate={{
          rotate: [-12, 12, -12],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-10 w-3 h-20 bg-gradient-to-b from-pink-500 to-purple-400 transform rotate-12 opacity-50 will-change-transform"
        animate={{
          rotate: [12, -12, 12],
          scaleY: [1, 1.3, 1]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default ShopSection;