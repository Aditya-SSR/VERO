import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
  
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5, 
        ease: "power3.out"
      });
    };

 
    const handleHover = () => {
      const targets = document.querySelectorAll('a, button, .card');
      
      targets.forEach(target => {
        target.addEventListener('mouseenter', () => {
          gsap.to(cursorRef.current, { scale: 3, backgroundColor: 'white' });
        });
        target.addEventListener('mouseleave', () => {
          gsap.to(cursorRef.current, { scale: 1, backgroundColor: '#D4AF37' });
        });
      });
    };

    window.addEventListener('mousemove', moveCursor);
    handleHover();

    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-[#D4AF37] rounded-full pointer-events-none z-99999 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
    />
  );
};

export default CustomCursor;