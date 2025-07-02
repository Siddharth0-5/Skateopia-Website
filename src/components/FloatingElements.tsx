import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface FloatingElementsProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ containerRef }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring values for mouse tracking
  const springX = useSpring(mouseX, { damping: 50, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 100 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const handleDragEnd = useCallback((event: any, info: any) => {
    // Optional: Add constraints or snap-back behavior
  }, []);

  // Memoized element configurations for performance
  const elementConfigs = useMemo(() => [
    {
      id: 'statue',
      src: '/src/assets/10.png',
      alt: 'Skateopia Statue',
      className: 'w-28 h-auto drop-shadow-lg',
      style: { top: '15%', left: '8%' },
      animation: {
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      },
      duration: 6,
    },
    {
      id: 'skater',
      src: '/src/assets/13.png',
      alt: 'Skater Character',
      className: 'w-20 h-auto drop-shadow-lg',
      style: { top: '55%', right: '12%' },
      animation: {
        x: [0, 10, -10, 0],
        y: [0, -15, 0],
      },
      duration: 4,
      delay: 1,
    },
    {
      id: 'shoe',
      src: '/src/assets/2.png',
      alt: 'Skate Shoe',
      className: 'w-16 h-auto drop-shadow-lg',
      style: { top: '35%', right: '75%' },
      animation: {
        rotate: [0, 15, -15, 0],
        scale: [1, 1.1, 1],
      },
      duration: 5,
      delay: 2,
    },
    {
      id: 'skateboard',
      src: '/src/assets/9.png',
      alt: 'Pink Skateboard',
      className: 'w-24 h-auto drop-shadow-lg',
      style: { bottom: '25%', left: '3%' },
      animation: {
        y: [0, -25, 0],
        rotate: [0, -10, 10, 0],
      },
      duration: 7,
      delay: 0.5,
    },
  ], []);

  const starConfigs = useMemo(() => [
    {
      id: 'star1',
      style: { top: '12%', right: '20%' },
      className: 'w-14 h-auto drop-shadow-lg',
      animation: {
        rotate: [0, 360],
        scale: [1, 1.2, 1],
      },
      duration: 8,
    },
    {
      id: 'star2',
      style: { bottom: '18%', right: '35%' },
      className: 'w-10 h-auto drop-shadow-lg opacity-80',
      animation: {
        rotate: [0, -360],
        y: [0, -30, 0],
      },
      duration: 10,
      delay: 3,
    },
    {
      id: 'star3',
      style: { top: '65%', left: '25%' },
      className: 'w-8 h-auto drop-shadow-lg opacity-60',
      animation: {
        rotate: [0, 180, 360],
        scale: [0.8, 1.3, 0.8],
      },
      duration: 6,
      delay: 4,
    },
  ], []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Main floating elements */}
      {elementConfigs.map((config) => (
        <motion.div
          key={config.id}
          className="absolute pointer-events-auto cursor-grab active:cursor-grabbing will-change-transform"
          style={config.style}
          drag
          dragConstraints={containerRef}
          onDragEnd={handleDragEnd}
          animate={config.animation}
          transition={{
            duration: config.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: config.delay || 0,
          }}
          whileHover={{ 
            scale: 1.1, 
            rotate: config.id === 'statue' ? 10 : config.id === 'skater' ? -5 : 15,
            transition: { duration: 0.3 }
          }}
          whileDrag={{ 
            scale: 1.2, 
            rotate: config.id === 'statue' ? 15 : config.id === 'skater' ? -10 : 30,
            transition: { duration: 0.2 }
          }}
        >
          <img
            src={config.src}
            alt={config.alt}
            className={config.className}
            loading="lazy"
          />
        </motion.div>
      ))}

      {/* Red Stars with enhanced interactivity */}
      {starConfigs.map((config) => (
        <motion.div
          key={config.id}
          className="absolute pointer-events-auto cursor-grab active:cursor-grabbing will-change-transform"
          style={config.style}
          drag
          dragConstraints={containerRef}
          animate={config.animation}
          transition={{
            duration: config.duration,
            repeat: Infinity,
            ease: config.id === 'star1' ? "linear" : "easeInOut",
            delay: config.delay || 0,
          }}
          whileHover={{ 
            scale: 1.3, 
            filter: 'brightness(1.2)',
            transition: { duration: 0.3 }
          }}
          whileDrag={{ 
            scale: 1.4, 
            rotate: config.id === 'star1' ? 180 : config.id === 'star2' ? -180 : 270,
            transition: { duration: 0.2 }
          }}
        >
          <img
            src="/src/assets/5.png"
            alt="Red Star"
            className={config.className}
            loading="lazy"
          />
        </motion.div>
      ))}

      {/* Background geometric shapes - Mouse responsive */}
      <motion.div 
        className="absolute top-20 right-16 w-6 h-20 bg-gradient-to-b from-orange-400 to-pink-500 transform rotate-45 opacity-30 will-change-transform"
        animate={{
          rotate: [45, 135, 45],
          scale: [1, 1.3, 1],
        }}
        style={{
          x: useSpring(mouseX, { damping: 100, stiffness: 50, transform: (value) => value * 0.01 }),
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-32 left-16 w-16 h-3 bg-gradient-to-r from-purple-400 to-blue-500 transform -rotate-12 opacity-40 will-change-transform"
        animate={{
          rotate: [-12, 12, -12],
          x: [0, 10, 0],
        }}
        style={{
          y: useSpring(mouseY, { damping: 100, stiffness: 50, transform: (value) => value * 0.005 }),
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-1/2 left-8 w-10 h-10 border-3 border-orange-400 transform rotate-45 opacity-50 will-change-transform"
        animate={{
          rotate: [45, 225, 45],
          borderColor: ['#fb923c', '#f59e0b', '#ec4899', '#fb923c'],
        }}
        style={{
          scale: useSpring(mouseX, { damping: 100, stiffness: 50, transform: (value) => 1 + value * 0.0005 }),
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default FloatingElements;