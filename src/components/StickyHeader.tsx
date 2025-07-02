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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 will-change-transform"
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: show ? 0 : -100, 
        opacity: show ? 1 : 0,
        backgroundColor: show ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)',
        backdropFilter: show ? 'blur(15px)' : 'blur(0px)',
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        borderBottom: show ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
      }}
    >
      {/* Shop Now Button - Left Corner */}
      <motion.button
        onClick={onShopClick}
        className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 font-black text-lg transform -rotate-2 hover:rotate-0 transition-all duration-300 border-3 border-black shadow-lg font-mono will-change-transform"
        whileHover={{ 
          scale: 1.1,
          boxShadow: '6px 6px 0px #000',
          background: 'linear-gradient(45deg, #ff6b35, #f7931e)'
        }}
        whileTap={{ scale: 0.95 }}
        style={{ 
          clipPath: 'polygon(0% 0%, 90% 0%, 100% 30%, 100% 100%, 10% 100%, 0% 70%)'
        }}
      >
        SHOP NOW
      </motion.button>

      {/* Logo - Center (Clean, no outline) */}
      <motion.button
        onClick={onLogoClick}
        className="cursor-pointer group will-change-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img 
          src="/src/assets/Skateopia Logo.png" 
          alt="Skateopia" 
          className="h-12 md:h-16 w-auto group-hover:brightness-110 transition-all duration-300"
          loading="lazy"
          style={{
            filter: 'none', // Remove any filters/shadows
            border: 'none',
            outline: 'none'
          }}
        />
      </motion.button>

      {/* About Button - Right Corner */}
      <motion.button
        onClick={onAboutClick}
        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 font-black text-lg transform rotate-2 hover:-rotate-1 transition-all duration-300 border-3 border-black shadow-lg font-mono will-change-transform"
        whileHover={{ 
          scale: 1.1,
          boxShadow: '6px 6px 0px #000',
          background: 'linear-gradient(45deg, #8b5cf6, #3b82f6)'
        }}
        whileTap={{ scale: 0.95 }}
        style={{ 
          clipPath: 'polygon(10% 0%, 100% 0%, 100% 70%, 90% 100%, 0% 100%, 0% 30%)'
        }}
      >
        ABOUT US
      </motion.button>
    </motion.div>
  );
};

export default StickyHeader;