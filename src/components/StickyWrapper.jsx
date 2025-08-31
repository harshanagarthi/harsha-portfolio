import React, { useEffect, useRef, useState } from 'react';

const StickyWrapper = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [shouldUnstick, setShouldUnstick] = useState(false);
  const stickyRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current || !experienceRef.current) return;

      const stickyTop = stickyRef.current.offsetTop;
      const experienceTop = experienceRef.current.offsetTop;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check if we should start being sticky
      if (scrollY >= stickyTop - 32) { // 32px offset for top padding
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Check if we should unstick (when Experience section comes into view)
      if (scrollY + windowHeight >= experienceTop) {
        setShouldUnstick(true);
      } else {
        setShouldUnstick(false);
      }
    };

    // Find the Experience section
    const findExperienceSection = () => {
      const experienceSection = document.querySelector('[data-section="experience"]');
      if (experienceSection) {
        experienceRef.current = experienceSection;
      }
    };

    // Try to find immediately, then on next tick
    findExperienceSection();
    setTimeout(findExperienceSection, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stickyStyle = isSticky && !shouldUnstick ? {
    position: 'fixed',
    top: '32px',
    left: stickyRef.current?.getBoundingClientRect().left || 0,
    width: stickyRef.current?.offsetWidth || 'auto',
    zIndex: 10
  } : {};

  return (
    <div ref={stickyRef} style={stickyStyle} className="transition-all duration-300">
      {children}
    </div>
  );
};

export default StickyWrapper;
