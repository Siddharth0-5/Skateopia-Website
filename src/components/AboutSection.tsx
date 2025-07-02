import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="relative h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-orange-500 text-white overflow-hidden snap-start">
      {/* Spider-Verse inspired background texture */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-blue-600 to-orange-500 opacity-80"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpolygon points=%2250 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Clean heading without glitch effects */}
          <motion.h2 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-12 font-mono transform -rotate-1 text-white will-change-transform"
            style={{ 
              textShadow: '4px 4px 0px #000',
              WebkitTextStroke: '1px #000'
            }}
            whileHover={{
              scale: 1.02,
              rotate: [0, -1, 1, 0],
              transition: { duration: 0.3 }
            }}
          >
            <motion.span
              animate={{
                color: ['#ffffff', '#fb923c', '#ec4899', '#8b5cf6', '#ffffff'],
                x: [0, -1, 1, 0],
                opacity: [1, 0.9, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ABOUT THE CHAOS
            </motion.span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="transform rotate-1 bg-gradient-to-br from-orange-500/20 to-pink-500/20 p-6 rounded-lg border-2 border-orange-400 backdrop-blur-sm will-change-transform"
              whileHover={{
                scale: 1.02,
                rotate: 0,
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-mono text-orange-300">
                OUR STORY
              </h3>
              <div className="w-20 h-2 bg-gradient-to-r from-orange-500 to-pink-400 mb-6 transform -rotate-2"></div>
              <p className="text-lg leading-relaxed text-gray-200 font-mono">
                Born from the streets, built for the streets. SKATEOPIA isn't just another marketplace - we're the raw, unfiltered connection between skaters and the gear that defines culture. No corporate BS, just pure skateboarding DNA.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="transform -rotate-1 bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-6 rounded-lg border-2 border-purple-400 backdrop-blur-sm will-change-transform"
              whileHover={{
                scale: 1.02,
                rotate: 0,
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-mono text-purple-300">
                OUR VISION
              </h3>
              <div className="w-20 h-2 bg-gradient-to-r from-purple-400 to-blue-500 mb-6 transform rotate-2"></div>
              <p className="text-lg leading-relaxed text-gray-200 font-mono">
                To demolish the boundaries between authentic skate culture and commerce. We're building the most brutally honest platform where every board, every wheel, every piece of gear carries the soul of skateboarding.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements - positioned to avoid text overlap */}
      <motion.div 
        className="absolute top-20 right-20 w-6 h-20 bg-gradient-to-b from-orange-400 to-pink-500 transform rotate-45 opacity-30 will-change-transform"
        animate={{
          rotate: [45, 135, 45],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-40 left-20 w-16 h-3 bg-gradient-to-r from-purple-400 to-blue-500 transform -rotate-12 opacity-40 will-change-transform"
        animate={{
          rotate: [-12, 12, -12],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-10 w-10 h-10 border-3 border-orange-400 transform rotate-45 opacity-50 will-change-transform"
        animate={{
          rotate: [45, 225, 45],
          borderColor: ['#fb923c', '#f59e0b', '#ec4899', '#fb923c']
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default AboutSection;