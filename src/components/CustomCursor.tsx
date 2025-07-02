import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const animationId = useRef<number>();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animateCursor = () => {
      if (!cursorRef.current) return;

      // Smooth following with immediate response
      const dx = mousePos.current.x - cursorPos.current.x;
      const dy = mousePos.current.y - cursorPos.current.y;
      
      // Higher lerp factor for immediate response
      cursorPos.current.x += dx * 0.8;
      cursorPos.current.y += dy * 0.8;

      cursorRef.current.style.transform = `translate3d(${cursorPos.current.x - 16}px, ${cursorPos.current.y - 16}px, 0)`;
      
      animationId.current = requestAnimationFrame(animateCursor);
    };

    // Initialize cursor position
    cursorPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    
    window.addEventListener('mousemove', updateMousePosition);
    animateCursor();

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{
        willChange: 'transform',
      }}
    />
  );
};

export default CustomCursor;