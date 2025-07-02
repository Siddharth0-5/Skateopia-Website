import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const elements = useRef<Array<{ x: number; y: number; vx: number; vy: number; element: HTMLElement }>>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // React to cursor movement
      elements.current.forEach((el, index) => {
        const dx = mousePos.current.x - el.x;
        const dy = mousePos.current.y - el.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          el.vx -= (dx / distance) * force * 2;
          el.vy -= (dy / distance) * force * 2;
        }
      });
    };

    const animate = () => {
      elements.current.forEach((el) => {
        // Apply physics
        el.x += el.vx;
        el.y += el.vy;
        
        // Friction
        el.vx *= 0.95;
        el.vy *= 0.95;
        
        // Boundaries
        if (el.x < 0 || el.x > window.innerWidth) el.vx *= -0.8;
        if (el.y < 0 || el.y > window.innerHeight) el.vy *= -0.8;
        
        el.x = Math.max(0, Math.min(window.innerWidth, el.x));
        el.y = Math.max(0, Math.min(window.innerHeight, el.y));
        
        // Update DOM
        el.element.style.transform = `translate3d(${el.x}px, ${el.y}px, 0)`;
      });
      
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const createDraggableElement = (index: number) => {
    const shapes = ['square', 'circle', 'triangle'];
    const colors = ['from-pink-500 to-purple-600', 'from-orange-500 to-pink-500', 'from-blue-500 to-cyan-500'];
    
    return (
      <motion.div
        key={index}
        className={`absolute w-8 h-8 bg-gradient-to-r ${colors[index % colors.length]} opacity-60 cursor-grab active:cursor-grabbing`}
        style={{
          borderRadius: shapes[index % shapes.length] === 'circle' ? '50%' : shapes[index % shapes.length] === 'triangle' ? '0' : '4px',
          clipPath: shapes[index % shapes.length] === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
        }}
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        drag
        dragElastic={0.1}
        dragConstraints={containerRef}
        whileDrag={{ scale: 1.2, opacity: 0.8 }}
        ref={(el) => {
          if (el) {
            const rect = el.getBoundingClientRect();
            elements.current[index] = {
              x: rect.left,
              y: rect.top,
              vx: 0,
              vy: 0,
              element: el
            };
          }
        }}
      />
    );
  };

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {/* Make only the draggable elements interactive */}
      <div className="pointer-events-auto">
        {Array.from({ length: 6 }, (_, i) => createDraggableElement(i))}
      </div>
    </div>
  );
};

export default InteractiveBackground;