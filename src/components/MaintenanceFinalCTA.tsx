"use client"

import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, Sparkles, Zap, Shield } from 'lucide-react';

export const MaintenanceFinalCTA: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative w-full py-32 md:py-56 bg-[#F4F4F5] dark:bg-[#000000] overflow-hidden transition-colors duration-500">
      
      {/* Abstract Artistic Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* The "Portal" Glow */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-brand-red/[0.07] rounded-full blur-[180px] ${!isMobile ? 'animate-pulse-slow' : 'opacity-30'}`}></div>
        
        {/* Floating Tech Elements */}
        <div className="absolute top-20 left-[5%] w-px h-60 bg-gradient-to-b from-transparent via-brand-red to-transparent opacity-20"></div>
        <div className="absolute bottom-20 right-[5%] w-px h-80 bg-gradient-to-t from-transparent via-brand-red to-transparent opacity-20"></div>
        
        {/* Grainy Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative group p-1.5 rounded-[60px] overflow-hidden transition-all duration-700">
            {/* Animated Border Gradient - Desktop only */}
            {!isMobile && (
              <div className="absolute inset-0 bg-gradient-to-r from-brand-red via-red-500 to-brand-red transition-opacity duration-700 blur-3xl opacity-20 group-hover:opacity-100"></div>
            )}
            
            <div className="relative bg-white dark:bg-[#080808] rounded-[58px] p-12 md:p-32 text-center border border-black/5 dark:border-white/10 shadow-2xl">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-10 backdrop-blur-md">
                <Sparkles size={18} className={`text-brand-red ${!isMobile ? 'animate-pulse' : ''}`} />
                <span className="text-xs font-black uppercase tracking-[0.4em] text-black dark:text-white">GDC Prestige Elite</span>
              </div>

              {/* Massive Headline */}
              <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-black text-black dark:text-white tracking-tighter leading-[0.85] mb-12">
                Votre site mérite <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-500 to-red-700">l'Elite Digitale.</span>
              </h2>

              <p className="text-xl md:text-3xl text-gray-600 dark:text-gray-400 mb-16 max-w-4xl mx-auto font-light leading-relaxed">
                Ne laissez pas la technique freiner vos ambitions. Confiez votre écosystème à nos experts pour une performance et une sécurité de classe mondiale.
              </p>

              {/* Big Action Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
                <a 
                  href="#contact" 
                  className={`group relative px-16 py-8 bg-black dark:bg-white text-white dark:text-black rounded-3xl font-black uppercase tracking-widest text-sm md:text-base overflow-hidden transition-all flex items-center gap-6 shadow-xl ${!isMobile ? 'hover:scale-105 hover:shadow-[0_30px_70px_-15px_rgba(220,38,38,0.6)]' : 'active:scale-95'}`}
                >
                  <span>DISCUTER D'UN PROJET</span>
                  <div className={`w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white transition-transform duration-500 ${!isMobile ? 'group-hover:rotate-45' : ''}`}>
                    <ArrowRight size={22} />
                  </div>
                  
                  {/* Internal Shine - PC Only */}
                  {!isMobile && (
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
                  )}
                </a>
              </div>

              {/* Expanded Meta Info Bar */}
              <div className={`pt-16 border-t border-black/5 dark:border-white/5 flex flex-wrap justify-center gap-12 md:gap-24 transition-all duration-700 ${!isMobile ? 'opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100' : 'opacity-80'}`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-red/10 rounded-2xl">
                    <Shield size={24} className="text-brand-red" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-black uppercase tracking-widest">Sécurité</span>
                    <span className="text-[10px] text-gray-500 uppercase font-bold">100% Infaillible</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-red/10 rounded-2xl">
                    <Zap size={24} className="text-brand-red" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-black uppercase tracking-widest">Performance</span>
                    <span className="text-[10px] text-gray-500 uppercase font-bold">Optimisation PageSpeed</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-red/10 rounded-2xl">
                    <MessageSquare size={24} className="text-brand-red" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-black uppercase tracking-widest">Support</span>
                    <span className="text-[10px] text-gray-500 uppercase font-bold">Conseiller Dédié</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};