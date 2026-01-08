"use client"

import React, { useState, useEffect } from 'react';
import { Lightbulb, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const DomainFinalCTA: React.FC = () => {
  const t = useTranslations("DomainFinalCTA");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#050505] overflow-hidden flex flex-col items-center justify-center transition-colors duration-500">

      {/* Background Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>

      <div className="relative w-full max-w-[1200px] h-[700px] md:h-[800px] flex justify-center items-end">

        {/* --- THE FUNNEL (BEAM) --- */}
        <div
          className={`absolute top-0 w-full md:w-[80%] h-[85%] z-10 ${isMobile ? 'opacity-40' : ''}`}
          style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 55% 95%, 45% 95%)',
          }}
        >
          {/* Animated Gradient Flow - Static or simple pulse on mobile */}
          <div className={`absolute inset-0 bg-gradient-to-b from-[#a855f7] via-[#ec4899] to-[#6366f1] opacity-90 ${!isMobile ? 'animate-pulse-slow' : 'opacity-60'}`}></div>
          {!isMobile && (
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                backgroundSize: '100% 200%',
                animation: 'flowDown 3s linear infinite'
              }}
            ></div>
          )}
        </div>

        {/* --- FLOATING ELEMENTS (Stars) - Disabled on Mobile --- */}
        {!isMobile && (
          <>
            <Sparkles className="absolute top-[10%] left-[10%] text-purple-500 w-8 h-8 animate-bounce delay-700" />
            <Sparkles className="absolute top-[20%] right-[15%] text-pink-500 w-6 h-6 animate-pulse delay-300" />
            <div className="absolute top-[40%] left-[20%] w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute top-[30%] right-[25%] w-1 h-1 bg-white rounded-full animate-ping delay-500"></div>
          </>
        )}

        {/* --- CENTRAL CONTENT (Inside Funnel) --- */}
        <div className="absolute top-[10%] md:top-[15%] z-20 flex flex-col items-center text-center px-4 w-full">

          {/* Lightbulb Icon */}
          <div className={`mb-6 relative group cursor-pointer ${!isMobile ? 'animate-float' : ''}`}>
            <div className="absolute inset-0 bg-yellow-400 blur-[50px] opacity-40 group-hover:opacity-80 transition-opacity duration-500 rounded-full"></div>
            <div className={`relative w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center shadow-[0_0_30px_rgba(253,224,71,0.6)] ${!isMobile ? 'group-hover:scale-110 transition-transform duration-300' : ''}`}>
              <Lightbulb size={40} className="text-yellow-300 fill-yellow-300/50" strokeWidth={1.5} />
            </div>
            {!isMobile && (
              <div className="absolute -top-2 -right-2 text-yellow-200 animate-pulse">
                <Zap size={20} fill="currentColor" />
              </div>
            )}
          </div>

          {/* Headline */}
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 drop-shadow-xl tracking-tighter leading-[0.9]"
            dangerouslySetInnerHTML={{ __html: t.raw("title").replace(/{br}/g, "<br/>") }}
          />

          {/* CTA Button */}
          <a
            href="#contact"
            className={`
                    group relative px-8 py-4 md:px-10 md:py-5
                    bg-[#1e1b4b] hover:bg-[#312e81]
                    text-white rounded-full
                    font-black uppercase tracking-widest text-xs md:text-sm
                    shadow-[0_0_40px_rgba(79,70,229,0.6)]
                    hover:shadow-[0_0_60px_rgba(79,70,229,0.8)]
                    ${!isMobile ? 'hover:-translate-y-1' : ''} transition-all duration-300
                    flex items-center gap-3 overflow-hidden
                `}
          >
            <span className="relative z-10">{t("cta")}</span>
            <div className={`w-6 h-6 rounded-full bg-white/20 flex items-center justify-center relative z-10 ${!isMobile ? 'group-hover:bg-white group-hover:text-[#1e1b4b]' : ''} transition-colors`}>
              <ArrowRight size={14} className={!isMobile ? "group-hover:-rotate-45 transition-transform duration-300" : ""} />
            </div>
            {/* Button Shine - PC Only */}
            {!isMobile && (
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine"></div>
            )}
          </a>

        </div>

        {/* --- THE CUP (Catching the Flow) --- */}
        <div className="relative z-20 w-[240px] md:w-[320px] h-[140px] md:h-[180px] mb-[-40px] md:mb-[-60px]">

          {/* Cup Body */}
          <div className="
                  w-full h-full
                  bg-gradient-to-b from-cyan-400 to-blue-600
                  rounded-b-[80px] md:rounded-b-[120px]
                  shadow-[0_0_80px_rgba(34,211,238,0.6)]
                  relative overflow-hidden
                  border-b-4 border-r-4 border-l-4 border-cyan-300/30
              ">
            {/* Liquid Surface */}
            <div className="absolute top-0 left-0 w-full h-[20px] bg-cyan-300/50 blur-md"></div>

            {/* Internal Glow/Reflection */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-white/20 rounded-full blur-xl"></div>

            {/* The "Moon" shape inside */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white/10 rounded-full blur-sm border border-white/20 flex items-center justify-center">
              <div className="w-10 h-10 bg-cyan-100 rounded-full -translate-x-2 -translate-y-2 blur-[1px]"></div>
            </div>
          </div>

          {/* Cup Rim */}
          <div className="absolute -top-6 left-0 w-full h-[50px] bg-gradient-to-r from-cyan-300 to-blue-500 rounded-[50%] opacity-90 border-t border-white/40 shadow-inner"></div>

          {/* Splash Particles - Disabled on Mobile */}
          {!isMobile && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full h-20 flex justify-center pointer-events-none">
              <div className="w-1 h-1 bg-cyan-200 rounded-full animate-ping absolute top-4 left-[45%]"></div>
              <div className="w-1 h-1 bg-white rounded-full animate-ping delay-100 absolute top-6 left-[55%]"></div>
              <div className="w-2 h-2 bg-blue-200 rounded-full animate-ping delay-300 absolute top-2 left-[50%]"></div>
            </div>
          )}

        </div>

      </div>

      <style>{`
         @keyframes flowDown {
           0% { background-position: 0% 0%; }
           100% { background-position: 0% 100%; }
         }
         @keyframes shine {
            100% { left: 125%; }
         }
       `}</style>
    </section>
  );
};
