import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Statue of Liberty Skateboard */}
      <motion.img
        src="/src/assets/10.png"
        alt="Skateopia Statue"
        className="absolute w-32 h-auto opacity-80"
        style={{ top: '20%', left: '10%' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Skater Character */}
      <motion.img
        src="/src/assets/13.png"
        alt="Skater Character"
        className="absolute w-24 h-auto opacity-80"
        style={{ top: '60%', right: '15%' }}
        animate={{
          x: [0, 10, -10, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Converse Shoe */}
      <motion.img
        src="/src/assets/2.png"
        alt="Skate Shoe"
        className="absolute w-20 h-auto opacity-80"
        style={{ top: '40%', left: '80%' }}
        animate={{
          rotate: [0, 15, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Pink Skateboard */}
      <motion.img
        src="/src/assets/9.png"
        alt="Pink Skateboard"
        className="absolute w-28 h-auto opacity-80"
        style={{ bottom: '30%', left: '5%' }}
        animate={{
          y: [0, -25, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      {/* Red Star */}
      <motion.img
        src="/src/assets/5.png"
        alt="Red Star"
        className="absolute w-16 h-auto opacity-80"
        style={{ top: '15%', right: '25%' }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Additional floating stars */}
      <motion.img
        src="/src/assets/5.png"
        alt="Red Star"
        className="absolute w-12 h-auto opacity-60"
        style={{ bottom: '20%', right: '40%' }}
        animate={{
          rotate: [0, -360],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      <motion.img
        src="/src/assets/5.png"
        alt="Red Star"
        className="absolute w-10 h-auto opacity-50"
        style={{ top: '70%', left: '30%' }}
        animate={{
          rotate: [0, 180, 360],
          scale: [0.8, 1.3, 0.8],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
    </div>
  );
};

export default FloatingElements;