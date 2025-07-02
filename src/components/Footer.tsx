import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

interface FooterProps {
  show: boolean;
}

const Footer: React.FC<FooterProps> = ({ show }) => {
  return (
    <motion.footer
      className="fixed bottom-0 left-0 right-0 z-40"
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: show ? 0 : 100, 
        opacity: show ? 1 : 0 
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Artistic background with subtle patterns */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-purple-900/15 to-transparent backdrop-blur-md">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2230%22 height=%2230%22 viewBox=%220 0 30 30%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 stroke=%22%23ffffff%22 stroke-width=%220.3%22 stroke-opacity=%220.1%22%3E%3Cpath d=%22M0 15h30M15 0v30%22/%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        {/* Grain texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%225%22 cy=%225%22 r=%220.3%22/%3E%3Ccircle cx=%2215%22 cy=%2210%22 r=%220.2%22/%3E%3Ccircle cx=%2225%22 cy=%2215%22 r=%220.4%22/%3E%3Ccircle cx=%2210%22 cy=%2225%22 r=%220.3%22/%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%220.2%22/%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        
        {/* Subtle border gradient */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>
      </div>
      
      <div className="relative px-4 sm:px-6 md:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Instagram Link */}
          <motion.a
            href="https://www.instagram.com/skateopia.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-pink-400 transition-colors duration-300"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
            whileTap={{ 
              scale: 0.95,
              y: [0, -3, 0],
              transition: { duration: 0.2 }
            }}
          >
            <motion.div
              className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-full"
              whileHover={{
                boxShadow: '0 0 20px rgba(236, 72, 153, 0.6)',
                transition: { duration: 0.2 }
              }}
            >
              <Instagram size={18} />
            </motion.div>
          </motion.a>

          {/* Copyright */}
          <div className="text-white/70 text-xs sm:text-sm font-mono">
            © 2024 SKATEOPIA. All rights reserved.
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;