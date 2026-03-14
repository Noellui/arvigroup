import React, { useEffect, useRef, useState } from 'react';
import '../styles/CustomCursor.css';

const CustomCursor = () => {
  const spotlightRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    
    if (window.matchMedia("(hover: none)").matches) return;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateSpotlight = () => {
      // Smooth lerp to trail softly behind the actual mouse
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;
      
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      
      requestAnimationFrame(animateSpotlight);
    };
    
    const rafId = requestAnimationFrame(animateSpotlight);

    const handleMouseOver = (e) => {
      if (
        e.target.tagName?.toLowerCase() === 'button' ||
        e.target.tagName?.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.closest('.service-card') ||
        e.target.closest('.about-card') ||
        e.target.closest('.review-bubble') ||
        e.target.closest('.tilt-card')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia("(hover: none)").matches) return null;

  return (
    <div ref={spotlightRef} className={`custom-cursor-spotlight ${isHovering ? 'hovering' : ''}`}></div>
  );
};

export default CustomCursor;
