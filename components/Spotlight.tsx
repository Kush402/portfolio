'use client';

import { useEffect, useRef } from 'react';

export function Spotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        const { clientX, clientY } = e;
        // Simple radial gradient - no filters for cross-browser consistency
        spotlightRef.current.style.setProperty('--mouse-x', `${clientX}px`);
        spotlightRef.current.style.setProperty('--mouse-y', `${clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Mouse-following spotlight - using CSS custom properties for consistency */}
      <div
        ref={spotlightRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 0.12), transparent 40%)',
          transition: 'background 0.15s ease-out',
        }}
      />
      
      {/* Static top spotlight - using box-shadow instead of filter blur */}
      <div 
        className="fixed pointer-events-none z-0"
        style={{
          top: '-200px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.05) 40%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
    </>
  );
}
