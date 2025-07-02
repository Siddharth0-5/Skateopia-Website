import React, { useEffect, useRef } from 'react';

const MagneticCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    const updateCursor = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Instant cursor movement
      cursor.style.transform = `translate3d(${e.clientX - 8}px, ${e.clientY - 8}px, 0)`;
      
      // Smooth trail following
      trail.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
    };

    const handleMouseEnter = () => {
      isHovering.current = true;
      if (cursor) {
        cursor.style.transform += ' scale(1.5)';
        cursor.style.backgroundColor = '#00ff41';
      }
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
      if (cursor) {
        cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
        cursor.style.backgroundColor = '';
      }
    };

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor - instant response */}
      <div 
        ref={cursorRef}
        className="fixed w-4 h-4 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          willChange: 'transform',
          mixBlendMode: 'difference',
        }}
      />
      
      {/* Trail cursor - smooth following */}
      <div 
        ref={trailRef}
        className="fixed w-10 h-10 border-2 border-cyan-400 rounded-full pointer-events-none z-40 transition-transform duration-200 ease-out opacity-60"
        style={{
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default MagneticCursor;