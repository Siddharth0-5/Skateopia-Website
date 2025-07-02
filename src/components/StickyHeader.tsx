import React from 'react';
import { motion } from 'framer-motion';

interface StickyHeaderProps {
  show: boolean;
  onLogoClick: () => void;
  onShopClick: () => void;
  onAboutClick: () => void;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ show, onLogoClick, onShopClick, onAboutClick }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: show ? 0 : -100, 
        opacity: show ? 1 : 0 
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Artistic header background */}
      {show && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-900/15 via-pink-900/15 to-orange-900/15 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2230%22 height=%2230%22 viewBox=%220 0 30 30%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 stroke=%22%23ffffff%22 stroke-width=%220.3%22 stroke-opacity=%220.08%22%3E%3Cpath d=%22M0 15h30M15 0v30%22/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
          
          {/* Grain texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%225%22 cy=%225%22 r=%220.3%22/%3E%3Ccircle cx=%2215%22 cy=%2210%22 r=%220.2%22/%3E%3Ccircle cx=%2225%22 cy=%2215%22 r=%220.4%22/%3E%3Ccircle cx=%2210%22 cy=%2225%22 r=%220.3%22/%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%220.2%22/%3E%3C/g%3E%3C/svg%3E')] opacity-70"></div>
          
          {/* Subtle border gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"></div>
        </motion.div>
      )}
      
      <div className="relative flex items-center justify-between max-w-7xl mx-auto">
        {/* Shop Now Button - Left with Glitch Effect */}
        <GlitchHeaderButton
          onClick={onShopClick}
          text="SHOP"
          fullText="SHOP NOW"
          className="bg-gradient-to-r from-pink-500 to-purple-600"
          clipPath="polygon(0% 0%, 90% 0%, 100% 30%, 100% 100%, 10% 100%, 0% 70%)"
          rotation="-rotate-1 hover:rotate-0"
        />

        {/* Logo - Center - Fixed positioning to prevent movement */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <motion.button
            onClick={onLogoClick}
            className="cursor-pointer flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/src/assets/Skateopia Logo.png" 
              alt="SKATEOPIA" 
              className="h-8 sm:h-10 md:h-12 w-auto transition-all duration-300"
              style={{ 
                filter: 'brightness(1.1)',
                display: 'block'
              }}
            />
          </motion.button>
        </div>

        {/* About Button - Right with Glitch Effect */}
        <GlitchHeaderButton
          onClick={onAboutClick}
          text="ABOUT"
          fullText="ABOUT US"
          className="bg-gradient-to-r from-orange-500 to-pink-500"
          clipPath="polygon(10% 0%, 100% 0%, 100% 70%, 90% 100%, 0% 100%, 0% 30%)"
          rotation="rotate-1 hover:-rotate-1"
        />
      </div>
    </motion.div>
  );
};

// Glitch Header Button Component
const GlitchHeaderButton: React.FC<{
  onClick: () => void;
  text: string;
  fullText: string;
  className: string;
  clipPath: string;
  rotation: string;
}> = ({ onClick, text, fullText, className, clipPath, rotation }) => {
  const [isGlitching, setIsGlitching] = React.useState(false);
  const [displayText, setDisplayText] = React.useState(text);

  const glitchChars = ['#', '0', '2', 'A', '9', 'C', '3', '%', '4', '@', '$', '&', '*'];

  const triggerGlitch = () => {
    if (isGlitching) return;
    
    setIsGlitching(true);
    
    const glitchDuration = 300;
    const glitchSteps = 5;
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
    <motion.button
      onClick={onClick}
      className={`${className} text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 font-black text-sm sm:text-base md:text-lg transform ${rotation} transition-all duration-300 border-2 border-black shadow-lg font-mono relative ${isGlitching ? 'glitch-button-active' : ''}`}
      style={{ 
        clipPath,
        ...(isGlitching && {
          textShadow: '1px 0 #ff0080, -1px 0 #00ffff, 0 0 8px #00ff41',
          animation: 'glitch-skew 0.3s ease-in-out',
        })
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '4px 4px 0px #000',
      }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={triggerGlitch}
    >
      <span className="hidden sm:inline">{displayText}</span>
      <span className="sm:hidden">{displayText}</span>
      
      {/* Scanlines effect during glitch */}
      {isGlitching && (
        <>
          <span 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0, 255, 65, 0.15) 1px, rgba(0, 255, 65, 0.15) 2px)',
              animation: 'scanlines 0.08s linear infinite'
            }}
          />
          <span 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 0, 128, 0.2) 50%, transparent 100%)',
              animation: 'glitch-sweep 0.3s ease-in-out'
            }}
          />
        </>
      )}
    </motion.button>
  );
};

export default StickyHeader;