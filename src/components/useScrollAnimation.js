import { useEffect, useRef } from 'react';

const useScrollAnimation = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once visible, stop watching — never remove the class
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return itemsRef;
};

export default useScrollAnimation;