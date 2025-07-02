import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from './GlitchText';

const ShopSection: React.FC = () => {
  return (
    <section id="shop-section" className="relative h-screen overflow-hidden snap-start">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)',
            'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
          ]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Enhanced texture pattern with grain and grid */}
      <div className="absolute inset-0 opacity-25">
        {/* Grid pattern */}
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2250%22 height=%2250%22 viewBox=%220 0 50 50%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 stroke=%22%23000000%22 stroke-width=%220.8%22 stroke-opacity=%220.3%22%3E%3Cpath d=%22M0 25h50M25 0v50%22/%3E%3Cpath d=%22M0 12.5h50M0 37.5h50M12.5 0v50M37.5 0v50%22 stroke-width=%220.4%22/%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        
        {/* Grain texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23000000%22 fill-opacity=%220.08%22%3E%3Ccircle cx=%2210%22 cy=%2210%22 r=%220.8%22/%3E%3Ccircle cx=%2230%22 cy=%2215%22 r=%220.5%22/%3E%3Ccircle cx=%2250%22 cy=%2225%22 r=%220.6%22/%3E%3Ccircle cx=%2215%22 cy=%2235%22 r=%220.9%22/%3E%3Ccircle cx=%2240%22 cy=%2245%22 r=%220.4%22/%3E%3Ccircle cx=%225%22 cy=%2250%22 r=%220.7%22/%3E%3Ccircle cx=%2255%22 cy=%225%22 r=%220.6%22/%3E%3Ccircle cx=%2225%22 cy=%2255%22 r=%220.5%22/%3E%3Ccircle cx=%2265%22 cy=%2265%22 r=%220.8%22/%3E%3Ccircle cx=%2270%22 cy=%2235%22 r=%220.4%22/%3E%3C/g%3E%3C/svg%3E')] opacity-70"></div>
        
        {/* Cross pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ff6b6b%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M18 18h4v4h-4zM8 8h4v4h-4zM28 28h4v4h-4zM8 28h4v4h-4zM28 8h4v4h-4z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Centered heading */}
          <div className="mb-12 sm:mb-16">
            <GlitchText
              text="READY TO SHRED?"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-black mb-6 sm:mb-8 font-mono transform -rotate-1 drop-shadow-lg"
              glitchInterval={20000}
            />
          </div>
          
          {/* Shop button moved down and centered */}
          <motion.div
            className="inline-block mb-8 sm:mb-12"
          >
            <GlitchButton
              href="https://skateopia.in"
              text="SHOP NOW"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-black text-base sm:text-lg md:text-xl font-bold transform rotate-1 drop-shadow-lg"
          >
            → GET YOUR GEAR & REPRESENT ←
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Glitch Button Component
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
      className={`inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black transform rotate-2 hover:rotate-0 transition-all duration-300 border-3 sm:border-4 border-black shadow-lg hover:shadow-2xl font-mono tracking-tight ${isGlitching ? 'glitch-button-active' : ''}`}
      style={{ 
        clipPath: 'polygon(0% 0%, 95% 0%, 100% 25%, 100% 100%, 5% 100%, 0% 75%)',
        ...(isGlitching && {
          textShadow: '2px 0 #ff0080, -2px 0 #00ffff, 0 0 10px #00ff41',
          animation: 'glitch-skew 0.4s ease-in-out',
        })
      }}
      whileHover={{ 
        scale: 1.05,
        rotate: [0, -3, 3, 0],
        boxShadow: '8px 8px 0px #000'
      }}
      whileTap={{ scale: 0.9 }}
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

export default ShopSection;