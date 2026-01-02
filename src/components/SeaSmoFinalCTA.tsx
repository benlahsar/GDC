
import React from 'react';
import { ArrowRight, Zap, Target, MousePointer2 } from 'lucide-react';

export const SeaSmoFinalCTA: React.FC = () => {
  return (
    <section className="relative w-full pt-32 pb-48 overflow-hidden bg-transparent z-10">
        
        {/* Blending Gradient at Top */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#F4F4F5] dark:from-[#000000] to-transparent pointer-events-none"></div>

        {/* Cinematic Background */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-brand-red/[0.04] rounded-full blur-[150px] animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-brand-red/20 bg-brand-red/5 mb-10 backdrop-blur-md shadow-[0_0_20px_rgba(220,38,38,0.1)]">
                <Target size={14} className="text-brand-red animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">READY TO SCALE?</span>
            </div>

            <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-black text-black dark:text-white tracking-tighter uppercase leading-[0.85] mb-12">
                Passez au <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600 drop-shadow-sm">Niveau Supérieur.</span>
            </h2>

            <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed mb-16">
                Ne laissez pas votre budget publicitaire dormir. <br className="hidden md:block"/>
                Activez la machine à leads de <strong className="text-black dark:text-white">Group Digital Concept</strong>.
            </p>

            <div className="relative group inline-block cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-red-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <a 
                    href="#contact-signal"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('contact-signal');
                      if(el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="relative flex items-center gap-6 px-12 py-6 bg-black dark:bg-white text-white dark:text-black rounded-full font-black uppercase tracking-[0.2em] text-xs md:text-sm hover:scale-105 transition-transform shadow-2xl overflow-hidden"
                >
                    <span className="relative z-10">ACTIVER MA CAMPAGNE</span>
                    <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center relative z-10 group-hover:rotate-12 transition-transform">
                        <MousePointer2 size={18} fill="currentColor" />
                    </div>
                    {/* Shine Effect */}
                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine"></div>
                </a>
            </div>
        </div>
        
        {/* Bottom Fade to match Footer */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white dark:from-[#020202] to-transparent pointer-events-none"></div>

        <style>{`
            @keyframes shine {
                100% { left: 125%; }
            }
        `}</style>
    </section>
  );
};
