import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from './GlitchText';
import { skateopia_logo } from '../assets';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden snap-start">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Enhanced texture overlay with grain and grid */}
      <div className="absolute inset-0 opacity-40">
        {/* Grid pattern */}
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 stroke=%22%23ffffff%22 stroke-width=%220.5%22 stroke-opacity=%220.3%22%3E%3Cpath d=%22M0 20h40M20 0v40%22/%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        
        {/* Grain texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.08%22%3E%3Ccircle cx=%2210%22 cy=%2210%22 r=%220.5%22/%3E%3Ccircle cx=%2230%22 cy=%2215%22 r=%220.3%22/%3E%3Ccircle cx=%2250%22 cy=%2225%22 r=%220.4%22/%3E%3Ccircle cx=%2215%22 cy=%2235%22 r=%220.6%22/%3E%3Ccircle cx=%2240%22 cy=%2245%22 r=%220.3%22/%3E%3Ccircle cx=%225%22 cy=%2250%22 r=%220.4%22/%3E%3Ccircle cx=%2255%22 cy=%225%22 r=%220.5%22/%3E%3Ccircle cx=%2225%22 cy=%2255%22 r=%220.3%22/%3E%3C/g%3E%3C/svg%3E')] opacity-80"></div>
        
        {/* Additional geometric patterns */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.04%22%3E%3Cpath d=%22M40 40l-20-20h40z%22/%3E%3Cpath d=%22M40 40l20-20v40z%22/%3E%3Cpath d=%22M40 40l20 20h-40z%22/%3E%3Cpath d=%22M40 40l-20 20v-40z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Logo with Glitch Effect */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="mb-6 sm:mb-8"
          >
            <GlitchText
              text=""
              className="inline-block"
              glitchInterval={12000}
            >
              <img 
                src={skateopia_logo} 
                alt="SKATEOPIA" 
                className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </GlitchText>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold transform -rotate-1 mb-6 sm:mb-8 drop-shadow-lg"
          >
            RAW • STREET • MARKETPLACE
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mb-8 sm:mb-10"
          >
            <GlitchButton
              href="https://shop.skateopia.in"
              text="SHOP NOW"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-white text-sm sm:text-base md:text-lg font-mono tracking-wide transform rotate-1 drop-shadow-lg"
          >
            SCROLL TO EXPLORE THE CHAOS
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Glitch Button Component for Hero
const GlitchButton: React.FC<{ href: string; text: string }> = ({ href, text }) => {
  const [isGlitching, setIsGlitching] = React.useState(false);
  const [displayText, setDisplayText] = React.useState(text);

  const glitchChars = ['#', '0', '2', 'A', '9', 'C', '3', '%', '4', '@', '$', '&', '*'];

  const triggerGlitch = () => {
    if (isGlitching) return;
    
    setIsGlitching(true);
    
    const glitchDuration = 400;
    const glitchSteps = 6;
    const stepDuration = glitchDuration / glitchSteps;
    
    let step = 0;
    const glitchInterval = setInterval(() => {
      if (step < glitchSteps - 2) {
        const chars = text.split('');
        const numToReplace = Math.floor(Math.random() * 2) + 1;
        
        for (let i = 0; i < numToReplace; i++) {
          const randomIndex = Math.floor(Math.random() * chars.length);
          chars[randomIndex] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        
        setDisplayText(chars.join(''));
      } else {
        setDisplayText(text);
        clearInterval(glitchInterval);
        setIsGlitching(false);
      }
      step++;
    }, stepDuration);
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-lg sm:text-xl md:text-2xl lg:text-3xl font-black transform -rotate-1 hover:rotate-0 transition-all duration-300 border-3 border-black shadow-xl hover:shadow-2xl font-mono tracking-tight ${isGlitching ? 'glitch-button-active' : ''}`}
      style={{ 
        clipPath: 'polygon(5% 0%, 95% 0%, 100% 25%, 95% 100%, 5% 100%, 0% 75%)',
        ...(isGlitching && {
          textShadow: '2px 0 #ff0080, -2px 0 #00ffff, 0 0 10px #00ff41',
          animation: 'glitch-skew 0.4s ease-in-out',
        })
      }}
      whileHover={{ 
        scale: 1.05,
        rotate: [0, -2, 2, 0],
        boxShadow: '8px 8px 0px #000'
      }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={triggerGlitch}
    >
      {displayText}
      
      {/* Scanlines effect during glitch */}
      {isGlitching && (
        <>
          <span 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.2) 2px, rgba(0, 255, 65, 0.2) 4px)',
              animation: 'scanlines 0.1s linear infinite'
            }}
          />
          <span 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 0, 128, 0.3) 50%, transparent 100%)',
              animation: 'glitch-sweep 0.4s ease-in-out'
            }}
          />
        </>
      )}
    </motion.a>
  );
};
export default HeroSection;