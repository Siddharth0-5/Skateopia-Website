import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import GlitchText from './GlitchText';

const AboutSection: React.FC = () => {
  const [showFounders, setShowFounders] = useState(false);

  const founders = [
    {
      name: "Alex Rodriguez",
      bio: "Street legend turned entrepreneur, 15+ years shredding",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      socials: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Maya Chen",
      bio: "Tech wizard with a passion for authentic skate culture",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      socials: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Jordan Blake",
      bio: "Creative director bringing raw street aesthetics to digital",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      socials: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section id="about-section" className="relative min-h-screen text-white overflow-hidden snap-start">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Enhanced texture overlay with grain and grid */}
      <div className="absolute inset-0 opacity-30">
        {/* Grid pattern */}
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2250%22 height=%2250%22 viewBox=%220 0 50 50%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 stroke=%22%23ffffff%22 stroke-width=%220.8%22 stroke-opacity=%220.4%22%3E%3Cpath d=%22M0 25h50M25 0v50%22/%3E%3Cpath d=%22M0 12.5h50M0 37.5h50M12.5 0v50M37.5 0v50%22 stroke-width=%220.3%22/%3E%3C/g%3E%3C/svg%3E')] opacity-70"></div>
        
        {/* Grain texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2210%22 cy=%2210%22 r=%220.8%22/%3E%3Ccircle cx=%2230%22 cy=%2215%22 r=%220.5%22/%3E%3Ccircle cx=%2250%22 cy=%2225%22 r=%220.6%22/%3E%3Ccircle cx=%2215%22 cy=%2235%22 r=%220.9%22/%3E%3Ccircle cx=%2240%22 cy=%2245%22 r=%220.4%22/%3E%3Ccircle cx=%225%22 cy=%2250%22 r=%220.7%22/%3E%3Ccircle cx=%2255%22 cy=%225%22 r=%220.6%22/%3E%3Ccircle cx=%2225%22 cy=%2255%22 r=%220.5%22/%3E%3Ccircle cx=%2265%22 cy=%2265%22 r=%220.8%22/%3E%3Ccircle cx=%2270%22 cy=%2235%22 r=%220.4%22/%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        
        {/* Cross pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.06%22%3E%3Cpath d=%22M18 18h4v4h-4zM8 8h4v4h-4zM28 28h4v4h-4zM8 28h4v4h-4zM28 8h4v4h-4z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto w-full">
          <GlitchText
            text="ABOUT THE CHAOS"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 sm:mb-10 md:mb-12 font-mono transform -rotate-1 text-white drop-shadow-lg text-center"
            style={{
              WebkitTextStroke: '2px #000',
              textShadow: '4px 4px 0px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.5)'
            }}
            glitchInterval={25000}
          />
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="transform rotate-1 bg-black/70 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg border-2 border-cyan-400 shadow-2xl"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 font-mono text-white"
                  style={{
                    WebkitTextStroke: '1px #000',
                    textShadow: '2px 2px 0px rgba(0,0,0,0.8), 0 0 15px rgba(255,255,0,0.8)'
                  }}>
                OUR STORY
              </h3>
              <div className="w-16 sm:w-20 h-2 bg-gradient-to-r from-pink-500 to-yellow-400 mb-4 sm:mb-6 transform -rotate-2"></div>
              <p className="text-base sm:text-lg leading-relaxed text-white font-mono drop-shadow-lg">
                Born from the streets, built for the streets. SKATEOPIA isn't just another marketplace - we're the raw, unfiltered connection between skaters and the gear that defines culture. No corporate BS, just pure skateboarding DNA.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="transform -rotate-1 bg-black/70 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg border-2 border-pink-400 shadow-2xl"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 font-mono text-white"
                  style={{
                    WebkitTextStroke: '1px #000',
                    textShadow: '2px 2px 0px rgba(0,0,0,0.8), 0 0 15px rgba(0,255,255,0.8)'
                  }}>
                OUR VISION
              </h3>
              <div className="w-16 sm:w-20 h-2 bg-gradient-to-r from-green-400 to-blue-500 mb-4 sm:mb-6 transform rotate-2"></div>
              <p className="text-base sm:text-lg leading-relaxed text-white font-mono drop-shadow-lg">
                To demolish the boundaries between authentic skate culture and commerce. We're building the most brutally honest platform where every board, every wheel, every piece of gear carries the soul of skateboarding.
              </p>
            </motion.div>
          </div>

          {/* Meet the Founders Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              onClick={() => setShowFounders(!showFounders)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-lg sm:text-xl md:text-2xl font-black transform rotate-1 hover:-rotate-1 transition-all duration-300 border-3 border-black shadow-lg hover:shadow-2xl font-mono"
              style={{ 
                clipPath: 'polygon(5% 0%, 95% 0%, 100% 30%, 95% 100%, 5% 100%, 0% 70%)'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '8px 8px 0px #000'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {showFounders ? 'HIDE FOUNDERS' : 'MEET THE FOUNDERS'}
            </motion.button>
          </motion.div>

          {/* Founders Dropdown - Made smaller */}
          <AnimatePresence>
            {showFounders && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="mt-8 sm:mt-10 md:mt-12 overflow-hidden"
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {founders.map((founder, index) => (
                    <motion.div
                      key={founder.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-black/80 backdrop-blur-sm p-3 sm:p-4 rounded-lg border-2 border-gradient-to-r from-cyan-400 to-pink-400 shadow-xl transform hover:scale-105 transition-all duration-300"
                      style={{
                        borderImage: 'linear-gradient(45deg, #00ffff, #ff69b4) 1'
                      }}
                    >
                      <div className="text-center">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 border-3 border-white shadow-lg"
                        />
                        <h4 className="text-base sm:text-lg font-bold text-white mb-2 font-mono">
                          {founder.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-300 mb-3 font-mono">
                          {founder.bio}
                        </p>
                        <div className="flex justify-center space-x-3">
                          <SocialIcon 
                            href={founder.socials.instagram} 
                            icon={<Instagram size={16} />} 
                            color="from-pink-500 to-purple-600"
                          />
                          <SocialIcon 
                            href={founder.socials.twitter} 
                            icon={<Twitter size={16} />} 
                            color="from-blue-400 to-blue-600"
                          />
                          <SocialIcon 
                            href={founder.socials.linkedin} 
                            icon={<Linkedin size={16} />} 
                            color="from-blue-600 to-blue-800"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// Social Icon Component with bounce animation
const SocialIcon: React.FC<{
  href: string;
  icon: React.ReactNode;
  color: string;
}> = ({ href, icon, color }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-gradient-to-r ${color} p-1.5 rounded-full text-white shadow-lg`}
      whileHover={{ 
        scale: 1.2,
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.3 }
      }}
      whileTap={{ 
        scale: 0.9,
        y: [0, -5, 0],
        transition: { duration: 0.2 }
      }}
    >
      {icon}
    </motion.a>
  );
};

export default AboutSection;