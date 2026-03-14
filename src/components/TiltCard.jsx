import React, { useRef, useEffect } from 'react';
import '../styles/Tilt.css';

const TiltCard = React.forwardRef(({ children, className = '', style = {} }, ref) => {
  const tiltRef = useRef(null);
  const handleRef = (node) => {
    tiltRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  useEffect(() => {
    const el = tiltRef.current;
    if (!el) return;
    
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPct = x / rect.width - 0.5;
      const yPct = y / rect.height - 0.5;
      
      const tiltX = (yPct * 15).toFixed(2);
      const tiltY = (xPct * -15).toFixed(2);
      
      el.style.setProperty('--tilt-x', `${tiltX}deg`);
      el.style.setProperty('--tilt-y', `${tiltY}deg`);
      
      const glareX = x / rect.width * 100;
      const glareY = y / rect.height * 100;
      el.style.setProperty('--glare-x', `${glareX}%`);
      el.style.setProperty('--glare-y', `${glareY}%`);
    };

    const handleMouseLeave = () => {
      el.style.setProperty('--tilt-x', '0deg');
      el.style.setProperty('--tilt-y', '0deg');
      el.style.setProperty('--glare-x', '50%');
      el.style.setProperty('--glare-y', '50%');
      el.dataset.tiltActive = "false";
    };
    
    const handleMouseEnter = () => {
      el.dataset.tiltActive = "true";
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div 
      ref={handleRef} 
      className={`tilt-card ${className}`} 
      style={{ '--tilt-x': '0deg', '--tilt-y': '0deg', ...style }}
    >
      <div className="tilt-content">
        {children}
      </div>
      <div className="tilt-glare" />
    </div>
  );
});

TiltCard.displayName = 'TiltCard';

export default TiltCard;
