import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef('');

  // Listen for hash changes and scroll to element
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash;
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}