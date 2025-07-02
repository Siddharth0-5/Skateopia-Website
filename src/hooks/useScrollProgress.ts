import { useState, useEffect } from 'react';

export const useScrollProgress = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);

  useEffect(() => {
    const updateScrollData = () => {
      setScrollY(window.scrollY);
      setWindowHeight(window.innerHeight);
      setDocumentHeight(document.documentElement.scrollHeight);
    };

    window.addEventListener('scroll', updateScrollData);
    window.addEventListener('resize', updateScrollData);
    updateScrollData();

    return () => {
      window.removeEventListener('scroll', updateScrollData);
      window.removeEventListener('resize', updateScrollData);
    };
  }, []);

  const progress = documentHeight > windowHeight 
    ? scrollY / (documentHeight - windowHeight)
    : 0;

  return {
    scrollY,
    windowHeight,
    documentHeight,
    progress: Math.min(Math.max(progress, 0), 1)
  };
};