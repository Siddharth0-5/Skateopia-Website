import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  glitchOnHover?: boolean;
  autoGlitch?: boolean;
  glitchInterval?: number;
  children?: React.ReactNode;
}

const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  className = '', 
  style = {},
  glitchOnHover = false,
  autoGlitch = true,
  glitchInterval = 15000, // 15 seconds
  children
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [displayText, setDisplayText] = useState(text);

  const glitchChars = ['#', '0', '0', '2', 'A', '9', 'C', '3', '%', '4', '0', '4', '@', '$', '&', '*'];
  
  const triggerGlitch = () => {
    if (isGlitching) return;
    
    setIsGlitching(true);
    
    // Glitch phase 1: Random characters
    const glitchDuration = 300 + Math.random() * 400; // 300-700ms
    const glitchSteps = 8;
    const stepDuration = glitchDuration / glitchSteps;
    
    let step = 0;
    const glitchInterval = setInterval(() => {
      if (step < glitchSteps - 2) {
        // Replace random characters with glitch chars
        const chars = text.split('');
        const numToReplace = Math.floor(Math.random() * 3) + 1;
        
        for (let i = 0; i < numToReplace; i++) {
          const randomIndex = Math.floor(Math.random() * chars.length);
          chars[randomIndex] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        
        setDisplayText(chars.join(''));
      } else {
        // Return to original text
        setDisplayText(text);
        clearInterval(glitchInterval);
        setIsGlitching(false);
      }
      step++;
    }, stepDuration);
  };

  useEffect(() => {
    if (autoGlitch) {
      const interval = setInterval(triggerGlitch, glitchInterval);
      return () => clearInterval(interval);
    }
  }, [autoGlitch, glitchInterval]);

  return (
    <span 
      className={`${className} ${isGlitching ? 'glitch-active' : ''}`}
      style={{
        ...style,
        display: 'inline-block',
        position: 'relative',
        ...(isGlitching && {
          animation: 'glitch-skew 0.3s ease-in-out',
          filter: 'hue-rotate(90deg) saturate(2)',
          textShadow: '2px 0 #ff0080, -2px 0 #00ffff, 0 0 10px #00ff41',
        })
      }}
      onMouseEnter={glitchOnHover ? triggerGlitch : undefined}
    >
      {children ? children : displayText}
      
      {/* Scanlines effect during glitch */}
      {isGlitching && (
        <>
          <span 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.1) 2px, rgba(0, 255, 65, 0.1) 4px)',
              animation: 'scanlines 0.1s linear infinite'
            }}
          />
          <span 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 0, 128, 0.2) 50%, transparent 100%)',
              animation: 'glitch-sweep 0.3s ease-in-out'
            }}
          />
        </>
      )}
    </span>
  );
};

export default GlitchText;