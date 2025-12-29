
import React from 'react';
import { PARTNERS } from '../constants';

export const AppPlatformPartners: React.FC = () => {
  return (
    <section className="relative w-full py-10 md:py-14 bg-white/90 dark:bg-[#080808]/90 backdrop-blur-xl border-y border-black/5 dark:border-white/5 group pause-on-hover cursor-crosshair overflow-hidden mb-12">
          
          {/* Viewfinder Overlays (Static Creative Shape) */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 z-30 bg-gradient-to-r from-white via-white/80 dark:from-[#050505] dark:via-[#050505]/80 to-transparent flex items-center justify-start pl-4 md:pl-8 pointer-events-none">
              <span className="text-brand-red font-mono text-xs md:text-sm font-bold tracking-widest opacity-80">[ + ]</span>
          </div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 z-30 bg-gradient-to-l from-white via-white/80 dark:from-[#050505] dark:via-[#050505]/80 to-transparent flex items-center justify-end pr-4 md:pr-8 pointer-events-none">
              <span className="text-brand-red font-mono text-xs md:text-sm font-bold tracking-widest opacity-80">[ + ]</span>
          </div>

          {/* Tech lines top/bottom */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>

          {/* Scrolling Content */}
          <div className="flex animate-scroll whitespace-nowrap w-max items-center will-change-transform">
            {/* Quadruple duplication for smooth infinite loop even on wide screens */}
            {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`} 
                className="mx-8 md:mx-16 flex items-center justify-center transition-opacity duration-300"
              >
                {/* Dark Mode Logo */}
                <img 
                  src={partner.url} 
                  alt={`${partner.name} logo dark`} 
                  className="h-8 md:h-10 w-auto object-contain transform transition-transform duration-300 hover:scale-110 hidden dark:block opacity-40 hover:opacity-100 grayscale hover:grayscale-0"
                />
                {/* Light Mode Logo */}
                <img 
                  src={(partner as any).urlLight} 
                  alt={`${partner.name} logo light`} 
                  className="h-8 md:h-10 w-auto object-contain transform transition-transform duration-300 hover:scale-110 block dark:hidden opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </div>
    </section>
  );
};
