"use client"
import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Zap, Sparkles } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useRouter } from 'next/navigation';

export const FinalCTA: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const eyeRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
//   const { navigate } = useNavigation();
   const router = useRouter()

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile || !containerRef.current || !eyeRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      eyeRef.current.style.transform = `translate3d(${relX}px, ${relY}px, 0) translate(-50%, -50%)`;
    };

    if (!isMobile) window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
        window.removeEventListener('resize', checkMobile);
        window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F0F0F2] dark:bg-black text-black dark:text-white py-20 md:py-32 transition-colors duration-500"
    >
      
      {/* 1. BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* Grid Floor Effect */}
         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.05))] dark:bg-[linear-gradient(to_bottom,transparent,rgba(255,0,0,0.1))]"></div>
         {!isMobile && (
            <div 
                className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(20,20,20,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.5)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 transform origin-bottom"
                style={{ transform: 'perspective(1000px) rotateX(60deg) scale(2)' }}
            ></div>
         )}

         {/* The "Eye" / Vortex - Static on mobile */}
         <div 
            ref={eyeRef}
            className={`absolute bg-brand-red rounded-full blur-[150px] opacity-[0.08] pointer-events-none ${isMobile ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]' : 'top-0 left-0 w-[600px] h-[600px] will-change-transform'}`}
         ></div>

         <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* 2. MAIN CONTENT LAYER */}
      <div className="relative z-20 container mx-auto px-4 max-w-[1800px] flex flex-col items-center justify-center text-center">
         
         <div className="mb-10 md:mb-16">
             <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md shadow-lg">
                <Sparkles size={14} className="text-brand-red animate-pulse" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-gray-800 dark:text-white/80">
                   Le Futur est Maintenant
                </span>
             </div>
         </div>

         {/* GIANT TYPOGRAPHY */}
         <div className="relative mb-16 md:mb-24 mix-blend-difference w-full">
            <h2 className="flex flex-col items-center leading-[0.85] font-black tracking-tighter text-transparent uppercase select-none">
               <span className="block outline-text text-[15vw] lg:text-[10rem] xl:text-[11rem] transition-all duration-700 group-hover:text-black dark:group-hover:text-white">Votre</span>
               <span className="block text-black dark:text-white text-[15vw] lg:text-[10rem] xl:text-[11rem]">Vision.</span>
               <span className="block outline-text text-[15vw] lg:text-[10rem] xl:text-[11rem] transition-all duration-700">Notre</span>
               <span className="block text-brand-red text-[15vw] lg:text-[10rem] xl:text-[11rem]">Mission.</span>
            </h2>
         </div>

         {/* INTERACTIVE MAGNETIC BUTTON */}
         <button 
            onClick={() => router.push('/contact-page')}
            className="group relative flex items-center justify-center z-30"
         >
            {/* Outer Ring */}
            {!isMobile && <div className="absolute inset-0 rounded-full border border-black/20 dark:border-white/20 scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 animate-pulse-slow"></div>}
            
            {/* Button */}
            <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full bg-black dark:bg-whitetext-white dark:text-black flex items-center justify-center transition-all duration-500 ease-out hover:scale-110 shadow-2xl">
               <div className="relative z-10 flex flex-col items-center gap-1 overflow-hidden">
                  <span className="text-xs md:text-sm font-black uppercase tracking-widest group-hover:-translate-y-12 transition-transform duration-300">Start</span>
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-12 transition-transform duration-300 delay-75" />
                  
                  {/* Hover Reveal (PC Only animation style) */}
                  {!isMobile && (
                    <>
                        <span className="absolute top-full text-xs md:text-sm font-black uppercase tracking-widest group-hover:-translate-y-14 transition-transform duration-300 text-brand-red">Go</span>
                        <Zap className="absolute top-full mt-6 w-5 h-5 md:w-6 md:h-6 text-brand-red group-hover:-translate-y-14 transition-transform duration-300 delay-75" />
                    </>
                  )}
               </div>
            </div>
         </button>

      </div>

      <style>{`
         .outline-text {
            -webkit-text-stroke: 1px rgba(0,0,0,0.8);
            color: transparent;
         }
         .dark .outline-text {
            -webkit-text-stroke: 1px rgba(255,255,255,0.3);
            color: transparent;
         }
      `}</style>
    </section>
  );
};