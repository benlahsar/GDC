"use client";
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[49]
        w-12 h-12 md:w-14 md:h-14
        rounded-2xl
        flex items-center justify-center
        bg-white/70 dark:bg-[#050505]/70
        backdrop-blur-xl
        border border-black/5 dark:border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        group
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}
        hover:scale-110 hover:-translate-y-2
        hover:bg-white dark:hover:bg-black
        hover:border-brand-red/30 dark:hover:border-brand-red/30
        hover:shadow-2xl
      `}
      aria-label="Retour en haut"
    >
      <div className="relative z-10">
        <ArrowUp 
          size={24} 
          className="text-gray-800 dark:text-gray-200 group-hover:text-brand-red transition-colors duration-300" 
          strokeWidth={2}
        />
      </div>
      
      {/* Subtle Hover Gradient Bloom */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-red/0 to-brand-red/0 group-hover:from-brand-red/5 group-hover:to-brand-red/10 transition-all duration-500"></div>
    </button>
  );
};
