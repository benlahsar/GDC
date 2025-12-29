"use client"
import React, { useState, useEffect } from 'react';
import { PARTNERS } from '../lib/constants';

export const Partners: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative z-20 py-8 md:py-14 bg-white/90 dark:bg-[#080808]/90 backdrop-blur-xl border-y border-black/5 dark:border-white/5 overflow-hidden">
          
          {/* Viewfinder Overlays (Hidden on mobile for performance) */}
          {!isMobile && (
            <>
              <div className="absolute inset-y-0 left-0 w-32 z-30 bg-gradient-to-r from-white via-white/80 dark:from-[#050505] dark:via-[#050505]/80 to-transparent flex items-center justify-start pl-8 pointer-events-none">
                  <span className="text-brand-red font-mono text-sm font-bold tracking-widest opacity-80">[ + ]</span>
              </div>
              <div className="absolute inset-y-0 right-0 w-32 z-30 bg-gradient-to-l from-white via-white/80 dark:from-[#050505] dark:via-[#050505]/80 to-transparent flex items-center justify-end pr-8 pointer-events-none">
                  <span className="text-brand-red font-mono text-sm font-bold tracking-widest opacity-80">[ + ]</span>
              </div>
            </>
          )}

          {/* Tech lines top/bottom */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>

          {/* Scrolling Content - Standard marquee is usually performance-friendly if simple */}
          <div className={`flex whitespace-nowrap w-max items-center will-change-transform ${!isMobile ? 'animate-scroll' : 'animate-[scroll_40s_linear_infinite]'}`}>
            {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`} 
                className="mx-6 md:mx-16 flex items-center justify-center"
              >
                {/* Dark Mode Logo */}
                <img 
                  src={partner.url} 
                  alt={`${partner.name} logo dark`} 
                  className={`h-6 md:h-12 w-auto object-contain transition-all duration-300 hidden dark:block opacity-40 ${!isMobile ? 'hover:scale-110 hover:opacity-100' : ''}`}
                />
                {/* Light Mode Logo */}
                <img 
                  src={(partner as any).urlLight} 
                  alt={`${partner.name} logo light`} 
                  className={`h-6 md:h-12 w-auto object-contain transition-all duration-300 block dark:hidden opacity-60 ${!isMobile ? 'hover:scale-110 hover:opacity-100' : ''}`}
                />
              </div>
            ))}
          </div>
    </section>
  );
};
