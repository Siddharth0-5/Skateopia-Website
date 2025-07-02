import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { img2, img4, img5, img6, img7, img8, img9, img10, img13 } from '../assets';

const OptimizedFloatingElements: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  // Optimized mouse tracking with throttling
  useEffect(() => {
    let animationId: number;
    let lastTime = 0;
    const throttleDelay = 16; // ~60fps

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime >= throttleDelay) {
        mousePos.current = { x: e.clientX, y: e.clientY };
        lastTime = now;
      }
    };

    // Intersection observer for performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  // Enhanced floating elements with proper asset imports
  const elements = [
    {
      src: img10,
      alt: "Skateopia Statue",
      className: "w-20 sm:w-24 md:w-32 h-auto opacity-70",
      position: { top: '15%', left: '8%' },
      animation: {
        y: [0, -15, 0],
        rotate: [0, 3, -3, 0],
      },
      duration: 5,
      delay: 0
    },
    {
      src: img13,
      alt: "Skater Character",
      className: "w-16 sm:w-20 md:w-24 h-auto opacity-70",
      position: { top: '55%', right: '12%' },
      animation: {
        x: [0, 8, -8, 0],
        y: [0, -12, 0],
      },
      duration: 4,
      delay: 1
    },
    {
      src: img2,
      alt: "Skate Shoe",
      className: "w-14 sm:w-16 md:w-20 h-auto opacity-70",
      position: { top: '35%', right: '5%' },
      animation: {
        rotate: [0, 12, -12, 0],
        scale: [1, 1.05, 1],
      },
      duration: 4.5,
      delay: 2
    },
    {
      src: img9,
      alt: "Pink Skateboard",
      className: "w-18 sm:w-22 md:w-28 h-auto opacity-70",
      position: { bottom: '25%', left: '3%' },
      animation: {
        y: [0, -20, 0],
        rotate: [0, -8, 8, 0],
      },
      duration: 6,
      delay: 0.5
    },
    {
      src: img5,
      alt: "Red Star",
      className: "w-12 sm:w-14 md:w-16 h-auto opacity-70",
      position: { top: '12%', right: '20%' },
      animation: {
        rotate: [0, 360],
        scale: [1, 1.1, 1],
      },
      duration: 7,
      delay: 0
    },
    {
      src: img5,
      alt: "Red Star Small",
      className: "w-8 sm:w-10 md:w-12 h-auto opacity-50",
      position: { bottom: '18%', right: '35%' },
      animation: {
        rotate: [0, -360],
        y: [0, -25, 0],
      },
      duration: 8,
      delay: 3
    },
    {
      src: img4,
      alt: "Skater Silhouette",
      className: "w-16 sm:w-20 md:w-24 h-auto opacity-65",
      position: { top: '45%', left: '15%' },
      animation: {
        x: [0, 10, -5, 0],
        rotate: [0, 5, -5, 0],
      },
      duration: 5.5,
      delay: 1.5
    },
    {
      src: img6,
      alt: "Skull Design",
      className: "w-12 sm:w-14 md:w-18 h-auto opacity-60",
      position: { top: '25%', left: '70%' },
      animation: {
        y: [0, -18, 0],
        scale: [1, 1.15, 1],
      },
      duration: 6.5,
      delay: 2.5
    },
    {
      src: img7,
      alt: "Skull Design Alt",
      className: "w-10 sm:w-12 md:w-16 h-auto opacity-55",
      position: { bottom: '35%', left: '25%' },
      animation: {
        rotate: [0, 180, 360],
        y: [0, -15, 0],
      },
      duration: 7.5,
      delay: 4
    },
    {
      src: img8,
      alt: "Melting Smiley",
      className: "w-14 sm:w-16 md:w-20 h-auto opacity-70",
      position: { top: '65%', left: '60%' },
      animation: {
        x: [0, -12, 12, 0],
        rotate: [0, -8, 8, 0],
      },
      duration: 4.8,
      delay: 3.2
    }
  ];

  if (!isVisible) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
      style={{ willChange: 'auto' }}
    >
      {elements.map((element, index) => (
        <FloatingElement
          key={index}
          {...element}
          mousePos={mousePos}
        />
      ))}
    </div>
  );
};

// Individual floating element component
const FloatingElement: React.FC<{
  src: string;
  alt: string;
  className: string;
  position: any;
  animation: any;
  duration: number;
  delay: number;
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
}> = ({ src, alt, className, position, animation, duration, delay, mousePos }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0, 0, 0)');

  useEffect(() => {
    let animationId: number;

    const updatePosition = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const dx = mousePos.current.x - centerX;
      const dy = mousePos.current.y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 120) {
        const force = (120 - distance) / 120;
        const moveX = (dx / distance) * force * 8;
        const moveY = (dy / distance) * force * 8;
        
        setTransform(`translate3d(${moveX}px, ${moveY}px, 0)`);
      } else {
        setTransform('translate3d(0, 0, 0)');
      }
      
      animationId = requestAnimationFrame(updatePosition);
    };

    updatePosition();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [mousePos]);

  return (
    <motion.div
      ref={elementRef}
      className="absolute"
      style={{ 
        ...position,
        transform,
        willChange: 'transform',
        transition: 'transform 0.3s ease-out'
      }}
      animate={animation}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        style={{ 
          imageRendering: 'auto',
          backfaceVisibility: 'hidden'
        }}
      />
    </motion.div>
  );
};

export default OptimizedFloatingElements;