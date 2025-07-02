import React, { useRef, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });
  const animationId = useRef<number>();
  const isAnimating = useRef(false);

  // Optimized lerp function
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  // High-performance animation loop
  const animate = () => {
    if (!isAnimating.current) return;

    // Fast cursor movement - follows mouse closely
    cursorPos.current.x = lerp(cursorPos.current.x, mousePos.current.x, 0.25);
    cursorPos.current.y = lerp(cursorPos.current.y, mousePos.current.y, 0.25);
    
    // Slower trail for effect
    trailPos.current.x = lerp(trailPos.current.x, mousePos.current.x, 0.12);
    trailPos.current.y = lerp(trailPos.current.y, mousePos.current.y, 0.12);

    // Apply transforms directly to avoid React re-renders
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${cursorPos.current.x - 16}px, ${cursorPos.current.y - 16}px, 0)`;
    }
    
    if (trailRef.current) {
      trailRef.current.style.transform = `translate3d(${trailPos.current.x - 8}px, ${trailPos.current.y - 8}px, 0)`;
    }

    animationId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    // Initialize positions to prevent jump
    const initializePositions = () => {
      cursorPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      trailPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    };

    initializePositions();
    
    // Start animation
    isAnimating.current = true;
    animationId.current = requestAnimationFrame(animate);

    // Add event listener
    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      isAnimating.current = false;
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, []);

  return (
    <>
      {/* Main cursor - responsive and smooth */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          transform: 'translate3d(-50vw, -50vh, 0)', // Start off-screen
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 rounded-full animate-spin-slow" />
      </div>
      
      {/* Cursor trail - follows with delay */}
      <div
        ref={trailRef}
        className="fixed w-4 h-4 pointer-events-none z-40 opacity-60"
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          transform: 'translate3d(-50vw, -50vh, 0)', // Start off-screen
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm" />
      </div>
    </>
  );
};

export default CustomCursor;