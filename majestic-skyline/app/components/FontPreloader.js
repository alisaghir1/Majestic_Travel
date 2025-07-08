'use client';

import { useEffect } from 'react';

export default function FontPreloader() {
  useEffect(() => {
    // Preload Recoleta font
    const link1 = document.createElement('link');
    link1.rel = 'preload';
    link1.href = '/fonts/Recoleta.otf';
    link1.as = 'font';
    link1.type = 'font/otf';
    link1.crossOrigin = '';
    document.head.appendChild(link1);

    // Preload Abel font
    const link2 = document.createElement('link');
    link2.rel = 'preload';
    link2.href = '/fonts/Abel.ttf';
    link2.as = 'font';
    link2.type = 'font/ttf';
    link2.crossOrigin = '';
    document.head.appendChild(link2);

    // Cleanup function
    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, []);

  return null; // This component doesn't render anything
}
