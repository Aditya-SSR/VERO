import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LuxuryFooterAgent = () => {
  // Refs for animation targets
  const headRef = useRef(null);
  const eyesRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normalized mouse position (-1 to 1 range)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      // Animate the head group (subtle movement)
      gsap.to(headRef.current, {
        x: x * 8, // Move horizontally
        y: y * 5, // Move vertically slightly less
        rotation: x * 3, // Slight tilt towards mouse
        duration: 0.7,
        ease: 'power2.out',
      });

      // Animate the eyes group (faster movement for parallax effect)
      gsap.to(eyesRef.current, {
        x: x * 6,
        y: y * 6,
        duration: 0.2,
        ease: 'power1.out',
      });
    };

    // Add and clean up event listener
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    // Tailwind v4 container: Small size (w-24 h-24), centered
    <div className="w-24 h-24 flex items-center justify-center pointer-events-none">
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full overflow-visible drop-shadow-sm"
        style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))' }} // Slight shadow to lift off the navy bg
      >
        {/* --- Static Body --- */}
        <g className="suit-body">
           {/* Suit Jacket Main Body - Off-white fill, bright Gold stroke for definition against navy */}
          <path d="M 15 100 C 15 60, 85 60, 85 100 Z" fill="#FAF9F6" stroke="#ffd700" strokeWidth="1.5" />
          
          {/* Crisp White Dress Shirt */}
          <path d="M 35 65 L 50 90 L 65 65 L 50 55 Z" fill="#FFFFFF" />
          
          {/* Suit Lapels - Off-white with Gold outline */}
          <path d="M 15 100 L 35 65 L 42 85 Z" fill="#FAF9F6" stroke="#ffd700" strokeWidth="1" />
          <path d="M 85 100 L 65 65 L 58 85 Z" fill="#FAF9F6" stroke="#ffd700" strokeWidth="1" />
          
          {/* Prominent Gold Silk Tie */}
          <path d="M 47 65 L 53 65 L 56 90 L 50 100 L 44 90 Z" fill="#ffd700" />
          
          {/* Gold Pocket Square Detail */}
          <path d="M 68 82 L 78 80 L 76 90 Z" fill="#ffd700" />
        </g>

        {/* --- Animated Head Group --- */}
        <g ref={headRef}>
          {/* Head Shape - Off-white fill, Gold stroke */}
          <circle cx="50" cy="42" r="20" fill="#FAF9F6" stroke="#ffd700" strokeWidth="1.5" />
          
          {/* Hair - Styled, using gold stroke to define shape */}
          <path d="M 32 38 Q 30 15, 50 15 Q 70 15, 68 38 C 68 25, 32 25, 32 38 Z" fill="#FAF9F6" stroke="#ffd700" strokeWidth="1" />
          
          {/* Luxury Gold Glasses Frames */}
          <g className="glasses" stroke="#ffd700" strokeWidth="2" fill="none">
              <rect x="33" y="37" width="14" height="10" rx="3" />
              <rect x="53" y="37" width="14" height="10" rx="3" />
              <line x1="47" y1="42" x2="53" y2="42" strokeWidth="2" />
          </g>
          
          {/* Tracking Eyes Group (Moves inside glasses) */}
          <g ref={eyesRef}>
            {/* Using a dark charcoal for eyes for focus, rather than pure black */}
            <circle cx="40" cy="42" r="2.5" fill="#222222" />
            <circle cx="60" cy="42" r="2.5" fill="#222222" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default LuxuryFooterAgent;